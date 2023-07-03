export default function About() {
    return(
        <>
            <div className="flex flex-col justify-center items-center mt-12 sm:mt-60">
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
            </div>
        </>
    )
}