"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";
import { fadeInUp, scrollTransition, inViewOptions } from "./animation";

interface PromptProps {
  text: string;
  title?: string;
}

const PLACEHOLDER = /(\[[^\]\n]+\])/g;

/**
 * Shows `[placeholders]` as greyed-out placeholder text (brackets hidden),
 * like an empty field in a chat box. The copied text keeps the brackets.
 */
function renderWithPlaceholders(text: string) {
  return text.split(PLACEHOLDER).map((part, i) =>
    /^\[[^\]\n]+\]$/.test(part) ? (
      <span key={i} className="text-gray-500 dark:text-gray-300">
        {part.slice(1, -1)}
      </span>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}

/** A copyable LLM prompt, styled like a chat composer. */
export function Prompt({ text, title }: PromptProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, inViewOptions);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(
      () => {
        setCopied(true);
        toast.success("Prompt copied to clipboard.");
      },
      () => toast.error("Failed to copy prompt."),
    );
  };

  return (
    <motion.figure
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={scrollTransition()}
      className="my-6 flex flex-col gap-4 rounded-[22px] border border-border bg-gray-50 p-5 shadow-[0_8px_24px_rgba(27,31,34,0.08)] dark:bg-gray-750 dark:shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
    >
      <p className="m-0 whitespace-pre-wrap break-words text-base leading-[1.7] text-font-primary">
        {renderWithPlaceholders(text)}
      </p>

      <figcaption className="flex items-center justify-between gap-3">
        <span className="min-w-0 truncate text-sm text-font-secondary">
          {title ?? "Prompt"}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          aria-label={copied ? "Prompt copied" : "Copy prompt"}
          title="Copy prompt"
          className="-m-2.5 inline-flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-full text-font-secondary transition-all hover:text-foreground active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-main-primary/50"
        >
          {copied ? (
            <Check className="size-[18px] text-main-primary dark:text-main-light" strokeWidth={2.25} />
          ) : (
            <Copy className="size-[18px]" strokeWidth={1.75} />
          )}
        </button>
      </figcaption>
    </motion.figure>
  );
}
