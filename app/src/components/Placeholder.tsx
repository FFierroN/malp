type PlaceholderProps = {
  titulo: string;
  descripcion: string;
  fase: string;
};

// Componente reutilizable para las pantallas aun no construidas.
// Evita repetir el mismo maquetado en cada pilar (DRY).
export default function Placeholder({
  titulo,
  descripcion,
  fase,
}: PlaceholderProps) {
  return (
    <section className="mx-auto max-w-md rounded-2xl bg-white p-6 shadow">
      <span className="inline-block rounded-full bg-malp-amarillo px-3 py-1 text-xs font-bold uppercase">
        {fase}
      </span>
      <h1 className="mt-3 font-titulo text-2xl uppercase text-malp-verde">
        {titulo}
      </h1>
      <p className="mt-2 text-sm leading-relaxed text-malp-negro/80">
        {descripcion}
      </p>
      <p className="mt-4 text-xs italic text-malp-negro/50">
        Pantalla en construccion. Ver roadmap en docs/05-roadmap-fases.md
      </p>
    </section>
  );
}
