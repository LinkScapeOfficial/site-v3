import { MarkGithubIcon } from "@primer/octicons-react";
import Link from "next/link";
import { HeartIcon } from "@primer/octicons-react";
import { Button } from "@/components/ui/button";
import BlurFadeStagger from "@/components/animations/blur-fade-stagger";
import { Grid, Cell, Cross } from "@/components/Grid";

export default function HomeTitle() {
  return (
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
        <div className="w-full h-full flex flex-col items-center justify-center p-8 gap-4 !bg-white">
          <BlurFadeStagger initialDelay={0.1}>
            <h1 className="text-center font-semibold tracking-tight text-4xl sm:text-5xl w-full text-transparent bg-clip-text bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-500">
              Hack, Build, Compete
            </h1>
            <h2 className="text-center text-base sm:text-lg text-gh-text-secondary max-w-md ">
              At LinkScape, we believe in the power of open source.
            </h2>
            <div className="flex flex-row gap-3 mt-4">
              <div>
                <Link href={"https://github.com/LinkScapeOfficial"}>
                  <Button className="mr-3 flex items-center rounded-full bg-gh-dark-bg px-6 py-6 gh-border text-white hover:bg-gh-gray-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105 active:scale-95 active:shadow-sm">
                    <MarkGithubIcon className="mr-2 h-5 w-5" />
                    <div className="font-semibold">GitHub</div>
                  </Button>
                </Link>
              </div>
              <div>
                <Link href={"/donate"}>
                  <Button className="flex items-center rounded-full bg-gh-bg px-4 py-6 gh-border text-gh-text-primary hover:bg-gradient-to-br hover:from-red-500/80 hover:to-pink-600/80 hover:text-white transition-all shadow-sm active:scale-95">
                    <HeartIcon className="mr-2 h-5 w-5" />
                    <div className="font-semibold">Donate</div>
                  </Button>
                </Link>
              </div>
            </div>
          </BlurFadeStagger>
        </div>
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
          lg: "3/11",
        }}
        columnSpan={8}
        solid
      >
        <BlurFadeStagger initialDelay={0.3}>
          <h2 className="p-6 text-center text-base text-gh-text-secondary">
            We are a group of students who love open source and hacking. We
            create carefully crafted projects that are both functional and
            beautiful.
          </h2>
        </BlurFadeStagger>
      </Cell>
      <Cross row={1} column={1} />
      <Cross row={-1} column={-1} />
    </Grid>
  );
}
