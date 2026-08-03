# 08 - Stack técnico detallado (front, back, host, DB)

Este documento responde: **con qué construimos MALP, dónde vive y qué cuentas
necesitamos.** Es el más importante antes de tocar código.

> TL;DR de la recomendación: **Vite + React + Tailwind (PWA)** en el front,
> **Supabase** como "backend todo-en-uno" (base de datos + auth + storage +
> lógica sensible), hospedado en **Cloudflare Pages**. Costo real a 100 usuarios:
> **$0/mes** (solo pagas el dominio, ~$10-15 USD/año).

---

## 0. La pregunta clave: ¿necesitamos un "backend" propio?

Casi no. Hay dos formas de construir esto:

### Camino A - BaaS (Backend as a Service) - RECOMENDADO
El frontend habla **directo** con Supabase usando su librería oficial. Supabase
te da base de datos, login, almacenamiento de imágenes y seguridad. Las poquísimas
operaciones delicadas (acreditar puntos, canjear premios) se hacen con **funciones
que corren en Supabase** (Edge Functions o funciones SQL protegidas), no en un
servidor que tengas que mantener.

- **Ventaja:** construyes ~70% menos código. Nada de servidor que cuidar.
- **Ideal para:** un solo desarrollador, 100 usuarios, presupuesto $0.

### Camino B - Backend propio
Tú escribes una API (Node con Hono/Fastify, o Python con FastAPI) que se sienta
entre el front y la base de datos.

- **Ventaja:** control total de la lógica.
- **Desventaja:** más código, más cosas que desplegar y mantener. **Sobredimensionado**
  para este proyecto.

> **Decisión recomendada:** Camino A. Si algún día la lógica se vuelve muy compleja,
> se agrega un backend sin rehacer nada del front (Postgres es portable).

---

## 1. Frontend

### Framework de build: Vite  (sí, tu instinto es correcto)
Vite es la herramienta de build. Rápido, moderno, estándar de la industria hoy.

### Librería de UI: React + TypeScript
- **React**: la mayor comunidad y la mejor cantidad de ejemplos con Supabase.
- **TypeScript**: atrapa errores antes de que exploten. Muy recomendable.
- *Alternativas válidas:* Vue (más simple de leer) o Svelte/SvelteKit (más liviano).
  Si prefieres una de estas, avísame. React es mi default por ecosistema.

### Estilos: Tailwind CSS
Encaja perfecto con la estética "poster" de Manos a la Planta (verde/amarillo/negro).
Opcional: **shadcn/ui** para componentes ya armados (botones, modales, tarjetas).

### Datos: TanStack Query + cliente de Supabase
TanStack Query maneja el cacheo/refresco de datos del servidor. Menos código,
menos bugs.

### PWA: vite-plugin-pwa
Convierte la web en "app instalable" en el celular (ícono en pantalla de inicio,
funciona parcialmente offline, base para notificaciones push). Un plugin y listo.

---

## 2. Backend / Base de datos: Supabase

Supabase es "Firebase pero con PostgreSQL". Nos da CUATRO cosas en una:

| Pieza | Qué resuelve en MALP |
|-------|----------------------|
| **PostgreSQL** | Todas las tablas del doc 04 (usuarios, plantas, puntos...) |
| **Auth** | Registro/login con email+contraseña (y Google después, gratis) |
| **Storage** | Fotos de plantas y pruebas de misiones (capturas, tickets) |
| **Edge Functions** | La lógica sensible que NO puede correr en el celular del cliente |

### Seguridad: Row Level Security (RLS) - CLAVE
Como el front habla directo con la base de datos, necesitamos reglas de "quién ve
y toca qué". RLS son políticas en Postgres tipo:
- "Un cliente solo ve/edita SUS plantas y SUS puntos."
- "Solo un usuario con rol `admin` puede aprobar reclamos."
- "Nadie puede sumarse puntos a sí mismo escribiendo en la tabla directamente."

### Las operaciones sensibles (lo único parecido a "backend")
Estas NO se pueden dejar en manos del cliente, porque haría trampa. Se implementan
como **funciones SQL protegidas (RPC)** o **Edge Functions**:

1. **Aprobar un reclamo de misión** → acreditar los puntos correspondientes.
2. **Canjear un premio** → descontar puntos y generar el código de retiro.
3. (V2) **Validar un código de compra** → acreditar 120 puntos.

Son 3-4 funciones cortas. Ese es todo tu "backend".

### ¿Por qué Supabase y no otra cosa?
- Nivel gratuito holgado: 500 MB de base, 1 GB de storage, 50.000 usuarios activos/mes.
  Para 100 usuarios estás a años luz de rozar el límite.
- Es Postgres de verdad: si algún día migras, tus datos son 100% portables.
- Auth y Storage incluidos = no reinventamos la rueda.

---

## 3. Hosting del frontend: Cloudflare Pages

Cloudflare Pages hospeda la app (que es HTML/JS/CSS estático generado por Vite).

- **Gratis** para este uso, con CDN global (carga rápido desde cualquier lado).
- **Auto-deploy desde GitHub:** haces `git push` y se publica solo.
- Dominio propio y HTTPS automático.
- *Alternativas equivalentes:* Vercel o Netlify. Cloudflare es excelente y generoso.

