import React, { useState } from 'react';
import { Check, Plus, Minus } from 'lucide-react';

const Pricing = ({ openModal }) => {
    const [aiAgents, setAiAgents] = useState(1);
    const pricePerAgent = 5;
    const resolutionsPerAgent = 100;

    return (
        <div id="pricing" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h2>
                    <p className="text-xl text-slate-600">
                        Pay only for AI, not for human seats. Doozadesk is free for human agents forever.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Humans Plan */}
                    <div className="bg-white rounded-3xl shadow-xl border-2 border-primary-100 p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-primary-100 text-primary-700 px-4 py-1 rounded-bl-xl font-medium text-sm">
                            Most Popular
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">For Humans</h3>
                        <div className="flex items-baseline mb-6">
                            <span className="text-5xl font-bold text-slate-900">$0</span>
                            <span className="text-slate-500 ml-2">/forever</span>
                        </div>
                        <p className="text-slate-600 mb-8">
                            Complete access to all features for human agents. No hidden fees.
                        </p>
                        <a href="https://app.doozadesk.com/app/auth/signup" onClick={openModal} className="block w-full bg-primary-600 text-white py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors mb-8 text-center">
                            Get Started for Free
                        </a>
                        <ul className="space-y-4">
                            {[
                                'Unlimited human agents',
                                'Unlimited conversations',
                                'All channels included',
                                'Mobile apps',
                                'Community support'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center text-slate-700">
                                    <Check size={20} className="text-green-500 mr-3 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* AI Plan */}
                    <div className="bg-slate-900 rounded-3xl shadow-xl border border-slate-800 p-8 text-white">
                        <h3 className="text-2xl font-bold mb-2">For AI Agents</h3>
                        <div className="flex items-baseline mb-2">
                            <span className="text-5xl font-bold">${aiAgents * pricePerAgent}</span>
                            <span className="text-slate-400 ml-2">/month</span>
                        </div>
                        <p className="text-primary-400 font-medium mb-6">
                            {aiAgents * resolutionsPerAgent} Resolutions included
                        </p>

                        {/* Agent Counter */}
                        <div className="flex items-center justify-between bg-slate-800 rounded-xl p-4 mb-8 border border-slate-700">
                            <span className="font-medium text-slate-300">AI Agents</span>
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => setAiAgents(Math.max(1, aiAgents - 1))}
                                    className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center hover:bg-slate-600 transition-colors disabled:opacity-50"
                                    disabled={aiAgents <= 1}
                                >
                                    <Minus size={16} />
                                </button>
                                <span className="text-xl font-bold w-8 text-center">{aiAgents}</span>
                                <button
                                    onClick={() => setAiAgents(aiAgents + 1)}
                                    className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center hover:bg-primary-500 transition-colors"
                                >
                                    <Plus size={16} />
                                </button>
                            </div>
                        </div>

                        <a href="https://app.doozadesk.com/app/auth/signup" onClick={openModal} className="block w-full bg-white text-slate-900 py-3 rounded-xl font-semibold hover:bg-slate-100 transition-colors mb-8 text-center">
                            Subscribe Now
                        </a>
                        <ul className="space-y-4">
                            {[
                                'Full AI Agent (Captain)',
                                'Automated responses',
                                'Smart suggestions',
                                'Content generation',
                                'Priority support'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center text-slate-300">
                                    <Check size={20} className="text-primary-400 mr-3 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
