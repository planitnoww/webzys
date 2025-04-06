
import React from 'react';
import { Zap, DollarSign, Smartphone, HeadphonesIcon } from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-12 w-12 text-webzys-coral" />,
    title: "Fast Delivery",
    description: "Get your website up and running quickly with our efficient design and development process."
  },
  {
    icon: <DollarSign className="h-12 w-12 text-webzys-coral" />,
    title: "Affordable Pricing",
    description: "Quality web design services that won't break the bank, perfect for small businesses and startups."
  },
  {
    icon: <Smartphone className="h-12 w-12 text-webzys-coral" />,
    title: "Fully Responsive",
    description: "Websites that look and work beautifully on all devices, from desktops to smartphones."
  },
  {
    icon: <HeadphonesIcon className="h-12 w-12 text-webzys-coral" />,
    title: "Friendly Support",
    description: "Dedicated support to help you with any questions or issues that may arise with your website."
  }
];

const Features = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="heading-underline">Why Choose Us</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're committed to delivering exceptional value through our web design services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-6 rounded-lg text-center flex flex-col items-center card-hover"
            >
              <div className="mb-4 rounded-full bg-webzys-purple/10 p-4 inline-flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
