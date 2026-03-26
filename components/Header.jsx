"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 py-4 xl:py-5 text-white transition-all duration-300 ${
        scrolled
          ? "glass shadow-lg shadow-black/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"} className="group">
          <h1 className="text-3xl xl:text-4xl font-semibold tracking-tight">
            <span className="group-hover:text-white/80 transition-colors duration-200">VietHQ</span>
            <span className="text-accent text-glow ml-0.5 group-hover:animate-pulse-glow">.</span>
          </h1>
        </Link>

        {/* desktop nav & hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href={"/contact"}>
            <Button className="relative overflow-hidden group">
              <span className="relative z-10">Hire me</span>
              <span className="absolute inset-0 bg-gradient-to-r from-accent to-accent-hover opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
