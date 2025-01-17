import Leaders from "@/components/leaders";
import Newsletter from "@/components/newsletter";
import NavBar from "@/components/header";
import { Metadata } from "next";
import Sponsors from "@/components/sponsors";
import HomeTitle from "@/components/home-animations/home-title";
import HomeButtons from "@/components/home-animations/home-buttons";
import { Cell, Cross, GridDivider, GridSystem } from "@/components/Grid";
import BlurFadeStagger from "@/components/animations/blur-fade-stagger";
import { Grid } from "@/components/Grid";
import { HeartIcon } from "@primer/octicons-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MarkGithubIcon } from "@primer/octicons-react";
import BlurFade from "@/components/animations/blur-fade";

export const metadata: Metadata = {
  title: "LinkScape | Home",
  description: "We are LinkScape.",
};

export default function Index() {
  return (
    <>
      <NavBar />
      <div className="mt-24 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center w-full h-full z-3 max-w-6xl p-4">
          <GridSystem>
            <HomeTitle />
            <GridDivider height={"2rem"} />
            <Leaders />
            <GridDivider height={"2rem"} />
            <Sponsors />
          </GridSystem>
        </div>
      </div>

    </>
  );
}
