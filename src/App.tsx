import React, { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

import { personalInfo, skills, experiences, projects } from './data/portfolioData';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

function App() {
  useEffect(() => {
    document.title = `${personalInfo.name} | ${personalInfo.title}`;
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <Navigation sections={sections} />
        
        <main>
          <HeroSection data={personalInfo} />
          <AboutSection skills={skills} />
          <ExperienceSection experiences={experiences} />
          <ProjectsSection projects={projects} />
          <ContactSection data={personalInfo} />
        </main>
        
        <Footer />

        {/* Custom grid pattern overlay for hero section */}
        <style jsx global>{`
          .bg-grid-pattern {
            background-image: radial-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px);
            background-size: 20px 20px;
          }
          
          @media (prefers-color-scheme: dark) {
            .bg-grid-pattern {
              background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
            }
          }
        `}</style>
      </div>
    </ThemeProvider>
  );
}

export default App;