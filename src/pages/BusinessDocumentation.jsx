import React from 'react';
import { ArrowRight, Percent, Building2, Calendar, Fish } from 'lucide-react';

const BusinessDocumentation = () => {
  const services = [
    {
      icon: <Percent className="text-pink-500" size={24} />,
      title: "GST & Filing",
      description: "GST Registration and Filing Services.",
      bgColor: "bg-white",
      hoverColor: "hover:bg-pink-50"
    },
    {
      icon: <Building2 className="text-green-500" size={24} />,
      title: "Private LTD",
      description: "Register Your Unique Company here.",
      bgColor: "bg-white",
      hoverColor: "hover:bg-green-50"
    },
    {
      icon: <Calendar className="text-orange-500" size={24} />,
      title: "Trade License",
      description: "Get Trade license & Municipal Licenses",
      bgColor: "bg-white",
      hoverColor: "hover:bg-orange-50"
    },
    {
      icon: <Fish className="text-blue-500" size={24} />,
      title: "Food (FSSAI)",
      description: "Get Food registration & Labour Certification",
      bgColor: "bg-white",
      hoverColor: "hover:bg-blue-50"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className={`${service.bgColor} ${service.hoverColor} rounded-xl shadow-lg p-6 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl border border-gray-100`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-gray-100 p-3 rounded-full">
                      {service.icon}
                    </div>
                    <h3 className="font-semibold text-gray-800 text-lg">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-5 text-sm">{service.description}</p>
                  <a 
                    href="#" 
                    className="text-blue-600 flex items-center gap-1 text-sm font-medium group transition-colors duration-200"
                  >
                    <span className="group-hover:text-blue-800">Know More</span>
                    <ArrowRight 
                      size={16} 
                      className="transition-transform duration-200 group-hover:translate-x-1" 
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 lg:pl-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Get your <span className="text-blue-600 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Business Documentation</span> & registrations!
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Online & offline business services platform dedicated to helping Entrepreneurs to easily start and grow their Business, with expert guidance every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-6 px-8 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Request a Quote &rarr;
              </button>
              <button className="py-6 px-8 rounded-xl text-lg font-semibold border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-colors duration-300">
                Learn More
              </button>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((item) => (
                  <img 
                    key={item}
                    src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item}0.jpg`}
                    alt="Happy customer"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Trusted by <span className="font-semibold text-gray-800">5000+</span> businesses
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessDocumentation;
