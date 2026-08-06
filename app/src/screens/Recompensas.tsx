import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { StatusBar, Chip, PlantPoster, Hoja } from "@/components/ui";
import { Pantalla } from "@/components/Layout";
import {
  usuario,
  recompensas,
  type CategoriaRecompensa,
} from "@/data/mock";

const filtros: ("Todas" | CategoriaRecompensa)[] = [
  "Todas",
  "Plantas",
  "Descuentos",
  "Accesorios",
];

export default function Recompensas() {
  const navigate = useNavigate();
  const [filtro, setFiltro] = useState<(typeof filtros)[number]>("Todas");

  const visibles = recompensas.filter(
    (r) => filtro === "Todas" || r.categoria === filtro,
  );

  return (
    <>
      <StatusBar />
      <header className="flex items-center justify-between px-5 py-3">
        <button aria-label="Volver" onClick={() => navigate("/")}>
          <ArrowLeft size={24} className="text-malp-verde-osc" />
        </button>
        <h1 className="font-titulo text-xl text-malp-verde-osc">Recompensas</h1>
        <span className="w-6" />
      </header>

      <Pantalla>
        {/* Saldo de puntos */}
        <div className="flex items-center justify-between rounded-3xl bg-malp-verde-osc px-5 py-4 text-white">
          <span className="text-sm font-bold opacity-80">Tus puntos</span>
          <span className="flex items-center gap-2 font-titulo text-2xl">
            <Hoja size={20} className="text-malp-verde" />
            {usuario.puntos.toLocaleString("es-CL")}
            <span className="text-xs font-bold opacity-70">pts</span>
          </span>
        </div>

        {/* Filtros */}
        <div className="scroll-limpio mt-4 flex gap-2 overflow-x-auto pb-1">
          {filtros.map((f) => (
            <Chip key={f} activo={filtro === f} onClick={() => setFiltro(f)}>
              {f}
            </Chip>
          ))}
        </div>

        {/* Grilla de recompensas */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          {visibles.map((r) => {
            const alcanza = usuario.puntos >= r.puntos;
            return (
              <div
                key={r.id}
                className="overflow-hidden rounded-3xl bg-white shadow-tarjeta"
              >
                <div className="relative">
                  <PlantPoster
                    gradiente="from-emerald-700 to-emerald-500"
                    className="h-28 w-full"
                    size={40}
                  />
                  {r.destacado && (
                    <span className="absolute right-2 top-2 flex h-11 w-11 items-center justify-center rounded-full bg-malp-amarillo text-xs font-extrabold text-malp-negro">
                      {r.destacado}
                    </span>
                  )}
                </div>
                <div className="p-3">
                  <p className="text-sm font-bold text-malp-negro/80">
                    {r.nombre}
                  </p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="flex items-center gap-1 text-sm font-extrabold text-malp-verde-osc">
                      <Hoja size={14} className="text-malp-verde" />
                      {r.puntos.toLocaleString("es-CL")}
                    </span>
                    <button
                      disabled={!alcanza}
                      className={`rounded-full px-3 py-1 text-xs font-bold transition ${
                        alcanza
                          ? "bg-malp-verde-osc text-white active:scale-95"
                          : "bg-malp-crema text-malp-negro/40"
                      }`}
                    >
                      {alcanza ? "Canjear" : "Faltan pts"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Pantalla>
    </>
  );
}
