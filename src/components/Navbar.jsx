import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';

const Navbar = ({ openModal }) => {
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
                    <Link to="/" className="flex-shrink-0 flex items-center gap-2">
                        {/* Logo Placeholder - Chatwoot uses a specific icon, we'll use a text logo for now but styled similarly */}
                        <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white">
                            <MessageCircle size={20} strokeWidth={2.5} />
                        </div>
                        <span className="text-xl font-bold text-slate-900 tracking-tight">Doozadesk</span>
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/features" className="text-[15px] font-medium text-slate-600 hover:text-primary-600 transition-colors">Features</Link>
                        <Link to="/pricing" className="text-[15px] font-medium text-slate-600 hover:text-primary-600 transition-colors">Pricing</Link>
                        <a href="https://app.doozadesk.com/app/login" onClick={openModal} className="text-[15px] font-medium text-slate-600 hover:text-primary-600 transition-colors">Login</a>
                        <a href="https://app.doozadesk.com/app/auth/signup" onClick={openModal} className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-[15px] font-medium hover:bg-slate-800 transition-all hover:shadow-lg hover:-translate-y-0.5">
                            Create free account
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-slate-900 transition-colors">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl animate-in slide-in-from-top-5 duration-200">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        <div className="flex flex-col gap-3">
                            <a href="https://app.doozadesk.com/app/login" onClick={openModal} className="block w-full text-center px-3 py-3 text-base font-medium text-slate-600 hover:text-primary-600 hover:bg-slate-50 rounded-lg transition-colors">Login</a>
                            <a href="https://app.doozadesk.com/app/auth/signup" onClick={openModal} className="block w-full text-center bg-primary-600 text-white px-3 py-3 rounded-lg text-base font-medium hover:bg-primary-700 transition-colors shadow-md">
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
