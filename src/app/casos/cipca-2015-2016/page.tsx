import data from "@/data/case-studies/cipca-2015-2016.json";
import { CaseReport } from "../CaseReport";

export const metadata = {
  title: "CIPCA 2015-2016 | Caso de estudio",
  description: "Caso de estudio en revision de evidencia: CIPCA Regional Cochabamba 2015-2016.",
};

export default function Page() {
  return <CaseReport data={data} />;
}
