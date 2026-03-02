"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { scrollTransition, staggerDelay, inViewOptions } from "./animation";

interface BadgeGroupProps {
  items: string[];
}

export function BadgeGroup({ items }: BadgeGroupProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, inViewOptions);

  return (
    <div ref={ref} className="my-4 flex flex-wrap gap-2">
      {items.map((item, i) => (
        <motion.div
          key={item}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isInView
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 0.8 }
          }
          transition={scrollTransition(i * staggerDelay)}
        >
          <Badge variant="secondary">{item}</Badge>
        </motion.div>
      ))}
    </div>
  );
}
