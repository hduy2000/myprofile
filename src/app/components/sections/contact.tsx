"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Loader2,
  Github,
  Linkedin,
  CheckCircle2,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { profile } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useLang } from "@/lib/i18n";

const budgets = ["< $1k", "$1k – $5k", "$5k – $15k", "$15k+"];

export function Contact() {
  const { t, pick } = useLang();
  const [submitting, setSubmitting] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const [budget, setBudget] = React.useState<string>("$1k – $5k");

  const schema = z.object({
    name: z.string().min(2, t.contact.nameError),
    email: z.string().email(t.contact.emailError),
    subject: z.string().optional(),
    budget: z.string().optional(),
    message: z.string().min(10, t.contact.messageError),
  });

  type FormValues = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const onSubmit = async (values: FormValues) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, budget }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Failed to send");
      }
      toast.success(t.contact.successTitle, {
        description: t.contact.successDesc,
      });
      setSent(true);
      reset();
      setTimeout(() => setSent(false), 4000);
    } catch (e) {
      toast.error(t.contact.errorTitle, {
        description: (e as Error).message,
      });
    } finally {
      setSubmitting(false);
    }
  };

  const contactItems = [
    { icon: Mail, label: t.contact.email, value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: t.contact.phone, value: profile.phone },
    { icon: MapPin, label: t.contact.location, value: pick(profile.location) },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t.contact.eyebrow}
          title={
            <>
              {t.contact.titleA} <span className="text-gradient">{t.contact.titleB}</span>
            </>
          }
          description={t.contact.description}
        />

        <div className="mt-14 grid lg:grid-cols-5 gap-6">
          {/* left: info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            <div className="glass rounded-3xl p-6 relative overflow-hidden">
              <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br from-emerald-400/30 to-violet-500/20 blur-2xl" />
              <h3 className="text-lg font-semibold relative">{t.contact.getInTouch}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed relative">
                {t.contact.getInTouchDesc}
              </p>

              <ul className="mt-5 space-y-2 relative">
                {contactItems.map((c) => (
                  <li key={c.label}>
                    {c.href ? (
                      <a
                        href={c.href}
                        className="flex items-center gap-3 rounded-xl p-2.5 hover:bg-foreground/5 transition-colors group"
                      >
                        <span className="grid place-items-center h-10 w-10 rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 group-hover:scale-105 transition-transform">
                          <c.icon className="h-4 w-4" />
                        </span>
                        <span className="flex flex-col">
                          <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
                            {c.label}
                          </span>
                          <span className="text-sm font-medium">{c.value}</span>
                        </span>
                      </a>
                    ) : (
                      <div className="flex items-center gap-3 rounded-xl p-2.5">
                        <span className="grid place-items-center h-10 w-10 rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                          <c.icon className="h-4 w-4" />
                        </span>
                        <span className="flex flex-col">
                          <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
                            {c.label}
                          </span>
                          <span className="text-sm font-medium">{c.value}</span>
                        </span>
                      </div>
                    )}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex items-center gap-2 relative">
                {[
                  { icon: Github, href: profile.socials.find((s) => s.name === "GitHub")?.url || "https://github.com/hduy2000", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/duy-hoang-van-dev/", label: "LinkedIn" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="grid place-items-center h-10 w-10 rounded-xl glass hover:glow-emerald transition-all hover:-translate-y-0.5"
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="glass rounded-3xl p-6">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 [animation:pulse-ring_2s_ease-out_infinite]" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                <span className="text-sm font-medium">{t.contact.currentlyAvailable}</span>
              </div>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                {pick(profile.availability)}. {t.contact.replyTime}
              </p>
            </div>
          </motion.div>

          {/* right: form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="glass rounded-3xl p-6 sm:p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label={t.contact.name} error={errors.name?.message}>
                  <Input
                    placeholder={t.contact.namePlaceholder}
                    className="h-11 rounded-xl bg-background/60"
                    {...register("name")}
                  />
                </Field>
                <Field label={t.contact.emailLabel} error={errors.email?.message}>
                  <Input
                    type="email"
                    placeholder={t.contact.emailPlaceholder}
                    className="h-11 rounded-xl bg-background/60"
                    {...register("email")}
                  />
                </Field>
              </div>

              <Field label={t.contact.subject} error={errors.subject?.message} optional>
                <Input
                  placeholder={t.contact.subjectPlaceholder}
                  className="h-11 rounded-xl bg-background/60"
                  {...register("subject")}
                />
              </Field>

              <Field label={t.contact.budget}>
                <div className="flex flex-wrap gap-2">
                  {budgets.map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setBudget(b)}
                      className={cn(
                        "rounded-full px-4 py-2 text-sm font-medium transition-all",
                        budget === b
                          ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md shadow-emerald-500/20"
                          : "glass text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </Field>

              <Field label={t.contact.message} error={errors.message?.message}>
                <Textarea
                  rows={5}
                  placeholder={t.contact.messagePlaceholder}
                  className="rounded-xl bg-background/60 resize-none"
                  {...register("message")}
                />
              </Field>

              <Button
                type="submit"
                disabled={submitting}
                className="w-full sm:w-auto rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-violet-500 text-white hover:opacity-90 shadow-lg shadow-emerald-500/25 h-11 px-6"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" /> {t.contact.sending}
                  </>
                ) : sent ? (
                  <>
                    <CheckCircle2 className="h-4 w-4 mr-2" /> {t.contact.sent}
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" /> {t.contact.send}
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  optional,
  children,
}: {
  label: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  const { t } = useLang();
  return (
    <div className="space-y-1.5">
      <Label className="text-sm font-medium flex items-center gap-1.5">
        {label}
        {optional && (
          <span className="text-[10px] text-muted-foreground font-normal">
            ({t.contact.optional})
          </span>
        )}
      </Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
