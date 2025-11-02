import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Shield, ArrowLeft, Download, ChevronDown, ChevronUp, AlertTriangle, CheckCircle2, Info } from "lucide-react";
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
    // Simulate progress updates
    const progressSteps = [
      { progress: 0, message: "Reading document..." },
      { progress: 25, message: "Detecting clauses..." },
      { progress: 50, message: "Analyzing risks..." },
      { progress: 75, message: "Generating report..." },
      { progress: 100, message: "Complete!" },
    ];

    for (const step of progressSteps) {
      await new Promise(resolve => setTimeout(resolve, 800));
      setProgress(step.progress);
      setStatusMessage(step.message);
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

  if (isAnalyzing) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md p-8">
          <div className="text-center">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 animate-pulse">
              <Shield className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Analyzing Contract</h2>
            <p className="text-muted-foreground mb-6">{statusMessage}</p>
            <Progress value={progress} className="mb-4" />
            <p className="text-sm text-muted-foreground">~30 seconds</p>
          </div>
        </Card>
      </div>
    );
  }

  if (!result) return null;

  const criticalAlerts = result.alerts.filter(a => a.severity === "critical");
  const moderateAlerts = result.alerts.filter(a => a.severity === "moderate");
  const attentionAlerts = result.alerts.filter(a => a.severity === "attention");

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={() => navigate("/")}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <div className="flex items-center gap-3">
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Overall Score Card */}
        <Card className="p-8 mb-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-6">OVERALL RISK SCORE</h1>
            
            <div className={`inline-flex items-center justify-center w-32 h-32 rounded-full mb-6 ${
              result.riskLevel === "danger" ? "bg-danger/10" :
              result.riskLevel === "caution" ? "bg-warning/10" :
              "bg-success/10"
            }`}>
              <span className={`text-5xl font-bold ${
                result.riskLevel === "danger" ? "text-danger" :
                result.riskLevel === "caution" ? "text-warning" :
                "text-success"
              }`}>
                {result.overallScore}
              </span>
            </div>

            <Progress 
              value={result.overallScore} 
              className={`mb-6 ${
                result.riskLevel === "danger" ? "[&>div]:bg-danger" :
                result.riskLevel === "caution" ? "[&>div]:bg-warning" :
                "[&>div]:bg-success"
              }`}
            />

            <div className={`text-xl font-semibold mb-6 ${
              result.riskLevel === "danger" ? "text-danger" :
              result.riskLevel === "caution" ? "text-warning" :
              "text-success"
            }`}>
              {result.riskLevel === "danger" && "⚠️ DANGER LEVEL - Do Not Sign Without Changes"}
              {result.riskLevel === "caution" && "⚠️ CAUTION - Review Carefully"}
              {result.riskLevel === "safe" && "✓ SAFE - Acceptable Risk Level"}
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-danger">{criticalAlerts.length}</p>
                <p className="text-sm text-muted-foreground">Critical Issues</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-warning">{moderateAlerts.length}</p>
                <p className="text-sm text-muted-foreground">Moderate Concerns</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-muted-foreground">{attentionAlerts.length}</p>
                <p className="text-sm text-muted-foreground">Minor Points</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Market Comparison */}
        <Card className="p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">📊 Market Comparison</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>Your Contract:</span>
              <span className={`font-bold ${
                result.riskLevel === "danger" ? "text-danger" :
                result.riskLevel === "caution" ? "text-warning" :
                "text-success"
              }`}>{result.overallScore}/100</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Industry Average:</span>
              <span className="font-bold text-success">{result.marketComparison.averageScore}/100</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Best Seen:</span>
              <span className="font-bold text-success">{result.marketComparison.bestScore}/100</span>
            </div>
            <div className="mt-4 p-4 bg-warning/10 rounded-lg">
              <p className="text-sm">
                ⚠️ This contract is riskier than <strong>{result.marketComparison.percentile}%</strong> of similar contracts in our database
              </p>
            </div>
          </div>
        </Card>

        {/* Critical Alerts */}
        {criticalAlerts.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-danger">🔴 CRITICAL ALERTS (Must Negotiate)</h2>
            <div className="space-y-4">
              {criticalAlerts.map((alert) => {
                const Icon = getSeverityIcon(alert.severity);
                const isExpanded = expandedAlerts.has(alert.id);
                
                return (
                  <Card key={alert.id} className="overflow-hidden border-l-4 border-l-danger">
                    <button
                      onClick={() => toggleAlert(alert.id)}
                      className="w-full p-6 text-left hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3 flex-1">
                          <Icon className="w-5 h-5 text-danger mt-1 flex-shrink-0" />
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg mb-1">
                              Alert #{alert.id} - Clause {alert.clauseNumber} (Page {alert.page})
                            </h3>
                            <p className="text-muted-foreground">{alert.title}</p>
                            <p className="mt-2 text-sm italic">"{alert.excerpt}"</p>
                          </div>
                        </div>
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                        )}
                      </div>
                    </button>
                    
                    {isExpanded && (
                      <div className="px-6 pb-6 pt-2 space-y-4 border-t">
                        <div>
                          <h4 className="font-semibold text-danger mb-2">❌ PROBLEM:</h4>
                          <p className="text-sm">{alert.problem}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-success mb-2">✅ RECOMMENDATION:</h4>
                          <p className="text-sm">{alert.recommendation}</p>
                        </div>
                        <div className="pt-2">
                          <p className="text-xs text-muted-foreground">📍 LOCATION: Page {alert.page}, Clause {alert.clauseNumber}</p>
                        </div>
                      </div>
                    )}
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        {/* Moderate Alerts */}
        {moderateAlerts.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-warning">🟠 MODERATE ALERTS (Strongly Advise Review)</h2>
            <div className="space-y-4">
              {moderateAlerts.map((alert) => {
                const Icon = getSeverityIcon(alert.severity);
                const isExpanded = expandedAlerts.has(alert.id);
                
                return (
                  <Card key={alert.id} className="overflow-hidden border-l-4 border-l-warning">
                    <button
                      onClick={() => toggleAlert(alert.id)}
                      className="w-full p-6 text-left hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3 flex-1">
                          <Icon className="w-5 h-5 text-warning mt-1 flex-shrink-0" />
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg mb-1">
                              Alert #{alert.id} - Clause {alert.clauseNumber} (Page {alert.page})
                            </h3>
                            <p className="text-muted-foreground">{alert.title}</p>
                            <p className="mt-2 text-sm italic">"{alert.excerpt}"</p>
                          </div>
                        </div>
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                        )}
                      </div>
                    </button>
                    
                    {isExpanded && (
                      <div className="px-6 pb-6 pt-2 space-y-4 border-t">
                        <div>
                          <h4 className="font-semibold text-warning mb-2">⚠️ PROBLEM:</h4>
                          <p className="text-sm">{alert.problem}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-success mb-2">✅ RECOMMENDATION:</h4>
                          <p className="text-sm">{alert.recommendation}</p>
                        </div>
                        <div className="pt-2">
                          <p className="text-xs text-muted-foreground">📍 LOCATION: Page {alert.page}, Clause {alert.clauseNumber}</p>
                        </div>
                      </div>
                    )}
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        {/* Missing Clauses */}
        {result.missingClauses.length > 0 && (
          <Card className="p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">💡 MISSING CLAUSES</h2>
            <p className="text-muted-foreground mb-4">Important protections not found in this contract:</p>
            <ul className="space-y-2">
              {result.missingClauses.map((clause, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {clause}
                </li>
              ))}
            </ul>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Analysis;
