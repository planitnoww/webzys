
import React from 'react';
import { Mail, Phone, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919080539126', '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:webzyhelps@gmail.com';
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Webzys</h3>
            <p className="text-gray-400 mb-4">
              We build beautiful static websites for small businesses, startups, and individuals. Launch your online presence with style, speed, and impact.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Static Website Design</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Portfolio Sites</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Branding & Logo Design</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Basic SEO</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors cursor-pointer" onClick={handleWhatsAppClick}>
                <Phone size={18} />
                <span>+91 9080539126</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors cursor-pointer" onClick={handleEmailClick}>
                <Mail size={18} />
                <span>webzyhelps@gmail.com</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Webzys. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
