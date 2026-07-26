"use client";

import React, { useEffect, useState } from "react";
import { SiDiscord, SiGithub, SiX } from "@icons-pack/react-simple-icons";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Heart, MenuIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme";
import { navigation, site } from "@/content/site";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const socials = [
    { name: "GitHub", href: site.social.github, Icon: SiGithub },
    { name: "Discord", href: site.social.discord, Icon: SiDiscord },
    { name: "X", href: site.social.x, Icon: SiX },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="linkscape-wrapper">
        <div
          className={cn(
            "mx-px flex h-16 items-center justify-between px-4 transition-all duration-300",
            scrolled
              ? "border-b border-border/50 bg-background/70 backdrop-blur-md"
              : "border-b border-transparent bg-transparent",
          )}
        >
          <div className="flex items-center gap-6">
            <Link href="/" className="flex-shrink-0" aria-label="LinkScape home">
              <Image
                className="h-9 w-auto dark:invert"
                src="https://cdn.linkscape.app/linkscape-logo.png"
                alt="LinkScape"
                width={244}
                height={72}
                sizes="122px"
                priority
              />
            </Link>

            <nav className="hidden items-center gap-0.5 md:flex">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative rounded-full px-3.5 py-2 text-sm transition-colors",
                    isActive(item.href)
                      ? "text-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  )}
                >
                  {item.name}
                  {isActive(item.href) ? (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3.5 -bottom-1.5 h-[2px] rounded-full bg-foreground"
                      transition={
                        reduce
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 380, damping: 32 }
                      }
                    />
                  ) : null}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-1">
            <ThemeToggle />
            {socials.map(({ name, href, Icon }) => (
              <Link
                key={name}
                href={href}
                aria-label={`LinkScape on ${name}`}
                className="hidden rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:block"
              >
                <Icon className="h-[17px] w-[17px]" />
              </Link>
            ))}

            <Button
              asChild
              size="sm"
              className="ml-1.5 hidden rounded-full px-4 shadow-sm transition-transform hover:scale-[1.03] active:scale-95 sm:inline-flex"
            >
              <Link href="/donate">
                <Heart className="mr-1.5 h-3.5 w-3.5" />
                Donate
              </Link>
            </Button>

            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MenuIcon className="h-5 w-5" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-[86vw] overflow-y-auto sm:w-[380px]">
                  <SheetHeader>
                    <SheetTitle className="sr-only">Menu</SheetTitle>
                  </SheetHeader>
                  <Image
                    src="https://cdn.linkscape.app/linkscape-logo.png"
                    alt="LinkScape"
                    width={244}
                    height={72}
                    sizes="108px"
                    className="mb-8 h-8 w-auto dark:invert"
                  />
                  <p className="mono-label">Navigate</p>
                  <div className="mt-2 flex flex-col">
                    {[...navigation, { name: "Donate", href: "/donate" }].map(
                      (item) => (
                        <SheetClose asChild key={item.name}>
                          <Link
                            href={item.href}
                            className="flex items-center justify-between border-b border-border py-3 text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                          >
                            {item.name}
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </SheetClose>
                      ),
                    )}
                  </div>

                  <p className="mono-label mt-8">Elsewhere</p>
                  <div className="mt-2 flex flex-col">
                    {socials.map(({ name, href, Icon }) => (
                      <Link
                        key={name}
                        href={href}
                        className="flex items-center justify-between border-b border-border py-3 text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {name}
                        <Icon className="h-4 w-4" />
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
