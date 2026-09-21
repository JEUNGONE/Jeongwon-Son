import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { DownloadCVBar } from './components/DownloadCVBar';
import { MobileNav } from './components/MobileNav';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { MarqueeTicker } from './components/MarqueeTicker';
import { ContactSection } from './components/ContactSection';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { Project } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  // Intersection Observer for scroll tracking
  useEffect(() => {
    const sections = ['home', 'about', 'education', 'skills', 'work', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#eeeade] text-[#1c1c1c] font-sans antialiased relative selection:bg-[#1c1c1c] selection:text-[#eeeade]">
      
      {/* Mobile Top Navigation */}
      <MobileNav 
        activeSection={activeSection} 
        onOpenResume={() => setIsResumeOpen(true)} 
      />

      {/* Left Vertical Navigation Bar matching Reference Image */}
      <Sidebar activeSection={activeSection} />

      {/* Right Vertical "DOWNLOAD CV" Bar matching Reference Image */}
      <DownloadCVBar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Central Content Container formatted between sidebars */}
      <main className="md:ml-[88px] lg:mr-[64px] min-h-screen flex flex-col">
        
        {/* 1. Hero Section */}
        <HeroSection 
          onExploreWork={() => scrollToSection('work')} 
          onOpenResume={() => setIsResumeOpen(true)} 
        />

        {/* 2. Biography / About Me Section */}
        <AboutSection onContactClick={() => scrollToSection('contact')} />

        {/* 3. Education Section */}
        <EducationSection />

        {/* 4. Skills & "My advantages" Section */}
        <SkillsSection />

        {/* 5. Projects & "Work experience" & "Reflections on my work" Section */}
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* 6. Marquee Ticker Banner */}
        <MarqueeTicker />

        {/* 7. Contact / "Get in touch" Section */}
        <ContactSection />
      </main>

      {/* Project Details & Simulation Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      {/* Curriculum Vitae (CV) Printable Modal */}
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />
    </div>
  );
}
