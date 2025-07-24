import NavBar from "@/components/header";
import { Metadata } from "next";
import BlurFadeStagger from "@/components/animations/blur-fade-stagger";

export const metadata: Metadata = {
  title: "LinkScape | About",
  description: "We are LinkScape.",
};

export default function About() {
  return (
    <>
      <NavBar />
      <main className="flex flex-col min-h-screen">
        {/* Hero Title */}
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
            <div className="flex flex-col gap-4 pt-32 pb-16 border-x border-border border-dashed px-4">
              <BlurFadeStagger initialDelay={0.1}>
                <h1 className="font-semibold tracking-tight text-4xl sm:text-5xl w-full text-center">
                  We{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-purple-700">
                    Hack,{" "}
                  </span>
                  We{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-purple-700">
                    Grow.
                  </span>
                </h1>
                <h2 className="text-base sm:text-lg text-gh-text-secondary text-center max-w-2xl mx-auto">
                  LinkScape is led by passionate students dedicated to influencing the world through technology.
                </h2>
              </BlurFadeStagger>
            </div>
          </div>
        </section>

        {/* Content section */}
        <section className="relative border-t border-border bg-white">
          <div className="linkscape-wrapper">
            <div className="border-x border-border">
              <div className="p-8 text-center">
                <div className="max-w-2xl mx-auto">
                  <h3 className="text-xl font-semibold tracking-tight mb-4">
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    We believe in the power of open source technology to create positive change. 
                    Through our projects and community, we aim to inspire the next generation of 
                    developers and innovators to build solutions that matter.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
