import React from "react";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
const GSTRegistration = () => {
  useEffect(()=>{window.scrollTo(0,0)})
  return (
    <main className="min-h-screen bg-gray-100 py-16 px-5 md:px-20">


<Helmet>
  <title>GST Registration Online | Register Your Business for GST - Fortune Multi Services</title>
  <meta
    name="description"
    content="Register your business for GST quickly and hassle-free with Fortune Multi Services. Get expert assistance and complete documentation support for GST registration."
  />
  <meta
    name="keywords"
    content="GST registration, online GST registration, GST registration services, register for GST, GST consultant, Fortune Multi Services"
  />

  {/* Open Graph / Facebook */}
  <meta property="og:title" content="GST Registration Online | Fortune Multi Services" />
  <meta
    property="og:description"
    content="Get your GST registration done professionally with our expert team. Fast processing, full documentation support, and reliable service."
  />
  <meta property="og:url" content="https://fortunemultiservices.in/gst/services/gst-registration" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://fortunemultiservices.in/assets/gst-registration-banner.png" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Online GST Registration Services | Fortune Multi Services" />
  <meta
    name="twitter:description"
    content="Apply for GST registration online with expert help. Fast, affordable, and fully compliant service for all types of businesses."
  />
  <meta name="twitter:image" content="https://fortunemultiservices.in/assets/gst-registration-banner.png" />

  <link rel="canonical" href="https://fortunemultiservices.in/gst/services/gst-registration" />
</Helmet>

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-blue-700 text-center mb-6">
          GST Registration
        </h1>
        
        <section className="mb-8">
          <p className="text-gray-700 leading-relaxed">
            The Goods and Services Tax (GST) is one of the most significant tax reforms in India.
            Introduced in July 2017, GST replaced multiple indirect taxes with a single, unified tax regime.
            Any business or individual involved in the supply of goods or services is required to register for GST under Indian tax laws.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">What is GST?</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            GST is a value-added tax levied on the supply of goods and services in India. It is a destination-based tax categorized into:
          </p>
          <ul className="list-disc ml-6 space-y-1 text-gray-700">
            <li><span className="font-semibold text-blue-600">CGST</span> - Central Goods and Services Tax</li>
            <li><span className="font-semibold text-blue-600">SGST</span> - State Goods and Services Tax</li>
            <li><span className="font-semibold text-blue-600">IGST</span> - Integrated Goods and Services Tax</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-600 mb-4">Why is GST Registration Important?</h2>
          <ul className="list-disc ml-6 space-y-1 text-gray-700">
            <li>Ensures <span className="font-semibold">legal compliance</span> and avoids penalties.</li>
            <li>Allows businesses to claim <span className="font-semibold">Input Tax Credit (ITC)</span>.</li>
            <li>Enhances business <span className="font-semibold">credibility</span> and growth opportunities.</li>
            <li>Enables <span className="font-semibold">interstate trade</span> under a unified tax structure.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">Documents Required</h2>
          <p className="text-gray-700 mb-3">The following documents are required for GST registration:</p>
          <ul className="list-disc ml-6 space-y-1 text-gray-700">
            <li>PAN Card & Aadhar Card</li>
            <li>Business Address Proof</li>
            <li>Bank Account Details</li>
            <li>Digital Signature (for companies & LLPs)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-yellow-600 mb-4">How to Register for GST?</h2>
          <p className="text-gray-700 mb-3">The registration process involves:</p>
          <ol className="list-decimal ml-6 space-y-1 text-gray-700">
            <li>Visit the official <a href="https://www.gst.gov.in" className="text-blue-600 underline hover:text-blue-800" target="_blank" rel="noopener noreferrer">GST Portal</a>.</li>
            <li>Fill out basic business details.</li>
            <li>Upload required documents.</li>
            <li>Submit the application and receive an ARN.</li>
            <li>Receive GSTIN after verification.</li>
          </ol>
        </section>
      </div>
    </main>
  );
};

export default GSTRegistration;