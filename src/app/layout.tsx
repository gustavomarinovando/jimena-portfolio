import type { Metadata } from "next";
import { Fraunces, Space_Grotesk, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({ subsets: ["latin"], weight: ["600", "900"], variable: "--font-fraunces" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["500", "700"], variable: "--font-space-grotesk" });
const bricolage = Bricolage_Grotesque({ subsets: ["latin"], weight: ["600", "800"], variable: "--font-bricolage" });

export const metadata: Metadata = {
  title: "Jimena Ovando Morales | Portafolio profesional",
  description:
    "Portafolio profesional sobre educación popular, participación comunitaria y comunicación social.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`h-full antialiased ${fraunces.variable} ${spaceGrotesk.variable} ${bricolage.variable}`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
