import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabaseClient";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [resetSent, setResetSent] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) return;
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      navigate('/dashboard');
    } catch (err: any) {
      alert(err?.message || 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgot = async () => {
    if (!email) return;
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: window.location.origin + '/reset-password'
      });
      if (error) throw error;
      setResetSent(true);
    } catch (err: any) {
      alert(err?.message || 'Failed to send reset email');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 pt-20">
      <div className="w-full max-w-xl">
        <div className="bg-white border border-gray-200 rounded-2xl p-12 shadow-2xl">
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">Log in</h1>
            <p className="mt-4 text-gray-600 text-lg">Welcome back to dooza forms.</p>
          </div>

          <div className="space-y-4">
            <Input type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} className="h-14 text-base rounded-xl border-2 border-gray-300 focus:border-orange-500 focus:ring-0" />
            <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="h-14 text-base rounded-xl border-2 border-gray-300 focus:border-orange-500 focus:ring-0" />

            <Button type="button" onClick={handleLogin} className="w-full h-14 text-base font-semibold rounded-xl bg-[#2f2830] text-white hover:bg-[#262027]" disabled={isLoading || !email || !password}>
              {isLoading ? 'Logging in…' : 'Log in'}
            </Button>

            <Button type="button" variant="outline" onClick={handleForgot} className="w-full h-12 rounded-xl" disabled={isLoading || !email}>
              {resetSent ? 'Reset link sent' : 'Forgot password? Email me a reset link'}
            </Button>

            <p className="text-center text-sm text-gray-600">
              New here? <button className="underline" onClick={() => navigate('/signup')}>Create an account</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;


