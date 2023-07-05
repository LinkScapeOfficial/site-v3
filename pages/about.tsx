import Link from 'next/link'
export default function About() {
    return(
        <>
            <div className="flex flex-col justify-center items-center mt-12 sm:mt-60 sm:mb-64 mb-20">
                <div className="absolute inset-0 grid grid-cols-2 -space-x-12 sm:-space-x-52 opacity-40 dark:opacity-20" style={{ zIndex: -1 }}>
                    <div className="fix-safari-blur blur-[32px] sm:blur-[106px] h-32 sm:h-64 bg-gradient-to-br from-blue-500 to-blue-400 dark:from-blue-700"></div>
                    <div className="fix-safari-blur blur-[32px] sm:blur-[106px] h-20 sm:h-40 bg-gradient-to-r from-blue-400 to-blue-300 dark:to-blue-600"></div>
                </div>
                <h1 className="text-4xl sm:text-8xl font-bold text-center">
                  We are{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700">
                    Students
                  </span>
                </h1>
                <h1 className="text-4xl sm:text-8xl font-bold text-center">
                  We Love{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700">
                    Technology
                  </span>
                </h1>
                <p className="py-6 text-base sm:text-lg text-center">
                    LinkScape is a nonprofit led by passionate students dedicated to influence the world through technology.
                </p>
                <div className="flex flex-wrap">
                    <Link href="https://cdn.linkscape.app/IRS_Letter.pdf" className="mr-2">
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow h-100">
                            <div className="flex justify-center items-center">
                                <img className="rounded-t-lg max-h-72" src="https://cdn.linkscape.app/IRS_Letter.png" alt="" />
                            </div>
                            <div className="p-5 w-48 -mt-16">
                              IRS 501(c)(3) Status Determination Letter
                            </div>
                        </div>
                    </Link>
                    <Link href="https://cdn.linkscape.app/Certificate_of_Status.pdf" className="mr-2">
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow h-100">
                            <div className="flex justify-center items-center">
                                <img className="rounded-t-lg max-h-72" src="https://cdn.linkscape.app/Certificate_of_Status.png" alt="" />
                            </div>
                            <div className="p-5 w-48 -mt-16">
                                Certificate of Status
                            </div>
                        </div>
                    </Link>
                    <Link href="https://cdn.linkscape.app/fiscal_sponsorship_letter.pdf" className="mr-2">
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow h-100">
                            <div className="flex justify-center items-center">
                                <img className="rounded-t-lg max-h-72" src="https://cdn.linkscape.app/fiscal_sponsorship_letter.png" alt="" />
                            </div>
                            <div className="p-5 w-48 -mt-16">
                                Fiscal Sponsorship Confirmation
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}