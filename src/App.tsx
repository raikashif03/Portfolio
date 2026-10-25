import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ValueProposition } from "./components/ValueProposition";
import { ServicesSection } from "./components/ServicesSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { PricingSection } from "./components/PricingSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { CvModal } from "./components/CvModal";
import { ProjectModal } from "./components/ProjectModal";
import { Service, Project, PricingTier } from "./data/portfolioData";
import { Check } from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projectModalMode, setProjectModalMode] = useState<"demo" | "code" | "study">("demo");
  const [selectedProjectType, setSelectedProjectType] = useState("Full-Stack Web Application");
  const [selectedBudget, setSelectedBudget] = useState("$250 - $600 (Standard MVP)");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Active section spy on scroll
  useEffect(() => {
    const sections = ["about", "skills", "services", "projects", "pricing", "contact"];
    const handleScroll = () => {
      const scrollY = window.scrollY;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop - 120;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleScrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOrderFiverr = () => {
    setSelectedProjectType("Full-Stack Web Application");
    setSelectedBudget("$250 - $600 (Standard MVP)");
    triggerToast("Fiverr Standard Package pre-selected! Fill details below.");
    handleScrollToContact();
  };

  const handleOrderGig = (service: Service) => {
    setSelectedProjectType(service.category);
    triggerToast(`Selected "${service.title}"! Customize your brief below.`);
    handleScrollToContact();
  };

  const handleSelectPackage = (tier: PricingTier) => {
    setSelectedBudget(tier.budgetRange);
    if (tier.id === "basic") {
      setSelectedProjectType("Bug Fixing & Code Refactoring");
    } else if (tier.id === "standard") {
      setSelectedProjectType("Full-Stack Web Application");
    } else {
      setSelectedProjectType("Full-Stack Web Application");
    }
    triggerToast(`Selected ${tier.name} ($${tier.price})! Brief form ready.`);
    handleScrollToContact();
  };

  const handleOpenProjectModal = (project: Project, mode: "demo" | "code" | "study") => {
    setSelectedProject(project);
    setProjectModalMode(mode);
  };

  const handleOrderProjectStack = (project: Project) => {
    setSelectedProjectType("Full-Stack Web Application");
    setSelectedBudget("$600 - $1,500+ (Full Custom Software)");
    triggerToast(`Custom Architecture for "${project.shortTitle}" pre-filled!`);
    handleScrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#0f131c] text-[#dfe2ee] selection:bg-[#00e5ff] selection:text-[#0a0e16] relative">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl bg-[#1c2028] border border-[#00e5ff] text-[#dfe2ee] shadow-2xl shadow-[#00e5ff]/20 animate-in slide-in-from-bottom duration-200">
          <span className="w-6 h-6 rounded-full bg-[#00e5ff]/20 text-[#00e5ff] flex items-center justify-center shrink-0">
            <Check className="w-3.5 h-3.5" />
          </span>
          <span className="text-[13px] font-mono font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Navigation */}
      <Navbar
        activeSection={activeSection}
        onGetQuoteClick={handleScrollToContact}
        onHireFiverrClick={handleOrderFiverr}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          onOrderFiverrClick={handleOrderFiverr}
          onOpenCvModal={() => setIsCvModalOpen(true)}
        />
        <ValueProposition />
        <ServicesSection onOrderGig={handleOrderGig} />
        <SkillsSection />
        <ProjectsSection onOpenProjectModal={handleOpenProjectModal} />
        <PricingSection onSelectPackage={handleSelectPackage} />
        <ContactSection
          initialProjectType={selectedProjectType}
          initialBudget={selectedBudget}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* CV Modal */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />

      {/* Project Inspection Modal */}
      <ProjectModal
        isOpen={!!selectedProject}
        project={selectedProject}
        initialMode={projectModalMode}
        onClose={() => setSelectedProject(null)}
        onOrderProjectStack={handleOrderProjectStack}
      />
    </div>
  );
}
