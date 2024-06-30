"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50">
      <div className="flex justify-between items-center px-4 py-2 max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-5xl mx-auto">
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
        <div className="hidden sm:flex sm:items-center sm:justify-between w-full">
          <div className="flex items-center">
          <img src="icono.png" alt="icono" className="h-6 w-auto mr-2"/>
            <Link href="/" legacyBehavior passHref>
            
              <a className="text-lg font-semibold">TrafficFlow AI</a>
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#SpeedTracker">Speed Tracker</a>
            <a href="#TrafficFlow">Traffic Flow</a>
            <a href="#OurStory">Our Story</a>
            <a href="#AboutUs">About Us</a>
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMobileMenuOpen && (
        <div className="sm:hidden w-full" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#SpeedTracker" className="block">Speed Tracker</a>
            <a href="#TrafficFlow" className="block">Traffic Flow</a>
            <a href="#OurStory" className="block">Our Story</a>
            <a href="#AboutUs" className="block">About Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};
