import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";

const columns = [
  {
    heading: "Explore",
    links: [
      { name: "Work", href: "/work" },
      { name: "About", href: "/about" },
      { name: "Team", href: "/team" },
      { name: "Join", href: "/join" },
    ],
  },
  {
    heading: "Governance",
    links: [
      { name: "All documents", href: "/governance" },
      { name: "Mission & Values", href: "/governance/g-01" },
      { name: "Code of Conduct", href: "/governance/pp-01" },
      { name: "Responsible AI", href: "/governance/e-01" },
      { name: "Privacy", href: "/governance/e-02" },
    ],
  },
  {
    heading: "Elsewhere",
    links: [
      { name: "GitHub", href: site.social.github },
      { name: "Discord", href: site.social.discord },
      { name: "X", href: site.social.x },
      { name: "SH Hacks", href: "https://www.shhacks.com/" },
      { name: "Donate", href: "/donate" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="surface border-t border-border">
      <div className="linkscape-wrapper">
        <div className="lattice-dashed relative px-4 py-16">
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
            <div className="col-span-2">
              <Image
                src="https://cdn.linkscape.app/linkscape-logo.png"
                alt="LinkScape"
                width={244}
                height={72}
                sizes="108px"
                className="h-8 w-auto dark:invert"
              />
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {site.positioning}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-2">
                <Link
                  href={site.fiscalSponsor.url}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Image
                    src="https://assets.hackclub.com/flag-orpheus-left.svg"
                    alt=""
                    width={64}
                    height={20}
                    className="h-4 w-auto"
                  />
                  Fiscally sponsored by Hack Club
                </Link>
              </div>
            </div>

            {columns.map((col) => (
              <div key={col.heading} className="flex flex-col">
                <h2 className="mono-label mb-3">{col.heading}</h2>
                <ul className="flex flex-col gap-2 text-sm">
                  {col.links.map((l) => (
                    <li key={l.name}>
                      <Link
                        href={l.href}
                        className="text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {l.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-dashed border-border pt-6 text-xs leading-relaxed text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl">{site.fiscalSponsor.statement}</p>
            {/* No year: this is a static build, so a rendered year freezes
                at deploy time and quietly goes stale. */}
            <p className="shrink-0 font-mono">&copy; LinkScape</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
