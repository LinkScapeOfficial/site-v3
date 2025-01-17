import Image from "next/image";
import Link from "next/link";
import { Cell, Cross } from "./Grid";
import { Grid } from "./Grid";

export default function Sponsors() {
  return (
    <Grid rows={2} columns={6}>
      <Cell
        column={"1/5"}
        className="flex flex-col items-center justify-center p-12 !bg-white"
        solid
      >
        <div className="flex flex-col items-start justify-center w-full h-full">
          <h2 className="text-left font-semibold text-3xl tracking-tight">
            Proudly Sponsored By
          </h2>
          <p className="text-left text-lg text-zinc-500 tracking-tight">
            LinkScape is proudly sponsored by the following companies.
          </p>
        </div>
      </Cell>
      <Cell
        column={"5/7"}
        className="flex flex-col items-center justify-center hover:bg-white"
        solid
      >
        <Link
          href={"https://vercel.com/?utm_source=linkscape&utm_campaign=oss"}
          className="w-full h-full flex items-center justify-center p-4 hover:bg-white transition-all duration-200"
        >
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://files.ohevan.com/tmp/Vercel_logo_black.svg"
            alt="Vercel"
            width={158}
            height={48}
          />
        </Link>
      </Cell>
      <Cell
        column={"1/3"}
        row={"2"}
        solid
        className="flex flex-col items-center justify-center"
      >
        <Link
          href={"https://www.figma.com/"}
          className="w-full h-full flex items-center justify-center p-4 hover:bg-white transition-all duration-200"
        >
          <Image
            className="max-h-12 col-span-2 w-full object-contain lg:col-span-1"
            src="https://files.ohevan.com/tmp/Figma-Wordmark-Black.svg"
            alt="Figma"
            width={158}
            height={48}
          />
        </Link>
      </Cell>
      <Cell column={"3/5"} row={"2"} solid className="flex flex-col items-center justify-center">
        <Link href={"https://1password.com"} className="w-full h-full flex items-center justify-center p-4 hover:bg-white transition-all duration-200">
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://files.ohevan.com/tmp/1password-logo.svg"
            alt="1Password"
            width={158}
            height={48}
          />
        </Link>
      </Cell>
      <Cell column={"5/7"} row={"2"} solid className="flex flex-col items-center justify-center">
        <Link href={"https://www.twilio.com/"} className="w-full h-full flex items-center justify-center p-4 hover:bg-white transition-all duration-200">
          <Image
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="https://files.ohevan.com/tmp/Twilio-logo-red.svg"
            alt="Twilio"
            width={158}
            height={48}
          />
        </Link>
      </Cell>
      <Cross row={-1} column={-1} />
    </Grid>
  );
}
