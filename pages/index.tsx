import Image from 'next/image'
import { FaGithub, FaDonate } from 'react-icons/fa'

export default function Home() {
    return (
        <div className="flex flex-col justify-center items-center mt-64">
            <div className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20" style={{ zIndex: -1 }}>
                <div className="fix-safari-blur blur-[106px] h-64 bg-gradient-to-br from-blue-500 to-blue-400 dark:from-blue-700"></div>
                <div className="fix-safari-blur blur-[106px] h-40 bg-gradient-to-r from-blue-400 to-blue-300 dark:to-blue-600"></div>
            </div>
            <h1 className="text-8xl font-bold text-center">
                We are{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700">
                    LinkScape
                </span>
            </h1>
            <p className="py-6 text-lg text-center">
                A group of students who hack, build, and compete together.
            </p>
            <div className="flex flex-row">
            <button className="bg-black text-white px-4 py-2 rounded-md flex items-center mr-3">
                <FaGithub className="w-6 h-6 mr-1.5" />
                  GitHub
            </button>
            <button className="bg-black text-white px-4 py-2 rounded-md flex items-center mr-3">
                <FaDonate className="w-6 h-6 mr-1.5" />
                    Donate
            </button>
            </div>
        </div>
    )
}
