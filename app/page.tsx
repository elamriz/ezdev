"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedText } from "@/components/ui/animated-text";
import { ShinyButton } from "@/components/ui/shiny-button";
import { HeroGeometric } from "@/components/ui/shadcn-io/shape-landing-hero";
import { ArrowRight, Mail, MessageCircle, Plus, Minus, CheckCircle, Clock, MapPin, ExternalLink, Globe, Smartphone, Palette, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context";

export default function Home() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollIndicator(window.scrollY < 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 sm:p-20 overflow-hidden bg-background selection:bg-foreground selection:text-background transition-colors duration-300">
      {/* Hero Section */}
      <HeroGeometric
        title1="RYZQ"
        title2="DIGITAL"
        description={t.hero.description}
        className="!p-0"
        logo={
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05, rotate: 2 }}
          >
            <Image
              src="/logo.png"
              alt="Ryzq Digital Logo"
              width={630}
              height={325}
              className="w-28 sm:w-36 md:w-44 h-auto object-contain mx-auto drop-shadow-2xl dark:invert dark:brightness-0 dark:contrast-200"
              priority
            />
          </motion.div>
        }
      >
        <div className="flex flex-col items-center gap-4 sm:gap-6 lg:gap-8">
          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 lg:gap-8"
          >
            <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm lg:text-base text-foreground/60">
              <CheckCircle className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-emerald-500" />
              <span>{t.trust.projects}</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm lg:text-base text-foreground/60">
              <Clock className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-indigo-500" />
              <span>{t.trust.response}</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm lg:text-base text-foreground/60">
              <MapPin className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-rose-500" />
              <span>{t.trust.location}</span>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <ShinyButton onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              <span className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base lg:text-lg">
                {t.hero.cta}
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </span>
            </ShinyButton>
          </motion.div>

          {/* Services with Icons */}
          <div className="flex items-center justify-center gap-3 sm:gap-6 lg:gap-8 text-[11px] sm:text-sm lg:text-base text-foreground/50 font-medium tracking-wider">
            <span className="flex items-center gap-1 sm:gap-2 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors cursor-default">
              <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
              WEB
            </span>
            <span className="flex items-center gap-1 sm:gap-2 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors cursor-default">
              <Smartphone className="w-3 h-3 sm:w-4 sm:h-4" />
              APPS
            </span>
            <span className="flex items-center gap-1 sm:gap-2 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors cursor-default">
              <Palette className="w-3 h-3 sm:w-4 sm:h-4" />
              UI/UX
            </span>
            <span className="flex items-center gap-1 sm:gap-2 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors cursor-default">
              <Search className="w-3 h-3 sm:w-4 sm:h-4" />
              SEO
            </span>
          </div>
        </div>
      </HeroGeometric>

      {/* Scroll Indicator - Fixed at bottom, hidden on scroll */}
      <AnimatePresence>
        {showScrollIndicator && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-8 left-0 right-0 flex-col items-center gap-2 text-foreground/40 z-30 pointer-events-none hidden min-[500px]:flex"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-xs uppercase tracking-[0.3em] font-medium">{t.hero.scroll}</span>
              <ArrowRight className="w-4 h-4 rotate-90" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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

      {/* Projects Section */}
      <section id="projects" className="w-full max-w-6xl py-24 sm:py-32 flex flex-col gap-12 sm:gap-16">
        <div className="text-left space-y-2">
          <h2 className="text-sm font-bold tracking-widest uppercase text-neutral-400">{t.projects.title}</h2>
          <AnimatedText
            text={t.projects.subtitle}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {t.projects.items.map((project, i) => {
            const images: Record<string, string> = {
              "COSTI ELEC": "/projects/costi-real.png",
              "Carivo": "/projects/carivo.png",
              "Mon Mariage Oriental": "/projects/mmo.png",
              "Loveline": "/projects/loveline.png",
              "RentHub": "/projects/renthub.png",
              "Familink": "/projects/familink.png",
            };
            const isInProgress = project.status === "in-progress";
            const isFeatured = i === 0;
            const isCompact = i === 1 || i === 2;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className={`group overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-xl transition-all duration-300
                  ${isFeatured ? 'md:col-span-2 md:row-span-2' : ''}`}
              >
                {/* Mobile: Horizontal layout | Desktop: Vertical layout */}
                <div className={`flex h-full ${isFeatured ? 'flex-col' : 'flex-row md:flex-col'}`}>
                  {/* Image Section */}
                  <div className={`relative overflow-hidden flex-shrink-0
                    ${isFeatured
                      ? 'w-full aspect-[2.65/1] sm:aspect-[2.1/1]'
                      : isCompact
                        ? 'w-28 self-stretch md:w-full md:h-auto md:aspect-[2.35/1]'
                        : 'w-28 self-stretch md:w-full md:h-auto md:aspect-[3/2]'
                    }`}
                  >
                    {/* Blurred Background Layer */}
                    <div className={`absolute inset-0 transition-all duration-500 ${isInProgress ? 'blur-[2px] scale-110' : ''}`}>
                      <Image
                        src={images[project.name]}
                        alt={project.name}
                        fill
                        priority={isFeatured}
                        className={`transition-transform duration-500 group-hover:scale-110 ${isFeatured ? 'object-cover object-[center_35%]' : 'object-cover object-top'}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>

                    {/* Status Badges - Always crisp */}
                    <div className="absolute inset-0 p-2 md:p-3 pointer-events-none">
                      <div className="flex justify-between items-start w-full">
                        {project.results && isFeatured && (
                          <div className="px-2.5 py-1 bg-emerald-500 text-white text-[10px] font-bold rounded-full shadow-lg backdrop-blur-sm bg-opacity-90">
                            {project.results}
                          </div>
                        )}
                        <div className="flex-1" />
                        {isInProgress && (
                          <div className="px-1.5 py-0.5 md:px-2.5 md:py-1 bg-amber-500/90 text-white rounded-full flex items-center gap-1 shadow-lg backdrop-blur-sm">
                            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                            <span className="text-[7px] md:text-[10px] font-bold uppercase tracking-wide">
                              {t.projects.inProgress}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`flex-1 flex flex-col justify-between
                    ${isFeatured ? 'p-3 sm:p-4 md:p-5' : isCompact ? 'p-2 md:p-3' : 'p-3 md:p-4'}`}
                  >
                    <div className="space-y-1.5 md:space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5 md:gap-2">
                          <h3 className={`font-bold text-foreground
                            ${isFeatured ? 'text-lg md:text-xl' : isCompact ? 'text-sm' : 'text-sm md:text-base'}`}
                          >
                            {project.name}
                          </h3>
                          {!isInProgress && (
                            <CheckCircle className={`text-emerald-500 ${isFeatured ? 'w-4 h-4' : 'w-3.5 h-3.5'}`} />
                          )}
                        </div>
                        {project.demoUrl && (
                          <Link
                            href={project.demoUrl}
                            target="_blank"
                            className="px-3 py-1 bg-foreground text-background text-[10px] md:text-xs font-bold rounded-full flex items-center gap-1.5 transition-transform hover:scale-105 shadow-sm"
                          >
                            <span>Demo</span>
                            <ExternalLink className="w-3 h-3 md:w-3.5 md:h-3.5" />
                          </Link>
                        )}
                      </div>
                      <p className={`text-foreground/60 leading-relaxed
                        ${isFeatured ? 'text-sm line-clamp-2 max-w-xl' : isCompact ? 'text-[10px] md:text-[11px] line-clamp-2' : 'text-[11px] md:text-xs line-clamp-2'}`}
                      >
                        {project.desc}
                      </p>
                    </div>

                    <div className={`flex flex-wrap gap-1.5 ${isFeatured ? 'mt-4' : 'mt-2 md:mt-3'}`}>
                      {project.tags.slice(0, isFeatured ? 4 : 3).map((tag, j) => (
                        <span
                          key={j}
                          className={`font-medium rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400
                            ${isFeatured ? 'px-2.5 py-1 text-[10px]' : 'px-2 py-0.5 text-[9px]'}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
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
            href="https://wa.me/32470886024"
            target="_blank"
            className="flex-1 group flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-full font-medium transition-transform hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            <span>{t.contact.whatsapp}</span>
          </Link>

          <Link
            href="mailto:hello@ryzq.dev"
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

      {/* Floating WhatsApp Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-6 right-6 z-50 pointer-events-auto"
      >
        <Link
          href="https://wa.me/32470886024"
          target="_blank"
          className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] text-white rounded-full shadow-[0_8px_30px_rgb(37,211,102,0.4)] hover:shadow-[0_8px_30px_rgb(37,211,102,0.6)] hover:scale-110 transition-all duration-300 group"
        >
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:opacity-40 transition-opacity" />
          <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 z-10" />
        </Link>
      </motion.div>
    </main >
  );
}
