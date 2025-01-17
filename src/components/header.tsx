"use client";
import React, { useEffect, useState } from "react";
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Projects", href: "/projects", current: false },
  { name: "About", href: "/about", current: false },
  { name: "Team", href: "/team", current: false },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 5 ? setIsTop(false) : setIsTop(true); // adjust the value as needed
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <header
      className={cn(
        "py-3 fixed left-0 top-0 w-screen z-50 transition-all",
        isTop
          ? "bg-transparent border-b border-transparent shadow-none"
          : "bg-opacity-70 backdrop-blur-lg border-b border-black/10 backdrop-saturate-[85%]"
      )}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <nav className="flex items-center sm:hidden">
            <button
              className="inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open Main Menu</span>
              {open ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </nav>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <Link href={"/"} className="flex flex-shrink-0 items-center">
              <Image
                className={cn(
                  "block transition-all h-10 w-auto"
                )}
                src="https://cdn.linkscape.app/linkscape-logo.png"
                alt="LinkScape"
                width={2608}
                height={769}
                priority={true}
              />
            </Link>
            <div className="hidden sm:ml-6 sm:flex items-center justify-center">
              <div className="flex gap-1 items-center">
                {navigation.map((item, index) => (
                  <React.Fragment key={index}>
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "text-zinc-600 rounded-full px-4 py-2 text-sm transition-all",
                        pathname !== item.href
                          ? "hover:bg-zinc-200"
                          : "hover:text-gh-text-primary"
                      )}
                    >
                      <p className={"relative px-0.5"}>
                        {item.name}
                        {pathname === item.href && (
                          <motion.span
                            layoutId={"nav-underline"}
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 25,
                              duration: 0.5,
                            }}
                            className="absolute left-0 -bottom-1.5 w-full h-[2px] bg-gh-text-secondary"
                          />
                        )}
                      </p>
                    </Link>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Link href={"https://github.com/LinkScapeOfficial"}>
              <FaGithub className="mr-4 h-6 w-6 text-gh-text-primary hover:text-gh-text-secondary transition-colors" />
            </Link>
            <Link href={"https://discord.gg/WDdvabyKaH"}>
              <FaDiscord className="mr-4 h-6 w-6 text-gh-text-primary hover:text-gh-text-secondary transition-colors" />
            </Link>
            <Link href={"https://twitter.com/RealLinkScape"}>
              <FaTwitter className="mr-4 h-6 w-6 text-gh-text-primary hover:text-gh-text-secondary transition-colors" />
            </Link>
          </div>
        </div>
      </div>

      {open && (
        <div className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-black hover:bg-blue-500 hover:text-white"
                } block rounded-md px-3 py-2 text-base font-medium`}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
