import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero = ({ openModal }) => {
    return (
        <div className="pt-32 pb-16 md:pt-40 md:pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 pointer-events-none">
                <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary-100/50 rounded-full blur-3xl opacity-60 mix-blend-multiply animate-blob"></div>
                <div className="absolute top-40 -left-20 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl opacity-60 mix-blend-multiply animate-blob animation-delay-2000"></div>
            </div>

            <div className="max-w-7xl mx-auto text-center relative z-10">


                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.1]">
                    Customer Support? <br className="hidden md:block" />
                    <span className="text-primary-600">Dooza Does It.</span>
                </h1>

                <p className="text-xl md:text-3xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed font-normal">
                    Seats free forever. Pay only for AI.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                    <a href="https://app.doozadesk.com/app/auth/signup" onClick={openModal} className="flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-all shadow-xl shadow-primary-500/20 hover:shadow-primary-500/30 hover:-translate-y-1">
                        Create free account
                    </a>
                    <a href="https://cal.com/sibinarendran/demo"
                        onClick={(e) => {
                            openModal(e);
                        }}
                        className="flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all hover:-translate-y-1">
                        Book free setup
                    </a>
                </div>

                <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-slate-500 text-sm font-medium">
                    <div className="flex items-center gap-2">
                        <CheckCircle2 size={18} className="text-primary-500" />
                        <span>No credit card required</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 size={18} className="text-primary-500" />
                        <span>14-day free trial</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 size={18} className="text-primary-500" />
                        <span>Pay only for AI agents</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 size={18} className="text-primary-500" />
                        <span>Cancel anytime</span>
                    </div>
                </div>

                {/* Dashboard Preview Image */}
                <div className="mt-12 md:mt-20 relative mx-auto max-w-6xl">
                    <div className="bg-slate-900 rounded-2xl p-2 shadow-2xl ring-1 ring-slate-900/10">
                        <div className="bg-slate-800 rounded-xl overflow-hidden aspect-[16/9] relative">
                            <img
                                src="/images/dashboard.webp"
                                alt="Doozadesk Unified Dashboard Interface"
                                width="1152"
                                height="648"
                                loading="eager"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
