#  MALP

App de la tienda de plantas **"Manos a la Planta"** (Chile). Nombre clave interno:
MALP. Cada cliente tiene su propia "Pokédex de plantas", recordatorios de cuidado
y acceso al **"Club de Descuentos Manos a la Planta"**: misiones, puntos y premios.

> Proyecto **100% independiente de Walmart**. No usa data gobernada, ni tablas
> internas, ni BigQuery, ni credenciales corporativas. Datos propios y punto.

---

##  En una frase

> "Convertir la compra de una planta en una relación de largo plazo: el cliente
> colecciona sus plantas, aprende a cuidarlas y gana premios por volver."

##  Escala esperada

- ~100 usuarios en promedio (probablemente menos).
- Esto es **clave**: no necesitamos infraestructura pesada ni bases de datos
  distribuidas. Con herramientas simples sobra y sobra.

##  Pilares del producto

1. **Vitrina de la tienda** — muestra general del catálogo de plantas.
2. **Mi colección (Pokédex)** — registro personal de plantas por usuario.
3. **Cuidados y recordatorios** — historial + notificaciones de riego, luz, etc.
4. **Tarjeta de fidelidad** — misiones → puntos → premios / descuentos.

##  Cómo está organizado este repo

| Documento | Qué contiene |
|-----------|--------------|
| [`docs/01-vision-y-alcance.md`](docs/01-vision-y-alcance.md) | Qué es y qué NO es MALP |
| [`docs/02-requerimientos.md`](docs/02-requerimientos.md) | Funcionalidades detalladas por pilar |
| [`docs/03-arquitectura-y-stack.md`](docs/03-arquitectura-y-stack.md) | Qué tecnología usar y por qué |
| [`docs/04-modelo-de-datos.md`](docs/04-modelo-de-datos.md) | Tablas y relaciones |
| [`docs/05-roadmap-fases.md`](docs/05-roadmap-fases.md) | Cómo construirlo por etapas |
| [`docs/06-decisiones-pendientes.md`](docs/06-decisiones-pendientes.md) | Lo que falta que definas |
| [`docs/07-programa-fidelidad.md`](docs/07-programa-fidelidad.md) | Marca, misiones y premios REALES (Manos a la Planta) |
| [`docs/08-stack-tecnico-detallado.md`](docs/08-stack-tecnico-detallado.md) | **Stack definitivo**: Vite+React+Supabase+Cloudflare, cuentas y costos |

##  Estado actual

**Fase 1 en pausa (esqueleto listo).** La documentación está completa y el
esqueleto de la PWA vive en [`app/`](app/) (Vite + React + TypeScript + Tailwind
+ Supabase). Falta `pnpm install`, conectar Supabase y construir los pilares.
Se retoma cuando las ideas estén más definidas. Ver [`app/README.md`](app/README.md).
