"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { LanguageToggle } from "@/components/shared/language-toggle";
import { useLang } from "@/lib/i18n";
import { profile } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { t, pick } = useLang();
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState("#home");

  const navLinks = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.contact, href: "#contact" },
  ];

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50 px-3 sm:px-4"
    >
      <nav
        className={cn(
          "mx-auto mt-3 flex items-center justify-between gap-3 rounded-2xl px-3 sm:px-5 py-2.5 transition-all duration-300 max-w-6xl",
          scrolled ? "glass-strong shadow-lg shadow-black/5" : "glass"
        )}
      >
        {/* Brand */}
        <a href="#home" className="group flex items-center gap-2.5 shrink-0">
          <span className="relative grid place-items-center h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-400 via-teal-500 to-violet-500 text-white font-bold shadow-md">
            <span className="text-sm tracking-tight">{profile.initials}</span>
            <span className="absolute inset-0 rounded-xl ring-1 ring-white/30" />
          </span>
          <span className="hidden sm:flex flex-col leading-none">
            <span className="text-sm font-semibold tracking-tight">
              {profile.name}
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {pick(profile.role)}
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "relative px-3.5 py-2 text-sm rounded-full transition-colors",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-primary/10 ring-1 ring-primary/30"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <Button
            asChild
            size="sm"
            className="hidden sm:inline-flex rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:opacity-90 shadow-md shadow-emerald-500/20"
          >
            <a href="#contact">
              <Sparkles className="h-3.5 w-3.5 mr-1.5" />
              {t.nav.letsTalk}
            </a>
          </Button>

          {/* Mobile toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden rounded-full glass"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mx-auto mt-2 max-w-6xl"
          >
            <ul className="glass-strong rounded-2xl p-2 flex flex-col gap-1 shadow-xl">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block px-4 py-3 rounded-xl text-sm transition-colors",
                      active === link.href
                        ? "bg-primary/10 text-foreground ring-1 ring-primary/20"
                        : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="p-1">
                <Button
                  asChild
                  className="w-full rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white"
                >
                  <a href="#contact" onClick={() => setOpen(false)}>
                    <Sparkles className="h-4 w-4 mr-2" /> {t.nav.letsTalk}
                  </a>
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
