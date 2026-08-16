/**
 * Episode handouts — ONE LINE PER EPISODE, newest first.
 * To add a new episode: copy the top line, update number, title, and link. Done.
 * The podcast page automatically shows the 3 newest; /handouts lists all.
 */
export interface Handout {
  ep: number;
  title: string;
  url: string;
}

export const handouts: Handout[] = [
  { ep: 14, title: "How to Finally Stop Falling for the Wrong One", url: "http://bit.ly/4dh0vBy" },
  { ep: 13, title: "Test: 10 Reasons You Keep Falling for the Wrong Person", url: "https://bit.ly/4sRtctM" },
  { ep: 12, title: "8-Step Valentine's Survival Protocol", url: "https://bit.ly/4rBubNK" },
  { ep: 11, title: "Game Theory Predicts Whether There's a Second Date", url: "https://bit.ly/3NoBdqU" },
  { ep: 10, title: "The Gertrude Stein Method: The Lost Art of the Salon", url: "https://bit.ly/4qrdDrI" },
  { ep: 9, title: "How to Use the Holidays to Reset Your Love Life!", url: "https://bit.ly/4qelTep" },
  { ep: 8, title: "Top-10 Dating Books on Amazon Rated by Dating Scientist", url: "https://bit.ly/48jUS1X" },
  { ep: 7, title: "The ONLY Response to Ghosting That Actually Works", url: "https://bit.ly/3WJU94K" },
  { ep: 6, title: "19th Century Dating Rules That Would Get You Canceled Today", url: "http://bit.ly/3JqVnyE" },
  { ep: 5, title: "Why You Shouldn't Give Affection Away Too Easily", url: "http://bit.ly/476xG6B" },
  { ep: 4, title: "Sydney Sweeney's 'Good Jeans' & Intrasexual Competition", url: "http://bit.ly/3KCyOau" },
  { ep: 3, title: "My 10-Year Study on 400+ of the World's Most Attractive Women (Insane Results)", url: "http://bit.ly/4pniWsg" },
  { ep: 2, title: "The Female Shopping List Freud Never Figured Out", url: "http://bit.ly/3KlSOhp" },
  { ep: 1, title: "This 5-Step System Solves What Dating Coaches Can't", url: "http://bit.ly/3UCrayM" },
];
