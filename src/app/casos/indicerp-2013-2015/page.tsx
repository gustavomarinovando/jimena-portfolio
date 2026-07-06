import Link from "next/link";

export const metadata = {
  title: "Ruta corregida | INDICEP 2013-2015",
  description: "La ruta anterior tenia un error tipografico. Use /casos/indicep-2013-2015.",
};

export default function Page() {
  return (
    <main className="section">
      <div className="wrap glass rounded-[28px] p-8">
        <p className="eyebrow">Ruta anterior</p>
        <h1 className="section-title mt-4">La ruta correcta es INDICEP</h1>
        <p className="lead mt-3">
          Este enlace se conserva porque pudo haber sido compartido, pero el nombre correcto de la organizacion es INDICEP.
        </p>
        <Link className="button mt-6" href="/casos/indicep-2013-2015">
          Ir al caso corregido
        </Link>
      </div>
    </main>
  );
}
