import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/lib/i18n";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hoàng Văn Duy — Full-Stack Engineer (Angular · .NET · Next.js · NestJS)",
  description:
    "Portfolio of Hoàng Văn Duy, a 26-year-old full-stack engineer in Ha Noi, Vietnam — building a Hospital Information System (HIS), a GIS platform for agriculture, and e-commerce stores.",
  keywords: [
    "Hoàng Văn Duy",
    "Full-Stack Developer",
    "Angular",
    ".NET",
    "Next.js",
    "NestJS",
    "Azure",
    "Docker",
    "AI Agents",
    "HIS",
    "GIS",
    "E-Commerce",
    "VNUA",
    "Vietnam",
  ],
  authors: [{ name: "Hoàng Văn Duy" }],
  openGraph: {
    title: "Hoàng Văn Duy — Full-Stack Engineer",
    description:
      "Gorgeous portfolio of a full-stack engineer crafting fast, beautiful web platforms — HIS, GIS, and e-commerce.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            {children}
            <Toaster />
            <SonnerToaster richColors position="top-right" />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
