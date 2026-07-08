import Link from "next/link";
import { MaterialBook } from "@/components/MaterialBook";
import { Reveal } from "@/components/Reveal";
import media from "@/data/media.json";
import video from "@/data/video.json";
import caseStudies from "@/data/case-studies-summary.json";
import materials from "@/data/materiales.json";
import footer from "@/data/footer.json";

const capabilityTiles = [
  ["Facilitar", "Talleres donde la gente conversa, pregunta y decide."],
  ["Acompañar", "Procesos que toman tiempo, escucha y presencia."],
  ["Comunicar", "Materiales y mensajes que se entienden sin rodeos."],
  ["Organizar", "Acuerdos, liderazgos y trabajo compartido."],
];

const vacancySignals = [
  ["Cuidado cotidiano", "Agua, energía, residuos y entorno familiar explicados desde la vida diaria."],
  ["Territorio", "Comunidades, organizaciones y coordinación local, con los pies en el lugar."],
  ["Formación", "Talleres con mujeres, jóvenes y liderazgos comunitarios."],
  ["Replica", "Cartillas, radio y materiales para que lo aprendido siga circulando."],
  ["Interculturalidad", "Dialogo comunitario y Quechua para acercar la conversacion."],
];

const method = [
  ["Escuchar", "Llegar primero a entender el contexto y a las personas."],
  ["Construir", "Ordenar ideas, necesidades y acuerdos con el grupo."],
  ["Facilitar", "Volver cercanos los temas difíciles."],
  ["Multiplicar", "Dejar herramientas para que el aprendizaje continue."],
];

