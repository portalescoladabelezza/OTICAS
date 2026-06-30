/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import * as Icons from "lucide-react";
import { cn } from "../utils";

interface CategoriesProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function Categories({ selectedCategory, onSelectCategory }: CategoriesProps) {
  const categoriesList = [
    { name: "Todos", iconName: "Layers", label: "Ver tudo" },
    { name: "Armações de grau", iconName: "Glasses", label: "Armações" },
    { name: "Óculos de sol", iconName: "Sun", label: "Óculos de Sol" },
    { name: "Lentes", iconName: "Eye", label: "Lentes de Grau" },
    { name: "Infantil", iconName: "Smile", label: "Linha Infantil" },
    { name: "Promoções", iconName: "Sparkles", label: "Ofertas Especiais" },
    { name: "Manutenção", iconName: "Wrench", label: "Manutenção" }
  ];

  return (
    <section className="bg-slate-50 py-16 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Titles */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest font-extrabold text-amber-600">
            Categorias em Destaque
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-slate-900 mt-2 tracking-tight">
            Escolha o que você procura
          </h2>
          <div className="w-16 h-1 bg-amber-600 mx-auto mt-4 rounded-full" />
          <p className="text-sm sm:text-base text-slate-500 mt-4 leading-relaxed">
            Selecione uma categoria abaixo para filtrar nossos modelos e serviços exclusivos.
          </p>
        </div>

        {/* Elegant Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 lg:gap-3.5 font-sans">
          {categoriesList.map((category) => {
            const isSelected = selectedCategory === category.name;
            
            // Resolve icon safely
            const IconComponent = (Icons as any)[category.iconName] || Icons.HelpCircle;

            return (
              <button
                key={category.name}
                onClick={() => onSelectCategory(category.name)}
                className={cn(
                  "flex flex-col items-center justify-center p-3.5 sm:p-5 rounded-2xl border text-center transition-all duration-300 transform cursor-pointer focus:outline-none min-h-[150px] sm:min-h-[160px] shadow-sm select-none w-full",
                  isSelected
                    ? "bg-slate-900 border-amber-600 text-white shadow-md ring-2 ring-amber-500/20 -translate-y-1"
                    : "bg-white border-slate-200/80 text-slate-900 hover:bg-slate-900/5 hover:border-slate-900/20 hover:-translate-y-0.5"
                )}
                id={`category-card-${category.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {/* Dynamically Styled Icon Container */}
                <div
                  className={cn(
                    "p-2.5 sm:p-3 rounded-full mb-2.5 transition-colors shrink-0",
                    isSelected 
                      ? "bg-amber-500/20 text-amber-500" 
                      : "bg-slate-100 text-slate-700/70 group-hover:bg-slate-900/10"
                  )}
                >
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
                </div>

                {/* Tag name */}
                <span className="text-xs font-bold tracking-tight px-1 uppercase line-clamp-2 leading-tight min-h-[2.25rem] flex items-center justify-center text-center">
                  {category.name}
                </span>

                {/* Sub-label descriptor */}
                <span className={cn(
                  "text-[10px] mt-1.5 tracking-wider block font-semibold leading-none shrink-0",
                  isSelected ? "text-amber-500" : "text-slate-400"
                )}>
                  {category.label}
                </span>

              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
