import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BottomCTA from '../components/BottomCTA';
import BookingModal from '../components/BookingModal';
import SEO from '../components/SEO';
import { 
    CheckCircle2, 
    Star, 
    Zap, 
    ShieldCheck, 
    Heart, 
    MessageCircle, 
    ArrowRight,
    AlertCircle,
    MousePointerClick,
    Workflow,
    ShoppingBag,
    RefreshCw,
    TrendingUp,
    ThumbsDown,
    Bot
} from 'lucide-react';

const GorgiasAlternativesBlog = () => {
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
            const sections = [
                'introduction', 
                'criteria', 
                'top-5-list', 
                'dooza-review', 
                'richpanel-review', 
                'zendesk-review', 
                'gladly-review', 
                'reamaze-review', 
                'native-difference',
                'comparison', 
                'conclusion', 
                'faq'
            ];
            
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

    // Scroll to near bottom trigger for Booking Modal
    useEffect(() => {
        const handleScrollForPopup = () => {
            // Check if we are near the bottom (e.g., within 800px of the bottom)
            // and if we haven't shown the popup yet in this session
            const scrollPosition = window.scrollY + window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;
            
            // Trigger when user scrolls 85% down or comes within 1000px of bottom
            // Adjust threshold as needed
            const threshold = docHeight - 1000; 
            
            const hasShown = sessionStorage.getItem('doozadesk_blog_popup_shown');
            
            if (scrollPosition > threshold && !hasShown && !isBookingModalOpen) {
                // Small delay to not be too aggressive immediately upon hitting the threshold
                setTimeout(() => {
                    setIsBookingModalOpen(true);
                    sessionStorage.setItem('doozadesk_blog_popup_shown', 'true');
                }, 500);
            }
        };

        window.addEventListener('scroll', handleScrollForPopup);
        return () => window.removeEventListener('scroll', handleScrollForPopup);
    }, [isBookingModalOpen]);

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
                title="Top 5 Gorgias Alternatives in 2025 (Ranked & Reviewed)" 
                description="Looking for a Gorgias alternative? We review the top 5 help desks for Shopify, comparing pricing, AI features, and native integration capabilities."
                keywords="gorgias alternatives, best shopify helpdesk, richpanel vs gorgias, dooza vs gorgias, zendesk alternative"
                canonicalUrl="https://doozadesk.com/blog/gorgias-alternatives"
            />
            
            <Navbar openModal={handleAction} />

            {/* Hero Section */}
            <div className="bg-slate-50 pt-24 pb-12 md:pt-32 md:pb-20 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-6">
                        <Star size={16} className="fill-primary-700" />
                        <span>Updated December 2025</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        Top 5 <span className="text-primary-600">Gorgias Alternatives</span> in 2025
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
                        where poeple are moving?
                    </p>
                    <div className="mt-6 text-sm text-slate-500 font-medium">
                        Reading Time: 8 min
                    </div>
                </div>
            </div>

            {/* Main Content Layout */}
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="flex flex-col lg:flex-row justify-between lg:gap-12 items-start">
                    
                    {/* Sidebar (Desktop only) */}
                    <aside className="hidden lg:block w-64 shrink-0 sticky top-28">
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 sticky top-28 max-h-[80vh] overflow-y-auto scrollbar-thin">
                            <h3 className="font-semibold text-slate-900 mb-4">Table of Contents</h3>
                            <nav className="space-y-1">
                                {[
                                    { id: 'introduction', label: 'Introduction' },
                                    { id: 'criteria', label: 'Evaluation Criteria' },
                                    { id: 'top-5-list', label: 'Top 5 Alternatives List' },
                                    { id: 'dooza-review', label: '1. Dooza.co (Best Overall)' },
                                    { id: 'richpanel-review', label: '2. Richpanel' },
                                    { id: 'zendesk-review', label: '3. Zendesk' },
                                    { id: 'gladly-review', label: '4. Gladly' },
                                    { id: 'reamaze-review', label: '5. Re:Amaze' },
                                    { id: 'native-difference', label: 'Why "Native" Matters' },
                                    { id: 'comparison', label: 'Dooza vs Richpanel' },
                                    { id: 'conclusion', label: 'Conclusion & Verdict' },
                                    { id: 'faq', label: 'FAQ' },
                                ].map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`block w-full text-left text-sm py-2 px-3 rounded-lg transition-colors ${
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
                                <p className="text-sm text-slate-600 mb-4">Ready to upgrade your support?</p>
                                <button 
                                    onClick={handleAction} 
                                    className="w-full py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
                                >
                                    Get Started Free
                                </button>
                            </div>
                        </div>
                    </aside>

                    {/* Main Article Content */}
                    <div className="w-full max-w-3xl mx-auto space-y-16">
                        
                        {/* Introduction */}
                       
                        {/* Criteria */}
                        <section id="criteria" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Evaluation Criteria</h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    "Deep Shopify Integration",
                                    "AI-First Automation",
                                    "Fair Pricing",
                                    "Ease of Setup",
                                    "Support Quality",
                                    "Native Workflows"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-slate-50 p-4 rounded-lg border border-slate-100">
                                        <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0" />
                                        <span className="font-medium text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Top 5 List */}
                        <section id="top-5-list" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Top 5 Gorgias Alternatives in 2025</h2>
                            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                                <ol className="divide-y divide-slate-100">
                                    <li className="p-4 flex items-center gap-4 bg-primary-50">
                                        <span className="flex items-center justify-center w-8 h-8 bg-primary-600 text-white font-bold rounded-full">1</span>
                                        <span className="font-bold text-lg text-slate-900">Dooza.co</span>
                                        <span className="ml-auto text-sm font-medium text-primary-700 bg-white px-3 py-1 rounded-full border border-primary-100">Best Overall</span>
                                    </li>
                                    <li className="p-4 flex items-center gap-4 hover:bg-slate-50">
                                        <span className="flex items-center justify-center w-8 h-8 bg-slate-200 text-slate-600 font-bold rounded-full">2</span>
                                        <span className="font-medium text-slate-700">Richpanel</span>
                                    </li>
                                    <li className="p-4 flex items-center gap-4 hover:bg-slate-50">
                                        <span className="flex items-center justify-center w-8 h-8 bg-slate-200 text-slate-600 font-bold rounded-full">3</span>
                                        <span className="font-medium text-slate-700">Zendesk</span>
                                    </li>
                                    <li className="p-4 flex items-center gap-4 hover:bg-slate-50">
                                        <span className="flex items-center justify-center w-8 h-8 bg-slate-200 text-slate-600 font-bold rounded-full">4</span>
                                        <span className="font-medium text-slate-700">Gladly</span>
                                    </li>
                                    <li className="p-4 flex items-center gap-4 hover:bg-slate-50">
                                        <span className="flex items-center justify-center w-8 h-8 bg-slate-200 text-slate-600 font-bold rounded-full">5</span>
                                        <span className="font-medium text-slate-700">Re:Amaze</span>
                                    </li>
                                </ol>
                            </div>
                        </section>

                        {/* Dooza Review */}
                        <section id="dooza-review" className="scroll-mt-28">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-primary-100 p-2 rounded-lg">
                                    <Star className="w-6 h-6 text-primary-600 fill-primary-600" />
                                </div>
                                <h2 className="text-3xl font-bold text-slate-900">Alternative #1: Dooza.co</h2>
                            </div>
                            
                            <p className="text-base md:text-lg text-slate-600 mb-6 font-medium">Known for: AI-Native Workflows & Shopify Deep Integration</p>
                            
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="mb-6">
                                    Dooza.co represents the next generation of e-commerce customer support. Unlike Gorgias, which was built in the pre-AI era, <strong>Dooza was built from the ground up for AI-native workflows</strong>. It doesn't just connect to Shopify via API—it deeply understands your infrastructure to deliver unprecedented automation.
                                </p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Key Features</h3>
                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-slate-50 p-5 rounded-xl">
                                        <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2"><Zap className="w-4 h-4 text-primary-600"/> True AI-Native Architecture</h4>
                                        <ul className="text-sm space-y-2 list-disc list-inside text-slate-700">
                                            <li>Contextual AI responses based on store data</li>
                                            <li>Intelligent routing by sentiment & intent</li>
                                            <li>Predictive support before issues escalate</li>
                                            <li>Smart automation that learns from agents</li>
                                        </ul>
                                    </div>
                                    <div className="bg-slate-50 p-5 rounded-xl">
                                        <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary-600"/> Shopify Native Workflows</h4>
                                        <ul className="text-sm space-y-2 list-disc list-inside text-slate-700">
                                            <li>Deep order management (Edit, Cancel, Refund)</li>
                                            <li>Automatic product context in chat</li>
                                            <li>Native subscription support (Recharge, etc.)</li>
                                            <li>Draft order creation inside conversations</li>
                                        </ul>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Why Dooza Wins</h3>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1"/>
                                        <span><strong>100% Free Seats:</strong> Unlike competitors that charge per agent, Dooza offers unlimited free seats for your team. You only pay for AI usage.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1"/>
                                        <span><strong>Most Affordable:</strong> Starts at $29/month with unlimited contacts and no hidden fees.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1"/>
                                        <span><strong>Fastest Setup:</strong> 5-minute one-click Shopify integration. No technical skills needed.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1"/>
                                        <span><strong>Better AI:</strong> Resolves 70% of tickets automatically with contextual, accurate responses.</span>
                                    </li>
                                </ul>

                                <div className="bg-primary-50 border border-primary-100 p-6 rounded-xl">
                                    <blockquote className="italic text-slate-700 mb-4">
                                        "We switched from Gorgias to Dooza and cut our support costs by 60% while handling 3x more conversations. The AI is legitimately impressive."
                                    </blockquote>
                                    <div className="font-bold text-primary-700">— Sarah M., Founder of Modern Apparel Co.</div>
                                </div>
                            </div>
                        </section>

                        <hr className="border-slate-200" />

                        {/* Richpanel Review */}
                        <section id="richpanel-review" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Alternative #2: Richpanel</h2>
                            <p className="text-base md:text-lg text-slate-600 mb-6 font-medium">Known for: Self-Service Portal & Shopify Integration</p>
                            
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="mb-4">
                                    Richpanel is the other platform truly built for Shopify native flows. It pioneered the concept of self-service portals (like Amazon's "My Orders" page) for independent e-commerce brands.
                                </p>
                                <h4 className="font-bold text-slate-900 mb-2">Key Features:</h4>
                                <ul className="list-disc pl-5 mb-6 space-y-2">
                                    <li><strong>Self-Service Portal:</strong> Customers can track orders and initiate returns without talking to a human.</li>
                                    <li><strong>AI Sidekick:</strong> Suggests responses for agents (though less autonomous than Dooza).</li>
                                    <li><strong>Social Moderation:</strong> Tools to manage comments on Instagram/Facebook ads.</li>
                                </ul>

                                <div className="bg-orange-50 border border-orange-100 p-5 rounded-xl mb-6">
                                    <h4 className="font-bold text-orange-800 mb-2 flex items-center gap-2">
                                        <AlertCircle className="w-5 h-5" /> Limitations
                                    </h4>
                                    <ul className="list-disc pl-5 space-y-1 text-orange-800 text-sm">
                                        <li><strong>Complex Setup:</strong> The self-service portal has a steep learning curve and can take weeks to configure.</li>
                                        <li><strong>Higher Pricing:</strong> Starts at $99/mo vs Dooza's $29/mo.</li>
                                        <li><strong>Less Advanced AI:</strong> Primarily rule-based automation rather than autonomous AI agents.</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <hr className="border-slate-200" />

                        {/* Zendesk Review */}
                        <section id="zendesk-review" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Alternative #3: Zendesk</h2>
                            <p className="text-base md:text-lg text-slate-600 mb-6 font-medium">Known for: Enterprise Features & Scalability</p>
                            
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="mb-4">
                                    The industry veteran. Zendesk is powerful and serves every industry, not just e-commerce. It has thousands of integrations and enterprise-grade reporting.
                                </p>
                                <p className="mb-4">
                                    <strong>Best For:</strong> Large enterprises with dedicated IT teams who need extensive customization outside of Shopify.
                                </p>
                                <p className="mb-4">
                                    <strong>The Downside:</strong> It's not e-commerce native. It doesn't "speak" Shopify fluently out of the box, often requiring expensive middleware or developers to set up correctly.
                                </p>
                            </div>
                        </section>

                        <hr className="border-slate-200" />

                        {/* Other Alternatives */}
                        <section id="gladly-review" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Alternative #4: Gladly</h2>
                            <p className="text-base md:text-lg text-slate-600 mb-4">
                                Focuses on "people, not tickets." It has a beautiful interface and is great for white-glove support. However, with a <strong>$1,800/month minimum</strong> (10 seats required), it's priced out of range for most growing brands.
                            </p>
                        </section>

                        <section id="reamaze-review" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Alternative #5: Re:Amaze</h2>
                            <p className="text-base md:text-lg text-slate-600 mb-4">
                                A solid budget option for small teams. It covers the basics (live chat, email) well. However, its interface feels dated, and it lacks the deep "native" automation capabilities of Dooza or Richpanel.
                            </p>
                        </section>

                        {/* Native Difference */}
                        <section id="native-difference" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why "Shopify Native" Matters</h2>
                            <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed">
                                Most helpdesks connect to Shopify via a basic API—they just pull data to display it. <strong>True native platforms</strong> (like Dooza & Richpanel) go deeper, acting as an extension of your store admin.
                            </p>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                                        <MousePointerClick size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Native Actions</h3>
                                    <p className="text-slate-600">Edit, refund, and cancel orders directly inside the helpdesk without ever switching tabs.</p>
                                </div>
                                
                                <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                                    <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 mb-4">
                                        <Workflow size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Flow Integration</h3>
                                    <p className="text-slate-600">Trigger automated support workflows based on Shopify Flow events (e.g., "High Risk Order").</p>
                                </div>
                                
                                <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                                    <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600 mb-4">
                                        <ShoppingBag size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Catalog Awareness</h3>
                                    <p className="text-slate-600">AI that understands your specific products, variants, and inventory status in real-time.</p>
                                </div>
                                
                                <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                                    <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-green-600 mb-4">
                                        <RefreshCw size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Real-Time Sync</h3>
                                    <p className="text-slate-600">No delays. Data flows instantly between your store and support so you never miss an update.</p>
                                </div>
                            </div>
                        </section>

                        {/* Comparison Table */}
                        <section id="comparison" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Dooza vs Richpanel: The Native Showdown</h2>
                            <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-sm">
                                <table className="w-full border-collapse text-left bg-white">
                                    <thead className="bg-slate-50 text-slate-900">
                                        <tr>
                                            <th className="p-4 border-b font-bold">Feature</th>
                                            <th className="p-4 border-b font-bold text-primary-700 bg-primary-50">Dooza.co</th>
                                            <th className="p-4 border-b font-bold">Richpanel</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-600 text-sm md:text-base">
                                        <tr>
                                            <td className="p-4 border-b font-medium">Agent Seats</td>
                                            <td className="p-4 border-b bg-primary-50/30 font-semibold text-green-600">Free Unlimited</td>
                                            <td className="p-4 border-b text-red-500">Paid per seat</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Shopify Native</td>
                                            <td className="p-4 border-b bg-primary-50/30 font-semibold text-green-600">✅ Yes</td>
                                            <td className="p-4 border-b">✅ Yes</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">AI Approach</td>
                                            <td className="p-4 border-b bg-primary-50/30 font-semibold">Autonomous (AI-Native)</td>
                                            <td className="p-4 border-b">Assisted (Rule-Based)</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Setup Time</td>
                                            <td className="p-4 border-b bg-primary-50/30 font-semibold">5-10 Minutes</td>
                                            <td className="p-4 border-b">Days to Weeks</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Starting Price</td>
                                            <td className="p-4 border-b bg-primary-50/30 font-semibold text-green-600">$29/month</td>
                                            <td className="p-4 border-b text-red-500">$99/month</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Learning Curve</td>
                                            <td className="p-4 border-b bg-primary-50/30 font-semibold">Minimal</td>
                                            <td className="p-4 border-b">Steep</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Conclusion */}
                        <section id="conclusion" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Conclusion: Making the Right Choice</h2>
                            <div className="space-y-6">
                                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                                    <h3 className="font-bold text-green-900 text-lg mb-2">🥇 For Most Shopify Stores: Dooza.co</h3>
                                    <p className="text-green-800">
                                        If you want AI-native automation, deep Shopify integration, easy setup, and affordable pricing, Dooza is the clear winner in 2025. It balances power and simplicity perfectly.
                                    </p>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                    <h3 className="font-bold text-slate-900 text-lg mb-2">🥈 For Self-Service Customization: Richpanel</h3>
                                    <p className="text-slate-700">
                                        If you have technical resources and want to build highly customized self-service portals manually, Richpanel remains a strong choice—provided you have the budget.
                                    </p>
                                </div>
                                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mt-6">
                                    <h3 className="font-bold text-blue-900 text-lg mb-2 flex items-center gap-2">
                                        <Zap className="w-5 h-5 text-blue-700" />
                                        The Pricing Advantage
                                    </h3>
                                    <p className="text-blue-800">
                                        Dooza is the only platform that doesn't charge for seats. <strong>Your human agents are 100% free, forever.</strong> You only pay for the AI automation that actually resolves tickets and saves you time.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* FAQ */}
                        <section id="faq" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                {[
                                    {
                                        q: "Why are merchants switching from Gorgias?",
                                        a: "Merchants are switching due to escalating costs (price hikes and per-seat charges), declining support quality with slower response times, and limited AI capabilities that often require expensive add-ons."
                                    },
                                    {
                                        q: "Is Dooza really easier to set up than Gorgias?",
                                        a: "Yes. Dooza's one-click Shopify integration and AI auto-configuration means you can be up and running in minutes. Gorgias often requires extensive manual configuration of rules and macros."
                                    },
                                    {
                                        q: "Can I migrate my data from Gorgias to Dooza?",
                                        a: "Absolutely. Dooza's migration team helps you import historical conversations, macros, and settings—usually completing the process within 24-48 hours."
                                    },
                                    {
                                        q: "Does the AI really work?",
                                        a: "Dooza's AI is built on the latest LLMs and trained specifically for e-commerce. Most merchants see 60-75% of tickets resolved automatically with high accuracy."
                                    },
                                    {
                                        q: "What about phone support?",
                                        a: "Dooza supports voice through integrations with Twilio and others, though most e-commerce brands find chat/email/social sufficient."
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="border-b border-slate-200 pb-4 last:border-0">
                                        <h3 className="font-bold text-slate-900 mb-2 text-lg">{item.q}</h3>
                                        <p className="text-slate-600 leading-relaxed">{item.a}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                        <section id="introduction" className="scroll-mt-28">
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                
                            </p>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                Whether you are struggling with high costs or looking for better automation for channels like <a href="/blog/instagram-direct" className="text-primary-600 hover:text-primary-700 underline font-medium">Instagram Direct</a>, finding the right helpdesk is crucial.
                            </p>
                        </section>


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

export default GorgiasAlternativesBlog;
