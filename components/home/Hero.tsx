import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { RoleCycler } from "./RoleCycler";

export function Hero() {
  return (
    <section className="min-h-[calc(100vh-74px)] flex items-center">
      <div className="max-w-[1158px] mx-auto px-4 md:px-8 w-full py-20">
        <div className="max-w-[560px]">
          <h1 className="text-[clamp(36px,5vw,60px)] leading-[1] font-medium tracking-[-1.5px] text-fg">
            James Valentine —{" "}
            <RoleCycler />
          </h1>

          <p className="mt-6 text-lg font-medium text-fg-sub max-w-[480px]">
            Building software, teaching physics, training dogs, and launching
            ventures. Turning curiosity into craft.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="/projects">
              View my work
              <ArrowRight size={16} className="ml-2" />
            </Button>
            <Button variant="secondary" href="/contact">
              Get in touch
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-8 text-sm text-muted">
            <span>
              <strong className="text-fg font-medium">5+</strong> years
              engineering
            </span>
            <span>
              <strong className="text-fg font-medium">2</strong> B.S. degrees
            </span>
            <span>
              <strong className="text-fg font-medium">100+</strong> dogs trained
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
