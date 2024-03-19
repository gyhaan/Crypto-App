import ProgressBar from "./ProgressBar";
import {
  roundToTwoDecimalPlaces,
  formatNumberWithK,
} from "../helper/roundtoOne";

function CoinRow({ coin }) {
  const {
    name,
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
  } = coin;
  return (
    <div className="bg-custom-dark-navy text-[#fff] flex justify-around items-center h-20 text-[14px] p-5 rounded-lg mb-4">
      <span className="max-w-[3%] w-full mr-2 px-1">{market_cap_rank}</span>
      <div className="max-w-[15%] w-full flex px-1 ml-[-12px]">
        <img src={image} alt="" className="w-[20px] h-auto" />
        <span className="px-3">{name}</span>
      </div>
      <span className="max-w-[8%] w-full px-1 ml-[-12px]">
        $ {formatNumberWithK(current_price)}
      </span>
      <div className=" max-w-[7%] w-full flex ml-[-12px] pr-2">
        {price_change_percentage_1h_in_currency > 0 && (
          <img src="/chevron-up.svg" alt="" />
        )}
        {price_change_percentage_1h_in_currency < 0 && (
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
        {price_change_percentage_24h_in_currency > 0 && (
          <img src="/chevron-up.svg" alt="" />
        )}
        {price_change_percentage_24h_in_currency < 0 && (
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
        {price_change_percentage_7d_in_currency > 0 && (
          <img src="/chevron-up.svg" alt="" />
        )}
        {price_change_percentage_7d_in_currency < 0 && (
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
      <span className="max-w-[14%] w-full">Chart</span>
    </div>
  );
}

export default CoinRow;
