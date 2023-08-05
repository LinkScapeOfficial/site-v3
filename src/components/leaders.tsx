import { FiMoreHorizontal } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

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
    <div className="-mt-5 mb-10 bg-white">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-10 px-6 sm:gap-y-12 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet Our Team
          </h2>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-6 sm:grid-cols-2 sm:gap-y-8 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <Image
                  className="h-16 w-16 rounded-full"
                  src={person.imageUrl}
                  width={512}
                  height={512}
                  alt=""
                />
                <div>
                  <Link href={person.github}>
                    <h3 className="text-base font-semibold hover:underline leading-7 tracking-tight text-gray-900">
                      {person.name}
                    </h3>
                  </Link>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
          <li className="flex items-center gap-x-6">
            <Link href="/team">
              <div className="flex items-center gap-x-6">
                <FiMoreHorizontal className="h-16 w-16 rounded-full" />
                <h3 className="-mt-1 text-base font-semibold leading-7 tracking-tight text-gray-900">
                  View More
                </h3>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
