import React, { useState } from 'react';
import ContactForm from './ContactForm';
import { useEffect } from 'react';
const PvtLtdRegistrationPage = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });
  
  // State for form submission status
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null });
    
    try {
      // In a real implementation, you would send this data to your backend API
      // which would handle the email sending to fortunemultiservices2023@gmail.com
      
      // Simulating an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log("Form submitted with data:", {
        ...formData,
        recipientEmail: "fortunemultiservices2023@gmail.com"
      });
      
      // Update status to success
      setFormStatus({ isSubmitting: false, isSubmitted: true, error: null });
      
      // Reset form after successful submission
      setFormData({ fullName: '', email: '', phone: '', message: '' });
      
      // In production, you would use an actual API endpoint, for example:
      /*
      const response = await fetch('/api/send-registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          recipientEmail: "fortunemultiservices2023@gmail.com"
        })
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
      */
      
    } catch (error) {
      setFormStatus({ 
        isSubmitting: false, 
        isSubmitted: false, 
        error: "There was an error submitting your request. Please try again."
      });
    }
  };
 useEffect(()=>{window.scrollTo(0,0)})
  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* Header Section */}
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-blue-800 mb-2">Private Limited Company Registration</h1>
        <p className="text-lg text-gray-600">A Complete Guide to Registering Your Business</p>
      </header>

      {/* Hero Section */}
      <div className="bg-blue-700 text-white p-8 rounded-lg mb-10 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Why Register a Private Limited Company?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-600 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Limited Liability</h3>
            <p>Protect your personal assets from business liabilities and debts</p>
          </div>
          <div className="bg-blue-600 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Credibility</h3>
            <p>Gain trust from clients, partners, and investors with a legal entity</p>
          </div>
          <div className="bg-blue-600 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Easy Fundraising</h3>
            <p>Attract venture capital, angel investors, and bank loans</p>
          </div>
        </div>
      </div>

      {/* What is a Pvt Ltd Company */}
      <section className="mb-10 bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">What is a Private Limited Company?</h2>
        <p className="mb-4">A Private Limited Company (Pvt Ltd) is a legally registered business entity owned by shareholders and managed by directors. It is one of the most trusted and legally recognized business structures.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-bold mb-2">Key Features</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                <span>Separate Legal Entity – The company has its own identity</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                <span>Limited Liability – Shareholders' liability is limited to investment</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                <span>Perpetual Existence – Continues despite ownership changes</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                <span>Easy Fundraising – Can raise funds from various sources</span>
              </li>
            </ul>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-bold mb-2">Eligibility Criteria</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✅</span>
                <span>Minimum 2 Shareholders & 2 Directors (max 200 shareholders)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✅</span>
                <span>At least one director must be an Indian resident</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✅</span>
                <span>Foreign nationals and NRIs can also register</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✅</span>
                <span>Registered office address in India is required</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Registration Process */}
      <section className="mb-10 bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">Registration Process</h2>
        <div className="space-y-6">
          <div className="border-b pb-4">
            <h3 className="font-bold text-lg flex items-center">
              <span className="bg-blue-700 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
              Obtain Digital Signature Certificate (DSC)
            </h3>
            <p className="ml-11 mt-2">Required for filing online applications. Directors and shareholders need Class-3 DSC from government-approved agencies.</p>
          </div>
          
          <div className="border-b pb-4">
            <h3 className="font-bold text-lg flex items-center">
              <span className="bg-blue-700 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
              Apply for Director Identification Number (DIN)
            </h3>
            <p className="ml-11 mt-2">Required for all directors. Apply through SPICe+ Form on the MCA portal.</p>
          </div>
          
          <div className="border-b pb-4">
            <h3 className="font-bold text-lg flex items-center">
              <span className="bg-blue-700 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">3</span>
              Name Approval for the Company
            </h3>
            <p className="ml-11 mt-2">The proposed name should be unique. Apply via RUN form on the MCA portal. Approval within 1-2 working days.</p>
          </div>
          
          <div className="border-b pb-4">
            <h3 className="font-bold text-lg flex items-center">
              <span className="bg-blue-700 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">4</span>
              Prepare MOA & AOA
            </h3>
            <p className="ml-11 mt-2">Memorandum of Association defines objectives. Articles of Association contains internal rules. Must be digitally signed.</p>
          </div>
          
          <div className="border-b pb-4">
            <h3 className="font-bold text-lg flex items-center">
              <span className="bg-blue-700 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">5</span>
              File SPICe+ Form for Incorporation
            </h3>
            <p className="ml-11 mt-2">Submit SPICe+ Form (INC-32) with MOA & AOA, including directors' info, office address, and capital details.</p>
          </div>
          
          <div className="border-b pb-4">
            <h3 className="font-bold text-lg flex items-center">
              <span className="bg-blue-700 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">6</span>
              PAN & TAN Application
            </h3>
            <p className="ml-11 mt-2">Apply for Permanent Account Number & Tax Deduction Account Number for tax filings and GST registration.</p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg flex items-center">
              <span className="bg-blue-700 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">7</span>
              Receive Certificate of Incorporation
            </h3>
            <p className="ml-11 mt-2">Once verified, the ROC issues a Certificate of Incorporation. The company can now start operations.</p>
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="mb-10 bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Documents Required</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold mb-3">For Directors & Shareholders:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✔</span>
                <span>PAN Card (Mandatory for Indian directors)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✔</span>
                <span>Aadhaar Card / Passport / Voter ID (Address proof)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✔</span>
                <span>Passport-size Photographs</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✔</span>
                <span>Bank Statement / Utility Bill (Latest, not older than 2 months)</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3">For Registered Office Address:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✔</span>
                <span>Electricity Bill / Property Tax Receipt (For owned premises)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✔</span>
                <span>Rent Agreement & NOC from Landlord (For rented premises)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Compliance & Taxation */}
      <section className="mb-10 bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">Post-Registration Compliance</h2>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded">
            <h3 className="font-bold">1. Open a Business Bank Account</h3>
            <p>A current account must be opened in the company's name</p>
          </div>
          <div className="p-4 bg-gray-50 rounded">
            <h3 className="font-bold">2. GST Registration (If Applicable)</h3>
            <p>Required if turnover exceeds ₹20 lakh (₹10 lakh for special category states)</p>
          </div>
          <div className="p-4 bg-gray-50 rounded">
            <h3 className="font-bold">3. Filing of Annual Returns & Financial Statements</h3>
            <p>MCA Filings (AOC-4, MGT-7) and Income Tax Return (ITR-6)</p>
          </div>
          <div className="p-4 bg-gray-50 rounded">
            <h3 className="font-bold">4. Conduct Board Meetings & AGM</h3>
            <p>Minimum 4 Board Meetings per year and Annual General Meeting</p>
          </div>
          <div className="p-4 bg-gray-50 rounded">
            <h3 className="font-bold">5. Auditor Appointment</h3>
            <p>A statutory auditor must be appointed within 30 days of incorporation</p>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="mb-10 bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Business Structure Comparison</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border-collapse">
            <thead>
              <tr className="bg-blue-700 text-white">
                <th className="py-3 px-4 text-left border">Feature</th>
                <th className="py-3 px-4 text-left border">Private Limited</th>
                <th className="py-3 px-4 text-left border">LLP</th>
                <th className="py-3 px-4 text-left border">One Person Company</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border font-medium">Ownership</td>
                <td className="py-2 px-4 border">2-200 shareholders</td>
                <td className="py-2 px-4 border">Minimum 2 partners</td>
                <td className="py-2 px-4 border">1 owner</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="py-2 px-4 border font-medium">Liability</td>
                <td className="py-2 px-4 border">Limited</td>
                <td className="py-2 px-4 border">Limited</td>
                <td className="py-2 px-4 border">Limited</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border font-medium">Fundraising</td>
                <td className="py-2 px-4 border">Easy (VCs, investors)</td>
                <td className="py-2 px-4 border">Difficult</td>
                <td className="py-2 px-4 border">Difficult</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="py-2 px-4 border font-medium">Compliance</td>
                <td className="py-2 px-4 border">High</td>
                <td className="py-2 px-4 border">Moderate</td>
                <td className="py-2 px-4 border">Moderate</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border font-medium">Taxation</td>
                <td className="py-2 px-4 border">25%-30%</td>
                <td className="py-2 px-4 border">30%</td>
                <td className="py-2 px-4 border">25%-30%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Contact Section with Form Submission */}
      <section className="bg-blue-800 text-white p-8 rounded-lg shadow-lg">
      <ContactForm />
      </section>

      {/* Footer */}
      <footer className="mt-10 text-center text-gray-600">
        <p>© {new Date().getFullYear()} Company Registration Services. All rights reserved.</p>
        <p className="mt-2 text-sm">This information is for educational purposes only and does not constitute legal advice.</p>
      </footer>
    </div>
  );
};

export default PvtLtdRegistrationPage;