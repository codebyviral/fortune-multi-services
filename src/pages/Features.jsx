
import React from 'react';
import { Check } from 'lucide-react';
import { Helmet } from "react-helmet";
import { useEffect } from 'react';
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

<Helmet>
  <title>Top Features of Our Services | Fortune Multi Services</title>
  <meta
    name="description"
    content="Discover the standout features that make Fortune Multi Services a trusted partner for your business needs, including fast service, expert support, and full compliance."
  />
  <meta
    name="keywords"
    content="business features, multi services features, fortune multi services, fast service, expert consultation, affordable business solutions, reliable support"
  />

  {/* Open Graph / Facebook */}
  <meta property="og:title" content="Why Choose Us | Fortune Multi Services Features" />
  <meta
    property="og:description"
    content="Explore our service features—quick processing, professional guidance, government registration support, and transparent pricing."
  />
  <meta property="og:url" content="https://fortunemultiservices.in/features" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://fortunemultiservices.in/assets/features-banner.png" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Top Features | Fortune Multi Services" />
  <meta
    name="twitter:description"
    content="Check out the key features that set Fortune Multi Services apart in business documentation and registration services."
  />
  <meta name="twitter:image" content="https://fortunemultiservices.in/assets/features-banner.png" />

  <link rel="canonical" href="https://fortunemultiservices.in/features" />
</Helmet>

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
