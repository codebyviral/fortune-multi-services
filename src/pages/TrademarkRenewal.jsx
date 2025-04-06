import React from "react";
import trademarkRenewalImage from "/trademark-renewal.jpg";
import ContactForm from "./ContactForm"
import { useEffect } from "react";
const TrademarkRenewal = () => {
   useEffect(()=>{window.scrollTo(0,0)})
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Hero Section */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="flex flex-col md:flex-row gap-8 items-center mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-md">
        <div className="md:w-1/3">
          <img
            src={trademarkRenewalImage}
            alt="Trademark Renewal Hyderabad"
            className="w-full rounded-xl shadow-xl transform hover:scale-105 transition duration-500"
          />
        </div>
        <div className="md:w-2/3 space-y-4">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-800">
            Trademark Renewal Services in Hyderabad
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Trademark renewal ensures your brand's legal protection remains intact,
            maintaining exclusive rights and safeguarding against infringement. 
            Don't let your brand's protection lapse - renew with confidence.
          </p>
       
        </div>
      </div>

      {/* Content Sections */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Importance Section */}
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500 hover:shadow-lg transition duration-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="w-6 h-6 bg-blue-500 rounded-full mr-3 flex items-center justify-center text-white text-sm">1</span>
            Importance of Trademark Renewal
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span><strong className="text-gray-800">Continued Legal Protection:</strong> Prevents unauthorized usage and maintains your exclusive rights</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span><strong className="text-gray-800">Brand Identity Preservation:</strong> Strengthens customer trust and recognition</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span><strong className="text-gray-800">Avoids Lapsed Registration:</strong> Ensures ongoing exclusivity without interruption</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span><strong className="text-gray-800">Business Asset Maintenance:</strong> Enhances and protects your brand's commercial value</span>
            </li>
          </ul>
        </div>

        {/* Process Section */}
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-indigo-500 hover:shadow-lg transition duration-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="w-6 h-6 bg-indigo-500 rounded-full mr-3 flex items-center justify-center text-white text-sm">2</span>
            Renewal Process
          </h2>
          <ol className="space-y-4 relative before:absolute before:left-[11px] before:top-4 before:h-[calc(100%-20px)] before:w-0.5 before:bg-indigo-200">
            {[
              "Determine Renewal Date: 10 years from registration",
              "File Renewal Application: Submit required details",
              "Application Review: Ensure compliance with regulations",
              "Pay Renewal Fees: Avoid penalties and late charges",
              "Receive Renewal Certificate: Official confirmation of renewal"
            ].map((step, index) => (
              <li key={index} className="flex items-start relative pl-8">
                <span className="absolute left-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-bold text-sm">
                  {index + 1}
                </span>
                <span className="text-gray-700">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Documents Section */}
      <div className="mb-12 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 shadow-inner">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Required Documents for Trademark Renewal
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { name: "Passport Photo", icon: "📷" },
            { name: "PAN Card Copy", icon: "🆔" },
            { name: "Address Proof", icon: "🏠" },
            { name: "Business Registration", icon: "📄" },
            { name: "Trademark Certificate", icon: "🏛️" }
          ].map((doc, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300 flex flex-col items-center text-center">
              <span className="text-3xl mb-2">{doc.icon}</span>
              <span className="font-medium text-gray-800">{doc.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Why Choose Our Trademark Renewal Services?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Expert Guidance", desc: "15+ years trademark specialists", icon: "🧠", color: "from-blue-400 to-blue-600" },
            { title: "Timely Reminders", desc: "Never miss renewal deadlines", icon: "⏰", color: "from-green-400 to-green-600" },
            { title: "Hassle-Free Process", desc: "We handle all paperwork", icon: "📋", color: "from-purple-400 to-purple-600" },
            { title: "Legal Compliance", desc: "100% regulation adherence", icon: "⚖️", color: "from-indigo-400 to-indigo-600" }
          ].map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden group transform hover:-translate-y-2 transition duration-300">
              <div className={`h-2 bg-gradient-to-r ${feature.color}`}></div>
              <div className="p-6 text-center">
                <span className="text-4xl mb-4 inline-block">{feature.icon}</span>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <ContactForm/>
    </div>
  );
};

export default TrademarkRenewal;