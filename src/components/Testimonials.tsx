
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Webzys delivered a stunning website for my photography business. They were incredibly responsive and understood exactly what I needed. I've received so many compliments on my new site!",
    name: "Priya Sharma",
    title: "Professional Photographer",
    stars: 5
  },
  {
    quote: "Working with Webzys was a great experience. They made the entire process easy and delivered a beautiful website that perfectly represents our brand. Highly recommended!",
    name: "Vikram Mehta",
    title: "Small Business Owner",
    stars: 5
  },
  {
    quote: "As a freelance consultant, I needed a professional website that would help me attract clients. Webzys created exactly what I needed at an affordable price. The site looks amazing!",
    name: "Ananya Patel",
    title: "Marketing Consultant",
    stars: 5
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex mb-3">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={18}
          className={i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
        />
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="heading-underline">Client Testimonials</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-6 rounded-lg shadow-md card-hover"
            >
              <StarRating rating={testimonial.stars} />
              <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
              <div className="mt-auto">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-gray-600 text-sm">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
