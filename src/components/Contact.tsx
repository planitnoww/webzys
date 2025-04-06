
import React from 'react';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919080539126', '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:webzyhelps@gmail.com';
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="heading-underline">Get In Touch</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you. Get in touch with us and let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-webzys-purple"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-webzys-purple"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-webzys-purple"
                  placeholder="Tell us about your project"
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="btn-primary w-full flex items-center justify-center"
              >
                Send Message <Send size={18} className="ml-2" />
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div 
                  className="flex items-start gap-4 p-4 rounded-md bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  onClick={handleWhatsAppClick}
                >
                  <Phone className="text-webzys-purple mt-1" />
                  <div>
                    <h4 className="font-medium">WhatsApp</h4>
                    <p className="text-gray-600">+91 9080539126</p>
                  </div>
                </div>
                <div 
                  className="flex items-start gap-4 p-4 rounded-md bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  onClick={handleEmailClick}
                >
                  <Mail className="text-webzys-purple mt-1" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600">webzyhelps@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Ready to get started?</h3>
              <p className="text-gray-600 mb-4">
                Schedule a free consultation call and let's discuss your project requirements.
              </p>
              <a 
                href="#" 
                className="inline-flex items-center text-webzys-purple font-medium hover:underline"
                onClick={handleWhatsAppClick}
              >
                Book a call on WhatsApp <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
