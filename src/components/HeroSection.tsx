import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { PersonalInfo, SocialLink } from '../types';

interface HeroSectionProps {
  data: PersonalInfo;
}

const SocialIcon: React.FC<{ platform: string }> = ({ platform }) => {
  switch (platform) {
    case 'GitHub':
      return <Github size={20} />;
    case 'LinkedIn':
      return <Linkedin size={20} />;
    case 'Email':
      return <Mail size={20} />;
    default:
      return null;
  }
};

const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4 relative bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.04]"></div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 z-10">
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight transition-colors">
            Hi, I'm{' '}
            <span className="text-blue-600 dark:text-blue-400">
              {data.name}
            </span>
          </h1>
          <div className="mb-4 inline-block">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 text-sm font-medium">
              {data.title}
            </span>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl transition-colors">
            {data.summary}
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="/Nitishkumar_NResume.pdf"
              download className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 text-gray-800 dark:text-white font-medium rounded-lg transition-all hover:bg-white/10 dark:hover:bg-gray-800"
            >
              Contact Me
            </a>
          </div>

          <div className="flex items-center gap-4">
            {data.socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/40 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label={social.platform}
              >
                <SocialIcon platform={social.platform} />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <img
                src={data.avatar}
                alt={data.name}
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 py-2 px-4 rounded-lg shadow-md">
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                📍 {data.location}
              </p>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-shadow"
        aria-label="Scroll to About section"
      >
        <ArrowDown size={20} className="text-blue-600 dark:text-blue-400" />
      </button>
    </section>
  );
};

export default HeroSection;
