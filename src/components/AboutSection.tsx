import React, { useState } from 'react';
import { Skill } from '../types';

interface AboutSectionProps {
  skills: Skill[];
}

const AboutSection: React.FC<AboutSectionProps> = ({ skills }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'IAM', label: 'IAM' },
    { id: 'Coding', label: 'Coding' },
    { id: 'design', label: 'Design' },
    { id: 'Tools', label: 'Tools' },
    { id: 'soft', label: 'Soft Skills' },
  ];

  const filteredSkills =
    activeCategory === 'all'
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 transition-colors"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with expertise in building
            modern web applications. I specialize in creating responsive,
            user-friendly interfaces and robust backend systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Certifications and Learning
            </h3>
            {/* <div class="w-20 h-1 bg-blue-600 ml-10 mb-10"></div> */}
            <div className="space-y-2 text-gray-600 dark:text-gray-300">
              <p>
                Applied Cybersecurity Essentials<br></br>
                Purdue University 2021 
                <br></br>Saviynt Identity Security for AI Age
                Saviynt 2025
                <br></br>ITIL 2011 Foundation
                Infosys
                <br></br>Blockchain in Depth
                Infosys
                <br></br>Web Application Penetration Testing
                Cybrary 2019
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              My Skills
            </h3>

            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {filteredSkills.map((skill, index) => (
                <div key={index} className="mb-2">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
