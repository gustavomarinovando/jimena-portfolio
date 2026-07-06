export interface HeroData {
  name: string;
  title: string;
  location: string;
  counters: {
    yearsField: number;
    keyCases: number;
    materialTypes: number;
  };
  ctaPrimary: {
    label: string;
    href: string;
  };
  ctaSecondary: {
    label: string;
    href: string;
    download: boolean;
  };
}

export interface SintesisData {
  paragraphs: string[];
  pullQuote: string;
}

export type MatrizEstado = "VERIFICADO" | "PARCIAL" | "EN_DISENO" | "NECESITA_VERIFICACION";

export interface MatrizRow {
  id: number;
  requisito: string;
  evidencia: string;
  estado: MatrizEstado;
  casoEstudio?: string;
  material?: string;
}

export interface Output {
  type: "cartilla" | "manual" | "cuña" | "guia" | "sistematización" | "informe_técnico" | "material_educativo" | "guia_taller" | "estatuto_reglamento" | "plan_estrategico" | "documento_demandas";
  count: number | string;
  titles?: string[];
  topics?: string[];
  downloadable: boolean;
  language?: string;
  format?: string;
  title?: string;
  note?: string;
}

export interface PhotoSlot {
  id: string;
  category: "WORKSHOP" | "WOMEN" | "YOUTH" | "MATERIALS" | "MUNICIPAL" | "TERRITORY" | "RADIO";
  description: string;
  required: boolean;
  metadata_status: "PENDIENTE" | "APROBADA" | "NO_USAR";
}

export interface Activity {
  description: string;
  output: string;
}

export interface CaseStudy {
  id: string;
  organization: string;
  role: string;
  period: { start: string; end: string };
  locations: string[];
  context: string;
  audience: string[];
  challenge: string;
  methodology: string[];
  activities: Activity[];
  outputs: Output[];
  relevance_girs: string[];
  evidence_status: string;
  environmental_topics: string;
  quantified: {
    communities: string;
    participants: string;
    municipalities: string;
    workshops: string;
    materials_produced: string;
  };
  photo_slots: PhotoSlot[];
  content_todos: string[];
}

export interface CaseStudySummary {
  id: string;
  organization: string;
  role: string;
  period: string;
  locations: string[];
  evidence_status: string;
  highlights: string[];
}

export interface Material {
  id: string;
  type: "cartilla" | "manual" | "cuña" | "guia" | "sistematizacion";
  title: string;
  experience: string;
  description: string;
  pdfPath: string;
  language: "ES" | "ES+QU";
  thumbnail?: string | null;
}

export interface EnfoqueData {
  principios: string[];
  metodos: string[];
  herramientas: string[];
  logisticaCampo: string;
}

export interface GIRSRelevance {
  queTengo: string[];
  queConstruyo: string[];
  comoValido: string[];
}

export interface TimelineNode {
  period: string;
  organization: string;
  role: string;
  relevanceTag: string;
  color: "dark" | "medium" | "light";
  isCaseStudy?: boolean;
  caseStudyId?: string;
}

export interface FooterData {
  cvLabel: string;
  cvPath: string;
  referenciasStatus: string;
  contact: {
    email: string;
    phone: string;
    location: string;
    linkedin?: string | null;
  };
}