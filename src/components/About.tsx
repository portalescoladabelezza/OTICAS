/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { CheckCircle2, Award, Heart, Shield, Sparkles } from "lucide-react";
import { OPTICS_CONFIG } from "../types";

export default function About() {
  // Features mapping
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Heart className="w-5 h-5 text-amber-500" shrink-0 />;
      case 1:
        return <Sparkles className="w-5 h-5 text-amber-500" shrink-0 />;
      case 2:
        return <Award className="w-5 h-5 text-amber-500" shrink-0 />;
      case 3:
      default:
        return <Shield className="w-5 h-5 text-amber-500" shrink-0 />;
    }
  };

  return (
    <section id="sobre" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Visual panel (Col 1) */}
          <div className="relative order-2 lg:order-1 max-w-md sm:max-w-lg mx-auto lg:mx-0 w-full font-sans">
            {/* Outline Decorative borders */}
            <div className="absolute -inset-2.5 rounded-2xl border border-amber-600/30 z-0 scale-95" />
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-amber-500 -mt-1 -mr-1 z-20" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-amber-500 -mb-1 -ml-1 z-20" />

            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-slate-100 z-10 aspect-[4/3] flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&w=700&q=80"
                alt="Processo profissional ótico"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              {/* Luxury gold glare effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/25 to-transparent mix-blend-overlay" />
            </div>

            {/* floating numeric badge for realism */}
            <div className="absolute -bottom-5 -right-5 z-20 bg-slate-900 border border-amber-600/20 p-4 rounded-xl shadow-xl max-w-[200px]">
              <div className="text-2xl font-bold font-sans text-amber-500">100%</div>
              <p className="text-[10px] text-slate-300 uppercase tracking-wider mt-0.5 font-semibold">Atendimento Humanizado</p>
            </div>
          </div>

          {/* Texts (Col 2) */}
          <div className="order-1 lg:order-2 flex flex-col space-y-6 text-center lg:text-left font-sans">
            <span className="text-xs uppercase tracking-widest font-extrabold text-amber-600">
              Quem Somos
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-slate-900 tracking-tight leading-tight" id="about-title">
              Sobre a Ótica Visão Prime
            </h2>
            <div className="w-16 h-1 bg-amber-600 mx-auto lg:mx-0 rounded-full" />
            
            <p className="text-base text-slate-600 leading-relaxed" id="about-text">
              A Ótica Visão Prime oferece armações, óculos de sol, lentes de grau e atendimento personalizado para quem busca enxergar melhor com conforto e estilo. Nosso objetivo é facilitar sua escolha e oferecer um atendimento rápido, humano e confiável.
            </p>

            {/* Bullet points Differentiators Grid */}
            <div className="pt-6 border-t border-slate-200">
              <h3 className="text-sm uppercase tracking-wider font-extrabold text-slate-900 mb-4">
                Nossos Diferenciais:
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {OPTICS_CONFIG.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start space-x-3 text-left p-3 rounded-xl hover:bg-slate-100 transition-colors duration-200"
                  >
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 leading-normal">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
        
      </div>
    </section>
  );
}
