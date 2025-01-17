"use client";
import Image from "next/image";
import Link from "next/link";

export default function HomeTeamPerson({
  person,
}: {
  person: {
    name: string;
    imageUrl: string;
    role: string;
    github: string;
  };
}) {
  return (
    <div className="flex items-center flex-col gap-y-3 animate-fadeIn">
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
  );
}
