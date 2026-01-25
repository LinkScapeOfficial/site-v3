import Newsletter from "@/components/newsletter";
import NavBar from "@/components/header";
import { Metadata } from "next";
import BlurFadeStagger from "@/components/animations/blur-fade-stagger";
import { HeartIcon } from "@primer/octicons-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MarkGithubIcon } from "@primer/octicons-react";
import BlurFade from "@/components/animations/blur-fade";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Divider } from "@/components/ui/divider";
import { CircleArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "LinkScape | Home",
  description: "We are LinkScape.",
};

export default function Index() {
  return (
    <>
      <NavBar />
      <main className="flex flex-col min-h-screen">
        {/* Home Title  */}
        <section className="relative bg-background">
          {/* Gradient shine overlay at the bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-radial from-blue-300/20 via-blue-300/5 to-transparent pointer-events-none z-10"
            style={{
              background:
                "radial-gradient(ellipse at bottom center, rgba(147, 197, 253, 0.2) 0%, rgba(147, 197, 253, 0.05) 50%, transparent 100%)",
            }}
          ></div>
          <div className="linkscape-wrapper">
            <div className="flex flex-col gap-4 pt-96 pb-20 border-x border-border border-dashed px-4">
              <BlurFadeStagger initialDelay={0.1}>
                <h1 className="font-semibold tracking-tight text-4xl sm:text-5xl w-full text-transparent bg-clip-text bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-500">
                  Hack, Build, Compete
                </h1>
                <h2 className="text-base sm:text-lg text-gh-text-secondary max-w-md">
                  At LinkScape, we believe in the power of open source.
                </h2>
                <div className="flex flex-row gap-3 mt-4">
                  <div>
                    <Link href={"https://github.com/LinkScapeOfficial"}>
                      <Button className="mr-3 flex items-center rounded-full bg-gh-dark-bg px-6 py-6 gh-border text-white hover:bg-gh-gray-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105 active:scale-95 active:shadow-sm">
                        <MarkGithubIcon className="mr-2 h-5 w-5" />
                        <div className="font-semibold">GitHub</div>
                      </Button>
                    </Link>
                  </div>
                  <div>
                    <Link href={"/donate"}>
                      <Button className="flex items-center rounded-full bg-gh-bg px-4 py-6 gh-border text-gh-text-primary hover:bg-gradient-to-br hover:from-red-500/80 hover:to-pink-600/80 hover:text-white transition-all shadow-sm active:scale-95">
                        <HeartIcon className="mr-2 h-5 w-5" />
                        <div className="font-semibold">Donate</div>
                      </Button>
                    </Link>
                  </div>
                </div>
              </BlurFadeStagger>
            </div>
          </div>
        </section>

        {/* Team section */}
        <section className="relative border-t border-border bg-white">
          <div className="linkscape-wrapper">
            <div className="flex flex-col border-x border-border">
              {/* Title section */}
              <div className="py-12 border-b border-border px-4">
                <h2 className="font-semibold text-3xl tracking-tight">
                  Meet the team
                </h2>
                <p className="text-lg text-muted-foreground tracking-tight">
                  The team behind LinkScape.
                </p>
              </div>

              {/* Team members */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {/* Thomas Wu */}
                <div className="border-r border-b border-border last:border-r-0">
                  <div className="p-6 flex flex-col items-center text-center gap-4 min-h-[200px]">
                    <Image
                      src={"https://avatars.githubusercontent.com/u/62056970"}
                      alt="Thomas Wu"
                      width={80}
                      height={80}
                      className="rounded-xl bg-zinc-100 w-20 h-20 object-cover"
                    />
                    <div>
                      <p className="font-semibold tracking-tight">Thomas Wu</p>
                      <p className="text-muted-foreground text-sm tracking-tight">
                        Founder & CEO
                      </p>
                    </div>
                  </div>
                </div>

                {/* Eric Yan */}
                <div className="border-r border-b border-border last:border-r-0">
                  <div className="p-6 flex flex-col items-center text-center gap-4 min-h-[200px]">
                    <Image
                      src={"https://cdn.linkscape.app/EricYan.jpg"}
                      alt="Eric Yan"
                      width={80}
                      height={80}
                      className="rounded-xl bg-zinc-100 w-20 h-20 object-cover"
                    />
                    <div>
                      <p className="font-semibold tracking-tight">Eric Yan</p>
                      <p className="text-muted-foreground text-sm tracking-tight">
                        Co-founder
                      </p>
                    </div>
                  </div>
                </div>

                {/* Zigao Wang */}
                <div className="border-r border-b border-border last:border-r-0">
                  <div className="p-6 flex flex-col items-center text-center gap-4 min-h-[200px]">
                    <Image
                      src={"https://avatars.githubusercontent.com/u/102006756"}
                      alt="Zigao Wang"
                      width={80}
                      height={80}
                      className="rounded-xl bg-zinc-100 w-20 h-20 object-cover"
                    />
                    <div>
                      <p className="font-semibold tracking-tight">Zigao Wang</p>
                      <p className="text-muted-foreground text-sm tracking-tight">
                        CTO
                      </p>
                    </div>
                  </div>
                </div>

                {/* Lily Ding */}
                <div className="border-r border-b border-border last:border-r-0">
                  <div className="p-6 flex flex-col items-center text-center gap-4 min-h-[200px]">
                    <Image
                      src={"https://avatars.githubusercontent.com/u/188736174"}
                      alt="Lily Ding"
                      width={80}
                      height={80}
                      className="rounded-xl bg-zinc-100 w-20 h-20 object-cover"
                    />
                    <div>
                      <p className="font-semibold tracking-tight">Lily Ding</p>
                      <p className="text-muted-foreground text-sm tracking-tight">
                        Member
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow link */}
              <Link
                href={"/team"}
                className=" bg-white hover:bg-gray-50 transition-all duration-200 group"
              >
                <div className="flex items-center justify-center py-8 gap-2">
                  <span className="text-lg text-muted-foreground mr-2 tracking-tight">
                    See all team members
                  </span>
                  <CircleArrowRight
                    className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-200 text-muted-foreground"
                    strokeWidth={1.5}
                  />
                </div>
              </Link>
            </div>
          </div>
        </section>

        <div className="linkscape-wrapper bg-white">
          <Divider variant="diagonal" className="border border-border h-12" />
        </div>

        {/* Sponsors section */}
        <section className="relative bg-white">
          <div className="linkscape-wrapper">
            <div className="flex flex-col border-x border-border">
              {/* Title section */}
              <div className="py-12 border-b border-border px-4">
                <h2 className="font-semibold text-3xl tracking-tight">
                  Partners
                </h2>
                <p className="text-lg text-muted-foreground tracking-tight">
                  LinkScape is proudly partnering with the following companies /
                  nonprofits.
                </p>
              </div>

              {/* Partners grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {/* Hack Club */}
                <div className="border-r border-b border-border last:border-r-0">
                  <Link
                    href={"https://hackclub.com/"}
                    className="p-6 flex flex-col items-center justify-center min-h-[160px] hover:bg-gray-50 transition-colors"
                  >
                    <Image
                      src="https://assets.hackclub.com/flag-orpheus-left.svg"
                      alt="Hack Club"
                      width={120}
                      height={36}
                      className="max-h-9 w-auto object-contain"
                    />
                  </Link>
                </div>

                {/* Figma */}
                <div className="border-r border-b border-border last:border-r-0">
                  <Link
                    href={"https://www.figma.com/"}
                    className="p-6 flex flex-col items-center justify-center min-h-[160px] hover:bg-gray-50 transition-colors"
                  >
                    <Image
                      src="https://files.ohevan.com/tmp/Figma-Wordmark-Black.svg"
                      alt="Figma"
                      width={120}
                      height={36}
                      className="max-h-9 w-auto object-contain"
                    />
                  </Link>
                </div>

                {/* AdventureX */}
                <div className="border-r border-b border-border last:border-r-0">
                  <Link
                    href={"https://adventure-x.org/en"}
                    className="p-6 flex flex-col items-center justify-center min-h-[160px] hover:bg-gray-50 transition-colors"
                  >
                    <Image
                      src="https://cdn.linkscape.app/adventureX.png"
                      alt="AdventureX"
                      width={120}
                      height={36}
                      className="max-h-9 w-auto object-contain"
                    />
                  </Link>
                </div>

                {/* Spark Lab */}
                <div className="border-r border-b border-border last:border-r-0">
                  <Link
                    href={"https://www.twilio.com/"}
                    className="p-6 flex flex-col items-center justify-center min-h-[160px] hover:bg-gray-50 transition-colors"
                  >
                    <Image
                      src="https://cdn.linkscape.app/spark_logo.png"
                      alt="Spark Lab"
                      width={120}
                      height={36}
                      className="max-h-9 w-auto object-contain"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
