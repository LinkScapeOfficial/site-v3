import Link from "next/link";
import { PeopleIcon } from "@primer/octicons-react";
import { ArrowRight } from "lucide-react";
import HomeTeamPerson from "@/components/home-animations/home-team-person";
import HomeTeamTitle from "@/components/home-animations/home-team-title";
import { Cell, Cross } from "./Grid";
import { Grid } from "./Grid";
import Image from "next/image";
import { Button } from "./ui/button";
const people = [
  {
    name: "Thomas Wu",
    role: "Founder & CEO",
    imageUrl: "https://cdn.linkscape.app/ThomasWu.png",
    github: "https://github.com/TakumiBC",
  },
  {
    name: "Jett Chen",
    role: "Co-Founder",
    imageUrl: "https://cdn.linkscape.app/JettChen.png",
    github: "https://github.com/JettChenT",
  },
  {
    name: "Zigao Wang",
    role: "CTO",
    imageUrl: "https://avatars.githubusercontent.com/u/102006756",
    github: "https://github.com/ZigaoWang",
  },
  {
    name: "Lily Ding",
    role: "CFO",
    imageUrl: "https://avatars.githubusercontent.com/u/188736174",
    github: "https://github.com/Lily-D-coder",
  },
];

export default function Leaders() {
  return (
    <Grid rows={2} columns={6}>
      <Cell
        column={"1/3"}
        solid
        className="flex flex-col items-center justify-center p-12 !bg-white"
      >
        <div className="flex flex-col items-start justify-center w-full h-full">
        <h2 className="text-left font-semibold text-3xl tracking-tight">Meet the team</h2>
        <p className="text-left text-lg text-muted-foreground tracking-tight">
          The team behind LinkScape.
        </p>
        </div>

      </Cell>
      <Cell column={"3/5"} className="" solid>
        <div className="grid grid-cols-2 p-4 gap-4">
          <Image
            src={"https://cdn.linkscape.app/ThomasWu.png"}
            alt="Team"
            width={1000}
            height={1000}
            className="rounded-xl bg-zinc-100"
          />

          <div className="w-full h-full flex flex-col items-start justify-end">
            <div className="w-fit h-fit leading-none">
              <p className="font-semibold tracking-tight ">Thomas Wu</p>
              <p className=" text-muted-foreground text-sm tracking-tight">
                Founder & CEO
              </p>
            </div>
          </div>
        </div>
      </Cell>
      <Cell column={"2/4"} row={"2"} solid>
        <div className="grid grid-cols-2 p-4 gap-4">
        <Image
            src={"https://cdn.linkscape.app/JettChen.png"}
            alt="Team"
            width={1000}
            height={1000}
            className="rounded-xl bg-zinc-100"
          />
          <div className="w-full h-full flex flex-col items-start justify-end">
            <div className="w-fit h-fit leading-none ">
              <p className="font-semibold tracking-tight">Jett Chen</p>
              <p className=" text-muted-foreground text-sm tracking-tight">
                Co-Founder
              </p>
            </div>
          </div>

        </div>
      </Cell>
      <Cell column={"5/7"} row={"1"} solid>
        <div className="grid grid-cols-2 gap-4 p-4">
          <Image
            src={"https://avatars.githubusercontent.com/u/102006756"}
            alt="Team"
            width={1000}
            height={1000}
            className="rounded-xl"
          />
          <div className="w-full h-full flex flex-col items-start justify-end">
            <div className="w-fit h-fit leading-none">
              <p className="font-semibold tracking-tight">Zigao Wang</p>
              <p className=" text-muted-foreground text-sm tracking-tight">CTO</p>
            </div>
          </div>
        </div>
      </Cell>
      <Cell column={"4/6"} row={"2"} solid>
        <div className="grid grid-cols-2 gap-4 p-4">
        <Image
            src={"https://avatars.githubusercontent.com/u/188736174"}
            alt="Team"
            width={1000}
            height={1000}
            className="rounded-xl"
          />
          <div className="w-full h-full flex flex-col items-start justify-end">
            <div className="w-fit h-fit leading-none">
              <p className="font-semibold tracking-tight">Lily Ding</p>
              <p className="text-muted-foreground text-sm tracking-tight">CFO</p>
            </div>
          </div>

        </div>
      </Cell>
      <Cell column={"6"} row={"2"} className="flex items-center justify-center hover:bg-white hover:cursor-pointer transition-all duration-200 group">
      <Link href={"/team"} className="w-full h-full flex items-center justify-center">
        <ArrowRight className="w-12 h-12 group-hover:translate-x-0.5 transition-transform duration-200" />
      </Link>
      </Cell>
      <Cross row={1} column={1} />
    </Grid>
    // <div className="mb-10 mx-auto grid grid-cols-12 p-8 sm:p-16 relative">
    //   <div className="col-span-1 hidden lg:block">
    //     <div className="w-12 h-12 flex items-center justify-center -left-2 top-2 transform translate-x-px relative border-2 rounded-full bg-white z-20">
    //       <PeopleIcon className={"text-gh-gray-4 w-5 h-5"} />
    //     </div>
    //   </div>
    //   <div className="mt-1 col-span-12 lg:col-span-10 lg:col-start-2 mb-8">
    //     <HomeTeamTitle
    //       delay={0}
    //       className={"flex flex-row items-center cursor-pointer group"}
    //     >
    //       <Link href={"/team"}>
    //         <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
    //           Team
    //         </h2>
    //       </Link>

    //       <RiArrowRightLine
    //         strokeWidth={2}
    //         className={
    //           "ml-1.5 w-8 h-8 group-hover:translate-x-1.5 transition-transform duration-200"
    //         }
    //       />
    //     </HomeTeamTitle>

    //     <HomeTeamTitle
    //       delay={0.1}
    //       className={"mt-2 text-gh-text-secondary text-lg"}
    //     >
    //       Meet the team behind LinkScape.
    //     </HomeTeamTitle>
    //   </div>
    //   <div className="col-span-1 col-start-1 hidden lg:block">
    //     <div className="border-l-2 border-gh-gray-2/60 h-[91.5%] absolute top-20 left-20 translate-x-[1px] z-10"></div>
    //   </div>
    //   <div className="col-span-12 lg:col-span-10 lg:col-start-2 mt-4">
    //     <ul
    //       role="list"
    //       className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-12"
    //     >
    //       {people.map((person, index) => (
    //         <li key={person.name}>
    //           <HomeTeamPerson delay={index * 0.08 + 0.2} person={person} />
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </div>
  );
}
