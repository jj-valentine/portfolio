"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ExternalLink, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Projects", href: "/projects" },
];

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Blur backdrop — separate element behind sticky nav */}
      <div
        className={cn(
          "fixed top-0 left-0 right-0 h-[74px] z-40 transition-all duration-300",
          scrolled
            ? "bg-[rgba(7,7,7,0.75)] backdrop-blur-sm"
            : "bg-transparent"
        )}
      />

      <header className="sticky top-0 z-50 h-[74px]">
        <nav className="max-w-[1158px] mx-auto px-4 md:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-fg font-bold text-base tracking-[-0.5px] hover:opacity-80 transition-opacity"
          >
            JV
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-150",
                  pathname === link.href || pathname.startsWith(link.href + "/")
                    ? "text-fg"
                    : "text-fg-muted hover:text-fg"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop right actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://real-k9.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 h-[42px] px-4 text-sm font-medium text-fg-muted bg-surface border border-[#3d3d3d] rounded-[8px] hover:border-[#555] hover:bg-[#2a2a2a] transition-all duration-150"
            >
              real-k9.com
              <ExternalLink size={13} />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center h-[42px] px-4 text-sm font-medium text-primary-text bg-primary-btn rounded-[8px] hover:opacity-90 transition-opacity duration-150"
            >
              Contact
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-fg-muted hover:text-fg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile overlay */}
        {mobileOpen && (
          <div className="md:hidden fixed inset-0 top-[74px] z-50 bg-bg/95 backdrop-blur-md">
            <div className="flex flex-col p-8 gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-2xl font-medium transition-colors",
                    pathname === link.href ? "text-fg" : "text-fg-muted"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <hr className="border-border" />
              <a
                href="https://real-k9.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-lg text-fg-muted"
              >
                real-k9.com
                <ExternalLink size={16} />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-[42px] px-8 text-sm font-medium text-primary-text bg-primary-btn rounded-[8px]"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
