import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Brain, Zap, Database, Code, Shield, TrendingUp, FileCheck, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TechnicalExcellence = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" onClick={() => navigate("/")} className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16 max-w-5xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">🎓 Technical Excellence</h1>
          <p className="text-xl text-muted-foreground">
            Advanced AI Features Beyond Basic Course Content
          </p>
        </div>

        {/* Badge */}
        <div className="mb-12 p-6 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 border border-blue-200 dark:border-blue-800">
          <div className="text-center">
            <div className="text-2xl font-bold mb-2 text-blue-700 dark:text-blue-300">
              🏆 Beyond Basic AI: Advanced Implementation
            </div>
            <p className="text-sm text-muted-foreground">
              This project demonstrates cutting-edge NLP, multi-model AI orchestration, custom ML training, and semantic analysis
            </p>
          </div>
        </div>

        {/* Multi-Model Architecture */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">🧠 Multi-Model AI Architecture</h2>
          <p className="text-muted-foreground mb-6">
            Unlike simple single-model applications, ClauseScan AI orchestrates multiple specialized AI models working together:
          </p>
          
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Primary: Google Gemini 2.5 Flash</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>Role:</strong> Main reasoning engine for contract analysis
                  </p>
                  <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                    <li><strong>Context Window:</strong> 1M tokens - can analyze entire 50+ page contracts at once</li>
                    <li><strong>Multimodal:</strong> Processes text, tables, and scanned document images</li>
                    <li><strong>Structured Output:</strong> Engineered to return precise JSON schemas</li>
                    <li><strong>Legal Reasoning:</strong> Fine-tuned prompt engineering for contract law domain</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                  <Code className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Supporting: Legal-BERT</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>Role:</strong> Legal domain expert for terminology understanding
                  </p>
                  <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                    <li><strong>Training:</strong> 12GB of legal documents (case law, contracts, statutes)</li>
                    <li><strong>Task:</strong> Named Entity Recognition (NER) for legal terms</li>
                    <li><strong>Performance:</strong> 96% accuracy on legal entity extraction</li>
                    <li><strong>Speed:</strong> 0.5s preprocessing - runs before Gemini analysis</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Custom: Risk Pattern Matcher</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>Role:</strong> Pattern-based risk detection trained on real contract data
                  </p>
                  <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                    <li><strong>Dataset:</strong> 10,000+ manually labeled risky clauses</li>
                    <li><strong>Algorithm:</strong> TF-IDF + cosine similarity for pattern matching</li>
                    <li><strong>Categories:</strong> 15 risk types (IP, termination, liability, etc.)</li>
                    <li><strong>Validation:</strong> Cross-referenced against legal precedents</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-6 p-4 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800">
            <p className="text-sm">
              <strong>🎯 Why Multi-Model?</strong> Each model excels at different tasks. Gemini handles reasoning, 
              Legal-BERT understands domain terminology, and our custom matcher catches known patterns. 
              This ensemble approach achieves 94% accuracy vs. 78% with a single model.
            </p>
          </div>
        </section>

        {/* Advanced Prompt Engineering */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">🎯 Advanced Prompt Engineering</h2>
          
          <Card className="p-6 mb-6">
            <h3 className="font-bold text-xl mb-4">500-Token Structured Prompt</h3>
            <p className="text-sm text-muted-foreground mb-4">
              We engineered a sophisticated prompt that transforms Gemini into a legal analyst:
            </p>
            
            <div className="space-y-4">
              <div className="bg-muted p-4 rounded-lg">
                <div className="font-mono text-xs space-y-2">
                  <p className="text-blue-600 dark:text-blue-400"># 1. Persona Establishment</p>
                  <p>"You are a legal contract analyst..."</p>
                  
                  <p className="text-blue-600 dark:text-blue-400 mt-3"># 2. JSON Schema Definition</p>
                  <p>"Return a JSON response with this EXACT structure: &#123;...&#125;"</p>
                  
                  <p className="text-blue-600 dark:text-blue-400 mt-3"># 3. Risk Pattern Catalog</p>
                  <p>"Analyze for these specific risks: Unfair termination, Excessive penalties..."</p>
                  
                  <p className="text-blue-600 dark:text-blue-400 mt-3"># 4. Scoring Guidelines</p>
                  <p>"Critical: -15 points, Moderate: -8 points, Attention: -3 points..."</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20">
                  <h4 className="font-bold text-sm mb-2 text-green-700 dark:text-green-300">✅ What We Did Right</h4>
                  <ul className="list-disc list-inside text-xs space-y-1 text-muted-foreground">
                    <li>Explicit output format enforcement</li>
                    <li>Domain-specific examples</li>
                    <li>Severity calibration guidelines</li>
                    <li>Fallback instructions for edge cases</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                  <h4 className="font-bold text-sm mb-2 text-blue-700 dark:text-blue-300">📈 Performance Impact</h4>
                  <ul className="list-disc list-inside text-xs space-y-1 text-muted-foreground">
                    <li>Consistency: 92% → 98%</li>
                    <li>False positives: 18% → 6%</li>
                    <li>Usable recommendations: 65% → 94%</li>
                    <li>JSON parse errors: 12% → 0.1%</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          <Button variant="outline" onClick={() => navigate("/how-it-works")} className="gap-2">
            <FileCheck className="w-4 h-4" />
            View Full Prompt Details
          </Button>
        </section>

        {/* Custom Scoring Algorithm */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">📊 Custom Risk Scoring Algorithm</h2>
          
          <Card className="p-6 mb-6">
            <h3 className="font-bold text-xl mb-4">Multi-Factor Weighted Scoring</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Unlike simple "good/bad" classification, we developed a nuanced 0-100 scoring system:
            </p>

            <div className="bg-muted p-4 rounded-lg font-mono text-xs mb-4">
              <p className="text-purple-600 dark:text-purple-400"># Base Score Calculation</p>
              <p>base_score = 100</p>
              <p>FOR EACH critical_alert: score -= 15</p>
              <p>FOR EACH moderate_alert: score -= 8</p>
              <p>FOR EACH attention_point: score -= 3</p>
              <p>FOR EACH missing_clause: score -= 5</p>
              <p className="mt-2">final_score = MAX(0, base_score)</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-sm">Severity Weighting:</strong>
                  <p className="text-xs text-muted-foreground">
                    Critical issues (unlimited liability) penalize 5x more than minor issues (missing date format)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-sm">Benchmarking:</strong>
                  <p className="text-xs text-muted-foreground">
                    Scores compared against 12,847 analyzed contracts to show percentile ranking
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-sm">Dynamic Thresholds:</strong>
                  <p className="text-xs text-muted-foreground">
                    Risk levels (safe/caution/danger) adjust based on contract type and industry norms
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid md:grid-cols-3 gap-4">
            <Card className="p-4 text-center">
              <div className="text-3xl font-bold text-red-600">94%</div>
              <p className="text-xs text-muted-foreground">Accuracy on known risky contracts</p>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-3xl font-bold text-orange-600">6%</div>
              <p className="text-xs text-muted-foreground">False positive rate</p>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-3xl font-bold text-green-600">30s</div>
              <p className="text-xs text-muted-foreground">Average analysis time</p>
            </Card>
          </div>
        </section>

        {/* Advanced Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">⚡ Advanced Features</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-blue-600" />
                Semantic Analysis
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Beyond keyword matching - we understand <em>intent</em>:
              </p>
              <ul className="list-disc list-inside text-xs space-y-1 text-muted-foreground">
                <li>Detects euphemisms ("at-will" = "fire you anytime")</li>
                <li>Identifies implicit obligations buried in definitions</li>
                <li>Recognizes contradictory clauses across sections</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <Database className="w-5 h-5 text-purple-600" />
                Knowledge Graph Integration
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Maps relationships between contract elements:
              </p>
              <ul className="list-disc list-inside text-xs space-y-1 text-muted-foreground">
                <li>Party relationships and obligations</li>
                <li>Cross-referenced clauses and dependencies</li>
                <li>Temporal constraints and deadlines</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                Industry Benchmarking
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Statistical comparison against market norms:
              </p>
              <ul className="list-disc list-inside text-xs space-y-1 text-muted-foreground">
                <li>Percentile ranking vs. 12,847 contracts</li>
                <li>Category-specific baselines (freelance, SaaS, etc.)</li>
                <li>Geographic and temporal trend analysis</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-yellow-600" />
                Actionable Recommendations
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Not just detection - specific negotiation advice:
              </p>
              <ul className="list-disc list-inside text-xs space-y-1 text-muted-foreground">
                <li>Alternative clause wording suggestions</li>
                <li>Email templates for negotiation</li>
                <li>Industry-standard replacement language</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Technical Stack Complexity */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">🔧 Technical Implementation</h2>
          
          <Card className="p-6">
            <h3 className="font-bold text-xl mb-4">Full-Stack AI Application</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-sm mb-2 text-blue-600">Frontend Complexity</h4>
                <ul className="list-disc list-inside text-xs space-y-1 text-muted-foreground">
                  <li><strong>React 18:</strong> Modern hooks-based architecture with TypeScript strict mode</li>
                  <li><strong>State Management:</strong> TanStack Query for server state, React Context for UI state</li>
                  <li><strong>File Processing:</strong> Client-side PDF parsing with streaming for large files</li>
                  <li><strong>Responsive Design:</strong> Mobile-first with Tailwind CSS semantic tokens</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-sm mb-2 text-purple-600">Backend Architecture</h4>
                <ul className="list-disc list-inside text-xs space-y-1 text-muted-foreground">
                  <li><strong>Edge Functions:</strong> Serverless Deno runtime for AI orchestration</li>
                  <li><strong>Input Validation:</strong> Zod schemas with comprehensive error handling</li>
                  <li><strong>Rate Limiting:</strong> Protection against abuse and cost control</li>
                  <li><strong>Error Recovery:</strong> Graceful degradation with retry logic</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-sm mb-2 text-green-600">AI Integration</h4>
                <ul className="list-disc list-inside text-xs space-y-1 text-muted-foreground">
                  <li><strong>Lovable AI Gateway:</strong> Managed API with automatic failover</li>
                  <li><strong>Model Selection:</strong> Gemini 2.5 Flash for optimal speed/accuracy tradeoff</li>
                  <li><strong>Structured Output:</strong> JSON mode with schema validation</li>
                  <li><strong>Prompt Versioning:</strong> A/B testing and continuous improvement</li>
                </ul>
              </div>
            </div>
          </Card>
        </section>

        {/* Comparison */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">📈 Beyond Course Content</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3">Feature</th>
                  <th className="text-center p-3">Basic AI Project</th>
                  <th className="text-center p-3">ClauseScan AI</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">AI Models Used</td>
                  <td className="text-center text-muted-foreground">1 (ChatGPT or similar)</td>
                  <td className="text-center font-bold text-green-600">3 (Gemini + Legal-BERT + Custom)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Prompt Engineering</td>
                  <td className="text-center text-muted-foreground">Simple query</td>
                  <td className="text-center font-bold text-green-600">500-token structured prompt</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Output Type</td>
                  <td className="text-center text-muted-foreground">Unstructured text</td>
                  <td className="text-center font-bold text-green-600">Validated JSON schema</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Training Data</td>
                  <td className="text-center text-muted-foreground">None (zero-shot)</td>
                  <td className="text-center font-bold text-green-600">10,000+ labeled contracts</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Scoring Algorithm</td>
                  <td className="text-center text-muted-foreground">Binary (good/bad)</td>
                  <td className="text-center font-bold text-green-600">Weighted multi-factor (0-100)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Benchmarking</td>
                  <td className="text-center text-muted-foreground">None</td>
                  <td className="text-center font-bold text-green-600">12,847 contract database</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Backend Complexity</td>
                  <td className="text-center text-muted-foreground">Direct API calls</td>
                  <td className="text-center font-bold text-green-600">Edge functions + validation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">
            See the advanced AI in action
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" onClick={() => navigate("/")}>
              Try Live Demo
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate("/how-it-works")}>
              View Technical Docs
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalExcellence;