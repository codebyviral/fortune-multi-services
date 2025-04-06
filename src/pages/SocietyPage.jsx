
import React, { useState } from 'react';
import { useEffect } from 'react';
const SocietyRegistrationPage = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (sectionId) => {
    if (expandedSection === sectionId) {
      setExpandedSection(null);
    } else {
      setExpandedSection(sectionId);
    }
  };
 useEffect(()=>{window.scrollTo(0,0)})
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-yellow-50 to-rose-50">
      {/* Header */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <header className="bg-gradient-to-r from-amber-500 to-rose-500 py-16 px-4 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i}
              className="absolute bg-white" 
              style={{
                height: '120px',
                width: '120px',
                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
                opacity: 0.3 + (Math.random() * 0.4)
              }}
            />
          ))}
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 tracking-tight">Society Registration</h1>
          <div className="h-1 w-24 bg-white mx-auto mb-6 rounded-full"></div>
          <p className="text-xl max-w-2xl mx-auto font-light">A comprehensive guide to registering and managing a Society in India</p>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow px-4 py-12 max-w-6xl mx-auto w-full">
        {/* Introduction Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-amber-100 rounded-full -mr-20 -mt-20 opacity-70"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-amber-800 mb-6">What is a Society?</h2>
            <p className="mb-6 text-lg">A Society is a non-profit organization formed by a group of people with a common goal of promoting charity, culture, education, science, or social welfare. In India, Societies are registered under the Societies Registration Act, 1860.</p>
            
            <div className="bg-gradient-to-r from-amber-50 to-rose-50 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-amber-700 mb-4">Key Features of a Society</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-rose-500 mr-3 mt-1 text-xl">✦</span>
                  <span><span className="font-medium">Non-Profit Nature</span> – Societies cannot distribute profits among members. All funds must be used for the intended purpose.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rose-500 mr-3 mt-1 text-xl">✦</span>
                  <span><span className="font-medium">Voluntary Association</span> – Individuals voluntarily come together to form a society.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rose-500 mr-3 mt-1 text-xl">✦</span>
                  <span><span className="font-medium">Separate Legal Entity</span> – A registered society has its own identity, separate from its members.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rose-500 mr-3 mt-1 text-xl">✦</span>
                  <span><span className="font-medium">Democratic Structure</span> – The society is managed through an elected Governing Body or Executive Committee.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rose-500 mr-3 mt-1 text-xl">✦</span>
                  <span><span className="font-medium">Perpetual Existence</span> – The society continues to exist despite changes in its members.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-amber-800 inline-block border-b-4 border-rose-400 pb-2">Why Register a Society?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-3xl shadow-lg transform transition-transform duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-amber-400 rounded-2xl flex items-center justify-center mb-4 text-white text-2xl">①</div>
              <h3 className="text-xl font-semibold text-amber-800 mb-3">Legal Recognition</h3>
              <p className="text-gray-700">A registered society can enter contracts, own property, and sue or be sued.</p>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-lg transform transition-transform duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-rose-400 rounded-2xl flex items-center justify-center mb-4 text-white text-2xl">②</div>
              <h3 className="text-xl font-semibold text-rose-700 mb-3">Tax Exemptions</h3>
              <p className="text-gray-700">Registered societies can avail income tax exemptions under Section 12A and 80G of the Income Tax Act.</p>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-lg transform transition-transform duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-amber-400 rounded-2xl flex items-center justify-center mb-4 text-white text-2xl">③</div>
              <h3 className="text-xl font-semibold text-amber-800 mb-3">Fundraising & Grants</h3>
              <p className="text-gray-700">Only registered societies can receive government grants, foreign donations (FCRA), and CSR funds.</p>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-lg transform transition-transform duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-rose-400 rounded-2xl flex items-center justify-center mb-4 text-white text-2xl">④</div>
              <h3 className="text-xl font-semibold text-rose-700 mb-3">Credibility & Trust</h3>
              <p className="text-gray-700">A registered society is more credible and trustworthy for donors and beneficiaries.</p>
            </div>
          </div>
        </div>

        {/* Types of Societies Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-amber-800 mb-6 text-center">Types of Societies That Can Be Registered</h2>
          <p className="mb-8 text-lg text-center max-w-3xl mx-auto">Different types of societies can be registered under The Societies Registration Act, 1860, including:</p>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {[
              { name: "Charitable", desc: "Welfare activities", icon: "❤️" },
              { name: "Cultural", desc: "Arts & heritage", icon: "🎭" },
              { name: "Educational", desc: "Learning institutions", icon: "📚" },
              { name: "Religious", desc: "Spiritual activities", icon: "🕊️" },
              { name: "Scientific", desc: "Research & innovation", icon: "🔬" },
              { name: "Sports", desc: "Fitness & recreation", icon: "🏆" },
              { name: "Welfare", desc: "Social causes", icon: "🤝" }
            ].map((society, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-amber-50 to-rose-50 p-5 rounded-2xl shadow-md w-40 md:w-48 text-center transform transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="text-3xl mb-3">{society.icon}</div>
                <h3 className="font-semibold text-amber-800 mb-1">{society.name}</h3>
                <p className="text-sm text-gray-600">{society.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Eligibility Section */}
        <div className="bg-gradient-to-r from-amber-500 to-rose-500 text-white rounded-3xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Who Can Register a Society?</h2>
          <div className="max-w-xl mx-auto">
            <ul className="space-y-4">
              <li className="flex items-center p-4 bg-black bg-opacity-20 rounded-xl">
                <div className="h-10 w-10 rounded-full bg-blue text-amber-500 flex items-center justify-center mr-4 flex-shrink-0 font-bold">7+</div>
                <span>Minimum 7 Members (For National Level Societies: Minimum 8 members from different states)</span>
              </li>
              <li className="flex items-center p-4 bg-black bg-opacity-20 rounded-xl">
                <div className="h-10 w-10 rounded-full bg-blue text-rose-500 flex items-center justify-center mr-4 flex-shrink-0">🌍</div>
                <span>Indian citizens and foreign nationals can be members</span>
              </li>
              <li className="flex items-center p-4 bg-black bg-opacity-20 rounded-xl">
                <div className="h-10 w-10 rounded-full bg-white text-amber-500 flex items-center justify-center mr-4 flex-shrink-0">🏢</div>
                <span>Trusts, companies, and other registered societies can also be members</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Registration Process Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-amber-800 inline-block border-b-4 border-rose-400 pb-2">Society Registration Process</h2>
          </div>
          <p className="mb-8 text-lg text-center max-w-3xl mx-auto">Societies are registered under the Registrar of Societies of the respective state government. Here's a step-by-step guide:</p>
          
          <div className="space-y-6">
            {[
              {
                title: "Choose a Unique Name",
                content: "Verify name availability with the Registrar of Societies. The name must be unique and not identical to existing societies or trademarks.",
                icon: "📝"
              },
              {
                title: "Draft the Memorandum of Association",
                content: "Include society name, objectives, founding members' details (minimum 7), and registered office address.",
                icon: "📋"
              },
              {
                title: "Prepare Rules & Regulations",
                content: "Document membership rules, governing body responsibilities, financial policies, and dispute resolution mechanisms.",
                icon: "📑"
              },
              {
                title: "Sign and Notarize Documents",
                content: "All founding members must sign the MoA & Rules. Documents must be witnessed and notarized by a Public Notary.",
                icon: "✍️"
              },
              {
                title: "Submit Application",
                content: "File application with required documents and pay the application fee (₹500–₹5,000 depending on state).",
                icon: "📤"
              },
              {
                title: "Verification & Approval",
                content: "The Registrar verifies documents and issues a Certificate of Registration within 30–60 days if all conditions are met.",
                icon: "✅"
              }
            ].map((step, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-lg overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className={`${index % 2 === 0 ? 'bg-amber-500' : 'bg-rose-500'} text-white p-6 md:w-48 flex flex-col items-center justify-center`}>
                    <span className="text-4xl mb-2">{step.icon}</span>
                    <span className="text-xl font-bold">Step {index + 1}</span>
                  </div>
                  <div className="p-6 flex-1">
                    <h3 className={`text-xl font-semibold ${index % 2 === 0 ? 'text-amber-700' : 'text-rose-700'} mb-3`}>{step.title}</h3>
                    <p className="text-gray-700">{step.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Documents Required Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-12 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-rose-100 rounded-full -ml-20 -mb-20 opacity-70"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-amber-800 mb-6 text-center">Documents Required</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-amber-100 to-amber-50 p-6 rounded-2xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center mr-4 text-white text-xl">👤</div>
                  <h3 className="text-xl font-semibold text-amber-800">For Members</h3>
                </div>
                <ul className="space-y-3 pl-16">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2 mt-0.5">•</span>
                    <span>PAN Card of all members</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2 mt-0.5">•</span>
                    <span>Address Proof (Aadhaar Card, Passport, or Voter ID)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2 mt-0.5">•</span>
                    <span>Photographs of members</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-rose-100 to-rose-50 p-6 rounded-2xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-rose-500 rounded-xl flex items-center justify-center mr-4 text-white text-xl">🏛️</div>
                  <h3 className="text-xl font-semibold text-rose-800">For Society</h3>
                </div>
                <ul className="space-y-3 pl-16">
                  <li className="flex items-start">
                    <span className="text-rose-500 mr-2 mt-0.5">•</span>
                    <span>Memorandum of Association (MoA)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose-500 mr-2 mt-0.5">•</span>
                    <span>Rules & Regulations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose-500 mr-2 mt-0.5">•</span>
                    <span>Affidavit from the President/Secretary</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose-500 mr-2 mt-0.5">•</span>
                    <span>Proof of Registered Office Address</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose-500 mr-2 mt-0.5">•</span>
                    <span>NOC from the property owner</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance Section */}
        <div className="bg-gradient-to-br from-yellow-50 to-rose-50 rounded-3xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-amber-800 mb-8 text-center">Post-Registration Compliance</h2>
          
          <div className="space-y-4">
            {[
              {
                title: "Annual Reports & Financial Statements",
                content: "File annual returns and financial statements with the Registrar of Societies to avoid deregistration.",
                icon: "📃"
              },
              {
                title: "Annual General Meetings",
                content: "Hold an AGM every year to discuss financials and governance matters with all society members.",
                icon: "👥"
              },
              {
                title: "Income Tax Filing & Exemptions",
                content: "Apply for Section 12A and 80G tax exemptions and file annual Income Tax Returns (ITR-7).",
                icon: "💰"
              },
              {
                title: "Renewal of Registration",
                content: "Some states require periodic renewal of society registration to maintain legal status.",
                icon: "🔄"
              },
              {
                title: "Foreign Donations (FCRA Registration)",
                content: "Register under FCRA with the Ministry of Home Affairs to receive foreign contributions.",
                icon: "🌐"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer"
                onClick={() => toggleSection(`compliance-${index}`)}
              >
                <div className="flex items-center p-4">
                  <div className={`w-12 h-12 ${index % 2 === 0 ? 'bg-amber-500' : 'bg-rose-500'} rounded-xl flex items-center justify-center mr-4 text-white text-xl flex-shrink-0`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                    <div 
                      className={`overflow-hidden transition-all duration-300 ${
                        expandedSection === `compliance-${index}` ? 'max-h-40 mt-2' : 'max-h-0'
                      }`}
                    >
                      <p className="text-gray-600">{item.content}</p>
                    </div>
                  </div>
                  <div className="ml-auto pr-3">
                    <svg 
                      className={`w-6 h-6 text-gray-400 transform transition-transform ${expandedSection === `compliance-${index}` ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Taxation Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-amber-800 inline-block border-b-4 border-rose-400 pb-2">Taxation of Societies</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl shadow-lg p-6 transform transition-transform duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-white flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">₹</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-3 text-center">Tax Rates</h3>
              <p className="text-center">Societies are taxed like Association of Persons (AOP) at 30% on surplus income.</p>
            </div>
            
            <div className="bg-white rounded-3xl shadow-lg p-6 transform transition-transform duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-rose-400 to-rose-500 text-white flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-rose-700 mb-3 text-center">Tax Exemptions</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-rose-500 mr-2 mt-0.5">•</span>
                  <span>Section 12A – Exempts societies from paying income tax</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rose-500 mr-2 mt-0.5">•</span>
                  <span>Section 80G – Allows donors to claim tax deductions</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-3xl shadow-lg p-6 transform transition-transform duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-400 to-rose-400 text-white flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-3 text-center">GST Compliance</h3>
              <p className="text-center">Societies providing services must register for GST if turnover exceeds ₹20 lakh.</p>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-amber-800 mb-6 text-center">Comparison: Society vs Trust vs Section 8 Company</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr>
                  <th className="py-3 px-4 text-left font-semibold text-amber-800 border-b-2 border-amber-200">Feature</th>
                  <th className="py-3 px-4 text-left font-semibold text-amber-800 border-b-2 border-amber-200">Society</th>
                  <th className="py-3 px-4 text-left font-semibold text-amber-800 border-b-2 border-amber-200">Trust</th>
                  <th className="py-3 px-4 text-left font-semibold text-amber-800 border-b-2 border-amber-200">Section 8 Company</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-yellow-50">
                  <td className="py-4 px-4 border-b border-amber-100 font-medium">Governing Law</td>
                  <td className="py-4 px-4 border-b border-amber-100">Societies Registration Act, 1860</td>
                  <td className="py-4 px-4 border-b border-amber-100">Indian Trusts Act, 1882</td>
                  <td className="py-4 px-4 border-b border-amber-100">Companies Act, 2013</td>
                </tr>
                <tr className="hover:bg-yellow-50">
                  <td className="py-4 px-4 border-b border-amber-100 font-medium">Minimum Members</td>
                  <td className="py-4 px-4 border-b border-amber-100">7</td>
                  <td className="py-4 px-4 border-b border-amber-100">2</td>
                  <td className="py-4 px-4 border-b border-amber-100">2 Directors, 2 Shareholders</td>
                </tr>
                <tr className="hover:bg-yellow-50">
                  <td className="py-4 px-4 border-b border-amber-100 font-medium">Control</td>
                  <td className="py-4 px-4 border-b border-amber-100">Governing Body</td>
                  <td className="py-4 px-4 border-b border-amber-100">Trustees</td>
                  <td className="py-4 px-4 border-b border-amber-100">Board of Directors</td>
                </tr>
                <tr className="hover:bg-yellow-50">
                  <td className="py-4 px-4 border-b border-amber-100 font-medium">Tax Benefits</td>
                  <td className="py-4 px-4 border-b border-amber-100">Available</td>
                  <td className="py-4 px-4 border-b border-amber-100">Available</td>
                  <td className="py-4 px-4 border-b border-amber-100">Available</td>
                </tr>
                <tr className="hover:bg-yellow-50">
                  <td className="py-4 px-4 font-medium">Foreign Funding</td>
                  <td className="py-4 px-4">Allowed (with FCRA)</td>
                  <td className="py-4 px-4">Allowed (with FCRA)</td>
                  <td className="py-4 px-4">Allowed (with FCRA)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-gradient-to-r from-amber-500 to-rose-500 text-white rounded-3xl shadow-xl p-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            {[...Array(3)].map((_, i) => (
              <div 
                key={i}
                className="absolute bg-white" 
                style={{
                  height: '200px',
                  width: '200px',
                  borderRadius: '40% 60% 60% 40% / 40% 40% 60% 60%',
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                  opacity: 0.3 + (Math.random() * 0.2)
                }}
              />
            ))}
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6 text-center">Conclusion</h2>
            <p className="mb-6 text-lg text-center max-w-3xl mx-auto">A Society is an ideal legal structure for NGOs, community groups, and charitable organizations that aim to work for education, welfare, social, or religious causes.</p>
            
            <div className="max-w-xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-center">Why Choose Society Registration?</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black bg-opacity-20 p-4 rounded-xl">
                  <p className="font-medium mb-1">Legal Recognition</p>
                  <p className="text-sm opacity-90">Helps in credibility & fundraising</p>
                </div>
                <div className="bg-black bg-opacity-20 p-4 rounded-xl">
                  <p className="font-medium mb-1">Tax Benefits</p>
                  <p className="text-sm opacity-90">12A & 80G tax exemptions</p>
                </div>
                <div className="bg-black bg-opacity-20 p-4 rounded-xl">
                  <p className="font-medium mb-1">Limited Compliance</p>
                  <p className="text-sm opacity-90">Easier than a company</p>
                </div>
                <div className="bg-black bg-opacity-20 p-4 rounded-xl">
                  <p className="font-medium mb-1">Government Grants</p>
                  <p className="text-sm opacity-90">Access to FCRA & CSR funds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>© {new Date().getFullYear()} Society Registration Guide. All Rights Reserved.</p>
        <p className="text-gray-400 text-sm mt-2">This guide is for informational purposes only and does not constitute legal advice.</p>
      </footer>
    </div>
  );
};

export default SocietyRegistrationPage;