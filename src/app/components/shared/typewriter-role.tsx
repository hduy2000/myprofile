"use client";

import * as React from "react";

const roles = [
  "Full-Stack Engineer",
  "Angular · .NET · NestJS",
  "HIS Developer",
  "GIS Builder",
  "AI Agent Tinkerer",
];

export function TypewriterRole() {
  const [index, setIndex] = React.useState(0);
  const [sub, setSub] = React.useState(0);
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    const current = roles[index];
    if (!deleting && sub === current.length) {
      const t = setTimeout(() => setDeleting(true), 1600);
      return () => clearTimeout(t);
    }
    if (deleting && sub === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % roles.length);
      return;
    }
    const t = setTimeout(
      () => setSub((s) => s + (deleting ? -1 : 1)),
      deleting ? 45 : 90
    );
    return () => clearTimeout(t);
  }, [sub, deleting, index]);

  return (
    <span className="text-gradient">
      {roles[index].substring(0, sub)}
      <span className="ml-0.5 inline-block w-[2px] h-[1em] -mb-[2px] bg-primary animate-pulse" />
    </span>
  );
}
