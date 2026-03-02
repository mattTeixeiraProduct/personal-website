"use client";

import { effects } from "@/resources";

export function BackgroundEffects() {
  if (!effects.gradient.display) return null;

  const { opacity, x, y, width, height, tilt } = effects.gradient;

  return (
    <div
      className="bg-linear-to-br from-zinc-900 to-zync-800"
      style={{
        left: `${x - width / 2}%`,
        top: `${y - height / 2}%`,
        width: `${width}%`,
        height: `${height}%`,
        transform: `rotate(${tilt}deg)`,
        filter: "blur(80px)",
      }}
    />
  );
}
