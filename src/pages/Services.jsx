
import React from 'react';
import ServiceCard from './ServiceCard';
import { FileText, Building2, Receipt, HeadphonesIcon } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
            India's largest tax and financial services Platform
          </h2>
          <p className="text-xl text-gray-600">Explore our wide range of Business solutions</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            icon={<FileText className="text-blue-500" size={24} />}
            iconBg="bg-blue-500"
            title="Business idea"
            description="Take Business Ideas Which Solves Public Problems."
          />
          
          <ServiceCard
            icon={<Building2 className="text-green-500" size={24} />}
            iconBg="bg-green-500"
            title="Registering Firm"
            description="Register your Idea as a Company"
          />
          
          <ServiceCard
            icon={<Receipt className="text-orange-500" size={24} />}
            iconBg="bg-orange-500"
            title="Taxation compliances"
            description="Follow Taxation Compliances Every Month"
          />
          
          <ServiceCard
            icon={<HeadphonesIcon className="text-purple-500" size={24} />}
            iconBg="bg-purple-500"
            title="24*7 support"
            description="Get 24*7 Support From our Team."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
