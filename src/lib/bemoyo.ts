/**
 * be:moyo section (DOC-01 spec v0.8 §A3, DOC-2). The Guide's text is exported from the app repository
 * (`npm run guide:export`) into src/data/bemoyo/guide.json: the same approved pages the app shows.
 * Never edit that file by hand; change the page in the app, release, export again.
 */
import guide from "../data/bemoyo/guide.json";

export type Block =
  | { p: string }
  | { h: string }
  | { ol: string[] }
  | { ul: string[] }
  | { note: string }
  | { shot: string; alt: string }
  | { claim: Claim };
export type Study = { cite: string; url: string; design?: string; details?: [string, string][] };
export type Claim =
  | { status: "book"; text: string; book: { printed: number; quote: string } }
  | { status: "research"; text: string; study: Study }
  | { status: "untested"; text: string; source?: Study };
export type Section = { id: string; kind: string; title: string; blocks: Block[] };
export type Entry = {
  id: string;
  kind: "feature" | "data" | "help" | "start" | string;
  title: string;
  answer: string;
  sub?: string;
  keywords?: string[];
  sections: Section[];
  tier: "free" | "pro" | "tester" | null;
  checked: string;
};

export const GUIDE = guide as unknown as {
  appVersion: string;
  supportEmail: string;
  copy: Record<string, any>;
  goals: { title: string; line: string; to: string; icon: string }[];
  common: { q: string; to: string }[];
  footer: { label: string; to: string }[];
  dataPages: string[];
  helpPages: string[];
  groups: { id: string; title: string; pages: string[] }[];
  entries: Entry[];
  releases: { version: string; date: string; title: string; items: string[]; impacts?: string[] }[];
};

/** One route helper for every Guide link, canonical and sitemap entry (spec §A3). */
export const publicGuide = { origin: "https://grailmaster.com", basePath: "/be-moyo/guide" } as const;
/** where the app itself lives (browsers keep its data per address) */
export const APP_URL = "https://ending-loneliness.pages.dev/";

const byId = new Map(GUIDE.entries.map((e) => [e.id, e]));
export const entry = (id: string) => byId.get(id);

/** `<page>`, `<page>#<part>` or `@<group>` → path on this site */
export function guidePath(to: string): string {
  if (to.startsWith("@")) {
    const g = to.slice(1);
    return g === "help" || g === "data" ? `${publicGuide.basePath}/#${g}` : `${publicGuide.basePath}/#group-${g}`;
  }
  const [id, sec] = to.split("#");
  return `${publicGuide.basePath}/${id}/${sec ? `#${sec}` : ""}`;
}

/** the group a page is listed under (for "More in …") */
export const groupOf = (id: string) =>
  GUIDE.groups.find((g) => g.pages.includes(id)) ??
  (GUIDE.dataPages.includes(id) ? { id: "data", title: "Your data", pages: GUIDE.dataPages } : GUIDE.helpPages.includes(id) ? { id: "help", title: "Troubleshooting", pages: GUIDE.helpPages } : undefined);

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const LINK = /\[([^\]]+)\]\((guide|app):([^)\s]+)\)/g;

/**
 * Guide text → HTML. [label](guide:…) becomes a link to that page here; [label](app:…) names a place inside
 * the app, which a web page can't open, so it stays as the plain word.
 */
export function rich(text: string): string {
  let out = "";
  let last = 0;
  for (const m of text.matchAll(LINK)) {
    out += esc(text.slice(last, m.index));
    const [all, label, scheme, target] = m;
    out += scheme === "guide" && entry(target.split("#")[0]) ? `<a href="${esc(guidePath(target))}">${esc(label)}</a>` : esc(label);
    last = m.index! + all.length;
  }
  return out + esc(text.slice(last));
}

export const tierLabel = (t: Entry["tier"]) => (t === "pro" ? GUIDE.copy.pro : t === "tester" ? GUIDE.copy.tester : t === "free" ? GUIDE.copy.free : null);
