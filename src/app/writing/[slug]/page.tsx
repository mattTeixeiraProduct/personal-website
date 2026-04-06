import { notFound } from "next/navigation";
import { ScrollToHash, TransitionLink } from "@/components";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { generateMetadata as genMeta } from "@/lib/metadata";
import { LightboxImage } from "@/components/mdx/LightboxImage";
import { Separator } from "@/components/ui/separator";
import { baseURL, about, blog, person } from "@/resources";
import { formatDate } from "@/utils/formatDate";
import { getWritingPosts, getWritingPost } from "@/utils/writing";
import { Metadata } from "next";
import { Posts } from "@/components/writing/Posts";
import { CopyUrlButton } from "@/components/writing/CopyUrlButton";
import { SectionList } from "@/components/writing/SectionRenderer";
import { ChevronLeft, Dot } from "lucide-react";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getWritingPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}): Promise<Metadata> {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const post = getWritingPost(slugPath);

  if (!post) return {};

  return genMeta({
    title: post.metadata.title,
    description: post.metadata.summary,
    baseURL: baseURL,
    image:
      post.metadata.image || `/api/og/generate?title=${post.metadata.title}`,
    path: `${blog.path}/${post.slug}`,
  });
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const post = getWritingPost(slugPath);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex w-full">
      <div className="hidden md:block w-12" />
      <div className="flex w-full justify-center">
        <section className="flex w-full max-w-[768px] flex-col items-center gap-6 pt-6">
          <SchemaMarkup
            as="blogPosting"
            baseURL={baseURL}
            path={`${blog.path}/${post.slug}`}
            title={post.metadata.title}
            description={post.metadata.summary}
            datePublished={post.metadata.publishedAt}
            dateModified={post.metadata.publishedAt}
            image={
              post.metadata.image ||
              `/api/og/generate?title=${encodeURIComponent(post.metadata.title)}`
            }
            author={{
              name: person.name,
              url: `${baseURL}${about.path}`,
              image: `${baseURL}${person.avatar}`,
            }}
          />
          <TransitionLink
            href="/writing"
            className="flex items-center gap-1.5 text-sm text-font-secondary hover:text-foreground transition-colors self-start leading-5"
          >
            <ChevronLeft className="size-4" />
            Writing
          </TransitionLink>
          <div className="flex w-full flex-col items-start justify-start gap-5 text-start pt-4 pb-2">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] font-[family-name:var(--font-heading)] text-left">
              {post.metadata.title}
            </h1>
            {post.metadata.subtitle && (
              <p className="text-lg text-font-secondary italic max-w-lg text-left">
                {post.metadata.subtitle}
              </p>
            )}
            <div className="flex items-center justify-between pt-2 w-full">
              <div className="flex items-center justify-start gap-3 pt-2">
                <span className="text-base text-font-secondary">
                  {person.name}
                </span>
                <Dot className="size-4 text-font-secondary" />
                <span className="text-base text-font-secondary">
                  {post.metadata.publishedAt &&
                    formatDate(post.metadata.publishedAt)}
                </span>
              </div>
              <CopyUrlButton url={`${baseURL}${blog.path}/${post.slug}`} />
            </div>
          </div>
          {post.metadata.image && (
            <div className="relative w-full overflow-hidden rounded-lg mt-3 mb-2 aspect-video">
              <LightboxImage
                src={post.metadata.image}
                alt={post.metadata.title}
              />
            </div>
          )}
          <article className="w-full text-lg">
            <SectionList sections={post.sections} />
          </article>

          <div className="flex w-full flex-col items-center gap-10 mt-10">
            <Separator className="max-w-[10rem]" />
            <h2
              id="recent-posts"
              className="text-2xl font-bold tracking-tight mb-6 font-[family-name:var(--font-heading)]"
            >
              Recent posts
            </h2>
            <Posts
              exclude={[post.slug]}
              range={[1, 2]}
              columns="2"
              thumbnail
              direction="column"
            />
          </div>
          <ScrollToHash />
        </section>
      </div>
      {/* Sidebar placeholder for heading nav - could be added later */}
      <div className="hidden md:block w-12" />
    </div>
  );
}
