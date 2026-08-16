/**
 * JOURNAL CONTENT — single source of truth.
 * Three collections: articles (essays), papers (research), and the featured post.
 *
 * ARTICLES
 * - `href` external (LinkedIn/bit.ly) = card links out, labelled "Read on LinkedIn".
 * - To host an article natively later: paste its text into a new file and set
 *   `href` to the internal path (e.g. "/journal/most-dating-advice-is-nonsense").
 *   The card then links internally and gets full SEO credit.
 * - `featured: true` promotes one article to the large hero card.
 *
 * PAPERS
 * - `intro` = your plain-language "why this matters" line; `href` = original paper/DOI.
 */

export interface Article {
  n: string;              // display number, matches your old numbering
  title: string;
  hook: string;           // one-line teaser
  href: string;           // external URL now, or internal path once hosted natively
  external?: boolean;     // true = opens off-site (LinkedIn etc.)
  date?: string;
  featured?: boolean;
}

export interface Paper {
  title: string;
  venue: string;          // where it lives + year
  abstract: string;       // full abstract
  figure: string;         // one figure from the paper
  figureAlt: string;
  href: string;           // DOI / link
}

export const articles: Article[] = [
  {
    n: "01",
    title: "Most Dating Advice Is Nonsense",
    hook: "Why the advice industry keeps failing you — and the first-principles alternative.",
    href: "/journal/most-dating-advice-is-nonsense", // hosted natively
    external: false,
    date: "May 2025",
    featured: true,
  },
  {
    n: "01",
    title: "What Optimal Stopping Theory Says About Longevity Protocols",
    hook: "The mathematics of when to stop searching — applied to how long you should live.",
    href: "https://www.linkedin.com/pulse/what-optimal-stopping-theory-says-longevity-protocols-schumacher-bre7f",
    external: true,
  },
  {
    n: "02",
    title: "A New Evolutionary Step for Our Species?",
    hook: "What our growing bond with machines says about where humanity is heading.",
    href: "http://bit.ly/4n7if4A",
    external: true,
  },
  {
    n: "03",
    title: "Beyond Love — Toward a Post-Human Future",
    hook: "If connection can be engineered, what happens to love as we know it?",
    href: "https://www.linkedin.com/pulse/beyond-lovetoward-post-human-future-dr-axel-schumacher-ixlcf",
    external: true,
  },
  {
    n: "04",
    title: "Loneliness & When Humanoid Robots Learn to Feel",
    hook: "The uncomfortable promise of machines built to ease human isolation.",
    href: "http://bit.ly/4fZ7PSk",
    external: true,
  },
  {
    n: "05",
    title: "Would You Even Date a Human?",
    hook: "As artificial companions improve, the competition for our hearts changes.",
    href: "http://bit.ly/4fOgxT5",
    external: true,
  },
  {
    n: "06",
    title: "Can You Fall in Love With a Robot?",
    hook: "The psychology of attachment when the other party isn't human.",
    href: "http://bit.ly/45nz853",
    external: true,
  },
  {
    n: "07",
    title: "The Great Solitude, and the Artificial Voices That Dare to Break It",
    hook: "On the loneliness epidemic and the technologies rising to answer it.",
    href: "http://bit.ly/45D2J9E",
    external: true,
  },
];

