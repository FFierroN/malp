import { createClient } from "@supabase/supabase-js";

// El cliente de Supabase: unica puerta de entrada a base de datos, auth y storage.
// Las credenciales viven en .env.local (ver .env.example). La anon key es publica;
// la seguridad real la dan las politicas RLS en Supabase (ver docs/08).
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseAnonKey) {
  // Aviso amable en desarrollo si falta configurar el .env.local
  console.warn(
    "[MALP] Falta VITE_SUPABASE_URL o VITE_SUPABASE_ANON_KEY. " +
      "Copia .env.example a .env.local y rellena los valores.",
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
