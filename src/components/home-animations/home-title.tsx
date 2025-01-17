import { Grid } from "@/components/Grid";
import { MarkGithubIcon } from "@primer/octicons-react";
import Link from "next/link";
import { HeartIcon } from "@primer/octicons-react";
import { Button } from "@/components/ui/button";

export default function HomeTitle() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full z-3">
      <div className="w-full h-full max-w-6xl">
        <Grid rows={8} columns={12}>
          <Grid.Cell row={2} column={2} columnSpan={10} rowSpan={4}>
            <div className="w-full h-full flex flex-col items-center justify-center p-8 gap-4">
              <h1 className="text-center font-semibold tracking-tight text-4xl sm:text-5xl w-full ">
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
            </div>
          </Grid.Cell>
          <Grid.Cell row={7} column={3} columnSpan={8}>
            <h2 className="px-4 py-6 text-center text-base text-gh-text-secondary">
              We are a group of students who love open source and hacking. We
              create carefully crafted projects that are both functional and
              beautiful.
            </h2>
          </Grid.Cell>
          <Grid.Cross row={1} column={1} />
          <Grid.Cross row={-1} column={-1} />
        </Grid>
      </div>
    </div>
  );
}
