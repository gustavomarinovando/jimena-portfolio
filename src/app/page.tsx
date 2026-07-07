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

const vacancySignals = [
  ["Ambiente cotidiano", "Agua, energia, residuos y cuidado del entorno familiar."],
  ["Territorio", "Comunidades, OTBs, organizaciones y coordinacion local."],
  ["Formacion", "Talleres con mujeres, jovenes y liderazgos comunitarios."],
  ["Replica", "Cartillas, radio y materiales para compartir aprendizajes."],
  ["Interculturalidad", "Dialogo comunitario y Quechua avanzado."],
];

const method = [
  ["Escuchar", "Partir del contexto y de la voz de la gente."],
  ["Construir", "Ordenar acuerdos, necesidades y saberes locales."],
  ["Facilitar", "Convertir temas complejos en aprendizaje comun."],
  ["Multiplicar", "Dejar materiales, liderazgos y rutas de replica."],
];

export default function Home() {
  return (
    <>
      <header className="relative overflow-hidden pb-3 pt-6 sm:pb-4">
        <nav className="wrap glass relative z-10 hidden items-center justify-between rounded-full px-4 py-3 sm:flex">
          <Link href="/" className="px-2 font-black text-[var(--color-plum)] no-underline">Portafolio visual de evidencia</Link>
          <div className="hidden gap-2 sm:flex">
            <Link className="pill" href="#casos">Casos</Link>
            <Link className="pill" href="#video">Video</Link>
            <Link className="pill" href="#materiales">Materiales</Link>
          </div>
        </nav>

        <div className="wrap relative z-10 mt-8 grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="reveal">
            <p className="eyebrow">Portafolio profesional</p>
            <h1 className="display mt-4">Jimena Ovando</h1>
            <p className="lead mt-6 max-w-xl">
              <span className="block">Educacion popular, participacion y comunicacion.</span>
              <span className="block">Trabajo con comunidades, grupos e instituciones.</span>
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link className="button w-full sm:w-auto" href="#casos">Ver casos</Link>
              <Link className="button secondary glass w-full sm:w-auto" href="#video">Ver presentacion</Link>
            </div>
          </div>

          <div className="evidence-surface min-h-[280px] p-5 sm:min-h-[310px] sm:p-6">
            <div className="photo-slot hero-photo h-full min-h-[240px] sm:min-h-[262px]">
              <div className="hero-photo-label absolute left-4 top-4 z-10 rounded-full bg-[var(--color-sun)] px-4 py-2 text-sm font-black text-[var(--color-plum)] sm:left-6 sm:top-6">
                Trabajo en territorio
              </div>
              <div className="hero-photo-caption">
                <p className="text-xs font-black uppercase tracking-normal text-[var(--color-sun)]">Evidencia visual</p>
                <p className="mt-1 text-sm font-black sm:text-base">Facilito grupos en territorio.</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="section section-tight" aria-labelledby="proof-title">
          <div className="wrap">
            <h2 id="proof-title" className="text-4xl font-black leading-tight text-[var(--color-plum)] sm:text-5xl">Lo que aporto en campo.</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
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

        <section className="section pt-2" aria-labelledby="fit-title">
          <div className="wrap grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div>
              <p className="eyebrow">Capacidades profesionales</p>
              <h2 id="fit-title" className="section-title mt-3">Entrar a territorio, formar grupos y dejar herramientas.</h2>
              <p className="lead mt-5">
                Mi aporte esta en convertir temas complejos en procesos participativos:
                escuchar, explicar, organizar y producir materiales utiles para la comunidad.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {vacancySignals.map(([title, body]) => (
                <article key={title} className="glass lift rounded-[22px] p-5">
                  <h3 className="text-xl font-black text-[var(--color-plum)]">{title}</h3>
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

        <section id="casos" className="section" aria-labelledby="stories-title">
          <div className="wrap">
            <p className="eyebrow">Historias seleccionadas</p>
            <h2 id="stories-title" className="section-title mt-3">Casos que muestran como trabajo.</h2>
            <div className="mt-9 grid gap-5 md:grid-cols-2">
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
              <h2 id="materials-title" className="section-title mt-3">Un archivo que se pueda hojear.</h2>
              <p className="lead mt-5">
                Cuando integre fotos, banners o una pequena publicacion, cada pieza debe mostrar:
                portada, contexto, mi rol y posibilidad de revisar el material.
              </p>
              <Link className="button mt-7" href="/materiales">Ver archivo</Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <article className="object-card min-h-[420px] p-6 sm:col-span-2">
                <div className="absolute right-7 top-7 hidden h-64 w-40 rotate-3 rounded-[18px] bg-[var(--color-lavender)] shadow-2xl sm:block" />
                <div className="absolute right-16 top-14 hidden h-64 w-40 -rotate-6 rounded-[18px] bg-[var(--color-sun)] shadow-xl sm:block" />
                <div className="absolute right-11 top-12 hidden h-64 w-40 rotate-1 rounded-[18px] bg-[var(--color-paper)] shadow-2xl sm:block">
                  <div className="h-20 rounded-t-[18px] bg-[var(--color-violet)]" />
                  <div className="space-y-3 p-5">
                    <span className="block h-3 w-24 rounded-full bg-[var(--color-lilac)]" />
                    <span className="block h-3 w-20 rounded-full bg-[var(--color-lilac)]" />
                    <span className="block h-16 rounded-[12px] bg-[var(--color-blush)]" />
                  </div>
                </div>
                <p className="eyebrow relative z-10">{materials[0].type}</p>
                <h3 className="relative z-10 mt-24 max-w-sm text-3xl font-black text-[var(--color-plum)] sm:mt-32">
                  {materials[0].title}
                </h3>
                <p className="relative z-10 mt-4 max-w-md text-[var(--color-muted)]">{materials[0].description}</p>
              </article>
              {materials.slice(1, 5).map((item, index) => (
                <article key={item.id} className="object-card p-5">
                  {item.type === "cuna" ? (
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
                <p className="relative z-10 mt-3 text-sm text-[var(--color-muted)]">{index < 2 ? "Listo para integrar archivo real." : "Listo para metadata final."}</p>
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
  if (id.includes("mendieta")) return "Vivienda social y gestion ambiental familiar";
  return "Organizacion, mujeres y jovenes";
}

function storyLine(id: string) {
  if (id.includes("2021")) return "Acompano procesos de liderazgo y materiales educativos junto a comunidades y organizaciones.";
  if (id.includes("indicep")) return "Facilito educacion comunitaria vinculada a territorio y ambiente, con temas especificos por precisar.";
  if (id.includes("mendieta")) return "Capacito a familias en agua, energia, residuos y cuidado del entorno en proyectos de vivienda social.";
  return "Coordino, sistematizo y acompano procesos territoriales con enfoque participativo.";
}
