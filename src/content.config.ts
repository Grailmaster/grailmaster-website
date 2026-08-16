import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * "Inside the Dating Mind" podcast episodes.
 * Add a new .mdx file in src/content/podcast/ to publish an episode.
 */
const podcast = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/podcast" }),
  schema: z.object({
    title: z.string(),
    episode: z.number(),
    pubDate: z.coerce.date(),
    description: z.string(),
    /** YouTube video ID, e.g. "dQw4w9WgXcQ" */
    youtubeId: z.string().optional(),
    /** Spotify episode URL */
    spotifyUrl: z.string().url().optional(),
    duration: z.string().optional(),
    /** Downloadable homework / worksheet, path under /public or external URL */
    downloadLink: z.string().optional(),
    downloadLabel: z.string().default("Episode worksheet"),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { podcast };
