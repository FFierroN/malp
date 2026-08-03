# 07 - Programa de fidelidad "Manos a la Planta"

> Este documento captura la mecánica REAL de fidelización, tomada de los
> materiales de marketing de la tienda **Manos a la Planta**. Reemplaza las
> suposiciones que había en el doc 02/06.

## La marca

- **Nombre de la tienda:** Manos a la Planta
- **Nombre del club:** "Club de Descuentos Manos a la Planta"
- **Promesa de la app:** *"Ahora podrás organizar tu colección de plantas y
  además acceder al Club de Descuentos Manos a la Planta"*
- **Moneda:** CLP (pesos chilenos)

### Identidad visual (de las piezas gráficas)

- **Verde brillante** (color principal / fondo hero) ~ `#26C165`
- **Amarillo** (fondo sección "consigue puntos") ~ `#F6D74E`
- **Blanco / gris muy claro** (tarjetas y secciones) ~ `#F2F1EC`
- **Negro** para tipografía de titulares
- **Tipografía:** titulares en negrita condensada tipo "poster" (mayúsculas);
  cuerpo en sans-serif redondeada y legible.
- **Logo:** hoja de monstera estilizada en tonos verdes.

---

## Cómo se GANAN puntos (misiones)

| Misión | Puntos | Condición | Verificación |
|--------|-------:|-----------|--------------|
| Etiquétanos en redes | 80 | Subir historia/publicación en Instagram o TikTok mostrando un producto de la tienda | Manual (revisar el posteo) |
| Recomienda a un amig@ | 100 | La primera compra del amigo suma los puntos | Manual (tienda confirma) |
| Compra en la tienda | 120 | Solo compras sobre $7.000 CLP | Código/ticket o manual |
| Deja una reseña | 100 | Reseñar la tienda en Google Maps | Manual (revisar reseña) |
| Participa de un evento | 200 | Válido para bingos o intercambios de esquejes | Manual (confirmar asistencia) |
| Participa de un taller | 200 | Se canjea desde el momento de la inscripción | Manual (confirmar inscripción) |

> **Observación clave:** casi TODAS las misiones son del mundo físico/social y
> requieren que la tienda las verifique. Esto define la arquitectura (ver abajo).

---

## Cómo se CANJEAN puntos (premios)

| Premio | Costo | Detalle |
|--------|------:|---------|
| Fertilizante | 450 pts | Un fertilizante de la tienda, gratis |
| Sustrato | 700 pts | Un sustrato de 5 Lts, gratis |
| Planta | 1200 pts | Una planta de hasta $12.000 CLP, gratis |

---

## Lo que esto IMPLICA para la app (importante)

Como las misiones no se pueden verificar solas, necesitamos un **flujo de
validación**. Propongo este modelo:

### Flujo de puntos propuesto

1. **El cliente "reclama" una misión** desde la app (ej: "Ya dejé mi reseña",
   "Compré hoy", "Fui al taller"). Puede adjuntar una prueba:
   - Captura de pantalla del posteo/reseña.
   - Foto o número del ticket de compra.
2. **La solicitud queda "pendiente de aprobación".**
3. **La tienda valida** desde un panel simple (aprobar / rechazar).
4. Al aprobar, **los puntos se acreditan** automáticamente y quedan en el historial.

### Alternativa más ágil para compras: código en el ticket

Para "Compra en la tienda", en vez de que el cliente suba el ticket, la tienda
puede entregar un **código único** al pagar (>$7.000). El cliente lo ingresa en
la app y los 120 puntos se acreditan al instante, sin aprobación manual.

> **Recomendación:** modelo mixto —
> - **Código** para compras (rápido, sin fricción para la tienda).
> - **Reclamo + prueba + aprobación** para redes, reseñas, referidos, eventos y talleres.

### Consecuencia técnica

Esto significa que MALP necesita **dos "caras"**:

1. **App del cliente** (la principal) — colección, cuidados, misiones, canjes.
2. **Panel de la tienda** (mínimo) — aprobar misiones pendientes, generar códigos
   de compra, marcar canjes como entregados, cargar catálogo.

El panel puede ser súper simple (una sola persona lo usa). No es una app aparte;
es una sección protegida con rol de "administrador".
