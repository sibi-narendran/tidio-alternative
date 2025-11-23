import React from 'react';

const BottomCTA = ({ openModal }) => {
    return (
        <div className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">
                    Ready to improve your customer support?
                </h2>
                <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
                    Join thousands of companies using Doozadesk to support their customers.
                    Get started for free today.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a href="https://app.doozadesk.com/app/auth/signup" onClick={openModal} className="bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-all shadow-xl shadow-primary-500/20 hover:shadow-primary-500/30 hover:-translate-y-1">
                        Create free account
                    </a>
                    <a href="https://cal.com/sibinarendran/demo"
                        onClick={(e) => {
                            openModal(e);
                        }}
                        className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all hover:-translate-y-1">
                        Book a demo
                    </a>
                </div>

                <p className="mt-8 text-sm text-slate-500">
                    No credit card required · 14-day free trial · Cancel anytime
                </p>
            </div>
        </div>
    );
};

export default BottomCTA;
