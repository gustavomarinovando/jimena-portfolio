import Link from "next/link";
import { MaterialBook } from "@/components/MaterialBook";
import { ProducerGallery } from "@/components/ProducerGallery";
import { CunaPlayer } from "@/components/CunaPlayer";
import { TimelineOrgToggle } from "@/components/TimelineOrgToggle";
import { Reveal } from "@/components/Reveal";
import media from "@/data/media.json";
import video from "@/data/video.json";
import materials from "@/data/materiales.json";
import footer from "@/data/footer.json";
import trayectoria from "@/data/trayectoria.json";

const capabilityTiles = [
  ["Facilitar", "Talleres donde la gente conversa, pregunta y decide."],
  ["Acompañar", "Procesos que toman tiempo, escucha y presencia."],
  ["Comunicar", "Materiales y mensajes que se entienden sin rodeos."],
  ["Organizar", "Acuerdos, liderazgos y trabajo compartido."],
];

const capabilitySignals = [
  ["Territorio", "Comunidades, organizaciones y coordinación local, con los pies en el lugar."],
  ["Formación", "Talleres con mujeres, jóvenes y liderazgos comunitarios."],
  ["Género e inclusión", "Diagnósticos participativos, liderazgo de mujeres y trabajo con personas con discapacidad."],
  ["Réplica", "Cartillas, radio y materiales para que lo aprendido siga circulando."],
  ["Interculturalidad", "Diálogo comunitario y quechua para acercar la conversación."],
  ["Sistematización", "Documentar procesos y aprendizajes para que la organización los conserve y los use después."],
];

