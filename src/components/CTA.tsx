
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-webzys-purple to-purple-600 text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Launch Your Dream Website?</h2>
        <p className="text-xl md:max-w-2xl mx-auto mb-8 text-white/90">
          Let's work together to create a beautiful, fast, and effective website that helps your business grow.
        </p>
        <a 
          href="#contact" 
          className="btn-secondary flex items-center gap-2 mx-auto w-fit bg-gradient-to-r from-webzys-coral to-orange-500 hover:from-orange-500 hover:to-webzys-coral"
        >
          Let's Build Your Website Now <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
};

export default CTA;
