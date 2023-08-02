import { FaDonate, FaGithub } from "react-icons/fa";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-12 flex flex-col items-center justify-center sm:mt-60">
      <Head>
        <title>LinkScape | Home</title>
      </Head>
      <div
        className="absolute inset-0 grid grid-cols-2 -space-x-12 opacity-40 dark:opacity-20 sm:-space-x-52"
        style={{ zIndex: -1 }}
      >
        <div className="fix-safari-blur h-32 bg-gradient-to-br from-blue-500 to-blue-400 blur-[32px] dark:from-blue-700 sm:h-64 sm:blur-[106px]"></div>
        <div className="fix-safari-blur h-20 bg-gradient-to-r from-blue-400 to-blue-300 blur-[32px] dark:to-blue-600 sm:h-40 sm:blur-[106px]"></div>
      </div>
      <h1 className="text-center text-4xl font-bold sm:text-8xl">
        We are{" "}
        <span className="bg-gradient-to-r from-blue-500 to-purple-700 bg-clip-text text-transparent">
          LinkScape
        </span>
      </h1>
      <p className="py-6 text-center text-base sm:text-lg">
        We are a group of students who hack, build, and compete together.
      </p>
      <div className="flex flex-row">
        <Link href="https://github.com/LinkScapeOfficial">
          <button className="mr-3 flex items-center rounded-md bg-black px-3 py-2 text-white">
            <FaGithub className="mr-1.5 h-7 w-7" />
            <div className="font-semibold">GitHub</div>
          </button>
        </Link>
        <Link href="/donate">
          <button className="mr-3 flex items-center rounded-md bg-black px-3 py-2 text-white">
            <FaDonate className="mr-1.5 h-7 w-7" />
            <div className="font-semibold">Donate</div>
          </button>
        </Link>
      </div>
    </div>
  );
}
