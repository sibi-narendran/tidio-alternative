import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SwitchComparison from '../components/SwitchComparison';
import AIOverlaySection from '../components/AIOverlaySection';
import Logos from '../components/Logos';
import Integrations from '../components/Integrations';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import BottomCTA from '../components/BottomCTA';
import Footer from '../components/Footer';
import BookingModal from '../components/BookingModal';
import SEO from '../components/SEO';

function LandingPage() {
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const [timeElapsed, setTimeElapsed] = useState(false);
    const navigate = useNavigate();

    const handleAction = (e) => {
        if (e) e.preventDefault();

        const url = e?.currentTarget?.href;

        // Check if it's a booking link
        if (url && url.includes('cal.com')) {
            setIsBookingModalOpen(true);
        } else {
            // It's a login/signup link -> Redirect to Auth Gateway Page
            // Determine type based on URL or text
            const type = url && url.includes('login') ? 'login' : 'signup';
            const redirect = url || 'https://app.doozadesk.com/app/auth/signup';

            navigate(`/get-started?type=${type}&redirect=${encodeURIComponent(redirect)}`);
        }

        sessionStorage.setItem('doozadesk_popup_shown', 'true');
    };

    // Timer: 10 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeElapsed(true);
        }, 10000);

        return () => clearTimeout(timer);
    }, []);

    // Scroll Listener
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setHasScrolled(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Auto-open logic -> Open Booking Modal
    useEffect(() => {
        const hasShown = sessionStorage.getItem('doozadesk_popup_shown');
        if (timeElapsed && hasScrolled && !hasShown && !isBookingModalOpen) {
            setIsBookingModalOpen(true);
            sessionStorage.setItem('doozadesk_popup_shown', 'true');
        }
    }, [timeElapsed, hasScrolled, isBookingModalOpen]);

    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "name": "Doozadesk",
                "url": "https://doozadesk.com",
                "logo": "https://doozadesk.com/favicon.png",
                "sameAs": [
                    "https://twitter.com/doozadesk",
                    "https://linkedin.com/company/doozadesk"
                ]
            },
            {
                "@type": "SoftwareApplication",
                "name": "Doozadesk",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD",
                    "description": "Free for unlimited human agents"
                }
            }
        ]
    };

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <SEO 
                title="AI-Powered Customer Support Platform" 
                description="Doozadesk is the all-in-one customer support platform with AI agents, unified inbox, and omnichannel support. Scale your support without scaling headcount."
                keywords="customer support, AI support agents, helpdesk software, omnichannel support, customer service automation"
                canonicalUrl="https://doozadesk.com/"
                structuredData={structuredData}
            />
            <Navbar openModal={handleAction} />
            <main>
                <Hero openModal={handleAction} />
                <Logos />
                <SwitchComparison openModal={handleAction} />
                <AIOverlaySection openModal={handleAction} />
                <Testimonials />
                <Integrations />
                <Pricing openModal={handleAction} />
                <BottomCTA openModal={handleAction} />
            </main>
            <Footer />
            <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
        </div>
    );
}

export default LandingPage;
