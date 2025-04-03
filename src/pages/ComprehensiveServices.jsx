
import React from 'react';
import { Star, Percent, Shield, Users, FileText, Fish, Globe, DollarSign, Briefcase, Building2 } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

const ComprehensiveServices = () => {
  const services = [
    {
      icon: <Star className="text-white" size={24} />,
      iconBg: "bg-orange-400",
      title: "Business Registration",
      description: "Get Business Registration at Low Prices"
    },
    {
      icon: <Percent className="text-white" size={24} />,
      iconBg: "bg-pink-400",
      title: "GST Registration",
      description: "GST Registration at Low Price."
    },
    {
      icon: <Shield className="text-white" size={24} />,
      iconBg: "bg-green-400",
      title: "Trade License",
      description: "Take Municipal Permission to Your Business"
    },
    {
      icon: <Users className="text-white" size={24} />,
      iconBg: "bg-blue-400",
      title: "Society Registration",
      description: "Get Done all Activities by Group of Peoples"
    },
    {
      icon: <FileText className="text-white" size={24} />,
      iconBg: "bg-green-400",
      title: "Trademark Registration",
      description: "Register your Brand with Trademark."
    },
    {
      icon: <Fish className="text-white" size={24} />,
      iconBg: "bg-blue-400",
      title: "Food Registration",
      description: "Start your Food Business With FSSAI."
    },
    {
      icon: <Globe className="text-white" size={24} />,
      iconBg: "bg-blue-500",
      title: "IEC Registration",
      description: "Import and Export your Business to other Countries."
    },
    {
      icon: <DollarSign className="text-white" size={24} />,
      iconBg: "bg-purple-400",
      title: "Income Tax filing",
      description: "File Your Income Tax Returns with Experts."
    },
    {
      icon: <Briefcase className="text-white" size={24} />,
      iconBg: "bg-green-400",
      title: "Labour License",
      description: "Provide Security for Your Employees."
    },
    {
      icon: <Building2 className="text-white" size={24} />,
      iconBg: "bg-pink-400",
      title: "MSME Registration",
      description: "Register your Business on Udyam"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
            From compliance to financial services, we cover them all.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col bg-white shadow-sm rounded-lg p-6 border border-gray-100 relative">
              <div className={`${service.iconBg} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                {service.icon}
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>
              <div className="absolute top-1/2 right-4 text-gray-300">
                <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveServices;
