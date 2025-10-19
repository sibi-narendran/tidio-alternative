import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabaseClient";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSetPassword = async () => {
    if (!password) return;
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.updateUser({ password });
      if (error) throw error;
      navigate('/signin');
    } catch (err: any) {
      alert(err?.message || 'Failed to set password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 pt-20">
      <div className="w-full max-w-xl">
        <div className="bg-white border border-gray-200 rounded-2xl p-12 shadow-2xl">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">Set new password</h1>
            <p className="mt-4 text-gray-600">Choose a strong password you can remember.</p>
          </div>

          <div className="space-y-4">
            <Input type="password" placeholder="New password" value={password} onChange={(e) => setPassword(e.target.value)} className="h-14 text-base rounded-xl border-2 border-gray-300 focus:border-orange-500 focus:ring-0" />
            <Button type="button" onClick={handleSetPassword} className="w-full h-14 text-base font-semibold rounded-xl bg-[#2f2830] text-white hover:bg-[#262027]" disabled={isLoading || !password}>
              {isLoading ? 'Saving…' : 'Save password'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;


