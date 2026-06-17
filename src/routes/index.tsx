import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { CustomCursor } from "@/components/CustomCursor";
import { LoadingScreen } from "@/components/LoadingScreen";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { CertsHacksSection } from "@/components/sections/CertsHacksSection";
import { GithubSection } from "@/components/sections/GithubSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection, Footer } from "@/components/sections/ContactSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Suthoju Ganesh — Full Stack Developer, AI Engineer & Cloud Enthusiast" },
      {
        name: "description",
        content:
          "Suthoju Ganesh — Full Stack Developer, AI Engineer & Cloud Enthusiast based in Hyderabad. Building intelligent web apps, AI-powered tools, and scalable cloud systems.",
      },
      { property: "og:title", content: "Suthoju Ganesh — Full Stack Developer & AI Engineer" },
      {
        property: "og:description",
        content: "Building intelligent web applications, AI-powered solutions, and scalable cloud systems.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Suthoju Ganesh",
          jobTitle: "Full Stack Developer, AI Engineer, Cloud Enthusiast",
          email: "mailto:suthojuganesh@gmail.com",
          address: { "@type": "PostalAddress", addressLocality: "Hyderabad", addressRegion: "Telangana", addressCountry: "India" },
          knowsAbout: ["Full Stack Development", "Artificial Intelligence", "Cloud Computing", "React", "Node.js", "Python"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <ParticlesBackground />
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertsHacksSection />
        <GithubSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
