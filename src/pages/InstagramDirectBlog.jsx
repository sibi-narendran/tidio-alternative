import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BottomCTA from '../components/BottomCTA';
import BookingModal from '../components/BookingModal';
import SEO from '../components/SEO';
import { MessageCircle, CheckCircle2 } from 'lucide-react';

const InstagramDirectBlog = () => {
    const [activeSection, setActiveSection] = useState('introduction');
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

    // Handle scroll spy for table of contents
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['introduction', 'features', 'automation', 'best-practices', 'integration', 'faq'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top >= 0 && rect.top <= 300) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100; // Adjust for navbar height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            setActiveSection(id);
        }
    };

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
            <SEO 
                title="What is Instagram Direct? A Simple Guide for Everyone" 
                description="Curious about IG Direct? Here's the lowdown on Instagram Direct, why it's huge for businesses, and how tools like Dooza Desk help manage the DM chaos."
                keywords="instagram direct, ig direct, what is instagram direct, instagram dm for business"
                canonicalUrl="https://doozadesk.com/blog/instagram-direct"
            />
            
            <Navbar openModal={handleAction} />

            {/* Hero Section */}
            <div className="bg-slate-50 pt-24 pb-12 md:pt-32 md:pb-20 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-6">
                        <MessageCircle size={16} />
                        <span>The IG Direct Guide</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        What is <br />
                        <span className="text-primary-600">Instagram Direct?</span>
                    </h1>
                </div>
            </div>

            {/* Main Content Layout */}
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="flex flex-col lg:flex-row justify-between lg:gap-12 items-start">
                    
                    {/* Sidebar (Desktop only) */}
                    <aside className="hidden lg:block w-64 shrink-0 sticky top-28">
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <h3 className="font-semibold text-slate-900 mb-4">What's Inside</h3>
                            <nav className="space-y-2">
                                {[
                                    { id: 'introduction', label: 'What is IG Direct, Actually?' },
                                    { id: 'features', label: 'Why Businesses Love Instagram Direct' },
                                    { id: 'automation', label: 'Speed Wins Sales' },
                                    { id: 'best-practices', label: 'Best Practices for DMs' },
                                    { id: 'integration', label: 'How Businesses Organize Instagram Direct' },
                                    { id: 'faq', label: 'Your Questions Answered' },
                                ].map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`block w-full text-left text-sm py-1.5 px-3 rounded-lg transition-colors ${
                                            activeSection === item.id
                                                ? 'bg-primary-50 text-primary-700 font-medium'
                                                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                                        }`}
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </nav>
                            
                            <div className="mt-8 pt-6 border-t border-slate-200">
                                <p className="text-sm text-slate-600 mb-4">Want to handle DMs like a pro?</p>
                                <button 
                                    onClick={handleAction} 
                                    className="w-full py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
                                >
                                    Check Out Dooza
                                </button>
                            </div>
                        </div>
                    </aside>

                    {/* Main Article Content */}
                    <div className="w-full max-w-3xl mx-auto space-y-16">
                        
                        {/* Introduction */}
                        <section id="introduction" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What is IG Direct, Actually?</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                 {/* Embedded Video */}
                                 <div className="my-8 rounded-xl overflow-hidden shadow-lg border border-slate-200">
                                    <iframe 
                                        className="w-full aspect-video" 
                                        src="https://www.youtube.com/embed/4PFH5fLBEIQ" 
                                        title="Instagram Direct Explained"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <p className="mb-4">
                                    Think of <strong>IG Direct</strong> as the private side of Instagram. It’s where the real conversations happen away from the public comments section. You can send text, photos, videos, voice notes, and even hop on video calls.
                                </p>
                                <p className="mb-4">
                                    You probably use <strong>Instagram Direct</strong> (or just "DMs") every single day to send memes to your besties or slide into someone's messages. But it’s actually way more than just a chat app inside Instagram.
                                </p>

                               

                                <p className="mb-4">
                                    But here's the tea: for businesses, IG Direct is absolute gold. It's not just about chatting; it's about customer service, making sales, and actually connecting with people.
                                </p>
                                <div className="bg-pink-50 p-6 rounded-xl border border-pink-100 my-6">
                                    <h4 className="font-semibold text-pink-900 mb-2">Fun Fact:</h4>
                                    <p className="text-pink-800">
                                        Like, over 375 million people use <strong>IG Direct</strong> every month. If a business isn't on there, are they even real?
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Features */}
                        <section id="features" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Businesses Love Instagram Direct</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-6">
                                <p>
                                    It’s pretty simple: Instagram Direct helps businesses sell more. When you DM a brand asking "hey, is this in stock?", you’re usually ready to buy. Businesses know this, so they try to reply as fast as possible to close the deal. It’s faster than email and feels way more personal.
                                </p>
                            </div>
                        </section>

                        {/* Automation */}
                        <section id="automation" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Speed Wins Sales</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="mb-4">
                                    If a customer waits hours for a reply, they’ll buy from someone else. To stop this, businesses use three main tools:
                                </p>
                                <ul className="space-y-3 list-disc pl-5 mb-4">
                                    <li><strong>Human Teams:</strong> Real people handling complex questions.</li>
                                    <li><strong>Basic Automation:</strong> Instant replies for simple FAQs like "how much is shipping?".</li>
                                    <li><strong>AI Agents:</strong> Smart bots that handle conversations 24/7.</li>
                                </ul>
                                <p>
                                    The formula is simple: <strong>Fast Response = More Sales</strong>. Automation handles the basics instantly so the team doesn't burn out.
                                </p>
                            </div>
                        </section>

                        {/* Best Practices */}
                        <section id="best-practices" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Best Practices for DMs</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-6">
                                <p>
                                    Just like email marketing, managing DMs requires a strategy. According to <a href="https://business.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline">Instagram for Business</a>, responding quickly can increase conversion rates by significant margins.
                                </p>
                               
                            </div>
                            <div className="bg-slate-50 rounded-2xl p-8">
                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-3">Don't Ghost People</h3>
                                        <p className="text-slate-600">Leaving someone on read is rude in real life, and it's worse in business. Fast replies = happy customers.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-3">Keep the Vibe Right</h3>
                                        <p className="text-slate-600">If your brand is chill, talk like a human. No one wants to talk to a dictionary.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-3">Slide into the DMs (Respectfully)</h3>
                                        <p className="text-slate-600">Don't spam. Only message people who actually want to hear from you.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Integration - Subtle Dooza Desk Mention */}
                        <section id="integration" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">How Businesses Organize Instagram Direct</h2>
                            <p className="text-slate-600 mb-6">
                                Remember that "500 messages a day" scenario? To handle that without losing their minds, businesses use tools like <strong>Dooza Desk</strong>.
                            </p>
                            <div className="bg-primary-50 border border-primary-100 rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-center">
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Businesses use tools</h3>
                                    <p className="text-slate-700 mb-6">
                                        Instead of just staring at a phone screen all day, Dooza Desk puts all those <strong>Instagram Direct</strong> messages into one neat dashboard on their computer. It’s like an inbox for all your social chats, so nothing gets lost and everyone gets a reply.
                                    </p>
                                    <p className="text-slate-700 text-sm italic">
                                        Basically, it keeps the business organized so they can focus on the fun stuff.
                                    </p>
                                </div>
                                <div className="w-full md:w-1/3 flex justify-center">
                                    <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center shadow-lg text-primary-600">
                                        <MessageCircle size={64} />
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* FAQ */}
                        <section id="faq" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-8">Your Questions Answered</h2>
                            <div className="space-y-4">
                                {[
                                    {
                                        q: "Can I use IG Direct on my laptop?",
                                        a: "Yep! You can use the browser version, or tools like Dooza Desk if you're running a business."
                                    },
                                    {
                                        q: "Is it safe?",
                                        a: "Totally. But maybe don't send your credit card info over a DM just to be safe."
                                    },
                                    {
                                        q: "How do I stop seeing spam?",
                                        a: "Instagram has a 'Hidden Requests' folder that filters out a lot of the junk automatically."
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="border-b border-slate-200 pb-4 last:border-0">
                                        <h3 className="font-bold text-slate-900 mb-2 text-lg">{item.q}</h3>
                                        <p className="text-slate-600">{item.a}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                        <p className="mt-4">
                                    If you are also looking for better ways to manage your overall customer support stack, check out our guide on the <a href="/blog/gorgias-alternatives" className="text-primary-600 hover:text-primary-700 underline font-medium">Top 5 Gorgias Alternatives in 2025</a>.
                                </p>

                    </div>
                    
                    {/* Ghost for centering */}
                    <div className="hidden xl:block w-64 shrink-0" aria-hidden="true"></div>
                </div>
            </div>

            <BottomCTA openModal={handleAction} />
            <Footer />
            <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
        </div>
    );
};

export default InstagramDirectBlog;