export const papers: Paper[] = [
  {
    title: "The Missing Metric: Mapping the Exogenous Social Connectome as a Biomarker for Longevity",
    venue: "SocArXiv · 2026",
    abstract:
      "In the era of the Quantified Self, continuous self-measurement has become routine, enabling individuals to track genetic data, metabolism, sleep, and circadian rhythms with unprecedented precision. Yet the structure and quality of people's social connections, the Exogenous Social Connectome, remain largely ignored, despite decades of evidence showing that social integration predicts mortality as reliably as smoking, and often more strongly than hypertension or obesity. Social health is still assessed primarily through surveys and self-report rather than objective measurement. To fill this gap, we introduce the Social Connectivity Value (SCV), a composite digital biomarker that quantifies how social network structure biologically influences mental health, physiological regulation, and longevity. SCV builds on sociometric mapping, network topology, evolutionary weighting of relationships, and complex-systems dynamics to capture how social structure affects stress biology, immune function, and aging. Within this framework, social structure is treated not as passive exposure but as a modifiable biological system that can be measured, tracked, and deliberately designed. Despite extensive evidence linking social ties to health, existing approaches fail to specify which structural features matter, which configurations are fragile, and where change has leverage. SCV provides this framework through a standardized protocol for mapping social connections over time, from first dates to lifelong partnerships. In a Social Geroscience framework, SCV metrics operate alongside and shape established longevity biomarkers such as heart rate variability, sleep quality, and metabolic control. By making social structure visible and quantifiable, SCV enables the deliberate design of personal social networks that reshape dating trajectories, pair-bonding outcomes, and long-term healthspan.",
    figure: "/images/photos/paper1.webp",
    figureAlt: "A sociogram mapping an individual's social connectome across concentric rings, with each relationship weighted to compute a Social Connectivity Value (SCV) score.",
    href: "https://doi.org/10.31235/osf.io/m6h58_v1",
  },
  {
    title: "Romantic Partner Search: The Endogenous-Horizon Optimal Stopping Problem with Somatic Maintenance Trade-offs",
    venue: "SocArXiv · 2026",
    abstract:
      "Loneliness is a population-scale mortality risk, and its time-cost bites especially hard for adults who hope to build a family under a biological deadline. Individuals pursuing aggressive somatic optimization face a time-allocation trade-off that can be formalized through sequential search mathematics. Every hour spent on somatic maintenance, whether sleep protocols, training, nutrition, or longevity biohacking, extends the search horizon for a romantic partner and typically raises mate value. Every same hour is an hour not spent meeting people, so the rate at which new candidates arrive falls in direct proportion to the time spent in isolation. The body being optimized is useless to the project without someone to share it with. We formalize this trade-off by joining optimal stopping theory with life-history biology. Three results follow. First, the optimal allocation is bounded strictly below the full daily budget: even at arbitrarily high intervention efficacy (the “longevity escape velocity” limit), a rational searcher devotes no more than 50% of daily bandwidth to somatic maintenance in the symmetric-linear case, and less under diminishing biological returns. Beyond that line, isolation destroys more romantic value than infinite time can ever recover. Second, the asymmetric clock of female fecundity forces reservation thresholds to fall on a steep Riccati curve. Fertility preservation then becomes a high-stakes wager: it pays off when deployed early and with high clinic efficacy, and it backfires when deployed late or on low-efficacy interventions. Third, the model's abstract arrival rate λ maps onto an empirical, measurable construct, the Social Connectivity Value (SCV) framework (Schumacher, 2026), which specifies the weekly social floor that must remain protected and the corresponding cap on somatic investment. The prescription is precise: invest seriously in health, cap that investment at the (k−1)/(2k) ceiling derived below, and protect a weekly minimum of real-world social exposure as non-negotiable infrastructure. Longevity must serve the goal of flourishing, not become a sterile substitute for it.",
    figure: "/images/photos/paper2.webp",
    figureAlt: "A model plot from the optimal-stopping analysis of romantic partner search under somatic maintenance trade-offs.",
    href: "https://doi.org/10.31235/osf.io/eg3yb_v1",
  },
];

// Open-science collaboration invite (rendered as a callout, not a paper card).
export const researchProject = {
  title: "Join the sociogram research project",
  intro:
    "The sociogram work is open science. Researchers, clinicians, and students are invited to contribute data, replicate findings, or collaborate on the Open Science Framework.",
  href: "https://osf.io/ugstj/overview",
  cta: "View the OSF project",
};
