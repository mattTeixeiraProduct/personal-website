"use client";

import { useState } from "react";
import Post from "./Post";
import { AnimatedSection } from "@/components/about/AnimatedSection";
import { cn } from "@/lib/utils";

interface PostListProps {
  posts: any[];
  thumbnail: boolean;
  direction?: "row" | "column";
  columns?: "1" | "2" | "3";
}

export function PostList({ posts, thumbnail, direction, columns = "1" }: PostListProps) {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  const gridCols = {
    "1": "grid-cols-1",
    "2": "grid-cols-1 sm:grid-cols-2",
    "3": "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  };

  return (
    <div
      className={cn("grid w-full gap-4", gridCols[columns])}
      onMouseLeave={() => setHoveredSlug(null)}
    >
      {posts.map((post, index) => (
        <AnimatedSection key={post.slug} delay={0.1 + index * 0.12}>
          <Post
            post={post}
            thumbnail={thumbnail}
            direction={direction}
            hovered={hoveredSlug === post.slug}
            onHover={() => setHoveredSlug(post.slug)}
          />
        </AnimatedSection>
      ))}
    </div>
  );
}
