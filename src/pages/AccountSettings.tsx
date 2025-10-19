import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const AccountSettings = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white px-6 pt-32 pb-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">Account settings</h1>
        <p className="text-gray-600 mb-8">Manage your profile, security, and preferences. (Placeholder UI)</p>

        <div className="grid gap-6">
          <div className="p-6 border rounded-xl bg-white">
            <h3 className="font-semibold mb-2">Profile</h3>
            <p className="text-sm text-gray-600">Name, avatar, and contact email.</p>
          </div>
          <div className="p-6 border rounded-xl bg-white">
            <h3 className="font-semibold mb-2">Security</h3>
            <p className="text-sm text-gray-600">Change password, sessions, and 2FA (coming soon).</p>
          </div>
        </div>

        <div className="mt-8">
          <Button variant="outline" onClick={() => navigate('/dashboard')}>Back to dashboard</Button>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;



