"use client";

import { toast } from "sonner";
import { Link as LinkIcon } from "lucide-react";

export function CopyUrlButton({ url }: { url: string }) {
  const copy = () => {
    navigator.clipboard.writeText(url).then(
      () => toast.success("URL copied to clipboard. And thanks!"),
      () => toast.error("Failed to copy URL."),
    );
  };

  return (
    <button
      onClick={copy}
      className="text-font-secondary hover:text-foreground transition-all cursor-pointer active:scale-75"
      aria-label="Copy post URL"
    >
      <LinkIcon className="size-4" />
    </button>
  );
}
