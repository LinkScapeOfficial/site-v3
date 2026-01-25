import Link from "next/link";
import Image from "next/image";
import NavBar from "@/components/header";
import { Metadata } from "next";
import { MarkGithubIcon } from "@primer/octicons-react";
import BlurFadeStagger from "@/components/animations/blur-fade-stagger";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "LinkScape | Team",
  description: "Meet the LinkScape team",
};

const people = [
  {
    name: "Thomas Wu",
    role: "Founder & CEO",
    imageUrl: "https://avatars.githubusercontent.com/u/62056970",
    github: "https://github.com/TakumiBC",
  },
  {
    name: "Eric Yan",
    role: "Co-founder",
    imageUrl: "https://cdn.linkscape.app/EricYan.jpg",
    github: "",
  },
  {
    name: "Zigao Wang",
    role: "CTO",
    imageUrl: "https://avatars.githubusercontent.com/u/102006756",
    github: "https://github.com/ZigaoWang",
  },
  {
    name: "Lily Ding",
    role: "Member",
    imageUrl: "https://avatars.githubusercontent.com/u/188736174",
    github: "https://github.com/Lily-D-coder",
  },
  {
    name: "July Wu",
    role: "Member",
    imageUrl: "https://cdn.linkscape.app/JulyWu.png",
    github: "https://github.com/JLW-7",
  },
  {
    name: "Matthew Dong",
    role: "Member",
    imageUrl: "https://cdn.linkscape.app/MattDong.jpg",
    github: "https://github.com/matt-dong-123",
  },
  {
    name: "Jett Chen",
    role: "Fellow & Former Co-founder",
    imageUrl: "https://cdn.linkscape.app/JettChen.png",
    github: "https://github.com/JettChenT",
  },
  {
    name: "Evan Luo",
    role: "Fellow & Head of Web",
    imageUrl: "https://placehold.co/600x600",
    github: "https://github.com/evannotfound",
  },
  {
    name: "Tz-yun Hsiao",
    role: "Fellow & Head of Designs",
    imageUrl: "https://cdn.linkscape.app/TzeYunHsiao.png",
    github: "https://github.com/Powerlean",
  },
];

export default function Team() {
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
                <h1 className="font-semibold tracking-tight text-4xl sm:text-5xl w-full text-transparent bg-clip-text bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-500">
                  Team
                </h1>
                <h2 className="text-base sm:text-lg text-gh-text-secondary max-w-md">
                  Meet the team behind LinkScape.
                </h2>
              </BlurFadeStagger>
            </div>
          </div>
        </section>

        {/* Team section */}
        <section className="relative border-y border-border bg-white">
          <div className="linkscape-wrapper">
            <div className="border-x border-border">
              {/* Team members list */}
              <div className="flex flex-col">
                {people.map((person, index) => (
                  <div 
                    key={index} 
                    className={`bg-white hover:bg-gray-50 transition-colors flex flex-row items-center p-6 min-h-[120px] ${
                      index !== people.length - 1 ? 'border-b border-border' : ''
                    }`}
                  >
                    {/* Profile Picture */}
                    <div className="flex-shrink-0 mr-6">
                      <Image
                        src={person.imageUrl || "https://assets.ohevan.com/img/a3c212565127bde07c193731c3a1e997-421e1.svg"}
                        alt={person.name}
                        width={100}
                        height={100}
                        className="rounded-xl bg-zinc-100 w-24 h-24 object-cover"
                      />
                    </div>

                    {/* Info Content */}
                    <div className="flex-1 flex flex-col justify-center">
                      <h3 className="text-2xl font-semibold tracking-tight mb-1">
                        {person.name}
                      </h3>
                      <p className="text-muted-foreground text-base tracking-tight mb-3">
                        {person.role}
                      </p>
                      
                      {/* GitHub Button */}
                      {person.github && (
                        <div>
                          <Button variant="outline" size="sm" asChild className="rounded-full">
                            <Link href={person.github} className="flex items-center !gap-1">
                              <MarkGithubIcon className="w-4 h-4 mr-2" />
                              <span className="text-sm">{person.github.replace("https://github.com/", "")}</span>
                            </Link>
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
