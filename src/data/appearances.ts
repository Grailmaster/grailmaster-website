/**
 * Guest appearances — Axel on OTHER people's podcasts / channels.
 * Newest first. To add one: copy the top block, set the show name, episode title,
 * the YouTube video id (the part after v=), and the full watch URL (keep any ?t= timestamp).
 */
export interface Appearance {
  show: string;        // the host / channel name
  title: string;       // episode or segment title
  videoId: string;     // YouTube id, used for the thumbnail
  url: string;         // full watch URL (may include a ?t= start time)
}

export const appearances: Appearance[] = [
  {
    show: "Transcribed",
    title: "Epigenetics expert: You might live longer than you think!",
    videoId: "7h25L0D5PCw",
    url: "https://www.youtube.com/watch?v=7h25L0D5PCw&t=2550s",
  },
  {
    show: "Nina's Notes",
    title: "Forget Your VO2 Max. This Scientist Says Your Social Score Matters More.",
    videoId: "3ZpWgmkL3JQ",
    url: "https://www.youtube.com/watch?v=3ZpWgmkL3JQ&t=2033s",
  },
];
