# 04 - Modelo de Datos

Diseño preliminar de las tablas. Pensado para SQLite pero sirve igual para
PostgreSQL. Es un borrador: lo afinamos al construir.

> Convención: `id` autoincremental como clave primaria; `*_id` son llaves foráneas.

---

## Tabla: usuarios

El cliente de la tienda.

| Campo | Tipo | Notas |
|-------|------|-------|
| id | INTEGER PK | |
| nombre | TEXT | |
| email | TEXT | único (o teléfono) |
| password_hash | TEXT | nunca la contraseña en texto plano |
| avatar_url | TEXT | opcional |
| rol | TEXT | 'cliente' (por defecto) o 'admin' (tienda) |
| puntos_actuales | INTEGER | saldo de la tarjeta de fidelidad |
| creado_en | DATETIME | |

---

## Tabla: catalogo_plantas

Las plantas que ofrece la tienda (la "vitrina"). Compartida entre todos.

| Campo | Tipo | Notas |
|-------|------|-------|
| id | INTEGER PK | |
| nombre_comun | TEXT | ej. "Potos" |
| nombre_cientifico | TEXT | ej. "Epipremnum aureum" |
| descripcion | TEXT | |
| tipo | TEXT | interior / exterior / suculenta / etc. |
| dificultad | TEXT | fácil / media / difícil |
| foto_url | TEXT | |
| precio | REAL | opcional |
| cuidado_riego_dias | INTEGER | plantilla de cuidado por defecto |
| cuidado_luz | TEXT | ej. "luz indirecta" |
| creado_en | DATETIME | |

---

## Tabla: mis_plantas (la Pokédex del usuario)

Instancia personal de una planta que el usuario posee.

| Campo | Tipo | Notas |
|-------|------|-------|
| id | INTEGER PK | |
| usuario_id | INTEGER FK -> usuarios | |
| catalogo_id | INTEGER FK -> catalogo_plantas | puede ser NULL si es planta "a mano" |
| apodo | TEXT | ej. "Pancho el potos" |
| foto_propia_url | TEXT | foto que sube el usuario |
| fecha_adquisicion | DATE | |
| estado_salud | TEXT | sana / enferma / recuperación |
| notas | TEXT | |
| creado_en | DATETIME | |

---

## Tabla: cuidados_historial

Registro de cada acción de cuidado sobre una planta del usuario.

| Campo | Tipo | Notas |
|-------|------|-------|
| id | INTEGER PK | |
| mi_planta_id | INTEGER FK -> mis_plantas | |
| tipo_cuidado | TEXT | riego / abono / poda / trasplante |
| fecha | DATETIME | cuándo se hizo |
| nota | TEXT | opcional |

> Los "próximos cuidados" se calculan: última fecha de riego + `cuidado_riego_dias`.

---

## Tabla: misiones

Las misiones disponibles para ganar puntos.

| Campo | Tipo | Notas |
|-------|------|-------|
| id | INTEGER PK | |
| titulo | TEXT | ej. "Compra en la tienda" |
| descripcion | TEXT | ej. "Solo compras sobre $7.000 CLP" |
| puntos | INTEGER | recompensa (80/100/120/200 según doc 07) |
| tipo_verificacion | TEXT | manual (con prueba) / codigo |
| repetible | BOOLEAN | ¿se puede cumplir más de una vez? (compra=sí, etc.) |
| activa | BOOLEAN | |

> Las 6 misiones reales (redes 80, referido 100, compra 120, reseña 100,
> evento 200, taller 200) se cargan como datos iniciales. Ver doc 07.

---

## Tabla: reclamos_mision

Cuando el cliente dice "ya cumplí esta misión" y la tienda debe validar.

| Campo | Tipo | Notas |
|-------|------|-------|
| id | INTEGER PK | |
| usuario_id | INTEGER FK -> usuarios | |
| mision_id | INTEGER FK -> misiones | |
| prueba_url | TEXT | captura/foto/ticket que sube el cliente |
| estado | TEXT | pendiente / aprobado / rechazado |
| revisado_por | INTEGER FK -> usuarios | el admin que resolvió |
| creado_en | DATETIME | |
| resuelto_en | DATETIME | |

---

## Tabla: misiones_usuario

Progreso de cada usuario en cada misión.

| Campo | Tipo | Notas |
|-------|------|-------|
| id | INTEGER PK | |
| usuario_id | INTEGER FK -> usuarios | |
| mision_id | INTEGER FK -> misiones | |
| progreso | INTEGER | ej. 2 de 3 |
| completada | BOOLEAN | |
| completada_en | DATETIME | |

---

## Tabla: puntos_historial

Auditoría de todo movimiento de puntos (ganados y gastados).

| Campo | Tipo | Notas |
|-------|------|-------|
| id | INTEGER PK | |
| usuario_id | INTEGER FK -> usuarios | |
| tipo | TEXT | gano / canje |
| puntos | INTEGER | positivo o negativo |
| motivo | TEXT | ej. "Misión: Registra 3 plantas" |
| fecha | DATETIME | |

---

## Tabla: premios

Catálogo de premios/descuentos canjeables.

| Campo | Tipo | Notas |
|-------|------|-------|
| id | INTEGER PK | |
| nombre | TEXT | ej. "10% de descuento" |
| descripcion | TEXT | |
| costo_puntos | INTEGER | |
| stock | INTEGER | opcional |
| activo | BOOLEAN | |

---

## Tabla: canjes

Cuando un usuario canjea un premio.

| Campo | Tipo | Notas |
|-------|------|-------|
| id | INTEGER PK | |
| usuario_id | INTEGER FK -> usuarios | |
| premio_id | INTEGER FK -> premios | |
| codigo_canje | TEXT | para mostrar en la tienda |
| usado | BOOLEAN | la tienda lo marca al aplicarlo |
| fecha | DATETIME | |

---

## Relaciones (resumen)

```
usuarios 1---N mis_plantas N---1 catalogo_plantas
mis_plantas 1---N cuidados_historial
usuarios 1---N reclamos_mision N---1 misiones
usuarios 1---N misiones_usuario N---1 misiones
usuarios 1---N puntos_historial
usuarios 1---N canjes N---1 premios
```
