"use client";

import { useRef, Children, isValidElement } from "react";
import { motion, useInView } from "motion/react";
import { fadeInUp, scrollTransition, inViewOptions } from "./animation";

interface BlockquoteProps {
  children: React.ReactNode;
}

export function Blockquote({ children }: BlockquoteProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, inViewOptions);

  // Detect attribution: last child starting with em-dash
  const items = Children.toArray(children);
  let body = items;
  let attribution: React.ReactNode = null;

  const last = items[items.length - 1];
  if (isValidElement(last)) {
    const props = last.props as Record<string, unknown>;
    const childContent = props?.children;
    const text =
      typeof childContent === "string"
        ? childContent
        : Array.isArray(childContent)
          ? childContent.find((c: unknown) => typeof c === "string")
          : null;
    if (typeof text === "string" && text.trimStart().startsWith("\u2014")) {
      body = items.slice(0, -1);
      attribution = last;
    }
  }

  return (
    <motion.blockquote
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={scrollTransition()}
      className="my-6 border-l-2 border-primary/40 pl-4 italic text-font-secondary"
    >
      {body}
      {attribution && (
        <footer className="mt-2 text-right text-sm not-italic text-font-secondary/70">
          {attribution}
        </footer>
      )}
    </motion.blockquote>
  );
}
