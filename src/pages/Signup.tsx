import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabaseClient";
import { addEmail } from "@/lib/emailStore";
import { trackFormSubmit, trackAdsConversion } from "@/lib/analytics";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    try {
      await addEmail(email);
      trackFormSubmit();
      trackAdsConversion();
      setIsSubmitted(true);
    } catch (error) {
      console.error('Failed to submit email:', error);
      alert('Failed to submit email. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Simple placeholder actions for OAuth/SSO (non-functional in this demo)
  const notImplemented = (provider: string) => {
    alert(`${provider} sign-in isn’t set up yet.`);
  };

  const handleGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin + '/signup'
      }
    });
    if (error) alert(error.message);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4 pt-20">
        <div className="w-full max-w-lg">
          <div className="bg-white border border-gray-200 rounded-2xl p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Welcome!
            </h2>
            
            <p className="text-lg text-gray-600 mb-10">
              Check your email to get started
            </p>
            
            <Button 
              onClick={() => navigate('/')} 
              variant="outline" 
              className="w-full py-3 rounded-full border-2 border-gray-300 text-gray-700 hover:border-orange-500 hover:text-orange-600 hover:bg-orange-50 transition-all duration-300"
            >
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 pt-20">
      <div className="w-full max-w-xl">
        <div className="bg-white border border-gray-200 rounded-2xl p-12 shadow-2xl">
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              Log in or Sign up
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Get better data with conversational forms, surveys, quizzes & more.
            </p>
          </div>

          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full h-14 rounded-xl border-2 border-gray-300 bg-white text-gray-900 hover:bg-gray-50 justify-start px-5"
              type="button"
              onClick={handleGoogle}
            >
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
              <span className="ml-3 text-base">Continue with Google</span>
            </Button>
          </div>

          <div className="my-8 border-t" />

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <Input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-14 text-base rounded-xl border-2 border-gray-300 focus:border-orange-500 focus:ring-0"
                disabled={isLoading}
              />

              <Button
                type="submit"
                className="w-full h-14 text-base font-semibold rounded-xl bg-[#2f2830] text-white hover:bg-[#262027]"
                disabled={isLoading || !email}
              >
                {isLoading ? (
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Setting up...
                  </div>
                ) : (
                  "Continue with email"
                )}
              </Button>
            </div>
          </form>

          
        </div>
      </div>
    </div>
  );
};

export default Signup;
