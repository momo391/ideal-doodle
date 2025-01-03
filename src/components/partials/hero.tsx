"use client";

import { Button } from "@/components/ui/button";
import { BlurImage } from "@/components/animations/blur-image";
import { motion } from "motion/react";
import heroImage from "@/assets/images/hero.jpg";

const HeroBackground = () => {
  return (
    <>
      {/* <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.2,
              delay: 0.2,
              ease: "linear",
            },
          }}
          className="absolute inset-0 -z-20"
        > */}
      <BlurImage
        src={heroImage}
        alt="hero image"
        quality={100}
        fill
        className="object-cover fixed -z-20  inset-0"
      />
      {/* </motion.div> */}
    </>
  );
};

const HeroOverlay = () => {
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          filter: "blur(12px)",
        }}
        animate={{
          opacity: 1,
          filter: "blur(0px)",
          transition: {
            duration: 0.2,
            delay: 0.1,
            ease: "easeOut",
          },
        }}
        className="bg-black/50 inset-0 absolute -z-10"
      />
    </>
  );
};

const HeroContent = () => {
  return (
    <>
      <div className="w-screen p-2 md:p-4 max-w-4xl flex flex-col gap-2 md:gap-4 text-center text-pretty dark">
        <span className="font-display font-bold text-primary text-5xl md:text-7xl capitalize ">
          green algeria
        </span>
        <span className="font-mono font-normal text-sm md:text-base text-foreground ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quisquam,
          cupiditate delectus neque placeat vitae. Dolor, ratione, recusandae
          repellat ea ullam vitae aut omnis magnam dignissimos optio distinctio
          eveniet. Quam!
        </span>
      </div>
    </>
  );
};

const HeroCta = () => {
  return (
    <>
      <div className="*:md:w-40 *:w-32 *:capitalize flex-row flex items-center justify-center font-mono gap-2 ">
        <Button size={"lg"} variant={"default"}>
          get in touch
        </Button>
        <Button size={"lg"} variant={"secondary"}>
          about
        </Button>
      </div>
    </>
  );
};

const HeroBody = () => {
  const items = [HeroContent(), HeroCta()];
  return (
    <>
      <div className="flex flex-col space-y-6 w-screen max-w-4xl">
        {items &&
          items.map((item, index) => (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
                filter: "blur(12px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: {
                  duration: 0.3,
                  delay: 0.2 * index,
                  ease: "easeOut",
                },
              }}
              viewport={{ once: false }}
              key={"item" + index}
            >
              {item}
            </motion.div>
          ))}
      </div>
    </>
  );
};

const Hero = ({ children }: Readonly<{ children?: React.ReactNode }>) => {
  return (
    <>
      <div className="min-h-screen grid place-items-center relative">
        {children}
      </div>
    </>
  );
};

export { Hero, HeroBackground, HeroOverlay, HeroBody };
