"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const Nav = () => {
  const pathName = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={`relative capitalize font-medium transition-colors duration-200 group ${
            link.path === pathName ? "text-accent" : "text-white/70 hover:text-white"
          }`}
        >
          {link.name}
          <span
            className={`absolute -bottom-1 left-0 h-[2px] bg-accent rounded-full transition-all duration-300 ${
              link.path === pathName ? "w-full" : "w-0 group-hover:w-full"
            }`}
          />
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
