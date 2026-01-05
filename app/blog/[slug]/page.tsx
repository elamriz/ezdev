"use client";

import { blogPosts } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { use } from "react";

export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const { t, language } = useLanguage();
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-background selection:bg-foreground selection:text-background py-32 px-8 transition-colors duration-300">
            <div className="max-w-3xl mx-auto space-y-12">

                <Link href="/blog" className="inline-flex items-center gap-2 text-neutral-500 hover:text-foreground transition-colors group">
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span>{t.blog.backToBlog}</span>
                </Link>

                <header className="space-y-6">
                    <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-foreground leading-tight">
                        {post.title[language]}
                    </h1>

                    <div className="flex items-center gap-6 text-sm font-medium text-neutral-400 uppercase tracking-widest border-b border-neutral-100 dark:border-neutral-800 pb-8">
                        <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            {new Date(post.date).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={16} />
                            {post.readTime}
                        </div>
                    </div>
                </header>

                <article
                    className="prose prose-neutral dark:prose-invert max-w-none prose-lg prose-headings:font-bold prose-headings:tracking-tight prose-a:text-indigo-600 dark:prose-a:text-indigo-400 hover:prose-a:text-indigo-500 prose-code:text-indigo-600 dark:prose-code:text-indigo-400"
                    dangerouslySetInnerHTML={{ __html: post.content[language] || '' }}
                />

            </div>
        </main>
    );
}
