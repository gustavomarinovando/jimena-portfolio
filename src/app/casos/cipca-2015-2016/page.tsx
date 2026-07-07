import data from "@/data/case-studies/cipca-2015-2016.json";
import { CaseReport } from "../CaseReport";

export const metadata = {
  title: "CIPCA 2015-2016 | Caso de estudio",
  description: "Organización, coordinación municipal y procesos con mujeres y jóvenes en CIPCA Regional Cochabamba.",
};

export default function Page() {
  return <CaseReport data={data} />;
}
