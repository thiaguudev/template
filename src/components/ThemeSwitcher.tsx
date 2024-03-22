"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/shared/icons";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function ThemeSwitcherTabs() {
  const { setTheme, theme } = useTheme();
  return (
    <div className="flex items-center px-6 py-2 h-15 w-full gap-2">
      <Switch
        id="airplane-mode"
        checked={theme === "dark"}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
      />
      <Label htmlFor="airplane-mode">Toggle theme</Label>
      <span className="sr-only">Toggle theme</span>
    </div>
  );
}

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();

  const handletheme = (theme: string) => {
    return () => setTheme(theme);
  };

  return (
    <Button
      variant="secondary"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Icons.sun className="h-[1.5rem] w-[1.3rem] dark:hidden" />
      <Icons.moon className="hidden h-5 w-5 dark:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
