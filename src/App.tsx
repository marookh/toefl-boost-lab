
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PracticeTests from "./pages/PracticeTests";
import TOEFLTips from "./pages/TOEFLTips";
import Vocabulary from "./pages/Vocabulary";
import VideoResources from "./pages/VideoResources";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/practice" element={<PracticeTests />} />
          <Route path="/tips" element={<TOEFLTips />} />
          <Route path="/vocabulary" element={<Vocabulary />} />
          <Route path="/resources" element={<VideoResources />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
