"use client";

import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";
import { AnimatedText } from "@/components/ui/animated-text";
import { useLanguage } from "@/lib/language-context";

export default function BlogPage() {
    const { t, language } = useLanguage();

    return (
        <main className="min-h-screen bg-background selection:bg-foreground selection:text-background transition-colors duration-300 py-32 px-8">
            <div className="max-w-4xl mx-auto space-y-16">

                {/* Header */}
                <div className="space-y-6">
                    <Link href="/" className="inline-flex items-center gap-2 text-neutral-500 hover:text-foreground transition-colors">
                        <ArrowLeft size={20} />
                        <span>{t.blog.backToHome}</span>
                    </Link>
                    <AnimatedText
                        text={t.blog.title}
                        className="text-5xl sm:text-7xl font-black tracking-tighter text-foreground"
                    />
                    <p className="text-xl text-neutral-500 max-w-2xl font-light">
                        {t.blog.subtitle}
                    </p>
                </div>

                {/* Posts Grid */}
                <div className="grid gap-12">
                    {blogPosts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                            <article className="space-y-4 border-b border-neutral-200 dark:border-neutral-800 pb-12 transition-colors hover:border-foreground">
                                <div className="flex items-center gap-4 text-xs font-medium text-neutral-400 uppercase tracking-widest">
                                    <div className="flex items-center gap-1">
                                        <Calendar size={14} />
                                        {new Date(post.date).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                    </div>
                                    <span>•</span>
                                    <div className="flex items-center gap-1">
                                        <Clock size={14} />
                                        {post.readTime}
                                    </div>
                                </div>

                                <h2 className="text-3xl font-bold text-foreground group-hover:underline decoration-1 underline-offset-4 decoration-neutral-300 dark:decoration-neutral-700">
                                    {post.title[language]}
                                </h2>

                                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg">
                                    {post.excerpt[language]}
                                </p>

                                <span className="inline-block text-sm font-semibold text-foreground mt-2 group-hover:translate-x-2 transition-transform">
                                    {t.blog.readMore}
                                </span>
                            </article>
                        </Link>
                    ))}
                </div>

            </div>
        </main>
    );
}
