import IncomeTaxAudit from "./IncomeTaxAudit";
import IncomeTaxFiling from "./IncomeTaxFiling";
import ProfessionalTaxRegistration from "./ProfessionalTaxRegistration"
import { useEffect } from "react";
const Income = () => {
    useEffect(()=>{window.scrollTo(0,0)})
    return (
      <div className="min-h-screen">
<IncomeTaxAudit />
<IncomeTaxFiling />
<ProfessionalTaxRegistration/>
      </div>
    );
  };
  
  export default Income;