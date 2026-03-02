"use client";

import { type MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { ExternalLink } from "lucide-react";
import { usePageTransition } from "./PageTransitionProvider";
import { AnimatePresence, motion } from "motion/react";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
  hovered: boolean;
  onHover: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  link,
  hovered,
  onHover,
}) => {
  const { navigateWithTransition } = usePageTransition();

  const isInternal = !!content?.trim();
  const resolvedHref = isInternal ? href : link || href;

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!isInternal) return; // external links open normally
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    navigateWithTransition(resolvedHref);
  };

  return (
    <Link
      href={resolvedHref}
      {...(isInternal ? {} : { target: "_blank", rel: "noopener noreferrer" })}
      className="group relative flex w-full overflow-hidden rounded-xl p-1"
      onMouseEnter={onHover}
      onClick={handleClick}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            layoutId="project-card-hover"
            className="absolute inset-0 rounded-xl bg-component-background"
            transition={{ type: "tween", duration: 0.3 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      <div className="relative z-10 flex w-full flex-col sm:flex-row">
        {/* Image column */}
        {images.length > 0 && (
          <div className="sm:w-[45%] shrink-0">
            <Carousel className="w-full h-full">
              <CarouselContent className="h-full">
                {images.map((image, index) => (
                  <CarouselItem key={index} className="h-full">
                    <div className="relative w-full overflow-hidden aspect-[16/10] sm:aspect-auto sm:h-full sm:min-h-[200px]">
                      <Image
                        src={image}
                        alt={title}
                        fill
                        sizes="(max-width: 640px) 100vw, 400px"
                        className="object-cover transition-transform duration-700 ease-[var(--ease-out-quint)] group-hover:scale-[1.05]"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/[0.03] dark:group-hover:bg-white/[0.02]" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {images.length > 1 && (
                <>
                  <CarouselPrevious />
                  <CarouselNext />
                </>
              )}
            </Carousel>
          </div>
        )}

        {/* Text column */}
        <div className="flex flex-1 flex-col justify-center gap-3 px-5 py-5 sm:py-6 sm:px-6">
          {title && (
            <h2 className="text-xl font-bold text-balance font-[family-name:var(--font-heading)] transition-colors duration-300 group-hover:text-font-secondary">
              {title}
            </h2>
          )}
          {description?.trim() && (
            <p className="text-sm leading-relaxed text-font-secondary text-balance transition-colors duration-300 group-hover:text-foreground/70">
              {description}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};
