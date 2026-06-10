/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, Search, HelpCircle, PhoneCall } from "lucide-react";
import { OPTICS_CONFIG, Product } from "../types";
import { getWhatsappLink } from "../utils";

interface ProductsProps {
  selectedCategory: string;
}

export default function Products({ selectedCategory }: ProductsProps) {
  // Filter products based on selected category (if selectedCategory is "Todos", show all)
  const filteredProducts = selectedCategory === "Todos"
    ? OPTICS_CONFIG.products
    : OPTICS_CONFIG.products.filter(p => p.category === selectedCategory);

  // Helper to color product tags elegantly based on their name
  const getTagStyles = (tag?: string) => {
    switch (tag?.toLowerCase()) {
      case "novo":
        return "bg-emerald-500 text-white";
      case "promoção":
        return "bg-rose-500 text-white animate-pulse";
      case "mais vendido":
        return "bg-slate-900 text-white border border-amber-600/30";
      case "destaque":
        return "bg-amber-600 text-white";
      case "consulte":
      default:
        return "bg-slate-500 text-white";
    }
  };

  const getWhatsAppProductUrl = (product: Product) => {
    const textMsg = `Olá! Tenho interesse em ${product.name} que vi no site da Ótica Visão Prime. Ainda está disponível?`;
    return getWhatsappLink(OPTICS_CONFIG.whatsappNumber, textMsg);
  };

  const whatsappGeneralMsg = "Olá! Vi o site da Ótica Visão Prime e gostaria de saber mais sobre armações, lentes e óculos disponíveis.";
  const whatsappUrlGeneral = getWhatsappLink(OPTICS_CONFIG.whatsappNumber, whatsappGeneralMsg);

  return (
    <section id="produtos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading Titles */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-extrabold text-amber-600">
            Nosso Catálogo
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-slate-900 mt-2 tracking-tight">
            Produtos em destaque
          </h2>
          <div className="w-16 h-1 bg-amber-600 mx-auto mt-4 rounded-full" />
          <p className="text-sm sm:text-base text-slate-500 mt-4 leading-relaxed bg-slate-50 py-2.5 px-4 rounded-xl border border-slate-100 max-w-xl mx-auto">
            Confira algumas opções disponíveis na Ótica Visão Prime.
          </p>
        </div>

        {/* Dynamic products list */}
        <div className="relative">
          <AnimatePresence mode="popLayout">
            {filteredProducts.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 justify-center"
              >
                {filteredProducts.map((product) => {
                  const productWhatsappUrl = getWhatsAppProductUrl(product);

                  return (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      key={product.id}
                      className="group flex flex-col justify-between bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:border-amber-600/40 transition-all duration-300"
                      id={`product-card-${product.id}`}
                    >
                      {/* Image container with aspect ratio */}
                      <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden shrink-0">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                          loading="lazy"
                        />
                        
                        {/* Decorative dark linear filter on image bottom */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none" />

                        {/* Elegantly placed absolute tags */}
                        {product.tag && (
                          <div className="absolute top-3.5 left-3.5 z-10 font-sans">
                            <span className={`text-[10px] uppercase tracking-wider font-extrabold px-3 py-1.5 rounded-full shadow-md ${getTagStyles(product.tag)}`}>
                              {product.tag}
                            </span>
                          </div>
                        )}

                        {/* Top corner luxury design embellishment */}
                        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-amber-500 p-1.5 rounded-full shadow-lg">
                          <MessageCircle className="w-3.5 h-3.5 fill-current" />
                        </div>
                      </div>

                      {/* Content Panel */}
                      <div className="p-5 flex flex-col justify-between flex-grow">
                        <div>
                          {/* Breadcrumb Category */}
                          <p className="text-[10px] uppercase font-bold tracking-widest text-amber-600 mb-1.5 font-sans">
                            {product.category}
                          </p>
                          
                          {/* Title */}
                          <h3 className="text-base sm:text-lg font-sans font-extrabold text-slate-900 line-clamp-1 group-hover:text-amber-600 transition-colors mb-2">
                            {product.name}
                          </h3>
                        </div>

                        {/* Bottom Info and Price */}
                        <div className="mt-4 pt-4 border-t border-slate-100">
                          <div className="flex items-baseline justify-between mb-4">
                            <span className="text-xs text-slate-400 font-medium">Valor comercial:</span>
                            <span className="text-lg sm:text-xl font-sans font-extrabold text-slate-900">
                              {product.price}
                            </span>
                          </div>

                          {/* Full width Horizontal WhatsApp checkout CTA */}
                          <a
                            href={productWhatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full inline-flex items-center justify-center space-x-2 bg-slate-900 hover:bg-amber-600 hover:text-white text-white font-bold text-sm px-4 py-3.5 rounded-xl uppercase tracking-wider whitespace-nowrap transition-all duration-300 transform group-hover:scale-[1.02]"
                            id={`btn-quote-${product.id}`}
                          >
                            <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                            <span>Consultar no WhatsApp</span>
                          </a>
                        </div>
                      </div>

                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              // Empty result card
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-slate-50 border border-dashed border-slate-300 rounded-3xl p-10 sm:p-14 text-center max-w-xl mx-auto font-sans"
              >
                <div className="bg-slate-200/60 text-slate-400 p-4 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-5">
                  <Search className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Visualização Customizada</h3>
                <p className="text-slate-500 text-sm mt-2 max-w-md mx-auto mb-6">
                  Armações ou produtos da categoria <span className="font-semibold">"{selectedCategory}"</span> estão disponíveis sob consulta no canal direto da Ótica Visão Prime.
                </p>
                <a
                  href={whatsappUrlGeneral}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all duration-200"
                >
                  <PhoneCall className="w-4 h-4 shrink-0" />
                  <span>Chamar Especialista agora</span>
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
