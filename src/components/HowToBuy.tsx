/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Search, MessageSquare, HelpCircle, Store, ChevronRight } from "lucide-react";
import { OPTICS_CONFIG } from "../types";

export default function HowToBuy() {
  // Map step icons
  const getStepIcon = (num: number) => {
    switch (num) {
      case 1:
        return <Search className="w-6 h-6 text-amber-500" />;
      case 2:
        return <MessageSquare className="w-6 h-6 text-amber-500" />;
      case 3:
        return <HelpCircle className="w-6 h-6 text-amber-500" />;
      case 4:
      default:
        return <Store className="w-6 h-6 text-amber-500" />;
    }
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative vertical lines */}
      <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-slate-100 hidden lg:block -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading Titles */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-extrabold text-amber-600">
            Praticidade e Segurança
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-slate-900 mt-2 tracking-tight">
            Como consultar pelo WhatsApp
          </h2>
          <div className="w-16 h-1 bg-amber-600 mx-auto mt-4 rounded-full" />
          <p className="text-sm sm:text-base text-slate-500 mt-4 leading-relaxed">
            Consulte nossos atendentes de forma simples e segura, sem sair de casa.
          </p>
        </div>

        {/* Steps Grid Layout with Sequential Connectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {OPTICS_CONFIG.steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative flex flex-col items-center lg:items-start text-center lg:text-left bg-slate-50 border border-slate-100 p-6 sm:p-7 rounded-2xl shadow-sm font-sans"
              id={`step-card-${step.number}`}
            >
              
              {/* Sequential Indicator Line across Desktop grids */}
              {index < 3 && (
                <div className="hidden lg:block absolute top-12 left-[80%] w-[45%] h-[2px] bg-dashed border-t-2 border-dashed border-amber-600/30 z-20 pointer-events-none" />
              )}

              {/* Circle Bubble Header */}
              <div className="relative mb-5 flex items-center justify-center shrink-0">
                {/* Step badge in corner */}
                <span className="absolute -top-1.5 -right-1.5 bg-amber-600 text-white text-xs font-black w-6 h-6 rounded-full flex items-center justify-center shadow-md">
                  {step.number}
                </span>

                {/* Main Icon shell */}
                <div className="w-14 h-14 bg-white border border-amber-600/30 rounded-2xl shadow-sm flex items-center justify-center">
                  {getStepIcon(step.number)}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-sans font-extrabold text-slate-900 mb-3 leading-snug">
                {step.title}
              </h3>

              {/* Text description */}
              <p className="text-sm text-slate-500 leading-relaxed">
                {step.description}
              </p>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
