import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { CheckCircle2, Zap, Shield, Globe, MessageSquare, BarChart3 } from 'lucide-react';

const FeaturesPage = () => {
    const features = [
        {
            icon: <MessageSquare className="w-6 h-6 text-white" />,
            title: "Omnichannel Support",
            description: "Connect with customers across Email, WhatsApp, Messenger, and Live Chat from a single unified inbox."
        },
        {
            icon: <Zap className="w-6 h-6 text-white" />,
            title: "AI-Powered Automation",
            description: "Let AI agents handle routine queries instantly, freeing up your human team for complex issues."
        },
        {
            icon: <BarChart3 className="w-6 h-6 text-white" />,
            title: "Advanced Analytics",
            description: "Gain deep insights into team performance, customer satisfaction scores, and conversation trends."
        },
        {
            icon: <Globe className="w-6 h-6 text-white" />,
            title: "Multilingual Support",
            description: "Automatically translate conversations in real-time to support customers in their native language."
        },
        {
            icon: <Shield className="w-6 h-6 text-white" />,
            title: "Enterprise Security",
            description: "Bank-grade encryption, SOC2 compliance, and role-based access control to keep your data safe."
        },
        {
            icon: <CheckCircle2 className="w-6 h-6 text-white" />,
            title: "Seamless Integrations",
            description: "Connect with your favorite tools like Slack, Shopify, Salesforce, and HubSpot in seconds."
        }
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
            <SEO 
                title="Features | AI Customer Support Tools"
                description="Explore Doozadesk's powerful features: Unified Inbox, AI Agents, Omnichannel Support, and Advanced Analytics. Everything you need to delight customers."
                keywords="customer support features, helpdesk tools, AI customer service, unified inbox, support automation"
                canonicalUrl="https://doozadesk.com/features"
            />
            <Navbar />
            <div className="pt-24 pb-12 md:pt-32 md:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-12 md:mb-20">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        Everything you need to <br />
                        <span className="text-primary-600">delight your customers</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Powerful features designed to help you scale your support without scaling your headcount.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-slate-100">
                            <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-primary-500/20">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Feature Deep Dive */}
                <div className="mt-16 md:mt-32 space-y-16 md:space-y-32">
                    <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16">
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Unified Inbox for All Channels</h2>
                            <p className="text-lg text-slate-600 mb-8">
                                Stop switching between tabs. Manage all your customer conversations from one intuitive interface. Whether it's an email, a chat message, or a social media DM, it all lands in Doozadesk.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-slate-700">
                                    <CheckCircle2 className="text-green-500" />
                                    <span>Real-time synchronization</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-700">
                                    <CheckCircle2 className="text-green-500" />
                                    <span>Shared team view</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-700">
                                    <CheckCircle2 className="text-green-500" />
                                    <span>Collision detection</span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1 bg-slate-100 rounded-2xl p-8 aspect-video flex items-center justify-center">
                            <p className="text-slate-400 font-medium">Unified Inbox Interface Preview</p>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row-reverse items-center gap-8 md:gap-16">
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">AI Agents That Work 24/7</h2>
                            <p className="text-lg text-slate-600 mb-8">
                                Your customers don't sleep, and neither should your support. Our AI agents can resolve up to 70% of common queries instantly, ensuring your customers always get a fast response.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-slate-700">
                                    <CheckCircle2 className="text-green-500" />
                                    <span>Instant responses</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-700">
                                    <CheckCircle2 className="text-green-500" />
                                    <span>Human handoff when needed</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-700">
                                    <CheckCircle2 className="text-green-500" />
                                    <span>Learns from your knowledge base</span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1 bg-slate-100 rounded-2xl p-8 aspect-video flex items-center justify-center">
                            <p className="text-slate-400 font-medium">AI Agent Workflow Preview</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default FeaturesPage;
