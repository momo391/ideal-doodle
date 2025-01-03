import { Title } from "@/components";
import { FlipWords } from "@/components/animations/flip-words";
import { motion } from "motion/react";
import { TextRevealByWord } from "../animations/text-reveal-by-word";

export const About = ({
  children,
}: Readonly<{ children?: React.ReactNode }>) => {
  return (
    <>
      <div className="min-h-svh flex items-center justify-center flex-col md:gap-8 gap-2">
        {children}
      </div>
    </>
  );
};

export const AboutContent = () => {
  const words = [
    "trend making ?",
    "planting project ?",
    "beautify the city ?",
    "awarness spreading content ?",
  ];

  return (
    <>
      <div>
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
            filter: "blur(10px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className="max-w-4xl pl-2 mx-auto text-2xl md:text-4xl font-sans text-left w-screen font-semibold"
        >
          <FlipWords words={words} className="text-primary" />
        </motion.div>
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
            filter: "blur(10px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className="max-w-4xl pl-4 pt-2 flex flex-wrap text-base font-bold md:text-2xl"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          molestiae doloribus distinctio nostrum laborum, non eligendi?
          Consequuntur et consectetur corrupti, deserunt doloremque id eos
          molestias voluptate omnis quas assumenda optio!
        </motion.p>
      </div>
    </>
  );
};
