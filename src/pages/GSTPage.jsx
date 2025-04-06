import GSTRegistration from "./GSTRegistration"
import GSTModifications from "./GSTModifications"
import GSTReturns from "./GSTReturns"
import { useEffect } from "react";
const GSTPage = () => {
    useEffect(()=>{window.scrollTo(0,0)})
    return (
      <div className="min-h-screen">
<GSTRegistration/>
<GSTReturns/>
<GSTModifications/>

      </div>
    );
  };
  
  export default GSTPage;