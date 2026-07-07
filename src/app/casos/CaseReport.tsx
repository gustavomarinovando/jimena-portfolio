import Link from "next/link";

type CaseData = {
  id: string;
  organization: string;
  role: string;
  period: { start: string; end: string };
  context: string;
  audience: string[];
  methodology: string[];
  activities: { description: string; output: string }[];
  relevance_girs: string[];
  evidence_status: string;
  environmental_topics: string;
  content_todos: string[];
};

export function CaseReport({ data }: { data: CaseData }) {
  return (
    <>
      <header className="relative overflow-hidden py-6">
        <nav className="wrap glass rounded-full px-4 py-3">
          <Link href="/" className="font-black text-[var(--color-plum)] underline">Inicio</Link>
        </nav>
        <div className="wrap mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="eyebrow">{data.period.start} - {data.period.end}</p>
            <h1 className="display mt-4">{data.organization}</h1>
            <p className="lead mt-5">{data.role}. {shortContext(data.context)}</p>
          </div>
          <div className="evidence-surface min-h-[360px] p-5">
            <div className="photo-slot min-h-[320px]">
              <div className="photo-caption">
                <p className="text-xs font-black uppercase tracking-normal text-[var(--color-sun)]">Trabajo en campo</p>
                <h2 className="text-2xl font-black">{storyTitle(data.id)}</h2>
                <p className="mt-2 text-sm text-white/82">Facilitacion, acompanamiento y materiales en contexto.</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="section" aria-labelledby="facts-title">
          <div className="wrap grid gap-5 md:grid-cols-3">
            <Fact title="Rol" body={data.role} />
            <Fact title="Audiencias" body={data.audience.slice(0, 3).join(", ")} />
            <Fact title="Archivo" body={data.evidence_status === "PARTIAL" ? "En documentacion" : "Documentado"} />
          </div>
        </section>

        <section className="section pt-6" aria-labelledby="actions-title">
          <div className="wrap grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow">Que hice</p>
              <h2 id="actions-title" className="section-title mt-3">Acciones visibles, sin relato largo.</h2>
              <p className="lead mt-5">{boundaryText(data.id)}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {data.activities.slice(0, 4).map((activity) => (
                <article key={activity.description} className="glass lift rounded-[22px] p-5">
                  <h3 className="text-xl font-black text-[var(--color-plum)]">{activity.description}</h3>
                    <p className="mt-3 text-[var(--color-muted)]">{publicOutput(activity.output)}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section pt-6" aria-labelledby="method-title">
          <div className="wrap">
            <p className="eyebrow">Metodo aplicado</p>
            <h2 id="method-title" className="section-title mt-3">Una practica de escucha, orden y acompanamiento.</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {data.methodology.slice(0, 5).map((item) => (
                <span key={item} className="pill glass">{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section pt-6" aria-labelledby="gallery-title">
          <div className="wrap">
            <p className="eyebrow">Galeria</p>
            <h2 id="gallery-title" className="section-title mt-3">Fotos, materiales y contexto.</h2>
            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {["Facilitacion", "Comunidad", "Materiales"].map((title) => (
                <article key={title} className="photo-slot min-h-[280px]">
                  <div className="photo-caption">
                    <h3 className="text-xl font-black">{title}</h3>
                    <p className="mt-1 text-sm text-white/82">Registro del proceso y de los materiales producidos.</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function Fact({ title, body }: { title: string; body: string }) {
  return (
    <article className="glass lift rounded-[22px] p-5">
      <p className="eyebrow">{title}</p>
      <p className="mt-3 text-xl font-black text-[var(--color-plum)]">{body}</p>
    </article>
  );
}

function storyTitle(id: string) {
  if (id.includes("2021")) return "Educacion popular en territorio";
  if (id.includes("indicep")) return "Ambiente y educacion comunitaria";
  if (id.includes("mendieta")) return "Gestion ambiental familiar";
  return "Organizacion y coordinacion municipal";
}

function boundaryText(id: string) {
  if (id.includes("indicep")) return "Esta experiencia conecta educacion comunitaria, territorio y temas ambientales desde una practica participativa.";
  if (id.includes("mendieta")) return "Acompane a familias en procesos de vivienda social, cuidado cotidiano del entorno y uso responsable de servicios basicos.";
  return "Esta experiencia muestra metodologia, territorio, organizacion y produccion de herramientas para procesos comunitarios.";
}

function shortContext(context: string) {
  return context.length > 150 ? `${context.slice(0, 147)}...` : context;
}

function publicOutput(output: string) {
  if (/por confirmar|pendiente/i.test(output)) {
    return "Proceso documentado en la experiencia; detalles especificos se presentan en el CV y materiales disponibles.";
  }

  return output;
}
