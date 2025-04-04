import React from "react";

const GSTRegistration = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5 md:px-20">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-blue-700 text-center mb-6">
          GST Registration
        </h1>
        <p className="text-gray-700 leading-relaxed">
          The Goods and Services Tax (GST) is one of the most significant tax reforms in India.
          Introduced in July 2017, GST replaced multiple indirect taxes with a single, unified tax regime.
          Any business or individual involved in the supply of goods or services is required to register for GST under Indian tax laws.
        </p>
        
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-green-600">What is GST?</h2>
          <p className="text-gray-700 leading-relaxed mt-2">
            GST is a value-added tax levied on the supply of goods and services in India. It is a destination-based tax categorized into:
          </p>
          <ul className="list-disc ml-6 mt-2 text-gray-700">
            <li><span className="font-semibold text-blue-600">CGST</span> - Central Goods and Services Tax</li>
            <li><span className="font-semibold text-blue-600">SGST</span> - State Goods and Services Tax</li>
            <li><span className="font-semibold text-blue-600">IGST</span> - Integrated Goods and Services Tax</li>
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-purple-600">Why is GST Registration Important?</h2>
          <ul className="list-disc ml-6 mt-2 text-gray-700">
            <li>Ensures <span className="font-semibold">legal compliance</span> and avoids penalties.</li>
            <li>Allows businesses to claim <span className="font-semibold">Input Tax Credit (ITC)</span>.</li>
            <li>Enhances business <span className="font-semibold">credibility</span> and growth opportunities.</li>
            <li>Enables <span className="font-semibold">interstate trade</span> under a unified tax structure.</li>
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-red-600">Documents Required</h2>
          <p className="text-gray-700 mt-2">The following documents are required for GST registration:</p>
          <ul className="list-disc ml-6 mt-2 text-gray-700">
            <li>PAN Card & Aadhar Card</li>
            <li>Business Address Proof</li>
            <li>Bank Account Details</li>
            <li>Digital Signature (for companies & LLPs)</li>
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-yellow-600">How to Register for GST?</h2>
          <p className="text-gray-700 mt-2">The registration process involves:</p>
          <ol className="list-decimal ml-6 mt-2 text-gray-700">
            <li>Visit the official <a href="https://www.gst.gov.in" className="text-blue-600 underline">GST Portal</a>.</li>
            <li>Fill out basic business details.</li>
            <li>Upload required documents.</li>
            <li>Submit the application and receive an ARN.</li>
            <li>Receive GSTIN after verification.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default GSTRegistration;