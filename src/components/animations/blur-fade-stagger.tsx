"use client";

import React, { Children, isValidElement, type ReactNode } from "react";
import BlurFade from "@/components/animations/blur-fade";

export const blurFadeInitialDelay = 0.1;
export const blurFadeDelay = 0.04;

interface BlurFadeStaggerProps {
  children: ReactNode;
  yOffset?: number;
  blur?: string;
  duration?: number;
  inViewMargin?: string;
  initialDelay?: number;
  delayStep?: number;
}

/**
 * Wraps each child in a BlurFade with an incrementing delay. Null children are
 * skipped without consuming a slot, since heroes render parts conditionally.
 */
export default function BlurFadeStagger({
  children,
  yOffset = 8,
  blur = "6px",
  duration = 0.4,
  inViewMargin = "-50px",
  initialDelay = blurFadeInitialDelay,
  delayStep = blurFadeDelay,
}: BlurFadeStaggerProps) {
  let step = 0;

  return (
    <>
      {Children.toArray(children).map((child, index) => {
        if (!isValidElement(child)) {
          return <React.Fragment key={index}>{child}</React.Fragment>;
        }
        const delay = initialDelay + delayStep * step;
        step += 1;
        return (
          <BlurFade
            key={index}
            delay={delay}
            yOffset={yOffset}
            blur={blur}
            duration={duration}
            inViewMargin={inViewMargin}
          >
            {child}
          </BlurFade>
        );
      })}
    </>
  );
}
