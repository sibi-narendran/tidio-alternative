import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 flex flex-col">
            <SEO 
                title="Page Not Found" 
                description="The page you are looking for does not exist."
                noindex={true}
            />
            <Navbar />
            <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-9xl font-bold text-primary-100">404</h1>
                    <h2 className="mt-4 text-3xl font-bold text-slate-900 tracking-tight">Page not found</h2>
                    <p className="mt-4 text-lg text-slate-600">Sorry, we couldn't find the page you're looking for.</p>
                    <div className="mt-10">
                        <Link 
                            to="/" 
                            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary-600 hover:bg-primary-700 transition-all shadow-lg hover:-translate-y-1"
                        >
                            Go back home
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default NotFound;

