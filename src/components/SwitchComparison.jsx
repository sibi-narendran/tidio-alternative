import React from 'react';
import { Check, X, ArrowRight } from 'lucide-react';

const SwitchComparison = ({ openModal }) => {
    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-6 border border-primary-100">
                        <span className="flex h-2 w-2 rounded-full bg-primary-600"></span>
                        Why teams are switching
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                        Switch from Zendesk or Gorgias today
                    </h2>
                    <p className="text-xl text-slate-600">
                        Stop paying for human seats you don't need. Get better automation at an affordable price with Doozadesk's AI-first platform.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
                    {/* Decorative background */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full bg-gradient-to-b from-primary-50/50 to-transparent -z-10 blur-3xl rounded-full" />

                    {/* Legacy Card */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 shadow-sm md:translate-y-8 opacity-70 hover:opacity-100 transition-opacity">
                        <div className="mb-8">
                            <h3 className="text-lg font-bold text-slate-500 mb-2">Legacy Helpdesks</h3>
                            <p className="text-slate-400 text-sm">Zendesk, Gorgias, etc.</p>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-slate-500">
                                <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                <span>Expensive "per seat" pricing models</span>
                            </li>
                            <li className="flex items-start gap-3 text-slate-500">
                                <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                <span>AI is a costly add-on, not native</span>
                            </li>
                            <li className="flex items-start gap-3 text-slate-500">
                                <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                <span>Clunky interfaces from 2010</span>
                            </li>
                            <li className="flex items-start gap-3 text-slate-500">
                                <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                <span>Months to setup and customize</span>
                            </li>
                        </ul>
                    </div>

                    {/* Doozadesk Card */}
                    <div className="bg-white rounded-2xl p-8 border-2 border-primary-500 shadow-xl shadow-primary-500/10 relative z-10 transform md:-translate-y-4">
                        <div className="absolute top-0 right-0 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg uppercase tracking-wider">
                            Best Value
                        </div>
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Doozadesk</h3>
                            <p className="text-primary-600 font-medium">AI-First Customer Support</p>
                        </div>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-3 text-slate-700 font-medium">
                                <div className="p-1 bg-green-100 rounded-full text-green-600 mt-0.5">
                                    <Check className="w-4 h-4" />
                                </div>
                                <span><span className="text-green-600">Seats free forever.</span> Pay only for AI.</span>
                            </li>
                            <li className="flex items-start gap-3 text-slate-700 font-medium">
                                <div className="p-1 bg-green-100 rounded-full text-green-600 mt-0.5">
                                    <Check className="w-4 h-4" />
                                </div>
                                <span>Native AI agents that resolve 50%+ tickets</span>
                            </li>
                            <li className="flex items-start gap-3 text-slate-700 font-medium">
                                <div className="p-1 bg-green-100 rounded-full text-green-600 mt-0.5">
                                    <Check className="w-4 h-4" />
                                </div>
                                <span>Modern, lightning-fast interface</span>
                            </li>
                            <li className="flex items-start gap-3 text-slate-700 font-medium">
                                <div className="p-1 bg-green-100 rounded-full text-green-600 mt-0.5">
                                    <Check className="w-4 h-4" />
                                </div>
                                <span>Setup in minutes, not months</span>
                            </li>
                        </ul>
                        <div className="mt-8 pt-8 border-t border-slate-100">
                            <a 
                                href="https://app.doozadesk.com/app/auth/signup" 
                                onClick={openModal}
                                className="flex items-center justify-center w-full gap-2 bg-primary-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-primary-700 transition-all hover:shadow-lg hover:-translate-y-1"
                            >
                                Switch for free
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Benefits Summary */}
                    <div className="flex flex-col justify-center md:translate-y-8">
                        <div className="space-y-6">
                            <div className="flex flex-col gap-2">
                                <h4 className="font-bold text-slate-900 text-lg">Better Automation</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Our AI agents don't just suggest answers—they take action. Refund orders, track shipments, and update subscriptions automatically.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="font-bold text-slate-900 text-lg">Affordable Price</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Stop paying $60-100/month per agent. With Doozadesk, bring your whole team for free and only pay when AI solves a problem.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="font-bold text-slate-900 text-lg">Seamless Migration</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    One-click import from Zendesk and Gorgias. Keep your history, macros, and tags. No downtime.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SwitchComparison;

