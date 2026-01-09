"use client";

import StaggeredMenu, { StaggeredMenuItem } from "@/components/ui/staggered-menu";
import { useLanguage } from "@/lib/language-context";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function MainMenu() {
    const { t } = useLanguage();
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const items: StaggeredMenuItem[] = [
        { label: t.menu.home, ariaLabel: t.menu.home, link: "/" },
        { label: t.menu.services, ariaLabel: t.menu.services, link: "/#services" },
        { label: t.menu.blog, ariaLabel: t.menu.blog, link: "/blog" },
        { label: t.menu.contact, ariaLabel: t.menu.contact, link: "/#contact" },
    ];

    const socialItems = [
        { label: "WhatsApp", link: "https://wa.me/32488888888" },
        { label: "Email", link: "mailto:contact@ryzq.digital" },
    ];

    // When menu is closed: white in dark mode, black in light mode
    const buttonColor = mounted && theme === 'dark' ? '#ffffff' : '#000000';
    // When menu is open: always black since the panel background is white
    const openButtonColor = '#000000';

    if (!mounted) return null;

    return (
        <StaggeredMenu
            position="left"
            isFixed={true}
            items={items}
            socialItems={socialItems}
            logoUrl=""
            menuButtonColor={buttonColor}
            openMenuButtonColor={openButtonColor}
            accentColor="#6366f1"
            colors={["#e0e7ff", "#c7d2fe", "#a5b4fc", "#818cf8"]} // Indigo shades for prelayers
        />
    );
}
