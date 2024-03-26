"use client";
import { useSelectedLayoutSegment } from "next/navigation";
import { Star1 } from "iconsax-react";

import { landingConfig } from "@/config/landing";
import { cn } from "@/lib/utils";
import { Link } from "@/navigation";
import MobileMenu from "./mobile-menu";

export default function Header() {
  const segment = useSelectedLayoutSegment();

  return (
    <header className="absolute w-full z-30 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20 gap-6">
          <Link href="/" className="block" aria-label="Survey Apoli">
            <div className="h-10 outline outline-emerald-300 w-10 flex items-center bg-gradient-to-br justify-center rounded-full from-emerald-500 to-emerald-600 text-white">
              <Star1
                size={24}
                className="relative group-hover:scale-110 duration-200"
              />
            </div>
          </Link>

          <div className="hidden md:flex md:grow gap-6">
            {landingConfig.mainNav.map((item, index) => (
              <Link
                key={index}
                href={item.disabled ? "#" : item.href}
                className={cn(
                  "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                  item.href.startsWith(`/${segment}`)
                    ? "text-foreground"
                    : "text-foreground/60",
                  item.disabled && "cursor-not-allowed opacity-80"
                )}
              >
                {item.title}
              </Link>
            ))}
          </div>

          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/sign-in"
                  className="font-medium text-primary hover:text-primary/85 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Sign in
                </Link>
              </li>
              <li>
                <Link
                  href="/sign-up"
                  className="btn-sm text-white bg-primary hover:bg-primary/85 ml-3 rounded-xl"
                >
                  Sign up
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
