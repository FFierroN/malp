/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta "papel reciclado + madera clara + ceramica" (2026-08-07).
        // Inspirada en Apple Health / Notion / Gentler Streak: calma, plana,
        // sin degradados llamativos ni colores saturados. Se mantienen los
        // nombres de tokens usados en las pantallas para no reescribir todo.
        malp: {
          verde: "#8FA888", // accent suave (progreso, activos, iconos)
          "verde-osc": "#3E5C46", // primary apagado (titulos, botones)
          "verde-hoja": "#4F6B52",
          amarillo: "#C97F5C", // terracota (antes lima, se reusa el token)
          lima: "#C97F5C",
          madera: "#E4D9C8", // madera clara (placeholder de fotos)
          "madera-osc": "#C9B79C",
          crema: "#F7F4EE", // fondo general (papel)
          papel: "#FBFAF6", // superficie de tarjetas (mas clara que el fondo)
          negro: "#3A362F", // texto principal (marron calido, no negro puro)
          borde: "#E6E1D6", // bordes/lineas sutiles
        },
      },
      fontFamily: {
        titulo: ["'Poppins'", "system-ui", "sans-serif"],
        cuerpo: ["'Inter'", "system-ui", "sans-serif"],
        logo: ["'Caveat'", "cursive"],
      },
      borderRadius: {
        // esquinas muy redondeadas, estilo tarjeta de papel grueso.
        tarjeta: "28px",
        boton: "22px",
        imagen: "24px",
      },
      boxShadow: {
        // sombras neutras y difusas (nada de tinte verde saturado).
        tarjeta: "0 12px 28px -16px rgba(58, 54, 47, 0.16)",
        suave: "0 4px 14px -6px rgba(58, 54, 47, 0.12)",
        celu: "0 30px 60px -20px rgba(58, 54, 47, 0.30)",
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
