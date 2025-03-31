import React from 'react';

const ProprietorshipPage = () => {
  return (
    <div className=" ">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        
        {/* Header */}
        <div className="bg-indigo-700 text-white p-8 text-center">
          <h1 className="text-3xl font-bold">Proprietorship Firm</h1>
          <p className="mt-2 text-indigo-100">The simplest form of business ownership</p>
        </div>
        
        {/* Content */}
        <div className="p-6 space-y-12">
          
          {/* Overview Section */}
          <div>
            <h2 className="text-2xl font-semibold text-indigo-700 pb-2 border-b border-indigo-200">
              What is a Sole Proprietorship Firm?
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              A Sole Proprietorship Firm is the simplest and most common form of business, owned and managed by a single individual. 
              The proprietor (owner) has complete control over the business, including its operations, profits, and liabilities. 
              There is no legal distinction between the owner and the business, meaning the proprietor is personally responsible for all debts and losses.
            </p>
            
            <div className="mt-6 bg-indigo-50 p-5 rounded-lg">
              <h3 className="text-lg font-medium text-indigo-700">Key Points:</h3>
              <ul className="mt-3 space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <span>Single individual owns, manages, and controls the business</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <span>Not a separate legal entity from the owner</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <span>Popular among small traders, freelancers, consultants, and service providers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <span>Minimal regulatory compliance and direct control</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Key Features Section */}
          <div>
            <h2 className="text-2xl font-semibold text-indigo-700 pb-2 border-b border-indigo-200">
              Key Features of a Proprietorship Firm
            </h2>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-medium text-indigo-600">Single Ownership</h3>
                <ul className="mt-3 space-y-2 text-gray-600">
                  <li>• Business owned and operated by a single individual</li>
                  <li>• Owner responsible for all aspects of the business</li>
                </ul>
              </div>
              
              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-medium text-indigo-600">No Legal Distinction</h3>
                <ul className="mt-3 space-y-2 text-gray-600">
                  <li>• No separate legal entity from the owner</li>
                  <li>• Business and owner treated as same for legal and tax purposes</li>
                </ul>
              </div>
              
              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-medium text-indigo-600">Unlimited Liability</h3>
                <ul className="mt-3 space-y-2 text-gray-600">
                  <li>• Proprietor personally liable for all business debts</li>
                  <li>• Personal assets can be used to settle business debts</li>
                </ul>
              </div>
              
              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-medium text-indigo-600">Ease of Formation</h3>
                <ul className="mt-3 space-y-2 text-gray-600">
                  <li>• Easiest and least expensive business type to set up</li>
                  <li>• Minimal legal formalities required</li>
                </ul>
              </div>
              
              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-medium text-indigo-600">Taxation</h3>
                <ul className="mt-3 space-y-2 text-gray-600">
                  <li>• Income taxed as personal income of the owner</li>
                  <li>• No separate business tax structure</li>
                </ul>
              </div>
              
              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-medium text-indigo-600">Full Control</h3>
                <ul className="mt-3 space-y-2 text-gray-600">
                  <li>• Complete control over business decisions</li>
                  <li>• No interference from partners or directors</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Advantages and Disadvantages Section */}
          <div>
            <h2 className="text-2xl font-semibold text-indigo-700 pb-2 border-b border-indigo-200">
              Advantages of Proprietorship Firm Registration
            </h2>
            
            <div className="mt-6 space-y-4">
              <div className="bg-green-50 p-5 rounded-lg border border-green-100">
                <h3 className="text-lg font-medium text-green-700 flex items-center">
                  <span className="inline-block mr-2 w-6 h-6 bg-green-100 rounded-full text-green-600 flex items-center justify-center">1</span>
                  Simplicity
                </h3>
                <p className="mt-2 ml-8 text-gray-700">
                  One of the most significant advantages of a <em>sole proprietorship</em> is the ease of setup and maintenance. There's no need for complex paperwork or compliance requirements, unlike private limited companies or LLPs.
                </p>
              </div>
              
              <div className="bg-green-50 p-5 rounded-lg border border-green-100">
                <h3 className="text-lg font-medium text-green-700 flex items-center">
                  <span className="inline-block mr-2 w-6 h-6 bg-green-100 rounded-full text-green-600 flex items-center justify-center">2</span>
                  Full Control
                </h3>
                <p className="mt-2 ml-8 text-gray-700">
                  As the sole owner, you have complete control over the business decisions, which allows you to steer the business in any direction without needing approval from shareholders or partners.
                </p>
              </div>
              
              <div className="bg-green-50 p-5 rounded-lg border border-green-100">
                <h3 className="text-lg font-medium text-green-700 flex items-center">
                  <span className="inline-block mr-2 w-6 h-6 bg-green-100 rounded-full text-green-600 flex items-center justify-center">3</span>
                  Tax Flexibility
                </h3>
                <p className="mt-2 ml-8 text-gray-700">
                  Income from the business is treated as the individual's income, meaning tax filings are relatively straightforward. There is no need to file separate returns for the business.
                </p>
              </div>
              
              <div className="bg-green-50 p-5 rounded-lg border border-green-100">
                <h3 className="text-lg font-medium text-green-700 flex items-center">
                  <span className="inline-block mr-2 w-6 h-6 bg-green-100 rounded-full text-green-600 flex items-center justify-center">4</span>
                  Minimal Compliance
                </h3>
                <p className="mt-2 ml-8 text-gray-700">
                  <strong>Proprietorship firms</strong> are not subjected to audits or strict corporate compliance norms, making it easier for small businesses to operate without much hassle.
                </p>
              </div>
              
              <div className="bg-green-50 p-5 rounded-lg border border-green-100">
                <h3 className="text-lg font-medium text-green-700 flex items-center">
                  <span className="inline-block mr-2 w-6 h-6 bg-green-100 rounded-full text-green-600 flex items-center justify-center">5</span>
                  Profit Retention
                </h3>
                <p className="mt-2 ml-8 text-gray-700">
                  All the profits generated by the firm belong to the owner, which isn't the case with other business entities that share profits among partners or shareholders.
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold text-indigo-700 pb-2 border-b border-indigo-200 mt-10">
              Disadvantages of a Proprietorship Firm
            </h2>
            <p className="mt-4 text-gray-700 italic">
              While the simplicity of a proprietorship firm is an advantage, it also comes with certain downsides:
            </p>
            
            <div className="mt-6 space-y-4">
              <div className="bg-red-50 p-5 rounded-lg border border-red-100">
                <h3 className="text-lg font-medium text-red-700 flex items-center">
                  <span className="inline-block mr-2 w-6 h-6 bg-red-100 rounded-full text-red-600 flex items-center justify-center">1</span>
                  Unlimited Liability
                </h3>
                <p className="mt-2 ml-8 text-gray-700">
                  The business owner is personally liable for all debts and liabilities. This means that personal assets may be at risk if the business incurs significant losses.
                </p>
              </div>
              
              <div className="bg-red-50 p-5 rounded-lg border border-red-100">
                <h3 className="text-lg font-medium text-red-700 flex items-center">
                  <span className="inline-block mr-2 w-6 h-6 bg-red-100 rounded-full text-red-600 flex items-center justify-center">2</span>
                  Limited Growth Potential
                </h3>
                <p className="mt-2 ml-8 text-gray-700">
                  Proprietorships are often seen as less credible than private limited companies, limiting growth opportunities, especially when seeking investors or large clients.
                </p>
              </div>
              
              <div className="bg-red-50 p-5 rounded-lg border border-red-100">
                <h3 className="text-lg font-medium text-red-700 flex items-center">
                  <span className="inline-block mr-2 w-6 h-6 bg-red-100 rounded-full text-red-600 flex items-center justify-center">3</span>
                  Limited Life
                </h3>
                <p className="mt-2 ml-8 text-gray-700">
                  Since the business is tied to the proprietor, it can only last as long as the owner is alive or chooses to continue the business.
                </p>
              </div>
            </div>
          </div>
          
          {/* Registration Process Section */}
          <div>
            <h2 className="text-2xl font-semibold text-indigo-700 pb-2 border-b border-indigo-200">
              Proprietorship Firm Registration Process
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Registering a Proprietorship Firm is relatively simple compared to other business structures. 
              The process may vary based on location, but the general steps remain the same.
            </p>
            
            <div className="mt-6 space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-indigo-800 font-bold text-xl">
                  1
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-800">Decide the Business Name</h3>
                  <ul className="mt-2 text-gray-600 space-y-1">
                    <li>• Choose a unique and meaningful name for your proprietorship firm</li>
                    <li>• Ensure the name does not infringe on any existing trademark</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-indigo-800 font-bold text-xl">
                  2
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-800">Choose Business Location</h3>
                  <ul className="mt-2 text-gray-600 space-y-1">
                    <li>• Get a Shop & Establishment Act License if you have a physical location</li>
                    <li>• This license is required for opening a business bank account</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-indigo-800 font-bold text-xl">
                  3
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-800">Apply for PAN Card (if not available)</h3>
                  <ul className="mt-2 text-gray-600 space-y-1">
                    <li>• Owner's PAN is used for taxation purposes</li>
                    <li>• No separate PAN required for the business</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-indigo-800 font-bold text-xl">
                  4
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-800">Obtain Necessary Business Registrations</h3>
                  <ul className="mt-2 text-gray-600 space-y-1">
                    <li>• GST Registration (if applicable)</li>
                    <li>• MSME/Udyam Registration (recommended)</li>
                    <li>• Import Export Code (if dealing in international trade)</li>
                    <li>• Professional Tax Registration (if applicable in your state)</li>
                    <li>• Trade License (if required by local authorities)</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-indigo-800 font-bold text-xl">
                  5
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-800">Open a Business Bank Account</h3>
                  <p className="mt-2 text-gray-600">
                    Required documents typically include PAN Card, Aadhaar Card, 
                    GST Registration Certificate (if applicable), and other business licenses.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-indigo-800 font-bold text-xl">
                  6
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-800">Apply for Other Licenses (Industry-Specific)</h3>
                  <p className="mt-2 text-gray-600">
                    Depending on your business type, you may need additional licenses such as 
                    FSSAI for food business, Drug License for pharmacy, etc.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-indigo-800 font-bold text-xl">
                  7
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-800">Start Operations & Maintain Compliance</h3>
                  <ul className="mt-2 text-gray-600 space-y-1">
                    <li>• File Income Tax Returns annually</li>
                    <li>• File GST returns if registered</li>
                    <li>• Maintain basic accounting records</li>
                    <li>• Renew licenses on time</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Benefits & Suitability Section */}
          <div>
            <h2 className="text-2xl font-semibold text-indigo-700 pb-2 border-b border-indigo-200">
              Benefits & Suitability
            </h2>
            
            <div className="mt-6">
              <h3 className="text-xl font-medium text-indigo-600">Why Register a Proprietorship Firm?</h3>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-medium text-indigo-700">Legal Recognition</h4>
                  <p className="text-gray-600 mt-1">Helps in business expansion and credibility</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-medium text-indigo-700">Easy Bank Loans</h4>
                  <p className="text-gray-600 mt-1">Required for financial credibility with lenders</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-medium text-indigo-700">Tax Benefits</h4>
                  <p className="text-gray-600 mt-1">Allows for business deductions and exemptions</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-medium text-indigo-700">Avoid Legal Issues</h4>
                  <p className="text-gray-600 mt-1">Ensures compliance with local regulations</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-medium text-indigo-600">Who Should Start a Proprietorship Firm?</h3>
              <div className="mt-4 bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                <ul className="space-y-4 text-gray-700">
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-green-100 text-green-500">
                      ✓
                    </div>
                    <span className="ml-3"><strong>Small traders, shop owners, and local businesses</strong> looking for simple business structure</span>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-green-100 text-green-500">
                      ✓
                    </div>
                    <span className="ml-3"><strong>Freelancers, consultants, and individual professionals</strong> providing services independently</span>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-green-100 text-green-500">
                      ✓
                    </div>
                    <span className="ml-3"><strong>Online sellers</strong> on platforms like Amazon, Flipkart, Shopify, etc.</span>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-green-100 text-green-500">
                      ✓
                    </div>
                    <span className="ml-3"><strong>Entrepreneurs starting with low investment</strong> who want minimal compliance burden</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="bg-gray-100 p-6 text-center">
          <p className="text-gray-600 text-sm">
            This information is provided for general guidance. Please consult with a professional for specific advice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProprietorshipPage;