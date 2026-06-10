/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sparkles, MessageCircle, Heart, Star } from "lucide-react";

export default function FeatureBar() {
  const items = [
    { text: "Armações modernas", icon: Sparkles },
    { text: "Lentes de grau", icon: Star },
    { text: "Óculos de sol", icon: Heart },
    { text: "Atendimento pelo WhatsApp", icon: MessageCircle }
  ];

  return (
    <section className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-slate-950 py-5 px-4 shadow-inner relative z-20">
      <div className="max-w-7xl mx-auto">
        {/* Responsive layout: Grid on mobile to tablet, flex row on desktop */}
        <div className="grid grid-cols-2 lg:flex lg:flex-row items-center justify-around gap-6 lg:gap-8">
          {items.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="flex items-center justify-center space-x-2.5 font-sans font-extrabold text-xs sm:text-sm lg:text-base uppercase tracking-wider text-center"
              >
                <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-slate-950/80" />
                <span className="text-slate-950">{item.text}</span>
                
                {/* Visual elegant separator dot on desktop */}
                {index < items.length - 1 && (
                  <span className="hidden lg:inline-block ml-6 text-slate-950/40 text-lg">
                    •
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
