import IECCodeRegistration from "./IECCodeRegistration";
import ESIRegistration from "./ESIRegistration";
import { useEffect } from "react";
const IEC = () => {
    useEffect(()=>{window.scrollTo(0,0)})
    return (
      <div className="min-h-screen">
<IECCodeRegistration/>
<ESIRegistration/>
      </div>
    );
  };
  
  export default IEC;