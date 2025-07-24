import { SiGithub } from "@icons-pack/react-simple-icons";
import Link from "next/link";
import NavBar from "@/components/header";
import { Metadata } from "next";
import Image from "next/image";
import BlurFadeStagger from "@/components/animations/blur-fade-stagger";
import { Button } from "@/components/ui/button";
import { CircleArrowDown, CloudDownload, Film } from "lucide-react";

export const metadata: Metadata = {
  title: "LinkScape | Projects",
  description: "LinkScape's projects",
};

const projects = [
  {
    name: "LinkDown",
    subtitle: "The Best Video Downloader",
    description:
      "A powerful video downloader integrated with web browsers for instant downloads",
    image: "https://cdn.linkscape.app/LinkDown_Sample.png",
    features: [
      {
        name: "Download Instantly",
        description:
          "Integrated with web browsers, download videos with a single click",
        icon: CloudDownload,
      },
      {
        name: "MP4 Format",
        description: "No more converting to MP4, we support it natively",
        icon: Film,
      },
      {
        name: "Open Source",
        description: "Source code is released to the public",
        icon: SiGithub,
      },
    ],
    github: "https://github.com/LinkScapeOfficial/LinkDown",
    download: "https://github.com/LinkScapeOfficial/LinkDown/releases",
  },
];

export default function Projects() {
  return (
    <>
      <NavBar />
      <main className="flex h-full min-h-screen flex-col">
        {/* Hero Title */}
        <section className="relative bg-background ">
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
                  Projects
                </h1>
                <h2 className="max-w-md text-base text-gh-text-secondary sm:text-lg">
                  Explore our open source projects.
                </h2>
              </BlurFadeStagger>
            </div>
          </div>
        </section>

        {/* Projects section */}
        <section className="relative border-t border-border bg-white">
          <div className="linkscape-wrapper">
            <div className="border-x border-border">
              {/* Projects list */}
              <div className="flex flex-col">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className={`relative flex min-h-[300px] flex-row items-start bg-white p-8 transition-colors hover:bg-gray-50 overflow-hidden ${
                      index !== projects.length - 1
                        ? "border-b border-border"
                        : ""
                    }`}
                  >
                    {/* Project Content */}
                    <div className="flex flex-1 flex-col gap-4">
                      <div className="">
                        <p className="mb-2 text-sm font-semibold text-muted-foreground">
                          {project.subtitle}
                        </p>
                        <h3 className="mb-3 text-2xl font-semibold tracking-tight">
                          {project.name}
                        </h3>
                        <p className="mb-6 text-base tracking-tight text-muted-foreground">
                          {project.description}
                        </p>
                      </div>

                      {/* Features */}
                      <div className="flex flex-col gap-2">
                        {project.features.map((feature) => (
                          <div key={feature.name} className="flex items-start">
                            <feature.icon className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-muted-foreground" />
                            <div>
                              <dt className="mb-1 text-sm font-semibold">
                                {feature.name}
                              </dt>
                              <dd className="text-sm text-muted-foreground">
                                {feature.description}
                              </dd>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <Button asChild className="rounded-full flex flex-row items-center gap-2">
                          <Link href={project.download}>
                            <CircleArrowDown className="h-4 w-4" />
                            Download
                          </Link>
                        </Button>
                        <Button
                          variant="outline"
                          asChild
                          className="rounded-full flex flex-row items-center gap-2"
                        >
                          <Link href={project.github}>
                            <SiGithub className="h-4 w-4" />
                            GitHub
                          </Link>
                        </Button>
                      </div>

                      {/* Project Image */}
                      <div className="absolute right-0 translate-x-1/4 top-1/2 -translate-y-1/2 flex-shrink-0">
                        <Image
                          src={project.image}
                          alt={project.name}
                          width={300}
                          height={200}
                          className="h-80 w-auto rounded-xl object-cover shadow-lg"
                        />
                      </div>
                    </div>
                  </div>
                ))}
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
