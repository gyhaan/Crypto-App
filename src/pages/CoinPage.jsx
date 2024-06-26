import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { fetchCoinById } from "../services/apiCoins";

import AboutCoin from "../UI/AboutCoin";
import CoinChart from "../UI/CoinChart";
import CoinDetails from "../UI/CoinDetails";
import MarketDetails from "../UI/MarketDetails";
import Loader from "../UI/Loader";
import Error from "../UI/Error";

function CoinPage() {
  const { id } = useParams();

  const {
    data: coin,
    isLoading,
    status,
  } = useQuery({
    queryKey: ["coin", id],
    queryFn: () => fetchCoinById(id),
  });

  if (isLoading) return <Loader />;

  if (status === "error") return <Error />;

  return (
    <div className="px-1 md:px-4 pb-10 pt-2">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 mb-5">
        <CoinDetails coin={coin} />
        <CoinChart coin={coin} />
      </div>
      <MarketDetails coin={coin} />
      {coin.description.en && <AboutCoin coin={coin} />}
    </div>
  );
}

export default CoinPage;
