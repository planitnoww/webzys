
import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import testimonialsData from '../data/testimonials.json';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  stars: number;
}

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
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    setTestimonials(testimonialsData);
  }, []);

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="heading-underline">Client Testimonials</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="p-6 rounded-lg shadow-md card-hover bg-gradient-to-br from-white to-purple-50"
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
