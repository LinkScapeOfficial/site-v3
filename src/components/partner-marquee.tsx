import Image from "next/image";
import Link from "next/link";

const partners = [
  {
    name: "Hack Club",
    href: "https://hackclub.com/",
    logo: "https://assets.hackclub.com/flag-orpheus-left.svg",
    invert: false,
  },
  {
    name: "Figma",
    href: "https://www.figma.com/",
    logo: "https://files.ohevan.com/tmp/Figma-Wordmark-Black.svg",
    invert: true,
  },
  {
    name: "AdventureX",
    href: "https://adventure-x.org/en",
    logo: "https://cdn.linkscape.app/adventureX.png",
    invert: true,
  },
  {
    name: "Spark Lab",
    href: "https://sparklab.fun/",
    logo: "https://cdn.linkscape.app/spark_logo.png",
    invert: true,
  },
];

function Row({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <>
      {partners.map((p) => (
        <Link
          key={p.name}
          href={p.href}
          // The duplicate row is aria-hidden, so keep it out of the tab order.
          tabIndex={duplicate ? -1 : undefined}
          className="flex h-24 w-48 shrink-0 items-center justify-center px-8 opacity-70 transition-opacity hover:opacity-100"
          aria-label={p.name}
        >
          <Image
            src={p.logo}
            alt={p.name}
            width={160}
            height={44}
            className={`max-h-8 w-auto object-contain ${p.invert ? "dark:invert" : ""}`}
          />
        </Link>
      ))}
    </>
  );
}

export default function PartnerMarquee() {
  return (
    <div className="marquee-mask relative overflow-hidden py-2">
      <div className="animate-marquee flex w-max hover:[animation-play-state:paused]">
        <div className="flex">
          <Row />
        </div>
        <div className="flex" aria-hidden>
          <Row duplicate />
        </div>
      </div>
    </div>
  );
}
