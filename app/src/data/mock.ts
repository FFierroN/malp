// ---------------------------------------------------------------------------
// Datos FICTICIOS del mockup de MALP ("Manos a la Planta").
// Todo esto se reemplazara por Supabase cuando salgamos del mockup.
// Fuente de verdad visual: docs/ + imagen de prototipo (8 pantallas).
// ---------------------------------------------------------------------------

export type Categoria = "Interior" | "Exterior" | "Suculentas";

export interface Planta {
  id: string;
  nombre: string; // apodo que le puso el usuario (ej. "Margarita")
  especie: string; // nombre botanico (ej. "Monstera deliciosa")
  categoria: Categoria;
  emoji: string; // placeholder visual mientras no hay fotos reales
  foto?: string; // ruta a la foto real en public/plantas/ (opcional)
  ultimoRiego: string; // texto humano (ej. "Hace 5 dias")
  proximoRiego: string; // texto humano (ej. "En 3 dias")
  luz: string;
  dificultad: string;
  ubicacion: string;
  maceta: string;
  compradaEn: string;
  fechaCompra: string;
  salud?: string;
  temperatura?: string;
  humedad?: string;
  nota?: string;
}

export interface EventoActividad {
  id: string;
  hace: string;
  tipo: string;
  detalle: string;
}

export type TipoRecordatorio = "Riego" | "Fertilizacion" | "Trasplante";

export interface Recordatorio {
  id: string;
  plantaId: string;
  cuando: "Hoy" | "Manana" | "En 3 dias";
  tipo: TipoRecordatorio;
}

export type CategoriaRecompensa = "Plantas" | "Descuentos" | "Accesorios";

export interface Recompensa {
  id: string;
  nombre: string;
  puntos: number;
  categoria: CategoriaRecompensa;
  emoji: string;
  destacado?: string; // ej. "10%"
}

export interface HitoPuntos {
  puntos: number;
  premio: string;
}

// --- Usuario actual (ficticio) -------------------------------------------
export const usuario = {
  nombre: "Camila",
  miembroDesde: "Marzo 2025",
  puntos: 1325,
  metaPuntos: 2000,
  ultimaInteraccion: {
    hace: "Hace 3 dias",
    detalle: "Compra en sucursal",
  },
};

export const puntosFaltantes = usuario.metaPuntos - usuario.puntos;

// Helper: arma la ruta a una foto en public/plantas/ respetando la base
// ("/malp/"). Deja los archivos ahi y apareceran automaticamente.
const foto = (archivo: string) => `${import.meta.env.BASE_URL}plantas/${archivo}`;

// --- Coleccion de plantas ("Mi Plantoteca") ------------------------------
export const plantas: Planta[] = [
  {
    id: "margarita",
    nombre: "Margarita",
    especie: "Monstera deliciosa",
    categoria: "Interior",
    emoji: "",
    foto: foto("margarita.jpg"),
    ultimoRiego: "Hace 5 dias",
    proximoRiego: "En 3 dias",
    luz: "Luz indirecta",
    dificultad: "Nivel facil",
    ubicacion: "Sala",
    maceta: "Ceramica blanca",
    compradaEn: "Manos a la Planta",
    fechaCompra: "12 may 2024",
    salud: "Excelente",
    temperatura: "18 - 28 C",
    humedad: "Media",
    nota: "Le salio una hoja nueva despues del cambio de sustrato.",
  },
  {
    id: "luna",
    nombre: "Luna",
    especie: "Philodendron hederaceum",
    categoria: "Interior",
    emoji: "",
    foto: foto("luna.jpg"),
    ultimoRiego: "Hace 2 dias",
    proximoRiego: "En 3 dias",
    luz: "Luz media",
    dificultad: "Nivel facil",
    ubicacion: "Dormitorio",
    maceta: "Terracota",
    compradaEn: "Manos a la Planta",
    fechaCompra: "3 jun 2024",
  },
  {
    id: "selva",
    nombre: "Selva",
    especie: "Calathea orbifolia",
    categoria: "Interior",
    emoji: "",
    foto: foto("selva.jpg"),
    ultimoRiego: "Hace 7 dias",
    proximoRiego: "En 1 dia",
    luz: "Luz indirecta",
    dificultad: "Nivel medio",
    ubicacion: "Cocina",
    maceta: "Ceramica gris",
    compradaEn: "Manos a la Planta",
    fechaCompra: "20 abr 2024",
  },
];

