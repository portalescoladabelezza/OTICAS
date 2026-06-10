/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Star, Quote, MessageCircle } from "lucide-react";
import { OPTICS_CONFIG } from "../types";
import { getWhatsappLink } from "../utils";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  glassesModel: string;
  glassesType: "Grau" | "Solar" | "Premium";
  rating: number;
  comment: string;
  image: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Beatriz Albuquerque",
    role: "Arquiteta e Designer",
    glassesModel: "Armação Dourada Slim",
    glassesType: "Grau",
    rating: 5,
    comment: "Eu sou extremamente exigente com estética e conforto. A armação dourada slim da Visão Prime superou todas as minhas expectativas. É leve, elegante e recebo elogios todos os dias. O atendimento no WhatsApp foi impecável!",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: "test-2",
    name: "Dr. Gustavo Ramos",
    role: "Médico Cardiologista",
    glassesModel: "Armação Classic Black",
    glassesType: "Grau",
    rating: 5,
    comment: "Uso óculos de grau por mais de 12 horas seguidas em plantões e consultório. O conforto dessa armação é incomparável. As lentes antirreflexo que me recomendaram são fantásticas, reduziram muito a fadiga ocular sob luz forte.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: "test-3",
    name: "Mariana Vasconcellos",
    role: "Digital Influencer",
    glassesModel: "Óculos Solar Premium",
    glassesType: "Premium",
    rating: 5,
    comment: "Apaixonada pelos meus solares novos! O design é super moderno e a proteção solar é excelente. A qualidade do acabamento é nítida. O suporte online deles me ajudou a escolher o modelo perfeito para o meu formato de rosto.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&h=600&q=80"
  }
];

export default function Testimonials() {
  const whatsappMessage = "Olá! Vi os depoimentos incríveis de clientes no site e gostaria de agendar uma consulta ou solicitar orçamento para óculos.";
  const whatsappUrl = getWhatsappLink(OPTICS_CONFIG.whatsappNumber, whatsappMessage);

  return (
    <section
      id="servicos"
      className="py-20 sm:py-28 bg-gradient-to-b from-slate-50 to-slate-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-widest font-extrabold text-amber-600 block mb-2 font-sans">
            Clientes Satisfeitos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-slate-900 tracking-tight leading-tight">
            Quem compra, recomenda
          </h2>
          <div className="w-16 h-1 bg-amber-600 mx-auto mt-4 rounded-full" />
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed font-sans max-w-2xl mx-auto">
            Veja a experiência real de quem encontrou estilo, conforto sob medida e lentes de alta precisão na Ótica Visão Prime.
          </p>
        </div>

        {/* Testimonials Grid Layout with Exuberant styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch font-sans">
          {TESTIMONIALS.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col justify-between bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-amber-600/30 transition-all duration-300 overflow-hidden relative p-6 sm:p-8"
              id={`testimonial-card-${test.id}`}
            >
              {/* Aesthetic orange amber gradient shadow line on top hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-amber-600 transition-colors" />

              <div>
                {/* Header Profile Info and Exuberant Photo */}
                <div className="flex items-center space-x-4 mb-6">
                  {/* Photo Container with elegant border */}
                  <div className="relative w-16 h-16 shrink-0 rounded-full overflow-hidden border-2 border-slate-100 group-hover:border-amber-500 transition-colors shadow-inner">
                    <img
                      src={test.image}
                      alt={test.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Meta data */}
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-sm sm:text-base group-hover:text-amber-500 transition-colors font-sans">
                      {test.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      {test.role}
                    </p>
                    {/* Glasses type badge */}
                    <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 group-hover:bg-amber-600/10 group-hover:text-amber-600 transition-all duration-200">
                      Óculos {test.glassesType}
                    </span>
                  </div>
                </div>

                {/* Rating component */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-500 text-amber-400 shrink-0"
                    />
                  ))}
                </div>

                {/* Actual written testimonial text */}
                <div className="relative">
                  <Quote className="absolute -top-3 -left-2 w-8 h-8 text-neutral-100 shrink-0 select-none z-0 group-hover:text-amber-100/50 transition-colors" />
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic relative z-10">
                    "{test.comment}"
                  </p>
                </div>
              </div>

              {/* Bought model indicator Footer section of standard card */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                <span className="text-slate-400 uppercase tracking-widest font-bold text-[10px]">
                  Modelo Comprado:
                </span>
                <span className="text-slate-800 group-hover:text-amber-600 transition-colors">
                  {test.glassesModel}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Big elegant CTA block beneath testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 sm:mt-24 bg-slate-900 rounded-3xl border border-white/5 p-8 sm:p-12 text-center max-w-4xl mx-auto relative overflow-hidden shadow-2xl"
        >
          {/* Decorative gold ambient light */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-amber-600/10 rounded-full blur-[100px] pointer-events-none" />

          <h3 className="text-xl sm:text-2xl font-sans font-extrabold text-white mb-3 relative z-10 leading-snug">
            Quer ter essa mesma experiência de conforto e sofisticação?
          </h3>
          <p className="text-slate-400 text-sm max-w-xl mx-auto mb-8 relative z-10 font-sans">
            Nossos consultores ajudam você a escolher a armação perfeita e as lentes ideais direto pelo WhatsApp. Prático, fácil e 100% humanizado.
          </p>

          <div className="relative z-10">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white font-extrabold text-base px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              id="testimonials-cta-btn"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Chame nosso consultor agora</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
