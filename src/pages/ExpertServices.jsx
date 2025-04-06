import React from 'react';
import { Building, Receipt, FileText, Rocket, CheckSquare, Copyright, ArrowRight } from 'lucide-react';
import { Helmet } from "react-helmet";
import { useEffect } from 'react';
const ExpertServices = () => {
  const expertServices = [
    {
      icon: <Building className="text-green-500" size={24} />,
      title: "Company Incorporation",
      description: "Expert assistance on how and which business structure to select.",
      bgColor: "bg-green-50"
    },
    {
      icon: <Receipt className="text-pink-500" size={24} />,
      title: "GST Registration",
      description: "GST services in registration, Returns Filing, Cancellation etc.",
      bgColor: "bg-pink-50"
    },
    {
      icon: <FileText className="text-orange-500" size={24} />,
      title: "Legal Compliances",
      description: "Legal drafting, documentation review, change in company name etc.",
      bgColor: "bg-orange-50"
    },
    {
      icon: <Rocket className="text-purple-500" size={24} />,
      title: "Business & Labour Licenses",
      description: "Business Registrations and licenses to operate in your city.",
      bgColor: "bg-purple-50"
    },
    {
      icon: <CheckSquare className="text-blue-500" size={24} />,
      title: "Government Registrations",
      description: "Shop license, Labour License, PAN, FSSAI and more.",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Copyright className="text-indigo-500" size={24} />,
      title: "Trademark & Digital Signature",
      description: "Trademark registrations and digital signature certificates.",
      bgColor: "bg-indigo-50"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
<Helmet>
  <title>Expert Business Services | Fortune Multi Services</title>
  <meta
    name="description"
    content="Leverage the expertise of Fortune Multi Services for legal, financial, digital, and documentation services tailored to your business needs."
  />
  <meta
    name="keywords"
    content="expert business services, professional consultants, Fortune Multi Services, legal compliance, startup guidance, business registration, financial advisory"
  />

  {/* Open Graph / Facebook */}
  <meta property="og:title" content="Expert Services for Business Growth | Fortune Multi Services" />
  <meta
    property="og:description"
    content="Get personalized support from industry experts to grow and legalize your business. Book a free consultation now."
  />
  <meta property="og:url" content="https://fortunemultiservices.in/expert-services" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://fortunemultiservices.in/assets/expert-services-banner.png" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Business Experts at Your Service | Fortune Multi Services" />
  <meta
    name="twitter:description"
    content="Trusted advisors for your startup and business compliance needs. Fast, affordable, and reliable service."
  />
  <meta name="twitter:image" content="https://fortunemultiservices.in/assets/expert-services-banner.png" />

  <link rel="canonical" href="https://fortunemultiservices.in/expert-services" />
</Helmet>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Looking For <span className="text-blue-600">Expert Services</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We help entrepreneurs navigate legal and regulatory requirements throughout their business lifecycle with our comprehensive range of services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {expertServices.map((service, index) => (
            <div 
              key={index} 
              className={`${service.bgColor} rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100`}
            >
              <div className="flex items-start gap-4">
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-gray-600 mb-6 text-lg">
            Explore our full range of business services
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExpertServices;