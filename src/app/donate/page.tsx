import React from "react";
import NavBar from "@/components/header";
import { Metadata } from "next";
import BlurFadeStagger from "@/components/animations/blur-fade-stagger";

export const metadata: Metadata = {
  title: "LinkScape | Donate",
  description:
    "Support LinkScape's mission to influence the world through technology",
};

export default function Donate() {
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
                  Donate
                </h1>
                <h2 className="max-w-md text-base text-gh-text-secondary sm:text-lg">
                  Support LinkScape's mission to influence the world through
                  technology.
                </h2>
              </BlurFadeStagger>
            </div>
          </div>
        </section>

        {/* Donation section */}
        <section className="relative flex-1 border-t border-border bg-white">
          <div className="linkscape-wrapper">
            <div className="h-full border-x border-border">
              <iframe
                src="https://hcb.hackclub.com/donations/start/linkscape"
                name="donateFrame"
                height="780px"
                width="100%"
                allowFullScreen
                className="border-0"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
