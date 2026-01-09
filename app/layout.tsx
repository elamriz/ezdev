import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ryzq.dev"),
  title: "Ryzq Digital | Agence Web & Mobile Bruxelles - Développement Premium",
  description: "Agence digitale à Bruxelles spécialisée en développement web, applications mobiles et design UI/UX. Next.js, React, SEO. Réponse sous 24h. Basé en Belgique.",
  keywords: [
    "agence web Bruxelles",
    "développement web Belgique",
    "application mobile Bruxelles",
    "Next.js Belgique",
    "React developer Bruxelles",
    "SEO Bruxelles",
    "agence digitale Belgique",
    "développeur fullstack Bruxelles",
    "UI/UX design Belgique",
    "création site web Bruxelles",
  ],
  authors: [{ name: "Ryzq Digital" }],
  openGraph: {
    title: "Ryzq Digital | Agence Web & Mobile Bruxelles",
    description: "Transformons vos idées en expériences digitales d'exception. Développement web, apps mobiles, SEO.",
    url: "https://ryzq.dev",
    siteName: "Ryzq Digital",
    locale: "fr_BE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ryzq Digital | Agence Web Bruxelles",
    description: "Agence digitale spécialisée en développement web et mobile premium.",
  },
  alternates: {
    canonical: "https://ryzq.dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

import { Providers } from "@/components/providers";
import { Toggles } from "@/components/ui/toggles";
import { MainMenu } from "@/components/main-menu";
import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-CNBXGY54EF"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CNBXGY54EF');
          `}
        </Script>
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground transition-colors duration-300`}
      >
        <Providers>
          <MainMenu />
          <Toggles />
          {children}
        </Providers>
      </body>
    </html>
  );
}
