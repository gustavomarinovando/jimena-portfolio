import data from "@/data/case-studies/cipca-2021-2023.json";
import { CaseReport } from "../CaseReport";

export const metadata = {
  title: "CIPCA 2021-2023 | Caso de estudio",
  description: "Caso de estudio en revision de evidencia: CIPCA Regional Cochabamba 2021-2023.",
};

export default function Page() {
  return <CaseReport data={data} />;
}
