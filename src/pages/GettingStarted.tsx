import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Upload, FileText, AlertTriangle, Download, CheckCircle2, XCircle, AlertCircle } from "lucide-react";

const GettingStarted = () => {
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
            <span className="text-sm text-muted-foreground">Documentation</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            🚀 Getting Started Guide
          </h1>
          <p className="text-xl text-muted-foreground">
            Learn how to analyze your contracts in 4 simple steps
          </p>
        </div>

        {/* Step-by-step Guide */}
        <div className="space-y-8">
          {/* Step 1 */}
          <Card className="border-2 hover:border-primary/50 transition-all">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <div className="flex-1">
                  <CardTitle className="flex items-center gap-2">
                    <Upload className="w-5 h-5" />
                    Upload Your Contract
                  </CardTitle>
                  <CardDescription>Drag & drop or click to browse</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pl-20">
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span><strong>Accepted formats:</strong> PDF, DOCX, TXT</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span><strong>Maximum size:</strong> 10MB</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span><strong>Processing time:</strong> Typically 30 seconds</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span><strong>Privacy:</strong> Files processed in memory, not stored permanently</span>
                </li>
              </ul>
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>💡 Pro tip:</strong> For best results, ensure your contract is clearly formatted and text is readable (not scanned images).
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card className="border-2 hover:border-primary/50 transition-all">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <div className="flex-1">
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Review Risk Score
                  </CardTitle>
                  <CardDescription>Understand your contract's overall safety</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pl-20">
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-xl">
                    0-40
                  </div>
                  <div>
                    <p className="font-semibold text-red-600">⛔ Danger - Don't Sign</p>
                    <p className="text-sm text-muted-foreground">Serious issues detected. Requires major revisions.</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 bg-orange-500/10 border border-orange-500/20 rounded-lg">
                  <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-xl">
                    41-70
                  </div>
                  <div>
                    <p className="font-semibold text-orange-600">⚠️ Caution - Negotiate</p>
                    <p className="text-sm text-muted-foreground">Multiple concerns. Should address before signing.</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-xl">
                    71-100
                  </div>
                  <div>
                    <p className="font-semibold text-green-600">✅ Safe - Good to Go</p>
                    <p className="text-sm text-muted-foreground">Well-balanced contract with minimal risks.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 3 */}
          <Card className="border-2 hover:border-primary/50 transition-all">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <div className="flex-1">
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    Read Detailed Alerts
                  </CardTitle>
                  <CardDescription>Click each alert to understand specific issues</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pl-20">
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-red-500/5 border-l-4 border-red-500 rounded">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-red-600">🔴 Critical Issues</p>
                    <p className="text-sm text-muted-foreground">Must negotiate these before signing. High risk of legal/financial harm.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-orange-500/5 border-l-4 border-orange-500 rounded">
                  <AlertTriangle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-orange-600">🟠 Moderate Concerns</p>
                    <p className="text-sm text-muted-foreground">Should address these. May cause problems down the line.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-yellow-500/5 border-l-4 border-yellow-500 rounded">
                  <AlertCircle className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-yellow-600">🟡 Attention Points</p>
                    <p className="text-sm text-muted-foreground">Good to clarify these. Minor issues or missing information.</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>📖 Each alert includes:</strong> Description of the issue, why it matters, specific recommendations for negotiation.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Step 4 */}
          <Card className="border-2 hover:border-primary/50 transition-all">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <div className="flex-1">
                  <CardTitle className="flex items-center gap-2">
                    <Download className="w-5 h-5" />
                    Take Action
                  </CardTitle>
                  <CardDescription>Use the analysis to protect yourself</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pl-20">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Download className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Export PDF Report</p>
                    <p className="text-sm text-muted-foreground">Professional report you can share with lawyers or advisors</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <FileText className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Share with Your Lawyer</p>
                    <p className="text-sm text-muted-foreground">Use the report as a starting point for professional legal review</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <AlertTriangle className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Negotiate Terms</p>
                    <p className="text-sm text-muted-foreground">Use our recommendations to request specific changes</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Save for Future Reference</p>
                    <p className="text-sm text-muted-foreground">Keep the analysis for your records</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center space-y-4">
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-2">Ready to Analyze Your Contract?</h3>
              <p className="text-muted-foreground mb-6">
                Upload your first contract and see how it works in real-time
              </p>
              <Button size="lg" onClick={() => navigate("/")} className="gap-2">
                <Upload className="w-5 h-5" />
                Start Analysis Now
              </Button>
            </CardContent>
          </Card>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Button variant="link" onClick={() => navigate("/how-it-works")}>
              📖 How It Works
            </Button>
            <Button variant="link" onClick={() => navigate("/about-ai")}>
              🤖 AI Models
            </Button>
            <Button variant="link" onClick={() => navigate("/developer-guide")}>
              👨‍💻 Developer Setup
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GettingStarted;
