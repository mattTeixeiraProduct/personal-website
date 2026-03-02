import type { Transition, Variants } from "motion/react";

/** Ease-out-quad — matches AnimatedSection / WorkExperience */
export const easeOutQuad: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

/** Standard scroll-triggered fade+slide entry */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

/** Transition for scroll-triggered entries */
export const scrollTransition = (delay = 0): Transition => ({
  duration: 0.5,
  delay,
  ease: easeOutQuad,
});

/** Stagger delay per item */
export const staggerDelay = 0.06;

/** Interactive spring config (tabs, toggles) */
export const interactiveSpring: Transition = {
  type: "spring",
  stiffness: 280,
  damping: 28,
};

/** useInView options — matches existing codebase */
export const inViewOptions = { once: true, margin: "-80px" as any };
