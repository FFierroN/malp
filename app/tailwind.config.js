/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta oficial "Manos a la Planta" (ver docs/07-programa-fidelidad.md)
        malp: {
          verde: "#26C165",
          "verde-osc": "#1B4D3E",
          "verde-hoja": "#2E5D3B",
          amarillo: "#F6D74E",
          crema: "#F2F1EC",
          negro: "#111111",
        },
      },
      fontFamily: {
        // Titulares serif elegante; cuerpo sans redondeado.
        titulo: ["'Fraunces'", "Georgia", "serif"],
        cuerpo: ["'Nunito'", "system-ui", "sans-serif"],
      },
      boxShadow: {
        tarjeta: "0 8px 24px -12px rgba(27, 77, 62, 0.25)",
        celu: "0 30px 60px -20px rgba(17, 17, 17, 0.35)",
      },
    },
  },
  plugins: [],
};
