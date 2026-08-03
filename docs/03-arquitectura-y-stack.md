# 03 - Arquitectura y Stack Tecnológico

## Recordatorio de contexto

- ~100 usuarios (o menos). Escala minúscula, y eso es una ventaja.
- App orientada al cliente, uso mayormente en celular.
- Un solo desarrollador (tú, con ayuda de Kira) manteniéndola.

Con esos números, **cualquier stack moderno sirve de sobra**. La pregunta real
es: ¿qué es lo más simple de construir y mantener?

---

## Recomendación: PWA (Progressive Web App)

Una app web que se ve y se siente como app nativa, se puede "instalar" en la
pantalla de inicio del celular, funciona offline parcialmente y **puede enviar
notificaciones push** — sin pasar por App Store ni Play Store.

**Por qué PWA y no app nativa (iOS/Android):**

| Criterio | PWA | App nativa |
|----------|-----|-----------|
| Costo de desarrollo | Bajo (una sola base de código) | Alto (dos plataformas o framework extra) |
| Publicación | Solo un link | Cuentas de dev + revisiones de tienda |
| Actualizaciones | Instantáneas | Pasan por revisión |
| Notificaciones push | Sí (Android sólido; iOS 16.4+ soportado) | Sí (más fino) |
| Escala 100 usuarios | Perfecto | Sobredimensionado |

Para 100 usuarios y presupuesto acotado, **PWA gana con claridad.**

---

## Stack propuesto

### Opción A - "Todo Python" (recomendada para empezar rápido)

- **Backend + Frontend:** Python + **FastAPI** + **HTMX** + **Tailwind CSS**.
- **Base de datos:** **SQLite** (archivo único, cero servidor, perfecto para 100 usuarios).
- **Autenticación:** sesiones con cookies + contraseñas hasheadas (passlib/bcrypt).
- **PWA:** manifest.json + service worker para "instalar" y cachear.
- **Notificaciones (V2):** Web Push (VAPID) o, más simple, email/WhatsApp programado.

Ventaja: un solo lenguaje, poquísimas piezas, desplegable en un servidor chico.
Ideal si quieres avanzar rápido y sin fricción.

### Opción B - "Frontend moderno" (si quieres UI más rica/animada)

- **Frontend:** React (Next.js) o Vue, con Tailwind.
- **Backend:** FastAPI o el propio Next.js (API routes).
- **Base de datos:** SQLite o PostgreSQL (Supabase gratis cubre 100 usuarios).
- Más potente para animaciones tipo "carta que se ilumina", pero más piezas que mantener.

> **Mi recomendación:** arrancar con la **Opción A**. Es la que menos dolores de
> cabeza da para un proyecto chico y personal. Si más adelante quieres una UI
> muy vistosa, migramos el frontend sin rehacer el backend.

---

## Dónde alojarla (hosting)

Para ~100 usuarios hay opciones gratuitas o casi gratuitas:

- **Servidor propio / VPS chico** (ej. una máquina de $5/mes).
- **Plataformas tipo Railway / Render / Fly.io** (planes free/baratos).
- Como es independiente de Walmart, NO usamos AI Innovation Lab ni infra corporativa.

La base de datos SQLite vive como un archivo junto a la app: hay que asegurar
**backups automáticos** (copiar el archivo .db a un lugar seguro cada día).

---

## Sobre las notificaciones (el tema espinoso)

Tres caminos, de más simple a más completo:

1. **Sin push real (MVP):** la app muestra "Cuidados de hoy" al abrirla.
   El usuario ve qué le toca. Cero infraestructura. **Empezar por aquí.**
2. **Email/WhatsApp programado (V2):** un proceso diario revisa qué cuidados
   vencen y manda un correo o mensaje. Requiere un servicio de email (gratis para
   bajo volumen) o la API de WhatsApp.
3. **Web Push nativo (V2+):** notificaciones al celular aunque la app esté cerrada.
   Requiere claves VAPID y service worker. Muy logrado, algo más de trabajo.

---

## Diagrama mental (texto)

```
[ Celular del cliente ]
        |  (navegador / PWA instalada)
        v
[ Frontend HTMX + Tailwind ]  <-- se ve como app
        |  (peticiones HTTP)
        v
[ FastAPI (Python) ]  <-- lógica: usuarios, plantas, puntos, misiones
        |
        v
[ SQLite (archivo .db) ]  <-- todos los datos
        |
        +--> [ Backups diarios ]
        +--> [ (V2) Servicio de notificaciones ]
```
