"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { fadeInUp, scrollTransition, inViewOptions } from "./animation";

interface TLDRProps {
  children: React.ReactNode;
}

export function TLDR({ children }: TLDRProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, inViewOptions);

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={scrollTransition()}
      className="my-6 rounded-lg border border-primary/20 bg-primary/5 p-4"
    >
      <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-primary">
        TL;DR
      </span>
      <div className="text-sm leading-relaxed [&>p]:my-0">{children}</div>
    </motion.div>
  );
}
