import Link from "next/link";
import trayectoria from "@/data/trayectoria.json";

export const metadata = {
  title: "Trayectoria | Jimena Ovando Morales",
  description: "Trayectoria resumida por relevancia, sin posicionarse por antiguedad no verificada.",
};

export default function TrayectoriaPage() {
  return (
    <>
      <header className="py-6">
        <nav className="wrap glass rounded-full px-4 py-3">
          <Link href="/" className="font-black text-[var(--color-plum)] underline">Inicio</Link>
        </nav>
        <div className="wrap mt-12">
          <p className="eyebrow">Trayectoria</p>
          <h1 className="display mt-4 max-w-5xl">Experiencias relevantes, no una carrera contada por antiguedad.</h1>
        </div>
      </header>
      <main className="section">
        <div className="wrap grid gap-4 md:grid-cols-2">
          {trayectoria.map((node) => (
            <article key={`${node.period}-${node.organization}`} className="glass lift rounded-[22px] p-6">
              <p className="eyebrow">{node.period}</p>
              <h2 className="mt-3 text-2xl font-black text-[var(--color-plum)]">{node.organization}</h2>
              <p className="mt-1 font-black text-[var(--color-violet)]">{node.role}</p>
              <p className="mt-4 text-[var(--color-muted)]">{node.relevanceTag}</p>
              {node.isCaseStudy && node.caseStudyId ? (
                <Link className="button mt-5" href={`/casos/${node.caseStudyId}`}>Ver caso</Link>
              ) : null}
            </article>
          ))}
        </div>
      </main>
    </>
  );
}
