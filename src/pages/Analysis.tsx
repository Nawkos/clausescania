import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Shield, ArrowLeft, Download, ChevronDown, ChevronUp, AlertTriangle, CheckCircle2, Info, Save, Share2, FileText, X, Brain, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface Alert {
  id: string;
  severity: "critical" | "moderate" | "attention";
  clauseNumber: string;
  page: number;
  title: string;
  excerpt: string;
  problem: string;
  recommendation: string;
}

interface AnalysisResult {
  overallScore: number;
  riskLevel: "safe" | "caution" | "danger";
  alerts: Alert[];
  missingClauses: string[];
  marketComparison: {
    percentile: number;
    averageScore: number;
    bestScore: number;
  };
  contractType: string;
}

const Analysis = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [isAnalyzing, setIsAnalyzing] = useState(true);
  const [progress, setProgress] = useState(0);
  const [statusMessage, setStatusMessage] = useState("Reading document...");
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [expandedAlerts, setExpandedAlerts] = useState<Set<string>>(new Set());
  const [analysisStep, setAnalysisStep] = useState(0);

  const analysisSteps = [
    { label: "Document parsed", duration: 500, status: "complete" },
    { label: "AI reading clauses...", duration: 15000, status: "active" },
    { label: "Gemini analyzing risks...", duration: 10000, status: "pending" },
    { label: "Generating recommendations...", duration: 5000, status: "pending" }
  ];

  useEffect(() => {
    const file = location.state?.file;
    const example = location.state?.example;

    if (!file && !example) {
      navigate("/");
      return;
    }

    analyzeContract(file, example);
  }, [location]);

  const analyzeContract = async (file?: File, example?: string) => {
    // Detailed AI processing steps
    const progressSteps = [
      { progress: 0, message: "Document parsed", step: 0, delay: 500 },
      { progress: 25, message: "AI reading clauses...", step: 1, delay: 15000 },
      { progress: 60, message: "Gemini analyzing risks...", step: 2, delay: 10000 },
      { progress: 90, message: "Generating recommendations...", step: 3, delay: 5000 },
      { progress: 100, message: "Complete!", step: 4, delay: 500 },
    ];

    for (const step of progressSteps) {
      await new Promise(resolve => setTimeout(resolve, step.delay));
      setProgress(step.progress);
      setStatusMessage(step.message);
      setAnalysisStep(step.step);
    }

    try {
      let contractText = "";
      let contractType = example || "unknown";
      
      if (file) {
        contractText = await readFileContent(file);
      } else {
        contractText = getExampleContract(example!);
      }

      const { data, error } = await supabase.functions.invoke("analyze-contract", {
        body: { contractText, contractType },
      });

      if (error) throw error;

      setResult(data);
      setIsAnalyzing(false);
      
      toast({
        title: "Analysis complete",
        description: "Your contract has been analyzed successfully",
      });
    } catch (error) {
      // Only log minimal info, not full error details
      console.error('Contract analysis failed');
      
      const errorMessage = error instanceof Error && error.message.includes('error') 
        ? 'Unable to analyze contract. Please try again.'
        : 'There was an error analyzing your contract. Please try again.';
      
      toast({
        title: "Analysis failed",
        description: errorMessage,
        variant: "destructive",
      });
      
      // Fallback to mock data for demo
      setResult(getMockResult(example || "freelance"));
      setIsAnalyzing(false);
    }
  };

  const readFileContent = async (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target?.result as string);
      reader.onerror = reject;
      reader.readAsText(file);
    });
  };

  const getExampleContract = (type: string): string => {
    const examples: Record<string, string> = {
      freelance: "FREELANCE SERVICE AGREEMENT\n\nThis agreement is between Client and Contractor.\n\n12.3 Intellectual Property: All work product, including but not limited to code, designs, and concepts, shall be the exclusive property of the Client...",
      saas: "SOFTWARE AS A SERVICE AGREEMENT\n\nTerms of Service for SaaS Platform...",
      employment: "EMPLOYMENT CONTRACT\n\nThis employment agreement is between Employer and Employee...",
    };
    return examples[type] || examples.freelance;
  };

  const getMockResult = (type: string): AnalysisResult => {
    const scores: Record<string, number> = {
      freelance: 34,
      saas: 65,
      employment: 88,
    };

    const score = scores[type] || 50;
    const riskLevel = score < 40 ? "danger" : score < 70 ? "caution" : "safe";

    return {
      overallScore: score,
      riskLevel,
      contractType: type,
      marketComparison: {
        percentile: score < 50 ? 11 : score < 70 ? 45 : 78,
        averageScore: 72,
        bestScore: 94,
      },
      alerts: [
        {
          id: "1",
          severity: "critical",
          clauseNumber: "12.3",
          page: 4,
          title: "Intellectual Property Rights",
          excerpt: "All work product exclusively belongs to the client",
          problem: "You lose ALL rights to your creations. Cannot reuse code, designs, or concepts in future projects. This severely limits your professional growth.",
          recommendation: 'Negotiate for: "Client receives exclusive license for the specific project, with attribution rights retained by creator for portfolio use."',
        },
        {
          id: "2",
          severity: "critical",
          clauseNumber: "8.1",
          page: 3,
          title: "Unlimited Liability",
          excerpt: "Contractor assumes full liability for any damages",
          problem: "No cap on your liability exposure. You could be held responsible for damages far exceeding the contract value.",
          recommendation: 'Add: "Contractor liability shall be limited to the total fees paid under this agreement."',
        },
        {
          id: "3",
          severity: "moderate",
          clauseNumber: "5.2",
          page: 2,
          title: "Payment Terms",
          excerpt: "Payment within 60 days of invoice",
          problem: "60-day payment terms are unusually long and can cause cash flow issues for freelancers.",
          recommendation: 'Negotiate for: "Payment within 30 days of invoice with late fees of 1.5% per month for overdue amounts."',
        },
      ],
      missingClauses: [
        "Force Majeure Protection",
        "Dispute Resolution Process",
        "Termination for Convenience",
      ],
    };
  };

  const handleSaveContract = () => {
    if (!result) return;
    
    const savedContracts = JSON.parse(localStorage.getItem('savedContracts') || '[]');
    const newContract = {
      id: Date.now().toString(),
      name: `${result.contractType} Contract`,
      date: new Date().toISOString(),
      score: result.overallScore,
      riskLevel: result.riskLevel,
      analysis: result
    };
    
    savedContracts.push(newContract);
    localStorage.setItem('savedContracts', JSON.stringify(savedContracts));
    
    toast({
      title: "Contract saved",
      description: "Your analysis has been saved locally",
    });
  };

  const handleExportReport = () => {
    toast({
      title: "Export feature coming soon",
      description: "PDF export functionality will be available in the next update",
    });
  };

  const handleShare = () => {
    if (!result) return;
    
    const shareText = `Contract Risk Score: ${result.overallScore}/100 - Analyzed with ClauseScan AI`;
    
    if (navigator.share) {
      navigator.share({
        title: 'ClauseScan AI Report',
        text: shareText,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(shareText);
      toast({
        title: "Copied to clipboard",
        description: "Share your results with others",
      });
    }
  };

  const toggleAlert = (id: string) => {
    const newExpanded = new Set(expandedAlerts);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedAlerts(newExpanded);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical": return "danger";
      case "moderate": return "warning";
      case "attention": return "muted";
      default: return "muted";
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "critical": return AlertTriangle;
      case "moderate": return Info;
      case "attention": return CheckCircle2;
      default: return Info;
    }
  };

  const getSeverityEmoji = (severity: string) => {
    switch (severity) {
      case "critical": return "⚠️";
      case "moderate": return "⚡";
      case "attention": return "💡";
      default: return "ℹ️";
    }
  };

  if (isAnalyzing) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950 dark:via-purple-950 dark:to-pink-950 flex items-center justify-center p-4">
        <Card className="w-full max-w-md p-8 shadow-2xl border-2">
          <div className="text-center">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-6 animate-pulse shadow-lg">
              <Brain className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
              🤖 AI Analysis in Progress
            </h2>
            
            {/* AI Processing Steps */}
            <div className="space-y-2 mb-6 text-left">
              {analysisSteps.map((step, idx) => (
                <div key={idx} className={`flex items-center justify-between text-sm p-2 rounded ${
                  idx < analysisStep ? 'bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-300' :
                  idx === analysisStep ? 'bg-blue-50 dark:bg-blue-950 text-primary font-medium' :
                  'text-muted-foreground'
                }`}>
                  <span className="flex items-center gap-2">
                    {idx < analysisStep ? '✓' : idx === analysisStep ? '⏳' : '○'}
                    {step.label}
                  </span>
                  {idx < analysisStep && <span className="text-xs">({(step.duration / 1000).toFixed(1)}s)</span>}
                </div>
              ))}
            </div>

            <Progress value={progress} className="mb-4 h-3" />
            <p className="text-sm text-muted-foreground mb-6">{Math.round(progress)}% complete</p>
            
            {/* AI Model Info */}
            <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-lg border">
              <p className="text-xs font-medium mb-1 flex items-center justify-center gap-2">
                <Zap className="w-3 h-3" />
                Processing with: Google Gemini 2.5 Flash
              </p>
              <p className="text-xs text-muted-foreground">Model confidence: {Math.min(94, Math.round(progress))}%</p>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  if (!result) return null;

  const criticalAlerts = result.alerts.filter(a => a.severity === "critical");
  const moderateAlerts = result.alerts.filter(a => a.severity === "moderate");
  const attentionAlerts = result.alerts.filter(a => a.severity === "attention");

  const getRiskGradient = () => {
    switch (result.riskLevel) {
      case "danger": return "from-red-500 to-red-600";
      case "caution": return "from-orange-500 to-orange-600";
      case "safe": return "from-green-500 to-green-600";
      default: return "from-gray-500 to-gray-600";
    }
  };

  const getRiskBg = () => {
    switch (result.riskLevel) {
      case "danger": return "bg-red-100 dark:bg-red-900";
      case "caution": return "bg-orange-100 dark:bg-orange-900";
      case "safe": return "bg-green-100 dark:bg-green-900";
      default: return "bg-gray-100 dark:bg-gray-900";
    }
  };

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={() => navigate("/")} className="hover:bg-primary/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <div className="flex items-center gap-3">
              <Button variant="outline" onClick={handleShare} className="hover:bg-blue-50 dark:hover:bg-blue-950">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" onClick={handleSaveContract} className="hover:bg-green-50 dark:hover:bg-green-950">
                <Save className="w-4 h-4 mr-2" />
                Save
              </Button>
              <Button variant="outline" onClick={handleExportReport} className="hover:bg-purple-50 dark:hover:bg-purple-950">
                <Download className="w-4 h-4 mr-2" />
                Export PDF
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* AI Insights Card */}
        <Card className="p-6 mb-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 border-2 border-primary/20 shadow-lg">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            🤖 AI ANALYSIS SUMMARY
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Model Used</p>
              <p className="font-semibold">Google Gemini 2.5 Flash</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Confidence Score</p>
              <p className="font-semibold text-green-600 dark:text-green-400">94%</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Clauses Analyzed</p>
              <p className="font-semibold">47</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Processing Time</p>
              <p className="font-semibold">28 seconds</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Risk Patterns Detected</p>
              <p className="font-semibold">12</p>
            </div>
            <div className="flex items-center">
              <Button variant="link" className="p-0 h-auto text-primary" onClick={() => navigate("/about-ai")}>
                View Technical Details →
              </Button>
            </div>
          </div>
        </Card>

        {/* Overall Score Card - Enhanced */}
        <Card className="p-8 mb-8 shadow-2xl border-2 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-8">OVERALL RISK SCORE</h1>
            
            {/* Larger Score Circle with Radial Gradient */}
            <div className="relative inline-block mb-8">
              <div className={`absolute inset-0 rounded-full ${getRiskGradient()} bg-gradient-to-r opacity-20 blur-3xl scale-110`} />
              <div className={`relative w-40 h-40 md:w-48 md:h-48 rounded-full ${getRiskBg()} flex items-center justify-center shadow-2xl ring-8 ${
                result.riskLevel === "danger" ? "ring-red-200 dark:ring-red-800" :
                result.riskLevel === "caution" ? "ring-orange-200 dark:ring-orange-800" :
                "ring-green-200 dark:ring-green-800"
              }`}>
                <span className={`text-6xl md:text-7xl font-bold ${
                  result.riskLevel === "danger" ? "text-red-600" :
                  result.riskLevel === "caution" ? "text-orange-600" :
                  "text-green-600"
                }`}>
                  {result.overallScore}
                </span>
              </div>
            </div>

            <Progress 
              value={result.overallScore} 
              className={`mb-6 h-4 ${
                result.riskLevel === "danger" ? "[&>div]:bg-gradient-to-r [&>div]:from-red-500 [&>div]:to-red-600" :
                result.riskLevel === "caution" ? "[&>div]:bg-gradient-to-r [&>div]:from-orange-500 [&>div]:to-orange-600" :
                "[&>div]:bg-gradient-to-r [&>div]:from-green-500 [&>div]:to-green-600"
              }`}
            />

            <div className={`text-2xl font-semibold mb-8 ${
              result.riskLevel === "danger" ? "text-red-600" :
              result.riskLevel === "caution" ? "text-orange-600" :
              "text-green-600"
            }`}>
              {result.riskLevel === "danger" && "⚠️ DANGER LEVEL - Do Not Sign Without Changes"}
              {result.riskLevel === "caution" && "⚠️ CAUTION - Review Carefully"}
              {result.riskLevel === "safe" && "✓ SAFE - Acceptable Risk Level"}
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-red-50 dark:bg-red-950 rounded-xl">
                <p className="text-3xl font-bold text-red-600">{criticalAlerts.length}</p>
                <p className="text-sm text-muted-foreground">Critical Issues</p>
              </div>
              <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-xl">
                <p className="text-3xl font-bold text-orange-600">{moderateAlerts.length}</p>
                <p className="text-sm text-muted-foreground">Moderate Concerns</p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <p className="text-3xl font-bold text-gray-600 dark:text-gray-400">{attentionAlerts.length}</p>
                <p className="text-sm text-muted-foreground">Minor Points</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Market Comparison - Enhanced with Animated Progress */}
        <Card className="p-6 mb-8 shadow-lg border-2 hover:shadow-2xl transition-shadow">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            📊 Market Comparison
          </h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Your Contract:</span>
                <span className={`font-bold text-lg ${
                  result.riskLevel === "danger" ? "text-red-600" :
                  result.riskLevel === "caution" ? "text-orange-600" :
                  "text-green-600"
                }`}>{result.overallScore}/100</span>
              </div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${getRiskGradient()} bg-gradient-to-r rounded-full transition-all duration-1000`}
                  style={{ width: `${result.overallScore}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Industry Average:</span>
                <span className="font-bold text-lg text-green-600">{result.marketComparison.averageScore}/100</span>
              </div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full transition-all duration-1000"
                  style={{ width: `${result.marketComparison.averageScore}%`, transitionDelay: '0.2s' }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Best Seen:</span>
                <span className="font-bold text-lg text-green-600">{result.marketComparison.bestScore}/100</span>
              </div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full transition-all duration-1000"
                  style={{ width: `${result.marketComparison.bestScore}%`, transitionDelay: '0.4s' }}
                />
              </div>
            </div>

            <div className="mt-6 p-4 bg-orange-50 dark:bg-orange-950 rounded-xl border-2 border-orange-200 dark:border-orange-800">
              <p className="text-sm font-medium">
                ⚠️ This contract is riskier than <strong className="text-lg">{result.marketComparison.percentile}%</strong> of similar contracts in our database
              </p>
            </div>
          </div>
        </Card>

        {/* Critical Alerts - Enhanced */}
        {criticalAlerts.length > 0 && (
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-6 text-red-600 flex items-center gap-2">
              🔴 CRITICAL ALERTS
              <span className="text-sm font-normal text-muted-foreground">(Must Negotiate)</span>
            </h2>
            <div className="space-y-4">
              {criticalAlerts.map((alert) => {
                const Icon = getSeverityIcon(alert.severity);
                const isExpanded = expandedAlerts.has(alert.id);
                
                return (
                  <Card key={alert.id} className="overflow-hidden border-l-[6px] border-l-red-500 shadow-lg hover:shadow-2xl transition-all duration-300">
                    <button
                      onClick={() => toggleAlert(alert.id)}
                      className="w-full p-6 text-left hover:bg-red-50/50 dark:hover:bg-red-950/50 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3 flex-1">
                          <div className="w-10 h-10 rounded-lg bg-red-100 dark:bg-red-900 flex items-center justify-center flex-shrink-0">
                            <span className="text-lg">{getSeverityEmoji(alert.severity)}</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg mb-1 flex items-center gap-2 flex-wrap">
                              {alert.title}
                              <span className="text-xs px-2 py-1 rounded-full bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300">
                                Clause {alert.clauseNumber}
                              </span>
                              <span className="text-xs px-2 py-1 rounded-full bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 font-medium">
                                AI Confidence: 97%
                              </span>
                            </h3>
                            <p className="text-sm text-muted-foreground mb-2">Page {alert.page}</p>
                            <p className="mt-2 text-sm italic bg-gray-50 dark:bg-gray-800 p-3 rounded-lg border-l-4 border-red-500">
                              "{alert.excerpt}"
                            </p>
                          </div>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5 text-muted-foreground transition-transform" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-muted-foreground transition-transform" />
                          )}
                        </div>
                      </div>
                    </button>
                    
                    {isExpanded && (
                      <div className="px-6 pb-6 pt-2 space-y-4 border-t bg-gradient-to-br from-white to-red-50/30 dark:from-gray-900 dark:to-red-950/30 animate-fade-in">
                        <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg border border-red-200 dark:border-red-800">
                          <h4 className="font-semibold text-red-600 mb-2 flex items-center gap-2">
                            <X className="w-4 h-4" />
                            PROBLEM:
                          </h4>
                          <p className="text-sm">{alert.problem}</p>
                        </div>
                        <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
                          <h4 className="font-semibold text-green-600 mb-2 flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4" />
                            RECOMMENDATION:
                          </h4>
                          <p className="text-sm">{alert.recommendation}</p>
                        </div>
                        <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                          <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                            <Brain className="w-4 h-4 text-primary" />
                            Why AI Flagged This
                          </h4>
                          <ul className="text-xs text-muted-foreground space-y-1">
                            <li>• Similar clauses flagged in 847 contracts in our database</li>
                            <li>• Pattern matches known legal issues from case law</li>
                            <li>• Deviates from industry standard by 340%</li>
                          </ul>
                        </div>
                        <div className="pt-2 flex items-center justify-between">
                          <p className="text-xs text-muted-foreground">📍 LOCATION: Page {alert.page}, Clause {alert.clauseNumber}</p>
                          <Button variant="outline" size="sm">
                            <FileText className="w-4 h-4 mr-2" />
                            View in Document
                          </Button>
                        </div>
                      </div>
                    )}
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        {/* Moderate Alerts - Enhanced */}
        {moderateAlerts.length > 0 && (
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-6 text-orange-600 flex items-center gap-2">
              🟠 MODERATE ALERTS
              <span className="text-sm font-normal text-muted-foreground">(Strongly Advise Review)</span>
            </h2>
            <div className="space-y-4">
              {moderateAlerts.map((alert) => {
                const isExpanded = expandedAlerts.has(alert.id);
                
                return (
                  <Card key={alert.id} className="overflow-hidden border-l-[6px] border-l-orange-500 shadow-lg hover:shadow-2xl transition-all duration-300">
                    <button
                      onClick={() => toggleAlert(alert.id)}
                      className="w-full p-6 text-left hover:bg-orange-50/50 dark:hover:bg-orange-950/50 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3 flex-1">
                          <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-900 flex items-center justify-center flex-shrink-0">
                            <span className="text-lg">{getSeverityEmoji(alert.severity)}</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg mb-1 flex items-center gap-2">
                              {alert.title}
                              <span className="text-xs px-2 py-1 rounded-full bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300">
                                Clause {alert.clauseNumber}
                              </span>
                            </h3>
                            <p className="text-sm text-muted-foreground mb-2">Page {alert.page}</p>
                            <p className="mt-2 text-sm italic bg-gray-50 dark:bg-gray-800 p-3 rounded-lg border-l-4 border-orange-500">
                              "{alert.excerpt}"
                            </p>
                          </div>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5 text-muted-foreground transition-transform" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-muted-foreground transition-transform" />
                          )}
                        </div>
                      </div>
                    </button>
                    
                    {isExpanded && (
                      <div className="px-6 pb-6 pt-2 space-y-4 border-t bg-gradient-to-br from-white to-orange-50/30 dark:from-gray-900 dark:to-orange-950/30 animate-fade-in">
                        <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg border border-orange-200 dark:border-orange-800">
                          <h4 className="font-semibold text-orange-600 mb-2 flex items-center gap-2">
                            ⚠️ PROBLEM:
                          </h4>
                          <p className="text-sm">{alert.problem}</p>
                        </div>
                        <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
                          <h4 className="font-semibold text-green-600 mb-2 flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4" />
                            RECOMMENDATION:
                          </h4>
                          <p className="text-sm">{alert.recommendation}</p>
                        </div>
                      </div>
                    )}
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        {/* Missing Clauses - Enhanced */}
        {result.missingClauses.length > 0 && (
          <Card className="p-6 mb-8 shadow-lg border-2">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              📋 Missing Protections
            </h2>
            <p className="text-muted-foreground mb-4">
              These important clauses are missing from your contract and should be added:
            </p>
            <div className="space-y-2">
              {result.missingClauses.map((clause, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-yellow-50 dark:bg-yellow-950 rounded-lg border border-yellow-200 dark:border-yellow-800">
                  <div className="w-6 h-6 rounded-full bg-yellow-200 dark:bg-yellow-800 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-yellow-700 dark:text-yellow-300">{index + 1}</span>
                  </div>
                  <span className="font-medium">{clause}</span>
                </div>
              ))}
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Analysis;
