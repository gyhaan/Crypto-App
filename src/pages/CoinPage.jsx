import { useParams } from "react-router-dom";

import AboutCoin from "../UI/Coin UI/AboutCoin";
import CoinChart from "../UI/Coin UI/CoinChart";
import CoinDetails from "../UI/Coin UI/CoinDetails";
import MarketDetails from "../UI/Coin UI/MarketDetails";

function CoinPage() {
  const { id } = useParams();

  return (
    <div className="px-4 pb-10 pt-2">
      <div className=" flex gap-4 mb-5">
        <CoinDetails />
        <CoinChart />
      </div>
      <MarketDetails />
      <AboutCoin />
    </div>
  );
}

export default CoinPage;
