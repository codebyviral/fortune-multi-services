import React from "react";
import { useEffect } from "react";
const ProfessionalTaxRegistration = () => {
   useEffect(()=>{window.scrollTo(0,0)})
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Professional Tax Registration
        </h1>
        <p className="mb-4">
          Professional Tax (PT) registration is essential for businesses and professionals to comply with state-specific tax regulations in India.
        </p>
        <button
          onClick={() => window.location.href = "/our_profile/contact-us"}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-all"
        >
          Contact Us
        </button>
        
        <h2 className="text-2xl font-semibold mt-6">What is Professional Tax?</h2>
        <p className="mb-4">
          Professional Tax is a tax levied by state governments in India on income earned by employees, self-employed professionals, freelancers, and trades.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6">Importance of Professional Tax Registration</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Legal Compliance: Ensures that businesses comply with state-specific tax laws.</li>
          <li>Avoid Penalties: Timely registration and payment help avoid fines.</li>
          <li>Employee Trust: Shows compliance with statutory regulations.</li>
          <li>State Revenue: Contributes to state development and welfare.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-6">Eligibility Criteria</h2>
        <p className="mb-4"><strong>Employers:</strong> Businesses with employees earning above the state limit.</p>
        <p className="mb-4"><strong>Self-employed Individuals:</strong> Professionals earning above the threshold.</p>
        
        <h2 className="text-2xl font-semibold mt-6">Documents Required</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>PAN Card</li>
          <li>Address proof</li>
          <li>Proof of profession (certificate of practice, degree, etc.)</li>
          <li>Bank account details</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-6">Steps for Registration</h2>
        <ol className="list-decimal ml-6 mb-4">
          <li>Visit the state tax department’s website.</li>
          <li>Create an account and fill out the application.</li>
          <li>Upload necessary documents.</li>
          <li>Submit the application and pay the registration fee.</li>
          <li>Verification and approval by authorities.</li>
          <li>Obtain the PT registration certificate.</li>
        </ol>
        
        <h2 className="text-2xl font-semibold mt-6">Post-Registration Compliance</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>File monthly/quarterly returns.</li>
          <li>Deduct and pay PT on time.</li>
          <li>Maintain proper records.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-6">Penalties for Non-Compliance</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Late payment penalties.</li>
          <li>Penalties for failure to register.</li>
          <li>Fines for incorrect information.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-6">Conclusion</h2>
        <p>
          Professional Tax registration is crucial for businesses and self-employed individuals. By ensuring compliance, you can avoid penalties and contribute to the state’s development.
        </p>
      </div>
    </div>
  );
};

export default ProfessionalTaxRegistration;
