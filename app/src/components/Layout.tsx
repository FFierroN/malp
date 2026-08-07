import type { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import BottomNav from "./BottomNav";

// Marco tipo telefono: en escritorio se ve como un celular centrado;
// en movil ocupa toda la pantalla. El contenido scrollea, la nav queda fija.
export default function Layout() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#ded7c8] p-0 sm:p-6">
      <div className="relative flex h-screen w-full max-w-[430px] flex-col overflow-hidden bg-malp-crema sm:h-[900px] sm:rounded-[2.5rem] sm:shadow-celu sm:ring-8 sm:ring-malp-negro/80">
        <main className="scroll-limpio flex-1 overflow-y-auto">
          <Outlet />
        </main>
        <BottomNav />
      </div>
    </div>
  );
}

// Contenedor de pantalla con padding estandar (DRY para cada vista).
export function Pantalla({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`px-5 pb-6 ${className}`}>{children}</div>;
}
