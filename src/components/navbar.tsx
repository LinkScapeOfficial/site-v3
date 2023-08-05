"use client";
import React, { useRef, useState } from "react";
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "About", href: "/about", current: false },
  { name: "Team", href: "/team", current: false },
  { name: "Projects", href: "/projects", current: false },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);
  const pathname = usePathname();

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <header
      className={
        "bg-white/30 py-1 fixed left-0 top-0 w-screen backdrop-blur-md backdrop-saturate-[85%] border-b border-black/10"
      }
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
            <Link href="/" className="flex flex-shrink-0 items-center">
              <img
                className="block h-8 w-auto lg:hidden"
                src="https://cdn.linkscape.app/linkscape-logo.png"
                alt="LinkScape"
              />
              <img
                className="hidden h-8 w-auto lg:block"
                src="https://cdn.linkscape.app/linkscape-logo.png"
                alt="LinkScape"
              />
            </Link>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`${
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-700 hover:bg-blue-500 hover:text-white"
                    } rounded-md px-3 py-2 text-sm font-medium`}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <a href="https://github.com/LinkScapeOfficial">
              <FaGithub className="mr-4 h-8 w-8" />
            </a>
            <a href="https://discord.gg/WDdvabyKaH">
              <FaDiscord className="mr-4 h-8 w-8" />
            </a>
            <a href="https://twitter.com/RealLinkScape">
              <FaTwitter className="h-8 w-8" />
            </a>
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
