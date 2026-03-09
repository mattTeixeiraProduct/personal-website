"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { person, social } from "@/resources";
import { Icon } from "@/components/Icon";
import { AnimatePresence, motion } from "motion/react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const pathname = usePathname();

  // Show footer only on top-level pages (/, /about, /work, /writing)
  const segments = pathname.split("/").filter(Boolean);
  const showFooter = segments.length <= 1;

  return (
    <div className="mt-auto overflow-hidden">
      <motion.footer
        animate={showFooter ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="flex w-full justify-center p-2"
        style={{ pointerEvents: showFooter ? "auto" : "none" }}
      >
        <div className="flex w-full max-w-[960px] items-center justify-between px-4 py-2 sm:flex-row flex-col gap-4 text-center sm:text-left">
          <p className="text-base text-font-secondary">
            <span className="text-font-secondary">&copy; {currentYear} /</span>
            <span className="px-1 text-font-primary">{person.name}</span>
          </p>
          <div className="flex gap-1" onMouseLeave={() => setHoveredItem(null)}>
            {social.map(
              (item) =>
                item.link && (
                  <Link
                    key={item.name}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    className="relative flex size-9 items-center justify-center rounded-md text-font-secondary"
                    onMouseEnter={() => setHoveredItem(item.name)}
                  >
                    <AnimatePresence>
                      {hoveredItem === item.name && (
                        <motion.div
                          layoutId="footer-hover"
                          className="absolute inset-0 rounded-md bg-muted-foreground/25"
                          transition={{ type: "spring", duration: 0.3, bounce: 0.1 }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        />
                      )}
                    </AnimatePresence>
                    <Icon name={item.icon} size={16} className="relative z-10" />
                  </Link>
                ),
            )}
          </div>
        </div>
      </motion.footer>
    </div>
  );
};
