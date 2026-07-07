import data from "@/data/case-studies/constructora-mendieta-2019-2020.json";
import { CaseReport } from "../CaseReport";

export const metadata = {
  title: "Constructora Mendieta 2019-2020 | Jimena Ovando",
  description: "Responsabilidad social, vivienda social y gestion ambiental familiar.",
};

export default function MendietaCasePage() {
  return <CaseReport data={data} />;
}
