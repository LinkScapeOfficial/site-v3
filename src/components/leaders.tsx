import Link from "next/link";
import Image from "next/image";
import { PeopleIcon } from "@primer/octicons-react";
import { RiArrowRightLine } from "react-icons/ri";

const people = [
  {
    name: "Thomas Wu",
    role: "Founder & CEO",
    imageUrl: "https://cdn.linkscape.app/ThomasWu.png",
    github: "https://github.com/thomaswcy",
  },
  {
    name: "Meli Liu",
    role: "Founder",
    imageUrl: "https://cdn.linkscape.app/MeliLiu.png",
    github: "https://github.com/MeliLXT",
  },
  {
    name: "Jett Chen",
    role: "Co-Founder & CTO",
    imageUrl: "https://cdn.linkscape.app/JettChen.png",
    github: "https://github.com/JettChenT",
  },
  {
    name: "Snapdragon Lee",
    role: "Co-Founder",
    imageUrl: "https://avatars.githubusercontent.com/u/61799448",
    github: "https://github.com/SnapdragonLee",
  },
  {
    name: "Anthony Ji",
    role: "Co-Founder & Head of Singapore",
    imageUrl: "https://cdn.linkscape.app/AnthonyJi.jpg",
    github: "",
  },
];

export default function Leaders() {
  return (
    <div className="mb-10 bg-white mx-auto grid grid-cols-12 p-8 sm:p-16 relative">
      <div className="col-span-1 hidden lg:block">
        <div className="w-12 h-12 flex items-center justify-center -left-2 top-2 transform translate-x-px relative border-2 rounded-full bg-white z-20">
          <PeopleIcon className={"text-gh-gray-4 w-5 h-5"} />
        </div>
      </div>
      <div className="mt-1 col-span-12 lg:col-span-10 lg:col-start-2 mb-8">
        <div className={"flex flex-row items-center cursor-pointer group"}>
          <Link href={"/team"}>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Team
            </h2>
          </Link>
          <RiArrowRightLine
            strokeWidth={2}
            className={
              "ml-1.5 w-8 h-8 group-hover:translate-x-1.5 transition-transform duration-200"
            }
          />
        </div>

        <h3 className={"mt-2 text-gh-text-secondary text-lg"}>
          Meet the team behind LinkScape.
        </h3>
      </div>
      <div className="col-span-1 col-start-1 hidden lg:block">
        <div className="border-l-2 border-gh-gray-2/60 h-[91.5%] absolute top-20 left-20 translate-x-[1px] z-10"></div>
      </div>
      <div className="col-span-12 lg:col-span-10 lg:col-start-2 mt-4">
        <ul
          role="list"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-12"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center flex-col gap-y-3">
                <Image
                  className="h-28 w-28 rounded-full shadow-sm hover:shadow-lg transition-shadow duration-200 gh-border cursor-pointer"
                  src={person.imageUrl}
                  width={512}
                  height={512}
                  alt=""
                />
                <div className={"mt-1"}>
                  <Link href={person.github}>
                    <h3 className="text-lg font-semibold hover:underline leading-7 tracking-tight text-gray-900 text-center">
                      {person.name}
                    </h3>
                  </Link>
                  <p className="text-sm font-semibold leading-6 text-indigo-600 text-center w-40">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
