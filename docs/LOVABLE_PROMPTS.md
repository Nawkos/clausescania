# Lovable Prompts Documentation

**Project:** ClauseScan AI  
**Development Period:** November 2-4, 2025  
**Platform:** Lovable.dev  
**AI Assistant Used:** Lovable AI (with Claude/GPT backend)

---

## Purpose of This Document

As required by the course assignment:
> "In your deliverables, show us where and how you used such tools by reporting the prompts used."

This document provides complete transparency about how we used AI tools (specifically Lovable AI assistant) to build ClauseScan AI.

---

## Table of Contents

1. [Initial Setup & Configuration](#1-initial-setup)
2. [Core Application Prompts](#2-core-application)
3. [UI/UX Enhancement Prompts](#3-ui-ux-enhancements)
4. [Documentation & Credits Prompts](#4-documentation-credits)
5. [Performance & Polish Prompts](#5-performance-polish)
6. [Prompt Engineering Strategy](#6-prompt-strategy)

---

## 1. Initial Setup & Configuration

### Prompt 1.1: Project Initialization
**Date:** November 2, 2025, 16:51  
**Purpose:** Create the foundational application structure

**Full Prompt:**
```
Create "ClauseScan AI" - A Contract Risk Analysis Web Application

═══════════════════════════════════════════════════════════════════

🎯 CORE CONCEPT: 
Build a contract analysis tool similar to Yuka (food scoring app) but for 
legal contracts. Users upload contracts (PDF/DOCX/text) and receive instant 
risk assessment with color-coded alerts (Green/Orange/Red) highlighting 
dangerous clauses.

═══════════════════════════════════════════════════════════════════

📱 APPLICATION STRUCTURE:

1. HOMEPAGE
───────────
Header:
- App logo: "ClauseScan AI" with shield icon
- Tagline: "The Yuka for Contracts - Scan Before You Sign"
- Navigation: Home | How it Works | Examples | My Contracts

Hero Section:
- Large heading: "Don't Get Trapped by Hidden Clauses"
- Subheading: "AI-powered contract analysis in 30 seconds"
- Upload zone with two options:
  * Drag & drop area (dashed border, cloud icon)
  * "Choose File" button
- Accepted formats badge: "PDF, DOCX, TXT"
- Live statistics counter:
  * "12,847 contracts analyzed"
  * "€4.2M in penalties avoided"
  * "94% satisfaction rate"

[... full prompt continued with all specifications ...]
```

**Result:** Complete homepage with upload functionality

**AI Decisions Made:**
- Lovable chose React + TypeScript as framework
- Suggested Tailwind CSS for styling
- Recommended shadcn/ui for components
- Auto-configured Supabase backend

---

### Prompt 1.2: AI Backend Integration
**Date:** November 2, 2025, 16:57  
**Purpose:** Enable Lovable Cloud and AI models

**Prompt:**
```
Enable Lovable Cloud with AI capabilities.

Use Google Gemini 2.5 Flash as the primary AI model for contract analysis.

Configure the backend to:
1. Accept uploaded contract text
2. Send to Gemini with analysis prompt
3. Return structured JSON with risk score and alerts
```

**Result:** Backend configured with AI analysis capability

**AI Configuration:**
- Model: google/gemini-2.5-flash
- Context window: 1M tokens
- Response format: Structured JSON
- No API key required (Lovable handles auth)

---

## 2. Core Application Prompts

### Prompt 2.1: Analysis Results Page
**Date:** November 2, 2025, 17:15  
**Purpose:** Create the results display after analysis

**Prompt:**
```
Add the results page to ClauseScan AI:

RESULTS PAGE:
- Show after upload completes
- Top card with Yuka-style score:
  * Large circular progress (0-100)
  * Color changes: 0-40 Red, 41-70 Orange, 71-100 Green
  * Risk level text: "DANGER", "VIGILANCE", "SAIN"
  * Alert count breakdown by severity

- Alert Categories section:
  * 🔴 Critical Alerts (expandable cards)
  * 🟠 Moderate Alerts (expandable cards)  
  * 🟡 Attention Points (expandable cards)

- Each alert card shows:
  * Clause number and page
  * Brief description (1 line)
  * Expand button → full details:
    - ❌ Problem explanation
    - ✅ Suggested negotiation point
    - 📍 Location in document

[... continued ...]
```

**Result:** Professional results page with animated score reveal

**AI Improvements Suggested:**
- Added stagger animations for cards
- Implemented smooth expand/collapse
- Added hover effects
- Optimized mobile layout

---

### Prompt 2.2: AI Analysis Prompt Engineering
**Date:** November 2, 2025, 17:30  
**Purpose:** Design the prompt sent to Gemini for contract analysis

**Prompt:**
```
Configure the AI analysis edge function with this prompt to Gemini:

"You are a legal contract analyst. Analyze this contract thoroughly 
and identify ALL risky clauses, ambiguous terms, and missing protections.

Contract Type: {detected_type}
Contract Text: {contract_text}

Return a JSON response with this EXACT structure:
{
  "overallScore": number (0-100, where 100 is safest),
  "riskLevel": "safe" | "caution" | "danger",
  "alerts": [
    {
      "severity": "critical" | "moderate" | "attention",
      "clauseNumber": string,
      "page": number,
      "title": string,
      "excerpt": string,
      "problem": string,
      "recommendation": string
    }
  ],
  "missingClauses": [string],
  "marketComparison": {
    "percentile": number,
    "averageScore": number
  }
}

Analyze for these specific risks:
- Unfair termination clauses
- Excessive penalties
- One-sided IP rights
- Vague payment terms
- Liability imbalances
- Missing protections
[...]"
```

**Result:** Highly accurate AI analysis with structured output

**Prompt Engineering Techniques Used:**
- Clear role definition ("You are a legal contract analyst")
- Explicit output format (JSON schema)
- Specific risk categories to check
- Examples of good vs. bad clauses
- Scoring guidelines

---

## 3. UI/UX Enhancement Prompts

### Prompt 3.1: Design System Improvements
**Date:** November 2, 2025, 18:00  
**Purpose:** Enhance visual design and user experience

**Prompt:**
```
Enhance the ClauseScan AI visual design and user experience:

HOMEPAGE IMPROVEMENTS:
- Make the hero section more impactful with a gradient background 
  (blue to purple)
- Add animated floating icons (shield, document, checkmark) in background
- Improve the upload dropzone:
  * Add a pulsing border animation
  * Show preview icon when hovering
  * Better visual feedback on drag-over

[... continued with all UI improvements ...]

GENERAL UI POLISH:
- Add smooth page transitions (fade in/out)
- Improve button hover effects (subtle scale + shadow)
- Add skeleton loaders instead of basic loading spinner
- Make all cards have consistent rounded corners (16px)
- Add subtle glassmorphism effect to main cards
```

**Result:** Polished, professional interface with smooth animations

**Lovable's Creative Decisions:**
- Chose specific gradient angles
- Added particle effects
- Implemented micro-interactions
- Optimized animation timings

---

### Prompt 3.2: AI Technology Showcase
**Date:** November 2, 2025, 19:30  
**Purpose:** Prominently display AI capabilities

**Prompt:**
```
Transform ClauseScan AI to prominently showcase AI capabilities throughout:

HOMEPAGE AI VISIBILITY:
1. Update the tagline to: "AI-Powered Contract Analysis in 30 Seconds"
   - Add animated "⚡ Powered by AI" badge next to logo
   - Make it pulse with gradient animation

2. Add "AI Technology" section on homepage with 3 cards:
   
   Card 1:
   🧠 Google Gemini 2.5 Flash
   "Latest multimodal AI model"
   "Trained on millions of legal documents"
   
   Card 2:
   📊 Legal-BERT NLP
   "Specialized legal language processing"
   "Identifies clause patterns & risks"
   
   Card 3:
   🔍 Real-time Analysis
   "10,000+ risk patterns detected"
   "Benchmarked against industry standards"

[... continued ...]
```

**Result:** Clear AI prominence throughout application

---

### Prompt 3.3: Move AI Section to Bottom
**Date:** November 2, 2025, 20:00  
**Purpose:** Adjust layout based on user flow

**Prompt:**
```
Before starting, please move the "ADVANCED AI TECHNOLOGY" section 
(with the 3 cards: Gemini, Legal-BERT, Real-time Analysis) to the 
bottom of the homepage, just above the footer.

Keep it visible but less prominent on first load.
```

**Result:** Better homepage hierarchy with AI info still accessible

**Design Rationale:**
- Keep upload as primary CTA
- Move technical details lower
- Maintain professional credibility

---

## 4. Documentation & Credits Prompts

### Prompt 4.1: About Page with Credits
**Date:** November 2, 2025, 20:30  
**Purpose:** Add comprehensive project information and citations

**Prompt:**
```
Add comprehensive credits, data sources, and reproducibility information:

CREATE NEW "ABOUT" PAGE:

Section 1: PROJECT INFORMATION
```
📋 ClauseScan AI - Contract Risk Analysis Tool

Created by: [Your Name/Team]
Academic Project: Advanced AI Algorithms (AAA)
Institution: [Your School]
Date: November 2025

GitHub Repository: [Link]
Live Demo: [URL]
```

Section 2: AI MODELS & TOOLS USED
```
🤖 ARTIFICIAL INTELLIGENCE

Primary Analysis:
• Google Gemini 2.5 Flash (via Lovable AI)
  - Purpose: Main contract analysis engine
  - Provider: Google DeepMind
  - Access: Lovable Cloud API
  
[... detailed model information ...]
```

Section 4: DATA SOURCES & CITATIONS
[... all sources with proper attribution ...]

Section 5: REPRODUCIBILITY GUIDE
[... step-by-step setup instructions ...]

[... continued with all sections ...]
```

**Result:** Professional about page with full transparency

**Citations Included:**
- Google Gemini 2.5 Flash
- Legal-BERT (Hugging Face)
- Kaggle datasets
- All npm packages
- Development tools
- Design resources

---

### Prompt 4.2: GitHub Integration
**Date:** November 2, 2025, 20:45  
**Purpose:** Add prominent GitHub links

**Prompt:**
```
Add "View on GitHub" button in header navigation.

Update footer with proper citations:
- AI Models: Google Gemini, Legal-BERT
- Development Platform: Lovable.dev
- UI Components: shadcn/ui
- Icons: Lucide React

Link all to respective documentation/repos.
```

**Result:** Clear attribution and open-source accessibility

---

## 5. Performance & Polish Prompts

### Prompt 5.1: Documentation Pages
**Date:** November 3, 2025, 09:00  
**Purpose:** Add user-facing documentation

**Prompt:**
```
Perfect! Let's prioritize features that maximize demo impact.

Please implement:

1. FIRST: From Prompt #7 - Add these documentation pages:
   - "Getting Started" guide (step-by-step for users)
   - "How It Works" technical explanation 
   - Detailed "AI Models" page (Gemini + Legal-BERT specs)
   - Basic "Developer Setup" instructions

2. THEN: From Prompt #5 - UI polish:
   - Add micro-interactions (button hover effects, smooth animations)
   - Improve loading states (skeleton screens instead of spinners)
   - Better empty/error states with friendly messages
   - Mobile touch optimization

3. FINALLY: From Prompt #6 - Demo features:
   - "Examples" page with 5 pre-analyzed sample contracts
   - Animated statistics dashboard on homepage
   - "Features" showcase section

Skip the complex features from Prompt #3 for now - focus on 
polish and presentation.

Let's start with #1 (documentation pages).
```

**Result:** Complete documentation suite

---

### Prompt 5.2: Error Handling & Edge Cases
**Date:** November 3, 2025, 10:00  
**Purpose:** Improve reliability

**Prompt:**
```
Add comprehensive error handling:

1. File Upload Errors:
   - File too large (>10MB): "File exceeds 10MB. Please upload smaller file."
   - Invalid format: "Please upload PDF, DOCX, or TXT files only."
   - Corrupted file: "Could not read document. Please try another file."
   - Network error: "Upload failed. Check your connection."

2. Analysis Errors:
   - API timeout: "Analysis taking longer than expected. Retry?"
   - AI error: "Analysis failed. Please try again."
   - Parse error: "Could not extract text. Ensure file isn't password-protected."

3. Export Errors:
   - PDF generation failed
   - Save to browser failed

All errors should:
- Show friendly message
- Provide suggested action
- Allow retry
- Log for debugging
```

**Result:** Robust error handling throughout app

---

### Prompt 5.3: Mobile Optimization
**Date:** November 3, 2025, 11:00  
**Purpose:** Ensure mobile experience is excellent

**Prompt:**
```
Optimize ClauseScan AI for mobile devices:

RESPONSIVE IMPROVEMENTS:
1. Upload zone: Full-width on mobile, larger tap target
2. Score circle: Scaled appropriately for small screens
3. Alert cards: Stack vertically, easy to expand
4. Navigation: Hamburger menu on mobile
5. Touch targets: Minimum 44x44px for all buttons

MOBILE-SPECIFIC FEATURES:
- Pull to refresh (optional)
- Swipe gestures for navigation
- Mobile camera option for document upload
- Bottom action sheet instead of modals

TEST ON:
- iPhone SE (smallest screen)
- Standard iPhone/Android
- Tablets (iPad, Android tablets)
```

**Result:** Fully responsive mobile experience

---

## 6. Prompt Engineering Strategy

### Our Approach to Prompting Lovable

**1. Specificity Over Vagueness**
- ❌ Bad: "Make it look better"
- ✅ Good: "Add 16px border radius to all cards, use #2563EB for primary color"

**2. Structured Format**
- Always use clear sections with headers
- Provide examples when possible
- Include exact dimensions/colors/text

**3. Iterative Refinement**
- Start with core functionality
- Add features incrementally
- Polish in separate prompts

**4. Context Preservation**
- Reference previous prompts when building on features
- Maintain consistency in terminology
- Link related changes

**5. Design System First**
- Establish colors, spacing, typography early
- Maintain consistency across prompts
- Reuse component patterns

---

## Prompt Statistics

**Total Lovable Prompts:** 12 major prompts + ~8 minor refinements

**Breakdown by Category:**
- Initial Setup: 2 prompts
- Core Features: 3 prompts
- UI/UX: 4 prompts
- Documentation: 2 prompts
- Polish & Optimization: 3 prompts
- Bug Fixes: ~8 minor prompts

**Average Prompt Length:** 300-800 words

**AI Model Used by Lovable:** 
- Frontend generation: GPT-4 or Claude 3.5
- Code completion: Specialized code model
- Design decisions: AI-assisted with human validation

---

## Lessons Learned

### What Worked Well ✅

1. **Detailed Specifications**
   - Providing exact requirements led to better results
   - Examples helped AI understand intent
   - Visual descriptions (mockups in text) were effective

2. **Iterative Approach**
   - Building features one at a time
   - Testing between prompts
   - Refining based on results

3. **Structured Prompts**
   - Clear sections with headers
   - Bullet points for lists
   - Code blocks for technical specs

4. **Design System First**
   - Establishing colors/typography early
   - Consistency across prompts
   - Easier to maintain

### What Could Improve 🔄

1. **Initial Clarity**
   - Some features required multiple refinement prompts
   - Could have been more specific upfront

2. **Mobile Considerations**
   - Should have specified mobile requirements from start
   - Added mobile optimization later

3. **Performance**
   - Loading optimization should have been earlier priority
   - Added later as polish

4. **Testing**
   - Should have requested more edge case handling initially
   - Added error states in separate prompt

---

## AI Tool Usage Summary

### Development Phase

**Lovable AI Assistant (Primary Tool)**
- Purpose: Full-stack web application generation
- Usage: Frontend UI, backend setup, AI integration
- Effectiveness: 9/10 - Fast development, high quality output
- Time Saved: ~40 hours of manual coding

**ChatGPT-4 (Secondary Tool)**
- Purpose: Prompt engineering, documentation writing
- Usage: Crafting Lovable prompts, creating guides
- Effectiveness: 9/10 - Excellent for text generation
- Time Saved: ~10 hours of writing

**GitHub Copilot (Tertiary Tool)**
- Purpose: Code suggestions during manual tweaks
- Usage: Occasional code completion
- Effectiveness: 7/10 - Helpful but not critical
- Time Saved: ~2 hours

### Total AI Contribution

**Estimated Breakdown:**
- AI-generated code: ~85%
- AI-assisted code: ~10%
- Fully manual code: ~5%

**Human Role:**
- Prompt engineering: 100% human
- Design decisions: 70% human, 30% AI suggestions
- Feature prioritization: 100% human
- Testing & validation: 100% human
- Documentation: 50% AI-generated, 50% human-edited

---

## Ethical Considerations

### Transparency
✅ All AI usage documented here  
✅ Clear attribution to AI models  
✅ Honest about AI vs. human contributions  

### Academic Integrity
✅ AI used as tool, not replacement for learning  
✅ Understanding of code generated  
✅ Ability to modify and extend  
✅ Prompt engineering demonstrates skill  

### Innovation
✅ Creative application of existing AI  
✅ Novel integration (contract analysis)  
✅ User experience design original  
✅ Problem-solution matching  

---

## Prompt Templates for Future Use

### Template 1: New Feature Request
```
Add [FEATURE NAME] to ClauseScan AI:

PURPOSE: [Why this feature is needed]

DESIGN:
- [Visual specification]
- [Interaction behavior]
- [Mobile considerations]

IMPLEMENTATION:
- [Technical requirements]
- [Data structure if needed]
- [Integration points]

EXAMPLES:
[Provide visual or code examples]
```

### Template 2: Bug Fix Request
```
Fix [ISSUE] in ClauseScan AI:

CURRENT BEHAVIOR:
[What happens now]

EXPECTED BEHAVIOR:
[What should happen]

STEPS TO REPRODUCE:
1. [Step 1]
2. [Step 2]
3. [Bug occurs]

SUGGESTED FIX:
[If you have ideas]
```

### Template 3: UI Improvement
```
Improve [COMPONENT] design:

CURRENT STATE:
[What it looks like now]

DESIRED STATE:
[Specific changes:]
- Color: [exact hex]
- Spacing: [px values]
- Animation: [type and duration]
- Responsive: [mobile behavior]

INSPIRATION:
[Reference to similar designs]
```

---

## Conclusion

This documentation provides complete transparency about our AI tool usage in building ClauseScan AI. We leveraged Lovable AI's capabilities extensively, but with strategic human guidance through well-engineered prompts.

**Key Takeaway:** Modern AI development is about intelligent orchestration of AI tools, not replacing human creativity and judgment. The innovation lies in:
- Identifying the right problem to solve
- Designing the user experience
- Engineering effective prompts
- Making critical design decisions
- Validating and testing outputs

This approach mirrors real-world AI application development at companies like Microsoft, Google, and startups worldwide.

---

**Document Version:** 1.0  
**Last Updated:** November 3, 2025  
**Author:** [Your Name]  
**Project:** ClauseScan AI  
**Course:** Advanced AI Algorithms (AAA)

---

## Appendix: Complete Prompt Archive

For the complete, unedited text of all prompts, see:
- `/docs/prompts/raw/` directory in GitHub repository
- Individual `.txt` files for each major prompt
- Timestamp and context for each

**GitHub Link:** [your-repo]/docs/prompts/

---

**End of Prompts Documentation**
