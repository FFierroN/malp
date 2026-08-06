import { Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Inicio from "@/screens/Inicio";
import MiMonstera from "@/screens/MiMonstera";
import Plantoteca from "@/screens/Plantoteca";
import DetallePlanta from "@/screens/DetallePlanta";
import Recordatorios from "@/screens/Recordatorios";
import Identificar from "@/screens/Identificar";
import ResultadoIA from "@/screens/ResultadoIA";
import Recompensas from "@/screens/Recompensas";
import Tienda from "@/screens/Tienda";
import Perfil from "@/screens/Perfil";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/monstera" element={<MiMonstera />} />
        <Route path="/plantoteca" element={<Plantoteca />} />
        <Route path="/plantoteca/:id" element={<DetallePlanta />} />
        <Route path="/recordatorios" element={<Recordatorios />} />
        <Route path="/identificar" element={<Identificar />} />
        <Route path="/identificar/resultado" element={<ResultadoIA />} />
        <Route path="/recompensas" element={<Recompensas />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/perfil" element={<Perfil />} />
      </Route>
    </Routes>
  );
}
