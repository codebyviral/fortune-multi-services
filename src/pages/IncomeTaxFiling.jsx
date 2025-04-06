import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { useEffect } from 'react';
const IncomeTaxFiling = () => {
  useEffect(()=>{window.scrollTo(0,0)})
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center w-full">
      

<Helmet>
  <title>Income Tax Filing Services | Fortune Multi Services</title>
  <meta
    name="description"
    content="Fast and accurate Income Tax Filing services in India. File your ITR with expert assistance from Fortune Multi Services today!"
  />
  <meta
    name="keywords"
    content="Income Tax Filing, ITR Filing, Online Tax Filing India, Tax Consultant, Income Tax Return, Fortune Multi Services"
  />

  {/* Open Graph / Facebook */}
  <meta property="og:title" content="Income Tax Filing Services | Fortune Multi Services" />
  <meta
    property="og:description"
    content="Get expert help for your Income Tax Return. Quick, reliable, and compliant filing services by Fortune Multi Services."
  />
  <meta property="og:url" content="https://fortunemultiservices.in/tax-compliances/services/income-tax-filing" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://fortunemultiservices.in/assets/images/income-tax-filing-banner.jpg" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Income Tax Filing Services | Fortune Multi Services" />
  <meta
    name="twitter:description"
    content="File your income tax return online with our trusted experts. Accurate and on-time services from Fortune Multi Services."
  />
  <meta name="twitter:image" content="https://fortunemultiservices.in/assets/images/income-tax-filing-banner.jpg" />

  <link rel="canonical" href="https://fortunemultiservices.in/tax-compliances/services/income-tax-filing" />
</Helmet>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <header className="bg-blue-600 text-white text-center py-6 px-4 rounded-lg shadow-lg w-full max-w-6xl">
        <h1 className="text-3xl font-bold">Income Tax Filing in India - Complete Guide</h1>
        <p className="mt-2 text-lg">Simplify your tax filing process with this comprehensive guide</p>
      </header>

      <section className="bg-white shadow-md rounded-lg p-6 mt-6 w-full max-w-6xl">
        <h2 className="text-2xl font-semibold text-blue-600">Introduction</h2>
        <p className="mt-2 text-gray-700">
          Income tax filing is a crucial obligation for individuals and businesses in India. 
          It plays a significant role in maintaining transparency, fulfilling legal requirements, 
          and contributing to the nation’s development.
        </p>
      </section>

      <section className="bg-white shadow-md rounded-lg p-6 mt-6 w-full max-w-6xl">
        <h2 className="text-2xl font-semibold text-blue-600">Understanding Income Tax Filing</h2>

        <div className="mt-4">
          <h3 className="text-xl font-semibold text-gray-800">Essential Components</h3>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li><strong>Total Income:</strong> Calculate income from all sources</li>
            <li><strong>Tax Slab:</strong> Determine applicable tax slab</li>
            <li><strong>ITR Forms:</strong> Select appropriate form</li>
            <li><strong>Deductions:</strong> Maximize tax savings</li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800">Important Deadlines</h3>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li><strong>Individuals & Businesses:</strong> July 31st</li>
            <li><strong>Audit Cases:</strong> Varies by case</li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800">Required Documents</h3>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>Passport size Photo</li>
            <li>Copy of PAN Card</li>
            <li>Copy of Electricity Bill</li>
            <li>Sale Deed (If owned)</li>
            <li>Copy of Aadhar Card</li>
            <li>Address proof of Director</li>
            <li>Copy of Rental agreement (if Rented)</li>
            <li>Copy of No Objection</li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800">Expert Tips</h3>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>Organize Your Documents</li>
            <li>Maintain Accurate Records</li>
            <li>Seek Professional Assistance</li>
            <li>File Electronically</li>
          </ul>
        </div>
      </section>

      <section className="bg-blue-100 shadow-md rounded-lg p-6 mt-6 w-full max-w-6xl text-center">
        <h2 className="text-2xl font-semibold text-blue-700">Contact Us</h2>
        <p className="mt-2 text-gray-700">Contact us before applying for Income Tax Filing for expert guidance</p>
        <button 
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-all"
          onClick={() => navigate('/our_profile/contact-us')}
        >
          Get in Touch
        </button>
      </section>

      <footer className="mt-6 text-center text-gray-600 text-sm w-full max-w-6xl">
        <p>Contribute to India's development through timely tax compliance</p>
      </footer>
    </div>
  );
};

export default IncomeTaxFiling;
