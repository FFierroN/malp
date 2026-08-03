import { Routes, Route, Link } from "react-router-dom";
import Inicio from "@/features/inicio/Inicio";
import Login from "@/features/auth/Login";
import Catalogo from "@/features/catalogo/Catalogo";
import MiColeccion from "@/features/coleccion/MiColeccion";
import Cuidados from "@/features/cuidados/Cuidados";
import Fidelidad from "@/features/fidelidad/Fidelidad";
import Admin from "@/features/admin/Admin";

// Esqueleto de navegacion. Se reemplazara por un layout con barra inferior
// (bottom nav) estilo app movil cuando definamos el diseno.
export default function App() {
  return (
    <div className="min-h-screen">
      <nav className="flex flex-wrap gap-3 bg-malp-verde p-4 text-white">
        <Link to="/">Inicio</Link>
        <Link to="/catalogo">Catalogo</Link>
        <Link to="/coleccion">Mi coleccion</Link>
        <Link to="/cuidados">Cuidados</Link>
        <Link to="/fidelidad">Fidelidad</Link>
        <Link to="/login">Entrar</Link>
        <Link to="/admin">Admin</Link>
      </nav>
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/coleccion" element={<MiColeccion />} />
          <Route path="/cuidados" element={<Cuidados />} />
          <Route path="/fidelidad" element={<Fidelidad />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
    </div>
  );
}
