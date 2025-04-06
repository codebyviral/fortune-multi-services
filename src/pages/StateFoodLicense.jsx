import React from "react";
import { FaCheckCircle, FaFileAlt, FaClipboardList, FaHandshake, FaRegLightbulb, FaPhoneAlt } from "react-icons/fa";
import { useEffect } from "react";
const StateFoodLicense = () => {
   useEffect(()=>{window.scrollTo(0,0)})
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <br/>
        <br/>
        <br/>
        <br/>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white text-center mb-16 shadow-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">State Food License Registration</h1>
        <p className="text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto">
          Complete Guide to FSSAI Compliance in Telangana
        </p>
      </div>

      {/* Benefits Section with Icons */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 relative">
          <span className="relative inline-block">
            Why Register for State Food License?
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600"></span>
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <FaCheckCircle className="text-blue-600 text-4xl" />, 
              title: "Legal Compliance", 
              desc: "Meet all FSSAI regulations and avoid penalties" },
            { icon: <FaHandshake className="text-blue-600 text-4xl" />, 
              title: "Business Credibility", 
              desc: "Build trust with customers and partners" },
            { icon: <FaRegLightbulb className="text-blue-600 text-4xl" />, 
              title: "Market Expansion", 
              desc: "Eligible to supply to larger retailers" },
            { icon: <FaClipboardList className="text-blue-600 text-4xl" />, 
              title: "Quality Assurance", 
              desc: "Demonstrate commitment to food safety" }
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-center mb-3 text-gray-800">{item.title}</h3>
              <p className="text-gray-600 text-center">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Timeline */}
      <section className="mb-16 bg-gray-50 p-8 rounded-2xl">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Simple <span className="text-blue-600">5-Step</span> Registration Process
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 h-full w-1 bg-blue-200 transform -translate-x-1/2"></div>
          
          {/* Steps */}
          <div className="space-y-8 md:space-y-16">
            {[
              { step: "1", title: "Determine License Category", desc: "We help identify the right FSSAI license for your business size" },
              { step: "2", title: "Document Preparation", desc: "Our experts compile and verify all required paperwork" },
              { step: "3", title: "Application Submission", desc: "We handle the complete Form-B filing process" },
              { step: "4", title: "Inspection Coordination", desc: "Assistance with premises inspection if required" },
              { step: "5", title: "License Delivery", desc: "Receive your certificate with our follow-up support" }
            ].map((item, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mb-4 md:mb-0 shadow-lg">
                  {item.step}
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

      {/* Documents Section */}
      <section className="mb-16">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 bg-blue-700 p-8 text-white flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-6">Required Documents</h2>
              <p className="mb-6 text-blue-100">
                We make document collection easy with our comprehensive checklist and verification service.
              </p>
              <div className="bg-blue-600 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Pro Tip:</h3>
                <p className="text-sm">
                  Digital copies of documents are acceptable, but ensure they are clear and legible.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 p-8">
              <div className="grid gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <FaFileAlt className="text-blue-600 mr-2" /> Mandatory Documents
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start"><span className="text-blue-600 mr-2">•</span> Passport Size Photo</li>
                    <li className="flex items-start"><span className="text-blue-600 mr-2">•</span> PAN Card Copy</li>
                    <li className="flex items-start"><span className="text-blue-600 mr-2">•</span> Aadhaar Card Copy</li>
                    <li className="flex items-start"><span className="text-blue-600 mr-2">•</span> Address Proof</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <FaFileAlt className="text-blue-600 mr-2" /> Additional Documents
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start"><span className="text-blue-600 mr-2">•</span> Rental Agreement/NOC</li>
                    <li className="flex items-start"><span className="text-blue-600 mr-2">•</span> Partnership Deed</li>
                    <li className="flex items-start"><span className="text-blue-600 mr-2">•</span> Electricity Bill</li>
                    <li className="flex items-start"><span className="text-blue-600 mr-2">•</span> Sale Deed (if owned)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Your Food License?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Our experts in Kukatpally, Hyderabad will handle everything from document preparation to final approval.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 flex items-center justify-center space-x-2">
            <FaPhoneAlt />
            <span>Call Now: +91 8919051513</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default StateFoodLicense;