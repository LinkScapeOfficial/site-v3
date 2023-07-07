import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { FaExchangeAlt, FaGithub, FaDownload } from 'react-icons/fa'
import { FaCloudArrowDown} from "react-icons/fa6";
import Link from 'next/link'
import Head from 'next/head'

const features = [
    {
        name: 'Download Instantly',
        description: 'Intergrated with web browsers, download videos with a single click',
        icon: FaCloudArrowDown,
    },
    {
        name: 'MP4 Format',
        description:
            'No more converting to MP4, we support it natively',
        icon: FaExchangeAlt,
    },
    {
        name: 'Open Source',
        description: 'Source code is released to the public',
        icon: FaGithub,
    },
]

export default function Projects() {
    return (
        <div className="overflow-hidden bg-white mt-12 mb-4 sm:py-32">
            <Head>
                <title>LinkScape | Projects</title>
            </Head>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-7 text-indigo-600">The Best Video Downloader</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">LinkDown</p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900">
                                            <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                                            {feature.name}
                                        <br />
                                        </dt>{' '}
                                        <dd className="inline">{feature.description}</dd>
                                    </div>
                                ))}
                                <div className="flex flex-row">
                                    <Link href="https://github.com/LinkScapeOfficial/LinkDown/releases">
                                        <button className="bg-black text-white px-3 py-2 rounded-md flex items-center mr-3 mt-2">
                                            <FaDownload className="w-5 h-5 mr-1.5" />
                                            <div className="font-semibold">Download</div>
                                        </button>
                                    </Link>
                                    <Link href="https://github.com/LinkScapeOfficial/LinkDown">
                                        <button className="bg-black text-white px-3 py-2 rounded-md flex items-center mr-3 mt-2">
                                            <FaGithub className="w-5 h-5 mr-1.5" />
                                            <div className="font-semibold">GitHub</div>
                                        </button>
                                    </Link>
                                </div>
                            </dl>
                        </div>
                    </div>
                    <img
                        src="https://cdn.linkscape.app/LinkDown_Sample.png"
                        alt=""
                        className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 hidden md:block"
                    />
                </div>
            </div>
        </div>
    )
}
