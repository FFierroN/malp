import { NavLink, useNavigate } from "react-router-dom";
import { Home, Library, Store, User } from "lucide-react";
import { Hoja } from "./ui";

const items = [
  { to: "/", label: "Inicio", icon: Home, end: true },
  { to: "/plantoteca", label: "Plantoteca", icon: Library, end: false },
  { to: "/tienda", label: "Tienda", icon: Store, end: false },
  { to: "/perfil", label: "Perfil", icon: User, end: false },
];

export default function BottomNav() {
  const navigate = useNavigate();
  return (
    <nav className="relative border-t border-malp-borde bg-malp-papel/95 px-2 pb-6 pt-2 backdrop-blur transition">
      <div className="flex items-end justify-around">
        {items.slice(0, 2).map((it) => (
          <ItemNav key={it.to} {...it} />
        ))}

        {/* Boton central: hoja monstera -> arbol de recompensas "Mi Monstera" */}
        <button
          type="button"
          onClick={() => navigate("/monstera")}
          aria-label="Mi Monstera"
          className="-mt-8 flex h-16 w-16 items-center justify-center rounded-full bg-malp-verde-osc text-white shadow-tarjeta ring-4 ring-malp-papel transition duration-300 active:scale-95"
        >
          <Hoja size={30} />
        </button>

        {items.slice(2).map((it) => (
          <ItemNav key={it.to} {...it} />
        ))}
      </div>
    </nav>
  );
}

function ItemNav({
  to,
  label,
  icon: Icon,
  end,
}: {
  to: string;
  label: string;
  icon: typeof Home;
  end: boolean;
}) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `flex w-16 flex-col items-center gap-1 py-1 text-[10px] font-bold transition ${
          isActive ? "text-malp-verde" : "text-malp-negro/40"
        }`
      }
    >
      <Icon size={22} strokeWidth={2.2} />
      {label}
    </NavLink>
  );
}
