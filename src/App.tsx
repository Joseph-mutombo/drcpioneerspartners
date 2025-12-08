
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";
import NotImplemented from "./pages/NotImplemented";
import Formations from "./pages/Formations";
import Certifications from "./pages/Certifications";
import Blog from "./pages/Blog";
import Audit from "./pages/Audit";
import Chatbot from "./components/block/chatbot";
import GoToTopProvider from "./components/GoToTopProvider";
import Navigators from "./pages/Navigators";
import ICXS from "./pages/ICXS";
import IDCXS from "./pages/IDCXS";
import IEHWS from "./pages/IEHWS";
import Tisse from "./pages/Tisse";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Chatbot />
      <GoToTopProvider />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/navigators" element={<Navigators />} />
            <Route path="/audit-consultation" element={<Audit />} />
            <Route path="/formations" element={<Formations />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/certifications/icxs" element={<ICXS />} />
            <Route path="/certifications/idcxs" element={<IDCXS />} />
            <Route path="/certifications/iehws" element={<IEHWS />} />
            <Route path="/certifications/tisse" element={<Tisse />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
