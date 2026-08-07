import { Hoja } from "./ui";
import type { HitoPuntos } from "@/data/mock";

// ---------------------------------------------------------------------------
// La Monstera Adansonii como corazon visual de la app: crece hoja por hoja
// a medida que el usuario suma puntos. Estados de cada hoja:
//   - lograda:   ya se alcanzo ese hito -> hoja llena, color verde-osc.
//   - siguiente: el proximo hito a alcanzar -> hoja chica "brotando".
//   - futura:    todavia lejos -> silueta fantasma (opacidad muy baja),
//                asi se ve como va a quedar la planta completa (motivador,
//                calmo, sin ruido visual).
// ---------------------------------------------------------------------------

interface PosicionHoja {
  x: number;
  y: number;
  rotate: number;
  size: number;
}

// Posiciones fijas, de abajo (recien plantada) hacia arriba (planta lograda).
// Alternan de lado para que se vea como una enredadera real, no una lista.
const POSICIONES: PosicionHoja[] = [
  { x: 95, y: 338, rotate: -28, size: 30 },
  { x: 168, y: 316, rotate: 22, size: 32 },
  { x: 84, y: 276, rotate: -34, size: 34 },
  { x: 179, y: 250, rotate: 28, size: 36 },
  { x: 79, y: 206, rotate: -22, size: 38 },
  { x: 183, y: 176, rotate: 24, size: 40 },
  { x: 89, y: 134, rotate: -30, size: 42 },
  { x: 173, y: 98, rotate: 20, size: 44 },
  { x: 130, y: 52, rotate: 0, size: 50 },
];

const COLOR_LOGRADA = "#1F6B3A";
const COLOR_SIGUIENTE = "#8BC34A";
const COLOR_FUTURA = "#2F3A32";

export function MonsteraCrecimiento({
  puntos,
  hitos,
}: {
  puntos: number;
  hitos: HitoPuntos[];
}) {
  // hitos viene de mayor a menor puntaje (para la lista vieja); acá lo
  // queremos ascendente para crecer de abajo hacia arriba.
  const ascendente = [...hitos].sort((a, b) => a.puntos - b.puntos);
  const primerNoLogrado = ascendente.findIndex((h) => puntos < h.puntos);

  return (
    <svg viewBox="0 0 260 400" className="mx-auto w-full max-w-[280px]">
      {/* Sombra suave de la maceta sobre la "mesa" */}
      <ellipse cx="130" cy="392" rx="70" ry="8" fill="#3A362F" opacity="0.08" />

      {/* Tallo: linea organica, siempre visible, punto de partida */}
      <path
        d="M130 360 C 128 300, 132 260, 130 210 C 128 160, 132 120, 130 55"
        fill="none"
        stroke={COLOR_SIGUIENTE}
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.55"
      />

      {/* Hojas: llenas (logradas), brotando (siguiente) o fantasma (futuras) */}
      {ascendente.map((hito, i) => {
        const pos = POSICIONES[i];
        if (!pos) return null;
        const lograda = puntos >= hito.puntos;
        const esSiguiente = i === primerNoLogrado;
        const escala = lograda ? 1 : esSiguiente ? 0.55 : 0.85;
        const opacidad = lograda ? 1 : esSiguiente ? 0.7 : 0.12;
        const color = lograda
          ? COLOR_LOGRADA
          : esSiguiente
            ? COLOR_SIGUIENTE
            : COLOR_FUTURA;
        return (
          <g
            key={hito.puntos}
            transform={`translate(${pos.x} ${pos.y}) rotate(${pos.rotate}) scale(${escala})`}
            className="transition-all duration-500"
            style={{ transformOrigin: "center", opacity: opacidad, color }}
          >
            <g transform={`translate(${-pos.size / 2} ${-pos.size / 2})`}>
              <Hoja size={pos.size} />
            </g>
          </g>
        );
      })}

      {/* Maceta de mimbre/ceramica (tono calido, plano, sin degradado) */}
      <path d="M85 360 L175 360 L165 400 L95 400 Z" fill="#B98D5D" />
      <ellipse cx="130" cy="360" rx="45" ry="9" fill="#A67A4A" />
      <ellipse cx="130" cy="358" rx="38" ry="6" fill="#6b5744" opacity="0.5" />
    </svg>
  );
}
