"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { buttonVariants } from "@/components/ui/button";
import { cn, } from "@/lib/utils";
import { useScrolledPast } from "@/components/motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Tours" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Field Stories" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const scrolled = useScrolledPast(24);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={cn(
          "glass flex w-full max-w-5xl items-center justify-between gap-3 rounded-full px-5 py-2.5 transition-all duration-300",
          scrolled && "glass-strong"
        )}
        aria-label="Main navigation"
      >
        <Link href="/" className="flex min-h-11 items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-[#1b6a7d] text-sm text-white shadow-md shadow-primary/30">
            <i className="fa-solid fa-dove" aria-hidden />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-[15px] font-bold tracking-tight text-foreground">
              SkyWatch
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">
              Birding Tours
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium text-foreground/75 transition-colors hover:bg-primary/8 hover:text-foreground",
                pathname === l.href && "bg-primary/10 text-primary font-semibold"
              )}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="tel:+15550123456"
            className={cn(
              buttonVariants({ variant: "default", size: "sm" }),
              "btn-gradient hidden rounded-full sm:inline-flex"
            )}
          >
            <Phone className="size-4" />
            <span>(555) 012-3456</span>
          </a>
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="inline-flex size-11 items-center justify-center rounded-full border border-primary/15 bg-white/70 text-primary backdrop-blur transition-colors hover:bg-primary/10 lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="size-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="glass-strong w-80">
              <SheetHeader>
                <SheetTitle className="font-display text-xl text-primary">
                  SkyWatch Birding Tours
                </SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-2">
                {links.map((l) => (
                  <SheetClose key={l.href} asChild>
                    <Link
                      href={l.href}
                      className={cn(
                        "rounded-xl px-4 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-primary/10 hover:text-primary",
                        pathname === l.href && "bg-primary/10 font-semibold text-primary"
                      )}
                    >
                      {l.label}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Link
                    href="/contact"
                    className={cn(buttonVariants({ size: "lg" }), "btn-gradient mt-4")}
                  >
                    Book a Tour
                  </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
