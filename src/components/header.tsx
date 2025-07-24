"use client";
import React, { useEffect, useState } from "react";
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { FaXTwitter } from "react-icons/fa6";
import { ArrowRight, MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navigation = [
  { name: "Projects", href: "/projects", current: false },
  { name: "About", href: "/about", current: false },
  { name: "Team", href: "/team", current: false },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 transition-all">
      <div className="linkscape-wrapper">
        <div
          className={cn(
            "flex h-16 items-center justify-between px-4 mx-px transition-all",
            isScrolled
              ? "bg-transparent backdrop-blur-sm border-b border-border/40"
              : "bg-transparent border-b border-transparent",
          )}
        >
          {/* Logo and Navigation */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex-shrink-0">
              <Image
                className="h-10 w-auto"
                src="https://cdn.linkscape.app/linkscape-logo.png"
                alt="LinkScape"
                width={2608}
                height={769}
                priority={true}
              />
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden sm:flex gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-zinc-600 rounded-full px-4 py-2 text-sm transition-all hover:bg-zinc-100",
                    pathname === item.href && "relative"
                  )}
                >
                  {item.name}
                  {pathname === item.href && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-4 right-4 -bottom-1.5 h-[2px] bg-gh-text-secondary"
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links and Mobile Menu */}
          <div className="flex items-center gap-2">
            {/* GitHub Link */}
            <Link
              href="https://github.com/LinkScapeOfficial"
              className="flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1 text-sm font-medium shadow-sm hover:bg-zinc-100 transition-all"
            >
              GitHub
              <FaGithub className="h-5 w-5 text-zinc-700" />
            </Link>
            
            {/* Desktop Social Links */}
            <Link
              href="https://discord.gg/WDdvabyKaH"
              className="hidden sm:block p-1 rounded-full hover:bg-zinc-100 transition-all"
            >
              <FaDiscord className="h-6 w-6 text-secondary-foreground hover:text-primary transition-colors" />
            </Link>
            <Link
              href="https://twitter.com/RealLinkScape"
              className="hidden sm:block p-1 rounded-full hover:bg-zinc-100 transition-all"
            >
              <FaXTwitter className="h-5 w-5 text-secondary-foreground hover:text-primary transition-colors" />
            </Link>
            
            {/* Mobile Menu */}
            <div className="sm:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MenuIcon className="h-6 w-6" />
                    <span className="sr-only">Open Main Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-[80vw]">
                  <SheetHeader>
                    <SheetTitle className="sr-only">Menu</SheetTitle>
                  </SheetHeader>
                  
                  <Image
                    src="https://cdn.linkscape.app/linkscape-logo.png"
                    alt="LinkScape"
                    width={2608}
                    height={769}
                    priority={true}
                    className="w-24 h-auto mb-4"
                  />
                  
                  <h2 className="font-semibold mt-8">Navigation</h2>
                  <div className="flex flex-col gap-2 mt-2">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-between py-2 border-b border-border text-base font-medium text-zinc-600 hover:text-zinc-900 transition-all"
                      >
                        {item.name}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    ))}
                  </div>

                  <h2 className="font-semibold mt-8">Socials</h2>
                  <div className="flex flex-col gap-2 mt-2">
                    <Link
                      href="https://github.com/LinkScapeOfficial"
                      className="flex items-center justify-between py-2 border-b border-border text-base font-medium text-zinc-600 hover:text-zinc-900 transition-all"
                    >
                      GitHub
                      <FaGithub className="h-4 w-4" />
                    </Link>
                    <Link
                      href="https://discord.gg/WDdvabyKaH"
                      className="flex items-center justify-between py-2 border-b border-border text-base font-medium text-zinc-600 hover:text-zinc-900 transition-all"
                    >
                      Discord
                      <FaDiscord className="h-4 w-4" />
                    </Link>
                    <Link
                      href="https://twitter.com/RealLinkScape"
                      className="flex items-center justify-between py-2 border-b border-border text-base font-medium text-zinc-600 hover:text-zinc-900 transition-all"
                    >
                      Twitter / X
                      <FaXTwitter className="h-4 w-4" />
                    </Link>
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