### ¿Y Cloudflare para más cosas?
- **Cloudflare R2** (storage de archivos): alternativa a Supabase Storage. Para
  no fragmentar, sugiero usar **Supabase Storage** (ya viene con auth integrada).
  R2 tiene sentido si el volumen de imágenes creciera mucho (no es tu caso).
- **Cloudflare Workers** (funciones serverless): solo si eligiéramos el Camino B
  (backend propio). Con Supabase no hace falta.
- **Cloudflare Web Analytics:** métricas de visitas, gratis y respetuoso de privacidad.

---

## 4. Dominio

### Primera instancia (elegido): subdominio GRATIS

Para arrancar NO compramos dominio. Usamos un subdominio gratuito:
- **Cloudflare Pages** -> `malp.pages.dev` (recomendado: maneja limpio las rutas
  internas de una SPA hecha con Vite/React).
- **GitHub Pages** -> `felipe.github.io/malp` (alternativa; requiere un pequeño
  truco de configuracion para las rutas de la SPA).

Esto deja el costo del proyecto en **$0 real** durante toda la etapa inicial.

### Migrar a dominio propio (cuando se quiera)

El dia que Felipe quiera `manosalaplanta.cl` (o .app/.com), se compra el dominio
y se "apunta" a la app en minutos, **sin tocar codigo ni perder nada**. El
subdominio gratis no ata a nada; es solo la etiqueta de la puerta.

- Los `.cl` se registran via NIC Chile (~$10 USD/año). Otros TLD via Cloudflare
  Registrar (a precio de costo).

---

## 5. Notificaciones (por fases)

1. **MVP - dentro de la app:** pantalla "Cuidados de hoy". Cero infraestructura.
2. **V2 - email:** recordatorios por correo. Supabase manda emails de auth; para
   correos propios se integra **Resend** (gratis hasta 3.000/mes).
3. **V2 - Web Push:** notificación al celular con la PWA cerrada. Se implementa con
   una Edge Function + **pg_cron** (tareas programadas en Supabase) que revisa a
   diario qué cuidados vencen y dispara los avisos.
4. **Futuro - WhatsApp:** el más "nativo" para el cliente, pero su API tiene costo
   y configuración. Para más adelante.

---

## 6. Lista de compras (cuentas y herramientas)

Todo lo que hay que crear/instalar para arrancar:

### Cuentas (todas con plan gratuito)
- [ ] Cuenta de **GitHub** (repositorio del código).
- [ ] Cuenta de **Supabase** (base de datos + auth + storage).
- [ ] Cuenta de **Cloudflare** (hosting + dominio + analytics).
- [ ] (V2) Cuenta de **Resend** (emails) — cuando lleguemos a notificaciones.

### Herramientas en tu máquina
- [ ] **Node.js LTS** + **pnpm** (gestor de paquetes).
- [ ] **Git** (control de versiones).
- [ ] Editor (ya usas Code Puppy / VS Code).
- [ ] **Supabase CLI** (para manejar migraciones de la base localmente).

### Decisiones para el diseño/marca
- [ ] Comprar el dominio.
- [ ] Definir tokens de color exactos (verde/amarillo/negro) y la fuente titular.
- [ ] Tener el logo en formato vectorial (SVG) si es posible.

---

## 7. Costos (realista, a 100 usuarios)

| Concepto | Costo |
|----------|-------|
| Supabase (free tier) | $0/mes |
| Cloudflare Pages (free tier) | $0/mes |
| GitHub (repos) | $0/mes |
| Dominio | subdominio gratis (.pages.dev / .github.io) al inicio | $0/mes |
| **Total** | **$0/mes** (dominio propio opcional más adelante) |

---

## 8. Arquitectura final (diagrama mental)

```
                 [ Celular del cliente ]
                          |
             PWA (Vite + React + Tailwind)
                          |
        +-----------------+------------------+
        |                                    |
  (lectura/escritura                 (operaciones sensibles:
   normal con RLS)                    aprobar reclamo, canjear)
        |                                    |
        v                                    v
   Supabase Postgres  <----- protegido -----  Edge Functions / RPC
        |                                    (rol admin, sumar puntos)
        +--> Supabase Auth (login)
        +--> Supabase Storage (fotos, pruebas)
        +--> pg_cron (V2: recordatorios)

  Hosting del front: Cloudflare Pages (auto-deploy desde GitHub)
```

---

## 9. Resumen de decisiones (TODAS CERRADAS)

1. **Librería de UI:** React. [DECIDIDO]
2. **Backend:** Supabase (BaaS). [DECIDIDO]
3. **Storage de imágenes:** Supabase Storage. [DECIDIDO]
4. **Lenguaje:** TypeScript. [DECIDIDO]
5. **Dominio/host:** GitHub como primera instancia (repo + GitHub Pages,
   `felipe.github.io/malp`). Dominio propio queda para más adelante. [DECIDIDO]

Stack final: **Vite + React + TypeScript + Tailwind (PWA)** · **Supabase**
(Postgres + Auth + Storage) · **GitHub Pages** (hosting inicial, $0).

> Nota de despliegue en GitHub Pages: una SPA con rutas internas necesita el
> "truco 404.html" (copiar index.html a 404.html) para que al recargar una ruta
> no dé 404. Está documentado en `app/README.md`. Se resuelve al desplegar, no ahora.
