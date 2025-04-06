import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { useEffect } from 'react';
const IncomeTaxAudit = () => {

  const navigate = useNavigate();
  useEffect(()=>{window.scrollTo(0,0)})
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center w-full">
     

<Helmet>
  <title>Income Tax Audit Services in India | Fortune Multi Services</title>
  <meta
    name="description"
    content="Ensure tax compliance with professional Income Tax Audit services by Fortune Multi Services. Expert CA support, accurate reporting, and timely filing guaranteed."
  />
  <meta
    name="keywords"
    content="Income Tax Audit, Tax Audit Services, Income Tax Compliance, Tax Filing, Chartered Accountant, Fortune Multi Services"
  />

  {/* Open Graph / Facebook */}
  <meta property="og:title" content="Income Tax Audit Services | Fortune Multi Services" />
  <meta
    property="og:description"
    content="Get expert help with your income tax audit and ensure your business stays compliant. Contact Fortune Multi Services for professional audit support."
  />
  <meta property="og:url" content="https://fortunemultiservices.in/tax-compliances/services/income-tax-audit" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://fortunemultiservices.in/assets/images/income-tax-audit-banner.jpg" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Income Tax Audit Services | Fortune Multi Services" />
  <meta
    name="twitter:description"
    content="Professional tax audit services by experts. Ensure accuracy and avoid penalties with Fortune Multi Services."
  />
  <meta name="twitter:image" content="https://fortunemultiservices.in/assets/images/income-tax-audit-banner.jpg" />

  <link rel="canonical" href="https://fortunemultiservices.in/tax-compliances/services/income-tax-audit" />
</Helmet>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <header className="bg-blue-600 text-white text-center py-6 px-4 rounded-lg shadow-lg w-full max-w-6xl">
        <h1 className="text-3xl font-bold">Income Tax Audit in India</h1>
        <p className="mt-2 text-lg">Discover the importance of income tax audit and streamline the process</p>
      </header>

      <section className="bg-white shadow-md rounded-lg p-6 mt-6 w-full max-w-6xl">
        <h2 className="text-2xl font-semibold text-blue-600">Introduction</h2>
        <p className="mt-2 text-gray-700">
          Income tax audit ensures accuracy, transparency, and adherence to the Income Tax Act.
          This guide simplifies the process, providing insights into its importance, criteria, filing deadlines, 
          documentation requirements, and expert tips for a hassle-free audit experience.
        </p>
      </section>

      <section className="bg-white shadow-md rounded-lg p-6 mt-6 w-full max-w-6xl">
        <h2 className="text-2xl font-semibold text-blue-600">Understanding Income Tax Audit</h2>
        <p className="mt-2 text-gray-700">
          It is a thorough examination of financial records, income statements, and accounting books by a qualified tax professional.
        </p>
      </section>

      <section className="bg-white shadow-md rounded-lg p-6 mt-6 w-full max-w-6xl">
        <h2 className="text-2xl font-semibold text-blue-600">Criteria for Applicability</h2>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li><strong>Business Turnover:</strong> Audit mandatory if turnover exceeds Rs. 1 crore for businesses, Rs. 50 lakhs for professionals.</li>
          <li><strong>Professionals:</strong> Doctors, lawyers, architects must undergo an audit if gross receipts exceed Rs. 50 lakhs.</li>
          <li><strong>Presumptive Taxation:</strong> Businesses under Section 44AD, 44ADA, or 44AE require an audit.</li>
        </ul>
      </section>

      <section className="bg-white shadow-md rounded-lg p-6 mt-6 w-full max-w-6xl">
        <h2 className="text-2xl font-semibold text-blue-600">Filing Deadlines & Documentation</h2>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li><strong>Audit Report:</strong> Form 3CD must be filed electronically by September 30th.</li>
          <li><strong>Documentation:</strong> Gather financial statements, books of accounts, invoices, and bank statements.</li>
        </ul>
      </section>

      <section className="bg-white shadow-md rounded-lg p-6 mt-6 w-full max-w-6xl">
        <h2 className="text-2xl font-semibold text-blue-600">Expert Tips for a Smooth Audit</h2>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Prepare in Advance</li>
          <li>Maintain Proper Books of Accounts</li>
          <li>Seek Professional Assistance</li>
          <li>Ensure Regular Compliance</li>
        </ul>
      </section>

      <section className="bg-blue-100 shadow-md rounded-lg p-6 mt-6 w-full max-w-6xl text-center">
        <h2 className="text-2xl font-semibold text-blue-700">Contact Us</h2>
        <p className="mt-2 text-gray-700">Contact us before applying for an Income Tax Audit for expert guidance.</p>
        <button 
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-all"
          onClick={() => navigate('/our_profile/contact-us')}
        >
          Get in Touch
        </button>
      </section>

      <footer className="mt-6 text-center text-gray-600 text-sm w-full max-w-6xl">
        <p>Ensure compliance and financial integrity with a proper income tax audit.</p>
      </footer>
    </div>
  );
};

export default IncomeTaxAudit;
