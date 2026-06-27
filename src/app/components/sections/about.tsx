"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import * as React from "react";
import { Briefcase, Rocket, Heart, Coffee } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card } from "@/components/ui/card";
import { profile } from "@/lib/data";
import { useLang } from "@/lib/i18n";

function Counter({ value, suffix }: { value: number; suffix?: string }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 60, damping: 18 });
  const display = useTransform(spring, (v) => Math.round(v).toString());

  React.useEffect(() => {
    if (inView) mv.set(value);
  }, [inView, value, mv]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

const traitIcons = [Briefcase, Rocket, Heart, Coffee];

export function About() {
  const { t, pick } = useLang();

  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t.about.eyebrow}
          title={
            <>
              {t.about.titleA}{" "}
              <span className="text-gradient">{t.about.titleB}</span>
            </>
          }
          description={t.about.description}
        />

        <div className="mt-14 grid lg:grid-cols-5 gap-6">
          {/* Bio card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <Card className="gradient-border h-full p-6 sm:p-8 glass relative overflow-hidden">
              <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-br from-emerald-400/30 to-violet-500/20 blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-4">
                  <div className="grid place-items-center h-14 w-14 rounded-2xl bg-gradient-to-br from-emerald-400 via-teal-500 to-violet-500 text-white font-bold text-lg shadow-lg">
                    {profile.initials}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{pick(profile.role)}</h3>
                    <p className="text-sm text-muted-foreground">
                      {pick(profile.location)} · {t.about.born(profile.birthYear)}
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-foreground/90 leading-relaxed">
                  {pick(profile.bio)}
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {pick(profile.longBio)}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Angular",
                    ".NET",
                    "Next.js",
                    "NestJS",
                    "Azure",
                    "Docker",
                    "AI Agents",
                    "PostGIS",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary/10 ring-1 ring-primary/20 px-3 py-1 text-xs font-medium text-foreground/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Stats + traits */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid grid-cols-2 gap-3"
            >
              {profile.stats.map((s) => (
                <div
                  key={pick(s.label)}
                  className="glass rounded-2xl p-4 text-center hover:glow-emerald transition-all"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-gradient">
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-1 text-[11px] sm:text-xs text-foreground/60 font-medium leading-tight">
                    {pick(s.label)}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass rounded-2xl p-5 flex-1"
            >
              <h4 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wider">
                {t.about.howIWork}
              </h4>
              <ul className="space-y-3">
                {t.about.traits.map((tr, i) => {
                  const Icon = traitIcons[i] ?? Briefcase;
                  return (
                    <li key={tr.title} className="flex gap-3">
                      <span className="mt-0.5 grid place-items-center h-8 w-8 shrink-0 rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div>
                        <div className="text-sm font-medium">{tr.title}</div>
                        <div className="text-xs text-muted-foreground leading-relaxed">
                          {tr.desc}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
