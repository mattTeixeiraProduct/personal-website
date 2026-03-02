"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";
import { about } from "@/resources";
import React from "react";

function ExperienceCard({
  experience,
  index,
  isOpen,
  onToggle,
}: {
  experience: (typeof about.work.experiences)[number];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{
        duration: 0.5,
        delay: index * 0.07,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <button
        onClick={onToggle}
        className="group flex w-full cursor-pointer items-center justify-between gap-4 rounded-xl px-4 py-4 text-left transition-all duration-200 hover:bg-muted/40"
      >
        <div className="flex-1 min-w-0">
          <div className="flex w-full items-baseline justify-between gap-4">
            <h3
              id={experience.company}
              className="text-lg font-semibold tracking-tight"
            >
              {experience.company}
            </h3>
            <span className="text-sm tracking-normal text-font-secondary whitespace-nowrap shrink-0">
              {experience.timeframe}
            </span>
          </div>
          <p className="text-base text-font-secondary mt-0.5">
            {experience.role}
          </p>
        </div>
        <motion.div
          className="mt-1 shrink-0"
          initial={false}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          {isOpen ? (
            <Minus className="h-4 w-4 text-font-secondary" />
          ) : (
            <Plus className="h-4 w-4 text-font-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          )}
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: {
                type: "spring",
                stiffness: 250,
                damping: 30,
                mass: 0.8,
              },
              opacity: { duration: 0.25, ease: "easeInOut" },
            }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-5">
              <ul className="flex flex-col gap-2.5">
                {experience.achievements.map(
                  (achievement: React.ReactNode, idx: number) => (
                    <motion.li
                      key={`${experience.company}-${idx}`}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: idx * 0.05,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      className="text-base leading-relaxed text-font-secondary"
                    >
                      {achievement}
                    </motion.li>
                  )
                )}
              </ul>
              {experience.images && experience.images.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: experience.achievements.length * 0.05 + 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="flex flex-wrap gap-3 pt-4"
                >
                  {experience.images.map((image, idx) => (
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
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {index < about.work.experiences.length - 1 && (
        <div className="h-px bg-border/40 mx-4" />
      )}
    </motion.div>
  );
}

export function WorkExperience() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col -mx-4">
      {about.work.experiences.map((experience, index) => (
        <ExperienceCard
          key={`${experience.company}-${experience.role}-${index}`}
          experience={experience}
          index={index}
          isOpen={openIndex === index}
          onToggle={() => toggle(index)}
        />
      ))}
    </div>
  );
}
