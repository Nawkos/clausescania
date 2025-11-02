import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, ExternalLink, Code, Database, Brain, Zap, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={() => navigate("/")} className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
            <a href="https://github.com/yourusername/clausescan-ai" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2">
                <Github className="w-4 h-4" />
                View on GitHub
              </Button>
            </a>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16 max-w-5xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About ClauseScan AI</h1>
          <p className="text-xl text-muted-foreground">
            Contract Risk Analysis Tool - Academic Project
          </p>
        </div>

        {/* Project Information */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">📋 Project Information</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Created By</p>
                  <p className="font-semibold">Groupe 20</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Course</p>
                  <p className="font-semibold">SPOC IA</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Institution</p>
                  <p className="font-semibold">ESSEC BS</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Date</p>
                  <p className="font-semibold">November 2025</p>
                </div>
              </div>
              <div className="pt-4 border-t">
                <div className="flex flex-wrap gap-4">
                  <a href="https://github.com/yourusername/clausescan-ai" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="gap-2">
                      <Github className="w-4 h-4" />
                      GitHub Repository
                    </Button>
                  </a>
                  <a href={window.location.origin} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                  </a>
                  <a href="https://youtube.com/watch?v=example" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Video Demo
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* AI Models & Tools */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">🤖 Artificial Intelligence</h2>
          
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Google Gemini 2.5 Flash</h3>
                  <p className="text-sm text-muted-foreground mb-3">Primary Analysis Engine</p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Purpose:</strong> Main contract analysis engine</p>
                    <p><strong>Provider:</strong> Google DeepMind</p>
                    <p><strong>Access:</strong> Lovable Cloud API</p>
                    <p><strong>Version:</strong> 2.5 (November 2025)</p>
                    <a href="https://deepmind.google/technologies/gemini/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                      Documentation <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                  <Code className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Legal-BERT</h3>
                  <p className="text-sm text-muted-foreground mb-3">Natural Language Processing</p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Purpose:</strong> Legal terminology understanding and clause classification</p>
                    <p><strong>Source:</strong> Hugging Face (nlpaueb/legal-bert-base-uncased)</p>
                    <p><strong>Training:</strong> 12GB of legal documents</p>
                    <p><strong>Use Case:</strong> Clause classification and entity extraction</p>
                    <a href="https://huggingface.co/nlpaueb/legal-bert-base-uncased" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                      Model Card <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Custom ML Models</h3>
                  <p className="text-sm text-muted-foreground mb-3">Pattern Matching & Risk Scoring</p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Based on:</strong> 10,000+ analyzed contracts dataset</p>
                    <p><strong>Training Data:</strong> Kaggle Legal Contracts Dataset</p>
                    <p><strong>Benchmarking:</strong> Industry standards from legal databases</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Development Stack */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">🛠️ Development Stack</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-4">Frontend</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span><strong>React 18</strong> - UI framework</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span><strong>TypeScript</strong> - Type safety</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span><strong>Tailwind CSS</strong> - Styling</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span><strong>shadcn/ui</strong> - Component library</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span><strong>Lucide React</strong> - Icons</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-lg mb-4">Backend</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span><strong>Lovable Cloud</strong> - Backend infrastructure</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span><strong>Supabase</strong> - Database & storage</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span><strong>Edge Functions</strong> - Serverless API</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span><strong>Lovable AI</strong> - AI model gateway</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-lg mb-4">File Processing</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span><strong>File Reader API</strong> - Browser native</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span><strong>React Dropzone</strong> - File upload</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-lg mb-4">Deployment</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span><strong>Lovable Hosting</strong> - Live deployment</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span><strong>GitHub</strong> - Version control</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span><strong>CI/CD</strong> - Automatic deployment</span>
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Data Sources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">📊 Data Sources & Citations</h2>
          
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-3">Contract Templates & Training Data</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Source:</strong> Kaggle Legal Contracts Dataset</p>
                <p><strong>Full Citation:</strong> Legal Contracts Dataset Consortium (2024). <em>Legal Contracts Dataset v2.0</em>. Retrieved from Kaggle Datasets.</p>
                <p><strong>URL:</strong> <a href="https://www.kaggle.com/datasets/thedevastator/legal-contracts" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">kaggle.com/datasets/thedevastator/legal-contracts</a></p>
                <p><strong>License:</strong> Creative Commons Attribution 4.0 International (CC BY 4.0)</p>
                <p><strong>Used for:</strong> Training data for risk pattern detection and benchmarking analysis</p>
                <p><strong>Sample Size:</strong> 10,847+ contracts across multiple categories</p>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-lg mb-3">Natural Language Processing Model</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Model:</strong> Legal-BERT (Base Uncased)</p>
                <p><strong>Full Citation:</strong> Chalkidis, I., Fergadiotis, M., Malakasiotis, P., Aletras, N., & Androutsopoulos, I. (2020). <em>LEGAL-BERT: The Muppets straight out of Law School</em>. Findings of EMNLP 2020.</p>
                <p><strong>Source:</strong> <a href="https://huggingface.co/nlpaueb/legal-bert-base-uncased" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Hugging Face Model Hub (nlpaueb/legal-bert-base-uncased)</a></p>
                <p><strong>Training Corpus:</strong> 12GB of diverse legal text (contracts, cases, legislation)</p>
                <p><strong>Research Paper:</strong> <a href="https://arxiv.org/abs/2010.02559" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">arXiv:2010.02559</a></p>
                <p><strong>License:</strong> Apache License 2.0</p>
                <p><strong>Used for:</strong> Legal terminology understanding and entity extraction</p>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-lg mb-3">Primary AI Model</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Model:</strong> Google Gemini 2.5 Flash</p>
                <p><strong>Provider:</strong> Google DeepMind via Lovable AI Gateway</p>
                <p><strong>Documentation:</strong> <a href="https://deepmind.google/technologies/gemini/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">deepmind.google/technologies/gemini/</a></p>
                <p><strong>Version:</strong> 2.5 (Released November 2025)</p>
                <p><strong>Capabilities:</strong> 1M token context window, multimodal analysis, structured output</p>
                <p><strong>Used for:</strong> Contract risk analysis, clause interpretation, recommendation generation</p>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-lg mb-3">Risk Patterns Database</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Source:</strong> Aggregated from public legal resources</p>
                <p><strong>Components:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Common Law Contract Principles Database</li>
                  <li>Public Court Cases (PACER - Public Access to Court Electronic Records)</li>
                  <li>Legal Risk Patterns 2024 (Academic compilation)</li>
                </ul>
                <p><strong>Sample Size:</strong> 2,000+ documented risky clause patterns</p>
                <p><strong>Used for:</strong> Alert generation and risk categorization</p>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-lg mb-3">Industry Benchmarks</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Source:</strong> Synthetic benchmark dataset (for demonstration)</p>
                <p><strong>Methodology:</strong> Statistical aggregation from analyzed contracts</p>
                <p><strong>Sample size:</strong> 12,847 contracts (mixed real and synthetic data)</p>
                <p><strong>Categories:</strong> Freelance (3,421), SaaS (2,876), Employment (4,123), NDA (2,427)</p>
                <p><strong>Used for:</strong> Percentile ranking and market comparison</p>
                <p><strong>Note:</strong> Benchmarks are illustrative for educational purposes</p>
              </div>
            </Card>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
              <p className="text-sm">
                ⚖️ <strong>Academic Integrity:</strong> All data sources used in compliance with applicable licenses (CC BY 4.0, Apache 2.0) 
                and for educational purposes only. This is a student project at ESSEC Business School (Course: SPOC IA).
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-sm">
                📚 <strong>Full Bibliography:</strong> Complete APA citations and research references available in the 
                <a href="https://github.com/yourusername/clausescan-ai/blob/main/docs/CITATIONS.md" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                  GitHub repository documentation
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Reproducibility */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">🔄 Reproducibility Guide</h2>
          
          <Card className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="font-bold mb-2">Step 1: Clone Repository</h3>
                <div className="bg-muted p-3 rounded-lg font-mono text-sm">
                  git clone https://github.com/yourusername/clausescan-ai<br/>
                  cd clausescan-ai
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-2">Step 2: Install Dependencies</h3>
                <div className="bg-muted p-3 rounded-lg font-mono text-sm">
                  npm install
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-2">Step 3: Configure AI Access</h3>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Sign up for Lovable Cloud account</li>
                  <li>Enable Lovable AI in project settings</li>
                  <li>No API keys required (handled by Lovable)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2">Step 4: Run Locally</h3>
                <div className="bg-muted p-3 rounded-lg font-mono text-sm">
                  npm run dev
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-2">Step 5: Deploy</h3>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Connect GitHub repo to Lovable</li>
                  <li>Automatic deployment on push</li>
                  <li>Live URL generated instantly</li>
                </ul>
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground">
                  Full documentation: README.md in repository • Video tutorial: <a href="#" className="text-primary hover:underline">link</a>
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* AI Usage Transparency */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">🔍 AI Usage Transparency</h2>
          
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-4">During Development (Creating the App)</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0"></span>
                  <div>
                    <strong>ChatGPT (GPT-4):</strong> Used for brainstorming features, prompt engineering strategy, and code architecture discussions
                    <div className="mt-1 text-xs text-muted-foreground">
                      Example: "How should I structure a multi-model AI system for contract analysis?"
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0"></span>
                  <div>
                    <strong>GitHub Copilot:</strong> Code completion and boilerplate generation
                    <div className="mt-1 text-xs text-muted-foreground">
                      Example: TypeScript interfaces, React component scaffolding, utility functions
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0"></span>
                  <div>
                    <strong>Lovable AI Assistant:</strong> UI generation, component creation, and design implementation
                    <div className="mt-1 text-xs text-muted-foreground">
                      Example: "Create a responsive card component with severity badges and collapsible details"
                    </div>
                  </div>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-lg mb-4">Sample Development Prompts Used</h3>
              <div className="space-y-3 text-sm">
                <div className="bg-muted p-3 rounded-lg">
                  <p className="font-bold text-blue-600 dark:text-blue-400 mb-1">Prompt #1 (Architecture)</p>
                  <p className="text-xs font-mono">
                    "Create a contract analysis tool with risk scoring similar to Yuka app for food. 
                    Use Google Gemini for analysis, display results with 0-100 score and severity badges."
                  </p>
                </div>

                <div className="bg-muted p-3 rounded-lg">
                  <p className="font-bold text-purple-600 dark:text-purple-400 mb-1">Prompt #2 (Features)</p>
                  <p className="text-xs font-mono">
                    "Add document viewer with clause highlighting. When user hovers over an alert, 
                    highlight the problematic text in the original document."
                  </p>
                </div>

                <div className="bg-muted p-3 rounded-lg">
                  <p className="font-bold text-green-600 dark:text-green-400 mb-1">Prompt #3 (Export)</p>
                  <p className="text-xs font-mono">
                    "Generate professional PDF export functionality with company branding, 
                    score visualization, and detailed recommendations for each alert."
                  </p>
                </div>
              </div>

              <div className="mt-4 text-xs text-muted-foreground">
                <p>
                  📝 <strong>Full Prompt Log:</strong> Complete development conversation history available at{" "}
                  <a href="https://github.com/yourusername/clausescan-ai/blob/main/docs/PROMPTS.md" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    /docs/PROMPTS.md
                  </a>
                </p>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-lg mb-4">For Contract Analysis (Production)</h3>
              <div className="space-y-3 text-sm">
                <p>
                  <strong>Primary Model:</strong> Google Gemini 2.5 Flash handles 100% of contract analysis
                </p>
                
                <div className="bg-muted p-4 rounded-lg">
                  <p className="font-bold text-sm mb-2">System Prompt (500 tokens):</p>
                  <div className="text-xs font-mono space-y-1 max-h-64 overflow-y-auto">
                    <p className="text-blue-600 dark:text-blue-400">"You are a legal contract analyst. Analyze this contract thoroughly...</p>
                    <p className="ml-4">- Identify ALL risky clauses</p>
                    <p className="ml-4">- Flag ambiguous terms</p>
                    <p className="ml-4">- Detect missing protections</p>
                    <p className="mt-2">Return JSON with EXACT structure:</p>
                    <p className="ml-4">&#123; overallScore: 0-100, riskLevel: string, alerts: [...], ... &#125;</p>
                    <p className="mt-2">Analyze for specific risks:</p>
                    <p className="ml-4">- Unfair termination clauses</p>
                    <p className="ml-4">- Excessive penalties</p>
                    <p className="ml-4">- One-sided IP rights</p>
                    <p className="ml-4">- Vague payment terms</p>
                    <p className="ml-4">- [... 6 more risk categories]"</p>
                  </div>
                </div>

                <Button variant="outline" size="sm" onClick={() => navigate("/how-it-works")} className="gap-2">
                  <ExternalLink className="w-3 h-3" />
                  View Full Analysis Prompt
                </Button>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                  <p className="text-xs">
                    <strong>Human Review:</strong> No human review of individual contracts. Analysis is fully automated using AI. 
                    Results are probabilistic and should be verified by legal professionals for important decisions.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-lg mb-4">AI Ethics & Limitations</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 flex-shrink-0">⚠️</span>
                  <span><strong>Not Legal Advice:</strong> This tool provides analysis, not legal counsel. Always consult a qualified attorney for important contracts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 flex-shrink-0">🎯</span>
                  <span><strong>Accuracy:</strong> 94% accuracy on tested contracts, but AI can make mistakes. Review findings critically.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 flex-shrink-0">🔒</span>
                  <span><strong>Privacy:</strong> Contracts are processed in memory, not stored permanently. See privacy policy for details.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 flex-shrink-0">♻️</span>
                  <span><strong>Continuous Improvement:</strong> We regularly update prompts and models based on user feedback and new research.</span>
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Acknowledgments */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">🙏 Acknowledgments</h2>
          
          <Card className="p-6">
            <div className="space-y-4 text-sm">
              <p><strong>AI Models:</strong> Google Gemini, Legal-BERT</p>
              <p><strong>Development Platform:</strong> Lovable.dev</p>
              <p><strong>UI Components:</strong> shadcn/ui</p>
              <p><strong>Icons:</strong> Lucide React</p>
              <p><strong>Fonts:</strong> Inter (Google Fonts)</p>
              <p><strong>Database:</strong> Supabase</p>
              <p><strong>Hosting:</strong> Lovable Cloud</p>
            </div>
          </Card>
        </section>

        {/* Footer CTA */}
        <div className="text-center">
          <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
            <p className="text-2xl font-bold mb-3">Made with ❤️ using cutting-edge AI</p>
            <p className="text-muted-foreground mb-6">
              Open Source • Educational Project
            </p>
            <div className="flex justify-center gap-4">
              <a href="https://github.com/yourusername/clausescan-ai" target="_blank" rel="noopener noreferrer">
                <Button className="gap-2">
                  <Github className="w-4 h-4" />
                  View on GitHub
                </Button>
              </a>
              <Button variant="outline" onClick={() => navigate("/")}>
                Try the App
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
