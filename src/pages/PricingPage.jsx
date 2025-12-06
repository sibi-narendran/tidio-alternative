import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Pricing from '../components/Pricing';
import SEO from '../components/SEO';
import { HelpCircle } from 'lucide-react';

const PricingPage = () => {
    // We can reuse the existing Pricing component but wrap it in a page layout
    // and maybe add an FAQ section below it.

    // Dummy function for openModal since the Pricing component expects it
    // In a real scenario, we might want to pass the actual modal handler or redirect logic
    // For now, let's make it redirect to signup
    const handlePricingAction = () => {
        window.location.href = '/get-started?type=signup&redirect=https://app.doozadesk.com/app/auth/signup';
    };

    const faqs = [
        {
            question: "Is the free plan really free forever?",
            answer: "Yes! The 'For Humans' plan is completely free forever for unlimited human agents. You only pay if you decide to use our AI agents."
        },
        {
            question: "How are AI resolutions counted?",
            answer: "A resolution is counted when an AI agent successfully handles a conversation from start to finish without human intervention. If a human takes over, it doesn't count against your limit."
        },
        {
            question: "Can I cancel my subscription anytime?",
            answer: "Absolutely. You can upgrade, downgrade, or cancel your AI agent subscription at any time from your dashboard. There are no long-term contracts."
        },
        {
            question: "Do you offer enterprise pricing?",
            answer: "Yes, for large organizations with high volume needs, we offer custom enterprise plans. Please contact our sales team for a quote."
        }
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <SEO 
                title="Pricing | Free Unlimited Human Seats"
                description="Simple, transparent pricing. Unlimited human agents are free forever. Only pay for AI resolutions. No contracts, cancel anytime."
                keywords="helpdesk pricing, free customer support software, customer service pricing, AI agent cost, unlimited agents free"
                canonicalUrl="https://doozadesk.com/pricing"
            />
            <Navbar />
            <div className="pt-20">
                <Pricing openModal={handlePricingAction} headingLevel="h1" />

                {/* FAQ Section */}
                <div className="bg-white py-24">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
                        </div>
                        <div className="space-y-8">
                            {faqs.map((faq, index) => (
                                <div key={index} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                                    <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-start gap-3">
                                        <HelpCircle className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                                        {faq.question}
                                    </h3>
                                    <p className="text-slate-600 ml-8">
                                        {faq.answer}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PricingPage;
