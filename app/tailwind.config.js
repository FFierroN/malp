/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta oficial "Manos a la Planta" (ver docs/07-programa-fidelidad.md)
        malp: {
          verde: "#26C165",
          amarillo: "#F6D74E",
          crema: "#F2F1EC",
          negro: "#111111",
        },
      },
      fontFamily: {
        // Titulares tipo poster; cuerpo sans redondeado. Ajustar al elegir fuentes.
        titulo: ["'Archivo Black'", "system-ui", "sans-serif"],
        cuerpo: ["'Nunito'", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
