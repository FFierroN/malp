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

## Pilar 4 - Tarjeta de fidelidad (misiones y puntos)

- **[MVP]** Cada usuario tiene su tarjeta de fidelidad con saldo de puntos.
- **[MVP]** Lista de misiones disponibles (ej: "compra una planta", "registra 3 plantas",
  "riega 5 veces esta semana", "visita la tienda").
- **[MVP]** Al cumplir una misión, se suman puntos.
- **[MVP]** Catálogo de premios/descuentos y canje de puntos.
- **[MVP]** Historial de puntos ganados y canjeados.
- **[V2]** Niveles de cliente (bronce/plata/oro) según puntos acumulados.
- **[V2]** Misiones con vencimiento / temporada.

### El punto clave a definir: ¿CÓMO se registran los puntos?

Esta es la decisión grande (ver doc 06). Opciones:

1. **Automático dentro de la app** — misiones que la app puede verificar sola
   (ej: "registra 3 plantas", "riega X veces"). Cero fricción.
2. **Manual por la tienda** — el empleado confirma la misión (ej: "vino a la tienda",
   "compró una planta"). Requiere un panel simple o un código.
3. **Código QR / código de compra** — la tienda entrega un código en el ticket;
   el cliente lo escanea/ingresa y se acreditan puntos. Buen balance.
4. **Mixto** — automático para lo digital, QR/código para lo físico. **Recomendado.**

---

## Requerimientos no funcionales

- **Móvil primero**, responsive, accesible.
- **Rápido y barato de operar** (100 usuarios).
- **Datos privados** protegidos (contraseñas hasheadas, backups).
- **Fácil de mantener** por una sola persona.
