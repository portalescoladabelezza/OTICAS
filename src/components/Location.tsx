/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MapPin, Clock, Navigation, PhoneCall, Calendar } from "lucide-react";
import { OPTICS_CONFIG } from "../types";

export default function Location() {
  const fullAddress = `${OPTICS_CONFIG.address}, ${OPTICS_CONFIG.city}`;
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(fullAddress)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="contato" className="bg-slate-50 py-16 sm:py-20 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-12">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">

          <div className="space-y-4">

            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-lg font-extrabold text-slate-900">
                    Endereço Completo
                  </h3>

                  <p className="text-slate-600 mt-2 leading-relaxed">
                    {OPTICS_CONFIG.address}
                    <br />
                    {OPTICS_CONFIG.city}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-lg font-extrabold text-slate-900">
                    Horário de Atendimento
                  </h3>

                  <p className="text-slate-600 mt-2 leading-relaxed">
                    {OPTICS_CONFIG.openingHours.weekdays}
                    <br />
                    {OPTICS_CONFIG.openingHours.saturday}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <Calendar className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-lg font-extrabold text-slate-900">
                    Marcação de Exames
                  </h3>

                  <p className="text-slate-600 mt-2 leading-relaxed">
                    Traga sua receita médica ou consulte-nos sobre horários disponíveis para acompanhamento visual técnico.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a
                href={OPTICS_CONFIG.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="h-14 rounded-2xl bg-slate-900 text-white font-extrabold uppercase tracking-wide flex items-center justify-center gap-2 shadow-lg hover:bg-slate-800 transition-colors"
              >
                <Navigation className="w-5 h-5" />
                Como chegar
              </a>

              <a
                href={`https://wa.me/${OPTICS_CONFIG.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="h-14 rounded-2xl bg-amber-600 text-white font-extrabold uppercase tracking-wide flex items-center justify-center gap-2 shadow-lg hover:bg-amber-700 transition-colors"
              >
                <PhoneCall className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden min-h-[360px]">
            <div className="bg-slate-900 text-white px-5 py-4 flex items-center justify-between gap-4">
              <div>
                <h3 className="font-extrabold text-lg">
                  Visualizar no Maps
                </h3>

                <p className="text-slate-300 text-sm mt-1">
                  {OPTICS_CONFIG.address}
                </p>
              </div>

              <MapPin className="w-6 h-6 text-amber-500 shrink-0" />
            </div>

            <div className="w-full h-[360px] sm:h-[420px] bg-slate-100">
              <iframe
                title="Mapa da Ótica Visão Prime"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{
                  border: 0,
                  display: "block",
                  width: "100%",
                  height: "100%"
                }}
                allowFullScreen
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}