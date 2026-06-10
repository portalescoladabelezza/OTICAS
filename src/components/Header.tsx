/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, Check } from "lucide-react";
import { OPTICS_CONFIG } from "../types";
import { getWhatsappLink } from "../utils";

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Smooth scroll handler
  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of the fixed header
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappMessage = "Olá! Vi o site da Ótica Visão Prime e gostaria de saber mais sobre armações, lentes e óculos disponíveis.";
  const whatsappUrl = getWhatsappLink(OPTICS_CONFIG.whatsappNumber, whatsappMessage);

  const menuItems = [
    { label: "Início", id: "inicio" },
    { label: "Produtos", id: "produtos" },
    { label: "Depoimentos", id: "servicos" },
    { label: "Sobre", id: "sobre" },
    { label: "Contato", id: "contato" }
  ];

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0F172A]/95 backdrop-blur-md shadow-lg border-b border-amber-600/20 py-3"
          : "bg-[#0F172A] md:bg-[#0F172A]/90 md:backdrop-blur-sm py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Small Badge */}
          <div 
            onClick={() => scrollToSection("inicio")} 
            className="flex flex-col cursor-pointer group"
          >
            <div className="flex items-baseline space-x-1.5">
              <span className="text-xl sm:text-2xl font-sans tracking-tight font-bold text-white transition-colors duration-200 group-hover:text-amber-500">
                Ótica <span className="text-amber-500">Visão Prime</span>
              </span>
            </div>
            
            {/* Elegant Sub-badge */}
            <span className="text-[10px] tracking-widest text-amber-500/90 uppercase font-semibold mt-0.5">
              {OPTICS_CONFIG.badge}
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 relative pb-1 ${
                  activeSection === item.id
                    ? "text-amber-500"
                    : "text-slate-100/90 hover:text-amber-500"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Call to Action Button */}
          <div className="flex items-center space-x-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm px-4 py-2 sm:px-5 sm:py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
              id="header-cta-whatsapp"
            >
              <Phone className="w-3.5 sm:w-4 h-3.5 sm:h-4 fill-white" />
              <span>Chamar no WhatsApp</span>
            </a>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-1.5 rounded-lg text-slate-100 hover:text-amber-500 hover:bg-white/5 focus:outline-none transition-colors"
              aria-label="Alternar Menu"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0F172A] border-t border-slate-850"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    activeSection === item.id
                      ? "text-amber-500 bg-white/5 font-semibold"
                      : "text-slate-100 hover:text-amber-500 hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Optional Instagram and Facebook links in Mobile menu */}
              <div className="pt-4 border-t border-white/5 flex justify-around text-xs text-slate-300">
                <a 
                  href={OPTICS_CONFIG.instagramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-amber-500"
                >
                  Instagram
                </a>
                <a 
                  href={OPTICS_CONFIG.facebookUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-amber-500"
                >
                  Facebook
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
