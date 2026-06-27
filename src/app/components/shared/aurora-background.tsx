"use client";

export function AuroraBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* base */}
      <div className="absolute inset-0 bg-background" />

      {/* grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-[0.5] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      {/* aurora blobs */}
      <div
        className="aurora-blob animate-float-slow"
        style={{
          top: "-10%",
          left: "-5%",
          width: "45vw",
          height: "45vw",
          background:
            "radial-gradient(circle at 30% 30%, var(--brand-emerald), transparent 70%)",
        }}
      />
      <div
        className="aurora-blob animate-float-rev"
        style={{
          top: "20%",
          right: "-10%",
          width: "40vw",
          height: "40vw",
          background:
            "radial-gradient(circle at 70% 30%, var(--brand-violet), transparent 70%)",
          opacity: 0.45,
        }}
      />
      <div
        className="aurora-blob animate-aurora"
        style={{
          bottom: "-15%",
          left: "25%",
          width: "50vw",
          height: "50vw",
          background:
            "radial-gradient(circle at 50% 50%, var(--brand-teal), transparent 70%)",
          opacity: 0.35,
        }}
      />
      <div
        className="aurora-blob animate-float-slow"
        style={{
          bottom: "5%",
          right: "10%",
          width: "28vw",
          height: "28vw",
          background:
            "radial-gradient(circle at 50% 50%, var(--brand-amber), transparent 70%)",
          opacity: 0.28,
          animationDelay: "-6s",
        }}
      />

      {/* top vignette for navbar legibility */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent" />
    </div>
  );
}
