"use client";

import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LanguageToggle() {
  const { lang, toggle, t } = useLang();
  const isVi = lang === "vi";

  return (
    <button
      onClick={toggle}
      aria-label="Toggle language"
      className={cn(
        "relative h-9 rounded-full glass hover:glow-emerald transition-all flex items-center gap-1 px-1 text-xs font-semibold",
        isVi ? "pr-3" : "pl-3"
      )}
    >
      {/* sliding knob */}
      <span
        className={cn(
          "absolute top-1 bottom-1 w-7 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 text-white grid place-items-center text-[10px] transition-all duration-300",
          isVi ? "right-1" : "left-1"
        )}
      >
        {isVi ? "VI" : "EN"}
      </span>
      <span className={cn("relative z-10 w-7 text-center text-muted-foreground", isVi ? "pl-0" : "pr-0")}>
        {isVi ? "EN" : "VI"}
      </span>
    </button>
  );
}
