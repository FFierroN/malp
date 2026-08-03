import { copyFileSync } from "node:fs";
import { resolve } from "node:path";

// GitHub Pages no sabe de rutas de una SPA (ej. /malp/coleccion).
// Truco estandar: servir index.html tambien como 404.html para que
// cualquier ruta desconocida cargue la app y React Router resuelva.
const dist = resolve(process.cwd(), "dist");
copyFileSync(resolve(dist, "index.html"), resolve(dist, "404.html"));
console.log("[MALP] 404.html generado para GitHub Pages SPA routing.");
