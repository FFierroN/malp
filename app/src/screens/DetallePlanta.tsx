import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Pencil,
  Camera,
  Sun,
  Sprout,
  Store,
  Calendar,
  Flower2,
  MapPin,
  Droplet,
  Leaf,
  Repeat,
  PartyPopper,
  Thermometer,
  Wind,
} from "lucide-react";
import { StatusBar, PlantPoster, Chip } from "@/components/ui";
import { Pantalla } from "@/components/Layout";
import { plantaPorId, actividadMargarita } from "@/data/mock";

const tabs = ["Actividad", "Notas", "Cuidados"] as const;

const iconoActividad: Record<string, typeof Droplet> = {
  Riego: Droplet,
  Fertilizacion: Leaf,
  Trasplante: Repeat,
  "Nueva planta": PartyPopper,
};

export default function DetallePlanta() {
  const navigate = useNavigate();
  const { id } = useParams();
  const planta = plantaPorId(id ?? "");
  const [tab, setTab] = useState<(typeof tabs)[number]>("Actividad");

  if (!planta) {
    return (
      <Pantalla className="pt-20 text-center">
        <p className="text-malp-negro/50">Planta no encontrada.</p>
      </Pantalla>
    );
  }

  return (
    <>
      {/* Cabecera con "foto" (poster) */}
      <div className="relative">
PlantPoster
          gradiente={planta.gradiente}
          foto={planta.foto}
          className="h-64 w-full"
          size={80}
        />
        <div className="absolute inset-x-0 top-0">
          <StatusBar oscura />
          <div className="flex items-center justify-between px-5 py-2">
            <button
              aria-label="Volver"
              onClick={() => navigate("/plantoteca")}
              className="rounded-full bg-white/30 p-2 backdrop-blur"
            >
              <ArrowLeft size={20} className="text-white" />
            </button>
            <button
              aria-label="Editar"
              className="rounded-full bg-white/30 p-2 backdrop-blur"
            >
              <Pencil size={18} className="text-white" />
            </button>
          </div>
        </div>
        <button
          aria-label="Cambiar foto"
          className="absolute -bottom-5 right-6 flex h-11 w-11 items-center justify-center rounded-full bg-white text-malp-verde-osc shadow-tarjeta"
        >
          <Camera size={20} />
        </button>
      </div>

      <Pantalla className="pt-8">
        <h1 className="font-titulo text-3xl text-malp-verde-osc">
          {planta.nombre}
        </h1>
        <p className="text-sm text-malp-negro/60">{planta.especie}</p>

        {/* Atributos rapidos */}
        <div className="mt-3 flex flex-wrap gap-2">
          <Chip>{planta.categoria}</Chip>
          <Chip>{planta.luz}</Chip>
          <Chip>{planta.dificultad}</Chip>
        </div>

        {/* Ficha */}
        <div className="mt-5 grid grid-cols-2 gap-4 rounded-3xl bg-white p-4 shadow-tarjeta">
          <Dato icon={Store} label="Comprada en" valor={planta.compradaEn} />
          <Dato icon={Flower2} label="Maceta" valor={planta.maceta} />
          <Dato icon={Calendar} label="Fecha" valor={planta.fechaCompra} />
          <Dato icon={MapPin} label="Ubicacion" valor={planta.ubicacion} />
        </div>

        {/* Tabs */}
        <div className="mt-5 flex gap-6 border-b border-black/10">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`-mb-px border-b-2 pb-2 text-sm font-bold transition ${
                tab === t
                  ? "border-malp-verde text-malp-verde-osc"
                  : "border-transparent text-malp-negro/40"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Contenido del tab */}
        {tab === "Actividad" && (
          <ul className="mt-4 space-y-4">
            {actividadMargarita.map((ev, i) => {
              const Icon = iconoActividad[ev.tipo] ?? Sprout;
              const ultimo = i === actividadMargarita.length - 1;
              return (
                <li key={ev.id} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-malp-verde/15 text-malp-verde-osc">
                      <Icon size={15} />
                    </span>
                    {!ultimo && <span className="w-px flex-1 bg-black/10" />}
                  </div>
                  <div className="pb-1">
                    <p className="text-xs font-bold text-malp-negro/40">
                      {ev.hace}
                    </p>
                    <p className="text-sm font-bold text-malp-verde-osc">
                      {ev.tipo}
                    </p>
                    <p className="text-xs text-malp-negro/60">{ev.detalle}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        )}

        {tab === "Notas" && (
          <p className="mt-6 rounded-2xl bg-white p-4 text-sm text-malp-negro/70 shadow-tarjeta">
            {planta.nota ??
              `Aun no hay notas para ${planta.nombre}. Aca podras anotar lo que quieras recordar: donde la ubicaste, como reacciona al sol, etc.`}
          </p>
        )}

        {tab === "Cuidados" && (
          <div className="mt-4 space-y-3">
            <Cuidado icon={Droplet} label="Riego" valor={planta.proximoRiego} />
            <Cuidado icon={Sun} label="Luz" valor={planta.luz} />
            {planta.temperatura && (
              <Cuidado
                icon={Thermometer}
                label="Temperatura"
                valor={planta.temperatura}
              />
            )}
            {planta.humedad && (
              <Cuidado icon={Wind} label="Humedad" valor={planta.humedad} />
            )}
            <Cuidado
              icon={Sprout}
              label="Dificultad"
              valor={planta.dificultad}
            />
          </div>
        )}
      </Pantalla>
    </>
  );
}

function Dato({
  icon: Icon,
  label,
  valor,
}: {
  icon: typeof Store;
  label: string;
  valor: string;
}) {
  return (
    <div className="flex items-start gap-2">
      <Icon size={16} className="mt-0.5 text-malp-verde" />
      <div>
        <p className="text-[11px] text-malp-negro/40">{label}</p>
        <p className="text-sm font-bold text-malp-negro/80">{valor}</p>
      </div>
    </div>
  );
}

function Cuidado({
  icon: Icon,
  label,
  valor,
}: {
  icon: typeof Droplet;
  label: string;
  valor: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-tarjeta">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-malp-crema text-malp-verde-osc">
        <Icon size={18} />
      </span>
      <div>
        <p className="text-xs text-malp-negro/40">{label}</p>
        <p className="text-sm font-bold text-malp-negro/80">{valor}</p>
      </div>
    </div>
  );
}
