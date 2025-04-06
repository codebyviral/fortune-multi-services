import React from 'react';
import { FaCheck, FaLightbulb, FaShieldAlt, FaChartLine, FaHandshake, FaFileAlt, FaUserTie, FaStore, FaGlobe, FaBalanceScale } from 'react-icons/fa';
import { useEffect } from 'react';
const ProprietorshipPage = () => {
   useEffect(()=>{window.scrollTo(0,0)})
  return (
    <div className="bg-gray-50 min-h-screen">
      <br/>
      <br/>
      <br/>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-700 to-purple-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Proprietorship Firm Registration</h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            The simplest and most flexible business structure for individual entrepreneurs
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full flex items-center">
              <FaUserTie className="mr-2" /> Single Ownership
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full flex items-center">
              <FaFileAlt className="mr-2" /> Minimal Compliance
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full flex items-center">
              <FaChartLine className="mr-2" /> Direct Profit Control
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12 -mt-16">
        {/* Overview Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-indigo-800 mb-6">What is a Sole Proprietorship?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  A <strong className="text-indigo-700">Sole Proprietorship</strong> is the simplest form of business entity where a single individual owns and operates the business. The proprietor has complete control over all business decisions and receives all profits, but is also personally responsible for all debts and liabilities.
                </p>
                <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100">
                  <h3 className="text-xl font-semibold text-indigo-700 mb-3 flex items-center">
                    <FaLightbulb className="mr-2 text-indigo-600" /> Key Characteristics
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Single owner with full control",
                      "No legal distinction between owner and business",
                      "Simplest to establish with minimal formalities",
                      "Owner receives all profits",
                      "Owner bears all risks and liabilities"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-indigo-700 mb-4">Ideal For:</h3>
                <div className="space-y-4">
                  {[
                    { icon: <FaStore />, text: "Small retailers & shop owners" },
                    { icon: <FaUserTie />, text: "Freelancers & consultants" },
                    { icon: <FaGlobe />, text: "Online sellers & home businesses" },
                    { icon: <FaHandshake />, text: "Service providers & professionals" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                      <div className="bg-indigo-100 text-indigo-600 p-3 rounded-full mr-4">
                        {item.icon}
                      </div>
                      <span className="font-medium text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-indigo-800 mb-12">Key Features of Proprietorship</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Single Ownership",
                icon: <FaUserTie className="text-3xl" />,
                color: "bg-blue-100 text-blue-600",
                points: [
                  "Owned by one individual",
                  "Complete decision-making power",
                  "No partners or shareholders"
                ]
              },
              {
                title: "Unlimited Liability",
                icon: <FaShieldAlt className="text-3xl" />,
                color: "bg-red-100 text-red-600",
                points: [
                  "Owner personally liable for debts",
                  "Personal assets at risk",
                  "No separation between business and personal liability"
                ]
              },
              {
                title: "Taxation",
                icon: <FaFileAlt className="text-3xl" />,
                color: "bg-green-100 text-green-600",
                points: [
                  "Business income = personal income",
                  "Taxed at individual rates",
                  "No separate business tax filing"
                ]
              },
              {
                title: "Easy Formation",
                icon: <FaCheck className="text-3xl" />,
                color: "bg-purple-100 text-purple-600",
                points: [
                  "Minimal legal formalities",
                  "Low startup costs",
                  "No registration required (in most cases)"
                ]
              },
              {
                title: "Flexible Operations",
                icon: <FaChartLine className="text-3xl" />,
                color: "bg-yellow-100 text-yellow-600",
                points: [
                  "Quick decision making",
                  "Easy to modify business operations",
                  "No complex governance structure"
                ]
              },
              {
                title: "Limited Life",
                icon: <FaBalanceScale className="text-3xl" />,
                color: "bg-indigo-100 text-indigo-600",
                points: [
                  "Business tied to owner's lifespan",
                  "Difficult to transfer ownership",
                  "Ceases with owner's death/incapacity"
                ]
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className={`${feature.color} p-6 text-center`}>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {feature.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pros and Cons Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-green-600 p-6">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <FaCheck className="mr-3" /> Advantages
              </h2>
            </div>
            <div className="p-6">
              {[
                {
                  title: "Easy to Start",
                  content: "Minimal paperwork and legal formalities required to establish the business."
                },
                {
                  title: "Complete Control",
                  content: "Owner makes all decisions without needing approval from partners or board members."
                },
                {
                  title: "Tax Benefits",
                  content: "Business losses can offset other income on tax returns."
                },
                {
                  title: "Direct Profit Retention",
                  content: "All profits belong to the owner without sharing with partners."
                },
                {
                  title: "Privacy",
                  content: "Not required to publish financial information or reports."
                }
              ].map((item, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  <h3 className="text-lg font-semibold text-green-700 mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.content}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-red-600 p-6">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <FaBalanceScale className="mr-3" /> Disadvantages
              </h2>
            </div>
            <div className="p-6">
              {[
                {
                  title: "Unlimited Liability",
                  content: "Owner's personal assets are at risk for business debts and legal actions."
                },
                {
                  title: "Funding Challenges",
                  content: "More difficult to raise capital compared to corporations."
                },
                {
                  title: "Limited Growth",
                  content: "Business growth may be constrained by owner's resources and capabilities."
                },
                {
                  title: "Business Continuity",
                  content: "Business ends if owner dies or becomes incapacitated."
                },
                {
                  title: "Perception Issues",
                  content: "May be viewed as less credible than incorporated businesses."
                }
              ].map((item, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  <h3 className="text-lg font-semibold text-red-700 mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Registration Process */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16">
          <div className="bg-indigo-700 p-8">
            <h2 className="text-3xl font-bold text-white">Registration Process</h2>
            <p className="text-indigo-100 mt-2">
              While not legally required, these steps help establish your proprietorship formally
            </p>
          </div>
          <div className="p-8">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-indigo-100 transform -translate-x-1/2 md:left-1/2"></div>
              
              {/* Steps */}
              <div className="space-y-12">
                {[
                  {
                    step: 1,
                    title: "Choose Business Name",
                    content: "Select a unique name that doesn't infringe on existing trademarks",
                    icon: <FaFileAlt />
                  },
                  {
                    step: 2,
                    title: "Obtain Licenses",
                    content: "Get Shop & Establishment license, GST registration if applicable",
                    icon: <FaHandshake />
                  },
                  {
                    step: 3,
                    title: "Open Bank Account",
                    content: "Use your business name and licenses to open a dedicated account",
                    icon: <FaChartLine />
                  },
                  {
                    step: 4,
                    title: "Register as MSME",
                    content: "Optional but recommended for government benefits and subsidies",
                    icon: <FaShieldAlt />
                  },
                  {
                    step: 5,
                    title: "Industry-Specific Licenses",
                    content: "Obtain any required licenses (FSSAI, Drug License, etc.)",
                    icon: <FaStore />
                  }
                ].map((item, index) => (
                  <div key={index} className="relative flex items-start md:odd:flex-row-reverse md:justify-between">
                    {/* Step indicator */}
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full ${index % 2 === 0 ? 'bg-indigo-100 text-indigo-700' : 'bg-indigo-600 text-white'} font-bold z-10 flex-shrink-0 mx-auto md:mx-0`}>
                      {item.step}
                    </div>
                    
                    {/* Content card */}
                    <div className={`mt-4 md:mt-0 md:w-[calc(50%-40px)] ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm">
                        <div className="flex items-center mb-3">
                          <div className={`p-3 rounded-full ${index % 2 === 0 ? 'bg-indigo-100 text-indigo-600' : 'bg-indigo-600 text-white'} mr-3`}>
                            {item.icon}
                          </div>
                          <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                        </div>
                        <p className="text-gray-700">{item.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        
      </div>
    </div>
  );
};

export default ProprietorshipPage;