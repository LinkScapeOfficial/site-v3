import Leaders from "@/src/components/leaders";
import Newsletter from "@/src/components/newsletter";
import NavBar from "@/src/components/header";
import { Metadata } from "next";
import Sponsors from "@/src/components/sponsors";
import HomeTitle from "@/src/components/home-animations/home-title";
import HomeButtons from "@/src/components/home-animations/home-buttons";

export const metadata: Metadata = {
  title: "LinkScape | Home",
  description: "We are LinkScape.",
};

export default function Index() {
  return (
    <>
      <NavBar />
      <div className="absolute -top-6 sm:-top-12 left-0 sm:left-12 w-96 h-72 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-75 flex items-center justify-center blur-[300px]"></div>
      <div className="mt-6 flex flex-col items-center justify-center min-h-screen">
        <HomeTitle />
        <HomeButtons />
      </div>
      <div className={"min-h-screen flex flex-col justify-center"}>
        <Leaders />
        <Newsletter />
      </div>

      <Sponsors />
    </>
  );
}
