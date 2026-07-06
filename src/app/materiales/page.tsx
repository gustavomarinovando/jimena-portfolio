import Link from "next/link";
import materials from "@/data/materiales.json";

export const metadata = {
  title: "Materiales | Jimena Ovando Morales",
  description: "Archivo visual preparado para cartillas, manuales, cunas radiales, guias y sistematizaciones.",
};

export default function MaterialesPage() {
  return (
    <>
      <header className="py-6">
        <nav className="wrap glass rounded-full px-4 py-3">
          <Link href="/" className="font-black text-[var(--color-plum)] underline">Inicio</Link>
        </nav>
        <div className="wrap mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow">Archivo visual</p>
            <h1 className="display mt-4">Materiales que se pueden mirar.</h1>
          </div>
          <p className="lead max-w-2xl">
            Cartillas, guias, radio y sistematizaciones deben aparecer como objetos de trabajo. Por ahora, cada pieza queda marcada como pendiente hasta recibir archivo real.
          </p>
        </div>
      </header>

      <main className="section">
        <div className="wrap">
          <div className="mb-8 flex flex-wrap gap-2" aria-label="Categorias previstas">
            {["Cartillas", "Manuales", "Guias", "Radio", "Sistematizaciones", "Audiovisual"].map((label) => (
              <span key={label} className="pill glass">{label}</span>
            ))}
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {materials.map((item) => (
              <article key={item.id} className="object-card p-6">
                {item.type === "cuña" ? (
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
                  Archivo pendiente
                </p>
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
