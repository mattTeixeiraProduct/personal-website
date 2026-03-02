"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Info, AlertTriangle, Lightbulb, StickyNote } from "lucide-react";
import { fadeInUp, scrollTransition, inViewOptions } from "./animation";

type CalloutType = "info" | "warning" | "tip" | "note";

interface CalloutProps {
  type?: CalloutType;
  children: React.ReactNode;
}

const config: Record<
  CalloutType,
  { icon: typeof Info; border: string; bg: string; iconColor: string }
> = {
  info: {
    icon: Info,
    border: "border-blue-500/40",
    bg: "bg-blue-500/5",
    iconColor: "text-blue-500",
  },
  warning: {
    icon: AlertTriangle,
    border: "border-yellow-500/40",
    bg: "bg-yellow-500/5",
    iconColor: "text-yellow-500",
  },
  tip: {
    icon: Lightbulb,
    border: "border-green-500/40",
    bg: "bg-green-500/5",
    iconColor: "text-green-500",
  },
  note: {
    icon: StickyNote,
    border: "border-border",
    bg: "bg-muted/50",
    iconColor: "text-font-secondary",
  },
};

export function Callout({ type = "note", children }: CalloutProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, inViewOptions);
  const { icon: Icon, border, bg, iconColor } = config[type];

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={scrollTransition()}
      className={`my-6 flex gap-3 rounded-lg border-l-[3px] ${border} ${bg} p-4`}
    >
      <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${iconColor}`} />
      <div className="min-w-0 text-sm leading-relaxed [&>p]:my-0">
        {children}
      </div>
    </motion.div>
  );
}
