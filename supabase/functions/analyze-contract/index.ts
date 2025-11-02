import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
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
      headers: { ...corsHeaders, "Content-Type": "application/json" },
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
