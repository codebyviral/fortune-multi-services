import React from 'react';
import { Percent, Building2, Calendar, Fish } from 'lucide-react';
import Helmet from "react-helmet"
import { useEffect } from 'react';
const BusinessDocumentation = () => {
  const services = [
    {
      icon: <Percent className="text-pink-500" size={24} />,
      title: "GST & Filing",
      description: "Comprehensive GST registration and filing services with expert guidance for compliance and tax optimization.",
      bgColor: "bg-white",
      hoverColor: "hover:bg-pink-50"
    },
    {
      icon: <Building2 className="text-green-500" size={24} />,
      title: "Private LTD",
      description: "End-to-end private limited company registration with legal documentation and compliance support.",
      bgColor: "bg-white",
      hoverColor: "hover:bg-green-50"
    },
    {
      icon: <Calendar className="text-orange-500" size={24} />,
      title: "Trade License",
      description: "Fast-track trade license acquisition with municipal approvals for your business operations.",
      bgColor: "bg-white",
      hoverColor: "hover:bg-orange-50"
    },
    {
      icon: <Fish className="text-blue-500" size={24} />,
      title: "Food (FSSAI)",
      description: "Complete FSSAI registration and labor certification for food businesses with compliance assurance.",
      bgColor: "bg-white",
      hoverColor: "hover:bg-blue-50"
    }
  ];
  useEffect(()=>{window.scrollTo(0,0)})
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
       <Helmet>
        <title>Business Documentation Services | Fortune Multi Services</title>
        <meta
          name="description"
          content="Get expert assistance with all your business documentation needs – from company registration and compliance to tax and legal paperwork."
        />
        <meta
          name="keywords"
          content="business documentation, company registration, legal documents, startup paperwork, compliance, Fortune Multi Services"
        />
        <meta name="author" content="Fortune Multi Services" />

        {/* Open Graph for Social Media */}
        <meta property="og:title" content="Business Documentation | Fortune Multi Services" />
        <meta property="og:description" content="Professional support for all your business documentation – reliable, fast, and compliant." />
        <meta property="og:image" content="https://fortunemultiservices.in/assets/documentation-preview.png" />
        <meta property="og:url" content="https://fortunemultiservices.in/services/business-documentation" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Business Documentation | Fortune Multi Services" />
        <meta name="twitter:description" content="One-stop solution for company paperwork, legal filings, registrations, and document preparation." />
        <meta name="twitter:image" content="https://fortunemultiservices.in/assets/documentation-preview.png" />

        <link rel="canonical" href="https://fortunemultiservices.in/services/business-documentation" />
      </Helmet>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className={`${service.bgColor} ${service.hoverColor} rounded-xl shadow-lg p-8 transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl border border-gray-100 flex flex-col h-full`}
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className={`p-3 rounded-full ${service.hoverColor.replace('hover:', '')} transition-colors duration-300`}>
                      {service.icon}
                    </div>
                    <h3 className="font-bold text-gray-800 text-xl">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-0 text-base leading-relaxed flex-grow">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 lg:pl-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Streamline your <span className="text-blue-600 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Business Compliance</span>
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Our comprehensive platform simplifies business documentation and regulatory compliance, providing entrepreneurs with expert-guided solutions to establish and grow their ventures efficiently.
            </p>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-700 text-lg">
                  <span className="font-semibold">5000+</span> successful business registrations completed
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-700 text-lg">
                  <span className="font-semibold">98%</span> satisfaction rate from our clients
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-700 text-lg">
                  <span className="font-semibold">24-48 hour</span> average processing time for most registrations
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