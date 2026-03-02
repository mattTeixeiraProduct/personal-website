"use client";

import { usePageTransition } from "./PageTransitionProvider";

const OFFSET = "80px";

export function PageTransitionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { phase, direction } = usePageTransition();


  const getStyle = (): React.CSSProperties => {
    const slide = direction !== null;

    switch (phase) {
      case "idle":
        return {
          opacity: 1,
          transform: "translateX(0)",
          transition: "opacity 250ms ease-out, transform 250ms ease-out",
        };
      case "exiting": {
        const exitX = slide
          ? direction === "right"
            ? `-${OFFSET}`
            : OFFSET
          : "0";
        return {
          opacity: 0,
          transform: `translateX(${exitX})`,
          transition: "opacity 250ms ease-in, transform 250ms ease-in",
        };
      }
      case "navigating": {
        const enterFromX = slide
          ? direction === "right"
            ? OFFSET
            : `-${OFFSET}`
          : "0";
        return {
          opacity: 0,
          transform: `translateX(${enterFromX})`,
          transition: "none",
        };
      }
      case "entering":
        return {
          opacity: 1,
          transform: "translateX(0)",
          transition: "opacity 250ms ease-out, transform 250ms ease-out",
        };
    }
  };

  return <div style={getStyle()} className="w-full">{children}</div>;
}
