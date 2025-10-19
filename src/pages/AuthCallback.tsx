import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { addEmail } from "@/lib/emailStore";
import { trackFormSubmit, trackAdsConversion } from "@/lib/analytics";
import { supabase } from "@/lib/supabaseClient";

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // If we have the user email in the URL (optional); otherwise just proceed
    const params = new URLSearchParams(window.location.search);
    const email = params.get('email');
    (async () => {
      try {
        if (email) {
          // apply pending password if present
          const key = `pendingPwd:${email}`;
          const pending = localStorage.getItem(key);
          if (pending) {
            await supabase.auth.updateUser({ password: pending });
            localStorage.removeItem(key);
          }
          await addEmail(email);
          trackFormSubmit();
          trackAdsConversion();
        }
      } catch (_) {}
    })();
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
          <div className="flex gap-3">
            <Button onClick={() => navigate('/dashboard')} className="w-full h-12 rounded-xl">
              Go to Dashboard
            </Button>
            <Button onClick={() => navigate('/')} variant="outline" className="w-full h-12 rounded-xl">
              Go to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthCallback;


