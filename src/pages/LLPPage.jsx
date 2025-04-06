import React from 'react';
import { ArrowRight, CheckCircle, Book, FileText, Briefcase, AlertTriangle, Clock, DollarSign } from 'lucide-react';
import { useEffect } from 'react';
const LLPRegistrationGuide = () => {
  useEffect(()=>{window.scrollTo(0,0)})
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold text-indigo-800 mb-4">LLP Registration: A Complete Guide</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Everything you need to know about Limited Liability Partnership - combining the flexibility of a partnership 
          with the advantages of limited liability.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <div className="flex items-center px-4 py-2 bg-indigo-100 rounded-lg">
            <Briefcase className="h-5 w-5 text-indigo-600 mr-2" />
            <span className="text-indigo-700">Ideal for Professionals</span>
          </div>
          <div className="flex items-center px-4 py-2 bg-indigo-100 rounded-lg">
            <FileText className="h-5 w-5 text-indigo-600 mr-2" />
            <span className="text-indigo-700">Minimal Compliance</span>
          </div>
          <div className="flex items-center px-4 py-2 bg-indigo-100 rounded-lg">
            <AlertTriangle className="h-5 w-5 text-indigo-600 mr-2" rotate={180} />
            <span className="text-indigo-700">Limited Liability</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - What is LLP */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <div className="inline-block p-3 bg-indigo-100 rounded-lg mb-4">
              <Book className="h-6 w-6 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What is an LLP?</h2>
            <p className="text-gray-600 mb-4">
              An LLP is a hybrid business entity that provides the benefits of limited liability while allowing partners to manage 
              the business directly. It was introduced in India through the Limited Liability Partnership Act, 2008.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Key Features</h3>
            <ul className="space-y-2">
              {[
                'Limited Liability Protection',
                'Separate Legal Entity',
                'Perpetual Succession',
                'Minimal Compliance Requirements',
                'No Minimum Capital Requirement',
                'No Maximum Number of Partners'
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="inline-block p-3 bg-indigo-100 rounded-lg mb-4">
              <DollarSign className="h-6 w-6 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Taxation for LLP</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-800">Income Tax</h3>
                <ul className="mt-2 space-y-1 text-gray-600">
                  <li>• Flat 30% tax on total income</li>
                  <li>• 12% surcharge if income exceeds ₹1 crore</li>
                  <li>• 4% Health & Education Cess</li>
                  <li>• No Dividend Distribution Tax (DDT)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800">GST</h3>
                <p className="text-gray-600">
                  Registration mandatory if turnover crosses ₹20 lakh (₹10 lakh for special states)
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800">TDS</h3>
                <p className="text-gray-600">
                  Must deduct TDS on salaries, rent, professional fees and file quarterly returns
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Column - Registration Process */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-md p-6 h-full">
            <div className="inline-block p-3 bg-indigo-100 rounded-lg mb-4">
              <Clock className="h-6 w-6 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Registration Process</h2>
            
            <div className="space-y-6">
              {[
                {
                  step: "Obtain Digital Signature Certificate (DSC)",
                  desc: "All designated partners must obtain a DSC through certifying authorities to sign documents digitally."
                },
                {
                  step: "Apply for Director Identification Number (DIN)",
                  desc: "Every designated partner must obtain a DIN through Form DIR-3 on the MCA portal."
                },
                {
                  step: "Name Reservation (RUN-LLP)",
                  desc: "Choose a unique name and apply through the RUN-LLP facility on the MCA portal."
                },
                {
                  step: "File Incorporation Documents (FiLLiP Form)",
                  desc: "Submit required documents, including LLP Agreement and partner details."
                },
                {
                  step: "Draft & File LLP Agreement",
                  desc: "Must be filed within 30 days of LLP incorporation via Form 3 on the MCA portal."
                },
                {
                  step: "Obtain PAN, TAN & Open Bank Account",
                  desc: "Apply for PAN and TAN, then open a current bank account in the LLP's name."
                }
              ].map((item, index) => (
                <div key={index} className="relative pl-8">
                  <div className="absolute left-0 top-0 flex items-center justify-center w-6 h-6 rounded-full bg-indigo-600 text-white">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-medium text-gray-800">{item.step}</h3>
                  <p className="mt-1 text-gray-600">{item.desc}</p>
                  {index < 5 && (
                    <div className="absolute left-3 top-8 w-0.5 h-12 bg-indigo-200"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Benefits, Who Should Register, and Compliance */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Benefits of LLP</h2>
            <ul className="space-y-3">
              {[
                'Limited Liability Protection - Personal assets are protected',
                'Easy to Form - Simpler registration than private limited company',
                'Lower Compliance Burden - No mandatory audits (with conditions)',
                'Flexibility in Management - Define roles through an agreement',
                'No Minimum Capital Requirement - Start with any investment',
                'No Ownership Restrictions - FDI allowed under automatic route'
              ].map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                  <span className="ml-2 text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who Should Register?</h2>
            <ul className="space-y-2">
              {[
                'Small and Medium Enterprises seeking limited liability',
                'Professional Services Firms (CA, CS, Lawyers, Architects)',
                'Startups wanting flexibility with legal protection',
                'Traders & E-commerce Businesses requiring a corporate structure'
              ].map((item, index) => (
                <li key={index} className="flex items-center p-2 border border-gray-100 rounded-lg hover:bg-gray-50">
                  <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Compliance Requirements</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-800">Annual Filings</h3>
                <ul className="mt-2 space-y-1 text-gray-600">
                  <li>• Form 8 (Statement of Accounts) - Due by 30th October</li>
                  <li>• Form 11 (Annual Return) - Due by 31st May</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800">Tax Returns</h3>
                <p className="text-gray-600">
                  File ITR-5 by 31st July (no audit) or 30th September (with audit)
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800">Audit Requirements</h3>
                <p className="text-gray-600">
                  Mandatory if turnover exceeds ₹40 lakh OR capital contribution exceeds ₹25 lakh
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Documents Section */}
      <div className="mt-12 bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Documents Required</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-medium text-indigo-700 mb-4 flex items-center">
              <FileText className="h-5 w-5 mr-2" />
              For Partners
            </h3>
            <ul className="space-y-2">
              {[
                'PAN Card of all partners',
                'Aadhaar Card or Voter ID as address proof',
                'Passport (for foreign nationals)',
                'Digital Signature Certificate (DSC)'
              ].map((doc, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">{doc}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium text-indigo-700 mb-4 flex items-center">
              <FileText className="h-5 w-5 mr-2" />
              For LLP
            </h3>
            <ul className="space-y-2">
              {[
                'Proof of registered office address (Electricity Bill/Rent Agreement)',
                'NOC from the property owner',
                'LLP Agreement',
                'Subscriber sheet signed by partners'
              ].map((doc, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="mt-12 bg-yellow rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">LLP vs Private Limited Company</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-indigo-50">
                <th className="py-3 px-4 text-left text-indigo-800">Feature</th>
                <th className="py-3 px-4 text-left text-indigo-800">LLP</th>
                <th className="py-3 px-4 text-left text-indigo-800">Private Limited Company</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                {feature: "Legal Entity", llp: "Separate Entity", company: "Separate Entity"},
                {feature: "Liability", llp: "Limited to capital", company: "Limited to shares"},
                {feature: "Ownership Transfer", llp: "Difficult", company: "Easy"},
                {feature: "Minimum Partners/Directors", llp: "2 Partners", company: "2 Directors, 2 Shareholders"},
                {feature: "Compliance Cost", llp: "Low", company: "High"},
                {feature: "Mandatory Audit", llp: "Only if turnover > ₹40L", company: "Mandatory"},
                {feature: "Taxation", llp: "30%", company: "22% (if opting for new regime)"}
              ].map((row, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-800">{row.feature}</td>
                  <td className="py-3 px-4 text-gray-700">{row.llp}</td>
                  <td className="py-3 px-4 text-gray-700">{row.company}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Conclusion */}
      <div className="mt-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-md p-8 text-blue">
        <h2 className="text-2xl font-semibold mb-4 text-center">Conclusion</h2>
        <p className="text-center max-w-3xl mx-auto">
          An LLP is an ideal business structure for startups, professionals, and small businesses looking for limited liability 
          with minimal compliance.
        </p>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-600">
        <p>For more information about LLP registration, consult with a professional advisor.</p>
      </footer>
    </div>
  );
};

export default LLPRegistrationGuide;