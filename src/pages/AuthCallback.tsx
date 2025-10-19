import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { addEmail } from "@/lib/emailStore";
import { trackFormSubmit, trackAdsConversion } from "@/lib/analytics";

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // If we have the user email in the URL (optional); otherwise just proceed
    const params = new URLSearchParams(window.location.search);
    const email = params.get('email');
    if (email) {
      addEmail(email).then(() => {
        trackFormSubmit();
        trackAdsConversion();
      }).catch(() => {});
    }
  }, []);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 pt-20">
      <div className="w-full max-w-lg">
        <div className="bg-white border border-gray-200 rounded-2xl p-12 text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            You’re in!
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Your email has been confirmed. Welcome to dooza forms.
          </p>
          <Button onClick={() => navigate('/')} className="w-full h-12 rounded-xl">
            Go to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AuthCallback;


