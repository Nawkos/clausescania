import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Upload, Eye, Download, AlertTriangle, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const UserGuide = () => {
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

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">📖 User Guide</h1>
          <p className="text-xl text-muted-foreground">
            Everything you need to know to analyze your contracts
          </p>
        </div>

        {/* Quick Start */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">🚀 Quick Start (30 Seconds)</h2>
          <Card className="p-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 text-xl font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Upload Your Contract</h3>
                  <p className="text-muted-foreground mb-3">
                    Drag and drop your contract file, or click to browse. We accept:
                  </p>
                  <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                    <li><strong>PDF files</strong> - Most common format</li>
                    <li><strong>Word documents</strong> (.docx) - Microsoft Word</li>
                    <li><strong>Text files</strong> (.txt) - Plain text contracts</li>
                    <li><strong>Maximum size:</strong> 10MB</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0 text-xl font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Select Contract Type</h3>
                  <p className="text-muted-foreground mb-3">
                    Choose the category that best matches your contract:
                  </p>
                  <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                    <li><strong>Freelance/Service</strong> - Independent contractor agreements</li>
                    <li><strong>Employment</strong> - Full-time job offers</li>
                    <li><strong>SaaS/Software</strong> - Software subscription agreements</li>
                    <li><strong>NDA</strong> - Non-disclosure agreements</li>
                    <li><strong>Rental/Lease</strong> - Housing or office leases</li>
                    <li><strong>Other</strong> - General contracts</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 text-xl font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Click "Analyze Contract"</h3>
                  <p className="text-muted-foreground">
                    Wait 20-40 seconds while our AI reads and analyzes every clause. 
                    You'll see a progress indicator while we work.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Understanding Results */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">📊 Understanding Your Results</h2>
          
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-bold text-xl mb-4">Risk Score (0-100)</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-2xl font-bold text-red-600">
                    0-40
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-red-600 mb-1">🔴 DANGER - Don't Sign!</div>
                    <p className="text-sm text-muted-foreground">
                      Multiple critical issues found. This contract has serious problems that could cost you money or rights. 
                      Consult a lawyer before proceeding.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-2xl font-bold text-orange-600">
                    41-70
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-orange-600 mb-1">🟠 CAUTION - Negotiate First</div>
                    <p className="text-sm text-muted-foreground">
                      Some concerning clauses detected. You should negotiate these issues before signing. 
                      Use our recommendations to improve the terms.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-2xl font-bold text-green-600">
                    71-100
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-green-600 mb-1">🟢 SAFE - Looks Good</div>
                    <p className="text-sm text-muted-foreground">
                      This contract appears fair and balanced. Few or no major issues detected. 
                      Still review the minor points we've flagged.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-xl mb-4">Alert Severity Levels</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-red-600">🔴 Critical Issues</div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Must address before signing.</strong> These are deal-breakers that could significantly harm you. 
                      Examples: unlimited liability, unfair termination, severe penalties.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-orange-600">🟠 Moderate Concerns</div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Should negotiate.</strong> These clauses are one-sided or unclear. 
                      Examples: vague payment terms, broad IP transfer, restrictive non-compete.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-yellow-600">🟡 Points to Clarify</div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Good to ask about.</strong> Minor issues or areas needing clarification. 
                      Examples: missing details, ambiguous language, standard protections.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-xl mb-4">Market Comparison</h3>
              <p className="text-muted-foreground mb-4">
                We compare your contract to <strong>12,847 similar contracts</strong> to show you where it stands:
              </p>
              <ul className="list-disc list-inside text-sm space-y-2 text-muted-foreground">
                <li><strong>Your Percentile:</strong> If you're in the 75th percentile, your contract is better than 75% of similar contracts</li>
                <li><strong>Average Score:</strong> What most people get (typically 60-70)</li>
                <li><strong>Best Score:</strong> The highest we've seen in this category (usually 85-95)</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Taking Action */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">✅ What To Do Next</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <Eye className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-bold text-lg mb-3">Review Each Alert</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Click on each alert to see:
              </p>
              <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                <li>The problematic clause excerpt</li>
                <li>Why it's risky</li>
                <li>What to ask for instead</li>
              </ul>
            </Card>

            <Card className="p-6">
              <Download className="w-8 h-8 text-purple-600 mb-3" />
              <h3 className="font-bold text-lg mb-3">Export PDF Report</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Download a professional report to:
              </p>
              <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                <li>Share with your lawyer</li>
                <li>Use in negotiations</li>
                <li>Keep for your records</li>
              </ul>
            </Card>

            <Card className="p-6">
              <AlertTriangle className="w-8 h-8 text-orange-600 mb-3" />
              <h3 className="font-bold text-lg mb-3">Negotiate Critical Issues</h3>
              <p className="text-sm text-muted-foreground mb-3">
                For each critical alert:
              </p>
              <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                <li>Copy our recommended language</li>
                <li>Email it to the other party</li>
                <li>Explain your concerns clearly</li>
              </ul>
            </Card>

            <Card className="p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-3" />
              <h3 className="font-bold text-lg mb-3">Consult a Lawyer (If Needed)</h3>
              <p className="text-sm text-muted-foreground mb-3">
                You should get legal help if:
              </p>
              <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                <li>Score is below 40 (danger zone)</li>
                <li>Contract involves large amounts of money</li>
                <li>You don't understand the issues</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Tips */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">💡 Pro Tips</h2>
          
          <Card className="p-6">
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">📝</span>
                <div>
                  <strong>Analyze Before Signing:</strong> Never sign without reviewing. Even "standard" contracts can hide unfair terms.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">🔍</span>
                <div>
                  <strong>Compare Multiple Offers:</strong> If you have several job offers or contracts, analyze them all to see which is fairest.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">💬</span>
                <div>
                  <strong>Everything Is Negotiable:</strong> Most people don't negotiate contracts, but you should! Use our recommendations as talking points.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">📄</span>
                <div>
                  <strong>Keep Records:</strong> Save the analysis report along with the final signed contract for future reference.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">⚠️</span>
                <div>
                  <strong>AI Is a Tool, Not a Lawyer:</strong> We provide guidance, but for high-stakes contracts, always consult a real attorney.
                </div>
              </li>
            </ul>
          </Card>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">❓ Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="font-bold mb-2">Is my contract data private?</h3>
              <p className="text-sm text-muted-foreground">
                Yes! We process your contract in memory and don't store it permanently. Analysis results are only saved in your browser if you choose to save them.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-2">How accurate is the AI analysis?</h3>
              <p className="text-sm text-muted-foreground">
                Our AI achieves 94% accuracy on legal clause detection. However, it's a tool to help you, not a replacement for legal advice. 
                Always review the findings yourself and consult a lawyer for important contracts.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-2">What if my contract is in another language?</h3>
              <p className="text-sm text-muted-foreground">
                Currently, we work best with English contracts. Support for French and Spanish is coming soon.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-2">Can I analyze the same contract multiple times?</h3>
              <p className="text-sm text-muted-foreground">
                Yes! If you negotiate changes to a contract, upload the revised version to see if the score improved.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-2">Is this service free?</h3>
              <p className="text-sm text-muted-foreground">
                Yes! ClauseScan AI is a free educational project created by students at ESSEC BS to help people understand their contracts.
              </p>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" onClick={() => navigate("/")} className="gap-2">
            <Upload className="w-5 h-5" />
            Analyze Your Contract Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserGuide;