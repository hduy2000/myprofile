"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Moon } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { experience } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useLang } from "@/lib/i18n";

const kindIcon: Record<string, typeof Briefcase> = {
  work: Briefcase,
  freetime: Moon,
  education: GraduationCap,
};

export function Experience() {
  const { t, pick } = useLang();

  return (
    <section id="experience" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow={t.experience.eyebrow}
          title={
            <>
              {t.experience.titleA} <span className="text-gradient">{t.experience.titleB}</span>
            </>
          }
          description={t.experience.description}
        />

        <div className="mt-14 relative">
          {/* vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-400/60 via-violet-500/50 to-transparent -translate-x-1/2" />

          <div className="space-y-8">
            {experience.map((item, i) => {
              const isLeft = i % 2 === 0;
              const roleText = pick(item.role);
              return (
                <motion.div
                  key={roleText + item.period + i}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: i * 0.05 }}
                  className={cn(
                    "relative flex items-start gap-4 sm:gap-0",
                    isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
                  )}
                >
                  {/* node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-10">
                    <span
                      className={cn(
                        "grid place-items-center h-9 w-9 rounded-full bg-gradient-to-br text-white shadow-lg ring-4 ring-background",
                        item.accent
                      )}
                    >
                      {(() => {
                        const Icon = kindIcon[item.kind ?? "work"] ?? Briefcase;
                        return <Icon className="h-4 w-4" />;
                      })()}
                    </span>
                  </div>

                  {/* spacer for desktop */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* card */}
                  <div
                    className={cn(
                      "ml-12 sm:ml-0 sm:w-1/2",
                      isLeft ? "sm:pr-10 sm:text-right" : "sm:pl-10"
                    )}
                  >
                    <div className="glass rounded-2xl p-5 hover:glow-emerald transition-all">
                      <div
                        className={cn(
                          "flex items-center gap-2 flex-wrap",
                          isLeft ? "sm:justify-end" : "sm:justify-start"
                        )}
                      >
                        <span
                          className={cn(
                            "inline-block rounded-full bg-gradient-to-r px-2.5 py-0.5 text-[11px] font-semibold text-white",
                            item.accent
                          )}
                        >
                          {item.period}
                        </span>
                        {item.kind && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-foreground/5 ring-1 ring-foreground/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                            {t.experience.kinds[item.kind] ?? item.kind}
                          </span>
                        )}
                      </div>
                      <h3 className="mt-2 text-base font-semibold">{roleText}</h3>
                      <p className="text-sm text-primary font-medium">{pick(item.org)}</p>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {pick(item.description)}
                      </p>
                      <div
                        className={cn(
                          "mt-3 flex flex-wrap gap-1.5",
                          isLeft ? "sm:justify-end" : "sm:justify-start"
                        )}
                      >
                        {item.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-md bg-foreground/5 ring-1 ring-foreground/10 px-2 py-0.5 text-[11px] font-medium text-foreground/70"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
