import IncomeTaxAudit from "./IncomeTaxAudit";
import IncomeTaxFiling from "./IncomeTaxFiling";
import ProfessionalTaxRegistration from "./ProfessionalTaxRegistration"
const Income = () => {
    return (
      <div className="min-h-screen">
<IncomeTaxAudit />
<IncomeTaxFiling />
<ProfessionalTaxRegistration/>
      </div>
    );
  };
  
  export default Income;