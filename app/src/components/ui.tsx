import type { ReactNode } from "react";
import { Signal, Wifi, BatteryFull } from "lucide-react";

// --- Barra de estado del "celular" (9:41, señal, wifi, bateria) ----------
export function StatusBar({ oscura = false }: { oscura?: boolean }) {
  const color = oscura ? "text-white" : "text-malp-negro";
  return (
    <div
      className={`flex items-center justify-between px-6 pt-3 text-xs font-bold ${color}`}
    >
      <span>9:41</span>
      <div className="flex items-center gap-1.5">
        <Signal size={14} strokeWidth={2.5} />
        <Wifi size={14} strokeWidth={2.5} />
        <BatteryFull size={16} strokeWidth={2.5} />
      </div>
    </div>
  );
}

// --- Tarjeta blanca reutilizable -----------------------------------------
export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-3xl bg-white p-4 shadow-tarjeta ${className}`}>
      {children}
    </div>
  );
}

// --- Chip / pastilla (filtros y atributos) -------------------------------
export function Chip({
  children,
  activo = false,
  onClick,
}: {
  children: ReactNode;
  activo?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-bold transition ${
        activo
          ? "bg-malp-verde-osc text-white"
          : "bg-white text-malp-negro/70 ring-1 ring-black/5"
      }`}
    >
      {children}
    </button>
  );
}

// --- Barra de progreso de puntos -----------------------------------------
export function ProgressBar({ valor, max }: { valor: number; max: number }) {
  const pct = Math.min(100, Math.round((valor / max) * 100));
  return (
    <div className="h-2.5 w-full overflow-hidden rounded-full bg-malp-crema">
      <div
        className="h-full rounded-full bg-gradient-to-r from-malp-verde-osc to-malp-verde"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

// --- "Poster" de planta (placeholder visual con gradiente + hoja) --------
export function PlantPoster({
  gradiente,
  className = "",
  size = 40,
}: {
  gradiente: string;
  className?: string;
  size?: number;
}) {
  return (
    <div
      className={`flex items-center justify-center bg-gradient-to-br ${gradiente} ${className}`}
    >
      <Hoja size={size} className="text-white/85" />
    </div>
  );
}

// --- Icono de hoja monstera (marca) --------------------------------------
export function Hoja({
  size = 24,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2c5.5 0 9 3.6 9 9 0 5.6-4.2 11-9 11-.5 0-.9-.4-.9-.9 0-2.2-.3-3.9-1-5.2-.4.5-.9.9-1.5.9-.5 0-.9-.4-.9-.9 0-1.3-.2-2.3-.6-3.1-.4.4-.8.7-1.4.7-.5 0-.9-.4-.9-.9C3.4 8 6.4 2 12 2Zm0 2C8 4 5.6 8.2 5.4 12.1c.4-.2.9-.3 1.4-.3.5 0 .9.4.9.9 0 .3 0 .6.1.9.5-.3 1-.4 1.6-.4.5 0 .9.4.9.9 0 .8.1 1.6.3 2.3.7-.4 1.5-.6 2.4-.6.5 0 .9.4.9.9v.2c2.6-1 4.6-4.5 4.6-7.6 0-4.2-2.4-7.2-6.5-7.2Z" />
    </svg>
  );
}
