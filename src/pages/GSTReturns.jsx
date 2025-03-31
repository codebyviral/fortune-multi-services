import React from "react";
import gstImage from "/GST.png";

const GSTReturns = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <img
            src={gstImage}
            alt="GST Returns Process"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold text-blue-700">GST Returns Made Easy</h1>
          <p className="text-gray-700 mt-4">
            Discover the essentials of GST returns filing in Telangana, India, and streamline your business’s tax compliance effortlessly.
          </p>
          <p className="text-gray-700 mt-2">
            This SEO-friendly guide walks you through the GST filing process, key deadlines, and practical steps to manage your tax responsibilities in Telangana with ease.
          </p>
          <h2 className="text-2xl font-semibold text-green-700 mt-6">
            Reach Out Before Filing Your GST Returns
          </h2>
        </div>
      </div>

      <div className="container mx-auto p-6">
        <h3 className="text-xl font-bold text-gray-800 mt-4">Overview</h3>
        <p className="text-gray-600 mt-2">
          Filing GST returns is a vital part of tax compliance for businesses in Telangana, India. This detailed guide highlights the importance of GST filing, its advantages, and offers actionable insights into the process.
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-4">1. Why GST Returns Matter:</h3>
        <ul className="list-disc list-inside text-gray-600 mt-2">
          <li><span className="font-semibold">Regulatory Compliance:</span> Stay aligned with tax laws.</li>
          <li><span className="font-semibold">Tax Credit Benefits:</span> Claim input tax credits to lower your tax load.</li>
          <li><span className="font-semibold">Record Clarity:</span> Keep accurate records and track tax obligations.</li>
          <li><span className="font-semibold">Penalty Prevention:</span> Avoid fines by filing on time.</li>
        </ul>

        <h3 className="text-xl font-bold text-gray-800 mt-4">2. Steps to File GST Returns in Telangana:</h3>
        <p className="text-gray-600 mt-2">Here’s how to complete your GST filing:</p>
        <ol className="list-decimal list-inside text-gray-600 mt-2">
          <li>Gather Input Tax Invoices.</li>
          <li>Compile Details of Outward Supplies.</li>
          <li>Assess Eligibility for Input Tax Credits.</li>
          <li>Submit GST Returns via the Online Portal.</li>
          <li>Check and Finalize Your Submission.</li>
        </ol>

        <h3 className="text-xl font-bold text-gray-800 mt-4">Documents Needed for GST Filing</h3>
        <ul className="list-disc list-inside text-gray-600 mt-2">
          <li>Passport-Size Photograph</li>
          <li>PAN Card Copy</li>
          <li>Electricity Bill Copy</li>
          <li>Sale Deed (If Property Owned)</li>
          <li>Aadhar Card Copy</li>
          <li>Director’s Address Proof</li>
          <li>Rental Agreement Copy (If Rented)</li>
          <li>No Objection Certificate Copy</li>
        </ul>
      </div>
    </div>
  );
};

export default GSTReturns;