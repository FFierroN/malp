/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta oficial (spec JSON de Benja): botanica premium/minimal.
        // Se mantienen los nombres de tokens y se remapean los valores.
        malp: {
          verde: "#7EA85B", // accent (hoja, progreso, activos)
          "verde-osc": "#1F6B3A", // primary (titulos, botones, enfasis)
          "verde-hoja": "#2E5D3B",
          amarillo: "#9ACD32", // secondary lima (highlights/badges)
          lima: "#9ACD32",
          crema: "#F8F7F2", // background
          negro: "#2F3A32", // text
          borde: "#E6E4DD", // border
        },
      },
      fontFamily: {
        // heading Poppins SemiBold, body Inter, logo manuscrito (Caveat).
        titulo: ["'Poppins'", "system-ui", "sans-serif"],
        cuerpo: ["'Inter'", "system-ui", "sans-serif"],
        logo: ["'Caveat'", "cursive"],
      },
      borderRadius: {
        // radios del spec (card 22, button 18, image 20).
        tarjeta: "22px",
        boton: "18px",
        imagen: "20px",
      },
      boxShadow: {
        tarjeta: "0 8px 24px -12px rgba(31, 107, 58, 0.20)",
        celu: "0 30px 60px -20px rgba(47, 58, 50, 0.35)",
      },
    },
  },
  plugins: [],
};
