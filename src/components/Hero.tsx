
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-webzys-purple/10 to-transparent -z-10" />
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-webzys-coral/20 rounded-full -z-10" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-webzys-purple/10 rounded-full -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="lg:w-1/2 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              We Build <span className="text-webzys-purple">Beautiful</span> Static Websites
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              Launch your online presence with style, speed, and impact. 
              Perfect for small businesses and startups.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary flex items-center gap-2">
                Start Your Project <ArrowRight size={18} />
              </a>
              <a href="#services" className="bg-white border border-webzys-purple text-webzys-purple font-medium py-3 px-6 rounded-md transition-all duration-300 hover:bg-webzys-purple/5">
                Our Services
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 animate-fade-in-right">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
              alt="Web design and development" 
              className="rounded-lg shadow-2xl object-cover max-h-[500px] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
