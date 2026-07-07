import Link from "next/link";

const bridge = [
  ["Lo que ya traigo", "Educación popular, género, comunicación y trabajo territorial."],
  ["Donde puede crecer", "Materiales y procesos para hablar de residuos y cuidado ambiental con la gente."],
  ["Lo que falta ajustar", "Revisar normativa, escuchar al equipo técnico y probar primero en pequeño."],
];

const audiences = ["Comunidades", "Mujeres", "Jovenes", "Unidades educativas"];

export const metadata = {
  title: "GIRS | Jimena Ovando Morales",
  description: "Relación entre experiencia educativa, trabajo territorial y educación ambiental.",
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
            <p className="eyebrow">Educación ambiental</p>
            <h1 className="display mt-4">Aprender a cuidar tambien se conversa.</h1>
          </div>
          <p className="lead max-w-2xl">
            Mi experiencia no parte de slogans: parte de reunir personas, escuchar que pasa en su casa, su barrio o su comunidad, y convertir eso en aprendizajes posibles.
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
            <p className="eyebrow">Con quienes se trabaja</p>
            <h2 className="section-title mt-3">La educación ambiental ocurre con personas concretas.</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {audiences.map((audience) => (
                <article key={audience} className="glass rounded-[22px] p-5">
                  <h3 className="text-2xl font-black text-[var(--color-plum)]">{audience}</h3>
                  <p className="mt-3 text-[var(--color-muted)]">Cada grupo necesita ejemplos, palabras y ritmos distintos.</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section pt-0">
          <div className="wrap glass rounded-[28px] p-6 sm:p-8">
            <p className="eyebrow">Lo que sigo preparando</p>
            <h2 className="mt-3 text-3xl font-black text-[var(--color-plum)]">Estoy ordenando referencias técnicas y ejemplos locales.</h2>
            <p className="lead mt-4">Hay temas que prefiero presentar con cuidado: normativa, rutas municipales y materiales específicos deben revisarse con información actualizada.</p>
          </div>
        </section>
      </main>
    </>
  );
}
