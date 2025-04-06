
import React from 'react';
import { Laptop, Image, Palette, Search } from 'lucide-react';

const services = [
  {
    icon: <Laptop size={48} className="text-webzys-purple mb-4" />,
    title: "Static Website Design",
    description: "Fast-loading, secure, and beautiful static websites perfect for small businesses and personal brands."
  },
  {
    icon: <Image size={48} className="text-webzys-purple mb-4" />,
    title: "Portfolio Sites",
    description: "Showcase your work with stunning portfolio websites designed to impress your potential clients."
  },
  {
    icon: <Palette size={48} className="text-webzys-purple mb-4" />,
    title: "Branding & Logo Design",
    description: "Create a cohesive brand identity with our custom logo and branding design services."
  },
  {
    icon: <Search size={48} className="text-webzys-purple mb-4" />,
    title: "Basic SEO",
    description: "Optimize your website to rank higher in search results and attract more organic traffic."
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="heading-underline">Our Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a range of services to help you establish a strong online presence that reflects your brand and connects with your audience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md card-hover"
            >
              <div className="text-center">
                {service.icon}
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
