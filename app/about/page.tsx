import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "About",
  description:
    "Software engineer, physicist, mathematician, educator, dog trainer, entrepreneur.",
};

export default function AboutPage() {
  return (
    <div className="max-w-[1158px] mx-auto px-4 md:px-8 py-20">
      <h1 className="text-[clamp(36px,5vw,60px)] leading-[1] font-medium tracking-[-1.5px] text-fg">
        About me
      </h1>
      <p className="mt-6 text-lg text-fg-sub max-w-[640px] leading-relaxed">
        I&apos;m James Valentine — a software engineer with a background in
        physics and mathematics, a passion for teaching, and a side career
        training dogs.
      </p>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {/* Background */}
        <Card hover={false} className="p-8">
          <p className="text-xs font-medium uppercase tracking-[0.05em] text-muted mb-4">
            Background
          </p>
          <h2 className="text-2xl font-medium text-fg">Education</h2>
          <ul className="mt-4 space-y-3 text-fg-sub">
            <li>
              <strong className="text-fg">B.S. Physics</strong> — with a focus
              on computational methods and simulation
            </li>
            <li>
              <strong className="text-fg">B.S. Mathematics</strong> — emphasis
              on applied math and mathematical modeling
            </li>
          </ul>
          <p className="mt-6 text-fg-sub leading-relaxed">
            My academic background gave me a rigorous foundation in
            problem-solving, quantitative reasoning, and first-principles
            thinking — skills that translate directly into building software.
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
            I build full-stack web applications with a focus on TypeScript,
            React, Next.js, and Node. I care about clean architecture,
            developer experience, and shipping things that work.
          </p>
          <p className="mt-4 text-fg-sub leading-relaxed">
            Currently interested in AI-assisted tooling, developer productivity,
            and the intersection of physics simulation and the web.
          </p>
        </Card>

        {/* Teaching */}
        <Card hover={false} className="p-8">
          <p className="text-xs font-medium uppercase tracking-[0.05em] text-muted mb-4">
            Teaching
          </p>
          <h2 className="text-2xl font-medium text-fg">Education & Mentoring</h2>
          <p className="mt-4 text-fg-sub leading-relaxed">
            I&apos;ve taught physics, math, and programming at various levels.
            I believe the best way to learn is to build, and the best way to
            teach is to make complex things feel simple.
          </p>
        </Card>

        {/* Dog training */}
        <Card hover={false} className="p-8">
          <p className="text-xs font-medium uppercase tracking-[0.05em] text-muted mb-4">
            Side Venture
          </p>
          <h2 className="text-2xl font-medium text-fg">Dog Training</h2>
          <p className="mt-4 text-fg-sub leading-relaxed">
            I run a professional balanced dog training business. I work with
            dogs of all breeds and ages on obedience, behavior modification,
            and building a healthy relationship between dog and owner.
          </p>
          <Button
            variant="ghost"
            href="https://real-k9.com"
            external
            className="mt-4"
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
