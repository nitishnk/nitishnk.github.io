import React from 'react';
import { Experience } from '../types';
import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceSectionProps {
  experiences: Experience[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey and the companies I've had the pleasure to work with.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-300 dark:bg-gray-700"></div>
            
            {/* Experience items */}
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div key={experience.id} className="relative">
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-gray-800"></div>
                  
                  {/* Content container */}
                  <div className={`md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'
                  }`}>
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      {/* Experience header */}
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {experience.position}
                          </h3>
                          <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <Briefcase size={16} className="mr-2" />
                            <span>{experience.company}</span>
                          </div>
                        </div>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                          <Calendar size={16} className="mr-1" />
                          <span>{experience.startDate} - {experience.endDate}</span>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {experience.description}
                      </p>
                      
                      {/* Technologies */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Technologies:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Achievements */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Key Achievements:
                        </h4>
                        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                          {experience.achievements.map((achievement, achieveIndex) => (
                            <li key={achieveIndex}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
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

export default ExperienceSection;