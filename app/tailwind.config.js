/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta "verde bosque + lima + crema" (2026-08-08), siguiendo los
        // mockups reales de Felipe (nav inferior verde solido, hitos dorados,
        // tarjetas blancas sobre fondo crema).
        malp: {
          verde: "#8BC34A", // lima/accent (iconos chicos, progreso)
          "verde-osc": "#1F6B3A", // primary (nav, botones, titulos)
          "verde-hoja": "#2E7D4F",
          amarillo: "#D9A441", // dorado (hitos logrados, destacados)
          lima: "#9ACD32",
          madera: "#E8DFCE", // placeholder de foto cuando no hay imagen
          "madera-osc": "#C9B79C",
          crema: "#F8F7F2", // fondo general
          papel: "#FFFFFF", // superficie de tarjetas
          negro: "#2F3A32", // texto principal
          borde: "#E6E4DD", // bordes/lineas sutiles
        },
      },
      fontFamily: {
        titulo: ["'Poppins'", "system-ui", "sans-serif"],
        cuerpo: ["'Inter'", "system-ui", "sans-serif"],
        logo: ["'Caveat'", "cursive"],
      },
      borderRadius: {
        tarjeta: "24px",
        boton: "999px",
        imagen: "20px",
      },
      boxShadow: {
        tarjeta: "0 10px 24px -14px rgba(31, 107, 58, 0.18)",
        suave: "0 4px 14px -6px rgba(47, 58, 50, 0.10)",
        celu: "0 30px 60px -20px rgba(47, 58, 50, 0.32)",
      },
      transitionDuration: {
        DEFAULT: "300ms",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
