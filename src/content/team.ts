/** Roster and remits. Fellows sit outside the reporting line. */

export type Tier = "leadership" | "members" | "fellows";

export interface Person {
  name: string;
  role: string;
  tier: Tier;
  imageUrl: string;
  github?: string;
  email?: string;
  term?: string;
  remit?: string;
}

export const tiers: {
  key: Tier;
  title: string;
  blurb: string;
}[] = [
  {
    key: "leadership",
    title: "Leadership",
    blurb:
      "Three officers, each with a written remit under the Ordinance. Their contact addresses are below and they answer their own mail.",
  },
  {
    key: "members",
    title: "Members",
    blurb:
      "Members build the projects, review each other's pull requests, and run the events.",
  },
  {
    key: "fellows",
    title: "Fellows",
    blurb:
      "Alumni and senior contributors who mentor and review. Fellows advise; they hold no operational authority.",
  },
];

export const people: Person[] = [
  {
    name: "Thomas Wu",
    role: "CEO & Co-Founder",
    tier: "leadership",
    imageUrl: "https://avatars.githubusercontent.com/u/62056970",
    github: "https://github.com/TakumiBC",
    email: "thomas@linkscape.app",
    term: "Permanent",
    remit:
      "Sets direction, holds final decision authority, and leads partnerships. Wrote LinkDown.",
  },
  {
    name: "Liqian (Eric) Yan",
    role: "Co-Founder & CFO",
    tier: "leadership",
    imageUrl: "https://cdn.linkscape.app/EricYan.jpg",
    github: "https://github.com/ericyan534-dev",
    email: "eric@linkscape.app",
    term: "Feb 2026 to Feb 2027",
    remit:
      "Runs the money through Hack Club Bank, approves spending, and owns safety and security escalation. Leads the CNM-BERT research and built Resonaite.",
  },
  {
    name: "Zigao Wang",
    role: "CTO",
    tier: "leadership",
    imageUrl: "https://avatars.githubusercontent.com/u/102006756",
    github: "https://github.com/ZigaoWang",
    email: "zigao@linkscape.app",
    term: "Appointed July 2026",
    remit:
      "Sets technical direction, governs the H100 cluster, and owns platform security and access control. Wrote Ollmao.",
  },

  {
    name: "July Wu",
    role: "Member",
    tier: "members",
    imageUrl: "https://cdn.linkscape.app/JulyWu.png",
    github: "https://github.com/JLW-7",
  },
  {
    name: "Lily Ding",
    role: "Member",
    tier: "members",
    imageUrl: "https://avatars.githubusercontent.com/u/188736174",
    github: "https://github.com/Lily-D-coder",
  },
  {
    name: "Matthew Dong",
    role: "Member",
    tier: "members",
    imageUrl: "https://cdn.linkscape.app/MattDong.jpg",
    github: "https://github.com/matt-dong-123",
  },

  {
    name: "Jett Chen",
    role: "Fellow, former Co-Founder",
    tier: "fellows",
    imageUrl: "https://cdn.linkscape.app/JettChen.png",
    github: "https://github.com/JettChenT",
  },
  {
    name: "Evan Luo",
    role: "Fellow, Head of Web",
    tier: "fellows",
    imageUrl: "https://cdn.linkscape.app/EvanLuo.png",
    github: "https://github.com/evannotfound",
  },
  {
    name: "Tz-yun Hsiao",
    role: "Fellow, Head of Design",
    tier: "fellows",
    imageUrl: "https://cdn.linkscape.app/TzeYunHsiao.png",
    github: "https://github.com/Powerlean",
  },
];

export const byTier = (tier: Tier) => people.filter((p) => p.tier === tier);
