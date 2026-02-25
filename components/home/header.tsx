"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border"
      data-purpose="site-navigation"
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <span className="cursor-pointer text-foreground text-xl md:text-2xl font-extrabold tracking-tight">
              Mobile Tyre <span className="text-primary">Leicestershire</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          <Link className="hover:text-primary transition-colors" href="/">
            Home
          </Link>
          <Link className="hover:text-primary transition-colors" href="/about">
            About
          </Link>
          <Link className="hover:text-primary transition-colors" href="/services">
            Services
          </Link>
          <Link className="hover:text-primary transition-colors" href="/contact">
            Contact
          </Link>
        </nav>

        {/* Contact Action & Mobile Menu Button */}
        <div className="flex items-center space-x-2">
          {/* Phone Icon and Number */}
          <div className="flex items-center space-x-1">
            <svg
              className="h-6 w-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
            <a
              className="hidden sm:inline text-lg font-bold text-foreground hover:text-primary transition-colors"
              href="tel:07599298404"
            >
              07599 298404
            </a>
          </div>

          {/* Hamburger Button (mobile only) */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-foreground hover:bg-muted focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-border shadow-lg">
          <nav className="flex flex-col items-start px-4 py-4 space-y-4 text-base font-semibold uppercase tracking-wider text-muted-foreground">
            <Link
              className="w-full hover:text-primary transition-colors"
              href="/"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              className="w-full hover:text-primary transition-colors"
              href="/about"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              className="w-full hover:text-primary transition-colors"
              href="/services"
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link
              className="w-full hover:text-primary transition-colors"
              href="/contact"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}