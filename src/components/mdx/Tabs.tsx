"use client";

import {
  useState,
  useId,
  Children,
  isValidElement,
  type ReactNode,
} from "react";
import { motion, AnimatePresence } from "motion/react";
import { interactiveSpring } from "./animation";

/* ---- Tab (child) ---- */
interface TabProps {
  label: string;
  children: ReactNode;
}

export function Tab({ children }: TabProps) {
  return <>{children}</>;
}

/* ---- Tabs (wrapper) ---- */
interface TabsProps {
  children: ReactNode;
}

export function Tabs({ children }: TabsProps) {
  const id = useId();
  const [active, setActive] = useState(0);

  // Extract Tab children
  const tabs = Children.toArray(children).filter(
    (child): child is React.ReactElement<TabProps> =>
      isValidElement(child) && (child.type as any) === Tab,
  );

  if (tabs.length === 0) return null;

  return (
    <div className="my-6">
      {/* Tab bar */}
      <div role="tablist" className="relative flex gap-1 border-b">
        {tabs.map((tab, i) => {
          const isActive = i === active;
          return (
            <button
              key={i}
              role="tab"
              aria-selected={isActive}
              aria-controls={`${id}-panel-${i}`}
              onClick={() => setActive(i)}
              className={`relative px-3 py-2 text-sm transition-colors ${
                isActive ? "text-foreground" : "text-font-secondary hover:text-foreground"
              }`}
            >
              {tab.props.label}
              {isActive && (
                <motion.div
                  layoutId={`${id}-underline`}
                  className="absolute inset-x-0 -bottom-px h-[2px] bg-primary"
                  transition={interactiveSpring}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Tab panels */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          id={`${id}-panel-${active}`}
          role="tabpanel"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="pt-4 text-sm leading-relaxed [&>p]:my-0"
        >
          {tabs[active]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
