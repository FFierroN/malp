# 05 - Roadmap por fases

La idea: construir en etapas, cada una entrega algo usable. No intentamos hacer
todo de una. "Camina antes de correr."

---

## Fase 0 - Planificación (AHORA)

- [x] Crear repo y estructura de documentación.
- [ ] Que Felipe revise y apruebe el plan.
- [ ] Cerrar las decisiones pendientes (ver doc 06).
- [ ] Definir nombre e identidad visual (colores, logo).

**Entregable:** este conjunto de documentos aprobado.

---

## Fase 1 - Fundaciones (esqueleto técnico)

- [ ] Inicializar proyecto (FastAPI + estructura de carpetas).
- [ ] Configurar SQLite y crear las tablas del doc 04.
- [ ] Registro / login / logout de usuarios.
- [ ] Layout base móvil con Tailwind + PWA manifest (se puede "instalar").

**Entregable:** puedo crear cuenta, entrar y ver una pantalla de inicio vacía.

---

## Fase 2 - Catálogo (la vitrina)

- [ ] Cargar plantas al catálogo (pantalla simple de administración o seed inicial).
- [ ] Lista del catálogo con fotos.
- [ ] Ficha detallada de cada planta.
- [ ] Buscador / filtro básico.

**Entregable:** el cliente ve el catálogo de la tienda.

---

## Fase 3 - Mi colección (Pokédex) - EL CORAZÓN

- [ ] Agregar planta a mi colección desde el catálogo.
- [ ] Crear planta "a mano" (si no está en el catálogo).
- [ ] Vista de colección tipo grilla de cartas.
- [ ] Ficha de mi planta (apodo, foto propia, notas, fecha).
- [ ] Efecto "silueta vs iluminada" para las no capturadas (deleite).

**Entregable:** el cliente colecciona sus plantas. Ya hay enganche real.

---

## Fase 4 - Cuidados y recordatorios

- [ ] Plan de cuidados por planta (heredado del catálogo o personalizado).
- [ ] Registrar cuidados ("regué hoy").
- [ ] Pantalla "Cuidados de hoy" (lista de pendientes calculada).
- [ ] Historial de cuidados por planta.

**Entregable:** el cliente sabe qué cuidar y cuándo. (Push queda para después.)

---

## Fase 5 - Fidelidad (Club de Descuentos Manos a la Planta)

- [ ] Tarjeta de fidelidad con saldo de puntos.
- [ ] Cargar las 6 misiones reales (doc 07) y mostrarlas con sus puntos.
- [ ] El cliente reclama una misión y adjunta prueba (captura/foto/ticket).
- [ ] Panel de la tienda (rol admin): aprobar/rechazar reclamos pendientes.
- [ ] Al aprobar, se acreditan los puntos automaticamente.
- [ ] Catalogo de premios (450/700/1200) y canje con codigo de retiro.
- [ ] Historial de puntos.
- [ ] (V2) Codigo de compra para acreditar compras al instante.

**Entregable:** el circulo de fidelizacion completo funcionando.

---

## Fase 6 - Pulido y lanzamiento

- [ ] Notificaciones (email/WhatsApp o Web Push).
- [ ] Insignias/logros, niveles de cliente.
- [ ] Pruebas con usuarios reales (unos pocos clientes).
- [ ] Backups automáticos de la base de datos.
- [ ] Desplegar en hosting y compartir el link.

**Entregable:** MALP al 100%, en manos de los clientes.

---

## Orden de prioridad (si hay que recortar)

1. Cuentas (Fase 1) - sin esto no hay nada.
2. Pokédex (Fase 3) - es el gancho, lo que hace única la app.
3. Fidelidad (Fase 5) - el objetivo de negocio.
4. Cuidados (Fase 4) - valor agregado fuerte.
5. Catálogo (Fase 2) - importante pero puede empezar pequeño.
6. Pulido (Fase 6) - continuo.
