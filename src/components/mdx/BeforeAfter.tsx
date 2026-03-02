"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import { fadeInUp, scrollTransition, inViewOptions } from "./animation";

interface BeforeAfterProps {
  before: string;
  after: string;
  beforeAlt?: string;
  afterAlt?: string;
  initialPosition?: number;
}

export function BeforeAfter({
  before,
  after,
  beforeAlt = "Before",
  afterAlt = "After",
  initialPosition = 50,
}: BeforeAfterProps) {
  const ref = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, inViewOptions);
  const [position, setPosition] = useState(initialPosition);
  const [dragging, setDragging] = useState(false);

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, pct)));
  }, []);

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
      setDragging(true);
      updatePosition(e.clientX);
    },
    [updatePosition],
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!dragging) return;
      updatePosition(e.clientX);
    },
    [dragging, updatePosition],
  );

  const onPointerUp = useCallback(() => {
    setDragging(false);
  }, []);

  const onKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setPosition((p) => Math.max(0, p - 2));
    } else if (e.key === "ArrowRight") {
      setPosition((p) => Math.min(100, p + 2));
    }
  }, []);

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={scrollTransition()}
      className="my-6"
    >
      <div
        ref={containerRef}
        className="relative select-none overflow-hidden rounded-lg border"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {/* After image (full width, behind) */}
        <Image
          src={after}
          alt={afterAlt}
          width={960}
          height={540}
          sizes="(max-width: 960px) 100vw, 960px"
          className="block h-auto w-full"
          draggable={false}
        />

        {/* Before image (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <Image
            src={before}
            alt={beforeAlt}
            width={960}
            height={540}
            sizes="(max-width: 960px) 100vw, 960px"
            className="block h-full w-auto max-w-none object-cover object-left"
            style={{
              width: containerRef.current
                ? `${containerRef.current.offsetWidth}px`
                : "100vw",
            }}
            draggable={false}
          />
        </div>

        {/* Divider line + handle */}
        <div
          className="absolute inset-y-0"
          style={{ left: `${position}%` }}
        >
          <div className="absolute inset-y-0 -translate-x-1/2 w-[2px] bg-white shadow-sm" />
          <div
            role="slider"
            tabIndex={0}
            aria-label="Before/after comparison slider"
            aria-valuenow={Math.round(position)}
            aria-valuemin={0}
            aria-valuemax={100}
            onKeyDown={onKeyDown}
            className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-8 w-8 cursor-ew-resize items-center justify-center rounded-full border-2 border-white bg-black/50 shadow-lg backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className="text-white"
            >
              <path
                d="M3 2L1 6L3 10M9 2L11 6L9 10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
