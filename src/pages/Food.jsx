import FSSAILicense from "./FSSAILicense";
import CentralFoodLicense from "./CentralFoodLicense"
import StateFoodLicense from "./StateFoodLicense"
import { useEffect } from "react";
const Food = () => {
    useEffect(()=>{window.scrollTo(0,0)})
    return (
      <div className="min-h-screen">
<FSSAILicense/>
<CentralFoodLicense/>
<StateFoodLicense/>
      </div>
    );
  };
  
  export default Food;