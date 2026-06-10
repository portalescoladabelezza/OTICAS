/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MessageCircle, HelpCircle } from "lucide-react";
import { OPTICS_CONFIG } from "../types";
import { getWhatsappLink } from "../utils";

export default function CTA() {
  const whatsappMessage = "Olá! Vi o site da Ótica Visão Prime e gostaria de saber mais sobre armações, lentes e óculos disponíveis.";
  const whatsappUrl = getWhatsappLink(OPTICS_CONFIG.whatsappNumber, whatsappMessage);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-950 to-slate-900 text-white overflow-hidden relative">
      {/* Background visual details */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-900/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#D97706_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Floating Question mark */}
        <div className="bg-amber-650/15 border border-amber-600/30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">
          <HelpCircle className="w-6 h-6 text-amber-500" />
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black tracking-tight text-white mb-6 leading-tight" id="cta-heading">
          Precisa de ajuda para escolher seus óculos?
        </h2>

        {/* Text paragraph */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10" id="cta-description">
          Fale agora com a nossa equipe pelo WhatsApp e consulte modelos, preços, lentes e disponibilidade.
        </p>

        {/* Button */}
        <div className="flex flex-col items-center justify-center font-sans">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white font-extrabold text-base sm:text-lg px-10 py-4.5 rounded-full shadow-2xl hover:shadow-amber-600/25 transition-all duration-300 transform hover:-translate-y-1"
            id="cta-whatsapp-link"
          >
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-white" />
            <span>Falar no WhatsApp</span>
          </a>
          
          {/* Subtext */}
          <span className="text-xs text-slate-400 mt-4 tracking-wider uppercase font-medium">
            Atendimento rápido e humanizado • Sem compromisso
          </span>
        </div>

      </div>
    </section>
  );
}
