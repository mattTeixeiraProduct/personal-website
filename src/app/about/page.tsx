import Image from "next/image";
import Link from "next/link";
import { baseURL, about, person, social } from "@/resources";
import { generateMetadata as genMeta } from "@/lib/metadata";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/Icon";
import { WorkExperience } from "@/components/about/WorkExperience";
import { AnimatedSection } from "@/components/about/AnimatedSection";
import { Calendar, ChevronRight, Globe, GraduationCap } from "lucide-react";
import React from "react";

export async function generateMetadata() {
  return genMeta({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

export default function About() {
  return (
    <div className="w-full">
      <SchemaMarkup
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* ── Hero Section ── */}
      <AnimatedSection className="flex flex-col items-center text-center pt-8 pb-8">
        {about.avatar.display && (
          <div className="relative mb-3 group">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/20 via-transparent to-primary/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-border/50 ring-offset-2 ring-offset-background transition-all duration-500 group-hover:ring-primary/30">
              <Image
                src={person.avatar}
                alt={person.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        )}

        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight font-[family-name:var(--font-heading)]">
          {person.name}
        </h1>
        <p className="text-lg text-font-secondary mt-1">{person.role}</p>

        <div className="flex items-center gap-4 mt-3 text-base text-font-secondary">
          <span className="flex items-center gap-1.5">
            <Globe className="h-3.5 w-3.5" />
            {person.location}
          </span>
          {person.languages && person.languages.length > 0 && (
            <>
              <span className="h-3.5 w-px bg-border" />
              <span>{person.languages.join(" · ")}</span>
            </>
          )}
        </div>

        {/* Social links */}
        {social.length > 0 && (
          <div className="flex items-center gap-1 mt-3">
            {social
              .filter((s) => s.essential)
              .map((s) => (
                <Button
                  key={s.name}
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-full text-font-secondary hover:text-foreground transition-colors"
                  asChild
                >
                  <Link href={s.link} target="_blank" rel="noopener noreferrer">
                    <Icon name={s.icon as any} size={16} />
                  </Link>
                </Button>
              ))}
          </div>
        )}

        {about.calendar.display && (
          <div className="flex items-center gap-2 rounded-full border bg-card/60 p-1 pr-1 mt-4 backdrop-blur-sm">
            <Calendar className="h-4 w-4 ml-3 text-font-secondary" />
            <span className="px-2 text-sm">Schedule a call</span>
            <Button
              size="icon"
              variant="secondary"
              className="h-7 w-7 rounded-full"
              asChild
            >
              <Link href={about.calendar.link}>
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}
      </AnimatedSection>

      {/* ── Divider ── */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* ── Introduction ── */}
      {about.intro.display && (
        <AnimatedSection delay={0.1} className="py-10">
          <p className="text-lg sm:text-xl leading-relaxed text-font-secondary font-[family-name:var(--font-heading)] italic">
            {about.intro.description}
          </p>
        </AnimatedSection>
      )}

      {/* ── Divider ── */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* ── Work Experience ── */}
      {about.work.display && (
        <AnimatedSection delay={0.05} className="py-12">
          <div className="flex items-center gap-3 mb-8">
            <h2
              id={about.work.title}
              className="text-xs font-medium tracking-[0.2em] uppercase text-font-secondary"
            >
              {about.work.title}
            </h2>
            <div className="flex-1 h-px bg-border/50" />
          </div>
          <WorkExperience />
        </AnimatedSection>
      )}

      {/* ── Divider ── */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* ── Studies ── */}
      {about.studies.display && (
        <AnimatedSection delay={0.05} className="py-12">
          <div className="flex items-center gap-3 mb-8">
            <h2
              id={about.studies.title}
              className="text-xs font-medium tracking-[0.2em] uppercase text-font-secondary"
            >
              {about.studies.title}
            </h2>
            <div className="flex-1 h-px bg-border/50" />
          </div>
          <div className="flex flex-col gap-4">
            {about.studies.institutions.map((institution, index) => (
              <AnimatedSection
                key={`${institution.name}-${index}`}
                delay={index * 0.08}
              >
                <div className="group rounded-xl border border-border/50 bg-card/30 p-5 transition-all duration-300 hover:border-border hover:bg-card/60 hover:shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                      <GraduationCap className="h-5 w-5 text-font-secondary" />
                    </div>
                    <div>
                      <h3
                        id={institution.name}
                        className="text-lg font-semibold tracking-tight"
                      >
                        {institution.name}
                      </h3>
                      <p className="text-base text-font-secondary mt-1">
                        {institution.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      )}

      {/* ── Technical Skills ── */}
      {about.technical.display && (
        <>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
          <AnimatedSection delay={0.05} className="py-12">
            <div className="flex items-center gap-3 mb-8">
              <h2
                id={about.technical.title}
                className="text-xs font-medium tracking-[0.2em] uppercase text-font-secondary"
              >
                {about.technical.title}
              </h2>
              <div className="flex-1 h-px bg-border/50" />
            </div>
            <div className="flex flex-col gap-6">
              {about.technical.skills.map((skill, index) => (
                <AnimatedSection
                  key={`${skill.title}-${index}`}
                  delay={index * 0.08}
                >
                  <div className="group rounded-xl border border-border/50 bg-card/30 p-5 transition-all duration-300 hover:border-border hover:bg-card/60 hover:shadow-sm">
                    <h3
                      id={skill.title}
                      className="text-base font-semibold tracking-tight"
                    >
                      {skill.title}
                    </h3>
                    <p className="text-sm text-font-secondary mt-1">
                      {skill.description}
                    </p>
                    {skill.tags && skill.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-3">
                        {skill.tags.map((tag, tagIndex) => (
                          <Badge
                            key={`${skill.title}-${tagIndex}`}
                            variant="secondary"
                            className="gap-1.5"
                          >
                            {tag.icon && (
                              <Icon name={tag.icon as any} size={12} />
                            )}
                            {tag.name}
                          </Badge>
                        ))}
                      </div>
                    )}
                    {skill.images && skill.images.length > 0 && (
                      <div className="flex flex-wrap gap-3 pt-4">
                        {skill.images.map((image, idx) => (
                          <div
                            key={idx}
                            className="relative overflow-hidden rounded-lg border"
                            style={{
                              width: image.width * 10,
                              height: image.height * 10,
                            }}
                          >
                            <Image
                              src={image.src}
                              alt={image.alt}
                              fill
                              sizes={`${image.width * 10}px`}
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </>
      )}

      {/* Bottom spacer */}
      <div className="h-8" />
    </div>
  );
}
