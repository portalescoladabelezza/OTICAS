/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MapPin, Clock, Navigation, PhoneCall, Calendar } from "lucide-react";
import { OPTICS_CONFIG } from "../types";

export default function Location() {
  return (
    <section id="contato" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading Titles */}
        <div className="text-center max-w-3xl mx-auto mb-16 font-sans">
          <span className="text-xs uppercase tracking-widest font-extrabold text-amber-600">
            Nossa Loja Física
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-slate-900 mt-2 tracking-tight">
            Atendimento e localização
          </h2>
          <div className="w-16 h-1 bg-amber-600 mx-auto mt-4 rounded-full" />
          <p className="text-sm sm:text-base text-slate-500 mt-4 leading-relaxed">
            Venha experimentar suas armações favoritas pessoalmente em nosso espaço moderno e climatizado.
          </p>
        </div>

        {/* Double Column content layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch font-sans">
          
          {/* Typographic Info cards (Col 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-slate-50 p-8 sm:p-10 rounded-2xl border border-slate-100 shadow-sm">
            
            <div className="space-y-8">
              {/* Address card */}
              <div className="flex items-start space-x-4">
                <div className="bg-slate-900 text-amber-500 p-3 rounded-xl shrink-0 shadow-md">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-extrabold text-slate-900/50 mb-1">
                    Endereço Completo
                  </h4>
                  <p className="text-base font-extrabold text-slate-900 leading-snug">
                    {OPTICS_CONFIG.address}
                  </p>
                  <p className="text-sm text-slate-500 font-semibold mt-1">
                    {OPTICS_CONFIG.city}
                  </p>
                </div>
              </div>

              {/* Working Hours card */}
              <div className="flex items-start space-x-4">
                <div className="bg-slate-900 text-amber-500 p-3 rounded-xl shrink-0 shadow-md">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-extrabold text-slate-900/50 mb-1">
                    Horário de Atendimento
                  </h4>
                  <div className="space-y-1 mt-1">
                    <p className="text-sm font-bold text-slate-700 flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-amber-600 rounded-full inline-block shrink-0" />
                      <span>{OPTICS_CONFIG.openingHours.weekdays}</span>
                    </p>
                    <p className="text-sm font-bold text-slate-700 flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-amber-600 rounded-full inline-block shrink-0" />
                      <span>{OPTICS_CONFIG.openingHours.saturday}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional customer convenience indicator */}
              <div className="flex items-start space-x-4">
                <div className="bg-slate-900 text-amber-500 p-3 rounded-xl shrink-0 shadow-md">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-extrabold text-slate-900/50 mb-1">
                    Marcação de Exames
                  </h4>
                  <p className="text-sm text-slate-500 leading-normal">
                    Traga sua receita médica ou consulte-nos sobre horários disponíveis para acompanhamento visual técnico.
                  </p>
                </div>
              </div>
            </div>

            {/* Como Chegar Route planner action button */}
            <div className="pt-6 border-t border-slate-200/60">
              <a
                href={OPTICS_CONFIG.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2.5 bg-slate-900 hover:bg-amber-600 hover:text-white text-white font-extrabold text-sm sm:text-base px-6 py-4 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 uppercase tracking-wider"
                id="location-how-to-get-btn"
              >
                <Navigation className="w-5 h-5 shrink-0" />
                <span>Como chegar</span>
              </a>
            </div>

          </div>

          {/* Luxury Stylized Map backdrop presentation (Col 7) */}
          <div className="lg:col-span-7 relative min-h-[300px] rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex items-center justify-center">
            
            {/* Elegant dark slate architectural blueprint resembling a location map */}
            <div className="absolute inset-0 bg-slate-900 flex flex-col justify-between p-8 relative overflow-hidden">
              
              {/* Geometric Grid lines */}
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#FFF_1px,transparent_1px),linear-gradient(to_bottom,#FFF_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />
              
              {/* Dynamic abstract geometric map roads layout representation */}
              <div className="absolute inset-x-0 top-1/3 h-6 bg-white/5 transform -rotate-12 pointer-events-none" />
              <div className="absolute inset-y-0 left-1/3 w-8 bg-white/5 transform rotate-45 pointer-events-none" />
              <div className="absolute inset-y-0 right-1/4 w-10 bg-white/5 transform -rotate-45 pointer-events-none" />

              {/* Glowing Map pin with ripples */}
              <div className="absolute top-[45%] left-[45%] lg:top-[42%] lg:left-[45%] z-20 flex flex-col items-center">
                
                {/* Ping rings */}
                <div className="absolute -top-3 w-12 h-12 bg-amber-600/30 rounded-full animate-ping pointer-events-none" />
                <div className="absolute -top-1 w-8 h-8 bg-amber-600/20 rounded-full animate-pulse pointer-events-none" />
                
                {/* Physical Pin */}
                <div className="bg-gradient-to-r from-amber-600 to-amber-500 text-white p-2.5 rounded-full shadow-2xl border-2 border-slate-905 z-10">
                  <MapPin className="w-6 h-6 fill-current" />
                </div>
                
                {/* Pin shadow under */}
                <div className="w-3 h-1.5 bg-black/40 rounded-full blur-xs mt-1" />
                
                {/* Floating location tag */}
                <div className="bg-slate-900 border border-amber-600/40 text-white font-sans font-bold text-xs py-1.5 px-3.5 rounded-lg shadow-xl mt-2 select-none whitespace-nowrap">
                  Ótica Visão Prime
                </div>
              </div>

              {/* Bottom stylized control block for premium look */}
              <div className="relative mt-auto z-10 bg-slate-900/80 backdrop-blur-md border border-white/10 p-4 rounded-xl flex items-center justify-between">
                <div>
                  <h4 className="text-white text-xs font-bold leading-tight">Visualizar no Maps</h4>
                  <p className="text-[10px] text-slate-300 mt-1">{OPTICS_CONFIG.address}</p>
                </div>
                <a
                  href={OPTICS_CONFIG.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-600 hover:bg-amber-700 text-white p-2 rounded-lg transition-colors"
                >
                  <Navigation className="w-4 h-4 fill-current" />
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
