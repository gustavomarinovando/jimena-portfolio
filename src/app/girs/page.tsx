import Link from "next/link";

const bridge = [
  ["Experiencia existente", "Educacion popular, genero, comunicacion y territorio."],
  ["Aplicacion ambiental", "Materiales y procesos para comprender GIRS con la gente."],
  ["Validacion tecnica", "GERES, normativa municipal y piloto pequeno antes de ampliar."],
];

const audiences = ["Comunidades", "Mujeres", "Jovenes", "Unidades educativas"];

export const metadata = {
  title: "GIRS | Jimena Ovando Morales",
  description: "Puente visual entre experiencia educativa verificable y aplicacion futura a educacion ambiental.",
};

export default function GIRSPage() {
  return (
    <>
      <header className="py-6">
        <nav className="wrap glass rounded-full px-4 py-3">
          <Link href="/" className="font-black text-[var(--color-plum)] underline">Inicio</Link>
        </nav>
        <div className="wrap mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="eyebrow">GIRS y educacion ambiental</p>
            <h1 className="display mt-4">Un puente, no un sobreclaim.</h1>
          </div>
          <p className="lead max-w-2xl">
            La evidencia actual esta en metodologia participativa. La aplicacion a residuos debe validarse con contenido tecnico, contexto municipal y experiencias piloto.
          </p>
        </div>
      </header>
      <main>
        <section className="section">
          <div className="wrap grid gap-5 lg:grid-cols-3">
            {bridge.map(([title, body], index) => (
              <article key={title} className="glass lift rounded-[22px] p-6">
                <p className="text-sm font-black text-[var(--color-violet)]">0{index + 1}</p>
                <h2 className="mt-10 text-2xl font-black text-[var(--color-plum)]">{title}</h2>
                <p className="mt-3 text-[var(--color-muted)]">{body}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="section pt-0">
          <div className="wrap evidence-surface p-6 sm:p-10">
            <p className="eyebrow">Audiencias de aplicacion</p>
            <h2 className="section-title mt-3">La educacion ambiental se juega con personas concretas.</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {audiences.map((audience) => (
                <article key={audience} className="glass rounded-[22px] p-5">
                  <h3 className="text-2xl font-black text-[var(--color-plum)]">{audience}</h3>
                  <p className="mt-3 text-[var(--color-muted)]">Estrategia pendiente de diagnostico y validacion.</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section pt-0">
          <div className="wrap glass rounded-[28px] p-6 sm:p-8">
            <p className="eyebrow">Contexto local seguro</p>
            <h2 className="mt-3 text-3xl font-black text-[var(--color-plum)]">GERES, PCRO/PCRR, Educa Recicla y Ley 755 son contexto publico.</h2>
            <p className="lead mt-4">No se presentan como experiencia previa de Jimena. Funcionan como mapa de aprendizaje y coordinacion.</p>
          </div>
        </section>
      </main>
    </>
  );
}
