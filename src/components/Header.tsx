"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { routes, display, person, about, blog, work } from "@/resources";
import { ThemeToggle } from "./ThemeToggle";
import { TransitionLink } from "./TransitionLink";
import { AnimatePresence, motion } from "motion/react";

type TimeDisplayProps = {
  timeZone: string;
  locale?: string;
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({
  timeZone,
  locale = "en-GB",
}) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const timeString = new Intl.DateTimeFormat(locale, options).format(now);
      setCurrentTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, [timeZone, locale]);

  return <>{currentTime}</>;
};

export default TimeDisplay;

interface NavItemProps {
  href: string;
  label?: string;
  selected: boolean;
  hovered: boolean;
  onHover: () => void;
}

function NavItem({ href, label, selected, hovered, onHover }: NavItemProps) {
  return (
    <TransitionLink
      href={href}
      className={cn(
        "relative flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-base transition-colors",
        selected
          ? "text-accent-foreground font-bold"
          : "text-font-secondary hover:text-foreground",
      )}
      onMouseEnter={onHover}
    >
      <AnimatePresence>
        {(hovered || selected) && (
          <motion.div
            layoutId="nav-hover"
            className={cn(
              "absolute inset-0 rounded-md",
              selected ? "bg-card-hover" : "bg-card-hover",
            )}
            transition={{ type: "tween", duration: 0.3, bounce: 0.1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
      {label && <span className="relative z-10">{label}</span>}
    </TransitionLink>
  );
}

export const Header = () => {
  const pathname = usePathname() ?? "";
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 sm:sticky sm:top-0 fixed bottom-0 sm:bottom-auto z-[9] flex w-full items-center justify-center p-5 md:p-2 relative",
        )}
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 backdrop-blur-md bg-background/80"
          style={{
            height: "calc(100% + 40px)",
            maskImage: "linear-gradient(to bottom, black 40%, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent)",
          }}
        />
        <div className="opacity-0 hidden sm:flex flex-1 items-center pl-3 text-sm">
          {display.location && <span>{person.location}</span>}
        </div>

        <div className="flex justify-center">
          <nav
            className="flex items-center gap-1"
            suppressHydrationWarning
            onMouseLeave={() => setHoveredItem(null)}
          >
            {routes["/"] && (
              <NavItem
                href="/"
                label="Home"
                selected={pathname === "/"}
                hovered={hoveredItem === "/"}
                onHover={() => setHoveredItem("/")}
              />
            )}
            {routes["/about"] && (
              <NavItem
                href="/about"
                label={about.label}
                selected={pathname === "/about"}
                hovered={hoveredItem === "/about"}
                onHover={() => setHoveredItem("/about")}
              />
            )}
            {/* {routes["/work"] && (
              <NavItem
                href="/work"
                label={work.label}
                selected={pathname.startsWith("/work")}
                hovered={hoveredItem === "/work"}
                onHover={() => setHoveredItem("/work")}
              />
            )} */}
            {routes["/writing"] && (
              <NavItem
                href="/writing"
                label={blog.label}
                selected={pathname.startsWith("/writing")}
                hovered={hoveredItem === "/writing"}
                onHover={() => setHoveredItem("/writing")}
              />
            )}
          </nav>
        </div>

        <div className="hidden sm:flex flex-1 items-center justify-end pr-3 text-sm">
          {display.themeSwitcher && <ThemeToggle />}
        </div>
      </header>
    </>
  );
};
