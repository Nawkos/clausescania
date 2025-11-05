import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.78.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Rate limiting configuration - generous for development/testing
const RATE_LIMIT_WINDOW_HOURS = 1;
const RATE_LIMIT_MAX_REQUESTS = 50; // Increased to 50 per hour for testing

async function checkRateLimit(ip: string): Promise<{ allowed: boolean; remaining: number }> {
  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  
  if (!supabaseUrl || !supabaseServiceKey) {
    console.error("[INTERNAL] Supabase configuration missing");
    return { allowed: true, remaining: RATE_LIMIT_MAX_REQUESTS }; // Fail open in case of config issues
  }

  const supabase = createClient(supabaseUrl, supabaseServiceKey);
  const endpoint = "analyze-contract";
  const windowStart = new Date(Date.now() - RATE_LIMIT_WINDOW_HOURS * 60 * 60 * 1000);

  try {
    // Check existing rate limit record
    const { data: existingLimit, error: fetchError } = await supabase
      .from("rate_limits")
      .select("*")
      .eq("ip_address", ip)
      .eq("endpoint", endpoint)
      .single();

    if (fetchError && fetchError.code !== "PGRST116") {
      // PGRST116 = no rows found, which is fine
      console.error("[INTERNAL] Rate limit check error:", fetchError);
      return { allowed: true, remaining: RATE_LIMIT_MAX_REQUESTS };
    }

    if (existingLimit) {
      const limitWindowStart = new Date(existingLimit.window_start);
      
      // Check if we're still within the same window
      if (limitWindowStart > windowStart) {
        if (existingLimit.request_count >= RATE_LIMIT_MAX_REQUESTS) {
          return { allowed: false, remaining: 0 };
        }
        
        // Increment counter
        const { error: updateError } = await supabase
          .from("rate_limits")
          .update({ 
            request_count: existingLimit.request_count + 1 
          })
          .eq("id", existingLimit.id);

        if (updateError) {
          console.error("[INTERNAL] Rate limit update error:", updateError);
        }

        return { 
          allowed: true, 
          remaining: RATE_LIMIT_MAX_REQUESTS - existingLimit.request_count - 1 
        };
      } else {
        // Window expired, reset counter
        const { error: resetError } = await supabase
          .from("rate_limits")
          .update({ 
            request_count: 1,
            window_start: new Date().toISOString()
          })
          .eq("id", existingLimit.id);

        if (resetError) {
          console.error("[INTERNAL] Rate limit reset error:", resetError);
        }

        return { allowed: true, remaining: RATE_LIMIT_MAX_REQUESTS - 1 };
      }
    } else {
      // First request from this IP
      const { error: insertError } = await supabase
        .from("rate_limits")
        .insert({
          ip_address: ip,
          endpoint: endpoint,
          request_count: 1,
          window_start: new Date().toISOString()
        });

      if (insertError) {
        console.error("[INTERNAL] Rate limit insert error:", insertError);
      }

      return { allowed: true, remaining: RATE_LIMIT_MAX_REQUESTS - 1 };
    }
  } catch (error) {
    console.error("[INTERNAL] Rate limit exception:", error);
    return { allowed: true, remaining: RATE_LIMIT_MAX_REQUESTS };
  }
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limiting check
    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() 
      || req.headers.get("x-real-ip") 
      || "unknown";
    
    const { allowed, remaining } = await checkRateLimit(clientIp);
    
    if (!allowed) {
      return new Response(
        JSON.stringify({ 
          error: `Rate limit exceeded. You can analyze up to ${RATE_LIMIT_MAX_REQUESTS} contracts per hour. Please try again later.` 
        }), 
        {
          status: 429,
          headers: { 
            ...corsHeaders, 
            "Content-Type": "application/json",
            "X-RateLimit-Limit": RATE_LIMIT_MAX_REQUESTS.toString(),
            "X-RateLimit-Remaining": "0",
            "X-RateLimit-Reset": new Date(Date.now() + RATE_LIMIT_WINDOW_HOURS * 60 * 60 * 1000).toISOString()
          },
        }
      );
    }

    const requestBody = await req.json();
    
    // Validate input with Zod
    const contractSchema = z.object({
      contractText: z.string()
        .min(10, "Contract text is too short (minimum 10 characters)")
        .max(100000, "Contract text exceeds maximum length (100,000 characters)")
        .trim()
        .refine(
          (text) => !/[\x00-\x08\x0B\x0C\x0E-\x1F]/.test(text),
          "Contract text contains invalid control characters"
        ),
      contractType: z.string()
        .min(1, "Contract type is required")
        .max(50, "Contract type is too long")
        .trim()
    });

    const validationResult = contractSchema.safeParse(requestBody);
    
    if (!validationResult.success) {
      const errorMessage = validationResult.error.errors[0]?.message || "Invalid input";
      return new Response(JSON.stringify({ error: errorMessage }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { contractText, contractType } = validationResult.data;
    
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt = `You are a legal contract analyst. Analyze this contract thoroughly and identify ALL risky clauses, ambiguous terms, and missing protections.

Return a JSON response with this EXACT structure:
{
  "overallScore": number (0-100, where 100 is safest),
  "riskLevel": "safe" | "caution" | "danger",
  "alerts": [
    {
      "id": string,
      "severity": "critical" | "moderate" | "attention",
      "clauseNumber": string,
      "page": number,
      "title": string (short, e.g., "Intellectual Property Rights"),
      "excerpt": string (the problematic text, max 100 words),
      "problem": string (explain why this is risky, 2-3 sentences),
      "recommendation": string (specific negotiation advice, 2-3 sentences)
    }
  ],
  "missingClauses": [string],
  "marketComparison": {
    "percentile": number (0-100, your score vs market),
    "averageScore": number,
    "bestScore": number
  },
  "contractType": string
}

Analyze for these specific risks:
- Unfair termination clauses
- Excessive penalties
- One-sided IP rights
- Vague payment terms
- Liability imbalances
- Missing protections
- Ambiguous language
- Unfavorable jurisdiction
- Auto-renewal traps
- Non-compete overreach`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: `Contract Type: ${contractType}\n\nContract Text:\n${contractText}` }
        ],
        response_format: { type: "json_object" }
      }),
    });

    if (!response.ok) {
      // Log detailed errors server-side only (not exposed to client)
      console.error("[INTERNAL] AI gateway error:", {
        status: response.status,
        statusText: response.statusText,
        timestamp: new Date().toISOString()
      });
      
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Service is currently busy. Please try again in a few moments." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Service temporarily unavailable. Please contact support." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      
      // Generic error message to client
      return new Response(JSON.stringify({ error: "Unable to process your request. Please try again later." }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await response.json();
    const analysisResult = JSON.parse(data.choices[0].message.content);

    return new Response(JSON.stringify(analysisResult), {
      headers: { 
        ...corsHeaders, 
        "Content-Type": "application/json",
        "X-RateLimit-Limit": RATE_LIMIT_MAX_REQUESTS.toString(),
        "X-RateLimit-Remaining": remaining.toString()
      },
    });
  } catch (error) {
    // Log detailed error server-side only
    console.error("[INTERNAL] Error in analyze-contract function:", {
      error: error instanceof Error ? error.message : "Unknown error",
      stack: error instanceof Error ? error.stack : undefined,
      timestamp: new Date().toISOString()
    });
    
    // Return generic error to client
    return new Response(JSON.stringify({ error: "An error occurred while analyzing your contract. Please try again." }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
