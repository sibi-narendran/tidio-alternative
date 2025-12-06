import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { ArrowLeft, Clock, Calendar, Share2, Bookmark } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';

const blogArticles = {
    'gorgias-alternatives': {
        title: 'Top 5 Gorgias Alternatives in 2025',
        author: 'Dooza Team',
        date: 'December 6, 2025',
        readTime: '8 min read',
        category: 'Product Comparison',
        tags: ['Gorgias', 'Shopify', 'AI Support', 'Help Desk'],
        file: '/blog/blog-gorgias-alternatives.md'
    },
    'instagram-direct': {
        title: 'Instagram Direct Messaging for E-commerce',
        author: 'Dooza Team',
        date: 'December 5, 2025',
        readTime: '6 min read',
        category: 'Social Commerce',
        tags: ['Instagram', 'DM Automation', 'Social Media'],
        file: '/blog/blog-instagram-direct.md'
    }
};

export default function BlogPost() {
    const { slug } = useParams();
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);
    const article = blogArticles[slug];

    useEffect(() => {
        if (article) {
            fetch(article.file)
                .then(res => res.text())
                .then(text => {
                    setContent(text);
                    setLoading(false);
                })
                .catch(err => {
                    console.error('Error loading article:', err);
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, [slug, article]);

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-slate-600">Loading article...</p>
                </div>
            </div>
        );
    }

    if (!article) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
                <Navbar />
                <div className="pt-32 pb-20 px-4 text-center">
                    <div className="text-6xl mb-4">📄</div>
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Article Not Found</h1>
                    <p className="text-slate-600 mb-8">Sorry, we couldn't find the article you're looking for.</p>
                    <Link to="/blog" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all">
                        <ArrowLeft className="w-5 h-5" />
                        Back to Blog
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <SEO 
                title={article.title}
                description={article.excerpt || `${article.title} - Read more on Doozadesk Blog.`}
                keywords={article.tags ? article.tags.join(', ') : ''}
                canonicalUrl={`https://doozadesk.com/blog/${slug}`}
                structuredData={{
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    "headline": article.title,
                    "datePublished": article.date,
                    "author": {
                        "@type": "Organization",
                        "name": article.author
                    }
                }}
            />
            <Navbar />

            {/* Article Header */}
            <article className="pt-24 pb-12 md:pt-32 md:pb-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Back Button */}
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 font-medium mb-8 group transition-all"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        Back to Blog
                    </Link>

                    {/* Title */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        {article.title}
                    </h1>
                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-6 text-slate-600 mb-8 pb-8 border-b border-slate-200">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                                D
                            </div>
                            <span className="font-medium">{article.author}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" />
                            {article.date}
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4" />
                            {article.readTime}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3 mb-12">
                        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all font-medium text-slate-700">
                            <Share2 className="w-4 h-4" />
                            Share
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all font-medium text-slate-700">
                            <Bookmark className="w-4 h-4" />
                            Save
                        </button>
                    </div>

                    {/* Article Content */}
                    <div className="prose md:prose-lg prose-slate max-w-none
            prose-headings:font-bold prose-headings:text-slate-900
            prose-h1:text-3xl md:prose-h1:text-4xl prose-h1:mb-6 prose-h1:mt-12
            prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mb-4 prose-h2:mt-10
            prose-h3:text-xl md:prose-h3:text-2xl prose-h3:mb-3 prose-h3:mt-8
            prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-slate-900 prose-strong:font-semibold
            prose-ul:my-6 prose-li:mb-2
            prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-slate-600
            prose-code:bg-slate-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:text-blue-600
            prose-pre:bg-slate-900 prose-pre:text-white prose-pre:rounded-xl
            prose-img:rounded-xl prose-img:shadow-lg
            prose-table:border-collapse prose-table:w-full
            prose-th:bg-slate-100 prose-th:p-3 prose-th:text-left prose-th:font-semibold
            prose-td:p-3 prose-td:border prose-td:border-slate-200
          ">
                        <ReactMarkdown
                            rehypePlugins={[rehypeRaw, rehypeSanitize]}
                        >
                            {content}
                        </ReactMarkdown>
                    </div>

                    {/* Tags */}
                    <div className="mt-12 pt-8 border-t border-slate-200">
                        <h3 className="text-sm font-semibold text-slate-500 uppercase mb-4">Topics</h3>
                        <div className="flex flex-wrap gap-2">
                            {article.tags.map(tag => (
                                <span
                                    key={tag}
                                    className="px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-700 hover:border-primary-300 hover:bg-primary-50 transition-all cursor-pointer"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </article>

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

