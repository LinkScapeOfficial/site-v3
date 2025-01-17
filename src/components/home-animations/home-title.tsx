"use client";
import { useEffect, useState } from "react";

export default function HomeTitle() {
  function BlinkingCursor() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
      const interval = setInterval(() => {
        setIsVisible((v) => !v);
      }, 533);

      return () => clearInterval(interval);
    }, []);

    return isVisible ? (
      <div className={"inline-block text-purple-700"}>_</div>
    ) : (
      <div className={"inline-block invisible"}>_</div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-full z-3">
      <h1 className="text-center font-bold tracking-tight text-4xl sm:text-6xl">
        Hack, Build, Compete
      </h1>
      <h2 className="px-4 py-6 text-center text-base sm:text-lg text-gh-text-secondary">
        A group of students who hack, build, and compete together.
      </h2>
    </div>
  );
}
