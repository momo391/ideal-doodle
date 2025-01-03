"use client";

import { Title } from "@/components";
import { TextRevealByWord } from "@/components/animations/text-reveal-by-word";
import { About, AboutContent } from "@/components/partials/about";
import {
  Hero,
  HeroBackground,
  HeroBody,
  HeroOverlay,
} from "@/components/partials/hero";

export default function Page() {
  return (
    <>
      <Hero>
        <HeroBackground />
        <HeroOverlay />
        <HeroBody />
      </Hero>

      <div className="z-10 flex min-h-svh items-center justify-center rounded-lg border bg-secondary">
        <TextRevealByWord text="Green Algeria will change the way you see, think, and understand things." />
      </div>

      <About>
        <Title>
          Get to know about{" "}
          <span className="font-display text-primary">Green algeria</span>
        </Title>
        <AboutContent />
      </About>
    </>
  );
}

// navbar
// hero section
// what is green algeria
// our mission
// our team
// our vision
// latest news
// blog
// contact us
// footer
