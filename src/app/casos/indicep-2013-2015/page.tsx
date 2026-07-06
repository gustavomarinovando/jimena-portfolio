import data from "@/data/case-studies/indicerp-2013-2015.json";
import { CaseReport } from "../CaseReport";

export const metadata = {
  title: "INDICEP 2013-2015 | Caso de estudio",
  description: "Caso de estudio en revision de evidencia: INDICEP 2013-2015.",
};

export default function Page() {
  return <CaseReport data={data} />;
}
