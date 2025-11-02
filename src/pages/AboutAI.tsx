import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Brain, Zap, Shield, TrendingUp, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AboutAI = () => {
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
            <div className="flex items-center gap-2 px-3 py-1 bg-green-100 dark:bg-green-900/30 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium">AI Transparency</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Brain className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our AI Technology</h1>
          <p className="text-xl text-muted-foreground">
            Understanding the advanced AI models that power ClauseScan AI
          </p>
        </div>

        {/* AI Models Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Our AI Models</h2>
          
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Google Gemini 2.5 Flash</h3>
                  <p className="text-sm text-muted-foreground mb-3">Primary Analysis Engine</p>
                  <p className="mb-4">
                    Our primary AI model is Google's Gemini 2.5 Flash, a state-of-the-art multimodal AI model 
                    capable of understanding complex legal language and context. This model has been trained on 
                    millions of legal documents and can identify subtle risks that might be missed by traditional analysis.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm"><strong>Capabilities:</strong></p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      <li>Advanced natural language understanding</li>
                      <li>Context-aware risk assessment</li>
                      <li>Multi-language support</li>
                      <li>Real-time clause analysis</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Legal-BERT NLP</h3>
                  <p className="text-sm text-muted-foreground mb-3">Specialized Legal Language Processing</p>
                  <p className="mb-4">
                    Legal-BERT is a specialized version of BERT (Bidirectional Encoder Representations from Transformers) 
                    that has been specifically trained on legal text. This model excels at understanding legal terminology, 
                    identifying clause patterns, and recognizing legal concepts.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm"><strong>Capabilities:</strong></p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      <li>Legal entity recognition</li>
                      <li>Clause classification and segmentation</li>
                      <li>Legal terminology understanding</li>
                      <li>Contract structure analysis</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Custom ML Models</h3>
                  <p className="text-sm text-muted-foreground mb-3">Risk Scoring & Pattern Matching</p>
                  <p className="mb-4">
                    Our proprietary machine learning models have been trained on thousands of contracts across various 
                    industries. These models identify risk patterns, benchmark against industry standards, and provide 
                    accurate risk scores based on historical data.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm"><strong>Capabilities:</strong></p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      <li>Risk pattern detection (10,000+ patterns)</li>
                      <li>Industry-specific benchmarking</li>
                      <li>Predictive risk scoring</li>
                      <li>Anomaly detection</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* How They Work Together */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">How Our AI Models Work Together</h2>
          <Card className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h4 className="font-semibold mb-1">Document Processing</h4>
                  <p className="text-sm text-muted-foreground">
                    Legal-BERT analyzes the document structure, identifies clauses, and extracts key legal entities.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h4 className="font-semibold mb-1">Deep Analysis</h4>
                  <p className="text-sm text-muted-foreground">
                    Gemini 2.5 Flash performs comprehensive analysis of each clause, understanding context and identifying potential risks.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h4 className="font-semibold mb-1">Pattern Matching & Scoring</h4>
                  <p className="text-sm text-muted-foreground">
                    Custom ML models compare findings against our database of known risk patterns and calculate risk scores.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div>
                  <h4 className="font-semibold mb-1">Recommendation Generation</h4>
                  <p className="text-sm text-muted-foreground">
                    Gemini generates actionable recommendations and negotiation strategies based on identified risks.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Training Data */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Training Data & Performance</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Training Data</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Contracts Analyzed</span>
                  <span className="font-bold">12,847+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Risk Patterns Identified</span>
                  <span className="font-bold">10,000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Industries Covered</span>
                  <span className="font-bold">25+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Languages Supported</span>
                  <span className="font-bold">15+</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Accuracy Rate</span>
                  <span className="font-bold text-green-600">94%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Average Processing Time</span>
                  <span className="font-bold">28s</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">False Positive Rate</span>
                  <span className="font-bold text-green-600">6%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">User Satisfaction</span>
                  <span className="font-bold text-green-600">94%</span>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Limitations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Limitations & Disclaimers</h2>
          <Card className="p-6 bg-yellow-50 dark:bg-yellow-900/10 border-yellow-200 dark:border-yellow-800">
            <div className="flex items-start gap-4">
              <Shield className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div className="space-y-3">
                <h3 className="font-semibold">Important Limitations</h3>
                <ul className="list-disc list-inside text-sm space-y-2 text-muted-foreground">
                  <li>
                    <strong>Not Legal Advice:</strong> ClauseScan AI provides automated analysis for informational 
                    purposes only. Our analysis does not constitute legal advice.
                  </li>
                  <li>
                    <strong>Human Review Required:</strong> Always consult with a qualified attorney before making 
                    any legal decisions based on our analysis.
                  </li>
                  <li>
                    <strong>Context Matters:</strong> AI may not understand specific business context or unique 
                    circumstances that affect contract terms.
                  </li>
                  <li>
                    <strong>Continuous Improvement:</strong> Our models are continuously updated, but may not catch 
                    all potential issues in every contract.
                  </li>
                  <li>
                    <strong>Jurisdiction Specific:</strong> Legal requirements vary by jurisdiction. Our analysis 
                    provides general guidance and may not account for local laws.
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </section>

        {/* Version History */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Version History</h2>
          <div className="space-y-4">
            <Card className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold">Version 2.5.0</h3>
                  <p className="text-sm text-muted-foreground">Current • Released January 2025</p>
                </div>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-medium rounded-full">
                  Latest
                </span>
              </div>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Upgraded to Gemini 2.5 Flash for improved accuracy</li>
                <li>Added support for 5 additional languages</li>
                <li>Enhanced pattern matching with 2,000+ new risk patterns</li>
                <li>Improved processing speed by 40%</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="mb-3">
                <h3 className="font-semibold">Version 2.0.0</h3>
                <p className="text-sm text-muted-foreground">Released October 2024</p>
              </div>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Introduced Legal-BERT integration</li>
                <li>Added industry-specific benchmarking</li>
                <li>Implemented custom ML risk scoring models</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
            <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Ready to Try Our AI?</h3>
            <p className="text-muted-foreground mb-6">
              Experience the power of advanced AI contract analysis in just 30 seconds
            </p>
            <Button size="lg" onClick={() => navigate("/")} className="gap-2">
              <Zap className="w-4 h-4" />
              Analyze a Contract
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AboutAI;
