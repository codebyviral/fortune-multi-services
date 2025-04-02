
import React from 'react';
import { Check } from 'lucide-react';

const Features = () => {
  const features = [
    "Easy company registration process",
    "Dedicated customer support",
    "Affordable pricing",
    "Fast service delivery",
    "Complete documentation assistance",
    "Post-registration support"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="/raas2.png" 
              alt="Business Features" 
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">
              Why choose our services?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              We provide end-to-end services for company registration, taxation, and compliance, making your business journey smooth and hassle-free.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="bg-green-100 rounded-full p-1 mt-1">
                    <Check size={16} className="text-green-600" />
                  </div>
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
