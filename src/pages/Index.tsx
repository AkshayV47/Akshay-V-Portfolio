import Sidebar from "@/components/portfolio/Sidebar";
import MobileNav from "@/components/portfolio/MobileNav";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ContactSection from "@/components/portfolio/ContactSection";
import ParticleField from "@/components/portfolio/ParticleField";
import { useTheme } from "@/hooks/useTheme";

const Index = () => {
  const { isDark, toggle } = useTheme();

  return (
    <div className="min-h-screen bg-background">
      <ParticleField />
      <Sidebar isDark={isDark} toggleTheme={toggle} />
      <MobileNav isDark={isDark} toggleTheme={toggle} />
      <main className="lg:ml-72 px-6 md:px-12 lg:px-16 max-w-4xl pt-20 lg:pt-0 relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
