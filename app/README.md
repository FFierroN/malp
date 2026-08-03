# MALP - app (PWA)

Frontend de **Manos a la Planta**: Vite + React + TypeScript + Tailwind, PWA
instalable. Backend por **Supabase** (Postgres + Auth + Storage).

> Estado: **esqueleto**. Estructura lista, sin dependencias instaladas todavia.
> Retomar cuando las ideas esten mas definidas (ver ../docs/05-roadmap-fases.md).

## Estructura

```
app/
├── index.html              punto de entrada HTML
├── vite.config.ts          config Vite + PWA (base "/malp/" para GitHub Pages)
├── tailwind.config.js      paleta Manos a la Planta (verde/amarillo/crema/negro)
├── .env.example            plantilla de variables (copiar a .env.local)
├── scripts/spa-404.mjs     genera 404.html para el routing en GitHub Pages
├── public/favicon.svg      icono provisional (hoja)
└── src/
    ├── main.tsx            arranque React + Router + React Query
    ├── App.tsx             rutas y navegacion base
    ├── index.css           Tailwind + estilos base
    ├── lib/supabase.ts     cliente unico de Supabase
    ├── components/         componentes reutilizables (Placeholder)
    └── features/           un pilar por carpeta:
        ├── inicio/         vitrina / bienvenida
        ├── auth/           login y registro
        ├── catalogo/       catalogo de la tienda
        ├── coleccion/      Pokedex del usuario
        ├── cuidados/       cuidados y recordatorios
        ├── fidelidad/      Club de Descuentos (misiones/puntos/premios)
        └── admin/          panel de la tienda (rol admin)
```

## Como levantarlo (cuando retomemos)

Requiere Node.js LTS. Recomendado pnpm (o npm).

```bash
cd MALP/app
pnpm install            # instalar dependencias
cp .env.example .env.local   # y rellenar con datos de Supabase
pnpm dev                # abre http://localhost:5173/malp/
```

## Desplegar en GitHub Pages (cuando este listo)

```bash
pnpm run deploy:pages   # build + genera 404.html
```

Luego se publica la carpeta `dist/` en la rama/config de GitHub Pages.

## Notas

- La `base` en `vite.config.ts` y el `basename` en `main.tsx` estan en `/malp`
  para GitHub Pages. Con dominio propio o Cloudflare Pages, cambiar ambos a `/`.
- Faltan iconos PWA `icon-192.png` e `icon-512.png` en `public/` (se agregan al
  definir el logo final).
- La seguridad de datos vive en las politicas RLS de Supabase (ver ../docs/08).
