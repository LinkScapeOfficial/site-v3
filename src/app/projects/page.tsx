import { FaDownload, FaExchangeAlt, FaGithub } from "react-icons/fa";
import { FaCloudArrowDown } from "react-icons/fa6";
import Link from "next/link";
import NavBar from "@/components/header";
import { Metadata } from "next";
import Image from "next/image";
import BlurFadeStagger from "@/components/animations/blur-fade-stagger";
import { Button } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";

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
        icon: FaCloudArrowDown,
      },
      {
        name: "MP4 Format",
        description: "No more converting to MP4, we support it natively",
        icon: FaExchangeAlt,
      },
      {
        name: "Open Source",
        description: "Source code is released to the public",
        icon: FaGithub,
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
      <main className="flex flex-col min-h-screen h-full">
        {/* Hero Title */}
        <section className="relative bg-background ">
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
                  Projects
                </h1>
                <h2 className="text-base sm:text-lg text-gh-text-secondary max-w-md">
                  Explore our open source projects.
                </h2>
              </BlurFadeStagger>
            </div>
          </div>
        </section>

        {/* Projects section */}
        <section className="relative border-t border-border bg-white flex-1 h-full">
          <div className="linkscape-wrapper">
            <div className="border-x border-border">
              {/* Projects list */}
              <div className="flex flex-col">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className={`bg-white hover:bg-gray-50 transition-colors flex flex-row items-start p-8 min-h-[300px] ${
                      index !== projects.length - 1
                        ? "border-b border-border"
                        : ""
                    }`}
                  >
                    {/* Project Image */}
                    <div className="flex-shrink-0 mr-8">
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={300}
                        height={200}
                        className="rounded-xl shadow-lg w-72 h-48 object-cover"
                      />
                    </div>

                    {/* Project Content */}
                    <div className="flex-1 flex flex-col">
                      <div className="mb-6">
                        <p className="text-sm font-semibold text-muted-foreground mb-2">
                          {project.subtitle}
                        </p>
                        <h3 className="text-2xl font-semibold tracking-tight mb-3">
                          {project.name}
                        </h3>
                        <p className="text-muted-foreground text-base tracking-tight mb-6">
                          {project.description}
                        </p>
                      </div>

                      {/* Features */}
                      <div className="mb-6 space-y-4">
                        {project.features.map((feature) => (
                          <div key={feature.name} className="flex items-start">
                            <feature.icon className="w-5 h-5 text-muted-foreground mr-3 mt-0.5 flex-shrink-0" />
                            <div>
                              <dt className="font-semibold text-sm mb-1">
                                {feature.name}
                              </dt>
                              <dd className="text-muted-foreground text-sm">
                                {feature.description}
                              </dd>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <Button asChild>
                          <Link href={project.download}>
                            <FaDownload className="w-4 h-4 mr-2" />
                            Download
                          </Link>
                        </Button>
                        <Button variant="outline" asChild>
                          <Link href={project.github}>
                            <FaGithub className="w-4 h-4 mr-2" />
                            GitHub
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <div className="linkscape-wrapper">
          <Divider variant="diagonal" className="border border-border h-48" />
        </div>
      </main>
    </>
  );
}
