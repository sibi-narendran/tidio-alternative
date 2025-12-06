import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Is Doozadesk really free for human agents?",
    answer: "Yes! Doozadesk offers unlimited seats for your human support team at $0/month forever. We believe you shouldn't be penalized for growing your team. You only pay for AI Agent resolutions when they successfully solve a customer ticket."
  },
  {
    question: "How does the AI Agent pricing work?",
    answer: "Our AI Agents are priced based on 'resolutions'. A resolution counts when the AI successfully handles a conversation without human intervention. If the AI hands off to a human, you aren't charged for that ticket. Plans start at $5/month for 100 resolutions."
  },
  {
    question: "Can I migrate from Zendesk or Gorgias?",
    answer: "Absolutely. We offer a one-click migration tool that imports your tickets, customers, tags, and macros from Zendesk, Gorgias, and other major helpdesks. You can switch without losing your history."
  },
  {
    question: "Does Doozadesk integrate with Shopify?",
    answer: "Yes, we have a deep, native integration with Shopify. You can see customer order history, refund orders, cancel shipments, and modify subscriptions directly from the Doozadesk inbox without switching tabs."
  },
  {
    question: "What channels do you support?",
    answer: "Doozadesk creates a unified inbox for Email, Live Chat, Instagram DMs, Facebook Messenger, WhatsApp, and SMS. All your customer conversations live in one place."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-600">
            Everything you need to know about Doozadesk.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 hover:border-primary-200"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-slate-50 transition-colors"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-lg text-slate-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4 pt-0 bg-white">
                  <p className="text-slate-600 leading-relaxed mt-2">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
export { faqs }; // Export data for schema usage

