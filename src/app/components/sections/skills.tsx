"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Layout,
  Server,
  Database,
  Compass,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { skillCategories } from "@/lib/data";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  layout: Layout,
  server: Server,
  database: Database,
  compass: Compass,
};

function SkillCard({ name, level, note, delay, isVi }: { name: string; level: number; note?: string; delay: number; isVi: boolean }) {
  const getBadgeInfo = (lvl: number) => {
    if (lvl >= 90) {
      return {
        label: isVi ? "Chuyên gia" : "Expert",
        classes: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 ring-1 ring-emerald-500/20"
      };
    } else if (lvl >= 85) {
      return {
        label: isVi ? "Cao cấp" : "Advanced",
        classes: "bg-sky-500/10 text-sky-600 dark:text-sky-400 ring-1 ring-sky-500/20"
      };
    } else {
      return {
        label: isVi ? "Thành thạo" : "Proficient",
        classes: "bg-violet-500/10 text-violet-600 dark:text-violet-400 ring-1 ring-violet-500/20"
      };
    }
  };

  const badge = getBadgeInfo(level);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay }}
      className="group/item relative p-4 rounded-2xl border border-foreground/8 bg-foreground/2 hover:bg-foreground/4 dark:bg-white/3 dark:border-white/5 dark:hover:bg-white/5 transition-all flex flex-col gap-1.5 shadow-xs"
    >
      <div className="flex items-center justify-between gap-2">
        <span className="text-sm font-semibold tracking-tight text-foreground">{name}</span>
        <span className={cn("text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shrink-0", badge.classes)}>
          {badge.label}
        </span>
      </div>
      {note && (
        <p className="text-[11.5px] text-muted-foreground/80 leading-relaxed font-mono">{note}</p>
      )}
    </motion.div>
  );
}

export function Skills() {
  const { t, pick, lang } = useLang();
  const isVi = lang === "vi";
  return (
    <section id="skills" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t.skills.eyebrow}
          title={
            <>
              {t.skills.titleA}{" "}
              <span className="text-gradient">{t.skills.titleB}</span>
            </>
          }
          description={t.skills.description}
        />

        <div className="mt-14 grid sm:grid-cols-2 gap-5">
          {skillCategories.map((cat, ci) => {
            const Icon = icons[cat.icon] ?? Layout;
            return (
              <motion.div
                key={cat.category.en}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: ci * 0.08 }}
                className="group relative glass rounded-3xl p-6 sm:p-7 hover:glow-emerald transition-all"
              >
                <div
                  className={cn(
                    "absolute -top-px left-8 right-8 h-px bg-gradient-to-r opacity-60",
                    cat.accent
                  )}
                />
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      "grid place-items-center h-12 w-12 rounded-2xl bg-gradient-to-br text-white shadow-lg",
                      cat.accent
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">{pick(cat.category)}</h3>
                    <p className="text-xs font-medium text-foreground/60">
                      {cat.skills.length} {t.skills.coreTech}
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-3">
                  {cat.skills.map((s, si) => (
                    <SkillCard
                      key={s.name}
                      name={s.name}
                      level={s.level}
                      note={s.note ? pick(s.note) : undefined}
                      delay={ci * 0.08 + si * 0.05}
                      isVi={isVi}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* tech marquee */}
        <div className="relative mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="flex gap-3 animate-marquee w-max">
            {[...techMarquee, ...techMarquee].map((tm, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-medium whitespace-nowrap"
              >
                <span className={cn("h-2 w-2 rounded-full bg-gradient-to-br", tm.accent)} />
                {tm.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const techMarquee = [
  { name: "TypeScript", accent: "from-sky-400 to-blue-500" },
  { name: "Angular", accent: "from-rose-400 to-red-500" },
  { name: "React", accent: "from-cyan-400 to-sky-500" },
  { name: "Next.js", accent: "from-emerald-400 to-teal-500" },
  { name: "NestJS", accent: "from-rose-500 to-pink-600" },
  { name: ".NET Core", accent: "from-violet-400 to-purple-500" },
  { name: "C#", accent: "from-violet-500 to-fuchsia-500" },
  { name: "Node.js", accent: "from-green-400 to-emerald-500" },
  { name: "PostgreSQL", accent: "from-sky-400 to-indigo-500" },
  { name: "SQL Server", accent: "from-red-400 to-rose-500" },
  { name: "Prisma", accent: "from-emerald-500 to-teal-600" },
  { name: "Tailwind", accent: "from-cyan-400 to-teal-500" },
  { name: "PostGIS", accent: "from-teal-400 to-emerald-600" },
  { name: "Docker", accent: "from-sky-400 to-blue-600" },
];
