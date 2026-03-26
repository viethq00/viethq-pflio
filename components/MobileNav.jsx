"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathName = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-24 mb-16 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              VietHQ
              <span className="text-accent text-glow">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-6">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`text-xl capitalize transition-all duration-200 relative group ${
                link.path === pathName
                  ? "text-accent"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-[2px] bg-accent rounded-full transition-all duration-300 ${link.path === pathName ? "w-full" : "w-0 group-hover:w-full"}`} />
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
