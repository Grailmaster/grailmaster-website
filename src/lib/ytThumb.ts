import { getImage } from "astro:assets";

/**
 * YouTube thumbnails, copied into the site at build time (privacy): visitors' browsers load them from
 * grailmaster.com, never from i.ytimg.com. Tries the large image, then the standard one; if the build
 * machine can't reach YouTube, falls back to the YouTube URL so the page still shows a picture.
 */
const memo = new Map<string, Promise<string>>();
export function ytThumb(id: string): Promise<string> {
  let p = memo.get(id);
  if (!p) {
    p = (async () => {
      for (const size of ["maxresdefault", "hqdefault"]) {
        try {
          const img = await getImage({ src: `https://i.ytimg.com/vi/${id}/${size}.jpg`, inferSize: true, format: "webp", width: 1280 });
          return img.src;
        } catch {
          /* next size */
        }
      }
      return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
    })();
    memo.set(id, p);
  }
  return p;
}
export async function ytThumbs(ids: string[]): Promise<Record<string, string>> {
  return Object.fromEntries(await Promise.all([...new Set(ids)].map(async (id) => [id, await ytThumb(id)])));
}
