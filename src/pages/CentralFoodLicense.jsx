import React from "react";
import { FaShieldAlt, FaGlobe, FaUserShield, FaChartLine, FaFileAlt, FaBuilding, FaClipboardList, FaSearch, FaFileUpload, FaCheckCircle } from "react-icons/fa";
import { MdOutlineFoodBank, MdGppGood } from "react-icons/md";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
const CentralFoodLicense = () => {
  useEffect(()=>{window.scrollTo(0,0)})
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<Helmet>
  <title>Central FSSAI Food License Registration | Fortune Multi Services</title>
  <meta
    name="description"
    content="Apply for Central FSSAI Food License with Fortune Multi Services. Get hassle-free registration, expert guidance, and timely approvals for food businesses operating in multiple states."
  />
  <meta
    name="keywords"
    content="Central FSSAI License, Central Food License, Food License Registration, FSSAI Consultant, FSSAI License for Export, Fortune Multi Services"
  />

  {/* Open Graph / Facebook */}
  <meta property="og:title" content="Central Food License Registration | FSSAI Compliance Made Easy" />
  <meta
    property="og:description"
    content="Get your Central FSSAI Food License quickly with Fortune Multi Services. Perfect for businesses involved in large-scale food operations or export."
  />
  <meta property="og:url" content="https://fortunemultiservices.in/food-license/fssai/food-central-license" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://fortunemultiservices.in/assets/central-food-license-preview.png" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Central FSSAI Food License Registration | Fortune Multi Services" />
  <meta
    name="twitter:description"
    content="Get expert help with Central Food License registration. FSSAI-approved, fast, and trusted by food businesses nationwide."
  />
  <meta name="twitter:image" content="https://fortunemultiservices.in/assets/central-food-license-preview.png" />

  <link rel="canonical" href="https://fortunemultiservices.in/food-license/fssai/food-central-license" />
</Helmet>

      {/* Hero Section */}
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 rounded-2xl text-white p-8 md:p-12 mb-16 shadow-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Central Food License Registration</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl">
          Nationwide Compliance for Food Businesses
        </p>
      </div>

      {/* Introduction */}
      <section className="prose prose-lg max-w-none mb-16">
        <div className="flex items-start mb-8">
          <MdOutlineFoodBank className="text-4xl text-blue-600 mr-4 mt-1" />
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Central Food License Overview</h2>
            <p className="text-gray-700">
              For food businesses operating across state lines or involved in import/export, the Central Food License from FSSAI is mandatory. This license ensures your compliance with national food safety standards and enables nationwide operations.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Key Benefits of <span className="text-blue-600">Central Food License</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <FaShieldAlt className="text-3xl" />, 
              title: "Legal Compliance", 
              desc: "Meets FSSAI regulations for interstate operations" },
            { icon: <FaGlobe className="text-3xl" />, 
              title: "Nationwide Validity", 
              desc: "Operate across all Indian states" },
            { icon: <FaUserShield className="text-3xl" />, 
              title: "Consumer Trust", 
              desc: "Builds confidence in your brand" },
            { icon: <FaChartLine className="text-3xl" />, 
              title: "Business Growth", 
              desc: "Access to government tenders and exports" }
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100">
              <div className="text-blue-600 mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Documents Section */}
      <section className="mb-16 bg-gray-50 p-8 rounded-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Required <span className="text-blue-600">Documents</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <FaFileAlt className="text-blue-600 mr-2" /> Mandatory Documents
            </h3>
            <ul className="space-y-3">
              {[
                "Passport size photo",
                "PAN Card copy",
                "Aadhaar Card copy",
                "Electricity bill (business premises)",
                "Sale deed or rental agreement"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <FaBuilding className="text-blue-600 mr-2" /> Business Documents
            </h3>
            <ul className="space-y-3">
              {[
                "Form-B (completed application)",
                "Food Safety Management Plan",
                "Manufacturing unit details",
                "NOC from local authority",
                "Partnership deed/Incorporation certificate"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Registration <span className="text-blue-600">Process</span>
        </h2>
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 h-full w-1 bg-blue-100 transform -translate-x-1/2"></div>
          <div className="space-y-12">
            {[
              { icon: <FaSearch className="text-2xl" />, 
                step: "Step 1", 
                title: "Eligibility Check", 
                desc: "Verify if your business qualifies for Central License" },
              { icon: <FaFileAlt className="text-2xl" />, 
                step: "Step 2", 
                title: "Document Preparation", 
                desc: "Gather and organize all required documents" },
              { icon: <FaFileUpload className="text-2xl" />, 
                step: "Step 3", 
                title: "Application Submission", 
                desc: "File Form-B through FSSAI portal" },
              { icon: <MdGppGood className="text-2xl" />, 
                step: "Step 4", 
                title: "Inspection", 
                desc: "FSSAI officials may inspect premises" },
              { icon: <FaClipboardList className="text-2xl" />, 
                step: "Step 5", 
                title: "License Issuance", 
                desc: "Receive your Central Food License" }
            ].map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl mb-4 md:mb-0 shadow-lg">
                  {item.icon}
                </div>
                <div className="md:ml-8 md:w-3/4 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <span className="text-sm font-semibold text-blue-600">{item.step}</span>
                  <h3 className="text-xl font-semibold mt-1 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="mb-16 bg-blue-50 p-8 rounded-2xl border border-blue-200">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Why Choose <span className="text-blue-600"> FORTUNE MULTI SERVICES</span>?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-800">Our Expertise</h3>
            <ul className="space-y-4">
              {[
                "Specialized knowledge of FSSAI regulations",
                "500+ successful Central License applications",
                "Direct liaison with Telangana Food Safety Department",
                "Comprehensive compliance guidance"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 rounded-full p-1 mr-3">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-800">Our Process</h3>
            <ol className="space-y-4 list-decimal list-inside">
              {[
                "Initial consultation to understand your needs",
                "Document collection and verification",
                "Application preparation and submission",
                "Follow-up with authorities",
                "License delivery and compliance briefing"
              ].map((item, index) => (
                <li key={index} className="text-gray-700">
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl p-10 text-white text-center shadow-xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready for Nationwide Food Business?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Get your Central Food License with expert guidance from Hyderabad's leading consultants.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 px-8 rounded-full text-lg transition-all flex items-center justify-center space-x-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span>Call: +91 8919051513</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default CentralFoodLicense;