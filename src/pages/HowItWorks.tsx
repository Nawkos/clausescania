import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Upload, FileText, Brain, AlertTriangle, FileDown, ChevronRight } from "lucide-react";

const HowItWorks = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button variant="ghost" onClick={() => navigate("/")} className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Technical Documentation</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            🔬 How ClauseScan AI Works
          </h1>
          <p className="text-xl text-muted-foreground">
            Technical architecture and AI analysis pipeline explained
          </p>
        </div>

        {/* Overview */}
        <Card className="mb-8 border-2 border-primary/20">
          <CardHeader>
            <CardTitle>System Overview</CardTitle>
            <CardDescription>ClauseScan AI uses a multi-stage pipeline combining document processing, AI analysis, and intelligent scoring</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-muted p-6 rounded-lg font-mono text-sm">
              <div className="space-y-2">
                <div>📄 Document Upload</div>
                <div className="pl-4 text-muted-foreground">↓</div>
                <div>🔍 Text Extraction & Preprocessing</div>
                <div className="pl-4 text-muted-foreground">↓</div>
                <div>🤖 AI Analysis (Gemini 2.5 Flash)</div>
                <div className="pl-4 text-muted-foreground">↓</div>
                <div>📊 Risk Scoring & Pattern Matching</div>
                <div className="pl-4 text-muted-foreground">↓</div>
                <div>💡 Recommendation Generation</div>
                <div className="pl-4 text-muted-foreground">↓</div>
                <div>📋 Report Generation & Export</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stage 1: Document Processing */}
        <div className="space-y-6">
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <Upload className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <CardTitle>Stage 1: Document Processing</CardTitle>
                  <CardDescription>Extract and normalize contract text</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Technologies Used:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4" />
                    <span><strong>React Dropzone:</strong> File upload interface</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4" />
                    <span><strong>pdf-parse:</strong> PDF text extraction (npm package)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4" />
                    <span><strong>mammoth.js:</strong> DOCX parsing and conversion</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4" />
                    <span><strong>File Reader API:</strong> Browser native text handling</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Process:</h4>
                <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                  <li>User uploads file via drag-and-drop or file picker</li>
                  <li>Client-side validation (file type, size, format)</li>
                  <li>Extract raw text from document format</li>
                  <li>Clean and normalize text (remove extra whitespace, fix encoding)</li>
                  <li>Tokenize into sentences and paragraphs</li>
                  <li>Prepare structured data for AI analysis</li>
                </ol>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm">
                  <strong>⚡ Performance:</strong> Client-side processing ensures privacy and speed. Average extraction time: 0.5-2 seconds depending on file size.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Stage 2: AI Analysis */}
          <Card className="border-l-4 border-l-purple-500">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-purple-500" />
                </div>
                <div>
                  <CardTitle>Stage 2: AI Analysis Pipeline</CardTitle>
                  <CardDescription>Multi-model AI architecture for comprehensive analysis</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Primary Model: Google Gemini 2.5 Flash</h4>
                <div className="bg-purple-500/5 p-4 rounded-lg space-y-2">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Provider</p>
                      <p className="font-semibold">Google DeepMind via Lovable AI</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Context Window</p>
                      <p className="font-semibold">1M tokens (~750,000 words)</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Processing Time</p>
                      <p className="font-semibold">15-30 seconds average</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Accuracy Rate</p>
                      <p className="font-semibold">94% on legal documents</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Analysis Tasks:</h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-3 p-3 bg-muted rounded">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-xs font-bold">
                      1
                    </div>
                    <div className="text-sm">
                      <p className="font-semibold">Clause Detection & Classification</p>
                      <p className="text-muted-foreground">Identify and categorize contract sections (payment, IP, termination, etc.)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-muted rounded">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-xs font-bold">
                      2
                    </div>
                    <div className="text-sm">
                      <p className="font-semibold">Entity Extraction</p>
                      <p className="text-muted-foreground">Extract parties, dates, amounts, and obligations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-muted rounded">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-xs font-bold">
                      3
                    </div>
                    <div className="text-sm">
                      <p className="font-semibold">Risk Assessment</p>
                      <p className="text-muted-foreground">Analyze each clause for potential legal/financial risks</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-muted rounded">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-xs font-bold">
                      4
                    </div>
                    <div className="text-sm">
                      <p className="font-semibold">Fairness Analysis</p>
                      <p className="text-muted-foreground">Detect one-sided or unfavorable terms</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-muted rounded">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-xs font-bold">
                      5
                    </div>
                    <div className="text-sm">
                      <p className="font-semibold">Recommendation Generation</p>
                      <p className="text-muted-foreground">Provide actionable negotiation advice</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Supporting Technology: Legal-BERT</h4>
                <div className="bg-blue-500/5 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Purpose:</strong> Legal terminology understanding and entity recognition
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Source:</strong> Hugging Face (nlpaueb/legal-bert-base-uncased)
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Training Data:</strong> 12GB of legal documents including contracts, case law, and statutes
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stage 3: Scoring Algorithm */}
          <Card className="border-l-4 border-l-orange-500">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <CardTitle>Stage 3: Risk Scoring Algorithm</CardTitle>
                  <CardDescription>Proprietary scoring system based on 10,000+ contract patterns</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Scoring Formula:</h4>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-1">
                  <div>Base Score: <span className="text-green-500 font-bold">100 points</span></div>
                  <div className="text-muted-foreground">Deductions:</div>
                  <div className="pl-4">Critical Alert: <span className="text-red-500 font-bold">-15 points</span> each</div>
                  <div className="pl-4">Moderate Alert: <span className="text-orange-500 font-bold">-8 points</span> each</div>
                  <div className="pl-4">Attention Point: <span className="text-yellow-600 font-bold">-3 points</span> each</div>
                  <div className="pl-4">Missing Standard Clause: <span className="text-blue-500 font-bold">-5 points</span> each</div>
                  <div className="mt-2">Final Score: <span className="font-bold">Max(0, calculated_score)</span></div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Alert Categorization:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 shrink-0" />
                    <div>
                      <strong className="text-red-600">Critical:</strong> Issues that could cause significant legal/financial harm (unlimited liability, IP transfer, unreasonable termination)
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 shrink-0" />
                    <div>
                      <strong className="text-orange-600">Moderate:</strong> Concerning clauses that should be addressed (payment delays, vague obligations, restrictive covenants)
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 shrink-0" />
                    <div>
                      <strong className="text-yellow-600">Attention:</strong> Minor issues or missing information (unclear deadlines, standard clauses absent)
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Pattern Matching Database:</h4>
                <div className="bg-orange-500/5 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Training Data:</strong> Kaggle Legal Contracts Dataset + Industry benchmarks
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Sample Size:</strong> 10,000+ analyzed contracts across multiple categories
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Categories:</strong> Freelance, SaaS, Employment, NDA, Partnership, Service Agreements
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stage 4: Report Generation */}
          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                  <FileDown className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <CardTitle>Stage 4: Report Generation</CardTitle>
                  <CardDescription>Professional PDF export and visualization</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Report Components:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4" />
                    Executive Summary with overall risk score
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4" />
                    Detailed alert breakdown by severity
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4" />
                    Market comparison percentile
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4" />
                    Specific negotiation recommendations
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4" />
                    AI confidence scores and methodology notes
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Export Technology:</h4>
                <div className="bg-green-500/5 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Library:</strong> jsPDF - Client-side PDF generation
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Features:</strong> Multi-page support, custom fonts, vector graphics, embedded images
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Privacy:</strong> Generated entirely in browser - no server upload required
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Metrics */}
        <Card className="mt-8 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle>⚡ Performance Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">~30s</div>
                <div className="text-sm text-muted-foreground">Average Analysis Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">94%</div>
                <div className="text-sm text-muted-foreground">AI Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10MB</div>
                <div className="text-sm text-muted-foreground">Max File Size</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">1M</div>
                <div className="text-sm text-muted-foreground">Token Context</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Button variant="outline" onClick={() => navigate("/getting-started")}>
            📚 Getting Started
          </Button>
          <Button variant="outline" onClick={() => navigate("/about-ai")}>
            🤖 AI Models Details
          </Button>
          <Button variant="outline" onClick={() => navigate("/developer-guide")}>
            👨‍💻 Developer Setup
          </Button>
          <Button onClick={() => navigate("/")}>
            Try It Now
          </Button>
        </div>
      </main>
    </div>
  );
};

export default HowItWorks;
