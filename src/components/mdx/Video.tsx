"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { Play, Pause } from "lucide-react";
import { fadeInUp, scrollTransition, inViewOptions } from "./animation";

interface VideoProps {
  src: string;
  poster?: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
}

export function Video({
  src,
  poster,
  autoplay = false,
  loop = false,
  muted = false,
}: VideoProps) {
  const wrapRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(wrapRef, inViewOptions);

  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hovered, setHovered] = useState(false);

  // Autoplay forces muted per browser policy
  const isMuted = autoplay || muted;

  const togglePlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
    } else {
      v.pause();
    }
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onTime = () => {
      if (v.duration) setProgress((v.currentTime / v.duration) * 100);
    };

    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    v.addEventListener("timeupdate", onTime);

    return () => {
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
      v.removeEventListener("timeupdate", onTime);
    };
  }, []);

  const onProgressClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const v = videoRef.current;
      if (!v || !v.duration) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const pct = (e.clientX - rect.left) / rect.width;
      v.currentTime = pct * v.duration;
    },
    [],
  );

  return (
    <motion.div
      ref={wrapRef}
      variants={fadeInUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={scrollTransition()}
      className="my-6"
    >
      <div
        className="group relative overflow-hidden rounded-lg border"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay={autoplay}
          loop={loop}
          muted={isMuted}
          playsInline
          className="block h-auto w-full"
          onClick={togglePlay}
        />

        {/* Center play/pause */}
        <AnimatePresence>
          {(!playing || hovered) && (
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/20"
              aria-label={playing ? "Pause" : "Play"}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm">
                {playing ? (
                  <Pause className="h-5 w-5" />
                ) : (
                  <Play className="h-5 w-5 translate-x-0.5" />
                )}
              </div>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Progress bar */}
        <div
          className="absolute inset-x-0 bottom-0 h-1 cursor-pointer bg-white/20"
          onClick={onProgressClick}
        >
          <div
            className="h-full bg-primary transition-[width] duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
}
