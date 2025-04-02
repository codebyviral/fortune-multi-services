import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutUsPage from "./pages/AboutUsPage";
import ContactForm from "./pages/ContactForm";
import Registrations from "./pages/Registration";
import ProprietorshipPage from "./pages/ProprietorshipPage";
import PVTLTDPage from "./pages/PVTLTDPage";
import PartnershipFirmRegistration from "./pages/PartnershipFirm";
import OPCRegistration from "./pages/OPCRegistration";
import StartupIndiaRegistration from "./pages/StartupRegistration";
import IncomeTaxFiling from "./pages/IncomeTaxFiling";
import UdyamRegistration from "./pages/UdyamRegistration";
import LLPPage from "./pages/LLPPage";
import SocietyPage from "./pages/SocietyPage";

import LabourLicense from "./pages/LabourLicense";

import MunicipalTradeLicense from "./pages/MunicipalTradeLicense";
import NotFound from "./pages/NotFound";


import IncomeTaxAudit from "./pages/IncomeTaxAudit";
import ProfessionalTaxRegistration from "./pages/ProfessionalTaxRegistration";
import GSTRegistration from "./pages/GSTRegistration";
import GSTReturns from "./pages/GSTReturns"

import NotFound from "./pages/NotFound";
import GSTModifications from "./pages/GSTModifications";
import TrademarkRegistration from "./pages/TrademarkRegistration";
import TrademarkRenewal from "./pages/TrademarkRenewal"
import TrademarkOpposition from "./pages/TrademarkOpposition";
import TrademarkObjection from "./pages/TrademarkObjection"
import FSSAILicense from "./pages/FSSAILicense";
import StateFoodLicense from "./pages/StateFoodLicense";
import CentralFoodLicense from "./pages/CentralFoodLicense";
import Intro from "./pages/Intro"
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <br/>
        <br/>
        {/* Main content area */}
        <main className="container mx-auto px-4 py-8">
          <Routes>
         
            <Route path="/registrations" element={<Registrations />} />
            <Route path="/registrations/company" element={<Registrations type="company" />} />
            <Route path="/registrations/government" element={<Registrations type="government" />} />
            <Route path="/our_profile/aboutuspage" element={<AboutUsPage />} />
            <Route path="/our_profile/contact-us" element={<ContactForm />} />
            <Route path="/registrations/company/proprietorship-firm" element={<ProprietorshipPage />} />
            <Route path="/registrations/company/pvt-ltd-registration" element={<PVTLTDPage />} />
            <Route path="/registrations/company/partnership-firm" element={<PartnershipFirmRegistration />} />
            <Route path="/registrations/company/opc-registration" element={<OPCRegistration />} />
            <Route path="/registrations/company/startup-registration" element={<StartupIndiaRegistration />} />
            <Route path="/registrations/company/udyam-registration" element={<UdyamRegistration />} />
            <Route path="/registrations/company/llp-registration" element={<LLPPage />} />
            <Route path="/registrations/company/society-registration" element={<SocietyPage />} />

            <Route path="/registrations/government/labour-license" element={<LabourLicense />} />
            <Route path="/registrations/government/municipal-trade-license" element={<MunicipalTradeLicense />} />


            <Route path="registrations/government/labour-license" element={<LabourLicense />} />

            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
            <Route path="/tax-compliances/services/income-tax-filing" element={<IncomeTaxFiling />}/>
            <Route path="/tax-compliances/services/income-tax-audit" element={<IncomeTaxAudit />}/>
            <Route path="/tax-compliances/services/professional-tax-registration" element={<ProfessionalTaxRegistration />}/>
            <Route path="/gst/services/gst-registration" element={<GSTRegistration />}/>
            <Route path="gst/services/gst-return-filing" element={<GSTReturns />}/>
            <Route path="/gst/services/gst-modifications" element={<GSTModifications />}/>
            <Route path="/trademark/services/trademark-registration" element={<TrademarkRegistration />}/>
            <Route path="/trademark/services/trademark-renewal" element={<TrademarkRenewal />}/>
            <Route path="/trademark/services/trademark-opposition" element={<TrademarkOpposition />}/>
            <Route path="/trademark/services/trademark-objection" element={<TrademarkObjection />}/>
            <Route path="/food-license/fssai/food-license-registration" element={<FSSAILicense />}/>
            <Route path="/food-license/fssai/food-central-license" element={<StateFoodLicense />}/>
            <Route path="/food-license/fssai/food-state-license" element={<CentralFoodLicense />}/>
            <Route path="/" element={<Intro />}/>
            < Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
      {/* add change */}
      <Footer/>
    </Router>
  );
}

export default App;