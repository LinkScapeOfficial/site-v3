"use client";
import { useEffect, useRef } from "react";

export default function HomeTeamTitle({
  delay,
  children,
  className,
}: {
  delay: number;
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  
  useEffect(() => {
    const element = ref.current as HTMLElement | null;
    if (element) {
      element.style.opacity = "0";
      element.style.transform = "translateY(40px)";
      
      const timeoutId = setTimeout(() => {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }, delay);

      return () => clearTimeout(timeoutId);
    }
  }, [delay]);

  return (
    <h2
      ref={ref}
      className={`transition-all duration-500 ease-out ${className ?? ''}`}
      style={{ willChange: 'opacity, transform' }}
    >
      {children}
    </h2>
  );
}
