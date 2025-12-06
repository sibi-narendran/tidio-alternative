import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// Lazy load pages
const LandingPage = lazy(() => import('./pages/LandingPage'));
const AuthGateway = lazy(() => import('./pages/AuthGateway'));
const Admin = lazy(() => import('./pages/Admin'));
const FeaturesPage = lazy(() => import('./pages/FeaturesPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const GorgiasAlternative = lazy(() => import('./pages/GorgiasAlternative'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Loading Fallback
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
  </div>
);

function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/get-started" element={<AuthGateway />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/gorgias-alternative" element={<GorgiasAlternative />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
