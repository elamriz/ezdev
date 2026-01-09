import type { Metadata } from "next";
import { BlogList } from "@/components/blog-list";

export const metadata: Metadata = {
    title: "Journal | Ryzq Digital - Blog Développement Web Bruxelles",
    description:
        "Explorations techniques, design et réflexions sur le développement web, Next.js, React et SEO. Agence digitale basée à Bruxelles, Belgique.",
    keywords: [
        "blog développement web",
        "Next.js Belgique",
        "React Bruxelles",
        "SEO technique",
        "agence web Bruxelles",
        "développement fullstack",
    ],
    openGraph: {
        title: "Journal | Ryzq Digital",
        description:
            "Explorations techniques et réflexions sur le développement web moderne.",
        url: "https://ryzq.dev/blog",
        type: "website",
    },
};

export default function BlogPage() {
    return <BlogList />;
}

