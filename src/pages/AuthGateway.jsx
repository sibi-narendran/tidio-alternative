import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { User, Mail, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { supabase } from '../lib/supabase';
import SEO from '../components/SEO';

const AuthGateway = () => {
    const [searchParams] = useSearchParams();
    const type = searchParams.get('type') || 'signup'; // 'login' or 'signup'
    const redirectUrl = searchParams.get('redirect') || 'https://app.doozadesk.com/app/auth/signup';

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });
    const [loading, setLoading] = useState(false);

    const isLogin = type === 'login';
    const title = isLogin ? 'Welcome Back' : 'Create your account';
    const subtitle = isLogin ? 'Sign in to continue to Doozadesk' : 'Get started with Doozadesk for free';
    const buttonText = isLogin ? 'Sign In' : 'Create Account';

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Store in Supabase
            const { error } = await supabase
                .from('leads')
                .insert([
                    {
                        name: formData.name,
                        email: formData.email,
                        phone: formData.phone,
                        source: type,
                        created_at: new Date()
                    }
                ]);

            if (error) {
                console.error('Error saving lead:', error);
                // We continue anyway to not block the user
            }

            // Trigger Google Ads Conversion
            if (window.gtag) {
                window.gtag('event', 'conversion', { 'send_to': 'AW-10872232955' });
                console.log('Conversion tracked: Lead Form Submitted');
            }

            // Redirect
            window.location.href = redirectUrl;
        } catch (err) {
            console.error('Unexpected error:', err);
            window.location.href = redirectUrl;
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <SEO 
                title={title} 
                description={subtitle}
                noindex={true}
            />
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-center mb-6">
                    <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                        D
                    </div>
                </div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-900">
                    {title}
                </h2>
                <p className="mt-2 text-center text-sm text-slate-600">
                    {subtitle}
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                                Full Name
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-slate-400" />
                                </div>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 sm:text-sm border-slate-300 rounded-md py-3"
                                    placeholder="John Doe"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                                Work Email
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-slate-400" />
                                </div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 sm:text-sm border-slate-300 rounded-md py-3"
                                    placeholder="john@company.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
                                Phone Number
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Phone className="h-5 w-5 text-slate-400" />
                                </div>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    autoComplete="tel"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 sm:text-sm border-slate-300 rounded-md py-3"
                                    placeholder="+1 (555) 000-0000"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Processing...' : (
                                    <span className="flex items-center gap-2">
                                        {buttonText} <ArrowRight size={16} />
                                    </span>
                                )}
                            </button>
                        </div>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-slate-300" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-slate-500">
                                    Trusted by teams at
                                </span>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-3 gap-3 opacity-60 grayscale">
                            {/* Placeholders for logos, just text for now or simple icons */}
                            <div className="flex justify-center items-center text-xs font-bold text-slate-400">ACME Corp</div>
                            <div className="flex justify-center items-center text-xs font-bold text-slate-400">Global Inc</div>
                            <div className="flex justify-center items-center text-xs font-bold text-slate-400">TechFlow</div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center space-y-2">
                    <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
                        <CheckCircle2 size={16} className="text-green-500" />
                        <span>No credit card required</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
                        <CheckCircle2 size={16} className="text-green-500" />
                        <span>14-day free trial</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthGateway;
