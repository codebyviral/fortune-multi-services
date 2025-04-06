import React from "react";
import ContactForm from "./ContactForm";
import { useEffect } from "react";
const TrademarkObjection = () => {
   useEffect(()=>{window.scrollTo(0,0)})
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 font-sans">
      {/* Hero Section */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8 shadow-md">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-800 mb-4">
          Trademark Objection in India
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Learn about trademark objection in Telangana, India, and how to effectively address it. 
          This comprehensive guide provides insights into the reasons for trademark objection, 
          the objection process, and essential steps to protect your brand's identity.
        </p>
      </div>

      {/* Introduction */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Introduction</h2>
        <p className="text-gray-700">
          Trademark objection can pose a challenge to the registration process and the protection 
          of your brand's identity in Telangana, India. This guide explores the concept of trademark 
          objection, the reasons behind it, and provides valuable insights into the objection resolution process.
        </p>
      </div>

      {/* Content Sections */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Understanding Objection */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="w-6 h-6 bg-blue-500 rounded-full mr-3 flex items-center justify-center text-white text-sm">1</span>
            Understanding Trademark Objection
          </h2>
          <div className="space-y-4">
            {[
              {
                title: "Similarity to Existing Trademarks",
                desc: "If your proposed trademark is deemed similar to an existing registered or pending trademark, the registry may object to prevent confusion or infringement."
              },
              {
                title: "Descriptive or Generic Nature",
                desc: "Trademarks that are considered generic or merely descriptive of the goods or services they represent may face objections."
              },
              {
                title: "Lack of Distinctiveness",
                desc: "If your trademark lacks inherent distinctiveness or fails to acquire distinctiveness through use, it may be objected to."
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start bg-blue-50 p-4 rounded-lg">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-gray-700 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Addressing Objection */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="w-6 h-6 bg-green-500 rounded-full mr-3 flex items-center justify-center text-white text-sm">2</span>
            Addressing Trademark Objection
          </h2>
          <div className="space-y-4">
            {[
              "Understand the Objection",
              "Prepare a Response",
              "File a Trademark Objection Response",
              "Consult Trademark Professionals",
              "Attend the Hearing, if Required"
            ].map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-3 flex-shrink-0">
                  <span className="text-green-600 font-bold">{index + 1}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{step}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Considerations */}
      <div className="mb-12 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 shadow-inner">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Additional Considerations
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Conduct a Comprehensive Trademark Search",
              icon: "🔍"
            },
            {
              title: "Craft a Strong Trademark Application",
              icon: "✍️"
            },
            {
              title: "Seek Professional Advice",
              icon: "👨‍⚖️"
            },
            {
              title: "Maintain Prompt Communication",
              icon: "📩"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition duration-300 flex items-center">
              <span className="text-3xl mr-4">{item.icon}</span>
              <h3 className="font-bold text-gray-800">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Documents Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Required Documents For Trademark Objection
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            "Passport size Photo",
            "Copy of Pan Card",
            "Copy of Electricity Bill",
            "Sale Deed (If owned)",
            "Copy of Aadhar Card",
            "Address proof of Director",
            "Copy of Rental agreement (if Rented)",
            "Copy of No Objection"
          ].map((doc, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition duration-300 flex items-center">
              <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3 flex-shrink-0">
                {index + 1}
              </span>
              <span className="text-gray-800">{doc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-800 p-6 text-white">
          <h2 className="text-2xl font-bold">Need Help With Trademark Objection?</h2>
          <p className="opacity-90">Our experts can guide you through the objection process</p>
        </div>
        <div className="p-6">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default TrademarkObjection;