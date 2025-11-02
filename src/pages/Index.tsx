import { useState, useEffect, useRef } from "react";
import { Upload, Shield, Zap, FileCheck, TrendingUp, Download, CheckCircle2, Brain, FileText, Award, Lock, Users, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import FileUpload from "@/components/FileUpload";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [countersVisible, setCountersVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCountersVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleFileSelect = (file: File) => {
    setUploadedFile(file);
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
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                <Shield className="w-6 h-6 text-white" />
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

      {/* Hero Section with Gradient Background */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950 dark:via-purple-950 dark:to-pink-950">
        {/* Animated Floating Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Shield className="absolute top-20 left-10 w-12 h-12 text-blue-300 opacity-20 animate-pulse" style={{ animationDelay: '0s', animationDuration: '3s' }} />
          <FileText className="absolute top-40 right-20 w-16 h-16 text-purple-300 opacity-20 animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }} />
          <CheckCircle2 className="absolute bottom-20 left-1/4 w-14 h-14 text-pink-300 opacity-20 animate-pulse" style={{ animationDelay: '2s', animationDuration: '3.5s' }} />
          <Award className="absolute top-1/3 right-1/3 w-10 h-10 text-blue-400 opacity-20 animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '4.5s' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Don't Get Trapped by{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Hidden Clauses</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              AI-powered contract analysis in 30 seconds. Scan before you sign.
            </p>

            {/* Upload Zone */}
            <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <FileUpload onFileSelect={handleFileSelect} />
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-gray-800/50 rounded-full border border-border backdrop-blur-sm">
                <Lock className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium">GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-gray-800/50 rounded-full border border-border backdrop-blur-sm">
                <Brain className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium">AI-Powered</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-gray-800/50 rounded-full border border-border backdrop-blur-sm">
                <Users className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium">Used by 1000+ Professionals</span>
              </div>
            </div>

            {/* Animated Stats */}
            <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-1 transition-all duration-1000" style={{ 
                  transform: countersVisible ? 'scale(1)' : 'scale(0.8)',
                  opacity: countersVisible ? 1 : 0
                }}>
                  {countersVisible ? '12,847' : '0'}
                </p>
                <p className="text-sm text-muted-foreground">Contracts Analyzed</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-1 transition-all duration-1000" style={{ 
                  transform: countersVisible ? 'scale(1)' : 'scale(0.8)',
                  opacity: countersVisible ? 1 : 0,
                  transitionDelay: '0.1s'
                }}>
                  {countersVisible ? '€4.2M' : '€0'}
                </p>
                <p className="text-sm text-muted-foreground">Penalties Avoided</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-1 transition-all duration-1000" style={{ 
                  transform: countersVisible ? 'scale(1)' : 'scale(0.8)',
                  opacity: countersVisible ? 1 : 0,
                  transitionDelay: '0.2s'
                }}>
                  {countersVisible ? '94%' : '0%'}
                </p>
                <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-4">How It Works</h3>
            <p className="text-center text-muted-foreground mb-12">Get comprehensive contract analysis in 3 simple steps</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Step 1 */}
              <div className="relative text-center group">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  1
                </div>
                <Card className="p-8 pt-10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-950 border-2">
                  <div className="w-20 h-20 rounded-2xl bg-blue-100 dark:bg-blue-900 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Upload className="w-10 h-10 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Upload Contract</h4>
                  <p className="text-muted-foreground">Drag & drop or browse your PDF, DOCX, or TXT file</p>
                </Card>
              </div>

              {/* Step 2 */}
              <div className="relative text-center group">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  2
                </div>
                <Card className="p-8 pt-10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-purple-50 dark:from-gray-900 dark:to-purple-950 border-2">
                  <div className="w-20 h-20 rounded-2xl bg-purple-100 dark:bg-purple-900 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Brain className="w-10 h-10 text-purple-600" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">AI Analysis</h4>
                  <p className="text-muted-foreground">Our AI scans every clause for hidden risks in 30 seconds</p>
                </Card>
              </div>

              {/* Step 3 */}
              <div className="relative text-center group">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  3
                </div>
                <Card className="p-8 pt-10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-green-50 dark:from-gray-900 dark:to-green-950 border-2">
                  <div className="w-20 h-20 rounded-2xl bg-green-100 dark:bg-green-900 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <FileCheck className="w-10 h-10 text-green-600" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Get Report</h4>
                  <p className="text-muted-foreground">Receive detailed analysis with actionable recommendations</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Examples Section */}
      <section id="examples" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-4">Try a Sample Contract</h3>
            <p className="text-center text-muted-foreground mb-12">See how different contracts score on our risk scale</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-red-500" onClick={() => handleTryExample("freelance")}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-muted-foreground">Freelance Contract</span>
                  <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center shadow-lg ring-4 ring-red-200 dark:ring-red-800">
                    <span className="text-2xl font-bold text-red-600">34</span>
                  </div>
                </div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-4">
                  <div className="h-full bg-gradient-to-r from-red-500 to-red-600 w-[34%] rounded-full" />
                </div>
                <Button variant="outline" className="w-full group hover:bg-red-50 dark:hover:bg-red-950 hover:border-red-500">
                  Try This Example
                  <CheckCircle2 className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
              </Card>

              <Card className="p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-orange-500" onClick={() => handleTryExample("saas")}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-muted-foreground">SaaS Agreement</span>
                  <div className="w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center shadow-lg ring-4 ring-orange-200 dark:ring-orange-800">
                    <span className="text-2xl font-bold text-orange-600">65</span>
                  </div>
                </div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-4">
                  <div className="h-full bg-gradient-to-r from-orange-500 to-orange-600 w-[65%] rounded-full" />
                </div>
                <Button variant="outline" className="w-full group hover:bg-orange-50 dark:hover:bg-orange-950 hover:border-orange-500">
                  Try This Example
                  <CheckCircle2 className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
              </Card>

              <Card className="p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-green-500" onClick={() => handleTryExample("employment")}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-muted-foreground">Employment Contract</span>
                  <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center shadow-lg ring-4 ring-green-200 dark:ring-green-800">
                    <span className="text-2xl font-bold text-green-600">88</span>
                  </div>
                </div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-4">
                  <div className="h-full bg-gradient-to-r from-green-500 to-green-600 w-[88%] rounded-full" />
                </div>
                <Button variant="outline" className="w-full group hover:bg-green-50 dark:hover:bg-green-950 hover:border-green-500">
                  Try This Example
                  <CheckCircle2 className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose ClauseScan AI</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Instant Analysis</h4>
                <p className="text-muted-foreground">Get comprehensive results in just 30 seconds using advanced AI</p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <FileCheck className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Risk Scoring</h4>
                <p className="text-muted-foreground">Clear 0-100 score with color-coded risk levels like Yuka</p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Expert Recommendations</h4>
                <p className="text-muted-foreground">Actionable advice on how to negotiate each risky clause</p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Clause Highlighting</h4>
                <p className="text-muted-foreground">Visual document markup showing exactly where issues are</p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Market Comparison</h4>
                <p className="text-muted-foreground">See how your contract compares to industry standards</p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <Download className="w-8 h-8 text-white" />
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

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 backdrop-blur-sm py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">ClauseScan AI</h3>
                  <p className="text-xs text-muted-foreground">The Yuka for Contracts</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Protecting you from hidden contract risks with AI-powered analysis.</p>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#how-it-works" className="hover:text-primary transition-colors">How it Works</a></li>
                <li><a href="#examples" className="hover:text-primary transition-colors">Examples</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 ClauseScan AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
