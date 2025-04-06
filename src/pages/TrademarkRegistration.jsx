import React from "react";
import trademarkImage from "/trademark.jpg";
import ContactForm from "./ContactForm"
import { useEffect } from "react";
const TrademarkRegistration = () => {
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
            src={trademarkImage}
            alt="Trademark Registration Hyderabad"
            className="w-full rounded-xl shadow-xl transform hover:scale-105 transition duration-500"
          />
        </div>
        <div className="md:w-2/3 space-y-4">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-800">
            Trademark Registration in Hyderabad
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            In today's fast-paced business world, your brand's identity is a priceless asset. 
            Trademark registration secures your logo, name, or unique symbol, protecting it from 
            misuse and imitation.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            This comprehensive guide walks Hyderabad entrepreneurs through the trademark registration 
            process, its significance, legal requirements, costs, and more—empowering you to protect 
            your intellectual property and stand out in the market.
          </p>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* What is Trademark */}
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500 hover:shadow-lg transition duration-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="w-6 h-6 bg-blue-500 rounded-full mr-3 flex items-center justify-center text-white text-sm">1</span>
            What is Trademark Registration?
          </h2>
          <p className="text-gray-700">
            A trademark is a distinct sign—be it a word, phrase, design, or combination—that sets your goods or services apart from others. Registering it under India's Trade Marks Act, 1999, grants exclusive usage rights and legal protection against copycats. For Hyderabad businesses, it's a shield for brand identity in a bustling market.
          </p>
        </div>

        {/* Why It Matters */}
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500 hover:shadow-lg transition duration-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="w-6 h-6 bg-purple-500 rounded-full mr-3 flex items-center justify-center text-white text-sm">2</span>
            Why Trademark Registration Matters
          </h2>
          <ul className="space-y-3">
            {[
              "Brand Security: Locks in your exclusive rights, guarding against imitation",
              "Legal Power: Enables you to sue infringers with authority",
              "Customer Confidence: Signals quality and builds trust with your audience",
              "Market Edge: Sets your offerings apart from the competition",
              "Valuable Asset: Creates an intangible asset you can sell or license"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Types of Trademarks */}
      <div className="mb-12 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 shadow-inner">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Types of Trademarks in India
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Word Mark", desc: "Text-based identifiers like 'Apple'", icon: "🔠" },
            { name: "Device Mark", desc: "Visual logos like Adidas stripes", icon: "🖼️" },
            { name: "Service Mark", desc: "For services like Starbucks", icon: "☕" },
            { name: "Collective Mark", desc: "Shared by groups", icon: "👥" },
            { name: "Certification Mark", desc: "Quality assurances", icon: "🏅" },
            { name: "Shape Mark", desc: "Unique product shapes", icon: "🔶" },
            { name: "Sound Mark", desc: "Distinctive audio", icon: "🎵" },
            { name: "Color Mark", desc: "Brand-specific colors", icon: "🎨" }
          ].map((type, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <span className="text-3xl mb-2 block text-center">{type.icon}</span>
              <h3 className="font-bold text-gray-800 text-center">{type.name}</h3>
              <p className="text-sm text-gray-600 text-center">{type.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Registration Process in Hyderabad
        </h2>
        <div className="relative">
          <div className="hidden sm:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-indigo-600 transform -translate-x-1/2"></div>
          {[
            { step: "Search", desc: "Check availability on the IP India website" },
            { step: "Apply", desc: "File Form TM-A online or at the Hyderabad office" },
            { step: "Examination", desc: "Await examiner review; address objections if raised" },
            { step: "Publication", desc: "Appears in Trademark Journal for 90-120 days" },
            { step: "Approval", desc: "Receive certificate if unopposed" },
            { step: "Renewal", desc: "Renew every 10 years to retain rights" }
          ].map((item, index) => (
            <div key={index} className={`mb-8 flex flex-col ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'} items-center`}>
              <div className={`sm:w-5/12 p-6 rounded-lg shadow-md ${index % 2 === 0 ? 'bg-blue-50' : 'bg-indigo-50'} border-l-4 ${index % 2 === 0 ? 'border-blue-500' : 'border-indigo-500'}`}>
                <h3 className="text-xl font-bold text-gray-800">{item.step}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
              <div className="sm:w-2/12 flex justify-center py-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold text-lg shadow-md">
                  {index + 1}
                </div>
              </div>
              <div className="sm:w-5/12"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Documents & Costs */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Documents */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Required Documents</h2>
          <ul className="space-y-3">
            {[
              "Form TM-A (Completed Application)",
              "Trademark Representation (Logo or Word)",
              "Identity Proof (PAN, Aadhar, or Passport)",
              "Address Proof",
              "Business Proof (Incorporation Cert, Partnership Deed)",
              "Form TM-48 (If Using an Attorney)",
              "List of Goods/Services"
            ].map((doc, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-gray-700">{doc}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Costs */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Costs Involved</h2>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
            <p className="font-semibold text-gray-800">Fees vary based on applicant type:</p>
            <ul className="mt-2 space-y-2">
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                <span>INR 4,500 for individuals/startups per class</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                <span>INR 9,000 for large firms</span>
              </li>
            </ul>
          </div>
          <p className="text-gray-700">
            Additional costs may apply for attorneys, objections, or renewals. 
            Contact us for a detailed cost breakdown tailored to your needs.
          </p>
        </div>
      </div>

      {/* Challenges & Tips */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Challenges */}
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-400">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Challenges to Watch For</h2>
          <ul className="space-y-3">
            {[
              "Examiner objections over similarities",
              "Third-party opposition post-publication",
              "Confusion in selecting the right class",
              "Lack of legal know-how"
            ].map((challenge, index) => (
              <li key={index} className="flex items-start">
                <span className="text-red-500 mr-2">⚠️</span>
                <span className="text-gray-700">{challenge}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tips */}
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-400">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Tips for Success</h2>
          <ul className="space-y-3">
            {[
              "Perform a detailed trademark search",
              "Pick the correct class(es) for your goods/services",
              "Address objections quickly",
              "Consider professional help",
              "Renew on time every decade"
            ].map((tip, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-500 mr-2">💡</span>
                <span className="text-gray-700">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mb-12 bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Benefits of Trademark Registration
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Exclusive Rights", icon: "🔒", desc: "Sole ownership of your brand identity" },
            { title: "Legal Protection", icon: "⚖️", desc: "Strong defense against infringement" },
            { title: "Brand Value", icon: "💰", desc: "Increases commercial worth of your business" },
            { title: "Business Growth", icon: "📈", desc: "Facilitates expansion and franchising" }
          ].map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition duration-300">
              <span className="text-4xl mb-4 inline-block">{benefit.icon}</span>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    <ContactForm/>
    </div>
  );
};

export default TrademarkRegistration;