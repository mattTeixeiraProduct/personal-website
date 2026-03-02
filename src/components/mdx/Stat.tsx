"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { fadeInUp, scrollTransition, inViewOptions } from "./animation";

interface StatProps {
  value: string;
  label: string;
  trend?: "up" | "down";
}

export function Stat({ value, label, trend }: StatProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, inViewOptions);

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={scrollTransition()}
      className="my-4 inline-flex flex-col items-start rounded-lg border p-4"
    >
      <div className="flex items-center gap-2">
        <span className="text-4xl font-bold font-[family-name:var(--font-heading)]">
          {value}
        </span>
        {trend === "up" && (
          <TrendingUp className="h-5 w-5 text-green-500" />
        )}
        {trend === "down" && (
          <TrendingDown className="h-5 w-5 text-red-500" />
        )}
      </div>
      <span className="mt-1 text-sm text-font-secondary">{label}</span>
    </motion.div>
  );
}
