import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jimena Ovando Morales | Portafolio CETM",
  description:
    "Portafolio de evidencia para la convocatoria Educadora Medioambientalista CETM Sacaba.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
