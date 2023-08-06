import NavBar from "@/src/components/header";
import { Metadata } from "next";
import Hero from "@/src/app/about/Hero";
import LegalDoc from "@/src/app/about/LegalDoc";

export const metadata: Metadata = {
  title: "LinkScape | About",
  description: "We are LinkScape.",
};

export default function About() {
  return (
    <>
      <NavBar />
      <div className="mb-20 mt-12 flex flex-col items-center justify-center sm:mb-64 sm:mt-60">
        <Hero />
        <h2 className="mb-8 mt-8 text-center text-2xl font-bold sm:text-4xl">
          Legal Documents
        </h2>
        <div className="flex flex-wrap">
          <LegalDoc
            hrefPdf="https://cdn.linkscape.app/IRS_Letter.pdf"
            imgSrc="https://cdn.linkscape.app/IRS_Letter.png"
            imgWidth={250}
            imgHeight={933}
            imgAlt=""
            text="IRS 501(c)(3) Status Determination Letter"
          />
          <LegalDoc
            hrefPdf="https://cdn.linkscape.app/Certificate_of_Status.pdf"
            imgSrc="https://cdn.linkscape.app/Certificate_of_Status.png"
            imgWidth={250}
            imgHeight={933}
            imgAlt=""
            text="Certificate of Status"
          />
          <LegalDoc
            hrefPdf="https://cdn.linkscape.app/fiscal_sponsorship_letter.pdf"
            imgSrc="https://cdn.linkscape.app/fiscal_sponsorship_letter.png"
            imgWidth={250}
            imgHeight={933}
            imgAlt=""
            text="Fiscal Sponsorship Confirmation"
          />
        </div>
      </div>
    </>
  );
}
