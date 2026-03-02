"use client";

import React, { type JSX } from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Link as LinkIcon } from "lucide-react";

interface HeadingLinkProps {
  id: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const sizeMap = {
  1: "text-4xl font-bold tracking-tight font-[family-name:var(--font-heading)]",
  2: "text-3xl font-bold tracking-tight font-[family-name:var(--font-heading)]",
  3: "text-2xl font-semibold tracking-tight font-[family-name:var(--font-heading)]",
  4: "text-xl font-semibold font-[family-name:var(--font-heading)]",
  5: "text-lg font-semibold font-[family-name:var(--font-heading)]",
  6: "text-base font-semibold font-[family-name:var(--font-heading)]",
} as const;

export const HeadingLink: React.FC<HeadingLinkProps> = ({ id, level, children, style }) => {
  const copyURL = (id: string): void => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url).then(
      () => toast.success("Link copied to clipboard."),
      () => toast.error("Failed to copy link."),
    );
  };

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <div
      style={style}
      onClick={() => copyURL(id)}
      className="group flex cursor-pointer items-center gap-2 mt-12 mb-3"
    >
      <Tag id={id} className={cn(sizeMap[level])}>
        {children}
      </Tag>
      <LinkIcon className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-50" />
    </div>
  );
};
