"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Map,
  Building2,
  ShoppingCart,
  type LucideIcon,
  Quote,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { services, testimonials } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useLang } from "@/lib/i18n";

const icons: Record<string, LucideIcon> = {
  globe: Globe,
  map: Map,
  building: Building2,
  shopping: ShoppingCart,
};

export function Services() {
  const { t, pick } = useLang();

  return (
    <section id="services" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t.services.eyebrow}
          title={
            <>
              {t.services.titleA} <span className="text-gradient">{t.services.titleB}</span>
            </>
          }
          description={t.services.description}
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => {
            const Icon = icons[s.icon] ?? Globe;
            const accents = [
              "from-emerald-400 to-teal-500",
              "from-sky-400 to-cyan-500",
              "from-violet-400 to-fuchsia-500",
              "from-amber-400 to-orange-500",
            ];
            const serviceTitle = pick(s.title);
            return (
              <motion.div
                key={serviceTitle + i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative glass rounded-3xl p-6 hover:glow-emerald transition-all hover:-translate-y-1"
              >
                <div
                  className={cn(
                    "grid place-items-center h-12 w-12 rounded-2xl bg-gradient-to-br text-white shadow-lg mb-4 transition-transform group-hover:scale-110 group-hover:-rotate-3",
                    accents[i % accents.length]
                  )}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold">{serviceTitle}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {pick(s.description)}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* testimonials */}
        <div className="mt-20">
          <SectionHeading
            eyebrow={t.services.testimonialsEyebrow}
            title={
              <>
                {t.services.testimonialsTitleA} <span className="text-gradient-warm">{t.services.testimonialsTitleB}</span>
              </>
            }
          />
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {testimonials.map((tItem, i) => (
              <motion.figure
                key={tItem.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative glass rounded-3xl p-6 flex flex-col"
              >
                <Quote className="h-7 w-7 text-primary/40 mb-3" />
                <blockquote className="text-sm text-foreground/85 leading-relaxed flex-1">
                  &ldquo;{pick(tItem.text)}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span
                    className={cn(
                      "grid place-items-center h-10 w-10 rounded-full bg-gradient-to-br text-white text-xs font-bold shadow",
                      tItem.accent
                    )}
                  >
                    {tItem.initials}
                  </span>
                  <div>
                    <div className="text-sm font-semibold">{tItem.name}</div>
                    <div className="text-xs text-muted-foreground">{pick(tItem.role)}</div>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
