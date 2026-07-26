import Image from "next/image";
import type { WorkFigure } from "@/content/work";

/**
 * Generated charts ship as a light and a dark file: an SVG in an <img> cannot
 * inherit the page theme. Photographs are single files.
 */
export default function Figure({
  figure,
  priority = false,
}: {
  figure: WorkFigure;
  priority?: boolean;
}) {
  const ratio = figure.ratio ?? "16 / 9";

  return (
    <figure className="my-8 first:mt-0">
      <div
        className="surface relative w-full overflow-hidden rounded-xl border border-border"
        style={{ aspectRatio: ratio }}
      >
        {figure.single ? (
          <Image
            src={figure.src}
            alt={figure.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 760px"
            className="object-cover"
            priority={priority}
          />
        ) : (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${figure.src}-light.svg`}
              alt={figure.alt}
              className="absolute inset-0 h-full w-full p-3 sm:p-4 dark:hidden"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${figure.src}-dark.svg`}
              alt=""
              aria-hidden
              className="absolute inset-0 hidden h-full w-full p-3 sm:p-4 dark:block"
            />
          </>
        )}
      </div>
      {figure.caption ? (
        <figcaption className="mt-2.5 text-[13px] text-muted-foreground">
          {figure.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
