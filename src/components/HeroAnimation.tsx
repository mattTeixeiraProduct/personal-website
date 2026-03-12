"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { ShinyText } from "@/components/ShinyText";

interface HeroAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

// Module-level flag: survives client-side navigations, resets on hard refresh
let hasPlayedThisSession = false;

// Context for coordinating the headline → subline typing sequence
interface HeroContextType {
  phase: "idle" | "headline" | "headline-done" | "subline" | "done";
  advancePhase: () => void;
}

const HeroContext = createContext<HeroContextType>({
  phase: "idle",
  advancePhase: () => {},
});

// Recursively extract plain text from React children (fragments, strings, numbers)
function extractText(children: React.ReactNode): string {
  let text = "";
  React.Children.forEach(children, (child) => {
    if (typeof child === "string") {
      text += child;
    } else if (typeof child === "number") {
      text += String(child);
    } else if (React.isValidElement<{ children?: React.ReactNode }>(child) && child.props.children) {
      text += extractText(child.props.children);
    }
  });
  return text;
}

// Recursively slice React children to `maxChars`, preserving element wrappers (e.g. <strong>)
function sliceChildren(
  children: React.ReactNode,
  maxChars: number,
): { nodes: React.ReactNode[]; remaining: number } {
  const nodes: React.ReactNode[] = [];
  let remaining = maxChars;

  React.Children.forEach(children, (child) => {
    if (remaining <= 0) return;

    if (typeof child === "string") {
      const slice = child.slice(0, remaining);
      nodes.push(slice);
      remaining -= slice.length;
    } else if (typeof child === "number") {
      const str = String(child);
      const slice = str.slice(0, remaining);
      nodes.push(slice);
      remaining -= slice.length;
    } else if (React.isValidElement<{ children?: React.ReactNode }>(child)) {
      // Handle elements with children (e.g. <strong>, <a>)
      if (child.props.children != null) {
        const result = sliceChildren(child.props.children, remaining);
        if (result.nodes.length > 0) {
          nodes.push(React.cloneElement(child, { key: child.key }, ...result.nodes));
        }
        remaining = result.remaining;
      } else {
        // Handle self-closing elements (e.g. icons, <br />, <img />)
        // Include them as-is without consuming characters
        nodes.push(child);
      }
    }
  });

  return { nodes, remaining };
}

// Hook that types out `text` one character at a time.
// When `skip` is true the hook initialises in the "already complete" state
// so no typing animation runs and the full text is returned immediately.
function useTypingAnimation(
  text: string,
  speed: number,
  shouldStart: boolean,
  onComplete: () => void,
  skip: boolean = false,
) {
  const [displayedCount, setDisplayedCount] = useState(skip ? text.length : 0);
  const [isActive, setIsActive] = useState(false);
  const [isComplete, setIsComplete] = useState(skip);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  // Trigger start (one-way latch: once active, stays active)
  useEffect(() => {
    if (shouldStart && !isActive && !isComplete) {
      setIsActive(true);
    }
  }, [shouldStart, isActive, isComplete]);

  // Advance one character per tick
  useEffect(() => {
    if (!isActive || isComplete) return;
    if (displayedCount >= text.length) {
      setIsComplete(true);
      setIsActive(false);
      onCompleteRef.current();
      return;
    }
    const timer = setTimeout(() => {
      setDisplayedCount((prev) => prev + 1);
    }, speed);
    return () => clearTimeout(timer);
  }, [displayedCount, isActive, text.length, speed, isComplete]);

  return {
    displayedText: text.slice(0, displayedCount),
    isComplete,
    isTyping: isActive && !isComplete,
  };
}

export function HeroContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const alreadyPlayed = hasPlayedThisSession;
  const [phase, setPhase] = useState<HeroContextType["phase"]>(
    alreadyPlayed ? "done" : "idle",
  );

  // Kick off headline typing after a short initial pause
  useEffect(() => {
    if (alreadyPlayed) return;
    const timer = setTimeout(() => setPhase("headline"), 300);
    return () => clearTimeout(timer);
  }, [alreadyPlayed]);

  // Small pause between headline and subline
  useEffect(() => {
    if (phase === "headline-done") {
      const timer = setTimeout(() => setPhase("subline"), 400);
      return () => clearTimeout(timer);
    }
    if (phase === "done") {
      hasPlayedThisSession = true;
    }
  }, [phase]);

  const advancePhase = useCallback(() => {
    setPhase((prev) => {
      if (prev === "headline") return "headline-done";
      if (prev === "subline") return "done";
      return prev;
    });
  }, []);

  return (
    <HeroContext.Provider value={{ phase, advancePhase }}>
      <div className={className}>{children}</div>
    </HeroContext.Provider>
  );
}

export function HeroBadge({ children, className }: HeroAnimationProps) {
  return <div className={className}>{children}</div>;
}

export function HeroHeadline({ children, className }: HeroAnimationProps) {
  const { phase, advancePhase } = useContext(HeroContext);
  const text = extractText(children);
  const skip = hasPlayedThisSession;
  const shouldStart = phase !== "idle";
  const { displayedText, isComplete, isTyping } = useTypingAnimation(
    text,
    60,
    shouldStart,
    advancePhase,
    skip,
  );

  return (
    <h1 className={className}>
      {isComplete ? (
        <ShinyText
          speed={3}
          delay={2}
          color="var(--color-foreground)"
          shineColor="var(--color-main-light)"
        >
          {displayedText}
        </ShinyText>
      ) : (
        <>
          {displayedText}
          {isTyping && <span className="typing-cursor" />}
          <span className="invisible select-none" aria-hidden="true">
            {text.slice(displayedText.length)}
          </span>
        </>
      )}
    </h1>
  );
}

export function HeroSubline({ children, className }: HeroAnimationProps) {
  const { phase, advancePhase } = useContext(HeroContext);
  const text = extractText(children);
  const skip = hasPlayedThisSession;
  const shouldStart = phase === "subline" || phase === "done";
  const { displayedText, isComplete, isTyping } = useTypingAnimation(
    text,
    10,
    shouldStart,
    advancePhase,
    skip,
  );

  const displayedCount = displayedText.length;
  const { nodes: richDisplayed } = sliceChildren(children, displayedCount);

  return (
    <p className={className}>
      {isComplete ? (
        <ShinyText
          speed={3}
          delay={3}
          color="var(--color-font-secondary)"
          shineColor="var(--color-main-light)"
        >
          {richDisplayed}
        </ShinyText>
      ) : (
        <>
          {richDisplayed}
          {isTyping && <span className="typing-cursor" />}
          <span className="invisible select-none" aria-hidden="true">
            {text.slice(displayedText.length)}
          </span>
        </>
      )}
    </p>
  );
}
