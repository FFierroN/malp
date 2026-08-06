import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronRight, Plus, Droplet, Leaf, Repeat } from "lucide-react";
import { StatusBar, Chip, PlantPoster } from "@/components/ui";
import { Pantalla } from "@/components/Layout";
import { recordatorios, plantaPorId, type TipoRecordatorio } from "@/data/mock";

const tabs = ["Proximos", "Todos", "Historial"] as const;
const grupos = ["Hoy", "Manana", "En 3 dias"] as const;

const iconoTipo: Record<TipoRecordatorio, typeof Droplet> = {
  Riego: Droplet,
  Fertilizacion: Leaf,
  Trasplante: Repeat,
};

export default function Recordatorios() {
  const navigate = useNavigate();
  const [tab, setTab] = useState<(typeof tabs)[number]>("Proximos");

  return (
    <>
      <StatusBar />
      <header className="flex items-center justify-between px-5 py-3">
        <button aria-label="Volver" onClick={() => navigate("/")}>
          <ArrowLeft size={24} className="text-malp-verde-osc" />
        </button>
        <h1 className="font-titulo text-xl text-malp-verde-osc">
          Recordatorios
        </h1>
        <span className="w-6" />
      </header>

      <Pantalla>
        <div className="flex gap-2">
          {tabs.map((t) => (
            <Chip key={t} activo={tab === t} onClick={() => setTab(t)}>
              {t}
            </Chip>
          ))}
        </div>

        <div className="mt-5 space-y-5">
          {grupos.map((g) => {
            const items = recordatorios.filter((r) => r.cuando === g);
            if (items.length === 0) return null;
            return (
              <section key={g}>
                <h2 className="mb-2 text-sm font-extrabold text-malp-negro/50">
                  {g}
                </h2>
                <div className="space-y-3">
                  {items.map((r) => {
                    const planta = plantaPorId(r.plantaId);
                    const Icon = iconoTipo[r.tipo];
                    if (!planta) return null;
                    return (
                      <button
                        key={r.id}
                        onClick={() => navigate(`/plantoteca/${planta.id}`)}
                        className="flex w-full items-center gap-3 rounded-3xl bg-white p-3 text-left shadow-tarjeta transition active:scale-[0.99]"
                      >
                        <PlantPoster
                          gradiente={planta.gradiente}
                          foto={planta.foto}
                          className="h-14 w-14 shrink-0 rounded-2xl"
                          size={24}
                        />
                        <div className="flex-1">
                          <p className="font-titulo text-base text-malp-verde-osc">
                            {planta.nombre}
                          </p>
                          <p className="text-xs text-malp-negro/60">
                            {planta.especie}
                          </p>
                          <div className="mt-1 flex items-center gap-1 text-xs font-bold text-malp-verde-osc">
                            <Icon size={13} />
                            {r.tipo}
                          </div>
                        </div>
                        <ChevronRight size={18} className="text-malp-negro/30" />
                      </button>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>

        <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-malp-verde-osc py-3 text-sm font-bold text-white transition active:scale-[0.98]">
          <Plus size={18} />
          Nuevo recordatorio
        </button>
      </Pantalla>
    </>
  );
}
