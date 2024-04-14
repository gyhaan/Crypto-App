import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { fetchCoinById } from "../services/apiCoins";

import AboutCoin from "../UI/AboutCoin";
import CoinChart from "../UI/CoinChart";
import CoinDetails from "../UI/CoinDetails";
import MarketDetails from "../UI/MarketDetails";
import Loader from "../UI/Loader";

function CoinPage() {
  const { id } = useParams();

  const {
    data: coin,
    isLoading,
    status,
  } = useQuery({
    queryKey: ["coin", { id }],
    queryFn: () => fetchCoinById(id),
  });

  if (isLoading) return <Loader />;

  return (
    <div className="px-4 pb-10 pt-2">
      <div className="flex gap-4 mb-5">
        <CoinDetails coin={coin} />
        <CoinChart coin={coin} />
      </div>
      <MarketDetails coin={coin} />
      <AboutCoin coin={coin} />
    </div>
  );
}

export default CoinPage;
