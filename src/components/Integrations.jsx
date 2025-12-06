import React from 'react';
import { Globe } from 'lucide-react';

const Integrations = () => {
    const tools = [
        { name: "WhatsApp", icon: "https://cdn.simpleicons.org/whatsapp" },
        { name: "Instagram", icon: "https://cdn.simpleicons.org/instagram" },
        { name: "Shopify", icon: "https://cdn.simpleicons.org/shopify" },
        { name: "Zendesk", icon: "https://cdn.simpleicons.org/zendesk" },
        { name: "Mail", icon: "https://cdn.simpleicons.org/gmail" },
        { name: "Gorgias", icon: "https://logo.clearbit.com/gorgias.com" },
        { name: "Vapi Voice AI", icon: "https://logo.clearbit.com/vapi.ai" },
        { name: "Messenger", icon: "https://cdn.simpleicons.org/messenger" },
        { name: "Websites", iconComponent: <Globe className="w-12 h-12 mb-4 opacity-75 group-hover:opacity-100 transition-opacity text-slate-500 group-hover:text-primary-600" /> }
    ];

    return (
        <div className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                    Connect with your favorite tools
                </h2>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-16">
                    Integrate Doozadesk with the tools you already use. Sync data, automate workflows, and keep everything in sync.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
                    {tools.map((tool, idx) => (
                        <div key={idx} className="flex flex-col items-center justify-center p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-all hover:border-primary-100 group hover:-translate-y-1">
                            {tool.icon ? (
                                <img src={tool.icon} alt={tool.name} className="w-12 h-12 mb-4 opacity-75 group-hover:opacity-100 transition-opacity object-contain" />
                            ) : (
                                tool.iconComponent
                            )}
                            <span className="text-lg font-semibold text-slate-500 group-hover:text-primary-600 transition-colors">{tool.name}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-12">
                    <a href="#" className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center">
                        View all integrations &rarr;
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Integrations;
