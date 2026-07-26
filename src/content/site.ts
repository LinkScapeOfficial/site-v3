export const site = {
  name: "LinkScape",
  url: "https://linkscape.app",
  founded: "December 19, 2022",
  tagline: "Hack, Build, Compete",
  positioning:
    "We give students an 80-GPU cluster, a real research problem, and someone to review their code. Everything they build ships open source.",
  fiscalSponsor: {
    name: "The Hack Foundation dba Hack Club",
    short: "Hack Club",
    status: "501(c)(3)",
    platform: "Hack Club Bank",
    url: "https://hackclub.com/",
    donate: "https://hcb.hackclub.com/donations/start/linkscape",
    /** Keep exact. Describing LinkScape as its own 501(c)(3) would be false. */
    statement:
      "LinkScape runs as a fiscally sponsored project of The Hack Foundation dba Hack Club, a 501(c)(3) nonprofit. Hack Club holds the charitable status and every dollar moves through Hack Club Bank.",
  },
  social: {
    github: "https://github.com/LinkScapeOfficial",
    discord: "https://discord.gg/WDdvabyKaH",
    x: "https://twitter.com/RealLinkScape",
  },
  email: {
    general: "founding@linkscape.app",
    ceo: "thomas@linkscape.app",
    cfo: "eric@linkscape.app",
    cto: "zigao@linkscape.app",
  },
} as const;

export const navigation = [
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Governance", href: "/governance" },
  { name: "Join", href: "/join" },
] as const;

/** Every program serves at least one pillar. */
export const pillars = [
  {
    key: "impact",
    name: "Building Impact",
    line: "We ship open AI research and tools.",
    body: "Papers, models, datasets, and software, released publicly by default. Anyone can read the work, run it, and build on it.",
  },
  {
    key: "talent",
    name: "Developing Talent",
    line: "Students get compute, problems, and mentors.",
    body: "Members train models on our cluster, enter competitions, and co-author research that goes to peer review.",
  },
  {
    key: "community",
    name: "Fostering Community",
    line: "We run the hackathons and workshops.",
    body: "Weekend events and open repositories where students meet people building the same things, then keep building together afterwards.",
  },
] as const;

export const values = [
  {
    name: "Responsible Innovation",
    line: "We assess harm before we build.",
    body: "Every AI system gets an impact assessment before deployment. We document risks and limitations in the open, and we choose the useful application over the impressive one.",
  },
  {
    name: "Transparency",
    line: "We work in public.",
    body: "Open source is the default. Decisions ship with the reasoning behind them, mistakes get corrected publicly, and our policies are on this site for anyone to read.",
  },
  {
    name: "Accessibility",
    line: "Anyone can start here.",
    body: "Membership is open worldwide. We support contributors at every skill level and design for people who have never trained a model.",
  },
  {
    name: "Impact",
    line: "We measure outcomes, not activity.",
    body: "We track what changed for the people we reached, publish the numbers, and say so when we miss a target.",
  },
  {
    name: "Safety",
    line: "Some of our members are minors.",
    body: "Testing and review precede every release. Anyone can raise a concern directly with the CFO, who owns safety escalation, and we accept limits on capability when safety is unclear.",
  },
] as const;
