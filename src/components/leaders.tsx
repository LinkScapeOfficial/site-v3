import Link from "next/link";
import { PeopleIcon } from "@primer/octicons-react";
import { ArrowRight } from "lucide-react";
import HomeTeamPerson from "@/components/home-animations/home-team-person";
import HomeTeamTitle from "@/components/home-animations/home-team-title";
import { Cell, Cross } from "./Grid";
import { Grid } from "./Grid";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Leaders() {
  return (
    <Grid rows={{
      sm: 4,
      md: 3,      
      lg: 2,
    }} columns={{
      sm:2,
      md:4,
      lg:6,
    }}>
      <Cell
        column={{
          sm: "1/3",
          md: "1/3",
          lg: "1/3",
        }}
        row={{
          sm: 1,
          md: 1,
          lg: 1,
        }}
        solid
        className="flex flex-col items-center justify-center p-8 sm:p-12 !bg-white"
      >
        <div className="flex flex-col items-start justify-center w-full h-full">
        <h2 className="text-left font-semibold text-3xl tracking-tight">Meet the team</h2>
        <p className="text-left text-lg text-muted-foreground tracking-tight">
          The team behind LinkScape.
        </p>
        </div>

      </Cell>
      <Cell column={{
        sm: "1",
        md: "3/5",
        lg: "3/5",
      }}
      row={{
        sm: "2",
        md: "1",
        lg: "1",
      }}
      className="" solid>
        <div className="grid sm:grid-cols-2 p-4 gap-4">
          <Image
            src={"https://avatars.githubusercontent.com/u/62056970"}
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
      <Cell column={{
        sm: "2",
        md: "1/3",
        lg: "2/4",
      }} row={{
        sm: "2",
        md: "2",
        lg: "2",
      }} solid>
        <div className="grid sm:grid-cols-2 p-4 gap-4">
        <Image
            src={"https://avatars.githubusercontent.com/u/102006756"}
            alt="Team"
            width={1000}
            height={1000}
            className="rounded-xl bg-zinc-100"
          />
          <div className="w-full h-full flex flex-col items-start justify-end">
            <div className="w-fit h-fit leading-none ">
              <p className="font-semibold tracking-tight">Zigao Wang</p>
              <p className=" text-muted-foreground text-sm tracking-tight">
                Co-founder & CTO
              </p>
            </div>
          </div>

        </div>
      </Cell>
      <Cell column={{
        sm: "1",
        md: "3/5",
        lg: "5/7",
      }} row={{
        sm: "3",
        md: "2",
        lg: "1",
      }} solid>
        <div className="grid sm:grid-cols-2 gap-4 p-4">
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
              <p className=" text-muted-foreground text-sm tracking-tight">Co-founder & CFO</p>
            </div>
          </div>
        </div>
      </Cell>
      <Cell column={{
        sm: "2",
        md: "1/3",
        lg: "4/6",
      }} row={{
        sm: "3",
        md: "3",
        lg: "2",
      }} solid>
        <div className="grid sm:grid-cols-2 gap-4 p-4">
        <Image
            src={"https://avatars.githubusercontent.com/u/186053406"}
            alt="Team"
            width={1000}
            height={1000}
            className="rounded-xl"
          />
          <div className="w-full h-full flex flex-col items-start justify-end">
            <div className="w-fit h-fit leading-none">
              <p className="font-semibold tracking-tight">July Wu</p>
              <p className="text-muted-foreground text-sm tracking-tight">Co-founder & COO</p>
            </div>
          </div>

        </div>
      </Cell>
      <Cell column={{
        sm: "1/3",
        md: "3/5",
        lg: "6",
      }} row={{
        sm: "4",
        md: "3",
        lg: "2",
      }} className="flex items-center justify-center hover:!bg-white hover:cursor-pointer transition-all duration-200 group" solid>
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
