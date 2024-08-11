"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./hero-highlight";

export function HeroHighlighttxt() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          // opacity: 0,
          // y: 20,
        }}
        animate={{
          // opacity: 1,
          // y: [20, -5, 0],
        }}
        transition={{
          // duration: 0.5,
          // ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-3xl sm:text-7xl py-2 font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >

        <Highlight className="text-black   dark:text-white">
        AI-Powered
        </Highlight>
        Creativity Unleashed
      </motion.h1>
    </HeroHighlight>
  );
}
