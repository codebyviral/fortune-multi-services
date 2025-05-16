import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutUsPage from "./pages/AboutUsPage";
import Food from "./pages/Food";
import ContactForm from "./pages/ContactForm";
import IEC from "./pages/IEC";
import Registrations from "./pages/Registration";
import ProprietorshipPage from "./pages/ProprietorshipPage";
import PVTLTDPage from "./pages/PVTLTDPage";
import GSTPage from "./pages/GSTPage";
import IECCodeRegistration from "./pages/IECCodeRegistration";
import PartnershipFirmRegistration from "./pages/PartnershipFirm";
import OPCRegistration from "./pages/OPCRegistration";
import StartupIndiaRegistration from "./pages/StartupRegistration";
import IncomeTaxFiling from "./pages/IncomeTaxFiling";
import UdyamRegistration from "./pages/UdyamRegistration";
import LLPPage from "./pages/LLPPage";
import MunicipalPage from "./pages/MunicipalPage";
import SocietyPage from "./pages/SocietyPage";
import PFRegistration from "./pages/PFRegistration";
import Income from "./pages/Income";
import LabourLicense from "./pages/LabourLicense";
import GHMCRegistration from "./pages/GHMCRegistration";
import ISORegistration from "./pages/ISORegistration";
import ESIRegistration from "./pages/ESIRegistration";
import IncomeTaxAudit from "./pages/IncomeTaxAudit";
import ProfessionalTaxRegistration from "./pages/ProfessionalTaxRegistration";
import GSTRegistration from "./pages/GSTRegistration";
import GSTReturns from "./pages/GSTReturns";
import NotFound from "./pages/NotFound";
import GSTModifications from "./pages/GSTModifications";
import TrademarkRegistration from "./pages/TrademarkRegistration";
import TrademarkRenewal from "./pages/TrademarkRenewal";
import TrademarkOpposition from "./pages/TrademarkOpposition";
import TrademarkObjection from "./pages/TrademarkObjection";
import FSSAILicense from "./pages/FSSAILicense";
import StateFoodLicense from "./pages/StateFoodLicense";
import CentralFoodLicense from "./pages/CentralFoodLicense";
import Intro from "./pages/Intro";
import WeboriumServices from "./components/WeboriumServices";
import Services from "./pages/Services";
import PanCard from "./pages/PanCard";
import AdharAddress from "./pages/AdharAdress";
import PassPort from "./pages/PassPort";
import Business from "./pages/Business";
import Trade from "./pages/Trade";
import LIC from "./pages/LIC";
import MSME from "./pages/MSME";
import TradeMark from "./pages/TradeMark";
import Socity from "./pages/Socity";
import { Helmet } from "react-helmet";

