import React from "react";
import { FaShieldAlt, FaChartLine, FaUsers, FaShoppingCart, FaFileSignature, FaRupeeSign, FaSearch, FaFileUpload, FaCreditCard, FaClipboardCheck } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
const FSSAILicense = () => {
  useEffect(()=>{window.scrollTo(0,0)})
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
<Helmet>
  <title>FSSAI Food License Registration | Fortune Multi Services</title>
  <meta
    name="description"
    content="Apply for your FSSAI food license hassle-free with Fortune Multi Services. Fast registration, expert guidance, and complete documentation support."
  />
  <meta
    name="keywords"
    content="FSSAI license, food license registration, FSSAI registration online, food safety license, FSSAI consultancy, Fortune Multi Services"
  />

  {/* Open Graph / Facebook */}
  <meta property="og:title" content="FSSAI License Registration Online | Fortune Multi Services" />
  <meta
    property="og:description"
    content="Get your FSSAI food license easily with our expert team. Ensure compliance and grow your food business legally."
  />
  <meta property="og:url" content="https://fortunemultiservices.in/food-license/fssai/food-license-registration" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://fortunemultiservices.in/assets/fssai-license-banner.png" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="FSSAI Food License Online | Fortune Multi Services" />
  <meta
    name="twitter:description"
    content="We help you register your FSSAI food license with ease. Trusted by food businesses across India."
  />
  <meta name="twitter:image" content="https://fortunemultiservices.in/assets/fssai-license-banner.png" />

  <link rel="canonical" href="https://fortunemultiservices.in/food-license/fssai/food-license-registration" />
</Helmet>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl overflow-hidden mb-16">
        <div className="relative z-10 py-16 px-6 sm:py-24 sm:px-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-white mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              FSSAI License Registration <span className="text-yellow-300"></span>
            </h1>
            <p className="text-xl md:text-2xl font-light mb-6">
              Complete compliance solution for food businesses
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
          </div>
        </div>
      </div>

      {/* What is FSSAI Section */}
      <section className="mb-16 bg-white rounded-xl shadow-md p-8 border border-gray-100">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 flex items-center">
          <FaShieldAlt className="mr-3 text-blue-600" />
          What is FSSAI License Registration?
        </h2>
        <div className="prose max-w-none text-gray-700">
          <p className="text-lg leading-relaxed mb-4">
            The <strong>Food Safety and Standards Authority of India (FSSAI)</strong> license is a mandatory certification for all food businesses in India. It ensures that your food products meet the safety standards set by the government under the Food Safety and Standards Act, 2006.
          </p>
          <p className="text-lg leading-relaxed">
            Whether you're a small home-based food business or a large food manufacturing unit, obtaining an FSSAI license is not just a legal requirement but also a mark of quality that builds customer trust.
          </p>
        </div>
      </section>

      {/* Importance Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
          Why FSSAI License is <span className="text-blue-600">Essential</span> for Your Business
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <FaFileSignature className="text-3xl text-blue-600" />, 
              title: "Legal Requirement", 
              desc: "Mandatory for all food businesses in India" },
            { icon: <FaUsers className="text-3xl text-blue-600" />, 
              title: "Consumer Trust", 
              desc: "Builds confidence in your food quality" },
            { icon: <FaShoppingCart className="text-3xl text-blue-600" />, 
              title: "Market Access", 
              desc: "Required for e-commerce and retail sales" },
            { icon: <FaChartLine className="text-3xl text-blue-600" />, 
              title: "Business Growth", 
              desc: "Enables expansion and partnerships" }
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="mr-4 p-3 bg-blue-50 rounded-full">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              </div>
              <p className="text-gray-600 pl-16">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* License Types Section */}
      <section className="mb-16 bg-gradient-to-br from-blue-50 to-gray-50 p-8 rounded-2xl">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
          Types of <span className="text-blue-600">FSSAI Licenses</span>
        </h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10">
          The type of license you need depends on your business size and operations:
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              title: "Basic Registration", 
              desc: "For small businesses with turnover < ₹12 lakh", 
              features: ["Home-based businesses", "Small retailers", "Temporary stalls"],
              color: "from-green-500 to-green-600"
            },
            { 
              title: "State License", 
              desc: "For medium businesses with turnover ₹12 lakh - ₹20 crore", 
              features: ["Restaurants", "Medium manufacturers", "Storage units"],
              color: "from-blue-500 to-blue-600"
            },
            { 
              title: "Central License", 
              desc: "For large businesses with turnover > ₹20 crore", 
              features: ["Import/export businesses", "Large manufacturers", "E-commerce platforms"],
              color: "from-purple-500 to-purple-600"
            }
          ].map(({ title, desc, features, color }, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all">
              <div className={`bg-gradient-to-r ${color} py-4 px-6 text-white`}>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-sm opacity-90">{desc}</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-2 mt-0.5">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
          Simple <span className="text-blue-600">5-Step</span> Registration Process
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 h-full w-1 bg-blue-200 transform -translate-x-1/2"></div>
          
          {/* Steps */}
          <div className="space-y-12">
            {[
              { icon: <FaSearch className="text-2xl" />, 
                title: "Determine License Type", 
                desc: "We analyze your business to identify the correct FSSAI category" },
              { icon: <FaFileUpload className="text-2xl" />, 
                title: "Document Preparation", 
                desc: "Our experts help compile and verify all required documents" },
              { icon: <FaFileSignature className="text-2xl" />, 
                title: "Application Filing", 
                desc: "Complete Form-B submission with FSSAI portal" },
              { icon: <FaCreditCard className="text-2xl" />, 
                title: "Fee Payment", 
                desc: "Assistance with government fee payment process" },
              { icon: <FaClipboardCheck className="text-2xl" />, 
                title: "License Issuance", 
                desc: "Receive your FSSAI certificate with our follow-up support" }
            ].map((item, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mb-4 md:mb-0 shadow-lg">
                  {item.icon}
                </div>
                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} text-center md:text-left`}>
                  <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl p-10 text-center text-white shadow-xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Get Your FSSAI License?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Our Hyderabad-based experts make the process simple, fast, and hassle-free.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg">
            <span>Call: +91 8919051513</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default FSSAILicense;