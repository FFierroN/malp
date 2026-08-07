import { useNavigate } from "react-router-dom";
import { ArrowLeft, Info } from "lucide-react";
import { StatusBar, Card } from "@/components/ui";
import { MonsteraCrecimiento } from "@/components/Monstera";
import { usuario, hitosPuntos } from "@/data/mock";

export default function MiMonstera() {
  const navigate = useNavigate();

  const ascendente = [...hitosPuntos].sort((a, b) => a.puntos - b.puntos);
  const siguiente = ascendente.find((h) => usuario.puntos < h.puntos);

  return (
    <>
      <StatusBar />
      <header className="flex items-center justify-between px-5 py-3">
        <button aria-label="Volver" onClick={() => navigate(-1)}>
          <ArrowLeft size={22} className="text-malp-negro/60" />
        </button>
        <h1 className="font-titulo text-lg text-malp-verde-osc">
          Mi Monstera
        </h1>
        <button aria-label="Info">
          <Info size={20} className="text-malp-negro/40" />
        </button>
      </header>

      <p className="px-10 text-center text-sm text-malp-negro/50">
        Tu planta crece hoja por hoja con cada interaccion
      </p>

      {/* La Monstera: pieza visual central, con mucho espacio alrededor */}
      <div className="mt-4 px-6">
        <MonsteraCrecimiento puntos={usuario.puntos} hitos={hitosPuntos} />
      </div>

      {/* Puntos actuales, en una sola tarjeta calma (sin lista larga) */}
      <div className="px-5 pb-8">
        <Card className="text-center">
          <p className="font-titulo text-4xl text-malp-verde-osc">
            {usuario.puntos.toLocaleString("es-CL")}
          </p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-malp-negro/40">
            puntos actuales
          </p>
          {siguiente && (
            <p className="mt-4 text-sm text-malp-negro/60">
              Te faltan{" "}
              <span className="font-bold text-malp-verde-osc">
                {(siguiente.puntos - usuario.puntos).toLocaleString("es-CL")}
              </span>{" "}
              puntos para tu proxima hoja:{" "}
              <span className="font-semibold">{siguiente.premio}</span>
            </p>
          )}
        </Card>
      </div>
    </>
  );
}
