import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// OTP inputs removed for one-click confirmation flow
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabaseClient";
import { addEmail } from "@/lib/emailStore";
import { trackFormSubmit, trackAdsConversion } from "@/lib/analytics";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [mode] = useState<'signup' | 'login'>('signup');
  const [password, setPassword] = useState("");
  // One-click confirmation flow; no OTP state needed
  const [resendIn, setResendIn] = useState(0);
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

  // Auth flow: signup uses one-click email confirmation; login uses password
  const handleAuth = async () => {
    if (!email) return;
    setIsLoading(true);
    try {
      if (mode === 'signup') {
        // Prevent duplicate accounts: if we already recorded this email, redirect to login
        try {
          const { data: existing } = await supabase
            .from('emails')
            .select('id')
            .eq('email', email)
            .maybeSingle();
          if (existing) {
            alert('An account with this email already exists. Please log in.');
            navigate('/signin');
            return;
          }
        } catch (_) {
          // If this check fails due to RLS, fall through; Supabase Auth still prevents duplicates server-side
        }
        // store password locally until the user confirms via email link
        try { localStorage.setItem(`pendingPwd:${email}`, password); } catch (_) {}
        const { error } = await supabase.auth.signInWithOtp({
          email,
          options: {
            shouldCreateUser: true,
            emailRedirectTo: `${window.location.origin}/auth/callback?email=${encodeURIComponent(email)}`
          }
        });
        if (error) throw error;
        setIsSubmitted(true);
        setResendIn(30);
        const timer = setInterval(() => {
          setResendIn((s) => {
            if (s <= 1) {
              clearInterval(timer);
              return 0;
            }
            return s - 1;
          });
          return undefined as unknown as number;
        }, 1000);
      } else {
        if (!password) return;
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        navigate('/');
      }
    } catch (err: any) {
      alert(err?.message || 'Authentication failed');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4 pt-20">
        <div className="w-full max-w-lg">
          <div className="bg-white border border-gray-200 rounded-2xl p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Check your inbox
            </h2>
            
            <p className="text-lg text-gray-600 mb-6">
              We sent a magic link to launch your Chatwoot sandbox. Use it for the setup call too.
            </p>
            <p className="text-sm text-gray-500 mb-10">
              Didn’t see it? Search for <span className="font-semibold">support@dooza.ai</span> or book a call now.
            </p>
            
            <div className="flex flex-col gap-3">
              <Button 
                onClick={() => navigate('/')} 
                variant="outline" 
                className="w-full py-3 rounded-full border-2 border-gray-300 text-gray-700 hover:border-orange-500 hover:text-orange-600 hover:bg-orange-50 transition-all duration-300"
              >
                Back to home
              </Button>
              <Button
                onClick={() => window.open('https://cal.com/sibinarendran/demo', '_blank')}
                variant="default"
                className="w-full py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-all duration-300"
              >
                Book setup call
              </Button>
            </div>
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
              Try the Chatwoot Tidio replacement
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Grab a sandbox inbox with one AI agent, migration help, and weekly QA. No card needed.
            </p>
            <div className="mt-6 grid gap-2 text-sm text-gray-600">
              <div className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>Unlimited human seats. Only AI agents are billed when you go live.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>WhatsApp, Messenger, Instagram, email, and chat come prewired.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>Transcripts and Shopify order actions are included.</span>
              </div>
            </div>
          </div>

          {/* Pure signup page */}

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
              <Input
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-14 text-base rounded-xl border-2 border-gray-300 focus:border-orange-500 focus:ring-0"
                disabled={isLoading}
              />
              <div className="text-sm text-gray-600"></div>

              <Button
                type="button"
                onClick={handleAuth}
                className="w-full h-14 text-base font-semibold rounded-xl bg-orange-500 text-white hover:bg-orange-600"
                disabled={isLoading || !email || !password || resendIn > 0}
              >
                {isLoading ? (
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    {'Sending link...'}
                  </div>
                ) : (
                  resendIn > 0 ? `Resend available in ${resendIn}s` : 'Email me sandbox access'
                )}
              </Button>

              <p className="text-center text-sm text-gray-600">
                Already have an account? <button className="underline" onClick={() => navigate('/signin')}>Log in</button>
              </p>
            </div>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default Signup;
