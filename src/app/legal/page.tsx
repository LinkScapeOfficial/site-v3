import NavBar from "@/components/header";
import { Metadata } from "next";
import BlurFadeStagger from "@/components/animations/blur-fade-stagger";
import { FileText, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LinkScape | Legal",
  description: "Legal documents and organizational governance for LinkScape.",
};

export default function Legal() {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col">
        {/* Hero Title */}
        <section className="relative bg-background">
          {/* Gradient shine overlay at the bottom */}
          <div
            className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-16 bg-gradient-radial from-blue-300/20 via-blue-300/5 to-transparent"
            style={{
              background:
                "radial-gradient(ellipse at bottom center, rgba(147, 197, 253, 0.2) 0%, rgba(147, 197, 253, 0.05) 50%, transparent 100%)",
            }}
          ></div>
          <div className="linkscape-wrapper">
            <div className="flex flex-col gap-4 border-x border-dashed border-border px-4 pb-16 pt-32">
              <BlurFadeStagger initialDelay={0.1}>
                <h1 className="w-full bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-500 bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl">
                  Legal
                </h1>
                <h2 className="max-w-md text-base text-gh-text-secondary sm:text-lg">
                  Organizational governance and legal documents for LinkScape.
                </h2>
              </BlurFadeStagger>
            </div>
          </div>
        </section>

        {/* Documents section */}
        <section className="relative border-t border-border bg-white">
          <div className="linkscape-wrapper">
            <div className="border-x border-border">
              {/* Documents list */}
              <div className="flex flex-col">
                <Link
                  href="/legal/Ordinance_MAY5_25.pdf"
                  target="_blank"
                  className="flex min-h-[80px] sm:min-h-[120px] flex-row justify-between items-center bg-white p-4 sm:p-6 transition-colors hover:bg-gray-50"
                >
                  <div className="flex flex-row items-center">
                    {/* Document Icon */}
                    <div className="mr-3 sm:mr-6 flex-shrink-0">
                      <div className="flex h-12 w-12 sm:h-24 sm:w-24 items-center justify-center">
                        <FileText
                          className="h-12 w-12 sm:h-24 sm:w-24 text-muted-foreground"
                          strokeWidth={1}
                        />
                      </div>
                    </div>

                    {/* Document Info */}
                    <div className="flex flex-1 flex-col justify-center">
                      <h3 className="mb-1 text-lg sm:text-2xl font-semibold tracking-tight">
                        LinkScape Ordinance
                      </h3>
                      <p className="max-w-lg text-sm sm:text-base leading-tight tracking-tight text-muted-foreground">
                        The official organizational ordinance document governing
                        LinkScape operations, structure, and procedures.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row items-center">
                    <ArrowUpRight className="h-6 w-6 sm:h-24 sm:w-24 text-muted-foreground" strokeWidth={1} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="linkscape-wrapper flex h-full flex-1 flex-col">
          <div className="h-full w-full flex-1 border border-dashed"></div>
        </section>
      </main>
    </>
  );
}
