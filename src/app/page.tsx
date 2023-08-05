import Leaders from "@/src/components/leaders";
import Newsletter from "@/src/components/newsletter";
import NavBar from "@/src/components/header";
import { Metadata } from "next";
import Sponsors from "@/src/components/sponsors";
import HomeTitle from "@/src/components/home-animations/home-title";
import HomeButtons from "@/src/components/home-animations/home-buttons";

export const metadata: Metadata = {
  title: "LinkScape | Home",
  description: "We are Linkscape.",
};

export default function Index() {
  return (
    <>
      <NavBar />
      <div className="mt-12 flex flex-col items-center justify-center min-h-screen">
        {/*<div*/}
        {/*  className="absolute top-1/3 translate-y-[20px] sm:-translate-y-[40px] inset-0 grid grid-cols-2 -space-x-12 opacity-40 dark:opacity-20 sm:-space-x-52"*/}
        {/*  style={{ zIndex: -1 }}*/}
        {/*>*/}
        {/*  <div className="fix-safari-blur h-48 bg-gradient-to-br from-blue-500/60 to-blue-400/60 blur-[80px] dark:from-blue-700 sm:h-72 sm:blur-[120px]"></div>*/}
        {/*  <div className="fix-safari-blur h-32 bg-gradient-to-r from-blue-400/60 to-blue-300/60 blur-[80px] dark:to-blue-600 sm:h-40 sm:blur-[120px]"></div>*/}
        {/*</div>*/}
        <HomeTitle />
        <HomeButtons />
      </div>
      <Sponsors />
      <Leaders />
      <Newsletter />
    </>
  );
}
