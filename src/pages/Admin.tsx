import { useState, useEffect } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getAnalyticsData } from "@/lib/analytics";

interface Signup {
  id: number;
  email: string;
  created_at: string;
  signup_method: string;
  is_verified: boolean;
}

interface Signin {
  id: number;
  email: string | null;
  created_at: string;
  success: boolean;
  error_message: string | null;
  signin_method: string;
}

interface LegacyEmail {
  email: string;
  timestamp: string;
}

const Admin = () => {
  const [analyticsData, setAnalyticsData] = useState<{
    signups: Signup[];
    signins: Signin[];
    legacyEmails: LegacyEmail[];
  }>({
    signups: [],
    signins: [],
    legacyEmails: []
  });
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'overview' | 'signups' | 'signins' | 'legacy'>('overview');

  useEffect(() => {
    loadAnalyticsData();
  }, []);

  const loadAnalyticsData = async () => {
    try {
      const data = await getAnalyticsData();
      setAnalyticsData(data);
    } catch (error) {
      console.error('Error loading analytics data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-6 pt-40 text-center">
          <div className="animate-pulse">Loading analytics...</div>
        </div>
      </div>
    );
  }

  const { signups, signins, legacyEmails } = analyticsData;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-6 pt-32 pb-20">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Analytics Dashboard</h1>
          <p className="text-gray-600">Track user signups, signins, and legacy email submissions</p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Total Signups</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">{signups.length}</div>
              <p className="text-xs text-gray-500">New registrations</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Total Signins</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{signins.length}</div>
              <p className="text-xs text-gray-500">Login attempts</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Success Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {signins.length > 0 ? Math.round((signins.filter(s => s.success).length / signins.length) * 100) : 0}%
              </div>
              <p className="text-xs text-gray-500">Successful logins</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Legacy Emails</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">{legacyEmails.length}</div>
              <p className="text-xs text-gray-500">Old email submissions</p>
            </CardContent>
          </Card>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-1 mb-6 bg-white p-1 rounded-lg border">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'signups', label: 'Signups' },
            { id: 'signins', label: 'Signins' },
            { id: 'legacy', label: 'Legacy' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <Card>
          <CardContent className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Recent Activity</h3>
                  <div className="space-y-2">
                    {[...signups.slice(0, 3), ...signins.slice(0, 3)]
                      .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
                      .slice(0, 5)
                      .map((item, index) => (
                        <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                          <div className="flex items-center space-x-3">
                            {'email' in item ? (
                              <>
                                <Badge variant="outline" className="text-green-600">
                                  Signup
                                </Badge>
                                <span className="text-sm text-gray-600">{item.email}</span>
                              </>
                            ) : (
                              <>
                                <Badge variant={item.success ? "default" : "destructive"}>
                                  {item.success ? 'Login' : 'Failed Login'}
                                </Badge>
                                <span className="text-sm text-gray-600">{item.email || 'Unknown'}</span>
                              </>
                            )}
                          </div>
                          <span className="text-xs text-gray-500">{formatDate(item.created_at)}</span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'signups' && (
              <div>
                <h3 className="text-lg font-semibold mb-3">All Signups ({signups.length})</h3>
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {signups.map((signup) => (
                    <div key={signup.id} className="flex items-center justify-between py-3 border-b border-gray-100">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <div>
                          <p className="text-sm font-medium">{signup.email}</p>
                          <p className="text-xs text-gray-500">
                            Method: {signup.signup_method} • Verified: {signup.is_verified ? 'Yes' : 'No'}
                          </p>
                        </div>
                      </div>
                      <span className="text-xs text-gray-500">{formatDate(signup.created_at)}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'signins' && (
              <div>
                <h3 className="text-lg font-semibold mb-3">All Signins ({signins.length})</h3>
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {signins.map((signin) => (
                    <div key={signin.id} className="flex items-center justify-between py-3 border-b border-gray-100">
                      <div className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${signin.success ? 'bg-green-500' : 'bg-red-500'}`}></div>
                        <div>
                          <p className="text-sm font-medium">{signin.email || 'Unknown email'}</p>
                          <p className="text-xs text-gray-500">
                            Method: {signin.signin_method}
                            {!signin.success && signin.error_message && ` • Error: ${signin.error_message}`}
                          </p>
                        </div>
                      </div>
                      <span className="text-xs text-gray-500">{formatDate(signin.created_at)}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'legacy' && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Legacy Email Submissions ({legacyEmails.length})</h3>
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {legacyEmails.map((email, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-sm font-medium">{email.email}</span>
                      </div>
                      <span className="text-xs text-gray-500">{formatDate(email.timestamp)}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <Button onClick={loadAnalyticsData} variant="outline">
            Refresh Data
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
