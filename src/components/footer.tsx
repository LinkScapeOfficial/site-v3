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
      <section className="gap-6 sm:gap-0 grid-cols-2 grid sm:grid-cols-12 py-16 border-x border-border border-dashed px-4 relative">

        <div className="pointer-events-none absolute inset-0">
          {/* <div
            className="border-ds-gray-alpha-400 absolute top-0 h-full border-l border-dashed"
            style={{ left: "calc(25% - 0.5px)" }}
          ></div> */}
          <div
            className="border-ds-gray-alpha-400 absolute top-0 h-full border-l border-dashed"
            style={{ left: "calc(50% - 0.5px)" }}
          ></div>
                    <div
            className="border-ds-gray-alpha-400 absolute top-0 h-full border-l border-dashed"
            style={{ left: "calc(75% - 0.5px)" }}
          ></div>
        </div>
        <div
          className={
            "flex flex-col items-start col-span-2 sm:col-span-8 order-last sm:order-first z-20"
          }
        >
          <Image
            src={
              "https://evan.beee.top/img/38a40a6e7aef11dee616fc3373c0f1d1-72dad.svg"
            }
            alt={"Linkscape logo"}
            width={648}
            height={2194}
            className={"w-32 sm:w-48"}
          />
          <div className="text-sm sm:text-base text-left mt-2 sm:mt-6 text-muted-foreground">
            <div>
              © {new Date().getFullYear()} LinkScape. All rights reserved.
            </div>
            <div className="flex flex-row items-center justify-start">
              An
              <Link
                href={"https://evannotfound.com"}
                className="text-muted-foreground hover:text-primary transition-all duration-200 mx-1 underline decoration-zinc-300"
              >
                evannotfound
              </Link>
              production. Powered by
              <Link
                href={
                  "https://vercel.com/?utm_source=linkscape&utm_campaign=oss"
                }
              >
                <Image
                  src={"https://files.ohevan.com/tmp/Vercel_logo_black.svg"}
                  alt={"Vercel logo"}
                  width={158}
                  height={48}
                  className={"inline-block ml-1 w-12 sm:w-16"}
                />
              </Link>
              .
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-end sm:col-start-9  sm:px-0 order-first sm:order-none z-20">
          <h3 className="text-sm font-medium text-primary">Contacts</h3>
          <div
            className={
              "flex flex-col mt-1 sm:mt-3 gap-0 sm:gap-2 items-end text-sm"
            }
          >
            {social.map((item) => (
              <Link
                href={item.href}
                key={item.name}
                className={
                  "text-muted-foreground hover:text-primary transition-all duration-200"
                }
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center items-end sm:col-start-12 sm:px-0 order-2 sm:order-none z-20">
          <h3 className="text-sm font-medium text-primary">Navigation</h3>
          <div
            className={
              "flex flex-col mt-1 sm:mt-3 gap-0 sm:gap-2 items-end text-sm"
            }
          >
            {navigation.map((item) => (
              <Link
                href={item.href}
                key={item.name}
                className={
                  "text-muted-foreground hover:text-primary transition-all duration-200"
                }
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
