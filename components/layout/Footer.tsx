import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

type FooterLink = { label: string; href: string; external?: boolean };

const FOOTER_NAV: { heading: string; links: FooterLink[] }[] = [
  {
    heading: "Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Projects", href: "/projects" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "GitHub", href: "https://github.com/jj-valentine", external: true },
      { label: "LinkedIn", href: "https://linkedin.com/in/jamesvalentine", external: true },
      { label: "X / Twitter", href: "https://x.com/jamesvalentine", external: true },
      { label: "Email", href: "mailto:james@jamesvalentine.dev", external: true },
    ],
  },
  {
    heading: "Other",
    links: [
      { label: "real-k9.com", href: "https://real-k9.com", external: true },
    ],
  },
];

const SOCIAL_ICONS = [
  { icon: Github, href: "https://github.com/jj-valentine", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/jamesvalentine", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/jamesvalentine", label: "X" },
  { icon: Mail, href: "mailto:james@jamesvalentine.dev", label: "Email" },
];

export function Footer() {
  return (
    <footer className="pt-20 pb-8">
      <div className="max-w-[1158px] mx-auto px-4 md:px-8">
        {/* Top section: logo + nav columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          {/* Logo column */}
          <div className="col-span-2">
            <Link
              href="/"
              className="text-fg font-bold text-base tracking-[-0.5px]"
            >
              JV
            </Link>
            <p className="mt-3 text-sm text-fg-muted max-w-[280px]">
              Software engineer, educator, and entrepreneur building things that
              matter.
            </p>
            <div className="flex items-center gap-4 mt-5">
              {SOCIAL_ICONS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fg-muted hover:text-fg transition-colors duration-150"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {FOOTER_NAV.map((col) => (
            <div key={col.heading}>
              <h3 className="text-xs font-medium uppercase tracking-[0.05em] text-muted mb-4">
                {col.heading}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => {
                  const Comp = link.external ? "a" : Link;
                  return (
                    <li key={link.label}>
                      <Comp
                        href={link.href}
                        {...(link.external
                          ? {
                              target: "_blank",
                              rel: "noopener noreferrer",
                            }
                          : {})}
                        className="text-sm text-fg-muted hover:text-fg transition-colors duration-150"
                      >
                        {link.label}
                      </Comp>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* Status dot */}
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <span className="text-sm text-fg-muted">
              © James Valentine {new Date().getFullYear()}
            </span>
          </div>
          <Link
            href="/"
            className="text-sm font-bold text-fg-muted hover:text-fg tracking-[-0.5px] transition-colors"
          >
            james-valentine.com
          </Link>
        </div>
      </div>
    </footer>
  );
}
