import Leaders from "@/components/leaders";
import Newsletter from "@/components/newsletter";
import NavBar from "@/components/header";
import { Metadata } from "next";
import Sponsors from "@/components/sponsors";
import HomeTitle from "@/components/home-animations/home-title";
import HomeButtons from "@/components/home-animations/home-buttons";
import { Cell, Cross } from "@/components/Grid";
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
      <div className="mt-24 flex flex-col items-center justify-center ">
        <div className="flex flex-col items-center justify-center w-full h-full z-3">
          <div className="w-full h-full max-w-6xl p-4">
            <Grid
              rows={{
                sm: 4,
                md: 6,
                lg: 8,
              }}
              columns={{
                sm: 4,
                md: 8,
                lg: 12,
              }}
            >
              <Cell
                row={{
                  sm: "1/4",
                  md: "2/6",
                  lg: "2/6",
                }}
                column={{
                  sm: "1/-1",
                  md: "2/8",
                  lg: "2/12",
                }}
                solid
              >
                <HomeTitle />
              </Cell>
              <Cell
                row={{
                  sm: "4/5",
                  md: "6/8",
                  lg: "7",
                }}
                column={{
                  sm: "1/-1",
                  md: "1/-1",
                  lg: "3/12",
                }}
                columnSpan={8}
                solid
              >
                <BlurFade delay={0.3}>
                  <h2 className="p-6 text-center text-base text-gh-text-secondary">
                    We are a group of students who love open source and hacking.
                    We create carefully crafted projects that are both
                    functional and beautiful.
                  </h2>
                </BlurFade>
              </Cell>
              <Cross row={1} column={1} />
              <Cross row={-1} column={-1} />
            </Grid>
          </div>
        </div>
      </div>
      <div className={"min-h-screen flex flex-col justify-center"}>
        <Leaders />
        <Newsletter />
      </div>

      <Sponsors />
    </>
  );
}
