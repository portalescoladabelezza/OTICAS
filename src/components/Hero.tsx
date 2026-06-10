/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { MessageCircle, ArrowRight, ShieldCheck, Star, Sparkles } from "lucide-react";
import { OPTICS_CONFIG } from "../types";
import { getWhatsappLink } from "../utils";

export default function Hero() {
  const whatsappMessage = "Olá! Vi o site da Ótica Visão Prime e gostaria de saber mais sobre armações, lentes e óculos disponíveis.";
  const whatsappUrl = getWhatsappLink(OPTICS_CONFIG.whatsappNumber, whatsappMessage);

  const handleVerProdutos = () => {
    const productsSection = document.getElementById("produtos");
    if (productsSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = productsSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="inicio"
      className="relative pt-24 pb-16 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white"
    >
      {/* Decorative luxury architectural grid overlay */}
      <div className="absolute inset-0 z-0 opacity-5 bg-[linear-gradient(to_right,#D97706_1px,transparent_1px),linear-gradient(to_bottom,#D97706_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Soft warm ambient gold light behind text */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-amber-600 rounded-full blur-[140px] opacity-15 pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-slate-900 rounded-full blur-[140px] opacity-30 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero texts (Col 7 on large screens) */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left">
            
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center lg:justify-start space-x-2"
            >
              <span className="inline-flex items-center space-x-1.5 bg-amber-600/15 border border-amber-600/35 text-amber-500 font-semibold text-xs py-1.5 px-3.5 rounded-full tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Atendimento Prime no WhatsApp</span>
              </span>
            </motion.div>

            {/* Principal Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold tracking-tight text-white leading-[1.1]"
              id="hero-title"
            >
              Enxergue melhor com <span className="text-amber-500 text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500">estilo, conforto</span> e confiança.
            </motion.h1>

            {/* Underline summary description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              id="hero-subtitle"
            >
              {OPTICS_CONFIG.subtitle}
            </motion.p>

            {/* CTA action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              {/* Main Button: WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white font-bold text-base px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                id="hero-whatsapp-btn"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span className="whitespace-nowrap">Falar no WhatsApp</span>
              </a>

              {/* Secondary button: browse products */}
              <button
                onClick={handleVerProdutos}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-white/40 font-semibold text-base px-8 py-4 rounded-full transition-all duration-300 transform hover:-translate-y-0.5"
                id="hero-products-btn"
              >
                <span>Ver produtos</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Credibility pointers / trust factors (Premium feel) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 pt-10 border-t border-white/10 max-w-lg mx-auto lg:mx-0"
            >
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center space-x-1 text-amber-500 font-sans font-bold text-lg sm:text-xl">
                  <span>100%</span>
                </div>
                <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider text-center lg:text-left">Proteção UV</p>
              </div>
              <div className="flex flex-col items-center lg:items-start border-x border-white/10 px-2">
                <div className="flex items-center space-x-1 text-amber-500 font-sans font-bold text-lg sm:text-xl">
                  <span>Premium</span>
                </div>
                <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider text-center lg:text-left">Marcas e Lentes</p>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center space-x-1 text-amber-500 font-sans font-bold text-lg sm:text-xl">
                  <span>Rápido</span>
                </div>
                <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider text-center lg:text-left">Suporte Direto</p>
              </div>
            </motion.div>

          </div>

          {/* Elegant Product Frame/Model presentation (Col 5) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-sm sm:max-w-md lg:max-w-none"
            >
              
              {/* Outer decorative golden border ring */}
              <div className="absolute -inset-2 rounded-2xl border border-amber-600/30 z-0 scale-95 pointer-events-none" />
              
              {/* Golden corner brackets */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-amber-500 -mt-1 -ml-1 z-20" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-amber-500 -mb-1 -mr-1 z-20" />

              {/* Main portrait container with luxury frame shadow */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-900/80 border border-white/10 shadow-2xl z-10 flex items-center justify-center">
                <img
                  src="/images/hero_woman_glasses_1781051980446.png"
                  alt="Modelo belíssima sorrindo e usando óculos sofisticados da Ótica Visão Prime"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual glass sheen overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90" />
              </div>

              {/* Floating review card element for realistic premium shop vibe */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-6 -left-6 sm:left-4 z-20 bg-slate-900 border border-amber-600/30 p-4 rounded-xl shadow-xl flex items-center space-x-3 max-w-[240px] sm:max-w-[260px]"
              >
                <div className="bg-amber-600/20 p-2.5 rounded-lg text-amber-500 shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex space-x-0.5 text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <h4 className="text-xs font-bold text-white mt-1">Qualidade Garantida</h4>
                  <p className="text-[10px] text-slate-400">Lentes certificadas e armações com garantia.</p>
                </div>
              </motion.div>

              {/* Secondary floating accent card */}
              <div className="absolute -top-4 -right-4 z-20 bg-slate-900/90 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-full shadow-lg text-xs font-semibold text-amber-500">
                🚀 Lançamentos 2026
              </div>

            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
