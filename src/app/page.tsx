import Link from "next/link";
import { home, about, person, baseURL } from "@/resources";
import { generateMetadata as genMeta } from "@/lib/metadata";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { Badge } from "@/components/ui/badge";
import {
  HeroContainer,
  HeroBadge,
  HeroHeadline,
  HeroSubline,
} from "@/components/HeroAnimation";

export async function generateMetadata() {
  return genMeta({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <div className="flex w-full h-full flex-col items-center gap-12 py-3">
      <SchemaMarkup
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <div className="flex w-full h-full flex-col items-center gap-6">
        <HeroContainer className="flex max-w-xl flex-col items-center justify-center text-center h-[80vh]">
          {/* {home.featured.display && (
            <HeroBadge className="pt-4 pb-8">
              <Link href={home.featured.href}>
                <Badge variant="secondary" className="gap-2 px-3 py-1.5 cursor-pointer hover:bg-secondary/80">
                  {home.featured.title}
                </Badge>
              </Link>
            </HeroBadge>
          )} */}
          <HeroHeadline className="text-4xl sm:text-6xl font-bold tracking-tight text-balance font-[family-name:var(--font-heading)]">
            {home.headline}
          </HeroHeadline>
          <HeroSubline className="mt-4 text-xl text-font-secondary text-balance">
            {home.subline}
          </HeroSubline>
        </HeroContainer>
      </div>
    </div>
  );
}
