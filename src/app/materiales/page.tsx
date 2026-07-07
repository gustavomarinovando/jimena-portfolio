import Link from "next/link";
import { MaterialBook } from "@/components/MaterialBook";
import materials from "@/data/materiales.json";

export const metadata = {
  title: "Materiales | Jimena Ovando Morales",
  description: "Publicaciones, cartillas, banners, radio, guías y sistematizaciones como herramientas de trabajo.",
};

export default function MaterialesPage() {
  const [featured, ...archive] = materials;

  return (
    <>
      <header className="py-6">
        <nav className="wrap glass rounded-full px-4 py-3">
          <Link href="/" className="font-black text-[var(--color-plum)] underline">Inicio</Link>
        </nav>
        <div className="wrap mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow">Archivo visual</p>
            <h1 className="section-title mt-4">Materiales para mirar y hojear.</h1>
          </div>
          <p className="lead max-w-2xl">
            Cartillas, guías, radio y sistematizaciones como piezas de trabajo:
            hechas para explicar, recordar y compartir aprendizajes.
          </p>
        </div>
      </header>

      <main className="section">
        <div className="wrap">
          <section className="material-feature" aria-labelledby="featured-material-title">
            <MaterialBook pages={featured.previewPages ?? []} stacked />
            <div>
              <p id="featured-material-title" className="lead max-w-xl">{featured.description}</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a className="button" href={featured.pdfPath} target="_blank" rel="noreferrer">Abrir PDF</a>
                <a className="button secondary glass" href={featured.pdfPath} download>Descargar</a>
              </div>
            </div>
          </section>

          <div className="mb-8 flex flex-wrap gap-2" aria-label="Categorias previstas">
            {["Publicacion", "Cartillas", "Banners", "Guias", "Radio", "Sistematizaciones"].map((label) => (
              <span key={label} className="pill glass">{label}</span>
            ))}
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {archive.map((item) => (
              <article key={item.id} className="object-card p-6">
                {item.type === "cuna" ? (
                  <div className="waveform absolute right-6 top-8">
                    {[20, 46, 32, 56, 26, 42, 34, 50].map((height, index) => <span key={index} style={{ height }} />)}
                  </div>
                ) : (
                  <div className="mock-doc" />
                )}
                <p className="eyebrow relative z-10">{item.type}</p>
                <h2 className="relative z-10 mt-28 max-w-[75%] text-2xl font-black text-[var(--color-plum)]">{item.title}</h2>
                <p className="relative z-10 mt-4 text-[var(--color-muted)]">{item.description}</p>
                <p className="relative z-10 mt-5 inline-flex rounded-full bg-[var(--color-lavender)] px-3 py-2 text-sm font-black text-[var(--color-plum)]">
                  Material de trabajo
                </p>
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
