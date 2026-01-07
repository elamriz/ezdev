"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedText } from "@/components/ui/animated-text";
import { ShinyButton } from "@/components/ui/shiny-button";
import { ArrowRight, Mail, MessageCircle, Plus, Minus, CheckCircle, Clock, MapPin, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context";

export default function Home() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 sm:p-20 overflow-hidden bg-background selection:bg-foreground selection:text-background transition-colors duration-300">
      {/* Hero Section */}
      <section className="w-full max-w-6xl flex flex-col items-center justify-center min-h-[calc(100dvh-4rem)] sm:min-h-[calc(100dvh-10rem)] gap-8 text-center pointer-events-none relative">
        <div className="flex flex-col items-center gap-6">
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
              className="w-36 sm:w-48 md:w-56 h-auto object-contain drop-shadow-2xl dark:invert dark:brightness-0 dark:contrast-200"
              priority
            />
          </motion.div>

          <div className="flex flex-col items-center space-y-1">
            <AnimatedText
              text="RYZQ"
              className="text-6xl sm:text-7xl md:text-8xl font-black tracking-[-0.05em] text-foreground pointer-events-auto select-none leading-[0.85]"
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
              className="text-xl sm:text-3xl md:text-4xl font-extralight tracking-[0.15em] text-neutral-500 dark:text-neutral-400 pointer-events-auto leading-none uppercase"
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

        <div className="space-y-6 pointer-events-auto z-10 max-w-xl px-4">
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
            {t.hero.description}
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <ShinyButton onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              <span className="flex items-center gap-3 text-base sm:text-lg">
                {t.hero.cta}
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </span>
            </ShinyButton>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-4"
          >
            <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>{t.trust.projects}</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
              <Clock className="w-4 h-4 text-indigo-500" />
              <span>{t.trust.response}</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
              <MapPin className="w-4 h-4 text-rose-500" />
              <span>{t.trust.location}</span>
            </div>
          </motion.div>

          <div className="flex items-center justify-center gap-3 text-xs sm:text-sm text-neutral-400 dark:text-neutral-500 font-medium tracking-wider pt-2">
            <span className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors cursor-default">WEB</span>
            <span className="text-neutral-300 dark:text-neutral-600">•</span>
            <span className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors cursor-default">APPS</span>
            <span className="text-neutral-300 dark:text-neutral-600">•</span>
            <span className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors cursor-default">UI/UX</span>
            <span className="text-neutral-300 dark:text-neutral-600">•</span>
            <span className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors cursor-default">SEO</span>
          </div>
        </div>

        <motion.div
          className="absolute bottom-12 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-400 opacity-60"
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

      {/* Projects Section */}
      <section id="projects" className="w-full max-w-6xl py-32 flex flex-col gap-16">
        <div className="text-left space-y-2">
          <h2 className="text-sm font-bold tracking-widest uppercase text-neutral-400">{t.projects.title}</h2>
          <AnimatedText
            text={t.projects.subtitle}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1]"
          />
        </div>

        <div className="grid grid-cols-3 gap-2 md:gap-4 lg:gap-8 auto-rows-[minmax(100px,auto)]">
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

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`group relative overflow-hidden rounded-xl sm:rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 transition-all duration-300
                  ${isFeatured
                    ? 'col-span-3 md:col-span-2 md:row-span-2'
                    : 'col-span-1 hover:border-neutral-900 dark:hover:border-white'
                  }`}
              >
                {/* Project Image */}
                <div className={`relative w-full h-full overflow-hidden ${isFeatured ? 'min-h-[250px] sm:min-h-[400px]' : 'aspect-square sm:aspect-[4/3]'} ${isInProgress ? 'blur-[8px]' : ''}`}>
                  <Image
                    src={images[project.name]}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                {/* In Progress Banner */}
                {isInProgress && (
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 px-1.5 py-0.5 sm:px-3 sm:py-1.5 bg-amber-500/90 text-white text-[8px] sm:text-xs font-bold uppercase tracking-wider rounded-full flex items-center gap-1 sm:gap-1.5">
                    <span className="w-1 h-1 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse" />
                    {t.projects.inProgress}
                  </div>
                )}

                {/* Results Badge */}
                {project.results && (
                  <div className="absolute top-2 left-2 sm:top-4 left-4 z-10 px-2 py-1 sm:px-3 sm:py-1.5 bg-emerald-500 text-white text-[10px] sm:text-sm font-bold rounded-full shadow-lg">
                    {project.results}
                  </div>
                )}

                {/* Content */}
                <div className={`absolute bottom-0 left-0 right-0 p-2 sm:p-6 space-y-1 sm:space-y-3 ${isFeatured ? 'bg-gradient-to-t from-black/90 to-transparent pt-12 sm:pt-24' : ''}`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className={`${isFeatured ? 'text-lg sm:text-3xl' : 'text-[10px] sm:text-xl'} font-bold text-white truncate`}>{project.name}</h3>
                    {!isInProgress && (
                      <span className={`${isFeatured ? 'text-xs sm:text-base' : 'text-[8px] sm:text-xs'} text-emerald-400 font-medium flex items-center gap-0.5 sm:gap-1`}>
                        <CheckCircle className={`${isFeatured ? 'w-4 h-4 sm:w-5 sm:h-5' : 'w-2.5 h-2.5 sm:w-3.5 sm:h-3.5'}`} />
                        {t.projects.delivered}
                      </span>
                    )}
                  </div>

                  {isFeatured && (
                    <p className="text-xs sm:text-lg text-neutral-200 leading-relaxed max-w-xl hidden sm:block">
                      {project.desc}
                    </p>
                  )}

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                    <div className={`hidden sm:flex flex-wrap gap-2 ${isFeatured ? 'mt-2' : ''}`}>
                      {project.tags.map((tag, j) => (
                        <span
                          key={j}
                          className={`px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-xs font-medium rounded-full ${isFeatured ? 'bg-white/20 text-white backdrop-blur-md' : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300'}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.demoUrl && (
                      <Link
                        href={project.demoUrl}
                        target="_blank"
                        className={`flex items-center gap-1 ${isFeatured ? 'text-sm sm:text-base bg-white text-black px-3 py-1.5 sm:px-4 sm:py-2 rounded-full hover:bg-neutral-200' : 'text-[8px] sm:text-sm text-indigo-400 font-bold hover:underline'} transition-all ml-auto`}
                      >
                        Demo
                        <ExternalLink className={`${isFeatured ? 'w-3 h-3 sm:w-4 sm:h-4' : 'w-2 h-2 sm:w-4 sm:h-4'}`} />
                      </Link>
                    )}
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

      {/* Floating WhatsApp Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-6 right-6 z-50 pointer-events-auto"
      >
        <Link
          href="https://wa.me/32498465551"
          target="_blank"
          className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] text-white rounded-full shadow-[0_8px_30px_rgb(37,211,102,0.4)] hover:shadow-[0_8px_30px_rgb(37,211,102,0.6)] hover:scale-110 transition-all duration-300 group"
        >
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:opacity-40 transition-opacity" />
          <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 z-10" />
        </Link>
      </motion.div>
    </main>
  );
}
