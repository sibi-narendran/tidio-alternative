import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Pricing from "./pages/Pricing";
import Signup from "./pages/Signup";
import AuthCallback from "./pages/AuthCallback";
import Signin from "./pages/Signin";
import ResetPassword from "./pages/ResetPassword";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const BannerWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const showBanner = ["/", "/pricing", "/signin", "/signup"].includes(location.pathname);
  return (
    <>
      {showBanner && (
        <div className="fixed top-0 left-0 right-0 z-[60] bg-orange-500 text-white py-3 text-center">
          <div className="container mx-auto px-6">
            <p className="text-sm md:text-base font-semibold">
              Better AI, 2x affordable then Tidio
            </p>
          </div>
        </div>
      )}
      {children}
    </>
  );
};

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <BannerWrapper>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/auth/callback" element={<AuthCallback />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/admin" element={<Admin />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BannerWrapper>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
