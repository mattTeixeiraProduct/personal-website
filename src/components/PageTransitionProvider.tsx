"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  useTransition,
} from "react";
import { useRouter, usePathname } from "next/navigation";

type Phase = "idle" | "exiting" | "navigating" | "entering";
type Direction = "left" | "right" | null;

interface PageTransitionContextValue {
  phase: Phase;
  direction: Direction;
  navigateWithTransition: (href: string) => void;
}

const PageTransitionContext = createContext<PageTransitionContextValue>({
  phase: "idle",
  direction: null,
  navigateWithTransition: () => {},
});

const SLIDE_MS = 250;

const PAGE_ORDER: Record<string, number> = {
  "/": 0,
  "/about": 1,
  "/work": 2,
  "/writing": 3,
};

function getPageIndex(pathname: string): number {
  if (pathname === "/") return 0;
  const root = "/" + pathname.split("/")[1];
  return PAGE_ORDER[root] ?? 0;
}

export function PageTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState<Phase>("idle");
  const [direction, setDirection] = useState<Direction>(null);
  const [isPending, startTransition] = useTransition();
  const prevPathname = useRef(pathname);

  const startEntering = useCallback(() => {
    // Double rAF ensures the browser paints the "navigating" position
    // (instant jump to opposite side) before the enter animation begins
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setPhase((current) => {
          if (current !== "navigating") return current;
          return "entering";
        });
      });
    });
  }, []);

  useEffect(() => {
    if (phase === "entering") {
      const timer = setTimeout(() => {
        setPhase("idle");
        setDirection(null);
      }, SLIDE_MS);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  // Detect when pathname changes (navigation complete) → enter phase
  useEffect(() => {
    if (pathname !== prevPathname.current) {
      prevPathname.current = pathname;
      if (phase === "navigating") {
        startEntering();
      }
    }
  }, [pathname, phase, startEntering]);

  // Safety valve: if router.push resolved from cache (isPending flipped false
  // while we're still in "navigating"), force transition to entering.
  useEffect(() => {
    if (phase === "navigating" && !isPending) {
      startEntering();
    }
  }, [phase, isPending, startEntering]);

  const navigateWithTransition = useCallback(
    (href: string) => {
      if (phase !== "idle") return;
      if (href === pathname) return;

      const currentIndex = getPageIndex(pathname);
      const targetIndex = getPageIndex(href);

      // Same-tree navigation (e.g. /work → /work/slug) uses fade only
      if (currentIndex === targetIndex) {
        setDirection(null);
      } else {
        setDirection(targetIndex > currentIndex ? "right" : "left");
      }

      setPhase("exiting");

      setTimeout(() => {
        setPhase("navigating");
        startTransition(() => {
          router.push(href);
        });
      }, SLIDE_MS);
    },
    [phase, pathname, router, startTransition],
  );

  return (
    <PageTransitionContext.Provider
      value={{ phase, direction, navigateWithTransition }}
    >
      {children}
    </PageTransitionContext.Provider>
  );
}

export function usePageTransition() {
  return useContext(PageTransitionContext);
}
