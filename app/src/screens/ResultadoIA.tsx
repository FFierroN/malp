import { useNavigate } from "react-router-dom";
import { ArrowLeft, Gauge, Sun, Droplet, Thermometer } from "lucide-react";
import { StatusBar, PlantPoster } from "@/components/ui";
import { Pantalla } from "@/components/Layout";
import { resultadoIA } from "@/data/mock";

const iconos = [Gauge, Sun, Droplet, Thermometer];

export default function ResultadoIA() {
  const navigate = useNavigate();
  return (
    <>
      <StatusBar />
      <header className="flex items-center justify-between px-5 py-3">
        <button aria-label="Volver" onClick={() => navigate("/identificar")}>
          <ArrowLeft size={24} className="text-malp-verde-osc" />
        </button>
        <h1 className="font-titulo text-xl text-malp-verde-osc">Resultado</h1>
        <span className="w-6" />
      </header>

      <Pantalla className="pt-2">
        <div className="flex items-center gap-4">
          <div>
            <h2 className="font-titulo text-2xl text-malp-verde-osc">
              {resultadoIA.nombre}
            </h2>
            <p className="text-sm text-malp-negro/60">{resultadoIA.especie}</p>
            <span className="mt-2 inline-block rounded-full bg-malp-verde px-3 py-1 text-xs font-bold text-white">
              {resultadoIA.coincidencia}% Coincidencia
            </span>
          </div>
          <PlantPoster
            gradiente="from-emerald-800 to-emerald-500"
            className="ml-auto h-24 w-24 shrink-0 rounded-3xl"
            size={44}
          />
        </div>

        {/* Atributos */}
        <div className="mt-5 divide-y divide-black/5 rounded-3xl bg-white px-4 shadow-tarjeta">
          {resultadoIA.atributos.map((attr, i) => {
            const Icon = iconos[i] ?? Gauge;
            return (
              <div
                key={attr.etiqueta}
                className="flex items-center justify-between py-3"
              >
                <div className="flex items-center gap-3">
                  <Icon size={18} className="text-malp-verde" />
                  <span className="text-sm font-bold text-malp-negro/70">
                    {attr.etiqueta}
                  </span>
                </div>
                <span className="text-sm text-malp-negro/60">{attr.valor}</span>
              </div>
            );
          })}
        </div>

        <h3 className="mt-7 text-center font-titulo text-lg text-malp-verde-osc">
          Quieres agregarla a tu Plantoteca?
        </h3>

        <button
          onClick={() => navigate("/plantoteca")}
          className="w-full rounded-full bg-malp-verde-osc py-3 text-sm font-bold text-white transition active:scale-[0.98]"
        >
          Agregar a mi coleccion
        </button>
        <button
          onClick={() => navigate("/identificar")}
          className="mt-2 w-full rounded-full bg-white py-3 text-sm font-bold text-malp-negro/60 shadow-tarjeta transition active:scale-[0.98]"
        >
          No, gracias
        </button>
      </Pantalla>
    </>
  );
}
