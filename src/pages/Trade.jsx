import GHMCRegistration from "./GHMCRegistration"
import MunicipalPage from "./MunicipalPage"
import { useEffect } from "react";
const Trade = () => {
    useEffect(()=>{window.scrollTo(0,0)})
    return (
      <div className="min-h-screen">

<GHMCRegistration/>
<MunicipalPage/>
      </div>
    );
  };
  
  export default Trade;