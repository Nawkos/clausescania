# 🛡️ ClauseScan AI

**The Yuka for Contracts - AI-Powered Contract Risk Analysis in 30 Seconds**

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue)](https://clausescania.lovable.app)

> **Academic Project:** SPOC IA - November 2025  
> **Institution:** ESSEC Business School  
> **Team:** Groupe 20  
> **Live Demo:** https://clausescania.lovable.app

---

## Overview

ClauseScan AI is an intelligent contract analysis tool that helps freelancers, startups, and individuals identify risky clauses before signing contracts. Using advanced AI technology (Google Gemini 2.5 Flash), it provides instant risk scoring (0-100) with color-coded alerts and actionable negotiation recommendations.

Similar to consumer product scoring apps, ClauseScan AI provides instant contract risk assessment.

### Key Features

- **Analysis Speed:** 30 seconds per contract
- **AI Technology:** Google Gemini 2.5 Flash
- **Risk Scoring:** 0-100 scale with color-coded alerts (🟢 Safe / 🟠 Caution / 🔴 Danger)
- **Cost Efficiency:** Reduces need for €500-2,000 initial legal consultation
- **Pattern Recognition:** Identifies 10+ common contract risk categories

---

## Try It Now

**Live Application:** https://clausescania.lovable.app

Upload any contract (PDF, DOCX, or TXT) and get instant AI-powered risk analysis.

---

## Features

### Core Functionality
- **Instant Risk Scoring:** 0-100 score with color coding (🟢 Safe 71-100, 🟠 Caution 41-70, 🔴 Danger 0-40)
- **AI Analysis:** Powered by Google Gemini 2.5 Flash for comprehensive contract review
- **Color-Coded Alerts:** Critical (🔴), Moderate (🟠), and Attention warnings
- **Actionable Recommendations:** Specific negotiation advice for each issue
- **Market Benchmarking:** Compare your contract against industry standards
- **PDF Export:** Professional reports ready to share with lawyers
- **Multi-Format Support:** PDF, DOCX, and TXT files (max 10MB)

### Advanced Features
- **Clause-by-Clause Analysis:** Detailed breakdown of every section
- **Missing Clause Detection:** Identifies important protections not included
- **Document Highlighting:** Visual markup of risky clauses
- **Contract History:** Save and track analyzed contracts
- **Mobile Optimized:** Full functionality on all devices

---

## AI Technology

### Primary Model: Google Gemini 2.5 Flash
- **Provider:** Google DeepMind (via Lovable AI)
- **Purpose:** Main contract analysis and risk assessment
- **Context Window:** 1M tokens
- **Why chosen:** Excellent legal reasoning, fast processing, cost-effective for students

### Custom Algorithms
- **Risk Scoring:** Pattern-based analysis for contract evaluation
- **Pattern Matching:** Identifies common legal pitfalls
- **Benchmarking:** Compares against industry standards

---

## Technology Stack

**Frontend:**
- React 18 with TypeScript
- Tailwind CSS for styling
- shadcn/ui component library
- Framer Motion for animations
- Lucide React icons

**Backend & AI:**
- Lovable Cloud - Backend infrastructure
- Lovable AI - AI model orchestration
- Supabase - Database and storage
- Edge Functions - Serverless API

**File Processing:**
- pdf-parse - PDF text extraction
- mammoth.js - DOCX parsing
- FileReader API - Browser-native file handling

---

## Installation & Setup

### Prerequisites
- Node.js 18+ and npm 9+
- Lovable account (free tier works)

### Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/Nawkos/clausescania.git
cd clausescania
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up Lovable AI**
- Sign up at lovable.dev
- Create new project or import from GitHub
- Enable "Lovable Cloud" and "Lovable AI" in settings
- No API keys needed!

4. **Run development server**
```bash
npm run dev
```

5. **Build for production**
```bash
npm run build
```

Deployment is automatic via Lovable when you push to GitHub.

---

## Usage

1. **Upload Contract** - Drag & drop or browse (PDF/DOCX/TXT)
2. **Wait 30 seconds** - AI analyzes the document
3. **Review Score** - See if contract is 🟢 Safe, 🟠 Caution, or 🔴 Danger
4. **Read Alerts** - Check each problematic clause
5. **Take Action** - Use recommendations to negotiate or export PDF report

---

## Academic Context

This project was created for the **SPOC IA** course at ESSEC Business School to demonstrate:

- Practical application of large language models (LLMs) to domain-specific tasks
- Prompt engineering techniques for structured output generation
- Modern web application architecture with AI integration
- User experience design around AI capabilities

**Methodology:** We leverage state-of-the-art AI models (industry best practice) rather than training custom models from scratch. Innovation lies in application design, prompt engineering, and user experience.

---

## Data Sources & Citations

### AI Models
- **Google Gemini 2.5 Flash** - Provider: Google DeepMind, Access: Lovable AI API

### Development Tools
- **Lovable.dev** - Development platform and hosting
- **shadcn/ui** - Component library
- **Lucide** - Icon system
- **Tailwind CSS** - Styling framework

### Training Data
- Kaggle Legal Contracts Dataset (CC BY 4.0)
- Contract risk patterns database
- Industry benchmarking data

---

## Privacy & Security

- Contracts processed temporarily in-memory
- No permanent storage without explicit save
- Encrypted transmission (HTTPS/TLS 1.3)
- GDPR compliant
- No personal data collection

**Disclaimer:** ClauseScan AI provides automated analysis for informational purposes only and does NOT constitute legal advice. Always consult a qualified attorney before signing contracts.

---

## Testing & Validation

**Development Testing:**
- **Analysis Time:** ~30 seconds average per contract
- **Test Scenarios:** 20+ diverse contracts across multiple categories
- **Contract Types Validated:**
  - Employment agreements
  - Freelance contracts
  - SaaS subscriptions
  - NDAs and service agreements

**Validation Results:**
- **Risk Detection:** Successfully identifies common contract pitfalls
- **Output Quality:** Structured analysis with actionable recommendations

**Note:** This is an academic proof-of-concept demonstrating AI application to legal document analysis. For production use, additional validation would be required.

---

## Contact

**Project Team:** Groupe 20  
**Email:** b00831880@essec.edu  
**Institution:** ESSEC Business School  
**Course:** SPOC IA  
**GitHub:** https://github.com/Nawkos/clausescan-ai  
**Live Demo:** https://clausescania.lovable.app

---

## Demo Video

**Video Link:** [Will be added after recording]  
**Duration:** 5 minutes  
**Submission Date:** November 4, 2025

---

## Acknowledgments

- **Google DeepMind** - Gemini 2.5 Flash model
- **Lovable.dev** - Development platform
- **shadcn/ui** - Component library
- **Yuka** - UX inspiration

---

## License

MIT License - See LICENSE file for details

---

## Additional Documentation

- [User Guide](docs/USER_GUIDE.md) - How to use ClauseScan AI
- [Developer Guide](docs/DEVELOPER_GUIDE.md) - Technical docs
- [Prompt Log](docs/LOVABLE_PROMPTS.md) - All AI prompts used
- [Video Script](docs/VIDEO_SCRIPT.md) - Demo script

---

**Made by Groupe 20 • ESSEC Business School • November 2025**

*"Don't Get Trapped by Hidden Clauses"*

**Live Demo:** https://clausescania.lovable.app
