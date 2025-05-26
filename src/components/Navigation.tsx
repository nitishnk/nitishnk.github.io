import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavigationProps {
  sections: { id: string; label: string }[];
}

const Navigation: React.FC<NavigationProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const currentScrollPos = window.scrollY + 100;

      // Find the current section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= currentScrollPos) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth',
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div
          className="font-bold text-xl cursor-pointer"
          onClick={() => scrollToSection('hero')}
        >
          <span className="text-blue-600 dark:text-blue-400">N</span>
          <span className="text-gray-800 dark:text-white">G</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`text-lg font-medium transition-colors ${
                activeSection === section.id
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              {section.label}
            </button>
          ))}

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            aria-label={
              theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
            }
          >
            {theme === 'dark' ? (
              <Sun size={20} className="text-gray-300" />
            ) : (
              <Moon size={20} className="text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            aria-label={
              theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
            }
          >
            {theme === 'dark' ? (
              <Sun size={20} className="text-gray-300" />
            ) : (
              <Moon size={20} className="text-gray-700" />
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? (
              <X size={24} className="text-gray-700 dark:text-gray-300" />
            ) : (
              <Menu size={24} className="text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-white dark:bg-gray-900 shadow-md transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? 'max-h-96 opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`py-2 text-left text-sm font-medium transition-colors ${
                activeSection === section.id
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navigation;
