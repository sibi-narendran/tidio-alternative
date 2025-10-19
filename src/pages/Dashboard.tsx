import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Dashboard = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string | null>(null);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      const user = data.session?.user || null;
      setEmail(user?.email ?? null);
      const url = (user?.user_metadata as { avatar_url?: string } | undefined)?.avatar_url as string | undefined;
      setAvatarUrl(url || null);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      const user = session?.user || null;
      setEmail(user?.email ?? null);
      const url = (user?.user_metadata as { avatar_url?: string } | undefined)?.avatar_url as string | undefined;
      setAvatarUrl(url || null);
    });
    return () => {
      sub.subscription.unsubscribe();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white px-6 pt-24 pb-16">
      {/* Fixed top nav with true top-right avatar */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-white border-b">
        <div className="w-full px-10 py-4 flex items-center justify-between">
          <div className="text-xl font-bold">dooza</div>
          <button onClick={() => navigate('/settings')} className="rounded-full">
            <Avatar className="h-9 w-9">
              {avatarUrl ? (
                <AvatarImage src={avatarUrl} alt="Profile" />
              ) : (
                <AvatarFallback>{(email?.[0] || '?').toUpperCase()}</AvatarFallback>
              )}
            </Avatar>
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">Your dashboard</h1>
        <p className="text-gray-600 mb-10">Welcome to dooza. Start by creating your first form or explore settings. We’ll add features here as we build them.</p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-xl shadow-sm bg-white">
            <h3 className="font-semibold mb-2">Create a new form</h3>
            <p className="text-sm text-gray-600 mb-4">Kick off a blank form and customize it.</p>
            <Button className="w-full">New form</Button>
          </div>

          <div className="p-6 border rounded-xl shadow-sm bg-white">
            <h3 className="font-semibold mb-2">View responses</h3>
            <p className="text-sm text-gray-600 mb-4">See submissions and export when ready.</p>
            <Button variant="outline" className="w-full">Open responses</Button>
          </div>

          <div className="p-6 border rounded-xl shadow-sm bg-white">
            <h3 className="font-semibold mb-2">Integrations</h3>
            <p className="text-sm text-gray-600 mb-4">Connect Slack, Google Sheets, and more.</p>
            <Button variant="outline" className="w-full">Browse integrations</Button>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Dashboard;


