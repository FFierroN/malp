import { useNavigate } from "react-router-dom";
import {
  Star,
  Sprout,
  BellRing,
  ScanLine,
  Gift,
  ChevronRight,
} from "lucide-react";
import { StatusBar, Card, ProgressBar, Hoja } from "@/components/ui";
import { Pantalla } from "@/components/Layout";
import { usuario, plantas, beneficios } from "@/data/mock";

const iconosBeneficio = [Star, Sprout, BellRing, ScanLine, Gift];

export default function Perfil() {
  const navigate = useNavigate();
  return (
    <>
      <StatusBar />
      <header className="px-5 py-3 text-center">
        <h1 className="font-titulo text-xl text-malp-verde-osc">Perfil</h1>
      </header>

      <Pantalla>
        {/* Cabecera de usuario */}
        <div className="flex flex-col items-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-emerald-700 to-emerald-500 text-white shadow-tarjeta">
            <Hoja size={48} />
          </div>
          <h2 className="mt-3 font-titulo text-2xl text-malp-verde-osc">
            {usuario.nombre}
          </h2>
          <p className="text-sm text-malp-negro/60">
            Miembro del Club Manos a la Planta
          </p>
        </div>

        {/* Resumen de puntos */}
        <Card className="mt-5">
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-malp-negro/50">
              Tus puntos
            </span>
            <span className="font-titulo text-xl text-malp-verde-osc">
              {usuario.puntos.toLocaleString("es-CL")} /{" "}
              {usuario.metaPuntos.toLocaleString("es-CL")}
            </span>
          </div>
          <div className="mt-3">
            <ProgressBar valor={usuario.puntos} max={usuario.metaPuntos} />
          </div>
          <button
            onClick={() => navigate("/monstera")}
            className="mt-4 flex w-full items-center justify-between rounded-2xl bg-malp-crema px-4 py-3 text-sm font-bold text-malp-verde-osc"
          >
            Ver mi Monstera
            <ChevronRight size={18} />
          </button>
        </Card>

        {/* Mini resumen de coleccion */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          <Card className="!p-4 text-center">
            <p className="font-titulo text-3xl text-malp-verde-osc">
              {plantas.length}
            </p>
            <p className="text-xs text-malp-negro/50">plantas registradas</p>
          </Card>
          <Card className="!p-4 text-center">
            <p className="font-titulo text-3xl text-malp-verde-osc">3</p>
            <p className="text-xs text-malp-negro/50">recompensas canjeadas</p>
          </Card>
        </div>

        {/* Beneficios del club */}
        <h3 className="mt-6 mb-2 font-titulo text-lg text-malp-verde-osc">
          Beneficios de tu club
        </h3>
        <div className="space-y-2">
          {beneficios.map((b, i) => {
            const Icon = iconosBeneficio[i] ?? Star;
            return (
              <div
                key={b.titulo}
                className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-tarjeta"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-malp-crema text-malp-verde-osc">
                  <Icon size={18} />
                </span>
                <div>
                  <p className="text-sm font-bold text-malp-negro/80">
                    {b.titulo}
                  </p>
                  <p className="text-xs text-malp-negro/50">{b.detalle}</p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-6 text-center font-titulo text-sm italic text-malp-verde">
          Cuidemos juntos nuestra jungla
        </p>
      </Pantalla>
    </>
  );
}
