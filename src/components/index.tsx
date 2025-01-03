import { motion } from "motion/react";

export const Title = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <motion.span
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
        className="max-w-7xl pl-4 mx-auto text-3xl md:text-5xl font-semibold"
      >
        {children}
      </motion.span>
    </>
  );
};
