import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { blogPosts } from '../data/blogData';

export default function Blog() {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredPosts = blogPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesSearch;
    });

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <SEO 
                title="Blog | Insights & Resources"
                description="Expert insights on AI-powered customer support, Shopify automation, and e-commerce excellence. Stay ahead with Doozadesk."
                keywords="customer support blog, AI support insights, ecommerce customer service, shopify support tips"
                canonicalUrl="https://doozadesk.com/blog"
            />
            <Navbar />

            {/* Hero Section */}
            <section className="pt-24 pb-12 md:pt-32 md:pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 border border-primary-200 rounded-full mb-6">
                        <span className="text-2xl">📚</span>
                        <span className="text-sm font-medium text-primary-600">
                            Insights & Resources
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        Dooza Blog
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                        Expert insights on AI-powered customer support, Shopify automation, and e-commerce excellence.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-xl mx-auto">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-6 py-4 rounded-full border-2 border-slate-200 focus:border-primary-600 focus:ring-4 focus:ring-primary-100 transition-all outline-none text-lg"
                            />
                            <svg className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>



            {/* Blog Grid */}
            <section className="pb-12 md:pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {filteredPosts.length === 0 ? (
                        <div className="text-center py-16">
                            <div className="text-6xl mb-4">🔍</div>
                            <h3 className="text-2xl font-bold text-slate-700 mb-2">No articles found</h3>
                            <p className="text-slate-500">Try adjusting your search or filter criteria</p>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredPosts.map(post => (
                                <article
                                    key={post.id}
                                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-slate-100 hover:border-blue-200"
                                >
                                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 relative overflow-hidden">
                                        <div className="absolute inset-0 flex items-center justify-center text-blue-200">
                                            <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>

                                        <p className="text-slate-600 mb-4 line-clamp-3">
                                            {post.excerpt}
                                        </p>

                                        <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                                            <div className="flex items-center gap-1.5">
                                                <Clock className="w-4 h-4" />
                                                {post.readTime}
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <Calendar className="w-4 h-4" />
                                                {post.date.split(',')[0]}
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {post.tags.slice(0, 3).map(tag => (
                                                <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>

                                        <Link
                                            to={`/blog/${post.slug}`}
                                            className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all group/link"
                                        >
                                            Read Article
                                            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="pb-12 md:pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 lg:p-12 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-2xl mb-6">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">
                            Subscribe to our newsletter
                        </h2>

                        <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
                            Get the latest insights on AI-powered customer support and e-commerce automation delivered to your inbox.
                        </p>

                        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-3.5 rounded-full border border-slate-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-50 transition-all outline-none bg-white"
                            />
                            <button
                                type="submit"
                                className="px-8 py-3.5 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/20 hover:shadow-xl hover:-translate-y-0.5 whitespace-nowrap"
                            >
                                Subscribe
                            </button>
                        </form>

                        <p className="text-slate-400 text-sm mt-6">
                            Join 2,000+ e-commerce professionals. Unsubscribe anytime.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
