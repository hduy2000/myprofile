"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  Code2,
  Server,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { profile } from "@/lib/data";
import { TypewriterRole } from "@/components/shared/typewriter-role";
import { useLang } from "@/lib/i18n";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.08, duration: 0.6, ease: "easeOut" as const },
  }),
};

const floatChips = [
  { label: "Angular", x: "8%", y: "18%", delay: 0, color: "text-rose-400" },
  { label: ".NET", x: "82%", y: "12%", delay: 0.5, color: "text-violet-400" },
  { label: "Next.js", x: "5%", y: "70%", delay: 1, color: "text-emerald-400" },
  { label: "NestJS", x: "88%", y: "72%", delay: 1.5, color: "text-amber-400" },
];

export function Hero() {
  const { t, pick } = useLang();
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center pt-28 pb-16 px-4 sm:px-6 overflow-hidden"
    >
      {/* floating tech chips (desktop) */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        {floatChips.map((c) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 + c.delay * 0.3, duration: 0.6 }}
            className="absolute"
            style={{ left: c.x, top: c.y }}
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{
                duration: 4 + c.delay,
                repeat: Infinity,
                ease: "easeInOut",
                delay: c.delay,
              }}
              className="glass rounded-2xl px-4 py-2.5 shadow-xl"
            >
              <span className={`text-sm font-semibold ${c.color}`}>{c.label}</span>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="mx-auto w-full max-w-5xl text-center">
        {/* availability pill */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex justify-center"
        >
          <Badge
            variant="outline"
            className="glass rounded-full px-4 py-1.5 gap-2 text-xs"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 [animation:pulse-ring_2s_ease-out_infinite]" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {pick(profile.availability)}
          </Badge>
        </motion.div>

        {/* greeting */}
        <motion.p
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-4 text-sm sm:text-base text-muted-foreground"
        >
          {t.hero.greeting(profile.name, profile.birthYear, pick(profile.location))}
        </motion.p>

        {/* name / role */}
        <motion.h1
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-3 text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
        >
          <span className="block text-foreground">{t.hero.line1}</span>
          <span className="block text-gradient">{t.hero.line2}</span>
          <span className="block text-foreground">
            {t.hero.line3a}{" "}<span className="text-gradient-warm">{t.hero.line3b}</span>
          </span>
        </motion.h1>

        {/* rotating role */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-5 flex items-center justify-center gap-2 text-lg sm:text-2xl font-semibold"
        >
          <span className="text-muted-foreground">&gt;</span>
          <TypewriterRole />
        </motion.div>

        {/* tagline */}
        <motion.p
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-muted-foreground"
        >
          {pick(profile.tagline)} {t.hero.taglineTail}
        </motion.p>

        {/* role badges */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-7 flex flex-wrap items-center justify-center gap-2"
        >
          {[
            { icon: Code2, label: t.hero.badges.frontend },
            { icon: Server, label: t.hero.badges.backend },
            { icon: Layers, label: t.hero.badges.fullstack },
          ].map((r) => (
            <span
              key={r.label}
              className="inline-flex items-center gap-1.5 rounded-full glass px-3.5 py-1.5 text-xs font-medium"
            >
              <r.icon className="h-3.5 w-3.5 text-primary" />
              {r.label}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-violet-500 text-white hover:opacity-90 shadow-lg shadow-emerald-500/25"
          >
            <a href="#projects">
              <Sparkles className="h-4 w-4 mr-2" /> {t.hero.viewWork}
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full sm:w-auto rounded-full glass hover:glow-emerald"
          >
            <a href="#contact">
              <Mail className="h-4 w-4 mr-2" /> {t.hero.getInTouch}
            </a>
          </Button>
        </motion.div>

        {/* socials */}
        <motion.div
          custom={6}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-8 flex items-center justify-center gap-3"
        >
          {[
            { icon: Github, href: profile.socials.find((s) => s.name === "GitHub")?.url || "https://github.com/hduy2000", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/duy-hoang-van-dev/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:hoangduy5533@gmail.com", label: "Email" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="grid place-items-center h-11 w-11 rounded-full glass hover:glow-emerald transition-all hover:-translate-y-0.5"
            >
              <s.icon className="h-[1.05rem] w-[1.05rem]" />
            </a>
          ))}
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">{t.hero.scroll}</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
