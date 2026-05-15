import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
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

// HEAVY DUTY POPUP AD - BOLD & IN YOUR FACE
const PopupAd = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, []);

  return (
    <div 
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.95)",
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Impact', 'Arial Black', sans-serif",
      }}
    >
      {/* MAIN POPUP BOX - HEAVY BORDER, DARK THEME */}
      <div
        style={{
          width: "90%",
          maxWidth: "550px",
          backgroundColor: "#0a0a0a",
          border: "8px solid #ffcc00",
          borderRadius: "0px",
          boxShadow: "20px 20px 0px rgba(0,0,0,0.8), inset 0 0 20px rgba(255,204,0,0.3)",
          position: "relative",
          animation: "popIn 0.3s cubic-bezier(0.34, 1.2, 0.64, 1)",
        }}
      >
        {/* CLOSE BUTTON - BOLD & CHUNKY */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "-15px",
            right: "-15px",
            width: "45px",
            height: "45px",
            backgroundColor: "#ff3300",
            color: "white",
            border: "3px solid white",
            borderRadius: "0px",
            fontSize: "28px",
            fontWeight: "bold",
            cursor: "pointer",
            zIndex: 10,
            fontFamily: "monospace",
            boxShadow: "3px 3px 0px black",
          }}
        >
          ✕
        </button>

        {/* CONTENT AREA */}
        <div style={{ padding: "30px 25px", textAlign: "center" }}>
          {/* BADGE */}
          <div
            style={{
              backgroundColor: "#ffcc00",
              color: "#000",
              display: "inline-block",
              padding: "8px 18px",
              fontWeight: "bold",
              fontSize: "14px",
              letterSpacing: "2px",
              marginBottom: "25px",
              fontFamily: "monospace",
            }}
          >
            🔥 LIMITED TIME OFFER 🔥
          </div>

          {/* MAIN HEADLINE */}
          <h1
            style={{
              fontSize: "42px",
              fontWeight: "bold",
              margin: "10px 0",
              color: "#ffcc00",
              textTransform: "uppercase",
              letterSpacing: "2px",
              textShadow: "4px 4px 0px #8b0000",
              fontFamily: "'Impact', 'Arial Black', sans-serif",
            }}
          >
            WEBSITE<br />DEVELOPMENT
          </h1>

          {/* SUBHEADLINE */}
          <p
            style={{
              fontSize: "20px",
              color: "#ffffff",
              marginTop: "15px",
              fontWeight: "bold",
              backgroundColor: "#1a1a1a",
              display: "inline-block",
              padding: "8px 20px",
              borderLeft: "5px solid #ffcc00",
              fontFamily: "'Courier New', monospace",
            }}
          >
            CONTACT THE DEVELOPER
          </p>

          {/* PHONE NUMBER - BIG & BOLD */}
          <div style={{ margin: "25px 0" }}>
            <a
              href="tel:8328142226"
              style={{
                fontSize: "52px",
                fontWeight: "bold",
                color: "#ffcc00",
                textDecoration: "none",
                backgroundColor: "#1f1f1f",
                padding: "10px 20px",
                display: "inline-block",
                border: "2px solid #ffcc00",
                letterSpacing: "4px",
                fontFamily: "'Impact', 'Arial Black', sans-serif",
              }}
            >
              8328142226
            </a>
          </div>

          {/* DIVIDER */}
          <div
            style={{
              height: "3px",
              background: "#ffcc00",
              width: "80px",
              margin: "20px auto",
            }}
          />

          {/* MESSAGE - BOLD TEXT */}
          <p
            style={{
              fontSize: "18px",
              color: "#dddddd",
              fontWeight: "bold",
              textTransform: "uppercase",
              fontFamily: "'Courier New', monospace",
              backgroundColor: "#000",
              padding: "12px",
              border: "1px solid #333",
            }}
          >
            ⚡ PRESENT WEBSITE ALSO DEVELOPED BY HIM ⚡
          </p>

          {/* CALL TO ACTION BUTTON */}
          <button
            onClick={onClose}
            style={{
              backgroundColor: "#ffcc00",
              color: "#000",
              border: "none",
              padding: "14px 30px",
              fontSize: "18px",
              fontWeight: "bold",
              marginTop: "20px",
              cursor: "pointer",
              textTransform: "uppercase",
              fontFamily: "'Impact', sans-serif",
              letterSpacing: "1px",
              width: "100%",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#ffdd33";
              e.target.style.transform = "scale(0.98)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#ffcc00";
              e.target.style.transform = "scale(1)";
            }}
          >
            💪 CONTINUE TO WEBSITE 💪
          </button>
        </div>
      </div>

      {/* KEYFRAMES STYLE */}
      <style>{`
        @keyframes popIn {
          0% {
            transform: scale(0.7);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup IMMEDIATELY when website loads - heavy style
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50" style={{ position: "relative" }}>
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

        {/* HEAVY DUTY POPUP */}
        {showPopup && <PopupAd onClose={handleClosePopup} />}
      </div>

      <Footer />
    </Router>
  );
}

export default App;
