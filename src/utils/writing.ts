import type { WritingPost, WritingPostMetadata } from "@/types";
import posts from "@/app/writing/posts";

type WritingPostEntry = {
  metadata: WritingPostMetadata;
  slug: string;
};

export function getWritingPosts(): WritingPostEntry[] {
  return Object.entries(posts).map(([slug, post]) => ({
    metadata: post.metadata,
    slug,
  }));
}

export function getWritingPost(
  slug: string,
): (WritingPost & { slug: string }) | null {
  const post = posts[slug];
  if (!post) return null;
  return { ...post, slug };
}
