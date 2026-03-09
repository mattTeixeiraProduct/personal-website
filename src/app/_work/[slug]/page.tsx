import { notFound } from "next/navigation";
import { TransitionLink } from "@/components";
import { getPosts } from "@/utils/utils";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { generateMetadata as genMeta } from "@/lib/metadata";
import { LightboxImage } from "@/components/mdx/LightboxImage";
import { Separator } from "@/components/ui/separator";
import { baseURL, about, person, work } from "@/resources";
import { ScrollToHash, CustomMDX } from "@/components";
import { AnimatedSection } from "@/components/about/AnimatedSection";
import { Metadata } from "next";
import { Projects } from "@/components/work/Projects";
import { ChevronLeft } from "lucide-react";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getPosts(["src", "app", "work", "projects"]);
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

  const posts = getPosts(["src", "app", "work", "projects"]);
  const post = posts.find((post) => post.slug === slugPath);

  if (!post) return {};

  return genMeta({
    title: post.metadata.title,
    description: post.metadata.summary,
    baseURL: baseURL,
    image:
      post.metadata.image || `/api/og/generate?title=${post.metadata.title}`,
    path: `${work.path}/${post.slug}`,
  });
}

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const post = getPosts(["src", "app", "work", "projects"]).find(
    (post) => post.slug === slugPath,
  );

  if (!post) {
    notFound();
  }

  return (
    <section className="flex w-full flex-col items-center gap-6">
      <SchemaMarkup
        as="blogPosting"
        baseURL={baseURL}
        path={`${work.path}/${post.slug}`}
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
      <AnimatedSection className="self-start">
        <TransitionLink
          href="/work"
          className="flex items-center gap-1.5 text-sm text-font-secondary hover:text-foreground transition-colors self-start leading-5"
        >
          <ChevronLeft className="size-4" />
          Projects
        </TransitionLink>
      </AnimatedSection>
      <AnimatedSection
        delay={0.1}
        className="flex w-full flex-col items-center gap-5 text-center pt-4 pb-2"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] font-[family-name:var(--font-heading)]">
          {post.metadata.title}
        </h1>
      </AnimatedSection>
      {post.metadata.images.length > 0 && (
        <AnimatedSection delay={0.2} className="w-full">
          <LightboxImage
            src={post.metadata.images[0]}
            alt={post.metadata.title}
            fill
            priority
            sizes="(min-width: 768px) 768px, 100vw"
            containerClassName="relative w-full overflow-hidden rounded-lg aspect-video"
            className="object-cover"
          />
        </AnimatedSection>
      )}
      <AnimatedSection delay={0.3} className="mx-auto w-full">
        <article>
          <CustomMDX source={post.content} />
        </article>
      </AnimatedSection>
      <AnimatedSection className="flex w-full flex-col items-center gap-10 mt-10">
        <Separator className="max-w-[10rem]" />
        <h2 className="text-2xl font-bold tracking-tight mb-6 font-[family-name:var(--font-heading)]">
          Related projects
        </h2>
        <Projects exclude={[post.slug]} range={[2]} />
      </AnimatedSection>
      <ScrollToHash />
    </section>
  );
}
