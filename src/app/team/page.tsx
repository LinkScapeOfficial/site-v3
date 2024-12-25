import Link from "next/link";
import Image from "next/image";
import NavBar from "@/src/components/header";
import { Metadata } from "next";
import { FaGithub } from "react-icons/fa";

export const metadata: Metadata = {
  title: "LinkScape | Team",
  description: "Meet the LinkScape team",
};

const people = [
  {
    name: "Thomas Wu",
    role: "Founder & CEO",
    imageUrl: "https://cdn.linkscape.app/ThomasWu.png",
    github: "https://github.com/TakumiBC",
  },
  {
    name: "Jett Chen",
    role: "Co-Founder",
    imageUrl: "https://cdn.linkscape.app/JettChen.png",
    github: "https://github.com/JettChenT",
  },
  {
    name: "Zigao Wang",
    role: "CTO",
    imageUrl: "https://avatars.githubusercontent.com/u/102006756",
    github: "https://github.com/ZigaoWang",
  },
  {
    name: "Lily Ding",
    role: "CFO",
    imageUrl: "https://avatars.githubusercontent.com/u/188736174",
    github: "https://github.com/Lily-D-coder",
  },
  {
    name: "Tz-Yun Hsiao",
    role: "Member",
    imageUrl: "https://cdn.linkscape.app/TzeYunHsiao.png",
    github: "https://github.com/Powerlean",
  },
  {
    name: "Thedust Ye",
    role: "Member",
    imageUrl: "https://cdn.linkscape.app/Thedustye.png",
    github: "https://github.com/Thedustye",
  },
  {
    name: "Evan Luo",
    role: "Member",
    imageUrl: "https://files.ohevan.com/img/IMG_3824_best.png",
    github: "https://github.com/evannotfound",
  },
  {
    name: "Anthony Ji",
    role: "Member",
    imageUrl: "https://cdn.linkscape.app/AnthonyJi.jpg",
    github: "",
  },
];

export default function Team() {
  return (
    <>
      <NavBar />
      {/*<div*/}
      {/*  className={*/}
      {/*    "background-dotted w-screen fixed top-0 left-0 h-screen -z-20 dark:opacity-10"*/}
      {/*  }*/}
      {/*/>*/}
      <div className="mb-10 mt-32">
        <div className="absolute inset-0 grid grid-cols-2 -space-x-12 opacity-10 dark:opacity-20 sm:-space-x-52 z-10 pointer-events-none">
          <div className="fix-safari-blur h-32 bg-gradient-to-br from-blue-500 to-blue-400 blur-[32px] dark:from-blue-700 sm:h-64 sm:blur-[106px]"></div>
          <div className="fix-safari-blur h-20 bg-gradient-to-r from-blue-400 to-blue-300 blur-[32px] dark:to-blue-600 sm:h-40 sm:blur-[106px]"></div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-left text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl px-8 sm:px-16">
            Team
          </h1>
          <p className="mt-4 max-w-2xl text-left text-xl text-gray-500 px-8 sm:px-16">
            Meet the team behind LinkScape.
          </p>
          <div className="mt-6 mb-10 border-b-2 border-gh-border mx-8 sm:mx-16" />
          <ul
            role="list"
            className="mt-8 grid gap-x-6 gap-y-6 grid-cols-2 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-8 xl:grid-cols-4 xl:gap-y-10"
          >
            {people.map((person, index) => (
              <div key={index}>
                <li className="flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <Image
                      className={`${
                        person.imageUrl ? "" : "p-3"
                      } h-24 w-24 rounded-full gh-border shadow-sm hover:shadow-lg transition-shadow cursor-pointer bg-gh-bg`}
                      src={
                        person.imageUrl
                          ? person.imageUrl
                          : "https://files.ohevan.com/img/a3c212565127bde07c193731c3a1e997-421e1.svg"
                      }
                      width={512}
                      height={512}
                      alt=""
                    />
                    <div className="text-center mt-2">
                      <h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-900">
                        {person.name}
                      </h3>
                      <p className="text-sm font-semibold leading-6 text-indigo-600">
                        {person.role}
                      </p>
                    </div>
                    {person.github && (
                      <Link
                        href={person.github}
                        className="flex flex-row items-center ml-2 hover:underline mt-2"
                      >
                        <FaGithub className="w-4 h-4 text-gh-text-primary hover:text-gh-text-secondary transition-colors" />
                        <p className={"inline ml-1 text-sm font-semibold"}>
                          {person.github.replace("https://github.com/", "")}
                        </p>
                      </Link>
                    )}
                  </div>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
