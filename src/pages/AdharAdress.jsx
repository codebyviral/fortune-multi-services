import React from 'react';
import { FaIdCard, FaClock, FaQuestionCircle } from 'react-icons/fa';
import { useEffect } from 'react';
const AdharAddress = () => {
  useEffect(()=>{window.scrollTo(0,0)})
  return (
    <div className="container mx-auto py-10">
        <br/>
        <br/>
      {/* Header Section */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 flex items-center justify-center">
          <FaIdCard className="mr-3" />
          Aadhaar Address Update
        </h1>
        <p className="text-lg text-gray-600 mt-2">Update your Aadhaar address online with ease</p>
      </div>

      {/* Address Update Info Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-10">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">How to Update Your Address</h2>
        <p className="text-gray-600 mb-6">
          You can update your Aadhaar address online through the official UIDAI portal. Follow these steps:
        </p>
        <ul className="list-decimal pl-5 text-gray-700 space-y-3">
          <li>Visit the UIDAI portal (myaadhaar.uidai.gov.in).</li>
          <li>Log in using your Aadhaar number and OTP sent to your registered mobile number.</li>
          <li>Select "Update Address" from the available services.</li>
          <li>Upload a valid address proof document (e.g., Passport, Voter ID, Electricity Bill).</li>
          <li>Enter your new address details and submit the request.</li>
          <li>Track your request using the Update Request Number (URN) provided.</li>
        </ul>
      </div>

      {/* FAQ Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold border-b-2 pb-2 mb-6">
          <FaQuestionCircle className="inline mr-2 text-blue-500" />
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <details className="bg-white p-4 rounded-lg shadow-sm">
            <summary className="font-semibold cursor-pointer">Who can update their Aadhaar address online?</summary>
            <p className="mt-2 text-gray-600">
              Any individual with a registered mobile number linked to their Aadhaar can update their address online via the UIDAI portal.
            </p>
          </details>
          <details className="bg-white p-4 rounded-lg shadow-sm">
            <summary className="font-semibold cursor-pointer">What documents are accepted as address proof?</summary>
            <p className="mt-2 text-gray-600">
              Valid documents include Passport, Voter ID, Driving License, Electricity Bill (within last 3 months), Rent Agreement, etc. Check the UIDAI website for the full list.
            </p>
          </details>
          <details className="bg-white p-4 rounded-lg shadow-sm">
            <summary className="font-semibold cursor-pointer">How long does it take to update the address?</summary>
            <p className="mt-2 text-gray-600">
              It typically takes 10-30 days for the address to be updated after successful verification. You can track your request using the URN.
            </p>
          </details>
          <details className="bg-white p-4 rounded-lg shadow-sm">
            <summary className="font-semibold cursor-pointer">Is there a fee for updating the address?</summary>
            <p className="mt-2 text-gray-600">
              Yes, a nominal fee of  is charged for online address updates as per UIDAI guidelines.
            </p>
          </details>
        </div>
      </div>

      {/* Important Information Section */}
      <div className="bg-gray-100 p-6 rounded-lg mb-10">
        <h4 className="text-xl font-semibold text-red-600 mb-4">
          <FaClock className="inline mr-2" />
          Important Information
        </h4>
        <ul className="list-disc pl-5 text-gray-700">
          <li className="mb-2">Address update  (online mode).</li>
          <li className="mb-2">Ensure your mobile number is linked to Aadhaar for OTP verification.</li>
          <li className="mb-2">Only apply through the official UIDAI portal (myaadhaar.uidai.gov.in).</li>
          <li className="mb-2">Address proof must be valid and in your name.</li>
          <li className="mb-2">Track your request using the URN provided after submission.</li>
        </ul>
      </div>

      {/* Official Link Section */}
      <div>
        <h5 className="text-lg font-semibold mb-4">Official Portal:</h5>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://myaadhaar.uidai.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Visit UIDAI Portal
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdharAddress;