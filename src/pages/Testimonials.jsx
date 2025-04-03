import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "TechSolutions Pvt Ltd",
      content: "The company registration process was incredibly smooth. Their team guided us through every step, making it stress-free.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      company: "GreenLeaf Enterprises",
      content: "Their taxation services saved us both time and money. The team is professional and always available for any queries.",
      rating: 5
    },
    {
      name: "Vikram Singh",
      company: "Innovate Studios",
      content: "Getting our startup registered was a breeze thanks to their efficient service. Highly recommended for new entrepreneurs.",
      rating: 4
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-blue-600">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by businesses across India - helping entrepreneurs turn their dreams into reality
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative"
            >
              <Quote className="absolute top-6 right-6 text-gray-200 w-8 h-8" />
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={20} 
                    className={`${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} mr-1`} 
                  />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="border-t border-gray-100 pt-4">
                <p className="font-semibold text-gray-800 text-lg">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <div key={i} className="w-3 h-3 rounded-full bg-blue-600 opacity-20 hover:opacity-100 transition-opacity cursor-pointer"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;