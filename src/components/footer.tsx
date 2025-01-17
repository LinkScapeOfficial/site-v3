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
    <footer className="text-center py-12 px-4 max-w-6xl mx-auto">
      <section className="gap-6 sm:gap-0 grid-cols-2 grid sm:grid-cols-12">
        <div className={"px-6 flex flex-col items-start col-span-2 sm:col-span-8 order-last sm:order-first"}>
          <Image
            src={
              "https://evan.beee.top/img/38a40a6e7aef11dee616fc3373c0f1d1-72dad.svg"
            }
            alt={"Linkscape logo"}
            width={648}
            height={2194}
            className={"w-32 sm:w-56"}
          />
          <div className="text-sm sm:text-base text-left mt-2 sm:mt-6 text-muted-foreground">
            <div>
              © 2022 - {new Date().getFullYear()} LinkScape. All rights
              reserved.
            </div>
            <div className="flex flex-row items-center justify-start">
              Proudly powered by
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
                  className={"inline-block ml-2 w-12 sm:w-16 "}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-start sm:col-start-9 md:col-start-10 px-6 sm:px-0 order-first sm:order-none">
          <h3 className="text-sm font-medium text-primary">
            Contacts
          </h3>
          <div
            className={
              "flex flex-col mt-1 sm:mt-3 gap-0 sm:gap-2 items-start text-sm"
            }
          >
            {social.map((item) => (
              <Link
                href={item.href}
                key={item.name}
                className={"text-muted-foreground hover:text-primary transition-all duration-200"}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center items-start sm:col-start-11 md:col-start-12 px-6 sm:px-0 order-2 sm:order-none">
          <h3 className="text-sm font-medium text-primary">
            Navigation
          </h3>
          <div
            className={
              "flex flex-col mt-1 sm:mt-3 gap-0 sm:gap-2 items-start text-sm"
            }
          >
            {navigation.map((item) => (
              <Link
                href={item.href}
                key={item.name}
                className={"text-muted-foreground hover:text-primary transition-all duration-200"}
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
