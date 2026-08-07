import { useNavigate } from "react-router-dom";
import { ArrowLeft, Info, Check } from "lucide-react";
import { StatusBar } from "@/components/ui";
import { MonsteraCrecimiento } from "@/components/Monstera";
import { usuario, hitosPuntos } from "@/data/mock";

export default function MiMonstera() {
  const navigate = useNavigate();

  // Descendente: de la meta (arriba) al inicio (abajo), como en el mock.
  const descendente = [...hitosPuntos].sort((a, b) => b.puntos - a.puntos);

  return (
    <>
      <StatusBar />
      <header className="flex items-center justify-between px-5 py-3">
        <button aria-label="Volver" onClick={() => navigate(-1)}>
          <ArrowLeft size={22} className="text-malp-negro" />
        </button>
        <h1 className="font-titulo text-lg text-malp-negro">Mi Monstera</h1>
        <button aria-label="Info">
          <Info size={20} className="text-malp-negro/50" />
        </button>
      </header>

      <p className="px-10 text-center text-sm text-malp-negro/50">
        Tu planta crece con cada interaccion
      </p>

      {/* Planta a la izquierda + enredadera de hitos a la derecha */}
      <div className="mt-4 flex gap-2 px-4 pb-6">
        <div className="relative w-[38%] shrink-0">
          <MonsteraCrecimiento puntos={usuario.puntos} hitos={hitosPuntos} />
          {/* Puntos actuales, flotando sobre la maceta */}
          <div className="absolute -bottom-2 left-0 rounded-2xl bg-malp-papel px-3 py-2 text-center shadow-tarjeta">
            <p className="font-titulo text-lg leading-none text-malp-verde-osc">
              {usuario.puntos.toLocaleString("es-CL")}
            </p>
            <p className="text-[9px] font-bold uppercase tracking-wide text-malp-negro/40">
              puntos actuales
            </p>
          </div>
        </div>

        <ul className="flex-1 space-y-1">
          {descendente.map((hito) => {
            const logrado = usuario.puntos >= hito.puntos;
            return (
              <li key={hito.puntos} className="flex items-center gap-3">
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold transition duration-300 ${
                    logrado
                      ? "bg-malp-amarillo text-white"
                      : "bg-malp-papel text-malp-negro/25 ring-1 ring-malp-borde"
                  }`}
                >
                  {logrado ? <Check size={15} strokeWidth={3} /> : null}
                </span>
                <div>
                  <p className="text-xs font-extrabold text-malp-negro/70">
                    {hito.puntos.toLocaleString("es-CL")} pts
                  </p>
                  <p className="text-[11px] text-malp-negro/45">
                    {hito.premio}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
