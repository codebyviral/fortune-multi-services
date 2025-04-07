import React from 'react';
import { FaIdCard, FaClock, FaQuestionCircle } from 'react-icons/fa';

const PassPort = () => {
  
  return (
    <div className="container mx-auto py-10">
        <br/>
        <br/>
      {/* Header Section */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 flex items-center justify-center">
          <FaIdCard className="mr-3" />
          Passport Services
        </h1>
        <p className="text-lg text-gray-600 mt-2">Everything you need to know about passport services</p>
      </div>

      {/* Passport Services Info Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-10">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">How to Apply for a Passport</h2>
        <p className="text-gray-600 mb-6">
          Apply for a new passport or renew an existing one through the official Passport Seva portal. Follow these steps:
        </p>
        <ul className="list-decimal pl-5 text-gray-700 space-y-3">
          <li>Visit the Passport Seva portal (passportindia.gov.in).</li>
          <li>Register or log in to your account.</li>
          <li>Fill out the online application form (Fresh/Reissue).</li>
          <li>Upload required documents (e.g., Aadhaar, PAN, address proof).</li>
          <li>Pay the applicable fee online.</li>
          <li>Book an appointment at the nearest Passport Seva Kendra (PSK).</li>
          <li>Visit the PSK with original documents for verification.</li>
          <li>Track your application status online using the application reference number.</li>
        </ul>
      </div>

      {/* Services Overview Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <div className="bg-blue-100 p-3 rounded-full inline-block mb-4">
            <FaIdCard size={30} className="text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">New Passport</h3>
          <p className="text-gray-600">
            Apply for a fresh passport if you don’t have one.  (Normal), (Tatkaal).
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <div className="bg-green-100 p-3 rounded-full inline-block mb-4">
            <FaIdCard size={30} className="text-green-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Passport Renewal</h3>
          <p className="text-gray-600">
            Renew your passport before or after expiry.  (Normal),  (Tatkaal).
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <div className="bg-yellow-100 p-3 rounded-full inline-block mb-4">
            <FaIdCard size={30} className="text-yellow-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Lost/Damaged Passport</h3>
          <p className="text-gray-600">
            Reissue a passport if lost or damaged.  (Normal),  (Tatkaal).
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold border-b-2 pb-2 mb-6">
          <FaQuestionCircle className="inline mr-2 text-blue-500" />
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <details className="bg-white p-4 rounded-lg shadow-sm">
            <summary className="font-semibold cursor-pointer">What documents are required for a passport?</summary>
            <p className="mt-2 text-gray-600">
              You need proof of identity (Aadhaar, PAN), proof of address (Electricity Bill, Rent Agreement), and proof of date of birth (Birth Certificate, 10th Certificate). Additional documents may apply for minors or Tatkaal.
            </p>
          </details>
          <details className="bg-white p-4 rounded-lg shadow-sm">
            <summary className="font-semibold cursor-pointer">How long does it take to get a passport?</summary>
            <p className="mt-2 text-gray-600">
              Normal processing takes 30-45 days, while Tatkaal takes 1-3 days after the appointment, depending on verification.
            </p>
          </details>
          <details className="bg-white p-4 rounded-lg shadow-sm">
            <summary className="font-semibold cursor-pointer">What is the difference between Normal and Tatkaal?</summary>
            <p className="mt-2 text-gray-600">
              Normal service is cheaper and takes longer, while Tatkaal is faster but costs more and requires additional proof of urgency in some cases.
            </p>
          </details>
          <details className="bg-white p-4 rounded-lg shadow-sm">
            <summary className="font-semibold cursor-pointer">Can I track my passport application?</summary>
            <p className="mt-2 text-gray-600">
              Yes, use the application reference number on the Passport Seva portal to track your application status online.
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
          <li className="mb-2">Passport fees:  (Normal),  (Tatkaal) for fresh/renewal;  for lost/damaged.</li>
          <li className="mb-2">Appointments are mandatory for document verification at PSK.</li>
          <li className="mb-2">Apply only through the official Passport Seva portal (passportindia.gov.in).</li>
          <li className="mb-2">Passports are valid for 10 years (adults) or 5 years (minors).</li>
          <li className="mb-2">Police verification may be required depending on your application type.</li>
        </ul>
      </div>
      </div>
  );
};

export default PassPort;