export default function Home() {
  return (
    <>
      <header className="relative overflow-hidden pb-3 pt-6 sm:pb-4">
        <nav className="wrap glass relative z-10 hidden items-center justify-between rounded-full px-4 py-3 sm:flex">
          <Link href="/" className="px-2 font-black text-[var(--color-plum)] no-underline">Portafolio profesional</Link>
          <div className="hidden gap-2 sm:flex">
            <Link className="pill" href="#casos">Casos</Link>
            <Link className="pill" href="#video">Video</Link>
            <Link className="pill" href="#materiales">Materiales</Link>
          </div>
        </nav>

        <div className="wrap relative z-10 mt-8 grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal className="hero-stack">
            <p className="eyebrow hero-eyebrow">Portafolio profesional</p>
            <span className="hero-accent" aria-hidden="true" />
            <h1 className="display hero-name mt-4" aria-label="Jimena Ovando">Jimena Ovando</h1>
            <p className="lead hero-subtitle mt-6 max-w-xl">
              <span className="block">Educación popular, participación y comunicación.</span>
              <span className="block">Trabajo con comunidades, grupos e instituciones.</span>
            </p>
            <div className="hero-cta mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link className="button w-full sm:w-auto" href="#casos">Ver casos</Link>
              <Link className="button secondary glass w-full sm:w-auto" href="#video">Ver presentacion</Link>
            </div>
          </Reveal>

          <Reveal className="evidence-surface min-h-[280px] p-5 sm:min-h-[310px] sm:p-6" delayMs={180}>
            <div className="photo-slot hero-photo h-full min-h-[240px] sm:min-h-[262px]">
              <div className="hero-photo-label absolute left-4 top-4 z-10 rounded-full bg-[var(--color-sun)] px-4 py-2 text-sm font-black text-[var(--color-plum)] sm:left-6 sm:top-6">
                En taller, con la gente
              </div>
            </div>
          </Reveal>
        </div>
      </header>

      <main>
        <section className="section section-tight" aria-labelledby="proof-title">
          <div className="wrap">
            <div className="section-heading">
              <p className="eyebrow">Lo que aporto</p>
              <span className="section-accent" aria-hidden="true" />
              <h2 id="proof-title" className="text-4xl font-black leading-tight text-[var(--color-plum)] sm:text-5xl">Lo que aporto en campo.</h2>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {capabilityTiles.map(([title, body], index) => (
                <Reveal key={title} delayMs={index * 80}>
                  <article className="glass lift rounded-[22px] p-5">
                    <div className="mb-5 h-12 w-12 rounded-full bg-[var(--color-sun)] text-center text-2xl leading-[3rem] text-[var(--color-plum)] float-soft">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-black text-[var(--color-plum)]">{title}</h3>
                    <p className="mt-2 text-[var(--color-muted)]">{body}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section pt-2" aria-labelledby="fit-title">
          <div className="wrap grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <Reveal>
              <div>
                <p className="eyebrow">Capacidades profesionales</p>
                <h2 id="fit-title" className="section-title mt-3">Llegar, escuchar y trabajar con el grupo.</h2>
                <p className="lead mt-5">
                  Mi aporte está en hacer que los temas importantes bajen a la conversación:
                  escucharlos, explicarlos con calma y dejarlos en materiales que la gente pueda volver a usar.
                </p>
              </div>
            </Reveal>
            <div className="grid gap-3 sm:grid-cols-2">
              {vacancySignals.map(([title, body], index) => (
                <Reveal key={title} delayMs={index * 80}>
                  <article className="glass lift rounded-[22px] p-5">
                    <h3 className="text-xl font-black text-[var(--color-plum)]">{title}</h3>
                    <p className="mt-2 text-[var(--color-muted)]">{body}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="video" className="section" aria-labelledby="video-title">
          <div className="wrap grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal>
              <div>
                <p className="eyebrow">{video.kicker}</p>
                <h2 id="video-title" className="section-title mt-3">Mi forma de trabajar</h2>
                <p className="lead mt-5 max-w-2xl">{video.description}</p>
                <p className="mt-5 inline-flex rounded-full bg-[var(--color-lavender)] px-4 py-2 text-sm font-black text-[var(--color-plum)]">
                  Estado: video en preparacion
                </p>
              </div>
            </Reveal>
            <Reveal delayMs={120} className="evidence-surface p-5">
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
            </Reveal>
          </div>
        </section>

        <section className="section" aria-labelledby="mosaic-title">
          <div className="wrap">
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <Reveal>
                <div>
                  <p className="eyebrow">Trabajo en imagenes</p>
                  <h2 id="mosaic-title" className="section-title mt-3">La experiencia se tiene que poder ver.</h2>
                </div>
              </Reveal>
              <Reveal delayMs={120}>
                <p className="max-w-md text-[var(--color-muted)]">
                  Estoy ordenando el archivo de fotos y materiales. Mientras tanto, esta seccion muestra que tipo de trabajo debe aparecer aqui.
                </p>
              </Reveal>
            </div>
            <div className="grid gap-4 lg:grid-cols-4 lg:grid-rows-[220px_220px]">
              {media.photoSlots.slice(1).map((slot, index) => (
                <Reveal key={slot.id} delayMs={index * 80}>
                  <article className={`photo-slot ${index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`}>
                    <div className="photo-caption">
                      <p className="text-xs font-black uppercase tracking-normal text-[var(--color-sun)]">{slot.category}</p>
                      <h3 className="mt-1 text-xl font-black">{slot.shortTitle}</h3>
                      <p className="mt-1 text-sm text-white/82">{slot.caption}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="casos" className="section" aria-labelledby="stories-title">
          <div className="wrap">
            <div className="section-heading">
              <p className="eyebrow">Historias seleccionadas</p>
              <span className="section-accent" aria-hidden="true" />
              <h2 id="stories-title" className="section-title mt-3">Casos que muestran como trabajo.</h2>
            </div>
            <div className="mt-9 grid gap-5 md:grid-cols-2">
              {caseStudies.map((study, index) => (
                <Reveal key={study.id} delayMs={index * 80}>
                  <article className="object-card p-6">
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
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="materiales" className="section" aria-labelledby="materials-title">
          <div className="wrap grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <Reveal>
              <div>
                <p className="eyebrow">Materiales como objetos</p>
                <h2 id="materials-title" className="section-title mt-3">Materiales que no se quedan en una carpeta.</h2>
                <p className="lead mt-5">
                  Estoy reuniendo cartillas, guías, audios y sistematizaciones. La idea es mostrar cada pieza como se usó:
                  para explicar, recordar y compartir aprendizajes.
                </p>
              </div>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              <Reveal className="sm:col-span-2">
                <article className="object-card min-h-[420px] p-6 sm:col-span-2">
                  <MaterialBook pages={materials[0].previewPages ?? []} compact stacked />
                  <div className="relative z-10 mt-5">
                    <p className="max-w-md text-[var(--color-muted)]">{materials[0].description}</p>
                    <a className="button mt-6" href={materials[0].pdfPath} target="_blank" rel="noreferrer">Abrir cartilla</a>
                  </div>
                </article>
              </Reveal>
              {materials.slice(1, 5).map((item, index) => (
                <Reveal key={item.id} delayMs={index * 80}>
                  <article className="object-card p-5">
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
                    <p className="relative z-10 mt-3 text-sm text-[var(--color-muted)]">Material de trabajo y comunicación.</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="method-title">
          <div className="wrap">
            <div className="section-heading">
              <p className="eyebrow">Metodo en cuatro verbos</p>
              <span className="section-accent" aria-hidden="true" />
              <h2 id="method-title" className="section-title mt-3">Escuchar. Construir. Facilitar. Multiplicar.</h2>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-4">
              {method.map(([title, body], index) => (
                <Reveal key={title} delayMs={index * 80}>
                  <article className="glass lift rounded-[22px] p-5">
                    <p className="text-sm font-black text-[var(--color-violet)]">0{index + 1}</p>
                    <h3 className="mt-8 text-2xl font-black text-[var(--color-plum)]">{title}</h3>
                    <p className="mt-2 text-[var(--color-muted)]">{body}</p>
                  </article>
                </Reveal>
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
              <p className="mt-2 text-[var(--color-muted)]">Educación popular, comunicación y trabajo territorial.</p>
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
  if (id.includes("2021")) return "Educación popular en territorio";
  if (id.includes("indicep")) return "Ambiente, derechos y réplica";
  if (id.includes("mendieta")) return "Vivienda social y gestion ambiental familiar";
  return "Organización, mujeres y jóvenes";
}

function storyLine(id: string) {
  if (id.includes("2021")) return "Acompañé liderazgos, reuniones y materiales educativos junto a comunidades y organizaciones.";
  if (id.includes("indicep")) return "Trabajé educación comunitaria vinculada a derechos, territorio y ambiente.";
  if (id.includes("mendieta")) return "Acompañé a familias en vivienda social y cuidado cotidiano del entorno.";
  return "Acompañé procesos territoriales, acuerdos y aprendizajes compartidos.";
}
