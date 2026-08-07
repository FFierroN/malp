import { StatusBar, PlantPoster, Hoja } from "@/components/ui";
import { Pantalla } from "@/components/Layout";
import { recompensas, usuario } from "@/data/mock";

// La "Tienda" del mockup reutiliza el catalogo de productos canjeables,
// mostrando precio en puntos. En V2 tendra productos con precio en CLP.
export default function Tienda() {
  return (
    <>
      <StatusBar />
      <header className="px-5 py-3 text-center">
        <h1 className="font-titulo text-xl text-malp-verde-osc">Tienda</h1>
      </header>

      <Pantalla>
        <div className="flex items-center justify-between rounded-3xl bg-malp-verde-osc px-5 py-4 text-white">
          <span className="text-sm font-bold opacity-80">Tus puntos</span>
          <span className="flex items-center gap-2 font-titulo text-2xl">
            <Hoja size={20} className="text-malp-verde" />
            {usuario.puntos.toLocaleString("es-CL")}
          </span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          {recompensas.map((r) => (
            <div
              key={r.id}
              className="overflow-hidden rounded-tarjeta border border-malp-borde bg-malp-papel shadow-tarjeta"
            >
              <PlantPoster
                className="h-28 w-full"
                size={40}
              />
              <div className="p-3">
                <p className="text-sm font-bold text-malp-negro/80">
                  {r.nombre}
                </p>
                <p className="mt-1 flex items-center gap-1 text-sm font-extrabold text-malp-verde-osc">
                  <Hoja size={14} className="text-malp-verde" />
                  {r.puntos.toLocaleString("es-CL")} pts
                </p>
              </div>
            </div>
          ))}
        </div>
      </Pantalla>
    </>
  );
}
