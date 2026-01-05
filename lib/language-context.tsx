"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Language = "fr" | "en";

type Translations = {
    hero: {
        slogan: string;
        tagline: string;
        description: string;
        cta: string;
        scroll: string;
    };
    services: {
        title: string;
        keywords: string | string[];
        items: {
            title: string;
            desc: string;
        }[];
    };
    contact: {
        title: string;
        desc: string;
        whatsapp: string;
        email: string;
        note: string;
    };
    faq: {
        title: string;
        items: {
            question: string;
            answer: string;
        }[];
    };
    menu: {
        home: string;
        services: string;
        blog: string;
        contact: string;
    };
    blog: {
        title: string;
        subtitle: string;
        backToHome: string;
        backToBlog: string;
        readMore: string;
    };
    footer: string;
    brandInfo: {
        phonetic: string;
        meaning: string;
    };
};

const translations: Record<Language, Translations> = {
    fr: {
        hero: {
            slogan: "DIGITAL",
            tagline: "Agence spécialisée en développement web, applications mobiles et design digital",
            description: "Nous transformons vos idées en expériences digitales d'exception.",
            cta: "Démarrer un projet",
            scroll: "SCROLL",
        },
        services: {
            title: "EXPERTISE",
            keywords: "Excellence • Innovation • Impact",
            items: [
                { title: "Développement Web", desc: "Sites vitrines, e-commerce et applications web performantes." },
                { title: "Apps Mobiles", desc: "Applications natives et cross-platform iOS & Android." },
                { title: "Design System", desc: "Identité visuelle, UI/UX design et prototypage." },
                { title: "SEO & Growth", desc: "Optimisation pour les moteurs de recherche et stratégie digitale." },
            ],
        },
        contact: {
            title: "Prêt à collaborer ?",
            desc: "Discutons de votre projet autour d'un café virtuel. Disponible sur WhatsApp ou par Email.",
            whatsapp: "WhatsApp",
            email: "Email",
            note: "Réponse sous 24h. Basé en Belgique.",
        },
        faq: {
            title: "FAQ",
            items: [
                { question: "Quels types de projets réalisez-vous ?", answer: "Nous concevons des sites web vitrines, des plateformes e-commerce complexes, des applications web (SaaS) et des applications mobiles natives (iOS/Android)." },
                { question: "Quels sont vos délais moyens ?", answer: "Un site vitrine prend généralement 2 à 4 semaines, tandis qu'une application complexe peut nécessiter 2 à 4 mois de développement selon les fonctionnalités." },
                { question: "Comment se déroule la collaboration ?", answer: "Nous commençons par une phase de découverte et de design, suivie du développement par itérations (agile). Vous avez accès à un environnement de test pour suivre l'avancée en temps réel." },
                { question: "Proposez-vous une maintenance après livraison ?", answer: "Oui, nous proposons des forfaits de maintenance pour assurer la sécurité, les mises à jour et l'évolution de votre projet sur le long terme." },
            ],
        },
        menu: {
            home: "Accueil",
            services: "Expertise",
            blog: "Journal",
            contact: "Contact",
        },
        blog: {
            title: "JOURNAL",
            subtitle: "Explorations techniques, design et réflexions sur le monde digital.",
            backToHome: "Retour à l'accueil",
            backToBlog: "Retour au journal",
            readMore: "Lire l'article →",
        },
        footer: "© 2024 Ryzq Digital. Tous droits réservés.",
        brandInfo: {
            phonetic: "/rizq/",
            meaning: "Rizq (رِزْق) désigne la provision, la subsistance, ou tout ce qui est bénéfique et accordé. Cela symbolise l'abondance et la valeur que nous apportons à vos projets.",
        },
    },
    en: {
        hero: {
            slogan: "DIGITAL",
            tagline: "Agency specializing in web development, mobile applications and digital design",
            description: "We transform your ideas into exceptional digital experiences.",
            cta: "Start a project",
            scroll: "SCROLL",
        },
        services: {
            title: "EXPERTISE",
            keywords: "Excellence • Innovation • Impact",
            items: [
                { title: "Web Development", desc: "Showcase websites, e-commerce, and high-performance web apps." },
                { title: "Mobile Apps", desc: "Native and cross-platform iOS & Android applications." },
                { title: "Design System", desc: "Visual identity, UI/UX design, and prototyping." },
                { title: "SEO & Growth", desc: "Search engine optimization and digital strategy." },
            ],
        },
        contact: {
            title: "Ready to collaborate?",
            desc: "Let's discuss your project over a virtual coffee. Available on WhatsApp or Email.",
            whatsapp: "WhatsApp",
            email: "Email",
            note: "Response within 24h. Based in Belgium.",
        },
        faq: {
            title: "FAQ",
            items: [
                { question: "What types of projects do you handle?", answer: "We design showcase websites, complex e-commerce platforms, web applications (SaaS), and native mobile apps (iOS/Android)." },
                { question: "What are your average timelines?", answer: "A showcase website usually takes 2 to 4 weeks, while a complex application may require 2 to 4 months of development depending on features." },
                { question: "How does the collaboration work?", answer: "We start with a discovery and design phase, followed by iterative development (agile). You have access to a testing environment to track progress in real-time." },
                { question: "Do you offer maintenance after delivery?", answer: "Yes, we offer maintenance packages to ensure security, updates, and the long-term evolution of your project." },
            ],
        },
        menu: {
            home: "Home",
            services: "Expertise",
            blog: "Journal",
            contact: "Contact",
        },
        blog: {
            title: "JOURNAL",
            subtitle: "Technical explorations, design and thoughts on the digital world.",
            backToHome: "Back to home",
            backToBlog: "Back to journal",
            readMore: "Read article →",
        },
        footer: "© 2024 Ryzq Digital. All rights reserved.",
        brandInfo: {
            phonetic: "/rizq/",
            meaning: "Rizq (رِزْق) refers to provision, sustenance, or anything beneficial granted. It symbolizes the abundance and value we bring to your projects.",
        },
    },
};

type LanguageContextType = {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Translations;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>("fr");

    useEffect(() => {
        const browserLang = navigator.language.split("-")[0];
        if (browserLang === "en") {
            setLanguage("en");
        }
    }, []);

    const value = {
        language,
        setLanguage,
        t: translations[language],
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
