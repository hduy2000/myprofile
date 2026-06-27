import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Services } from "@/components/sections/services";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { AuroraBackground } from "@/components/shared/aurora-background";
import { ScrollProgress } from "@/components/shared/scroll-progress";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <AuroraBackground />
      <ScrollProgress />
      <Navbar />

      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
