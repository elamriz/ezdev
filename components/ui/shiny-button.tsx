"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ShinyButtonProps = {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
};

export const ShinyButton = ({ children, className, onClick }: ShinyButtonProps) => {
    return (
        <motion.button
            onClick={onClick}
            className={cn(
                "relative rounded-full px-8 py-3 font-medium text-white bg-black dark:bg-neutral-950 border border-transparent dark:border-white/10 overflow-hidden group transition-all duration-300 hover:shadow-[0_0_25px_rgba(99,102,241,0.2)] dark:hover:border-white/20",
                className
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
            <span className="relative z-10">{children}</span>
            <div className="absolute inset-0 -z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 translate-x-[-150%] transition-transform duration-1000 ease-in-out group-hover:translate-x-[150%]" />
        </motion.button>
    );
};
