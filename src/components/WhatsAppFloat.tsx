/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { OPTICS_CONFIG } from "../types";
import { getWhatsappLink } from "../utils";

export default function WhatsAppFloat() {
  const whatsappMessage = "Olá! Vi o site da Ótica Visão Prime e gostaria de saber mais sobre armações, lentes e óculos disponíveis.";
  const whatsappUrl = getWhatsappLink(OPTICS_CONFIG.whatsappNumber, whatsappMessage);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
        className="relative group block"
        aria-label="Fale conosco no WhatsApp"
        id="whatsapp-floating-trigger"
      >
        {/* Pulsing online green halo rings */}
        <span className="absolute -inset-2 bg-emerald-500 rounded-full opacity-35 animate-ping pointer-events-none" />
        <span className="absolute -inset-1 bg-emerald-400 rounded-full opacity-20 animate-pulse pointer-events-none" />

        {/* Main active green button with icon */}
        <div className="relative bg-emerald-500 hover:bg-emerald-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 transform group-hover:scale-110 flex items-center justify-center border-2 border-white">
          <MessageCircle className="w-7 h-7 fill-white text-emerald-500 shrink-0" />
        </div>

        {/* Tooltip on hover */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-slate-900 border border-amber-600/30 text-white text-xs font-bold py-2 px-4 rounded-xl shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none select-none font-sans">
          Fale Conosco
        </div>

      </motion.a>
    </div>
  );
}
