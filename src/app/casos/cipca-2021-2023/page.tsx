import data from "@/data/case-studies/cipca-2021-2023.json";
import { CaseReport } from "../CaseReport";

export const metadata = {
  title: "CIPCA 2021-2023 | Caso de estudio",
  description: "Trabajo territorial, materiales educativos y acompanamiento comunitario con CIPCA Regional Cochabamba.",
};

export default function Page() {
  return <CaseReport data={data} />;
}
