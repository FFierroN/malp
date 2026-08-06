# MALP - app (PWA · mockup navegable)

Frontend de **Manos a la Planta**: Vite + React + TypeScript + Tailwind, PWA
instalable.

> Estado: **mockup navegable con datos ficticios** (sin backend todavia).
> Las 8 pantallas del prototipo estan construidas y conectadas. Supabase se
> enchufa mas adelante (ver ../docs/05-roadmap-fases.md).

## Las 8 pantallas

| Ruta | Pantalla |
|------|----------|
| `/` | Inicio (saludo, puntos, accesos rapidos) |
| `/monstera` | Mi Monstera (arbol de recompensas por puntos) |
| `/plantoteca` | Mi Plantoteca (coleccion, buscador y filtros) |
| `/plantoteca/:id` | Detalle de planta (Actividad / Notas / Cuidados) |
| `/recordatorios` | Recordatorios (Hoy / Manana / En 3 dias) |
| `/identificar` | Identificar con IA (camara) |
| `/identificar/resultado` | Resultado IA (Alocasia Polly, 95%) |
| `/recompensas` | Recompensas (canje de puntos) |
| `/tienda` · `/perfil` | Pantallas de la barra inferior |

## Estructura

```
app/
├── index.html              punto de entrada + fuentes (Fraunces / Nunito)
├── vite.config.ts          config Vite + PWA (base "/malp/" para GitHub Pages)
├── tailwind.config.js      paleta Manos a la Planta (verde/amarillo/crema/negro)
├── scripts/spa-404.mjs     genera 404.html para el routing en GitHub Pages
└── src/
    ├── main.tsx            arranque React + Router
    ├── App.tsx             rutas de las 8 pantallas
    ├── data/mock.ts        TODOS los datos ficticios (Camila, plantas, etc.)
    ├── components/         Layout (marco de celular), BottomNav, ui.tsx
    └── screens/            una pantalla por archivo
```

## Como levantarlo (en tu PC con Node.js LTS)

```bash
cd MALP/app
npm install        # instalar dependencias (una sola vez)
npm run dev        # abre http://localhost:5173/malp/
```

Se ve como un celular centrado en el escritorio. Para probarlo "de verdad":
abri las DevTools del navegador (F12) y activa la vista movil (Toggle device
toolbar), o abrilo desde tu telefono en la misma red.

## Desplegar en GitHub Pages

```bash
npm run deploy:pages   # build + genera 404.html en dist/
```

Luego se publica `dist/` en GitHub Pages (te guio con GitHub Actions o rama
`gh-pages`). La app quedara en `https://TU-USUARIO.github.io/malp/`.

## Notas

- `base` (vite.config.ts) y `basename` (main.tsx) estan en `/malp` para GitHub
  Pages. Con dominio propio, cambiar ambos a `/`.
- Las "fotos" de plantas son posters con gradiente + hoja (placeholder). Cuando
  haya fotos reales se reemplaza el componente `PlantPoster`.
- Faltan iconos PWA `icon-192.png`/`icon-512.png` en `public/` (se agregan al
  cerrar el logo final; no bloquean el dev).
- Datos 100% ficticios en `src/data/mock.ts`. Sin backend, sin PII, $0.
