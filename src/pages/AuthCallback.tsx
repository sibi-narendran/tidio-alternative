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
            Chatwoot sandbox unlocked
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Email confirmed. Sandbox access and setup details land within 24 hours.
          </p>
          <div className="flex gap-3">
            <Button onClick={() => window.open("https://cal.com/sibinarendran/demo", "_blank")} className="w-full h-12 rounded-xl bg-orange-500 hover:bg-orange-600">
              Book setup call
            </Button>
            <Button onClick={() => navigate('/')} variant="outline" className="w-full h-12 rounded-xl">
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthCallback;


