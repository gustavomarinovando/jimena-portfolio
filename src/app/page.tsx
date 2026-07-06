import Link from "next/link";
import media from "@/data/media.json";
import video from "@/data/video.json";
import caseStudies from "@/data/case-studies-summary.json";
import materials from "@/data/materiales.json";
import footer from "@/data/footer.json";

const capabilityTiles = [
  ["Facilitar", "Talleres, dialogo y aprendizaje compartido."],
  ["Acompanar", "Procesos comunitarios y organizativos."],
  ["Comunicar", "Cartillas, cunas, guias y mensajes claros."],
  ["Organizar", "Liderazgos, acuerdos y participacion local."],
];

const method = [
  ["Escuchar", "Partir del contexto y de la voz de la gente."],
  ["Construir", "Ordenar acuerdos, necesidades y saberes locales."],
  ["Facilitar", "Convertir temas complejos en aprendizaje comun."],
  ["Multiplicar", "Dejar materiales, liderazgos y rutas de replica."],
];

export default function Home() {
  const heroSlot = media.photoSlots[0];

  return (
    <>
      <header className="relative overflow-hidden pb-16 pt-6 sm:pb-24">
        <nav className="wrap glass relative z-10 hidden items-center justify-end rounded-full px-4 py-3 sm:flex">
          <div className="hidden gap-2 sm:flex">
            <Link className="pill" href="#experiencias">Experiencias</Link>
            <Link className="pill" href="#video">Video</Link>
            <Link className="pill" href="#materiales">Materiales</Link>
          </div>
        </nav>

        <div className="wrap relative z-10 mt-12 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="reveal">
            <p className="eyebrow">Portafolio visual de evidencia</p>
            <h1 className="display mt-4">Jimena Ovando</h1>
            <p className="lead mt-6 max-w-xl">
              Educacion popular, participacion comunitaria y comunicacion que conecta.
              Trabajo construido junto a comunidades y organizaciones.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link className="button w-full sm:w-auto" href="#experiencias">Ver experiencias</Link>
              <Link className="button secondary glass w-full sm:w-auto" href="#video">Conocer su trabajo</Link>
            </div>
          </div>

          <div className="evidence-surface min-h-[340px] sm:min-h-[560px] p-5 sm:p-7">
            <div className="photo-slot h-full min-h-[300px] sm:min-h-[500px]">
              <div className="absolute left-6 top-6 z-10 rounded-full bg-[var(--color-sun)] px-4 py-2 text-sm font-black text-[var(--color-plum)]">
                {heroSlot.shortTitle}
              </div>
              <div className="absolute right-8 top-16 h-28 w-28 rounded-full bg-[var(--color-sun)] opacity-90 blur-[1px] float-soft" />
              <div className="absolute bottom-28 left-10 h-20 w-20 rounded-full bg-[var(--color-blush)] opacity-80 float-soft delay" />
              <div className="photo-caption">
                <p className="text-sm font-black uppercase tracking-normal text-[var(--color-sun)]">Foto principal pendiente</p>
                <p className="mt-2 text-lg font-black">{heroSlot.caption}</p>
                <p className="mt-2 text-sm text-white/82">
                  El espacio esta listo para una imagen autentica con metadata y permiso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="section pt-0" aria-labelledby="proof-title">
          <div className="wrap">
            <h2 id="proof-title" className="section-title max-w-3xl">Aprender se construye con la gente.</h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {capabilityTiles.map(([title, body], index) => (
                <article key={title} className="glass lift rounded-[22px] p-5" style={{ animationDelay: `${index * 70}ms` }}>
                  <div className="mb-5 h-12 w-12 rounded-full bg-[var(--color-sun)] text-center text-2xl leading-[3rem] text-[var(--color-plum)] float-soft">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-black text-[var(--color-plum)]">{title}</h3>
                  <p className="mt-2 text-[var(--color-muted)]">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="video" className="section" aria-labelledby="video-title">
          <div className="wrap grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="eyebrow">{video.kicker}</p>
              <h2 id="video-title" className="section-title mt-3">Mi forma de trabajar</h2>
              <p className="lead mt-5 max-w-2xl">{video.description}</p>
              <p className="mt-5 inline-flex rounded-full bg-[var(--color-lavender)] px-4 py-2 text-sm font-black text-[var(--color-plum)]">
                Estado: video en preparacion
              </p>
            </div>
            <div className="evidence-surface p-5">
              <div className="relative min-h-[280px] rounded-[20px] bg-[var(--color-plum)] p-6 text-white sm:min-h-[360px]">
                <div className="absolute left-8 top-8 rounded-full bg-[var(--color-sun)] px-4 py-2 text-sm font-black text-[var(--color-plum)]">
                  {video.durationLabel}
                </div>
                <button className="absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-0 bg-[var(--color-sun)] text-sm font-black uppercase tracking-normal text-[var(--color-plum)] shadow-2xl" type="button" aria-label="Video en preparacion" disabled>
                  <span aria-hidden="true">pronto</span>
                </button>
                <div className="absolute inset-x-6 bottom-6 rounded-[18px] bg-white/12 p-4 backdrop-blur-xl">
                  <h3 className="text-2xl font-black">{video.title}</h3>
                  <p className="mt-1 text-white/75">Sin autoplay. Con soporte previsto para subtitulos y transcripcion.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="mosaic-title">
          <div className="wrap">
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow">Evidencia visual</p>
                <h2 id="mosaic-title" className="section-title mt-3">Lo que debe verse en segundos</h2>
              </div>
              <p className="max-w-md text-[var(--color-muted)]">
                Estos espacios no inventan imagenes: esperan fotos reales, captions breves y permisos.
              </p>
            </div>
            <div className="grid gap-4 lg:grid-cols-4 lg:grid-rows-[220px_220px]">
              {media.photoSlots.slice(1).map((slot, index) => (
                <article
                  key={slot.id}
                  className={`photo-slot ${index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`}
                >
                  <div className="photo-caption">
                    <p className="text-xs font-black uppercase tracking-normal text-[var(--color-sun)]">{slot.category}</p>
                    <h3 className="mt-1 text-xl font-black">{slot.shortTitle}</h3>
                    <p className="mt-1 text-sm text-white/82">{slot.caption}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experiencias" className="section" aria-labelledby="stories-title">
          <div className="wrap">
            <p className="eyebrow">Tres historias seleccionadas</p>
            <h2 id="stories-title" className="section-title mt-3">Experiencia que se puede mirar, ordenar y verificar</h2>
            <div className="mt-9 grid gap-5 lg:grid-cols-3">
              {caseStudies.map((study, index) => (
                <article key={study.id} className="object-card p-6">
                  <div className="absolute inset-x-0 top-0 h-28 bg-[var(--color-lavender)]" />
                  <div className="relative z-10 mb-10 h-36 rounded-[18px] bg-[var(--color-violet)] p-4 text-white">
                    <p className="text-sm font-black text-[var(--color-sun)]">Caso {index + 1}</p>
                    <p className="mt-12 text-lg font-black">{study.organization}</p>
                  </div>
                  <p className="eyebrow">{study.period}</p>
                  <h3 className="mt-2 text-2xl font-black text-[var(--color-plum)]">{storyTitle(study.id)}</h3>
                  <p className="mt-3 text-[var(--color-muted)]">{storyLine(study.id)}</p>
                  <Link className="button mt-6" href={`/casos/${study.id}`}>Ver experiencia</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="materiales" className="section" aria-labelledby="materials-title">
          <div className="wrap grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="eyebrow">Materiales como objetos</p>
              <h2 id="materials-title" className="section-title mt-3">Cartillas, guias, radio y sistematizacion.</h2>
              <p className="lead mt-5">
                El archivo visual esta preparado para mostrar trabajo real. Los titulos y archivos permanecen pendientes hasta que Jimena los entregue.
              </p>
              <Link className="button mt-7" href="/materiales">Ver archivo</Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {materials.slice(0, 4).map((item, index) => (
                <article key={item.id} className="object-card p-5">
                  {item.type === "cuña" ? (
                    <div className="waveform absolute right-6 top-7">
                      {[22, 44, 30, 52, 26, 48, 34].map((height, i) => <span key={i} style={{ height }} />)}
                    </div>
                  ) : (
                    <div className="mock-doc" />
                  )}
                  <p className="eyebrow relative z-10">{item.type}</p>
                  <h3 className="relative z-10 mt-24 max-w-[70%] text-xl font-black text-[var(--color-plum)] sm:mt-28">
                    {item.title}
                  </h3>
                  <p className="relative z-10 mt-3 text-sm text-[var(--color-muted)]">{index < 2 ? "Objeto pendiente de archivo real." : "Metadata pendiente."}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="method-title">
          <div className="wrap">
            <p className="eyebrow">Metodo en cuatro verbos</p>
            <h2 id="method-title" className="section-title mt-3">Escuchar. Construir. Facilitar. Multiplicar.</h2>
            <div className="mt-10 grid gap-4 md:grid-cols-4">
              {method.map(([title, body], index) => (
                <article key={title} className="glass lift rounded-[22px] p-5">
                  <p className="text-sm font-black text-[var(--color-violet)]">0{index + 1}</p>
                  <h3 className="mt-8 text-2xl font-black text-[var(--color-plum)]">{title}</h3>
                  <p className="mt-2 text-[var(--color-muted)]">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="section pb-10 pt-12">
        <div className="wrap glass rounded-[28px] p-6 sm:p-8">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-3xl font-black text-[var(--color-plum)]">Jimena Ovando</h2>
              <p className="mt-2 text-[var(--color-muted)]">Educacion popular, comunicacion y trabajo territorial.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a className="button" href={`mailto:${footer.contact.email}`}>Contacto</a>
              <Link className="button secondary" href="/trayectoria">Trayectoria</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

function storyTitle(id: string) {
  if (id.includes("2021")) return "Educacion popular en territorio";
  if (id.includes("indicep")) return "Ambiente, derechos y replica";
  return "Organizacion, mujeres y jovenes";
}

function storyLine(id: string) {
  if (id.includes("2021")) return "Acompanamiento, liderazgo y materiales educativos junto a comunidades y organizaciones.";
  if (id.includes("indicep")) return "Experiencia con educacion comunitaria y ambiente, con temas especificos aun por confirmar.";
  return "Coordinacion municipal, sistematizacion y procesos territoriales con enfoque participativo.";
}
