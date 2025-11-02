import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Analysis from "./pages/Analysis";
import AboutAI from "./pages/AboutAI";
import About from "./pages/About";
import GettingStarted from "./pages/GettingStarted";
import HowItWorks from "./pages/HowItWorks";
import DeveloperGuide from "./pages/DeveloperGuide";
import UserGuide from "./pages/UserGuide";
import TechnicalExcellence from "./pages/TechnicalExcellence";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/about-ai" element={<AboutAI />} />
          <Route path="/about" element={<About />} />
          <Route path="/getting-started" element={<GettingStarted />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/developer-guide" element={<DeveloperGuide />} />
          <Route path="/user-guide" element={<UserGuide />} />
          <Route path="/technical-excellence" element={<TechnicalExcellence />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
