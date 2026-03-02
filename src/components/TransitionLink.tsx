"use client";

import Link from "next/link";
import { usePageTransition } from "./PageTransitionProvider";
import type { ComponentProps, MouseEvent } from "react";

type TransitionLinkProps = ComponentProps<typeof Link>;

export function TransitionLink(props: TransitionLinkProps) {
  const { navigateWithTransition } = usePageTransition();
  const { href, onClick, target, ...rest } = props;

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented) return;

    const hrefString = typeof href === "string" ? href : href.pathname ?? "";

    // Only intercept internal, same-window navigation
    if (
      target === "_blank" ||
      !hrefString.startsWith("/") ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey
    ) {
      return;
    }

    e.preventDefault();
    navigateWithTransition(hrefString);
  };

  return <Link href={href} target={target} onClick={handleClick} {...rest} />;
}
