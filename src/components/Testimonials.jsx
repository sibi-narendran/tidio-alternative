import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Sibi",
            role: "Founder, Interior Square",
            content: "Doozadesk is simply amazing. It helped us organize all our customer chats in one place. The AI features are a lifesaver!",
            initial: "S",
            color: "bg-blue-100 text-blue-600"
        },
        {
            name: "Kannan",
            role: "Owner, Suresh Timbers",
            content: "I love how easy it is to use. My team picked it up in minutes. Best decision for our business support.",
            initial: "K",
            color: "bg-green-100 text-green-600"
        },
        {
            name: "Sadai",
            role: "Manager, Elumalai Silks",
            content: "Simple, fast, and reliable. Our customers are happier because we reply faster now. Highly recommended!",
            initial: "S",
            color: "bg-purple-100 text-purple-600"
        }
    ];

    return (
        <div className="py-16 md:py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Loved by customer support teams
                    </h2>
                    <p className="text-xl text-slate-600">
                        See what our customers have to say about Doozadesk.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="flex gap-1 mb-6 text-yellow-400">
                                {[...Array(5)].map((_, j) => <Star key={j} size={18} fill="currentColor" />)}
                            </div>
                            <p className="text-slate-600 mb-6 leading-relaxed italic">
                                "{t.content}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${t.color}`}>
                                    {t.initial}
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900">{t.name}</div>
                                    <div className="text-sm text-slate-500">{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
