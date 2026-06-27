"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowUpRight, Check } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { projects, projectFilters, type Project } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useLang } from "@/lib/i18n";

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const { t, pick } = useLang();
  return (
    <motion.button
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35 }}
      onClick={onOpen}
      className="group relative text-left glass rounded-3xl overflow-hidden hover:glow-emerald transition-all hover:-translate-y-1"
    >
      {/* cover */}
      <div className={cn("relative h-44 sm:h-52 bg-gradient-to-br overflow-hidden", project.gradient)}>
        <div className="absolute inset-0 bg-dots opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="rounded-full bg-white/20 backdrop-blur-md px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
            {project.category}
          </span>
          {project.featured && (
            <span className="rounded-full bg-amber-400/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-black">
              {t.projects.featured}
            </span>
          )}
          {project.freetime && (
            <span className="rounded-full bg-black/40 backdrop-blur-md px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/90">
              {t.projects.freetime}
            </span>
          )}
        </div>
        <div className="absolute bottom-3 right-3 text-5xl drop-shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
          {project.emoji}
        </div>
        <div className="absolute bottom-3 left-3 text-white/90 text-xs font-medium">
          {project.year}
        </div>
      </div>

      {/* body */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold leading-tight group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground group-hover:text-primary group-hover:rotate-12 transition-all" />
        </div>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {pick(project.description)}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-md bg-foreground/5 ring-1 ring-foreground/10 px-2 py-0.5 text-[11px] font-medium text-foreground/70"
            >
              {t}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="rounded-md px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
              +{project.tags.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.button>
  );
}

function ProjectDialog({
  project,
  open,
  onOpenChange,
}: {
  project: Project | null;
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const { t, pick } = useLang();
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden gap-0">
        {project && (
          <>
            <div className={cn("relative h-40 sm:h-48 bg-gradient-to-br", project.gradient)}>
              <div className="absolute inset-0 bg-dots opacity-30" />
              <div className="absolute bottom-4 left-5 text-6xl drop-shadow-lg">
                {project.emoji}
              </div>
              <div className="absolute top-4 right-4">
                <span className="rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                  {project.category}
                </span>
              </div>
            </div>
            <DialogHeader className="px-5 sm:px-6 pt-5">
              <div className="flex items-center justify-between gap-3 pr-8">
                <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                <span className="text-xs text-muted-foreground">{project.year}</span>
              </div>
              <DialogDescription className="text-base leading-relaxed pt-1">
                {pick(project.description)}
              </DialogDescription>
            </DialogHeader>
            <div className="px-5 sm:px-6 pb-6 pt-4 space-y-4">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  {t.projects.highlights}
                </h4>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {project.highlights.map((h, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <span className="mt-0.5 grid place-items-center h-5 w-5 rounded-full bg-primary/15 text-primary">
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="text-foreground/85">{pick(h)}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  {t.projects.techStack}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((t) => (
                    <Badge key={t} variant="secondary" className="rounded-full">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
              {project.url && (
                <Button
                  asChild
                  className="w-full sm:w-auto rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white"
                >
                  <a href={project.url} target="_blank" rel="noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" /> {t.projects.visitLive}
                  </a>
                </Button>
              )}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

export function Projects() {
  const { t, pick } = useLang();
  const [filter, setFilter] = React.useState<string>("All");
  const [selected, setSelected] = React.useState<Project | null>(null);

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t.projects.eyebrow}
          title={
            <>
              {t.projects.titleA} <span className="text-gradient">{t.projects.titleB}</span>
            </>
          }
          description={t.projects.description}
        />

        {/* filters */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {projectFilters.map((f) => (
            <button
              key={f.en}
              onClick={() => setFilter(f.en)}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                filter === f.en
                  ? "text-white"
                  : "text-muted-foreground hover:text-foreground glass"
              )}
            >
              {filter === f.en && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500 to-violet-500"
                  transition={{ type: "spring", stiffness: 320, damping: 30 }}
                />
              )}
              <span className="relative z-10">{pick(f)}</span>
            </button>
          ))}
        </div>

        {/* grid */}
        <motion.div layout className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <ProjectCard key={p.id} project={p} onOpen={() => setSelected(p)} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectDialog
        project={selected}
        open={!!selected}
        onOpenChange={(v) => !v && setSelected(null)}
      />
    </section>
  );
}
