import { useNavigate } from "react-router-dom";
import { ArrowLeft, Info, Check } from "lucide-react";
import { StatusBar, Hoja } from "@/components/ui";
import { usuario, hitosPuntos } from "@/data/mock";

export default function MiMonstera() {
  const navigate = useNavigate();

  return (
    <>
      <StatusBar />
      <header className="flex items-center justify-between px-5 py-3">
        <button aria-label="Volver" onClick={() => navigate(-1)}>
          <ArrowLeft size={24} className="text-malp-verde-osc" />
        </button>
        <h1 className="font-titulo text-xl text-malp-verde-osc">Mi Monstera</h1>
        <button aria-label="Info">
          <Info size={22} className="text-malp-verde-osc" />
        </button>
      </header>

      <p className="px-8 text-center text-sm text-malp-negro/60">
        Tu planta crece con cada interaccion
      </p>

      {/* Enredadera de hitos: de la meta (arriba) al inicio (abajo) */}
      <div className="relative mt-6 px-5 pb-4">
        <ul className="space-y-1">
          {hitosPuntos.map((hito) => {
            const logrado = usuario.puntos >= hito.puntos;
            const esActual =
              hito.puntos > usuario.puntos &&
              hito.puntos - usuario.puntos <= 250;
            return (
              <li key={hito.puntos} className="flex items-center gap-4">
                {/* Nodo con la hoja */}
                <div className="relative flex w-10 shrink-0 justify-center">
                  <span
                    className={`z-10 flex h-9 w-9 items-center justify-center rounded-full ring-4 ring-malp-crema ${
                      logrado
                        ? "bg-malp-verde text-white"
                        : "bg-white text-malp-negro/30"
                    }`}
                  >
                    {logrado ? (
                      <Check size={16} strokeWidth={3} />
                    ) : (
                      <Hoja size={16} />
                    )}
                  </span>
                </div>

                {/* Etiqueta del premio */}
                <div
                  className={`flex-1 rounded-2xl px-4 py-2.5 ${
                    esActual
                      ? "bg-malp-amarillo/90"
                      : logrado
                        ? "bg-white"
                        : "bg-white/60"
                  }`}
                >
                  <p className="text-sm font-extrabold text-malp-verde-osc">
                    {hito.puntos.toLocaleString("es-CL")} pts
                  </p>
                  <p className="text-xs text-malp-negro/70">{hito.premio}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Puntos actuales */}
      <div className="mx-auto mb-6 w-fit rounded-full bg-malp-verde-osc px-6 py-3 text-center text-white">
        <p className="font-titulo text-2xl leading-none">
          {usuario.puntos.toLocaleString("es-CL")}
        </p>
        <p className="text-[10px] font-bold uppercase tracking-wide opacity-80">
          puntos actuales
        </p>
      </div>
    </>
  );
}
