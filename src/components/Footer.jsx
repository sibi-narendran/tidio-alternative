import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
                    <div className="col-span-2 md:col-span-2">
                        <span className="text-2xl font-bold text-primary-600 block mb-4">Doozadesk</span>
                        <p className="text-slate-500 text-sm max-w-xs">
                            The modern customer support platform for your business. Scale your support without scaling headcount.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-slate-900 mb-4">Product</h4>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li><Link to="/features" className="hover:text-primary-600">Features</Link></li>
                            <li><Link to="/pricing" className="hover:text-primary-600">Pricing</Link></li>
                            <li><Link to="/gorgias-alternative" className="hover:text-primary-600">Gorgias Alternative</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-slate-900 mb-4">Resources</h4>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li><a href="#" className="hover:text-primary-600">Help Center</a></li>
                            <li><a href="#" className="hover:text-primary-600">API Docs</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-slate-900 mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li><a href="#" className="hover:text-primary-600">About</a></li>
                            <li><a href="#" className="hover:text-primary-600">Contact</a></li>
                            <li><a href="https://app.doozadesk.com/app/auth/login" className="hover:text-primary-600">Login</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} Doozadesk. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-slate-400">

                        <a href="#" className="hover:text-primary-600"><Twitter size={20} /></a>
                        <a href="#" className="hover:text-primary-600"><Linkedin size={20} /></a>
                        <a href="#" className="hover:text-primary-600"><Facebook size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
