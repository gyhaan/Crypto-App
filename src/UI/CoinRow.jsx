import { Link } from "react-router-dom";

import ProgressBar from "./ProgressBar";
import ReusableChart from "./ReusableChart";
import { useCoin } from "../context/ContextProvider";

import {
  roundToTwoDecimalPlaces,
  formatNumberWithK,
  currencyFormatter,
} from "../helper/formatNumbers";

function CoinRow({ coin }) {
  const { currency } = useCoin();
  const {
    name,
    id,
    image,
    current_price,
    price_change_percentage_1h_in_currency,
    price_change_percentage_24h_in_currency,
    price_change_percentage_7d_in_currency,
    market_cap_rank,
    total_volume,
    market_cap,
    circulating_supply,
    total_supply,
    sparkline_in_7d,
  } = coin;

  const coinChart = sparkline_in_7d.price
    .map((price, index) => {
      return {
        price,
        index,
      };
    })
    .filter((price, index) => {
      if ((index + 1) % 2 === 0) return price;
    });

  return (
    <Link to={`coin/${id}`}>
      <div className="bg-custom-dark-navy text-white flex justify-around items-center h-20 text-[14px] p-5 rounded-lg mb-4 hover:border-[2px] hover:border-[#fff] hover:border-opacity-20">
        <span className="max-w-[3%] w-full mr-2 px-1">{market_cap_rank}</span>
        <div className="max-w-[15%] w-full flex px-1 ml-[-12px]">
          <img src={image} alt="" className="w-[20px] h-auto" />
          <span className="px-3">{name}</span>
        </div>
        <span className="max-w-[8%] w-full px-1 ml-[-12px]">
          {currencyFormatter(currency)} {formatNumberWithK(current_price)}
        </span>
        <div className=" max-w-[7%] w-full flex ml-[-12px] pr-2">
          {price_change_percentage_1h_in_currency > 0 ? (
            <img src="/chevron-up.svg" alt="" />
          ) : (
            <img src="/chevron-down.svg" alt="" />
          )}

          <span
            style={{
              color:
                price_change_percentage_1h_in_currency > 0
                  ? "#01F1E3"
                  : "#FE2264",
            }}
          >
            {roundToTwoDecimalPlaces(price_change_percentage_1h_in_currency)}%
          </span>
        </div>
        <div className=" max-w-[7%] w-full flex  pr-2">
          {price_change_percentage_24h_in_currency > 0 ? (
            <img src="/chevron-up.svg" alt="" />
          ) : (
            <img src="/chevron-down.svg" alt="" />
          )}

          <span
            style={{
              color:
                price_change_percentage_24h_in_currency > 0
                  ? "#01F1E3"
                  : "#FE2264",
            }}
          >
            {roundToTwoDecimalPlaces(price_change_percentage_24h_in_currency)}%
          </span>
        </div>
        <div className=" max-w-[7%] w-full flex  pr-2">
          {price_change_percentage_7d_in_currency > 0 ? (
            <img src="/chevron-up.svg" alt="" />
          ) : (
            <img src="/chevron-down.svg" alt="" />
          )}
          <span
            style={{
              color:
                price_change_percentage_7d_in_currency > 0
                  ? "#01F1E3"
                  : "#FE2264",
            }}
          >
            {roundToTwoDecimalPlaces(price_change_percentage_7d_in_currency)}%
          </span>
        </div>
        <div className="max-w-[19%] w-full px-1">
          <ProgressBar
            color={{ bright: "#6374C3", background: "#3D4673" }}
            first={total_volume}
            second={market_cap}
          />
        </div>
        <div className="max-w-[19%] w-full px-1">
          <ProgressBar
            color={{ bright: "#F7931A", background: "#724A20" }}
            first={circulating_supply}
            second={total_supply}
          />
        </div>
        <div className="max-w-[14%] w-full">
          <ReusableChart
            data={coinChart}
            price_change_percentage_7d_in_currency={
              price_change_percentage_7d_in_currency
            }
            boolean={false}
          />
        </div>
      </div>
    </Link>
  );
}

export default CoinRow;
