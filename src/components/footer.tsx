import Link from "next/link";
import Image from "next/image";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Projects", href: "/projects" },
];

const social = [
  {
    name: "GitHub",
    href: "https://github.com/LinkScapeOfficial",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/RealLinkScape",
  },
  {
    name: "Discord",
    href: "https://discord.gg/WDdvabyKaH",
  },
];

export default function Footer() {
  return (
    <footer className="linkscape-wrapper">
      <section className="flex flex-col sm:grid sm:grid-cols-12 gap-8 sm:gap-0 py-16 border-x border-border border-dashed px-4 relative">

        <div className="pointer-events-none absolute inset-0 hidden sm:block">
          <div
            className="border-ds-gray-alpha-400 absolute top-0 h-full border-l border-dashed"
            style={{ left: "calc(50% - 0.5px)" }}
          ></div>
          <div
            className="border-ds-gray-alpha-400 absolute top-0 h-full border-l border-dashed"
            style={{ left: "calc(75% - 0.5px)" }}
          ></div>
        </div>

        {/* Logo and copyright section */}
        <div className="flex flex-col items-start sm:col-span-8 z-20">
          <Image
            src={
              "https://evan.beee.top/img/38a40a6e7aef11dee616fc3373c0f1d1-72dad.svg"
            }
            alt={"Linkscape logo"}
            width={648}
            height={2194}
            className={"w-32 sm:w-48"}
          />
          <div className="text-sm sm:text-base text-left mt-4 sm:mt-6 text-muted-foreground">
            <div className="mb-2">
              © {new Date().getFullYear()} LinkScape. All rights reserved.
            </div>
            <div className="flex flex-row items-center">
              <span>An</span>
              <Link
                href={"https://evannotfound.com"}
                className="text-muted-foreground hover:text-primary transition-all duration-200 mx-1 underline decoration-zinc-300"
              >
                evannotfound
              </Link>
              <span>production. Powered by</span>
              <Link
                href={
                  "https://vercel.com/?utm_source=linkscape&utm_campaign=oss"
                }
                className="inline-flex items-center"
              >
                <Image
                  src={"https://files.ohevan.com/tmp/Vercel_logo_black.svg"}
                  alt={"Vercel logo"}
                  width={158}
                  height={48}
                  className={"inline-block ml-1 w-12 sm:w-16"}
                />
              </Link>
              <span>.</span>
            </div>
          </div>
        </div>

        {/* Mobile navigation sections */}
        <div className="flex flex-row justify-between gap-8 sm:hidden">
          <div className="flex flex-col">
            <h3 className="text-sm font-medium text-primary mb-2">Contacts</h3>
            <div className="flex flex-col gap-1">
              {social.map((item) => (
                <Link
                  href={item.href}
                  key={item.name}
                  className="text-muted-foreground hover:text-primary transition-all duration-200 text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-sm font-medium text-primary mb-2">Navigation</h3>
            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  href={item.href}
                  key={item.name}
                  className="text-muted-foreground hover:text-primary transition-all duration-200 text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop navigation sections */}
        <div className="hidden sm:flex flex-col justify-center items-end sm:col-start-9 z-20">
          <h3 className="text-sm font-medium text-primary">Contacts</h3>
          <div className="flex flex-col mt-3 gap-2 items-end text-sm">
            {social.map((item) => (
              <Link
                href={item.href}
                key={item.name}
                className="text-muted-foreground hover:text-primary transition-all duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden sm:flex flex-col justify-center items-end sm:col-start-12 z-20">
          <h3 className="text-sm font-medium text-primary">Navigation</h3>
          <div className="flex flex-col mt-3 gap-2 items-end text-sm">
            {navigation.map((item) => (
              <Link
                href={item.href}
                key={item.name}
                className="text-muted-foreground hover:text-primary transition-all duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </footer>
  );
}
