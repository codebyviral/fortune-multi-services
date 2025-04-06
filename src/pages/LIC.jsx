import MunicipalTradeLicensePage from "./MunicipalPage";
import { useEffect } from "react";
const LIC = () => {
    useEffect(()=>{window.scrollTo(0,0)})
    return (
      <div className="min-h-screen">
<MunicipalTradeLicensePage/>

      </div>
    );
  };
  
  export default LIC;