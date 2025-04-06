import TrademarkRegistration from "./TrademarkRegistration"
import TrademarkObjection from "./TrademarkObjection"
import TrademarkOpposition from "./TrademarkOpposition"
import TrademarkRenewal from "./TrademarkRenewal"
import { useEffect } from "react"
const TradeMark = () => {
    useEffect(()=>{window.scrollTo(0,0)})
    return (
      <div className="min-h-screen">

<TrademarkRegistration/>
<TrademarkObjection/>
<TrademarkOpposition/>
<TrademarkRenewal/>
      </div>
    );
  };
  
  export default TradeMark;