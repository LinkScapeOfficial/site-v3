import { FaHome, FaDonate } from 'react-icons/fa'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
    return (
        <div className="flex flex-col justify-center items-center mt-60 sm:mt-64 mb-64">
            <Head>
                <title>LinkScape | 404</title>
            </Head>
            <div className="absolute inset-0 grid grid-cols-2 -space-x-12 sm:-space-x-52 opacity-40 dark:opacity-20" style={{ zIndex: -1 }}>
                <div className="fix-safari-blur blur-[32px] sm:blur-[106px] h-32 sm:h-64 bg-gradient-to-br from-blue-500 to-blue-400 dark:from-blue-700"></div>
                <div className="fix-safari-blur blur-[32px] sm:blur-[106px] h-20 sm:h-40 bg-gradient-to-r from-blue-400 to-blue-300 dark:to-blue-600"></div>
            </div>
            <h1 className="text-4xl sm:text-8xl font-bold text-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700">
                    404 Error
                </span>
            </h1>
            <div className="py-6 text-base sm:text-lg text-center">
                Sorry, we couldn&apos;t find the page you&apos;re looking for.
                <br />
                But you can find us happy by donating to us!
            </div>
            <div className="flex flex-row">
                <Link href="/">
                    <button className="bg-black text-white px-3 py-2 rounded-md flex items-center mr-3">
                        <FaHome className="w-7 h-7 mr-1.5" />
                        <div className="font-semibold">Home</div>
                    </button>
                </Link>
                <Link href="/">
                    <button className="bg-black text-white px-3 py-2 rounded-md flex items-center mr-3">
                        <FaDonate className="w-7 h-7 mr-1.5" />
                        <div className="font-semibold">Donate</div>
                    </button>
                </Link>
            </div>
        </div>
    )
}
