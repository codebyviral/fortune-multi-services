import React, { useState } from 'react';

const SocietyRegistrationPage = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (sectionId) => {
    if (expandedSection === sectionId) {
      setExpandedSection(null);
    } else {
      setExpandedSection(sectionId);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 py-12 px-4 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white" 
              style={{
                width: `${Math.random() * 50 + 10}px`,
                height: `${Math.random() * 50 + 10}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.3
              }}
            />
          ))}
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Society Registration</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">A comprehensive guide to registering and managing a Society in India</p>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow px-4 py-8 max-w-6xl mx-auto w-full">
        {/* Introduction Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-indigo-800 mb-4">What is a Society?</h2>
          <p className="mb-4">A Society is a non-profit organization formed by a group of people with a common goal of promoting charity, culture, education, science, or social welfare. In India, Societies are registered under the Societies Registration Act, 1860.</p>
          
          <div className="bg-indigo-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-indigo-700 mb-3">Key Features of a Society</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✅</span>
                <span><span className="font-medium">Non-Profit Nature</span> – Societies cannot distribute profits among members. All funds must be used for the intended purpose.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✅</span>
                <span><span className="font-medium">Voluntary Association</span> – Individuals voluntarily come together to form a society.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✅</span>
                <span><span className="font-medium">Separate Legal Entity</span> – A registered society has its own identity, separate from its members.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✅</span>
                <span><span className="font-medium">Democratic Structure</span> – The society is managed through an elected Governing Body or Executive Committee.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✅</span>
                <span><span className="font-medium">Perpetual Existence</span> – The society continues to exist despite changes in its members.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-indigo-800 mb-4">Why Register a Society?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Legal Recognition</h3>
              <p>A registered society can enter contracts, own property, and sue or be sued.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-5 rounded-lg border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-800 mb-2">Tax Exemptions</h3>
              <p>Registered societies can avail income tax exemptions under Section 12A and 80G of the Income Tax Act.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-5 rounded-lg border border-green-200">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Fundraising & Grants</h3>
              <p>Only registered societies can receive government grants, foreign donations (FCRA), and CSR funds.</p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-5 rounded-lg border border-amber-200">
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Credibility & Trust</h3>
              <p>A registered society is more credible and trustworthy for donors and beneficiaries.</p>
            </div>
          </div>
        </div>

        {/* Types of Societies Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-indigo-800 mb-4">Types of Societies That Can Be Registered</h2>
          <p className="mb-4">Different types of societies can be registered under The Societies Registration Act, 1860, including:</p>
          
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: "Charitable Societies", desc: "Engaged in welfare activities like education, health, and poverty alleviation.", color: "blue" },
              { name: "Cultural Societies", desc: "Promoting arts, music, dance, literature, and heritage conservation.", color: "pink" },
              { name: "Educational Societies", desc: "Schools, colleges, and institutions providing educational services.", color: "amber" },
              { name: "Religious Societies", desc: "Organizations formed for religious promotion and spiritual activities.", color: "purple" },
              { name: "Scientific Societies", desc: "Societies engaged in research and scientific advancements.", color: "emerald" },
              { name: "Sports & Recreational", desc: "Clubs and associations promoting sports and fitness activities.", color: "red" },
              { name: "Welfare Societies", desc: "Societies working for women's rights, children's welfare, and other social causes.", color: "indigo" }
            ].map((society, index) => (
              <div 
                key={index} 
                className={`bg-${society.color}-50 p-4 rounded-lg border border-${society.color}-200`}
              >
                <h3 className={`font-semibold text-${society.color}-700 mb-2`}>{society.name}</h3>
                <p className="text-sm">{society.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Eligibility Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-indigo-800 mb-4">Who Can Register a Society?</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-indigo-600 text-white flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">✓</div>
              <span>Minimum 7 Members (For National Level Societies: Minimum 8 members from different states).</span>
            </li>
            <li className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-indigo-600 text-white flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">✓</div>
              <span>Indian citizens and foreign nationals can be members.</span>
            </li>
            <li className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-indigo-600 text-white flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">✓</div>
              <span>Trusts, companies, and other registered societies can also be members.</span>
            </li>
          </ul>
        </div>

        {/* Registration Process Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-indigo-800 mb-4">Society Registration Process in India</h2>
          <p className="mb-6">Societies are registered under the Registrar of Societies of the respective state government. Here's a step-by-step guide:</p>
          
          <div className="space-y-8">
            {[
              {
                title: "Choose a Unique Name for the Society",
                content: [
                  "The society name must be unique and should not be identical to any existing registered society or trademark.",
                  "Verify name availability with the Registrar of Societies of the respective state."
                ]
              },
              {
                title: "Draft the Memorandum of Association (MoA)",
                content: [
                  "The MoA is the constitution of the society and must contain:",
                  "• Name of the Society",
                  "• Objectives & Purpose",
                  "• Details of Founding Members (Minimum 7 members)",
                  "• Registered Office Address"
                ]
              },
              {
                title: "Prepare the Rules & Regulations",
                content: [
                  "The Rules & Regulations govern the internal management of the society and should include:",
                  "• Membership Rules",
                  "• Powers and Responsibilities of Governing Body",
                  "• Financial Management Policies",
                  "• Dispute Resolution Mechanism"
                ]
              },
              {
                title: "Sign and Notarize the Documents",
                content: [
                  "The MoA & Rules & Regulations must be signed by all founding members.",
                  "The documents must be witnessed and notarized by a Public Notary."
                ]
              },
              {
                title: "Submit the Application for Registration",
                content: [
                  "File the application with the Registrar of Societies along with required documents.",
                  "The application fee varies by state (typically between ₹500 – ₹5,000)."
                ]
              },
              {
                title: "Verification & Approval",
                content: [
                  "The Registrar reviews the application and verifies documents.",
                  "If all conditions are met, the Registrar issues a Certificate of Registration within 30 – 60 days."
                ]
              }
            ].map((step, index) => (
              <div key={index} className="relative pl-12">
                <div className="absolute left-0 top-0 flex flex-col items-center">
                  <div className="rounded-full bg-indigo-600 text-white h-8 w-8 flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  {index < 5 && <div className="h-full w-0.5 bg-indigo-200 mt-2"></div>}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-indigo-700 mb-2">{step.title}</h3>
                  <div className="text-gray-700 space-y-2">
                    {step.content.map((item, i) => (
                      <p key={i}>{item}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Documents Required Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-indigo-800 mb-4">Documents Required for Society Registration</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-5 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-700 border-b border-blue-200 pb-2 mb-4">For Members</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-0.5">✔</span>
                  <span>PAN Card of all members</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-0.5">✔</span>
                  <span>Address Proof (Aadhaar Card, Passport, or Voter ID)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-0.5">✔</span>
                  <span>Photographs of members</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-5 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-700 border-b border-purple-200 pb-2 mb-4">For Society Registration</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-0.5">✔</span>
                  <span>Memorandum of Association (MoA)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-0.5">✔</span>
                  <span>Rules & Regulations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-0.5">✔</span>
                  <span>Affidavit from the President/Secretary</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-0.5">✔</span>
                  <span>Proof of Registered Office Address (Electricity Bill, Rent Agreement)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-0.5">✔</span>
                  <span>No Objection Certificate (NOC) from the property owner</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Compliance Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-indigo-800 mb-4">Post-Registration Compliance for Societies</h2>
          <p className="mb-6">After registration, societies must comply with state laws and regulatory requirements.</p>
          
          <div className="space-y-6">
            {[
              {
                title: "Filing of Annual Reports & Financial Statements",
                content: [
                  "Societies must file annual returns and financial statements with the Registrar of Societies.",
                  "Non-compliance can lead to deregistration."
                ],
                icon: "📃"
              },
              {
                title: "Conducting Annual General Meetings (AGM)",
                content: [
                  "Societies must hold an AGM every year to discuss financials and governance matters."
                ],
                icon: "👥"
              },
              {
                title: "Income Tax Filing & Exemptions",
                content: [
                  "Societies can apply for Section 12A and 80G tax exemptions.",
                  "Must file annual Income Tax Returns (ITR-7)."
                ],
                icon: "💰"
              },
              {
                title: "Renewal of Registration",
                content: [
                  "Some states require periodic renewal of society registration."
                ],
                icon: "🔄"
              },
              {
                title: "Foreign Donations (FCRA Registration)",
                content: [
                  "If a society receives foreign donations, it must register under FCRA (Foreign Contribution Regulation Act) with the Ministry of Home Affairs."
                ],
                icon: "🌐"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="border-l-4 border-indigo-500 pl-4 py-2 hover:bg-indigo-50 transition-colors cursor-pointer"
                onClick={() => toggleSection(`compliance-${index}`)}
              >
                <div className="flex items-center">
                  <span className="text-2xl mr-3">{item.icon}</span>
                  <h3 className="text-lg font-semibold text-indigo-700">{item.title}</h3>
                </div>
                
                <div 
                  className={`mt-2 pl-9 transition-all duration-300 overflow-hidden ${
                    expandedSection === `compliance-${index}` ? 'max-h-40' : 'max-h-0'
                  }`}
                >
                  {item.content.map((text, i) => (
                    <p key={i} className="mb-2">{text}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Taxation Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-indigo-800 mb-4">Taxation of Societies in India</h2>
          <p className="mb-6">Registered societies are subject to Income Tax unless they qualify for exemptions under the Income Tax Act.</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-4 rounded-lg shadow-sm">
              <div className="bg-white bg-opacity-60 rounded-full h-12 w-12 flex items-center justify-center mb-4">
                <span className="text-2xl">₹</span>
              </div>
              <h3 className="text-lg font-semibold text-emerald-800 mb-2">Tax Rates</h3>
              <p>Societies are taxed like Association of Persons (AOP) at 30% on surplus income.</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-100 p-4 rounded-lg shadow-sm">
              <div className="bg-white bg-opacity-60 rounded-full h-12 w-12 flex items-center justify-center mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-lg font-semibold text-cyan-800 mb-2">Tax Exemptions</h3>
              <p>Section 12A – Exempts societies from paying income tax.</p>
              <p>Section 80G – Allows donors to claim tax deductions.</p>
            </div>
            
            <div className="bg-gradient-to-br from-violet-50 to-purple-100 p-4 rounded-lg shadow-sm">
              <div className="bg-white bg-opacity-60 rounded-full h-12 w-12 flex items-center justify-center mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-lg font-semibold text-purple-800 mb-2">GST Compliance</h3>
              <p>Societies providing services (training, consulting, events) must register for GST if turnover exceeds ₹20 lakh.</p>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-indigo-800 mb-4">Difference Between Society, Trust, and Section 8 Company</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-indigo-100">
                  <th className="p-3 text-left font-semibold text-indigo-900 border border-indigo-200">Feature</th>
                  <th className="p-3 text-left font-semibold text-indigo-900 border border-indigo-200">Society</th>
                  <th className="p-3 text-left font-semibold text-indigo-900 border border-indigo-200">Trust</th>
                  <th className="p-3 text-left font-semibold text-indigo-900 border border-indigo-200">Section 8 Company</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="p-3 border border-indigo-200 bg-indigo-50 font-medium">Governing Law</td>
                  <td className="p-3 border border-indigo-200">Societies Registration Act, 1860</td>
                  <td className="p-3 border border-indigo-200">Indian Trusts Act, 1882</td>
                  <td className="p-3 border border-indigo-200">Companies Act, 2013</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 border border-indigo-200 bg-indigo-50 font-medium">Minimum Members</td>
                  <td className="p-3 border border-indigo-200">7</td>
                  <td className="p-3 border border-indigo-200">2</td>
                  <td className="p-3 border border-indigo-200">2 Directors, 2 Shareholders</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 border border-indigo-200 bg-indigo-50 font-medium">Control</td>
                  <td className="p-3 border border-indigo-200">Governing Body</td>
                  <td className="p-3 border border-indigo-200">Trustees</td>
                  <td className="p-3 border border-indigo-200">Board of Directors</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 border border-indigo-200 bg-indigo-50 font-medium">Tax Benefits</td>
                  <td className="p-3 border border-indigo-200">Available</td>
                  <td className="p-3 border border-indigo-200">Available</td>
                  <td className="p-3 border border-indigo-200">Available</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 border border-indigo-200 bg-indigo-50 font-medium">Foreign Funding</td>
                  <td className="p-3 border border-indigo-200">Allowed (with FCRA)</td>
                  <td className="p-3 border border-indigo-200">Allowed (with FCRA)</td>
                  <td className="p-3 border border-indigo-200">Allowed (with FCRA)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-indigo-600 text-black rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
          <p className="mb-6">A Society is an ideal legal structure for NGOs, community groups, and charitable organizations that aim to work for education, welfare, social, or religious causes.</p>
          
          <div className="bg-white bg-opacity-10 p-5 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Why Choose Society Registration?</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-300 mr-2 mt-1">✅</span>
                <span><span className="font-medium">Legal Recognition</span> – Helps in credibility & fundraising.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-300 mr-2 mt-1">✅</span>
                <span><span className="font-medium">Tax Benefits</span> – 12A & 80G tax exemptions.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-300 mr-2 mt-1">✅</span>
                <span><span className="font-medium">Limited Compliance</span> – Easier than a company.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-300 mr-2 mt-1">✅</span>
                <span><span className="font-medium">Government Grants & Foreign Donations</span> (FCRA).</span>
              </li>
            </ul>
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