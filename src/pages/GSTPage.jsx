import GSTRegistration from "./GSTRegistration"
import GSTModifications from "./GSTModifications"
import GSTReturns from "./GSTReturns"
const GSTPage = () => {
    return (
      <div className="min-h-screen">
<GSTRegistration/>
<GSTReturns/>
<GSTModifications/>

      </div>
    );
  };
  
  export default GSTPage;