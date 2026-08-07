import { useNavigate } from "react-router-dom";
import { Menu, Bell, Library, ScanLine, BellRing, Star } from "lucide-react";
import { StatusBar, Card, ProgressBar, Hoja, Logo } from "@/components/ui";
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
      <Pantalla className="pt-2 pb-10">
        {/* Encabezado */}
        <header className="flex items-center justify-between py-4">
          <button aria-label="Menu" className="text-malp-verde-osc">
            <Menu size={26} />
          </button>
          <div className="flex items-center gap-2 text-malp-verde-osc">
            <Logo size={26} conTexto />
          </div>
          <button aria-label="Notificaciones" className="text-malp-verde-osc">
            <Bell size={24} />
          </button>
        </header>

        {/* Saludo */}
        <h1 className="mt-3 font-titulo text-3xl text-malp-verde-osc">
          Hola, {usuario.nombre}!
        </h1>
        <p className="mt-1.5 text-sm text-malp-negro/50">
          Gracias por ser parte de nuestra jungla
        </p>
        <p className="mt-1 text-xs font-semibold text-malp-verde-osc">
          Socia desde {usuario.miembroDesde}
        </p>

        {/* Tarjeta de puntos */}
        <Card className="mt-7">
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
            className="mt-5 w-full rounded-boton bg-malp-verde-osc py-3 text-sm font-semibold text-malp-papel transition duration-300 active:scale-[0.98]"
          >
            Ver mi Monstera
          </button>
        </Card>

        {/* Accesos rapidos */}
        <div className="mt-8 grid grid-cols-4 gap-3">
          {accesos.map(({ label, icon: Icon, to }) => (
            <button
              key={label}
              onClick={() => navigate(to)}
              className="flex flex-col items-center gap-2 rounded-2xl border border-malp-borde bg-malp-papel py-3 text-center text-[10px] font-semibold text-malp-negro/60 transition duration-300 active:scale-95"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-malp-crema text-malp-verde-osc">
                <Icon size={20} />
              </span>
              {label}
            </button>
          ))}
        </div>

        {/* Ultima interaccion */}
        <Card className="mt-6 flex items-center justify-between gap-4 !p-3">
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
          <div className="flex h-16 w-20 shrink-0 items-center justify-center rounded-2xl bg-malp-madera">
            <Hoja size={28} className="text-malp-verde-osc/70" />
          </div>
        </Card>
      </Pantalla>
    </>
  );
}
