import NavBar from "@/components/header";
import { Metadata } from "next";
import Hero from "@/app/about/Hero";
import LegalDoc from "@/app/about/LegalDoc";

export const metadata: Metadata = {
  title: "LinkScape | About",
  description: "We are LinkScape.",
};

export default function About() {
  return (
    <>
      <NavBar />
      <div className="mb-20 mt-32 flex flex-col items-center justify-center sm:mb-64 sm:mt-36">
        <Hero />
      </div>
    </>
  );
}
