import BusinessDocumentation from "./BusinessDocumentation";
import CallToAction from "./CallToAction";
import ComprehensiveServices from "./ComprehensiveServices";
import ExpertServices from "./ExpertServices";
import Features from "./Features";
import Hero from "./Hero";
import RegistrationProcess from "./RegistrationProcess";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Intro = () => {
    return (
      <div className="min-h-screen">
        <br/>
        <br/>
        <Hero />
        <Services />
        
        {/* New Our Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Comprehensive Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* PAN Services */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">PAN Card Services</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    New PAN Card Application
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    PAN Card Corrections/Changes
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    PAN Card Reprint for Lost/Damaged
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    PAN Card for Foreign Citizens/NRIs
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    PAN-TAN Linkage Services
                  </li>
                </ul>
              </div>
              
              {/* Business Registration */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Business Registration</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Private Limited Company Registration
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    LLP Registration
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    GST Registration
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    MSME/Udyam Registration
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Import Export Code (IEC) Registration
                  </li>
                </ul>
              </div>
              
              {/* Tax & Compliance */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Tax & Compliance</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Income Tax Return Filing
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    GST Return Filing
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    TDS/TCS Return Filing
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Tax Audit Services
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    ROC Annual Compliance
                  </li>
                </ul>
              </div>
              
              {/* Other Services */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Other Services</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Digital Signature Certificate (DSC)
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    TAN Registration
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    ESI/PF Registration
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    FSSAI Registration/License
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Trademark Registration
                  </li>
                </ul>
              </div>
              
              {/* Documentation */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Documentation</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Business Agreement Drafting
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Legal Notices
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Partnership Deeds
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    MOA/AOA Drafting
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Compliance Documentation
                  </li>
                </ul>
              </div>
              
              {/* Consultation */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Consultation</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Business Startup Consultation
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Tax Planning
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Compliance Advisory
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Financial Planning
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Legal Advisory
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <RegistrationProcess />
        <Features />
        <ComprehensiveServices />
        <ExpertServices />
        <BusinessDocumentation />
        <Testimonials />
        <CallToAction />
      </div>
    );
  };
  
  export default Intro;