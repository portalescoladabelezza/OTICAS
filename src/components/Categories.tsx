/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Icons from "lucide-react";

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
    <section className="optica-categories-section">
      <style>{`
        .optica-categories-section {
          position: relative !important;
          isolation: isolate !important;
          background: #f8fafc !important;
          padding: 64px 0 !important;
          border-bottom: 1px solid rgba(203, 213, 225, 0.6) !important;
          overflow: visible !important;
          z-index: 1 !important;
        }

        .optica-categories-container {
          width: 100% !important;
          max-width: 1280px !important;
          margin: 0 auto !important;
          padding: 0 16px !important;
          box-sizing: border-box !important;
        }

        .optica-categories-header {
          text-align: center !important;
          max-width: 760px !important;
          margin: 0 auto 48px auto !important;
          position: relative !important;
          z-index: 2 !important;
        }

        .optica-categories-kicker {
          display: block !important;
          font-size: 12px !important;
          text-transform: uppercase !important;
          letter-spacing: 0.18em !important;
          font-weight: 800 !important;
          color: #d97706 !important;
          margin-bottom: 8px !important;
        }

        .optica-categories-title {
          font-size: clamp(32px, 7vw, 48px) !important;
          line-height: 1.08 !important;
          font-weight: 900 !important;
          color: #0f172a !important;
          margin: 0 !important;
          letter-spacing: -0.04em !important;
        }

        .optica-categories-line {
          width: 72px !important;
          height: 5px !important;
          background: #d97706 !important;
          border-radius: 999px !important;
          margin: 24px auto 0 auto !important;
        }

        .optica-categories-description {
          color: #64748b !important;
          font-size: 16px !important;
          line-height: 1.7 !important;
          margin: 24px auto 0 auto !important;
          max-width: 680px !important;
        }

        .optica-categories-grid {
          display: grid !important;
          grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          gap: 16px !important;
          width: 100% !important;
          position: relative !important;
          z-index: 2 !important;
          align-items: stretch !important;
          justify-items: stretch !important;
          grid-auto-flow: row !important;
          transform: none !important;
          margin: 0 !important;
          padding: 0 !important;
          overflow: visible !important;
        }

        .optica-category-card {
          all: unset;
          box-sizing: border-box !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          justify-content: center !important;
          width: 100% !important;
          min-width: 0 !important;
          min-height: 170px !important;
          height: 100% !important;
          padding: 22px 12px !important;
          border-radius: 24px !important;
          border: 1px solid rgba(203, 213, 225, 0.9) !important;
          background: #ffffff !important;
          color: #0f172a !important;
          text-align: center !important;
          cursor: pointer !important;
          position: relative !important;
          inset: auto !important;
          top: auto !important;
          right: auto !important;
          bottom: auto !important;
          left: auto !important;
          z-index: 1 !important;
          transform: none !important;
          translate: none !important;
          scale: 1 !important;
          rotate: none !important;
          margin: 0 !important;
          overflow: hidden !important;
          box-shadow: 0 2px 8px rgba(15, 23, 42, 0.08) !important;
          transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease !important;
        }

        .optica-category-card::before,
        .optica-category-card::after,
        .optica-category-icon::before,
        .optica-category-icon::after {
          content: none !important;
          display: none !important;
        }

        .optica-category-card:hover {
          background: #f1f5f9 !important;
          border-color: rgba(148, 163, 184, 0.8) !important;
        }

        .optica-category-card.is-active {
          background: #0f172a !important;
          border-color: #d97706 !important;
          color: #ffffff !important;
          box-shadow: 0 6px 18px rgba(15, 23, 42, 0.18), 0 0 0 2px rgba(217, 119, 6, 0.25) !important;
        }

        .optica-category-icon {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          width: 58px !important;
          height: 58px !important;
          border-radius: 999px !important;
          background: #f1f5f9 !important;
          color: #64748b !important;
          margin: 0 0 22px 0 !important;
          padding: 0 !important;
          position: relative !important;
          z-index: 2 !important;
          flex: 0 0 auto !important;
          transform: none !important;
        }

        .optica-category-card.is-active .optica-category-icon {
          background: rgba(217, 119, 6, 0.18) !important;
          color: #f59e0b !important;
        }

        .optica-category-icon svg {
          display: block !important;
          width: 26px !important;
          height: 26px !important;
          min-width: 26px !important;
          min-height: 26px !important;
          max-width: 26px !important;
          max-height: 26px !important;
          position: relative !important;
          transform: none !important;
          overflow: visible !important;
        }

        .optica-category-name {
          display: block !important;
          width: 100% !important;
          font-size: 13px !important;
          line-height: 1.2 !important;
          font-weight: 900 !important;
          text-transform: uppercase !important;
          letter-spacing: -0.02em !important;
          color: inherit !important;
          margin: 0 !important;
          padding: 0 4px !important;
          position: relative !important;
          z-index: 2 !important;
          transform: none !important;
        }

        .optica-category-label {
          display: block !important;
          width: 100% !important;
          font-size: 12px !important;
          line-height: 1.2 !important;
          font-weight: 700 !important;
          color: #94a3b8 !important;
          margin: 14px 0 0 0 !important;
          padding: 0 !important;
          position: relative !important;
          z-index: 2 !important;
          transform: none !important;
        }

        .optica-category-card.is-active .optica-category-label {
          color: #f59e0b !important;
        }

        @media (min-width: 640px) {
          .optica-categories-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
          }

          .optica-categories-container {
            padding: 0 24px !important;
          }
        }

        @media (min-width: 768px) {
          .optica-categories-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
          }
        }

        @media (min-width: 1024px) {
          .optica-categories-grid {
            grid-template-columns: repeat(7, minmax(0, 1fr)) !important;
          }

          .optica-category-card {
            min-height: 160px !important;
          }
        }

        @media (max-width: 480px) {
          .optica-categories-section {
            padding: 56px 0 !important;
          }

          .optica-categories-container {
            padding: 0 24px !important;
          }

          .optica-categories-grid {
            gap: 16px !important;
          }

          .optica-category-card {
            min-height: 180px !important;
            border-radius: 22px !important;
          }

          .optica-category-name {
            font-size: 12px !important;
          }

          .optica-category-label {
            font-size: 11px !important;
          }
        }
      `}</style>

      <div className="optica-categories-container">
        <div className="optica-categories-header">
          <span className="optica-categories-kicker">
            Categorias em Destaque
          </span>

          <h2 className="optica-categories-title">
            Escolha o que você procura
          </h2>

          <div className="optica-categories-line" />

          <p className="optica-categories-description">
            Selecione uma categoria abaixo para filtrar nossos modelos e serviços exclusivos.
          </p>
        </div>

        <div className="optica-categories-grid">
          {categoriesList.map((category) => {
            const isSelected = selectedCategory === category.name;
            const IconComponent = (Icons as any)[category.iconName] || Icons.HelpCircle;

            return (
              <button
                key={category.name}
                type="button"
                onClick={() => onSelectCategory(category.name)}
                className={`optica-category-card ${isSelected ? "is-active" : ""}`}
                id={`category-card-${category.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <span className="optica-category-icon" aria-hidden="true">
                  <IconComponent size={26} strokeWidth={2.3} />
                </span>

                <span className="optica-category-name">
                  {category.name}
                </span>

                <span className="optica-category-label">
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