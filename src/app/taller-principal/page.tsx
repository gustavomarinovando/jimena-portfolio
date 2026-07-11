import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import tallerPrincipal from "@/data/taller-principal.json";

export const metadata = {
  title: `${tallerPrincipal.title} | Jimena Ovando`,
  description: tallerPrincipal.hook,
};

export default function TallerPrincipalPage() {
  return (
    <>
      <header className="relative overflow-hidden py-6">
        <nav className="wrap glass rounded-full px-4 py-3">
          <Link href="/" className="font-black text-[var(--color-plum)] underline">Inicio</Link>
        </nav>
        <div className="wrap mt-10 max-w-3xl">
          <p className="eyebrow">{tallerPrincipal.meta}</p>
          <h1 className="display mt-4">{tallerPrincipal.title}</h1>
          <p className="lead mt-5">{tallerPrincipal.hook}</p>
          <p className="mt-4 text-[var(--color-muted)]">{tallerPrincipal.intro}</p>
        </div>
      </header>

      <main>
        {tallerPrincipal.days.map((day, dayIndex) => {
          const offset = tallerPrincipal.days.slice(0, dayIndex).reduce((sum, d) => sum + d.moments.length, 0);

          return (
            <section key={day.id} className="section" aria-labelledby={`${day.id}-title`}>
              <div className="wrap">
                <div className="taller-day-heading">
                  <h2 id={`${day.id}-title`} className="taller-day-label">{day.label}</h2>
                  <span className="taller-day-date">{day.date}</span>
                </div>
                <div className="taller-moments">
                  {day.moments.map((moment, momentIndex) => (
                    <Reveal key={moment.id}>
                      <div className="taller-moment">
                        <span className="taller-moment-badge" aria-hidden="true">
                          {offset + momentIndex + 1}
                        </span>
                        <div className="taller-moment-text">
                          <h3 className="text-xl font-black text-[var(--color-plum)]">{moment.title}</h3>
                          <p className="mt-2 text-[var(--color-muted)]">{moment.text}</p>
                        </div>
                        <div className="taller-moment-photos">
                          {Array.from({ length: moment.photoCount }).map((_, photoIndex) => (
                            <div key={photoIndex} className="taller-photo-placeholder" />
                          ))}
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </main>
    </>
  );
}
