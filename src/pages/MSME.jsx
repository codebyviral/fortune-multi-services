import UdyamRegistration from "./UdyamRegistration";
import { useEffect } from "react";
const LIC = () => {
    useEffect(()=>{window.scrollTo(0,0)})
    return (
      <div className="min-h-screen">
<UdyamRegistration/>

      </div>
    );
  };
  
  export default LIC;