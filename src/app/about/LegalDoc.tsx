// ImageLink.tsx

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ImageLinkProps {
  hrefPdf: string;
  imgSrc: string;
  imgWidth: number;
  imgHeight: number;
  imgAlt: string;
  text: string;
}

const LegalDoc: React.FC<ImageLinkProps> = ({
  hrefPdf,
  imgSrc,
  imgWidth,
  imgHeight,
  imgAlt,
  text,
}) => (
  <Link
    href={hrefPdf}
    className="mr-6 transition-transform duration-300 hover:-translate-y-1"
  >
    <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow-md">
      <div className="flex items-center justify-center">
        <Image
          className="max-h-72 rounded-t-lg"
          src={imgSrc}
          width={imgWidth}
          height={imgHeight}
          alt={imgAlt}
        />
      </div>
      <div className="-mb-2 -mt-7 w-52 p-5 font-bold">{text}</div>
    </div>
  </Link>
);

export default LegalDoc;
