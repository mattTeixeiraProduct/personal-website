"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { fadeInUp, scrollTransition, inViewOptions } from "./animation";
import { LightboxImage } from "./LightboxImage";

interface FigureProps {
  src: string;
  srcLight?: string;
  alt: string;
  caption?: string;
}

export function Figure({ src, srcLight, alt, caption }: FigureProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, inViewOptions);

  return (
    <motion.figure
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={scrollTransition()}
      className="my-6"
    >
      <LightboxImage
        src={src}
        srcLight={srcLight}
        alt={alt}
        containerClassName="relative w-full overflow-hidden rounded-lg border"
        className="h-auto w-full"
      />
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-font-secondary">
          {caption}
        </figcaption>
      )}
    </motion.figure>
  );
}
