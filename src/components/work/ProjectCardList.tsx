"use client";

import { useState } from "react";
import { ProjectCard } from "@/components";
import { AnimatedSection } from "@/components/about/AnimatedSection";

interface ProjectData {
  slug: string;
  priority: boolean;
  href: string;
  images: string[];
  title: string;
  description: string;
  content: string;
  avatars: { src: string }[];
  link: string;
}

interface ProjectCardListProps {
  projects: ProjectData[];
}

export function ProjectCardList({ projects }: ProjectCardListProps) {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  return (
    <div
      className="flex w-full flex-col gap-8 mb-10 px-4 pt-6"
      onMouseLeave={() => setHoveredSlug(null)}
    >
      {projects.map((project, index) => (
        <AnimatedSection key={project.slug} delay={0.1 + index * 0.12}>
          <ProjectCard
            priority={project.priority}
            href={project.href}
            images={project.images}
            title={project.title}
            description={project.description}
            content={project.content}
            avatars={project.avatars}
            link={project.link}
            hovered={hoveredSlug === project.slug}
            onHover={() => setHoveredSlug(project.slug)}
          />
        </AnimatedSection>
      ))}
    </div>
  );
}
