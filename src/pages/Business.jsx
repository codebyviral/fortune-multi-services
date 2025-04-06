import ProprietorshipPage from "./ProprietorshipPage";
import PVTLTDPage from  "./PVTLTDPage";
import LLPPage from "./LLPPage";
import SocietyPage from "./SocietyPage";
import PartnershipFirm from "./PartnershipFirm";
import OPCRegistration from "./OPCRegistration";
import StartupRegistration from "./StartupRegistration";
import IECCodeRegistration from "./IECCodeRegistration"
const Business = () => {
    return (
      <div className="min-h-screen">

<ProprietorshipPage/>
<PVTLTDPage/>
<LLPPage/>
<SocietyPage/>
<PartnershipFirm/>
<OPCRegistration/>
<StartupRegistration/>
<IECCodeRegistration/>
      </div>
    );
  };
  
  export default Business;