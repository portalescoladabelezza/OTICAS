/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeatureBar from "./components/FeatureBar";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import HowToBuy from "./components/HowToBuy";
import About from "./components/About";
import CTA from "./components/CTA";
import Location from "./components/Location";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [activeSection, setActiveSection] = useState<string>("inicio");

  // Execute SEO dynamic updates
  useEffect(() => {
    document.title = "Ótica Visão Prime — Armações, lentes e óculos de sol";
    
    // Manage dynamic meta description for basic search optimizations
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      "content",
      "Conheça a Ótica Visão Prime. Armações, lentes de grau, óculos de sol e atendimento direto pelo WhatsApp."
    );
  }, []);

  // Track active section elements using simple IntersectionObserver scroll detection
  useEffect(() => {
    const sections = ["inicio", "produtos", "servicos", "sobre", "contato"];
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px", // triggers when items cross typical central desktop focus lines
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans select-none antialiased bg-slate-50">
      
      {/* 1. Header (Anchored desktop & mobile) */}
      <Header activeSection={activeSection} />
      
      {/* 2. Hero banner */}
      <Hero />
      
      {/* 3. Highlight feature bar */}
      <FeatureBar />
      
      {/* 4. Interactive category chooser panels */}
      <Categories 
        selectedCategory={selectedCategory} 
        onSelectCategory={setSelectedCategory} 
      />
      
      {/* 5. Direct products panel filter */}
      <Products selectedCategory={selectedCategory} />
      
      {/* 6. Testimonials with beautiful portraits from satisfied customers */}
      <Testimonials />
      
      {/* 7. Step by step WhatsApp purchase check guides */}
      <HowToBuy />
      
      {/* 8. Storyteller brand values block */}
      <About />
      
      {/* 9. Direct contact CTA layout */}
      <CTA />
      
      {/* 10. Location, schedules map routing navigation */}
      <Location />
      
      {/* 11. Footer social navigation */}
      <Footer />
      
      {/* 12. Persistent pulsing Floating WhatsApp Trigger */}
      <WhatsAppFloat />

    </div>
  );
}
