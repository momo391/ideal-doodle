"use client";

import {
  Hero,
  HeroBackground,
  HeroBody,
  HeroOverlay,
} from "@/components/sections/hero";

export default function Page() {
  return (
    <Hero>
      <HeroBackground />
      <HeroOverlay />
      <HeroBody />
    </Hero>
  );
}
