# 02 - Requerimientos por pilar

Aquí desglosamos QUÉ tiene que hacer la app. Marcado con prioridad:
- **[MVP]** imprescindible para la primera versión usable.
- **[V2]** deseable, se agrega después.

---

## Pilar 0 - Cuentas y sesión

- **[MVP]** Registro de usuario (nombre, email o teléfono, contraseña).
- **[MVP]** Inicio y cierre de sesión.
- **[MVP]** Perfil básico (nombre, foto/avatar opcional).
- **[V2]** Recuperar contraseña.
- **[V2]** Login con Google (simplifica mucho, pero suma dependencia).

---

## Pilar 1 - Vitrina de la tienda (catálogo)

Muestra general de lo que ofrece la tienda; igual para todos los usuarios.

- **[MVP]** Lista de plantas del catálogo con foto, nombre común y nombre científico.
- **[MVP]** Ficha de cada planta: descripción, cuidados básicos, dificultad, precio (opcional).
- **[MVP]** Buscador / filtro simple (por nombre, por tipo: interior/exterior, suculenta, etc.).
- **[V2]** Etiquetas: "apta para principiantes", "pet-friendly", "purifica el aire".
- **[V2]** Destacados / novedades de la tienda.

> El catálogo lo carga la tienda. Sirve de "fuente" para que el usuario
> agregue plantas a su colección con un clic.

---

## Pilar 2 - Mi colección (Pokédex)

El corazón emocional. Registro personal y único por usuario.

- **[MVP]** Agregar una planta a "mi colección" (desde el catálogo o creada a mano).
- **[MVP]** Cada planta en mi colección tiene: apodo, fecha de adquisición, foto propia, notas.
- **[MVP]** Ver mi colección tipo grilla de "cartas" (el look Pokédex).
- **[MVP]** Ficha detallada de mi planta (estado, historial, cuidados).
- **[V2]** Insignias/logros por coleccionar ("primera suculenta", "10 plantas", etc.).
- **[V2]** Marcar estado de salud (sana, enferma, en recuperación).
- **[V2]** Contador de "días conmigo" / edad de la planta.

> Idea de deleite: cada planta del catálogo capturada "se ilumina" en la Pokédex,
> y las no capturadas se ven en silueta. Muy adictivo.

---

## Pilar 3 - Cuidados y recordatorios

- **[MVP]** Cada planta tiene un plan de cuidados (riego cada X días, luz, abono).
- **[MVP]** Historial de cuidados: registrar "regué hoy", "aboné hoy".
- **[MVP]** Ver próximos cuidados pendientes (lista tipo "hoy toca regar a...").
- **[V2]** Notificaciones push / recordatorios automáticos.
- **[V2]** Recordatorios por email o WhatsApp (si no queremos depender de push).
- **[V2]** Consejos estacionales ("en invierno riega menos").

> Nota técnica importante sobre notificaciones: ver doc 03. Las push reales
> requieren decisiones (PWA vs app nativa vs email). Para el MVP alcanza con
> una lista visible de "pendientes de hoy".

---

## Pilar 4 - Tarjeta de fidelidad (Club de Descuentos)

> La mecánica REAL (misiones, puntos y premios de "Manos a la Planta") está en
> el doc `07-programa-fidelidad.md`. Aquí solo el requerimiento funcional.

- **[MVP]** Cada usuario tiene su tarjeta de fidelidad digital con saldo de puntos.
- **[MVP]** Lista de las 6 misiones reales con sus puntos (redes, referido, compra,
  reseña, evento, taller).
- **[MVP]** El cliente puede "reclamar" una misión y adjuntar prueba (captura/foto/ticket).
- **[MVP]** Panel de la tienda para **aprobar/rechazar** reclamos pendientes.
- **[MVP]** Al aprobar, se acreditan los puntos y quedan en el historial.
- **[MVP]** Catálogo de premios (fertilizante 450 / sustrato 700 / planta 1200) y canje.
- **[MVP]** Al canjear, se genera un código para mostrar/entregar en la tienda.
- **[MVP]** Historial de puntos ganados y canjeados.
- **[V2]** Código único en el ticket para acreditar compras al instante (sin aprobación).
- **[V2]** Niveles de cliente (bronce/plata/oro) según puntos acumulados.
- **[V2]** Misiones con vencimiento / temporada.

### ¿CÓMO se registran los puntos? (RESUELTO por las piezas de marketing)

Como casi todas las misiones son del mundo físico/social, el modelo es
**mixto con verificación** (detalle completo en doc 07):

- **Reclamo + prueba + aprobación de la tienda** para redes, reseñas, referidos,
  eventos y talleres.
- **Código de compra** (V2) para acreditar compras >$7.000 CLP al instante.

Esto implica que la app necesita un **rol de administrador** (panel de la tienda).

---

## Requerimientos no funcionales

- **Móvil primero**, responsive, accesible.
- **Rápido y barato de operar** (100 usuarios).
- **Datos privados** protegidos (contraseñas hasheadas, backups).
- **Fácil de mantener** por una sola persona.
