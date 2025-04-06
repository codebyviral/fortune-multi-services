import React from "react";
import ContactForm from "./ContactForm"
import { useEffect } from "react";
const TrademarkOpposition = () => {
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
      <div className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-md">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-800 mb-4">
          Trademark Opposition in Telangana
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Learn about trademark opposition in Telangana, India, and how to navigate the process effectively. 
          This comprehensive guide provides insights into the reasons for trademark opposition, the opposition 
          process, and essential steps to protect your brand's identity.
        </p>
      </div>

      {/* Introduction */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-8 border-l-4 border-blue-500">
        <p className="text-gray-700">
          Trademark opposition can pose a challenge to the registration and protection of your brand's identity in Telangana. 
          By understanding the nature of opposition and taking appropriate steps, you can safeguard your brand's uniqueness 
          and ensure its legal protection.
        </p>
      </div>

      {/* Main Content Sections */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Understanding Opposition */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="w-6 h-6 bg-blue-500 rounded-full mr-3 flex items-center justify-center text-white text-sm">1</span>
            Understanding Trademark Opposition
          </h2>
          <p className="text-gray-700 mb-4">
            Trademark opposition occurs when a third party challenges the registration of a trademark. 
            Common grounds for opposition include:
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start bg-blue-50 p-4 rounded-lg">
              <div className="bg-blue-100 p-2 rounded-full mr-3">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Similarity to Existing Trademarks</h3>
                <p className="text-gray-700 text-sm">
                  Opposition may occur if your mark is similar to an existing registered or pending trademark.
                </p>
              </div>
            </div>
            
            <div className="flex items-start bg-purple-50 p-4 rounded-lg">
              <div className="bg-purple-100 p-2 rounded-full mr-3">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Misleading or Deceptive Use</h3>
                <p className="text-gray-700 text-sm">
                  If your mark could mislead consumers about product origin or quality.
                </p>
              </div>
            </div>
            
            <div className="flex items-start bg-amber-50 p-4 rounded-lg">
              <div className="bg-amber-100 p-2 rounded-full mr-3">
                <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Descriptive or Generic Nature</h3>
                <p className="text-gray-700 text-sm">
                  Opposition may occur if your mark lacks distinctiveness.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Addressing Opposition */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="w-6 h-6 bg-green-500 rounded-full mr-3 flex items-center justify-center text-white text-sm">2</span>
            Addressing Trademark Opposition
          </h2>
          <p className="text-gray-700 mb-4">
            When faced with opposition in Telangana, follow these essential steps:
          </p>
          
          <div className="space-y-4">
            {[
              {
                step: "Review the Notice",
                desc: "Carefully examine the opposition notice to understand the grounds raised"
              },
              {
                step: "Consult Professionals",
                desc: "Seek guidance from trademark attorneys experienced in IP law"
              },
              {
                step: "Prepare Response",
                desc: "Develop a well-documented response with arguments and evidence"
              },
              {
                step: "File Response",
                desc: "Submit your response to the Trademarks Registry within the deadline"
              },
              {
                step: "Attend Hearing",
                desc: "Present your case confidently if a hearing is scheduled"
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-3 flex-shrink-0">
                  <span className="text-green-600 font-bold">{index + 1}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{item.step}</h3>
                  <p className="text-gray-700 text-sm">{item.desc}</p>
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
              title: "Conduct Comprehensive Research",
              desc: "Identify potential conflicts before filing to minimize opposition risk",
              icon: "🔍"
            },
            {
              title: "Craft Strong Application",
              desc: "Ensure clear description of goods/services and proper classifications",
              icon: "✍️"
            },
            {
              title: "Maintain Communication",
              desc: "Respond promptly to all communications during the process",
              icon: "📩"
            },
            {
              title: "Explore Settlement Options",
              desc: "Consider mediation for mutually agreeable resolutions",
              icon: "🤝"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <span className="text-3xl mb-3 block">{item.icon}</span>
              <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Documents Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Required Documents For Trademark Opposition
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

      <ContactForm/>
    </div>
  );
};

export default TrademarkOpposition;