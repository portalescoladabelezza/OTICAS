/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { CSSProperties } from "react";
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

  const sectionStyle: CSSProperties = {
    background: "#f8fafc",
    padding: "56px 0",
    borderBottom: "1px solid rgba(203,213,225,0.6)",
    position: "relative",
    zIndex: 1,
    overflow: "visible"
  };

  const containerStyle: CSSProperties = {
    width: "100%",
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "0 24px",
    boxSizing: "border-box"
  };

  const headerStyle: CSSProperties = {
    textAlign: "center",
    maxWidth: "760px",
    margin: "0 auto 48px auto"
  };

  const gridStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(145px, 1fr))",
    gap: "16px",
    width: "100%",
    alignItems: "stretch"
  };

  const getCardStyle = (isSelected: boolean): CSSProperties => ({
    appearance: "none",
    WebkitAppearance: "none",
    width: "100%",
    minHeight: "178px",
    height: "178px",
    padding: "20px 10px",
    borderRadius: "24px",
    border: isSelected ? "2px solid #d97706" : "1px solid rgba(203,213,225,0.95)",
    background: isSelected ? "#0f172a" : "#ffffff",
    color: isSelected ? "#ffffff" : "#0f172a",
    boxShadow: isSelected
      ? "0 8px 20px rgba(15,23,42,0.18)"
      : "0 3px 10px rgba(15,23,42,0.08)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    cursor: "pointer",
    boxSizing: "border-box",
    position: "relative",
    zIndex: 1,
    overflow: "hidden",
    margin: 0,
    transform: "none",
    opacity: 1
  });

  const getIconBoxStyle = (isSelected: boolean): CSSProperties => ({
    width: "58px",
    height: "58px",
    borderRadius: "999px",
    background: isSelected ? "rgba(217,119,6,0.18)" : "#f1f5f9",
    color: isSelected ? "#f59e0b" : "#64748b",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
    flexShrink: 0
  });

  const nameStyle: CSSProperties = {
    display: "block",
    width: "100%",
    fontSize: "12px",
    lineHeight: "1.25",
    fontWeight: 900,
    textTransform: "uppercase",
    color: "inherit",
    margin: 0,
    padding: 0
  };

  const getLabelStyle = (isSelected: boolean): CSSProperties => ({
    display: "block",
    width: "100%",
    fontSize: "11px",
    lineHeight: "1.25",
    fontWeight: 700,
    color: isSelected ? "#f59e0b" : "#94a3b8",
    marginTop: "12px",
    padding: 0
  });

  return (
    <section id="servicos" style={sectionStyle}>
      <div style={containerStyle}>
        <div style={headerStyle}>
          <span
            style={{
              display: "block",
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              fontWeight: 900,
              color: "#d97706",
              marginBottom: "8px"
            }}
          >
            Categorias em Destaque
          </span>

          <h2
            style={{
              fontSize: "clamp(32px, 7vw, 48px)",
              lineHeight: "1.08",
              fontWeight: 900,
              color: "#0f172a",
              margin: 0,
              letterSpacing: "-0.04em"
            }}
          >
            Escolha o que você procura
          </h2>

          <div
            style={{
              width: "72px",
              height: "5px",
              background: "#d97706",
              borderRadius: "999px",
              margin: "24px auto 0 auto"
            }}
          />

          <p
            style={{
              color: "#64748b",
              fontSize: "16px",
              lineHeight: 1.7,
              margin: "24px auto 0 auto",
              maxWidth: "680px"
            }}
          >
            Selecione uma categoria abaixo para filtrar nossos modelos e serviços exclusivos.
          </p>
        </div>

        <div style={gridStyle}>
          {categoriesList.map((category) => {
            const isSelected = selectedCategory === category.name;
            const IconComponent = (Icons as any)[category.iconName] || Icons.HelpCircle;

            return (
              <button
                key={category.name}
                type="button"
                onClick={() => onSelectCategory(category.name)}
                style={getCardStyle(isSelected)}
              >
                <span style={getIconBoxStyle(isSelected)} aria-hidden="true">
                  <IconComponent size={26} strokeWidth={2.4} />
                </span>

                <span style={nameStyle}>
                  {category.name}
                </span>

                <span style={getLabelStyle(isSelected)}>
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