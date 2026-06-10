/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Glasses, Instagram, Facebook, MessageCircle, ArrowUp } from "lucide-react";
import { OPTICS_CONFIG } from "../types";
import { getWhatsappLink } from "../utils";

export default function Footer() {
  const whatsappMessage = "Olá! Vi o site da Ótica Visão Prime e gostaria de saber mais sobre armações, lentes e óculos disponíveis.";
  const whatsappUrl = getWhatsappLink(OPTICS_CONFIG.whatsappNumber, whatsappMessage);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleScrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-amber-600/15 pt-16 pb-12 relative z-20 font-sans">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/5">
          
          {/* Column 1: Logo & brand presentation (Col 5) */}
          <div className="md:col-span-5 space-y-4">
            <div 
              onClick={scrollToTop} 
              className="flex flex-col cursor-pointer max-w-max group"
            >
              <span className="text-xl sm:text-2xl font-sans tracking-tight font-bold text-white transition-colors duration-200 group-hover:text-amber-500">
                Ótica <span className="text-amber-500">Visão Prime</span>
              </span>
              <span className="text-[10px] tracking-widest text-amber-500/80 uppercase font-semibold mt-0.5">
                {OPTICS_CONFIG.badge}
              </span>
            </div>
            
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Armações, lentes, óculos de sol e atendimento personalizado pelo WhatsApp. Oferecemos estilo, conforto e cuidado premium com sua visão.
            </p>
          </div>

          {/* Column 2: Quick Links (Col 4) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white text-xs sm:text-sm font-bold uppercase tracking-wider">
              Navegação
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <button
                onClick={() => handleScrollToId("inicio")}
                className="text-left text-sm text-slate-400 hover:text-amber-500 transition-colors cursor-pointer"
              >
                Início
              </button>
              <button
                onClick={() => handleScrollToId("produtos")}
                className="text-left text-sm text-slate-400 hover:text-amber-500 transition-colors cursor-pointer"
              >
                Produtos
              </button>
              <button
                onClick={() => handleScrollToId("servicos")}
                className="text-left text-sm text-slate-400 hover:text-amber-500 transition-colors cursor-pointer"
              >
                Depoimentos
              </button>
              <button
                onClick={() => handleScrollToId("sobre")}
                className="text-left text-sm text-slate-400 hover:text-amber-500 transition-colors cursor-pointer"
              >
                Sobre nós
              </button>
              <button
                onClick={() => handleScrollToId("contato")}
                className="text-left text-sm text-slate-400 hover:text-amber-500 transition-colors col-span-2 cursor-pointer"
              >
                Contato e Localização
              </button>
            </div>
          </div>

          {/* Column 3: Contact Channels & Social (Col 4) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-white text-xs sm:text-sm font-bold uppercase tracking-wider">
              Canais Sociais
            </h4>
            <p className="text-sm text-slate-400 leading-normal mb-4">
              Siga Ótica Visão Prime no Instagram e Facebook para ver novidades, dicas e promoções.
            </p>

            {/* Social Buttons */}
            <div className="flex items-center space-x-3">
              <a
                href={OPTICS_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-amber-600/10 text-slate-300 hover:text-amber-500 p-3 rounded-lg border border-white/10 hover:border-amber-600/30 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 shrink-0" />
              </a>
              <a
                href={OPTICS_CONFIG.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-amber-600/10 text-slate-300 hover:text-amber-500 p-3 rounded-lg border border-white/10 hover:border-amber-600/30 transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 shrink-0" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-amber-600/10 text-slate-300 hover:text-amber-500 p-3 rounded-lg border border-white/10 hover:border-amber-600/30 transition-all duration-200"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 shrink-0 fill-none" />
              </a>
            </div>
          </div>

        </div>

        {/* Back to top button & Copy bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 font-medium text-center sm:text-left">
            &copy; 2026 Ótica Visão Prime. Todos os direitos reservados. 
          </p>
          
          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-1.5 text-xs text-slate-400 hover:text-amber-500 font-sans font-extrabold uppercase tracking-widest bg-white/5 hover:bg-white/10 py-2.5 px-4 rounded-xl border border-white/10"
            id="back-to-top-btn"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-4 h-4 shrink-0" />
          </button>
        </div>

      </div>
    </footer>
  );
}
