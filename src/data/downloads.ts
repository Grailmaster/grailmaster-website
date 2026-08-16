/**
 * Free downloads — worksheets, scoring tables, and tools tied to the SCV framework.
 * To publish one: save the file to public/downloads/ and set `url` to its path
 * (e.g. "/downloads/scv-worksheet.pdf"). Items with url = null show as "Coming soon".
 */
export interface Download {
  name: string;
  description: string;
  fileType: string;      // shown as a small badge, e.g. "PDF", "XLSX"
  url: string | null;
}

export const downloads: Download[] = [
  {
    name: "SCV Sociogram Worksheet",
    description: "Map your own social network across the concentric rings of closeness — the first exercise in the Sociogram Method.",
    fileType: "PDF",
    url: null,
  },
  {
    name: "Social Connectivity Value (SCV) Scoring Table",
    description: "Weight and score each relationship to calculate your own SCV and spot the structural gaps in your social world.",
    fileType: "PDF",
    url: null,
  },
];
