import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Plus, Search, Droplet, MoreVertical } from "lucide-react";
import { StatusBar, Chip, PlantPoster } from "@/components/ui";
import { Pantalla } from "@/components/Layout";
import { plantas, type Categoria } from "@/data/mock";

const filtros: ("Todas" | Categoria)[] = [
  "Todas",
  "Interior",
  "Exterior",
  "Suculentas",
];

export default function Plantoteca() {
  const navigate = useNavigate();
  const [filtro, setFiltro] = useState<(typeof filtros)[number]>("Todas");
  const [busqueda, setBusqueda] = useState("");

  const visibles = plantas.filter((p) => {
    const porCategoria = filtro === "Todas" || p.categoria === filtro;
    const texto = `${p.nombre} ${p.especie}`.toLowerCase();
    return porCategoria && texto.includes(busqueda.toLowerCase());
  });

  return (
    <>
      <StatusBar />
      <header className="flex items-center justify-between px-5 py-3">
        <button aria-label="Volver" onClick={() => navigate("/")}>
          <ArrowLeft size={24} className="text-malp-verde-osc" />
        </button>
        <h1 className="font-titulo text-xl text-malp-verde-osc">
          Mi Plantoteca
        </h1>
        <button
          aria-label="Agregar planta"
          onClick={() => navigate("/identificar")}
        >
          <Plus size={24} className="text-malp-verde-osc" />
        </button>
      </header>

      <Pantalla>
        {/* Buscador */}
        <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2.5 shadow-tarjeta">
          <Search size={18} className="text-malp-negro/40" />
          <input
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Buscar en tu coleccion..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-malp-negro/40"
          />
        </div>

        {/* Filtros */}
        <div className="scroll-limpio mt-4 flex gap-2 overflow-x-auto pb-1">
          {filtros.map((f) => (
            <Chip key={f} activo={filtro === f} onClick={() => setFiltro(f)}>
              {f}
            </Chip>
          ))}
        </div>

        {/* Lista de plantas */}
        <div className="mt-4 space-y-3">
          {visibles.map((p) => (
            <button
              key={p.id}
              onClick={() => navigate(`/plantoteca/${p.id}`)}
              className="flex w-full items-center gap-3 rounded-3xl bg-white p-3 text-left shadow-tarjeta transition active:scale-[0.99]"
            >
              <PlantPoster
                gradiente={p.gradiente}
                className="h-20 w-20 shrink-0 rounded-2xl"
                size={34}
              />
              <div className="flex-1">
                <p className="font-titulo text-lg text-malp-verde-osc">
                  {p.nombre}
                </p>
                <p className="text-xs text-malp-negro/60">{p.especie}</p>
                <div className="mt-1.5 flex items-center gap-1 text-xs text-malp-negro/50">
                  <Droplet size={13} className="text-malp-verde" />
                  Ultimo riego{" "}
                  <span className="font-bold text-malp-negro/70">
                    {p.ultimoRiego}
                  </span>
                </div>
                <p className="text-xs text-malp-negro/50">
                  Proximo riego{" "}
                  <span className="font-bold text-malp-negro/70">
                    {p.proximoRiego}
                  </span>
                </p>
              </div>
              <MoreVertical size={18} className="text-malp-negro/30" />
            </button>
          ))}
          {visibles.length === 0 && (
            <p className="py-10 text-center text-sm text-malp-negro/40">
              No encontramos plantas con ese filtro.
            </p>
          )}
        </div>
      </Pantalla>
    </>
  );
}
