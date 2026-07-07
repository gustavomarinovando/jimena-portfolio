import Link from "next/link";

const steps = [
  ["Escuchar", "Entender primero que vive, sabe y necesita el grupo."],
  ["Ordenar", "Poner en claro ideas, preocupaciones y acuerdos."],
  ["Facilitar", "Explicar sin hacer sentir pequeno a nadie."],
  ["Replicar", "Dejar algo que pueda usarse despues del taller."],
];

const tools = ["Cartillas", "Cunas radiales", "Guias", "Sistematizacion", "Talleres", "Mapeo de actores"];

export const metadata = {
  title: "Enfoque | Jimena Ovando Morales",
  description: "Forma de trabajo: escuchar, ordenar, facilitar y dejar herramientas utiles.",
};

export default function EnfoquePage() {
  return (
    <>
      <header className="py-6">
        <nav className="wrap glass rounded-full px-4 py-3">
          <Link href="/" className="font-black text-[var(--color-plum)] underline">Inicio</Link>
        </nav>
        <div className="wrap mt-12">
          <p className="eyebrow">Metodo</p>
          <h1 className="display mt-4 max-w-4xl">Escuchar bien cambia el taller.</h1>
          <p className="lead mt-6 max-w-2xl">Mi forma de trabajo empieza con una conversacion honesta. Desde ahi ordeno ideas, preparo materiales y acompano al grupo hasta que pueda avanzar por su cuenta.</p>
        </div>
      </header>
      <main>
        <section className="section">
          <div className="wrap grid gap-4 md:grid-cols-4">
            {steps.map(([title, body], index) => (
              <article key={title} className="glass lift rounded-[22px] p-6">
                <p className="text-sm font-black text-[var(--color-violet)]">0{index + 1}</p>
                <h2 className="mt-10 text-3xl font-black text-[var(--color-plum)]">{title}</h2>
                <p className="mt-3 text-[var(--color-muted)]">{body}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="section pt-0">
          <div className="wrap evidence-surface p-6 sm:p-10">
            <p className="eyebrow">Herramientas</p>
            <h2 className="section-title mt-3">Herramientas sencillas para conversaciones importantes.</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {tools.map((tool) => <span key={tool} className="pill glass">{tool}</span>)}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
