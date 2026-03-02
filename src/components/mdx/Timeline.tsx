"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  scrollTransition,
  staggerDelay,
  inViewOptions,
} from "./animation";

interface TimelineItem {
  title: string;
  description?: string;
  date?: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, inViewOptions);

  return (
    <div ref={ref} className="relative my-6 pl-6">
      {/* Vertical line */}
      <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-border" />

      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 16 }}
          animate={
            isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }
          }
          transition={scrollTransition(i * staggerDelay)}
          className="relative pb-6 last:pb-0"
        >
          {/* Circle node */}
          <div className="absolute -left-6 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-primary bg-background" />

          {item.date && (
            <span className="mb-0.5 block text-xs text-font-secondary">
              {item.date}
            </span>
          )}
          <h4 className="text-sm font-semibold">{item.title}</h4>
          {item.description && (
            <p className="mt-1 text-sm leading-relaxed text-font-secondary">
              {item.description}
            </p>
          )}
        </motion.div>
      ))}
    </div>
  );
}
