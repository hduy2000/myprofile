"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/data";
import { useLang } from "@/lib/i18n";

export function Footer() {
  const year = new Date().getFullYear();
  const { t, pick } = useLang();

  const navLinks = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <footer className="relative mt-auto border-t border-border/60">
      {/* glow top */}
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid place-items-center h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-400 via-teal-500 to-violet-500 text-white font-bold text-sm shadow-md">
                {profile.initials}
              </span>
              <span className="text-sm font-semibold tracking-tight">
                {pick(profile.role)}
              </span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xs">
              {pick(profile.tagline)}
            </p>
            <div className="mt-4 flex items-center gap-2">
              {[
                { icon: Github, href: profile.socials.find((s) => s.name === "GitHub")?.url || "https://github.com/hduy2000", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/duy-hoang-van-dev/", label: "LinkedIn" },
                { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid place-items-center h-9 w-9 rounded-lg glass hover:glow-emerald transition-all hover:-translate-y-0.5"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* nav */}
          <div className="md:justify-self-center">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              {t.footer.navigate}
            </h4>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* contact + back to top */}
          <div className="md:justify-self-end">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              {t.footer.getInTouch}
            </h4>
            <a
              href={`mailto:${profile.email}`}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {profile.email}
            </a>
            <p className="mt-1 text-sm text-muted-foreground">{pick(profile.location)}</p>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="mt-4 rounded-full glass hover:glow-emerald"
            >
              <a href="#home">
                <ArrowUp className="h-3.5 w-3.5 mr-1.5" /> {t.footer.backToTop}
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p className="flex items-center gap-1.5">
            © {year} {pick(profile.role)}. {t.footer.builtWith}
            <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500" />
            {t.footer.using}
          </p>
          <p className="opacity-80">
            Angular · .NET · Next.js · NestJS · Azure
          </p>
        </div>
      </div>
    </footer>
  );
}
