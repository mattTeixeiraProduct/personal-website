import { baseURL, about, person, work } from "@/resources";
import { generateMetadata as genMeta } from "@/lib/metadata";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { AnimatedSection } from "@/components/about/AnimatedSection";
import { Projects } from "@/components/work/Projects";

export async function generateMetadata() {
  return genMeta({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Work() {
  return (
    <div className="w-full pt-6">
      <SchemaMarkup
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <AnimatedSection className="text-center pt-2 pb-6">
        <h1 className="text-3xl font-bold tracking-tight font-[family-name:var(--font-heading)]">
          {work.title}
        </h1>
      </AnimatedSection>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

      <Projects />
    </div>
  );
}
