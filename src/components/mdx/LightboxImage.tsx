"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { X } from "lucide-react";

interface LightboxImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  sizes?: string;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  containerClassName?: string;
}

export function LightboxImage({
  src,
  alt,
  width = 960,
  height = 540,
  sizes = "(max-width: 960px) 100vw, 960px",
  fill,
  priority,
  className = "w-full h-auto",
  containerClassName = "relative mt-2 mb-4 w-full overflow-hidden rounded-lg border",
}: LightboxImageProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`${containerClassName} cursor-zoom-in`}
      >
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes}
            className={className}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            sizes={sizes}
            className={className}
          />
        )}
      </button>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={close}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
              >
                <button
                  type="button"
                  onClick={close}
                  className="absolute right-4 top-4 rounded-full p-2 text-white/70 hover:text-white transition-colors"
                  aria-label="Close lightbox"
                >
                  <X className="h-6 w-6" />
                </button>

                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative h-[90vh] w-[90vw] pointer-events-none"
                >
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="90vw"
                    className="rounded-lg object-contain pointer-events-auto"
                    onClick={(e) => e.stopPropagation()}
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
