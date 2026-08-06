# Fotos de plantas

Deja aca las fotos reales de las plantas. Se muestran solas en la app
(Plantoteca, Detalle y Recordatorios). Mientras no existan, la app muestra
un "poster" con gradiente + hoja como respaldo (no se rompe nada).

## Archivos que la app busca (nombres EXACTOS)

| Archivo | Planta |
|---------|--------|
| `margarita.jpg` | Margarita - Monstera deliciosa |
| `luna.jpg` | Luna - Philodendron hederaceum |
| `selva.jpg` | Selva - Calathea orbifolia |

## Recomendaciones

- Formato `.jpg` o `.webp`, cuadradas (ej. 800x800 px), livianas (< 300 KB).
- Fondo neutro/crema queda mejor con el estilo de la app.
- Si cambias la extension (ej. `.webp`), avisa para actualizar `src/data/mock.ts`.

## Como agregarlas

1. Copia los 3 archivos con esos nombres dentro de esta carpeta.
2. `npm run dev` y las fotos aparecen automaticamente.
