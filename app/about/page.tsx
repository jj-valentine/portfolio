import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "About",
  description:
    "Software engineer, physicist, educator, and dog trainer based in Seattle.",
};

export default function AboutPage() {
  return (
    <div className="max-w-[1158px] mx-auto px-4 md:px-8 py-20">
      <h1 className="text-[clamp(36px,5vw,60px)] leading-[1] font-medium tracking-[-1.5px] text-fg">
        About me
      </h1>
      <p className="mt-6 text-lg text-fg-sub max-w-[640px] leading-relaxed">
        I&apos;m James Valentine — a software engineer with a background in
        physics, a passion for teaching, and a professional dog training
        business. Based in Seattle.
      </p>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {/* Education */}
        <Card hover={false} className="p-8">
          <p className="text-xs font-medium uppercase tracking-[0.05em] text-muted mb-4">
            Background
          </p>
          <h2 className="text-2xl font-medium text-fg">Education</h2>
          <ul className="mt-4 space-y-3 text-fg-sub">
            <li>
              <strong className="text-fg">B.S. Physics</strong> — University of Washington
              <span className="block text-sm text-muted mt-0.5">Departmental Honors · Dean&apos;s List · 2016</span>
            </li>
            <li>
              <strong className="text-fg">Minor in Mathematics</strong> — applied math &amp; modeling
            </li>
          </ul>
          <p className="mt-6 text-fg-sub leading-relaxed">
            A rigorous foundation in problem-solving, quantitative reasoning,
            and first-principles thinking — skills that translate directly into
            building software.
          </p>
        </Card>

        {/* Engineering */}
        <Card hover={false} className="p-8">
          <p className="text-xs font-medium uppercase tracking-[0.05em] text-muted mb-4">
            Work
          </p>
          <h2 className="text-2xl font-medium text-fg">
            Software Engineering
          </h2>
          <p className="mt-4 text-fg-sub leading-relaxed">
            12+ years building full-stack web applications with TypeScript,
            React, Next.js, and Node. I care about clean architecture,
            developer experience, and shipping things that work.
          </p>
          <p className="mt-4 text-fg-sub leading-relaxed">
            Currently focused on AI-assisted tooling, developer productivity,
            and agentic systems.
          </p>
        </Card>

        {/* Teaching */}
        <Card hover={false} className="p-8">
          <p className="text-xs font-medium uppercase tracking-[0.05em] text-muted mb-4">
            Teaching
          </p>
          <h2 className="text-2xl font-medium text-fg">Education &amp; Instruction</h2>
          <p className="mt-4 text-fg-sub leading-relaxed">
            20+ years teaching complex subjects — physics, mathematics, and
            coding at various levels. I believe the best way to learn is to
            build, and the best way to teach is to make complex things feel
            simple.
          </p>
          <p className="mt-4 text-fg-sub leading-relaxed">
            Also the lead instructor at REAL K-9, teaching handler mechanics
            and canine psychology to clients.
          </p>
        </Card>

        {/* Dog Training */}
        <Card hover={false} className="p-8">
          <p className="text-xs font-medium uppercase tracking-[0.05em] text-muted mb-4">
            REAL K-9
          </p>
          <h2 className="text-2xl font-medium text-fg">Dog Training</h2>
          <p className="mt-4 text-fg-sub leading-relaxed">
            Founder of REAL K-9 — Seattle-based professional dog training built
            on focus, technique, and engagement. Service-level obedience,
            behavior modification, and handler education.
          </p>
          <div className="mt-4 flex gap-6 text-sm">
            <div>
              <span className="text-fg font-semibold text-base">250+</span>
              <span className="block text-muted text-xs uppercase tracking-widest mt-0.5">Dogs Trained</span>
            </div>
            <div>
              <span className="text-fg font-semibold text-base">8+</span>
              <span className="block text-muted text-xs uppercase tracking-widest mt-0.5">Years</span>
            </div>
            <div>
              <span className="text-fg font-semibold text-base">100%</span>
              <span className="block text-muted text-xs uppercase tracking-widest mt-0.5">5-Star Reviews</span>
            </div>
          </div>
          <Button
            variant="ghost"
            href="https://real-k9.com"
            external
            className="mt-5"
          >
            real-k9.com <ExternalLink size={14} />
          </Button>
        </Card>
      </div>

      <div className="mt-16">
        <Button href="/contact">
          Get in touch <ArrowRight size={16} className="ml-2" />
        </Button>
      </div>
    </div>
  );
}
