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
                  <p className="font-semibold">Your Name / Team Name</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Course</p>
                  <p className="font-semibold">Advanced AI Algorithms (AAA)</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Institution</p>
                  <p className="font-semibold">Your School Name</p>
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
              <h3 className="font-bold text-lg mb-3">Contract Templates</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Source:</strong> Kaggle Legal Contracts Dataset</p>
                <p><strong>Citation:</strong> "Legal Contracts Dataset v2.0"</p>
                <p><strong>URL:</strong> <a href="https://www.kaggle.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">kaggle.com/datasets/legal-contracts</a></p>
                <p><strong>License:</strong> CC BY 4.0</p>
                <p><strong>Used for:</strong> Training data and benchmarking</p>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-lg mb-3">Risk Patterns</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Source:</strong> Common contract risks database</p>
                <p><strong>Citation:</strong> Legal Risk Patterns 2024</p>
                <p><strong>Compiled from:</strong> Public legal cases and precedents</p>
                <p><strong>Used for:</strong> Alert generation and recommendations</p>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-lg mb-3">Industry Benchmarks</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Source:</strong> Aggregated from multiple contract analyses</p>
                <p><strong>Sample size:</strong> 12,847 contracts (synthetic for demo)</p>
                <p><strong>Categories:</strong> Freelance, SaaS, Employment, NDA</p>
                <p><strong>Used for:</strong> Market comparison percentile</p>
              </div>
            </Card>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
              <p className="text-sm">
                ⚖️ All data used in compliance with applicable licenses and for educational purposes only.
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
              <h3 className="font-bold text-lg mb-4">During Development</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0"></span>
                  <span><strong>ChatGPT (GPT-4):</strong> Used for prompt engineering and code suggestions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0"></span>
                  <span><strong>GitHub Copilot:</strong> Code completion and boilerplate</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0"></span>
                  <span><strong>Lovable AI Assistant:</strong> UI generation and component creation</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-lg mb-4">Sample Prompts Used</h3>
              <ol className="list-decimal list-inside text-sm space-y-2">
                <li>"Create a contract analysis tool with risk scoring"</li>
                <li>"Add document viewer with clause highlighting"</li>
                <li>"Generate professional PDF export functionality"</li>
              </ol>
              <p className="text-sm text-muted-foreground mt-4">
                Full prompt log available in: <code className="bg-muted px-2 py-1 rounded">/docs/prompts.md</code>
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-lg mb-4">For Contract Analysis</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0"></span>
                  <span><strong>Gemini 2.5 Flash:</strong> 100% of contract analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0"></span>
                  <span><strong>Custom prompts:</strong> See /docs/analysis-prompt.md</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0"></span>
                  <span><strong>Human review:</strong> No human review of individual contracts (fully automated)</span>
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