export const plantaPorId = (id: string) => plantas.find((p) => p.id === id);

// --- Actividad de la planta destacada (Margarita) ------------------------
export const actividadMargarita: EventoActividad[] = [
  { id: "a1", hace: "Hace 5 dias", tipo: "Riego", detalle: "1 L de agua" },
  {
    id: "a2",
    hace: "Hace 20 dias",
    tipo: "Fertilizacion",
    detalle: "Fertilizante organico",
  },
  {
    id: "a3",
    hace: "Hace 2 meses",
    tipo: "Trasplante",
    detalle: "Cambio de maceta",
  },
  {
    id: "a4",
    hace: "Hace 4 meses",
    tipo: "Nueva planta",
    detalle: "Bienvenida a casa!",
  },
];

// --- Recordatorios --------------------------------------------------------
export const recordatorios: Recordatorio[] = [
  { id: "r1", plantaId: "selva", cuando: "Hoy", tipo: "Riego" },
  { id: "r2", plantaId: "margarita", cuando: "Manana", tipo: "Fertilizacion" },
  { id: "r3", plantaId: "luna", cuando: "En 3 dias", tipo: "Riego" },
];

// --- Recompensas ("canje de puntos") -------------------------------------
export const recompensas: Recompensa[] = [
  {
    id: "planta-sorpresa",
    nombre: "Planta sorpresa",
    puntos: 1750,
    categoria: "Plantas",
    emoji: "",
  },
  {
    id: "sustrato-premium",
    nombre: "Sustrato premium",
    puntos: 1500,
    categoria: "Accesorios",
    emoji: "",
  },
  {
    id: "macetero-diseno",
    nombre: "Macetero diseno",
    puntos: 750,
    categoria: "Accesorios",
    emoji: "",
  },
  {
    id: "off-sustratos",
    nombre: "10% OFF en sustratos",
    puntos: 500,
    categoria: "Descuentos",
    emoji: "",
    destacado: "10%",
  },
];

// --- Arbol de puntos ("Mi Monstera") -------------------------------------
// De abajo (0) hacia arriba (meta). El usuario va por 1.325.
export const hitosPuntos: HitoPuntos[] = [
  { puntos: 2000, premio: "Recompensa Legendaria" },
  { puntos: 1750, premio: "Planta sorpresa" },
  { puntos: 1500, premio: "Sustrato premium" },
  { puntos: 1250, premio: "Accesorio exclusivo" },
  { puntos: 1000, premio: "Fertilizante" },
  { puntos: 750, premio: "Macetero diseno" },
  { puntos: 500, premio: "10% OFF sustratos" },
  { puntos: 250, premio: "Sticker exclusivo" },
  { puntos: 0, premio: "Bienvenida!" },
];

// --- Resultado ficticio del identificador con IA -------------------------
export const resultadoIA = {
  nombre: "Alocasia Polly",
  especie: "Alocasia x amazonica",
  coincidencia: 95,
  emoji: "",
  atributos: [
    { etiqueta: "Nivel de dificultad", valor: "Intermedio" },
    { etiqueta: "Luz", valor: "Luz indirecta brillante" },
    { etiqueta: "Riego", valor: "Cada 7-10 dias" },
    { etiqueta: "Temperatura", valor: "18 - 28 C" },
  ],
};

// --- Beneficios del club (pantalla de bienvenida / perfil) ---------------
export const beneficios = [
  { titulo: "Gana puntos", detalle: "por cada interaccion" },
  { titulo: "Registra tus plantas", detalle: "y lleva su historial" },
  {
    titulo: "Recibe recordatorios",
    detalle: "de riego, fertilizacion y mas",
  },
  { titulo: "Identifica plantas", detalle: "con nuestra IA" },
  {
    titulo: "Canjea recompensas",
    detalle: "y descuentos exclusivos",
  },
];
