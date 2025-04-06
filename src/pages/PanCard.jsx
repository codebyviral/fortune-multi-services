import React from 'react';
import { FaIdCard, FaRupeeSign, FaClock, FaQuestionCircle, FaFileDownload } from 'react-icons/fa';
import { useEffect } from 'react';
const PanCard = () => {
  useEffect(()=>{window.scrollTo(0,0)})
  return (
    <div className="container mx-auto py-10">
        <br/>
        <br/>
      {/* Header Section */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 flex items-center justify-center">
          <FaIdCard className="mr-3" />
          PAN Card Services
        </h1>
        <p className="text-lg text-gray-600 mt-2">All PAN Card related services in one place</p>
      </div>

      {/* Quick Services Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition">
          <div className="bg-blue-100 p-3 rounded-full inline-block mb-4">
            <FaIdCard size={30} className="text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">New PAN Card</h3>
          <p className="text-gray-600 mb-4">Apply for a fresh PAN Card online with easy documentation</p>
        
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition">
          <div className="bg-green-100 p-3 rounded-full inline-block mb-4">
            <FaFileDownload size={30} className="text-green-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Download e-PAN</h3>
          <p className="text-gray-600 mb-4">Download your e-PAN Card instantly if linked with Aadhaar</p>
          
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition">
          <div className="bg-yellow-100 p-3 rounded-full inline-block mb-4">
            <FaRupeeSign size={30} className="text-yellow-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">PAN-Aadhaar Link</h3>
          <p className="text-gray-600 mb-4">Link your PAN with Aadhaar to avoid penalties</p>
          
        </div>
      </div>

      {/* All Services Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold border-b-2 pb-2 mb-6">All PAN Card Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm">
              <span>Apply for New PAN Card (Form 49A)</span>
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full"></span>
            </div>
            <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm">
              <span>PAN Card Correction/Changes</span>
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full"></span>
            </div>
            <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm">
              <span>Reprint of PAN Card (Lost/Damaged)</span>
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full"></span>
            </div>
            <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm">
              <span>PAN Card for Foreign Citizens (Form 49AA)</span>
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full"></span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm">
              <span>PAN-Aadhaar Linking Status Check</span>
              <span className="bg-green-600 text-white px-3 py-1 rounded-full"></span>
            </div>
            <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm">
              <span>Know Your PAN (Search by Name/DOB)</span>
              <span className="bg-green-600 text-white px-3 py-1 rounded-full"></span>
            </div>
            <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm">
              <span>Verify PAN Details</span>
              <span className="bg-green-600 text-white px-3 py-1 rounded-full"></span>
            </div>
            <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm">
              <span>TAN-PAN Linking</span>
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full"></span>
            </div>
          </div>
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
            <summary className="font-semibold cursor-pointer">What is a PAN Card?</summary>
            <p className="mt-2 text-gray-600">
              PAN (Permanent Account Number) is a 10-digit alphanumeric identification number issued by the Income Tax Department of India. It serves as an important ID proof and is mandatory for financial transactions like opening a bank account, receiving taxable salary, or buying/selling assets.
            </p>
          </details>
          <details className="bg-white p-4 rounded-lg shadow-sm">
            <summary className="font-semibold cursor-pointer">How long does it take to get a PAN Card?</summary>
            <p className="mt-2 text-gray-600">
              Typically, it takes about 15-20 working days to receive your PAN Card after successful application. You can track your application status online using the acknowledgement number provided during application.
            </p>
          </details>
          <details className="bg-white p-4 rounded-lg shadow-sm">
            <summary className="font-semibold cursor-pointer">What documents are required for PAN Card?</summary>
            <p className="mt-2 text-gray-600">
              You need proof of identity, proof of address, and proof of date of birth. Common documents accepted are Aadhaar Card, Voter ID, Passport, Driving License, etc. For foreign citizens, passport copy and PIO/OCI card (if applicable) are required.
            </p>
          </details>
          <details className="bg-white p-4 rounded-lg shadow-sm">
            <summary className="font-semibold cursor-pointer">Is it mandatory to link PAN with Aadhaar?</summary>
            <p className="mt-2 text-gray-600">
              Yes, as per government regulations, it is mandatory to link your PAN with Aadhaar. Failure to do so may result in your PAN becoming inoperative and you may face difficulties in financial transactions and tax filings.
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
          <li className="mb-2">PAN Card application fee is ₹107 (including GST) for Indian communication address</li>
          <li className="mb-2">For foreign communication address, the fee is ₹989 (including GST)</li>
          <li className="mb-2">Always apply through official NSDL/UTIITSL portals to avoid fraud</li>
          <li className="mb-2">PAN Card is valid for lifetime and doesn’t require renewal</li>
          <li className="mb-2">You can have only one PAN Card - having multiple PANs is illegal</li>
        </ul>
      </div>

      {/* Official Links Section */}
      <div>
        <h5 className="text-lg font-semibold mb-4">Official Government Portals:</h5>
        <div className="flex flex-wrap gap-4">
          <a href="https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html" target="_blank" className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition">
            NSDL PAN Portal
          </a>
          <a href="https://www.utiitsl.com/UTIITSL_SITE/" target="_blank" className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition">
            UTIITSL PAN Portal
          </a>
          <a href="https://www.incometax.gov.in/iec/foportal/" target="_blank" className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition">
            Income Tax Portal
          </a>
        </div>
      </div>
    </div>
  );
};

export default PanCard;