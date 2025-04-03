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
        <Hero />
        <Services />
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