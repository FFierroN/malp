import { useNavigate } from "react-router-dom";
import { Menu, Bell, Library, ScanLine, BellRing, Star } from "lucide-react";
import { StatusBar, Card, ProgressBar, Hoja } from "@/components/ui";
import { Pantalla } from "@/components/Layout";
import { usuario, puntosFaltantes } from "@/data/mock";

const accesos = [
  { label: "Mi Plantoteca", icon: Library, to: "/plantoteca" },
  { label: "Identificar IA", icon: ScanLine, to: "/identificar" },
  { label: "Recordatorios", icon: BellRing, to: "/recordatorios" },
  { label: "Recompensas", icon: Star, to: "/recompensas" },
];

export default function Inicio() {
  const navigate = useNavigate();
  return (
    <>
      <StatusBar />
      <Pantalla className="pt-2">
        {/* Encabezado */}
        <header className="flex items-center justify-between py-3">
          <button aria-label="Menu" className="text-malp-verde-osc">
            <Menu size={26} />
          </button>
          <div className="flex items-center gap-2 text-malp-verde-osc">
            <Hoja size={26} className="text-malp-verde" />
            <span className="font-titulo text-lg italic">Manos a la Planta</span>
          </div>
          <button aria-label="Notificaciones" className="text-malp-verde-osc">
            <Bell size={24} />
          </button>
        </header>

        {/* Saludo */}
        <h1 className="mt-2 font-titulo text-3xl text-malp-verde-osc">
          Hola, {usuario.nombre}!
        </h1>
        <p className="mt-1 text-sm text-malp-negro/60">
          Gracias por ser parte de nuestra jungla
        </p>

        {/* Tarjeta de puntos */}
        <Card className="mt-5">
          <p className="text-sm font-bold text-malp-negro/50">Tus puntos</p>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="font-titulo text-5xl text-malp-verde-osc">
              {usuario.puntos.toLocaleString("es-CL")}
            </span>
            <span className="text-sm font-bold text-malp-negro/40">
              / {usuario.metaPuntos.toLocaleString("es-CL")} pts
            </span>
          </div>
          <div className="mt-3">
            <ProgressBar valor={usuario.puntos} max={usuario.metaPuntos} />
          </div>
          <p className="mt-2 text-xs text-malp-negro/60">
            Faltan {puntosFaltantes} puntos para tu siguiente recompensa
          </p>
          <button
            onClick={() => navigate("/monstera")}
            className="mt-4 w-full rounded-full bg-malp-verde-osc py-3 text-sm font-bold text-white transition active:scale-[0.98]"
          >
            Ver mi Monstera
          </button>
        </Card>

        {/* Accesos rapidos */}
        <div className="mt-5 grid grid-cols-4 gap-2">
          {accesos.map(({ label, icon: Icon, to }) => (
            <button
              key={label}
              onClick={() => navigate(to)}
              className="flex flex-col items-center gap-2 rounded-2xl bg-white/70 py-3 text-center text-[10px] font-bold text-malp-negro/70 transition active:scale-95"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-malp-crema text-malp-verde-osc">
                <Icon size={20} />
              </span>
              {label}
            </button>
          ))}
        </div>

        {/* Ultima interaccion */}
        <Card className="mt-5 flex items-center gap-4 !p-3">
          <div className="flex h-16 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-700 to-emerald-500">
            <Hoja size={28} className="text-white/85" />
          </div>
          <div>
            <p className="text-xs font-bold text-malp-negro/50">
              Ultima interaccion
            </p>
            <p className="text-sm font-bold text-malp-verde-osc">
              {usuario.ultimaInteraccion.hace}
            </p>
            <p className="text-xs text-malp-negro/60">
              {usuario.ultimaInteraccion.detalle}
            </p>
          </div>
        </Card>
      </Pantalla>
    </>
  );
}
