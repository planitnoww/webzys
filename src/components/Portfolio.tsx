
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import projectsData from '../data/projects.json';

interface Project {
  id: number;
  image: string;
  title: string;
  category: string;
  description: string;
}

const Portfolio = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <section id="portfolio" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="heading-underline">Our Portfolio</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a look at some of our recent projects. Each website is custom-designed to meet the unique needs of our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="rounded-lg overflow-hidden shadow-md card-hover"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 bg-gradient-to-br from-white to-gray-50">
                <div className="text-sm text-webzys-coral font-medium mb-2">{project.category}</div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a href="#" className="inline-flex items-center text-webzys-purple font-medium hover:underline">
                  View Project <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
