import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        {/* Logo Placeholder - Chatwoot uses a specific icon, we'll use a text logo for now but styled similarly */}
                        <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white">
                            <MessageCircle size={20} strokeWidth={2.5} />
                        </div>
                        <span className="text-xl font-bold text-slate-900 tracking-tight">Doozadesk</span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#features" className="text-[15px] font-medium text-slate-600 hover:text-primary-600 transition-colors">Features</a>
                        <a href="#pricing" className="text-[15px] font-medium text-slate-600 hover:text-primary-600 transition-colors">Pricing</a>
                        <a href="#" className="text-[15px] font-medium text-slate-600 hover:text-primary-600 transition-colors">Resources</a>
                        <a href="#" className="text-[15px] font-medium text-slate-600 hover:text-primary-600 transition-colors">Enterprise</a>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <a href="https://app.doozadesk.com/app/login" className="text-[15px] font-medium text-slate-600 hover:text-primary-600 transition-colors">Login</a>
                        <a href="https://app.doozadesk.com/app/auth/signup" className="bg-primary-600 text-white px-5 py-2.5 rounded-full text-[15px] font-semibold hover:bg-primary-700 transition-all shadow-lg shadow-primary-500/20">
                            Create free account
                        </a>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-primary-600">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden absolute w-full bg-white border-b border-slate-100 shadow-lg">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        <a href="#features" className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-primary-600 hover:bg-slate-50 rounded-md">Features</a>
                        <a href="#pricing" className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-primary-600 hover:bg-slate-50 rounded-md">Pricing</a>
                        <a href="#" className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-primary-600 hover:bg-slate-50 rounded-md">Resources</a>
                        <div className="pt-4 flex flex-col gap-3">
                            <a href="https://app.doozadesk.com/app/login" className="block text-center text-base font-medium text-slate-600 hover:text-primary-600">Login</a>
                            <a href="https://app.doozadesk.com/app/auth/signup" className="w-full bg-primary-600 text-white px-5 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors text-center">
                                Create free account
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