// TODO(jimena): placeholder lorem ipsum captions - swap for real copy once
// she confirms what each group/product actually is.
const producerGroups = [
  { slug: "agrocaine", name: "Agrocaine", caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { slug: "apanp", name: "APANP", caption: "Sed do eiusmod tempor incididunt ut labore et dolore magna." },
  { slug: "apec-t", name: "APEC-T", caption: "Ut enim ad minim veniam, quis nostrud exercitation ullamco." },
  { slug: "astricha", name: "Astricha", caption: "Duis aute irure dolor in reprehenderit in voluptate velit." },
  { slug: "san-carlos", name: "San Carlos", caption: "Excepteur sint occaecat cupidatat non proident, sunt in culpa." },
];

const method = [
  ["Escuchar", "Llegar primero a entender el contexto y a las personas."],
  ["Construir", "Ordenar ideas, necesidades y acuerdos con el grupo."],
  ["Facilitar", "Volver cercanos los temas difíciles."],
  ["Multiplicar", "Dejar herramientas para que el aprendizaje continúe."],
];

export default function Home() {
  return (
    <>
      <div className="hero-wash relative">
        <nav className="wrap glass sticky top-3 z-40 mt-4 hidden items-center justify-between rounded-full px-4 py-3 sm:mt-6 sm:flex">
          <Link href="/" className="nav-monogram" aria-label="Jimena Ovando - inicio">
            <span className="nav-monogram-initials" aria-hidden="true">JO</span>
            <span className="nav-monogram-full" aria-hidden="true">Jimena Ovando</span>
          </Link>
          <div className="hidden gap-2 sm:flex">
            <Link className="pill" href="#trayectoria">Trayectoria</Link>
            <Link className="pill" href="#video">Video</Link>
            <Link className="pill" href="#materiales">Materiales</Link>
            <span className="pill-group">
              <Link className="pill" href="#contacto">Contacto</Link>
              <a className="whatsapp-icon-link" href="https://wa.me/59170799201" target="_blank" rel="noreferrer" aria-label="Chatear por WhatsApp">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d={whatsappIconPath} />
                </svg>
              </a>
            </span>
          </div>
        </nav>

        <header className="relative pb-3 pt-3 sm:pb-4">
          <div className="wrap relative z-10 mt-6 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal className="hero-stack">
              <h1 className="display hero-name" aria-label="Jimena Ovando">
                <span className="hero-name-mask">
                  <span className="hero-name-text hero-name-line">Jimena</span>
                </span>
                <span className="hero-name-mask">
                  <span className="hero-name-text hero-name-line">Ovando</span>
                </span>
              </h1>
              <p className="eyebrow hero-eyebrow hero-eyebrow-centered mt-4">Socióloga · Comunicadora Social</p>
              <p className="lead hero-subtitle mt-4 max-w-xl">
                <span className="block">Educación popular, participación y comunicación.</span>
                <span className="block">Trabajo con comunidades, grupos e instituciones.</span>
              </p>
              <div className="hero-cta mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link className="button w-full sm:w-auto" href="#trayectoria">Ver trayectoria</Link>
                <Link className="button secondary glass w-full sm:w-auto" href="#video">Ver presentación</Link>
              </div>
            </Reveal>

            <Reveal className="evidence-surface min-h-[280px] p-5 sm:p-6 lg:min-h-0" delayMs={180}>
              <div className="photo-slot hero-photo h-full min-h-[240px] sm:min-h-[262px]">
                <div className="hero-photo-label absolute left-4 top-4 z-10 rounded-full bg-[var(--color-sun)] px-4 py-2 text-sm font-black text-[var(--color-plum)] sm:left-6 sm:top-6">
                  En taller, con la gente
                </div>
              </div>
            </Reveal>
          </div>
        </header>
      </div>

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
                  <article className="glass lift h-full rounded-[22px] p-5">
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

        <section className="section-wash section pt-2" aria-labelledby="fit-title">
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
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {capabilitySignals.map(([title, body], index) => (
                <Reveal key={title} delayMs={index * 80}>
                  <article className="glass lift h-full rounded-[22px] p-5">
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
                  Estado: video en preparación
                </p>
              </div>
            </Reveal>
            <Reveal delayMs={120} className="evidence-surface p-5">
              <div className="relative min-h-[280px] rounded-[20px] bg-[var(--color-plum)] p-6 text-white sm:min-h-[360px]">
                <div className="absolute left-8 top-8 rounded-full bg-[var(--color-sun)] px-4 py-2 text-sm font-black text-[var(--color-plum)]">
                  {video.durationLabel}
                </div>
                <button className="absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-0 bg-[var(--color-sun)] text-sm font-black uppercase tracking-normal text-[var(--color-plum)] shadow-2xl" type="button" aria-label="Video en preparación" disabled>
                  <span aria-hidden="true">pronto</span>
                </button>
                <div className="absolute inset-x-6 bottom-6 rounded-[18px] bg-white/12 p-4 backdrop-blur-xl">
                  <h3 className="text-2xl font-black">{video.title}</h3>
                  <p className="mt-1 text-white/75">Sin autoplay. Con soporte previsto para subtítulos y transcripción.</p>
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
                  <p className="eyebrow">Trabajo en imágenes</p>
                  <h2 id="mosaic-title" className="section-title mt-3">La experiencia se tiene que poder ver.</h2>
                </div>
              </Reveal>
              <Reveal delayMs={120}>
                <p className="max-w-md text-[var(--color-muted)]">
                  Talleres, comunidad, formación y materiales en terreno: así se documenta el trabajo, actividad por actividad.
                </p>
              </Reveal>
            </div>
            <div className="grid gap-4 lg:grid-cols-4 lg:grid-rows-[220px_220px]">
              {media.photoSlots.slice(1).map((slot, index) => (
                <Reveal key={slot.id} delayMs={index * 80} className={index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}>
                  <article className="photo-slot h-full">
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

        <section id="trayectoria" className="section-wash section" aria-labelledby="trajectory-title">
          <div className="wrap">
            <div className="section-heading">
              <p className="eyebrow">Trayectoria</p>
              <span className="section-accent" aria-hidden="true" />
              <h2 id="trajectory-title" className="section-title mt-3">Roles que muestran una misma forma de trabajar.</h2>
            </div>
            <div className="mt-9 timeline">
              {trayectoria.map((node, index) => (
                <Reveal key={`${node.period}-${node.organization}-${node.role}`} delayMs={index * 60}>
                  <div className="timeline-item">
                    <span className={`timeline-badge ${node.color}`} aria-hidden="true">
                      {node.logo ? (
                        <img src={`/logos/${node.logo}.jpg`} alt="" loading="lazy" />
                      ) : (
                        orgInitials(node.organization)
                      )}
                    </span>
                    <div className="timeline-card">
                      <p className="eyebrow">{node.period} · {node.organization}</p>
                      <h3 className="mt-2 text-xl font-black text-[var(--color-plum)]">{node.role}</h3>
                      <p className="mt-2 text-[var(--color-muted)]">{timelineLine(node)}</p>
                      {node.orgDescription ? <TimelineOrgToggle organization={node.organization} description={node.orgDescription} /> : null}
                    </div>
                    {node.orgDescription ? (
                      <div className="timeline-extra">
                        <p className="timeline-extra-label">Sobre la organización</p>
                        <p className="timeline-extra-org">{node.orgDescription}</p>
                      </div>
                    ) : null}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="materiales" className="section" aria-labelledby="materials-title">
          <div className="wrap">
            <Reveal>
              <div className="max-w-2xl">
                <p className="eyebrow">Materiales que dejan huella</p>
                <h2 id="materials-title" className="section-title mt-3">Piezas que la gente sigue usando.</h2>
                <p className="lead mt-5">
                  Cartillas, guías, audios y sistematizaciones pensados para que el aprendizaje no se quede en el taller:
                  se explican, se comparten y se vuelven a consultar.
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={100} className="mt-8">
              <div className="grid gap-4 lg:grid-cols-[0.65fr_0.35fr]">
                <article className="object-card p-6">
                  <MaterialBook pages={materials[0].previewPages ?? []} stacked />
                  <div className="relative z-10 mt-4 grid grid-cols-[1fr_auto] items-start gap-3 sm:gap-4">
                    <p className="text-sm text-[var(--color-muted)] sm:text-base">{materials[0].description}</p>
                    <a className="button shrink-0 px-4 text-sm sm:px-[1.12rem] sm:text-base" href={materials[0].pdfPath} target="_blank" rel="noreferrer">Abrir cartilla</a>
                  </div>
                </article>
                <div className="material-banner flex flex-col lg:justify-center">
                  <ProducerGallery groups={producerGroups} />
                </div>
              </div>
            </Reveal>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {materials.slice(1, 5).map((item, index) => {
                const cuna = item.audioTakes && item.script ? { audioTakes: item.audioTakes, script: item.script } : null;

                return (
                  <Reveal key={item.id} delayMs={index * 80}>
                    <article className={`object-card h-full p-5 ${cuna ? "flex flex-col" : ""}`}>
                      {!cuna ? <div className="mock-doc" /> : null}
                      <p className="eyebrow relative z-10">{item.type}</p>
                      <h3
                        className={`relative z-10 mt-4 text-xl font-black text-[var(--color-plum)] ${cuna ? "" : "mt-24 max-w-[70%] sm:mt-28"}`}
                      >
                        {item.title}
                      </h3>
                      <p className="relative z-10 mt-3 text-sm text-[var(--color-muted)]">{item.description}</p>
                      {cuna ? (
                        <div className="relative z-10 mt-4">
                          <CunaPlayer takes={cuna.audioTakes} script={cuna.script} />
                        </div>
                      ) : null}
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-wash section" aria-labelledby="method-title">
          <div className="wrap">
            <div className="section-heading">
              <p className="eyebrow">Método en cuatro verbos</p>
              <span className="section-accent" aria-hidden="true" />
              <h2 id="method-title" className="section-title mt-3">Escuchar. Construir. Facilitar. Multiplicar.</h2>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-4">
              {method.map(([title, body], index) => (
                <Reveal key={title} delayMs={index * 80}>
                  <article className="glass lift h-full rounded-[22px] p-5">
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

      <footer id="contacto" className="section pb-10 pt-12">
        <div className="wrap glass rounded-[28px] p-6 sm:p-8">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-3xl font-black text-[var(--color-plum)]">Jimena Ovando</h2>
              <p className="mt-2 text-[var(--color-muted)]">Educación popular, comunicación y trabajo territorial.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a className="button" href={`mailto:${footer.contact.email}`}>Contacto</a>
              <a className="pill-whatsapp" href="https://wa.me/59170799201" target="_blank" rel="noreferrer" aria-label="Chatear por WhatsApp">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d={whatsappIconPath} />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

// Simple, flat glyph (no shading/bulk) - the standard minimal WhatsApp mark.
const whatsappIconPath =
  "M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.35 5.08L2 22l5.08-1.32A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2Zm5.2 14.2c-.22.62-1.28 1.18-1.77 1.24-.45.06-1.02.08-1.65-.1-.38-.11-.87-.28-1.5-.55-2.64-1.14-4.36-3.8-4.5-3.98-.13-.18-1.08-1.44-1.08-2.75 0-1.3.68-1.94.93-2.2.24-.27.53-.33.7-.33.18 0 .35 0 .5.01.16.01.38-.06.6.45.22.53.75 1.83.82 1.96.07.14.11.3.02.48-.09.18-.14.29-.27.45-.14.16-.29.36-.41.48-.14.14-.28.29-.12.56.16.27.71 1.17 1.53 1.89 1.05.94 1.94 1.23 2.21 1.37.27.14.43.11.59-.07.16-.18.68-.79.86-1.06.18-.27.36-.22.6-.13.24.09 1.53.72 1.79.85.26.13.43.2.5.31.07.11.07.63-.15 1.25Z";

const timelineCopy: Record<string, string> = {
  "2025|Radio Urbana": "Estrategias de publicidad y mensajes de marketing para audiencias masivas, con la misma lógica de comunicación clara que en el trabajo comunitario.",
  "2023-2024|INDICEP": "Diagnósticos participativos y espacios de formación en género e interculturalidad, fortaleciendo liderazgos y participación equitativa.",
  "2021-2023|CIPCA Regional Cochabamba": "Acompañamiento técnico-social a comunidades, diseño de cartillas y cuñas radiales, y coordinación con gobiernos municipales.",
  "2019-2020|Constructora Mendieta": "Capacitación en desarrollo comunitario y gestión ambiental familiar para familias de vivienda social.",
  "2018-2020|ASODIFIM-CO": "Procesos formativos de liderazgo e incidencia junto a personas con discapacidad, con materiales impresos y audiovisuales de sensibilización.",
  "2015-2016|CIPCA Regional Cochabamba": "Fortalecimiento organizativo, gestión de demandas territoriales y sistematización de experiencias con mujeres y jóvenes.",
  "2013-2015|INDICEP": "Educación popular en derechos, territorio y ambiente, con formación de líderes comunitarios y diálogo intercultural.",
};

function timelineLine(node: { period: string; organization: string; relevanceTag: string }) {
  return timelineCopy[`${node.period}|${node.organization}`] ?? node.relevanceTag;
}

function orgInitials(name: string) {
  const [first, second] = name.split(/\s+/);
  if (first && first === first.toUpperCase() && first.length > 1) {
    return first.slice(0, 2);
  }
  return `${first?.[0] ?? ""}${second?.[0] ?? ""}`.toUpperCase();
}
