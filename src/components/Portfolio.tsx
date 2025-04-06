
import React from 'react';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    title: "Architectural Firm",
    category: "Business Website",
    description: "A clean, minimalist website for a modern architectural firm showcasing their impressive portfolio."
  },
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    title: "Tech Startup",
    category: "Landing Page",
    description: "A conversion-focused landing page for a tech startup that increased their lead generation by 45%."
  },
  {
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    title: "Digital Agency",
    category: "Portfolio Website",
    description: "A creative portfolio website that effectively showcases the agency's services and previous work."
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding bg-gray-50">
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
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-md card-hover"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
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