import ScamAlert from "./components/ScamAlert";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Helmet>
          <title>
            Fortune Multi Services | Business, Finance & Digital Experts
          </title>
          <meta
            name="description"
            content="Fortune Multi Services offers expert solutions in company registration, GST filing, tax, legal services, and more."
          />
          <meta
            name="keywords"
            content="Fortune Multi Services, company registration, GST, tax filing, legal services, digital services"
          />
          <meta name="author" content="Fortune Multi Services" />

          {/* Social Media Preview (Open Graph) */}
          <meta property="og:title" content="Fortune Multi Services" />
          <meta
            property="og:description"
            content="Trusted partner for all your business and digital service needs."
          />
          <meta
            property="og:image"
            content="https://fortunemultiservices.in/preview-image.png"
          />
          <meta property="og:url" content="https://fortunemultiservices.in/" />
          <meta property="og:type" content="website" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Fortune Multi Services" />
          <meta
            name="twitter:description"
            content="Comprehensive services for business registration, GST, tax, and compliance."
          />
          <meta
            name="twitter:image"
            content="https://fortunemultiservices.in/preview-image.png"
          />

          <link rel="canonical" href="https://fortunemultiservices.in/" />
        </Helmet>

        <Header />
        <br />
        <br />

        <br />
        <br />
        {/* Main content area */}
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/msme-registration" element={<MSME />} />
            <Route path="/labour-license" element={<LIC />} />
            <Route path="/income-tax-filing" element={<Income />} />
            <Route path="/iec-registration" element={<IEC />} />
            <Route path="/Services/passport" element={<PassPort />} />
            <Route path="/food-registration" element={<Food />} />
            <Route path="/trademark-registration" element={<TradeMark />} />
            <Route path="/society-registration" element={<Socity />} />
            <Route path="//trade-license" element={<Trade />} />
            <Route path="/business-registration" element={<Business />} />
            <Route path="/gst-registration" element={<GSTPage />} />
            <Route path="/Services/xx" element={<Business />} />
            <Route
              path="/Services/-adhar-card-update-"
              element={<AdharAddress />}
            />
            <Route path="/registrations" element={<Registrations />} />
            <Route
              path="/registrations/company"
              element={<Registrations type="company" />}
            />
            <Route
              path="/registrations/government"
              element={<Registrations type="government" />}
            />
            <Route path="/our_profile/aboutuspage" element={<AboutUsPage />} />
            <Route path="/Services/-pan-card-" element={<PanCard />} />
            <Route
              path="/products/subscribe-save-product/"
              element={<AboutUsPage />}
            />
            <Route path="/our_profile/contact-us" element={<ContactForm />} />
            <Route path="/contact-us/" element={<ContactForm />} />
            <Route
              path="/registrations/company/proprietorship-firm"
              element={<ProprietorshipPage />}
            />
            <Route
              path="/registrations/company/pvt-ltd-registration"
              element={<PVTLTDPage />}
            />
            <Route
              path="/registrations/company/partnership-firm"
              element={<PartnershipFirmRegistration />}
            />
            <Route
              path="/registrations/company/opc-registration"
              element={<OPCRegistration />}
            />
            <Route
              path="/registrations/company/startup-india-registration"
              element={<StartupIndiaRegistration />}
            />
            <Route
              path="/registrations/company/udyam-(msme)-registration"
              element={<UdyamRegistration />}
            />
            <Route
              path="/registrations/company/llp-registration"
              element={<LLPPage />}
            />
            <Route
              path="/registrations/company/society-registration"
              element={<SocietyPage />}
            />
            <Route
              path="/registrations/company/iec-code-registration"
              element={<IECCodeRegistration />}
            />
            <Route
              path="/registrations/company/pf-registration"
              element={<PFRegistration />}
            />
            <Route
              path="/registrations/company/municipal-trade-license"
              element={<MunicipalPage />}
            />
            <Route
              path="/registrations/company/labour-license"
              element={<LabourLicense />}
            />
            <Route path="*" element={<NotFound />} />
            <Route
              path="/tax-compliances/services/income-tax-filing"
              element={<IncomeTaxFiling />}
            />
            <Route
              path="/tax-compliances/services/income-tax-audit"
              element={<IncomeTaxAudit />}
            />
            <Route
              path="/tax-compliances/services/professional-tax-registration"
              element={<ProfessionalTaxRegistration />}
            />
            <Route
              path="/gst/services/gst-registration"
              element={<GSTRegistration />}
            />
            <Route
              path="gst/services/gst-return-filing"
              element={<GSTReturns />}
            />
            <Route
              path="/gst/services/gst-modifications"
              element={<GSTModifications />}
            />
            <Route
              path="/trademark/services/trademark-registration"
              element={<TrademarkRegistration />}
            />
            <Route
              path="/trademark/services/trademark-renewal"
              element={<TrademarkRenewal />}
            />
            <Route
              path="/trademark/services/trademark-opposition"
              element={<TrademarkOpposition />}
            />
            <Route
              path="/trademark/services/trademark-objection"
              element={<TrademarkObjection />}
            />
            <Route
              path="/food-license/fssai/food-license-registration"
              element={<FSSAILicense />}
            />
            <Route
              path="/products/product-multiple-subscription-options/"
              element={<FSSAILicense />}
            />
            <Route
              path="/food-license/fssai/food-central-license"
              element={<StateFoodLicense />}
            />
            <Route
              path="/food-license/fssai/food-state-license"
              element={<CentralFoodLicense />}
            />
            <Route
              path="/products/simple-physical-product/"
              element={<CentralFoodLicense />}
            />
            <Route
              path="/registrations/company/ghmc-trade-license"
              element={<GHMCRegistration />}
            />
            <Route
              path="/registrations/company/iso-registration"
              element={<ISORegistration />}
            />
            <Route
              path="/registrations/company/esi-registration"
              element={<ESIRegistration />}
            />
            <Route path="/home" element={<Intro />} />
            <Route path="/" element={<Intro />} />
            <Route path="/WEBORIUM/weborium" element={<WeboriumServices />} />
            <Route path="/shop/" element={<WeboriumServices />} />
            <Route path="/services" element={<Services />} />
            <Route path="*" element={<NotFound />} />
            <Route
              path="/products/simple-digital-product/"
              element={<Services />}
            />
          </Routes>
        </main>
      </div>
      {/* add change */}
      <Footer />
    </Router>
  );
}

export default App;
