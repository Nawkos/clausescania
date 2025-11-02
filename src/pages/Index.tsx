import { useState } from "react";
import { Upload, Shield, Zap, FileCheck, TrendingUp, Download, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import FileUpload from "@/components/FileUpload";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleFileSelect = (file: File) => {
    setUploadedFile(file);
    // Navigate to analysis page with file
    navigate("/analysis", { state: { file } });
  };

  const handleTryExample = (exampleType: string) => {
    navigate("/analysis", { state: { example: exampleType } });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">ClauseScan AI</h1>
                <p className="text-xs text-muted-foreground">The Yuka for Contracts</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Home</a>
              <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">How it Works</a>
              <a href="#examples" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Examples</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Don't Get Trapped by{" "}
              <span className="text-primary">Hidden Clauses</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              AI-powered contract analysis in 30 seconds. Scan before you sign.
            </p>

            {/* Upload Zone */}
            <div className="mb-8">
              <FileUpload onFileSelect={handleFileSelect} />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary mb-1">12,847</p>
                <p className="text-sm text-muted-foreground">Contracts Analyzed</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary mb-1">€4.2M</p>
                <p className="text-sm text-muted-foreground">Penalties Avoided</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary mb-1">94%</p>
                <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Examples Section */}
      <section id="examples" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">Try a Sample Contract</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 hover:shadow-lg transition-all cursor-pointer" onClick={() => handleTryExample("freelance")}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-muted-foreground">Freelance Contract</span>
                  <div className="w-14 h-14 rounded-full bg-danger/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-danger">34</span>
                  </div>
                </div>
                <div className="h-2 bg-danger/20 rounded-full overflow-hidden mb-4">
                  <div className="h-full bg-danger w-[34%]" />
                </div>
                <Button variant="outline" className="w-full">Try This Example</Button>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all cursor-pointer" onClick={() => handleTryExample("saas")}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-muted-foreground">SaaS Agreement</span>
                  <div className="w-14 h-14 rounded-full bg-warning/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-warning">65</span>
                  </div>
                </div>
                <div className="h-2 bg-warning/20 rounded-full overflow-hidden mb-4">
                  <div className="h-full bg-warning w-[65%]" />
                </div>
                <Button variant="outline" className="w-full">Try This Example</Button>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all cursor-pointer" onClick={() => handleTryExample("employment")}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-muted-foreground">Employment Contract</span>
                  <div className="w-14 h-14 rounded-full bg-success/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-success">88</span>
                  </div>
                </div>
                <div className="h-2 bg-success/20 rounded-full overflow-hidden mb-4">
                  <div className="h-full bg-success w-[88%]" />
                </div>
                <Button variant="outline" className="w-full">Try This Example</Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="how-it-works" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">How ClauseScan AI Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Instant Analysis</h4>
                <p className="text-muted-foreground">Get comprehensive results in just 30 seconds using advanced AI</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <FileCheck className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Risk Scoring</h4>
                <p className="text-muted-foreground">Clear 0-100 score with color-coded risk levels like Yuka</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Expert Recommendations</h4>
                <p className="text-muted-foreground">Actionable advice on how to negotiate each risky clause</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Clause Highlighting</h4>
                <p className="text-muted-foreground">Visual document markup showing exactly where issues are</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Market Comparison</h4>
                <p className="text-muted-foreground">See how your contract compares to industry standards</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Export Reports</h4>
                <p className="text-muted-foreground">Professional PDF reports to share with your lawyer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-4">
              Trusted by freelancers, startups, and legal professionals
            </p>
            <p className="text-sm text-muted-foreground">
              ⚠️ <strong>Important:</strong> ClauseScan AI provides automated analysis for informational purposes only and does not constitute legal advice. 
              Always consult a qualified attorney before signing any contract.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
