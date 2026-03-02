import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact",
  description: "Get in touch — I'd love to hear from you.",
};

const SOCIALS = [
  { icon: Github, href: "https://github.com/jj-valentine", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/jamesvalentine", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/jamesvalentine", label: "X" },
  { icon: Mail, href: "mailto:james@jamesvalentine.dev", label: "Email" },
];

export default function ContactPage() {
  return (
    <div className="max-w-[1158px] mx-auto px-4 md:px-8 py-20">
      <div className="max-w-[560px]">
        <h1 className="text-[clamp(36px,5vw,60px)] leading-[1] font-medium tracking-[-1.5px] text-fg">
          Get in touch
        </h1>
        <p className="mt-6 text-lg text-fg-sub">
          Have a question, want to work together, or just want to say hi? Drop
          me a message.
        </p>

        <div className="mt-12">
          <ContactForm />
        </div>

        <div className="mt-16">
          <p className="text-xs font-medium uppercase tracking-[0.05em] text-muted mb-4">
            Or find me here
          </p>
          <div className="flex items-center gap-5">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-fg-muted hover:text-fg transition-colors"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
