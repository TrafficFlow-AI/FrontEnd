"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="mx-auto w-full flex flex-col max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl ">
      <div className="flex justify-between items-center p-4 isolate">
        {/* Mobile Navbar layout */}
        <div className="sm:hidden w-full flex justify-between items-center">
          <Link href="/" legacyBehavior passHref>
            <a className="text-lg font-semibold">TrafficFlow AI</a>
          </Link>
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isMobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${isMobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* PC Layout */}
        <div className="hidden sm:flex sm:items-center sm:justify-between w-full backdrop-blur-md">
          <div className="flex">
            <Link href="/" legacyBehavior passHref>
              <a className="text-lg font-semibold">Pau Garcia</a>
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/project">Project</Link>
            <Link href="/about">About</Link>
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMobileMenuOpen && (
        <div className="sm:hidden w-full" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="block">
              Home
            </Link>
            <Link href="/projects" className="block">
              Projects
            </Link>
            <Link href="/about" className="block">
              About
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
};
