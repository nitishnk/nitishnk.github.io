import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 py-8 border-t border-gray-200 dark:border-gray-800 transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div
            className="font-bold text-xl mb-4 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="text-blue-600 dark:text-blue-400">
              Nitishkumar<span> </span>
            </span>
            <span className="text-gray-800 dark:text-white">Gidde</span>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Building the web, one line of code at a time.
          </p>

          {/* <div className="flex justify-center space-x-6 mb-8">
            <a
              href="#about"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Contact
            </a>
          </div> */}

          <div className="text-sm text-gray-500 dark:text-gray-400 flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0">
            <p>© {currentYear}Nitishkumar Gidde. All rights reserved.</p>
            <span className="hidden sm:inline mx-2"></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
