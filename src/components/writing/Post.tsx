"use client";

import Image from "next/image";
import { TransitionLink } from "@/components/TransitionLink";
import { cn } from "@/lib/utils";
import { formatDate } from "@/utils/formatDate";
import { AnimatePresence, motion } from "motion/react";
import { Badge } from "../ui/badge";

interface PostProps {
  post: any;
  thumbnail: boolean;
  direction?: "row" | "column";
  hovered: boolean;
  onHover: () => void;
}

export default function Post({
  post,
  thumbnail,
  direction,
  hovered,
  onHover,
}: PostProps) {
  return (
    <TransitionLink
      href={`/writing/${post.slug}`}
      className={cn(
        "group relative flex w-full rounded-xl p-1 transition-colors ease-in-out duration-200",
        direction === "column" ? "flex-col" : "flex-col sm:flex-row sm:gap-6",
      )}
      onMouseEnter={onHover}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            layoutId="post-card-hover"
            className="absolute inset-0 rounded-xl bg-component-background"
            transition={{ type: "tween", duration: 0.3 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      <div
        className={cn(
          "relative z-10 flex w-full",
          direction === "column"
            ? "flex-col"
            : "flex-col sm:flex-row sm:gap-6 group-hover:text-font-secondary",
        )}
      >
        {/* {post.metadata.image && thumbnail && (
          <div className="relative w-full overflow-hidden rounded-lg border aspect-video">
            <Image
              src={post.metadata.image}
              alt={"Thumbnail of " + post.metadata.title}
              fill
              sizes="(max-width: 320px) 100vw, 320px"
              className="object-cover"
              priority
            />
          </div>
        )} */}
        <div className="flex items-start flex-col w-full justify-between px-3 py-3">
            <h3 className="text-lg md:text-xl font-semibold leading-tight font-[family-name:var(--font-heading)]">
              {post.metadata.title}
            </h3>
            <span className="text-base text-font-secondary whitespace-nowrap">
              {formatDate(post.metadata.publishedAt, false)}
            </span>
          {/* {post.metadata.tag && (
            <Badge variant="secondary">{post.metadata.tag}</Badge>
          )} */}
        </div>
      </div>
    </TransitionLink>
  );
}
