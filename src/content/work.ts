/** Every project, research output, and event. Add one here, not in JSX. */

export type WorkType = "software" | "research" | "event";
export type Pillar = "impact" | "talent" | "community";

export interface WorkLink {
  label: string;
  href: string;
  kind: "repo" | "site" | "download" | "paper";
}

export interface WorkFact {
  label: string;
  value: string;
}

export interface WorkFigure {
  /** Generated figures append -light.svg and -dark.svg to this path. */
  src: string;
  /** Set for a single image rather than a light/dark pair. */
  single?: boolean;
  alt: string;
  caption?: string;
  ratio?: string;
}

export interface WorkItem {
  slug: string;
  name: string;
  type: WorkType;
  tagline: string;
  summary: string;
  body: string[];
  year: string;
  status: "Active" | "Released" | "Under review" | "Completed";
  pillars: Pillar[];
  stack: string[];
  links: WorkLink[];
  facts?: WorkFact[];
  credit?: string;
  /** Reproduced verbatim wherever the project appears. */
  notice?: string;
  image?: string;
  figures?: WorkFigure[];
  featured?: boolean;
  results?: {
    caption: string;
    columns: string[];
    rows: string[][];
    footnote?: string;
  };
}

export const work: WorkItem[] = [
  {
    slug: "cnm-bert",
    name: "CNM-BERT",
    type: "research",
    tagline: "Teaching a language model what Chinese characters are made of.",
    summary:
      "BERT treats 樹 as an arbitrary ID and throws away the components a reader sees instantly. CNM-BERT feeds that structure back in and lifts out-of-vocabulary accuracy by 9.8 F1 for about 5% more training time.",
    body: [
      "A Chinese character is built from parts. 樹 contains 木, the tree radical, and a reader who has never met the character can still guess what it concerns. A tokenizer discards all of that and hands the model an arbitrary index.",
      "The model then has to rediscover the meaning from context alone, and rare characters get the fewest chances to do so. Characters the tokenizer cannot represent at all stay opaque no matter how large the model grows, because the information was destroyed at the input layer.",
      "CNM-BERT restores it. The model parses each character's Ideographic Description Sequence into a tree, encodes that tree with a recursive Tree-MLP, and adds the result to the standard embedding. The transformer, the vocabulary, and the output head stay exactly as they were, so it drops into an existing fine-tuning pipeline unchanged.",
      "The interesting result is the shape of the gain. On familiar text CNM-BERT wins by 1.3 F1. On the long tail it wins by 4.0. On characters outside the vocabulary it wins by 9.8. A gap that widens as the data gets harder means the model has learned something structural about writing, which is exactly what scaling alone cannot buy.",
    ],
    year: "2026",
    status: "Under review",
    pillars: ["impact", "talent"],
    stack: ["PyTorch", "BERT", "Tree-MLP", "IDS", "CLUE"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/ericyan534-dev/cnm-bert",
        kind: "repo",
      },
    ],
    facts: [
      { label: "Venue", value: "ACL Rolling Review 2027" },
      { label: "Status", value: "Submitted, decision pending" },
      { label: "Authors", value: "Liqian Yan and Thomas Sing-wing Wu, equal contribution" },
      { label: "Training overhead", value: "About 5%" },
      { label: "Backbone", value: "Unmodified BERT" },
    ],
    figures: [
      {
        src: "/figures/cnm-bert-arch",
        alt: "The Tree-MLP encodes a character's component tree and its output is fused into the standard BERT embedding before the unchanged transformer backbone.",
        ratio: "760 / 240",
      },
      {
        src: "/figures/cnm-bert-oov",
        alt: "On out-of-vocabulary characters CNM-BERT reaches 76.0 Structure F1 and 56.1 Radical F1, against 66.2 and 48.4 for ChineseBERT and 14.0 and 7.4 for token-only baselines.",
        ratio: "760 / 380",
      },
      {
        src: "/figures/cnm-bert-shift",
        alt: "Structure F1 gained over the strongest baseline: 1.3 in-distribution, 4.0 on the long tail, 9.8 out-of-vocabulary.",
        ratio: "760 / 300",
      },
    ],
    results: {
      caption: "Structural probing, out-of-vocabulary slice",
      columns: ["Model", "Structure F1", "Radical F1"],
      rows: [
        ["Token-only baselines", "≤ 14.0", "≤ 7.4"],
        ["SubChar-Wubi", "65.2", "45.0"],
        ["ChineseBERT", "66.2", "48.4"],
        ["CNM-BERT", "76.0", "56.1"],
      ],
      footnote:
        "Baselines were re-run from official checkpoints under one protocol: five seeds, the same grid, the same hardware. ChineseBERT still wins on visual stroke metrics, which suits its pixel-based design; the two approaches capture different signals. Figures are those reported in the submitted manuscript.",
    },
    featured: true,
  },

  {
    slug: "resonaite",
    name: "Resonaite",
    type: "research",
    tagline: "Music that retunes itself to your brainwaves as you listen.",
    summary:
      "A headset reads eight EEG bands once a second. The audio engine folds that reading back into the modulation of the track playing, so the music changes while you are still hearing it. Built primarily by Liqian Yan.",
    body: [
      "Resonaite plays a track and watches you listen. A consumer EEG headset samples eight frequency bands every second, the engine derives an engagement index and an alpha ratio from them, and those numbers feed straight back into how the music is modulated. The loop closes in real time.",
      "Modulating audio this way usually sounds like a test tone. A seven-stage pipeline fixes that by adding organic jitter, breathing depth, and waveform morphing, so the effect stays musical. The figure below is the real output of that pipeline, not an illustration.",
      "The rest is ordinary engineering done properly: 73 curated tracks normalised to a single loudness standard, new tracks generated on demand through AI music models with tempo and key enforced, and an offline-capable progressive web app so a session survives losing the network.",
    ],
    year: "2026",
    status: "Active",
    pillars: ["impact", "community"],
    stack: [
      "React",
      "Web Audio API",
      "Python",
      "NumPy",
      "SciPy",
      "Node.js",
      "NeuroSky EEG",
    ],
    links: [
      {
        label: "Repository",
        href: "https://github.com/ericyan534-dev/resonaite",
        kind: "repo",
      },
    ],
    facts: [
      { label: "Signal pipeline", value: "7-stage CIM engine" },
      { label: "EEG", value: "NeuroSky MindWave, 8 bands at 1 Hz" },
      { label: "Library", value: "73 tracks at −14 LUFS" },
      { label: "Client", value: "Offline-capable PWA" },
    ],
    figures: [
      {
        src: "/figures/resonaite-cim",
        alt: "Three seconds of a 220 Hz carrier under 10 Hz amplitude modulation, with a 40 millisecond inset showing individual carrier cycles.",
        ratio: "760 / 320",
      },
      {
        src: "/figures/resonaite-arch",
        alt: "EEG headset feeds derived metrics into the CIM engine, which retunes the audio in real time.",
        ratio: "760 / 190",
      },
    ],
    credit: "Created primarily by Liqian (Eric) Yan, Co-Founder & CFO.",
    notice:
      "Research prototype, not a medical device. Resonaite has not undergone clinical validation and is not intended to diagnose, treat, cure, or prevent any disease or condition. Nothing here should be read as a therapeutic claim.",
    featured: true,
  },

  {
    slug: "linkdown",
    name: "LinkDown",
    type: "software",
    tagline: "Save any video in one click, straight from the browser.",
    summary:
      "The best video tools are command-line programs most people will never install. LinkDown bundles yt-dlp and ffmpeg, configures them, and puts a browser button in front. Our most-starred release.",
    body: [
      "Saving a video normally means installing yt-dlp, installing ffmpeg, putting them on your PATH, and learning a flag or two. Most people give up and use an advert-riddled website instead.",
      "LinkDown ships those tools pre-configured behind a browser add-on. You click the button on the page you are already watching and get a playable MP4.",
      "It has more stars than everything else we have released put together.",
    ],
    year: "2025",
    status: "Released",
    pillars: ["impact"],
    stack: ["yt-dlp", "ffmpeg", "Python", "Inno Setup", "Windows"],
    links: [
      {
        label: "Download",
        href: "https://github.com/LinkScapeOfficial/LinkDown/releases",
        kind: "download",
      },
      {
        label: "Repository",
        href: "https://github.com/LinkScapeOfficial/LinkDown",
        kind: "repo",
      },
    ],
    facts: [
      { label: "Platform", value: "Windows, with a browser add-on" },
      { label: "Output", value: "MP4" },
      { label: "Licence", value: "Open source" },
    ],
    figures: [
      {
        src: "https://cdn.linkscape.app/LinkDown_Sample.png",
        single: true,
        alt: "LinkDown fetching a video, showing the download progress in its console.",
        caption: "A download in progress.",
        ratio: "16 / 10",
      },
      {
        src: "/figures/linkdown-flow",
        alt: "The browser add-on detects the video, yt-dlp fetches the streams, ffmpeg muxes to MP4, and the file lands on disk.",
        ratio: "760 / 190",
      },
    ],
    credit:
      "Developed by Thomas Wu, CEO & Co-Founder. Logo by Tz-yun Hsiao. Tutorials by RunningCheese.",
    image: "https://cdn.linkscape.app/LinkDown_Sample.png",
    featured: true,
  },

  {
    slug: "ollmao",
    name: "Ollmao",
    type: "software",
    tagline: "Run open AI models on your Mac, in a real Mac app.",
    summary:
      "A native SwiftUI client for Ollama. Your prompts and replies stay on your own hardware, and you get a proper macOS interface instead of a terminal.",
    body: [
      "Running a model locally keeps every prompt on your own machine and costs nothing per token. The obstacle has always been the interface, which for most people means typing into a terminal.",
      "Ollmao is a native SwiftUI front end for Ollama. It behaves like a Mac application because it is one: windows, keyboard shortcuts, conversation history.",
      "No account, no API key, and no request leaving the laptop.",
    ],
    year: "2025",
    status: "Released",
    pillars: ["impact", "talent"],
    stack: ["Swift", "SwiftUI", "Ollama", "macOS"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/LinkScapeOfficial/Ollmao",
        kind: "repo",
      },
    ],
    facts: [
      { label: "Platform", value: "macOS" },
      { label: "Runtime", value: "Ollama" },
      { label: "Data leaving your Mac", value: "None" },
    ],
    figures: [
      {
        src: "/figures/ollmao-flow",
        alt: "The SwiftUI app talks to a local Ollama runtime, which runs an open model on your own GPU and returns the reply without leaving the machine.",
        ratio: "760 / 190",
      },
    ],
    featured: true,
  },

  {
    slug: "sh-hacks",
    name: "SH Hacks",
    type: "event",
    tagline: "A weekend where Shanghai teenagers ship something and demo it.",
    summary:
      "Two days, one room in Xuhui, and a demo at the end. Open to middle and high school students across Shanghai, run with AdventureX and Spark Lab.",
    body: [
      "Most students who want to build something never start, because starting alone is harder than it looks. A room full of people on the same deadline solves that.",
      "SH Hacks ran across two days in the Caohejing development zone. Students who had never shipped anything arrived on Saturday morning and demoed working projects by Sunday afternoon.",
      "It is where most of our members met each other.",
    ],
    year: "2025",
    status: "Completed",
    pillars: ["community", "talent"],
    stack: [],
    links: [
      { label: "shhacks.com", href: "https://www.shhacks.com/", kind: "site" },
      {
        label: "Repository",
        href: "https://github.com/LinkScapeOfficial/sh-hacks",
        kind: "repo",
      },
    ],
    facts: [
      { label: "Dates", value: "March 29 to 30, 2025" },
      { label: "Location", value: "Caohejing, Xuhui District, Shanghai" },
      { label: "Open to", value: "Middle and high school students in Shanghai" },
      { label: "Founders", value: "Thomas Wu and Liqian (Eric) Yan" },
      { label: "Organizers", value: "Thomas Wu, Liqian (Eric) Yan, Zigao Wang" },
      { label: "Sponsors", value: "LinkScape, AdventureX, Spark Lab" },
    ],
    figures: [
      {
        src: "/shhacks.jpeg",
        single: true,
        alt: "Participants and organizers of SH Hacks 2025 gathered in the venue at the end of the weekend.",
        caption: "The room at the end of the weekend.",
        ratio: "16 / 10",
      },
    ],
    image: "/shhacks.jpeg",
    featured: true,
  },
];

export const workTypes: { key: WorkType | "all"; label: string }[] = [
  { key: "all", label: "Everything" },
  { key: "research", label: "Research" },
  { key: "software", label: "Software" },
  { key: "event", label: "Events" },
];

export const pillarLabels: Record<Pillar, string> = {
  impact: "Building Impact",
  talent: "Developing Talent",
  community: "Fostering Community",
};

export const featured = work.filter((w) => w.featured);
export const bySlug = (slug: string) => work.find((w) => w.slug === slug);
