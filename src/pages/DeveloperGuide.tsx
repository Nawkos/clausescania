import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Terminal, FolderTree, Wrench, Rocket, GitBranch, Code2 } from "lucide-react";

const DeveloperGuide = () => {
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
            <span className="text-sm text-muted-foreground">Developer Documentation</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            👨‍💻 Developer Setup Guide
          </h1>
          <p className="text-xl text-muted-foreground">
            Complete instructions to reproduce and customize ClauseScan AI
          </p>
        </div>

        {/* Prerequisites */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wrench className="w-5 h-5" />
              Prerequisites
            </CardTitle>
            <CardDescription>What you need before getting started</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-primary" />
                <span><strong>Node.js 18+</strong> and <strong>npm 9+</strong> installed</span>
              </li>
              <li className="flex items-center gap-2">
                <GitBranch className="w-4 h-4 text-primary" />
                <span><strong>Git</strong> for version control</span>
              </li>
              <li className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-primary" />
                <span><strong>Lovable account</strong> (free tier works fine)</span>
              </li>
              <li className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-primary" />
                <span><strong>Code editor</strong> (VS Code recommended)</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Installation */}
        <Card className="mb-8 border-l-4 border-l-primary">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Terminal className="w-5 h-5" />
              Installation Steps
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Step 1 */}
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold">1</span>
                Clone Repository
              </h4>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                <div>$ git clone [your-github-repo-url]</div>
                <div>$ cd clausescan-ai</div>
              </div>
            </div>

            {/* Step 2 */}
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold">2</span>
                Install Dependencies
              </h4>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                <div>$ npm install</div>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                This installs all required packages including React, TypeScript, Tailwind CSS, and AI libraries.
              </p>
            </div>

            {/* Step 3 */}
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold">3</span>
                Configure Lovable Cloud
              </h4>
              <div className="bg-blue-500/5 border border-blue-500/20 p-4 rounded-lg">
                <p className="text-sm mb-2"><strong>🎉 Good news!</strong> No API keys needed!</p>
                <p className="text-sm text-muted-foreground">
                  Lovable AI is pre-configured when you enable Lovable Cloud in your project settings.
                  The LOVABLE_API_KEY is automatically provisioned - you never need to see it.
                </p>
              </div>
              <div className="mt-3 space-y-1 text-sm">
                <p className="font-semibold">To enable Lovable Cloud:</p>
                <ol className="list-decimal list-inside space-y-1 text-muted-foreground pl-4">
                  <li>Open your project in Lovable</li>
                  <li>Go to Project Settings → Tools</li>
                  <li>Enable "Lovable Cloud"</li>
                  <li>That's it! Backend is ready to use</li>
                </ol>
              </div>
            </div>

            {/* Step 4 */}
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold">4</span>
                Run Development Server
              </h4>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                <div>$ npm run dev</div>
                <div className="text-green-500 mt-2">→ Local server at http://localhost:5173</div>
              </div>
            </div>

            {/* Step 5 */}
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold">5</span>
                Build for Production
              </h4>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-1">
                <div>$ npm run build</div>
                <div>$ npm run preview</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Project Structure */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FolderTree className="w-5 h-5" />
              Project Structure
            </CardTitle>
            <CardDescription>Understanding the codebase organization</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-muted p-4 rounded-lg font-mono text-xs space-y-1">
              <div>clausescan-ai/</div>
              <div>├── src/</div>
              <div>│   ├── components/          <span className="text-muted-foreground"># React components</span></div>
              <div>│   │   ├── FileUpload.tsx   <span className="text-muted-foreground"># Upload interface</span></div>
              <div>│   │   └── ui/              <span className="text-muted-foreground"># shadcn/ui components</span></div>
              <div>│   ├── pages/               <span className="text-muted-foreground"># Page components</span></div>
              <div>│   │   ├── Index.tsx        <span className="text-muted-foreground"># Homepage</span></div>
              <div>│   │   ├── Analysis.tsx     <span className="text-muted-foreground"># Results page</span></div>
              <div>│   │   ├── About.tsx        <span className="text-muted-foreground"># About/Credits</span></div>
              <div>│   │   └── AboutAI.tsx      <span className="text-muted-foreground"># AI transparency</span></div>
              <div>│   ├── lib/                 <span className="text-muted-foreground"># Utility functions</span></div>
              <div>│   ├── integrations/        <span className="text-muted-foreground"># Supabase client</span></div>
              <div>│   └── index.css            <span className="text-muted-foreground"># Global styles</span></div>
              <div>├── supabase/</div>
              <div>│   └── functions/           <span className="text-muted-foreground"># Edge functions</span></div>
              <div>│       └── analyze-contract/ <span className="text-muted-foreground"># AI analysis logic</span></div>
              <div>│           └── index.ts     <span className="text-muted-foreground"># Main analysis endpoint</span></div>
              <div>├── public/                  <span className="text-muted-foreground"># Static assets</span></div>
              <div>├── package.json             <span className="text-muted-foreground"># Dependencies</span></div>
              <div>├── tailwind.config.ts       <span className="text-muted-foreground"># Tailwind config</span></div>
              <div>└── vite.config.ts           <span className="text-muted-foreground"># Vite config</span></div>
            </div>
          </CardContent>
        </Card>

        {/* Key Files */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>🔑 Key Files to Customize</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-l-4 border-l-purple-500 pl-4">
              <p className="font-semibold">supabase/functions/analyze-contract/index.ts</p>
              <p className="text-sm text-muted-foreground mt-1">
                <strong>Purpose:</strong> Main AI analysis logic
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Customize:</strong> AI prompt, model selection, response parsing
              </p>
              <div className="mt-2 bg-muted p-3 rounded text-xs font-mono">
                <div className="text-muted-foreground">// Change AI model:</div>
                <div>model: "google/gemini-2.5-flash"</div>
                <div className="mt-2 text-muted-foreground">// Modify analysis prompt:</div>
                <div>const systemPrompt = "You are a legal expert..."</div>
              </div>
            </div>

            <div className="border-l-4 border-l-blue-500 pl-4">
              <p className="font-semibold">src/pages/Analysis.tsx</p>
              <p className="text-sm text-muted-foreground mt-1">
                <strong>Purpose:</strong> Results page UI and scoring logic
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Customize:</strong> Score thresholds, alert display, chart styling
              </p>
            </div>

            <div className="border-l-4 border-l-green-500 pl-4">
              <p className="font-semibold">src/components/FileUpload.tsx</p>
              <p className="text-sm text-muted-foreground mt-1">
                <strong>Purpose:</strong> File upload and text extraction
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Customize:</strong> Accepted file types, size limits, extraction logic
              </p>
            </div>

            <div className="border-l-4 border-l-orange-500 pl-4">
              <p className="font-semibold">tailwind.config.ts & src/index.css</p>
              <p className="text-sm text-muted-foreground mt-1">
                <strong>Purpose:</strong> Design system and theme
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Customize:</strong> Colors, fonts, spacing, animations
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Deployment */}
        <Card className="mb-8 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Rocket className="w-5 h-5" />
              Deployment
            </CardTitle>
            <CardDescription>Deploy to production with one click</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Via Lovable (Recommended):</h4>
              <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                <li>Connect your GitHub account in Lovable settings</li>
                <li>Push your code to GitHub repository</li>
                <li>Lovable automatically deploys on every push</li>
                <li>Live URL provided instantly (e.g., clausescan.lovable.app)</li>
              </ol>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Manual Deployment (Vercel/Netlify):</h4>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-1">
                <div>$ npm run build</div>
                <div className="text-muted-foreground"># Upload /dist folder to hosting service</div>
              </div>
            </div>

            <div className="bg-blue-500/5 border border-blue-500/20 p-4 rounded-lg">
              <p className="text-sm">
                <strong>⚠️ Note:</strong> Edge functions only work with Lovable deployment. For external hosting, you'll need to set up your own backend.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Tech Stack Reference */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>🛠️ Technology Stack</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold mb-2">Frontend:</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• React 18</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• shadcn/ui</li>
                  <li>• Lucide React (icons)</li>
                  <li>• React Router</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">Backend:</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Lovable Cloud</li>
                  <li>• Supabase</li>
                  <li>• Edge Functions (Deno)</li>
                  <li>• Lovable AI Gateway</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">AI Models:</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Google Gemini 2.5 Flash</li>
                  <li>• Legal-BERT</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">Build Tools:</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Vite</li>
                  <li>• PostCSS</li>
                  <li>• ESLint</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Support */}
        <Card>
          <CardHeader>
            <CardTitle>💬 Need Help?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3">
              <GitBranch className="w-5 h-5 text-primary" />
              <div>
                <p className="font-semibold text-sm">GitHub Repository</p>
                <p className="text-sm text-muted-foreground">Full source code, issues, and discussions</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Code2 className="w-5 h-5 text-primary" />
              <div>
                <p className="font-semibold text-sm">Lovable Documentation</p>
                <p className="text-sm text-muted-foreground">docs.lovable.dev</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Button variant="outline" onClick={() => navigate("/getting-started")}>
            📚 Getting Started
          </Button>
          <Button variant="outline" onClick={() => navigate("/how-it-works")}>
            🔬 How It Works
          </Button>
          <Button variant="outline" onClick={() => navigate("/about")}>
            📋 Full Credits
          </Button>
        </div>
      </main>
    </div>
  );
};

export default DeveloperGuide;
