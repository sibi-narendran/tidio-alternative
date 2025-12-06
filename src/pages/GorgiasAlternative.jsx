import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, X, ArrowRight, ShieldCheck, Zap, Heart } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import BookingModal from '../components/BookingModal';
import BottomCTA from '../components/BottomCTA';
import Logos from '../components/Logos';
import Testimonials from '../components/Testimonials';

const GorgiasAlternative = () => {
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleAction = (e) => {
        if (e) e.preventDefault();
        const url = e?.currentTarget?.href;
        if (url && url.includes('cal.com')) {
            setIsBookingModalOpen(true);
        } else {
            const type = url && url.includes('login') ? 'login' : 'signup';
            const redirect = url || 'https://app.doozadesk.com/app/auth/signup';
            navigate(`/get-started?type=${type}&redirect=${encodeURIComponent(redirect)}`);
        }
    };

    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "name": "Gorgias Alternative | Doozadesk",
                "description": "Doozadesk vs Gorgias comparison. Free unlimited seats and native AI support.",
                "breadcrumb": {
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        {
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Home",
                            "item": "https://doozadesk.com"
                        },
                        {
                            "@type": "ListItem",
                            "position": 2,
                            "name": "Gorgias Alternative",
                            "item": "https://doozadesk.com/gorgias-alternative"
                        }
                    ]
                }
            },
            {
                "@type": "Product",
                "name": "Doozadesk",
                "description": "AI-first customer support platform with free unlimited human seats.",
                "brand": {
                    "@type": "Brand",
                    "name": "Doozadesk"
                },
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD",
                    "description": "Free plan available"
                }
            }
        ]
    };

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <SEO 
                title="The #1 Gorgias Alternative | Free Unlimited Seats"
                description="Stop paying per seat. Doozadesk is the best Gorgias alternative with free unlimited agents, native AI that solves 50%+ of tickets, and one-click migration."
                keywords="gorgias alternative, gorgias competitor, free helpdesk, zendesk alternative, ai customer support"
                canonicalUrl="https://doozadesk.com/gorgias-alternative"
                structuredData={structuredData}
            />
            
            <Navbar openModal={handleAction} />
            
            <main>
                {/* Hero Section */}
                <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
                    <div className="max-w-7xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-orange-700 text-sm font-medium mb-8 border border-orange-100 animate-fade-in">
                            <span className="flex h-2 w-2 rounded-full bg-orange-500"></span>
                            Tired of Gorgias price hikes?
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-8">
                            The <span className="text-primary-600">Gorgias Alternative</span><br />
                            that doesn't tax your growth
                        </h1>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
                            Stop paying for every agent you hire. Doozadesk gives you <strong>unlimited seats for free</strong> and powerful AI that actually resolves tickets—for a fraction of the cost.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a 
                                href="https://app.doozadesk.com/app/auth/signup"
                                onClick={handleAction}
                                className="w-full sm:w-auto px-8 py-4 bg-primary-600 text-white rounded-xl font-bold text-lg hover:bg-primary-700 transition-all hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
                            >
                                Switch for free
                                <ArrowRight className="w-5 h-5" />
                            </a>
                            <a 
                                href="https://cal.com/doozadesk/demo"
                                onClick={handleAction}
                                className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2"
                            >
                                Book a migration demo
                            </a>
                        </div>
                        <p className="mt-6 text-sm text-slate-500">
                            No credit card required · Import Gorgias data in 1-click · Cancel anytime
                        </p>
                    </div>
                </section>

                <Logos />

                {/* Comparison Table */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                                Why brands are switching to Doozadesk
                            </h2>
                            <p className="text-lg text-slate-600">
                                Compare features, pricing, and value head-to-head.
                            </p>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr>
                                        <th className="text-left py-6 px-4 border-b border-slate-200 w-1/3">Feature</th>
                                        <th className="text-center py-6 px-4 border-b border-slate-200 w-1/3 bg-slate-50 rounded-t-xl">
                                            <div className="text-xl font-bold text-slate-400">Gorgias</div>
                                        </th>
                                        <th className="text-center py-6 px-4 border-b-2 border-primary-500 w-1/3 bg-primary-50 rounded-t-xl relative">
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap shadow-sm">
                                                Winner
                                            </div>
                                            <div className="text-2xl font-bold text-primary-700">Doozadesk</div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="text-slate-600">
                                    <tr>
                                        <td className="py-4 px-4 border-b border-slate-100 font-medium">Pricing Model</td>
                                        <td className="py-4 px-4 border-b border-slate-100 text-center bg-slate-50/50">
                                            Ticket volume + <span className="text-red-500 font-semibold">Seat limits</span>
                                        </td>
                                        <td className="py-4 px-4 border-b border-slate-100 text-center bg-primary-50/30 font-bold text-slate-900">
                                            Ticket volume only (<span className="text-green-600">Unlimited Seats</span>)
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-4 border-b border-slate-100 font-medium">Agent Seats</td>
                                        <td className="py-4 px-4 border-b border-slate-100 text-center bg-slate-50/50">
                                            Extra cost per user
                                        </td>
                                        <td className="py-4 px-4 border-b border-slate-100 text-center bg-primary-50/30 font-bold text-green-600">
                                            Free Unlimited
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-4 border-b border-slate-100 font-medium">AI Capabilities</td>
                                        <td className="py-4 px-4 border-b border-slate-100 text-center bg-slate-50/50">
                                            Add-on pricing
                                        </td>
                                        <td className="py-4 px-4 border-b border-slate-100 text-center bg-primary-50/30 font-bold text-slate-900">
                                            Native & Included
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-4 border-b border-slate-100 font-medium">Omnichannel Inbox</td>
                                        <td className="py-4 px-4 border-b border-slate-100 text-center bg-slate-50/50">
                                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                                        </td>
                                        <td className="py-4 px-4 border-b border-slate-100 text-center bg-primary-50/30">
                                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-4 border-b border-slate-100 font-medium">Setup Time</td>
                                        <td className="py-4 px-4 border-b border-slate-100 text-center bg-slate-50/50">
                                            Weeks to optimize
                                        </td>
                                        <td className="py-4 px-4 border-b border-slate-100 text-center bg-primary-50/30 font-bold text-slate-900">
                                            Minutes
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-4 border-b border-slate-100 font-medium">Migration</td>
                                        <td className="py-4 px-4 border-b border-slate-100 text-center bg-slate-50/50">
                                            Manual / Expensive
                                        </td>
                                        <td className="py-4 px-4 border-b border-slate-100 text-center bg-primary-50/30 font-bold text-slate-900">
                                            1-Click Import
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-all">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Lightning Fast</h3>
                                <p className="text-slate-600">
                                    Built with modern tech stacks for instant loading and real-time updates. No more spinning wheels.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-all">
                                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-6">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Enterprise Security</h3>
                                <p className="text-slate-600">
                                    SOC2 compliant architecture keeps your customer data safe while giving you enterprise-grade access controls.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-all">
                                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                                    <Heart className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Human-Centric AI</h3>
                                <p className="text-slate-600">
                                    AI that assists your agents rather than replacing them, creating a seamless experience for your team.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <Testimonials />
                
                <BottomCTA openModal={handleAction} />
            </main>
            
            <Footer />
            <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
        </div>
    );
};

export default GorgiasAlternative;

