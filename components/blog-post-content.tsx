"use client";

import { blogPosts } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import Image from "next/image";

export function BlogPostContent({ slug }: { slug: string }) {
    const { t, language } = useLanguage();
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-background selection:bg-foreground selection:text-background py-20 sm:py-32 px-4 sm:px-8 transition-colors duration-300">
            <div className="max-w-4xl mx-auto space-y-12">
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-neutral-500 hover:text-foreground transition-colors group"
                >
                    <ArrowLeft
                        size={20}
                        className="group-hover:-translate-x-1 transition-transform"
                    />
                    <span>{t.blog.backToBlog}</span>
                </Link>

                {/* Hero Image if available */}
                {post.image && (
                    <div className="relative w-full max-w-2xl mx-auto aspect-[16/9] rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-lg">
                        <Image
                            src={post.image}
                            alt={post.title[language]}
                            fill
                            className="object-cover object-center"
                            priority
                        />
                    </div>
                )}

                <header className="space-y-6">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground leading-[1.1]">
                        {post.title[language]}
                    </h1>

                    <div className="flex items-center gap-6 text-sm font-medium text-neutral-400 uppercase tracking-widest border-b border-neutral-100 dark:border-neutral-800 pb-8">
                        <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            {new Date(post.date).toLocaleDateString(
                                language === "fr" ? "fr-FR" : "en-US",
                                { year: "numeric", month: "long", day: "numeric" }
                            )}
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={16} />
                            {post.readTime}
                        </div>
                    </div>
                </header>

                <article
                    className="prose prose-neutral dark:prose-invert max-w-none prose-lg 
          prose-headings:font-bold prose-headings:tracking-tight 
          prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6
          prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-5
          prose-h4:text-xl prose-h4:mt-8 prose-h4:mb-4
          prose-p:leading-[1.8] prose-p:text-neutral-700 dark:prose-p:text-neutral-300 prose-p:mb-6
          prose-a:text-indigo-600 dark:prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:underline prose-a:font-medium
          prose-strong:text-foreground prose-strong:font-semibold
          prose-ul:my-8 prose-li:my-3 prose-li:leading-relaxed
          prose-code:text-indigo-600 dark:prose-code:text-indigo-400 prose-code:bg-neutral-100 dark:prose-code:bg-neutral-800 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono"
                    dangerouslySetInnerHTML={{ __html: post.content[language] || "" }}
                />
            </div>
        </main>
    );
}
