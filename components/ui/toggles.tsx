"use client";

import { useTheme } from "next-themes";
import { useLanguage } from "@/lib/language-context";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Toggles() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const { language, setLanguage } = useLanguage();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    // Toggle theme: if in system mode, switch to opposite of resolved theme
    // Otherwise toggle between light and dark
    const toggleTheme = () => {
        if (theme === "system") {
            // First click: switch to opposite of system preference
            setTheme(resolvedTheme === "dark" ? "light" : "dark");
        } else {
            // Subsequent clicks: toggle between light and dark
            setTheme(theme === "dark" ? "light" : "dark");
        }
    };

    // Show icon based on resolved theme (actual displayed theme)
    const isDark = resolvedTheme === "dark";

    return (
        <div className="fixed top-6 right-6 z-50 flex items-center gap-3">
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
                className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 transition-colors"
                aria-label="Toggle language"
            >
                <span className="text-sm font-bold w-6 h-6 flex items-center justify-center">
                    {language === "fr" ? "FR" : "EN"}
                </span>
            </motion.button>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 transition-colors"
                aria-label="Toggle theme"
            >
                {isDark ? <Moon size={20} /> : <Sun size={20} />}
            </motion.button>
        </div>
    );
}
