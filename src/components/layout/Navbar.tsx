"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/config/site";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 w-full z-[100] flex justify-between items-center px-6 md:px-12 py-4 md:py-6 bg-[#0e0e0e]/60 backdrop-blur-xl transition-all duration-300">
      <Link
        href="/"
        className="text-xl md:text-2xl font-bold tracking-[0.1em] text-[#FF6B00] font-headline"
      >
        PANDITAAI
      </Link>

      <div className="hidden lg:flex items-center gap-8">
        {siteConfig.nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`font-headline tracking-[0.05em] uppercase text-sm font-bold transition-colors duration-300 ${
              isActive(item.href)
                ? "text-[#FF6B00] border-b-2 border-[#FF6B00] pb-1"
                : "text-white/70 hover:text-[#FF6B00]"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div className="hidden md:flex items-center gap-4">
        <Link href={siteConfig.ctaPrimary.href} className="btn-primary">
          {siteConfig.ctaPrimary.label}
        </Link>
        <Link href={siteConfig.ctaSecondary.href} className="btn-ghost">
          {siteConfig.ctaSecondary.label}
        </Link>
      </div>

      <button
        className="lg:hidden text-white"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <span className="material-symbols-outlined text-2xl">
          {mobileOpen ? "close" : "menu"}
        </span>
      </button>

      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-surface/95 backdrop-blur-xl border-t border-outline-variant/10 lg:hidden">
          <div className="flex flex-col p-6 gap-4">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`font-headline tracking-[0.05em] uppercase text-sm font-bold py-2 ${
                  isActive(item.href) ? "text-[#FF6B00]" : "text-white/70"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-outline-variant/10">
              <Link
                href={siteConfig.ctaPrimary.href}
                className="btn-primary text-center"
                onClick={() => setMobileOpen(false)}
              >
                {siteConfig.ctaPrimary.label}
              </Link>
              <Link
                href={siteConfig.ctaSecondary.href}
                className="btn-ghost text-center"
                onClick={() => setMobileOpen(false)}
              >
                {siteConfig.ctaSecondary.label}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
