import { useNavigate } from "react-router-dom";
import { ArrowLeft, Camera, ImageIcon, RefreshCw } from "lucide-react";
import { StatusBar, Hoja } from "@/components/ui";
import { Pantalla } from "@/components/Layout";

export default function Identificar() {
  const navigate = useNavigate();
  return (
    <>
      <StatusBar />
      <header className="flex items-center justify-between px-5 py-3">
        <button aria-label="Volver" onClick={() => navigate(-1)}>
          <ArrowLeft size={24} className="text-malp-verde-osc" />
        </button>
        <h1 className="font-titulo text-xl text-malp-verde-osc">
          Identificar con IA
        </h1>
        <span className="w-6" />
      </header>

      <Pantalla className="pt-4 text-center">
        <h2 className="font-titulo text-2xl text-malp-verde-osc">
          Que planta es esta?
        </h2>
        <p className="mx-auto mt-2 max-w-xs text-sm text-malp-negro/60">
          Toma una foto y nuestra IA te ayudara a identificarla
        </p>

        {/* Circulo de "camara" (placeholder) */}
        <div className="mx-auto mt-8 flex h-64 w-64 items-center justify-center rounded-full bg-gradient-to-br from-emerald-800 to-emerald-500 shadow-tarjeta">
          <Hoja size={90} className="text-white/85" />
        </div>

        {/* Controles de camara */}
        <div className="mt-8 flex items-center justify-center gap-8">
          <button
            aria-label="Galeria"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-malp-verde-osc shadow-tarjeta"
          >
            <ImageIcon size={22} />
          </button>
          <button
            aria-label="Tomar foto"
            onClick={() => navigate("/identificar/resultado")}
            className="flex h-20 w-20 items-center justify-center rounded-full bg-malp-verde text-white shadow-lg ring-4 ring-white transition active:scale-95"
          >
            <Camera size={34} />
          </button>
          <button
            aria-label="Cambiar camara"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-malp-verde-osc shadow-tarjeta"
          >
            <RefreshCw size={22} />
          </button>
        </div>

        <p className="mx-auto mt-8 max-w-xs text-xs text-malp-negro/50">
          <span className="font-bold">Consejo:</span> Asegurate de que la hoja y
          el tallo se vean bien.
        </p>
      </Pantalla>
    </>
  );
}
