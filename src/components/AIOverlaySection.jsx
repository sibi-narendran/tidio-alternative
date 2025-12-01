import { ArrowRight, CheckCircle2 } from 'lucide-react';

const AIOverlaySection = ({ openModal }) => {
    return (
        <section className="py-24 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="order-2 lg:order-1">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Keep Zendesk or Intercom.<br />
                            <span className="text-primary-600">Add AI Superpowers.</span>
                        </h2>
                        <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                            Not ready to migrate? You don't have to. Doozadesk sits on top of your existing helpdesk to automate tickets while keeping your team in their familiar tools.
                        </p>

                        <div className="space-y-6 mb-10">
                            <div className="flex gap-4 items-start">
                                <CheckCircle2 className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-1">Two-way Sync</h3>
                                    <p className="text-slate-600">Tickets update in real-time across both platforms. No data silos.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <CheckCircle2 className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-1">AI Layer</h3>
                                    <p className="text-slate-600">Our AI resolves routine queries before they even reach your human agents.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <CheckCircle2 className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-1">Zero Disruption</h3>
                                    <p className="text-slate-600">Your team keeps working in Zendesk or Intercom exactly as they do today.</p>
                                </div>
                            </div>
                        </div>

                        <a 
                            href="https://app.doozadesk.com/app/auth/signup" 
                            onClick={openModal}
                            className="inline-flex items-center gap-2 text-primary-600 font-bold text-lg hover:text-primary-700 transition-colors group"
                        >
                            Connect your helpdesk
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>

                    {/* Visual Representation */}
                    <div className="order-1 lg:order-2 relative">
                        <div className="relative bg-slate-50 rounded-3xl p-8 border border-slate-100">
                            {/* Connecting Lines */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-24 flex items-center justify-center -z-0">
                                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-slate-300 to-transparent border-t border-dashed border-slate-400/50"></div>
                            </div>

                            <div className="flex flex-col items-center gap-8 relative z-10">
                                {/* Doozadesk Top Node */}
                                <div className="bg-white p-6 rounded-2xl shadow-xl border border-primary-100 flex flex-col items-center w-48 transform hover:-translate-y-1 transition-transform duration-300">
                                    <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center mb-3 text-white font-bold text-xl">
                                        D
                                    </div>
                                    <span className="font-bold text-slate-900">Doozadesk AI</span>
                                    <span className="text-xs text-primary-600 font-medium bg-primary-50 px-2 py-1 rounded-full mt-2">
                                        Active Layer
                                    </span>
                                </div>

                                {/* Connection Badge */}
                                <div className="bg-slate-900 text-white text-xs px-3 py-1 rounded-full shadow-lg">
                                    Syncs with
                                </div>

                                {/* Integration Nodes */}
                                <div className="flex gap-4 w-full justify-center">
                                    {/* Zendesk */}
                                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center w-32 opacity-80">
                                        <img src="https://cdn.simpleicons.org/zendesk/03363D" alt="Zendesk" className="w-8 h-8 mb-2" />
                                        <span className="font-semibold text-slate-700 text-sm">Zendesk</span>
                                    </div>

                                    {/* Intercom */}
                                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center w-32 opacity-80">
                                        <img src="https://cdn.simpleicons.org/intercom/000000" alt="Intercom" className="w-8 h-8 mb-2" />
                                        <span className="font-semibold text-slate-700 text-sm">Intercom</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Decorative Blur */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary-100/30 blur-3xl -z-10 rounded-full pointer-events-none mix-blend-multiply" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AIOverlaySection;

