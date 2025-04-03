import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-gradient py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h3 className="text-gray-600 text-xl mb-2">Save time. Save money.</h3>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-blue leading-tight mb-4">
            We Registering All Indian companies..
          </h1>
          <p className="text-gray-600 text-lg mb-8 md:pr-10 leading-relaxed">
            We are providing all the legal registration services | with 100% satisfaction & affordable prices.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
          <button 
  className="bg-brand-blue hover:bg-blue-800 text-black flex items-center gap-2 px-6 py-3 rounded-md font-medium"
  onClick={() => window.location.href = '/our_profile/contact-us'}
>
  Get Started <ArrowRight size={16} />
</button>

          </div>
        </div>
        
        <div className="md:w-1/2">
          <img 
            src="/41.jpg"
            alt="Business Registration Illustration" 
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
