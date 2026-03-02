"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Switch } from "@/components/ui/switch";

export const ThemeToggle: React.FC = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <div className="flex items-center gap-1.5 px-1.5">
      <Sun className="h-3.5 w-3.5 text-font-secondary" />
      <Switch
        size="sm"
        checked={mounted ? isDark : false}
        onCheckedChange={(checked) => {
          const newTheme = checked ? "dark" : "light";
          if (document.startViewTransition) {
            document.startViewTransition(() => setTheme(newTheme));
          } else {
            setTheme(newTheme);
          }
        }}
        aria-label={`Switch to ${mounted && isDark ? "light" : "dark"} mode`}
      />
      <Moon className="h-3.5 w-3.5 text-font-secondary" />
    </div>
  );
};
