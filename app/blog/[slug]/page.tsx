import { blogPosts } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BlogPostContent } from "@/components/blog-post-content";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: "Article non trouvé | Ryzq Digital",
        };
    }

    const title = `${post.title.fr} | Ryzq Digital - Agence Web Bruxelles`;
    const description = post.excerpt.fr;
    const url = `https://ryzq.dev/blog/${slug}`;

    return {
        title,
        description,
        keywords: [
            "développement web Bruxelles",
            "agence digitale Belgique",
            "Next.js",
            "React",
            "SEO Bruxelles",
            "application mobile Bruxelles",
            "développeur fullstack Belgique",
            "agence web Bruxelles",
        ],
        authors: [{ name: "Ryzq Digital" }],
        openGraph: {
            title,
            description,
            url,
            siteName: "Ryzq Digital",
            locale: "fr_BE",
            type: "article",
            publishedTime: post.date,
            authors: ["Ryzq Digital"],
            ...(post.image && { images: [{ url: post.image }] }),
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            ...(post.image && { images: [post.image] }),
        },
        alternates: {
            canonical: url,
        },
    };
}

export default async function BlogPost({ params }: Props) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    // Structured Data (JSON-LD) for SEO
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title.fr,
        description: post.excerpt.fr,
        datePublished: post.date,
        dateModified: post.date,
        author: {
            "@type": "Organization",
            name: "Ryzq Digital",
            url: "https://ryzq.dev",
        },
        publisher: {
            "@type": "Organization",
            name: "Ryzq Digital",
            logo: {
                "@type": "ImageObject",
                url: "https://ryzq.dev/logo.png",
            },
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://ryzq.dev/blog/${slug}`,
        },
        ...(post.image && { image: post.image }),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <BlogPostContent slug={slug} />
        </>
    );
}

