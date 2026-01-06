"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedText } from "@/components/ui/animated-text";
import { ShinyButton } from "@/components/ui/shiny-button";
import { ArrowRight, Mail, MessageCircle, Plus, Minus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context";

export default function Home() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 sm:p-20 overflow-hidden bg-background selection:bg-foreground selection:text-background transition-colors duration-300">
      {/* Hero Section */}
      <section className="w-full max-w-6xl flex flex-col items-center justify-center min-h-[calc(100dvh-4rem)] sm:min-h-[calc(100dvh-10rem)] gap-10 text-center pointer-events-none relative">
        <div className="flex flex-col md:flex-row items-center justify-center md:gap-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="pointer-events-auto shrink-0 cursor-pointer"
          >
            <Image
              src="/rdlogo.PNG"
              alt="Ryzq Digital Logo"
              width={630}
              height={325}
              className="w-48 sm:w-64 md:w-80 h-auto object-contain drop-shadow-2xl dark:invert dark:brightness-0 dark:contrast-200"
              priority
            />
          </motion.div>

          <div className="flex flex-col items-center md:items-start space-y-1">
            <AnimatedText
              text="RYZQ"
              className="text-7xl sm:text-8xl md:text-9xl font-black tracking-[-0.05em] text-foreground pointer-events-auto select-none leading-[0.85]"
              animation={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", damping: 25, stiffness: 120, delay: 0.2 }
                },
              }}
            />
            <AnimatedText
              text="DIGITAL"
              className="text-2xl sm:text-4xl md:text-5xl font-extralight tracking-[0.1em] text-neutral-500 dark:text-neutral-400 pointer-events-auto leading-none uppercase"
              animation={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut", delay: 0.5 }
                },
              }}
            />
          </div>
        </div>

        <div className="space-y-8 pointer-events-auto z-10 max-w-2xl">
          <div className="space-y-4">
            <p className="text-lg sm:text-xl md:text-2xl text-neutral-500 dark:text-neutral-400 font-light leading-relaxed">
              {t.hero.description}
            </p>
            <p className="text-sm sm:text-base text-neutral-400 dark:text-neutral-500 font-light italic">
              {t.hero.tagline}
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <ShinyButton onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                <span className="flex items-center gap-3 text-lg">
                  {t.hero.cta}
                  <ArrowRight className="w-5 h-5" />
                </span>
              </ShinyButton>
            </motion.div>

            <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-400 dark:text-neutral-500 font-medium tracking-wider">
              <span className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors cursor-default">WEB</span>
              <span className="text-neutral-300 dark:text-neutral-600">•</span>
              <span className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors cursor-default">APPS</span>
              <span className="text-neutral-300 dark:text-neutral-600">•</span>
              <span className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors cursor-default">UI/UX</span>
              <span className="text-neutral-300 dark:text-neutral-600">•</span>
              <span className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors cursor-default">SEO</span>
            </div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-16 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-400 opacity-60"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs uppercase tracking-[0.3em] font-medium">{t.hero.scroll}</span>
          <ArrowRight className="w-4 h-4 rotate-90" />
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full max-w-6xl py-32 flex flex-col gap-24">
        <div className="text-left space-y-2">
          <h2 className="text-sm font-bold tracking-widest uppercase text-neutral-400">{t.services.title}</h2>
          <AnimatedText
            text={t.services.keywords}
            className="text-5xl sm:text-7xl font-bold tracking-tight text-foreground leading-[1.1]"
            repeatDelay={5000} // Loop the animation every 5s
            once={false}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.services.items.map((service, i) => (
            <div key={i} className="group p-8 border border-neutral-300 dark:border-neutral-800 rounded-[2rem] bg-transparent hover:border-2 hover:border-neutral-900 dark:hover:border-white hover:shadow-2xl hover:shadow-black/[0.03] transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 group-hover:translate-x-1 transition-transform duration-300 text-foreground">{service.title}</h3>
              <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="faq" className="w-full max-w-4xl py-32 flex flex-col gap-12">
        <div className="text-center space-y-4">
          <h2 className="text-sm font-bold tracking-widest uppercase text-neutral-400">{t.faq.title}</h2>
          <AnimatedText
            text="QUESTIONS"
            className="text-5xl sm:text-7xl font-bold tracking-tight text-foreground"
          />
        </div>

        <div className="space-y-4">
          {t.faq.items.map((item, i) => (
            <div
              key={i}
              className="border-b border-neutral-200 dark:border-neutral-800"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <span className="text-xl font-medium text-foreground group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {item.question}
                </span>
                <div className="shrink-0 ml-4">
                  {openIndex === i ? (
                    <Minus className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  ) : (
                    <Plus className="w-5 h-5 text-neutral-400 group-hover:text-foreground transition-colors" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-neutral-500 dark:text-neutral-400 leading-relaxed">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full max-w-6xl py-32 flex flex-col items-center gap-12 text-center">
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground">{t.contact.title}</h2>
          <p className="text-neutral-500 max-w-lg mx-auto">
            {t.contact.desc}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-md justify-center">
          <Link
            href="https://wa.me/32498465551"
            target="_blank"
            className="flex-1 group flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-full font-medium transition-transform hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            <span>{t.contact.whatsapp}</span>
          </Link>

          <Link
            href="mailto:contact@ryzq.digital"
            className="flex-1 group flex items-center justify-center gap-3 px-8 py-4 bg-black dark:bg-neutral-950 text-white border border-transparent dark:border-white/10 rounded-full font-medium transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(99,102,241,0.2)] dark:hover:border-white/20"
          >
            <Mail className="w-5 h-5" />
            <span>{t.contact.email}</span>
          </Link>
        </div>

        <p className="text-sm text-neutral-400 mt-8">
          {t.contact.note}
        </p>
      </section>

      <footer className="w-full py-16 flex flex-col items-center gap-8 border-t border-neutral-100 dark:border-neutral-800">
        <div className="max-w-2xl px-8 flex flex-col items-center gap-3 text-center">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-foreground">RYZQ</span>
            <span className="text-sm font-light text-neutral-400 dark:text-neutral-500 italic">{t.brandInfo.phonetic}</span>
          </div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-light">
            {t.brandInfo.meaning}
          </p>
        </div>
        <div className="text-neutral-400 text-xs tracking-widest uppercase">
          {t.footer}
        </div>
      </footer>
    </main>
  );
}
