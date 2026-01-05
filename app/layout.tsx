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
  title: "Ryzq Digital | App & Web Premium",
  description: "Agence de création d'applications web et mobile sur mesure.",
};

import { Providers } from "@/components/providers";
import { Toggles } from "@/components/ui/toggles";
import { MainMenu } from "@/components/main-menu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
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
