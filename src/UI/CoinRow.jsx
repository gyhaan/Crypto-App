import { AreaChart, Area, ResponsiveContainer, YAxis, Tooltip } from "recharts";

import ProgressBar from "./ProgressBar";
import {
  roundToTwoDecimalPlaces,
  formatNumberWithK,
} from "../helper/roundtoOne";

function CoinRow({ coin }) {
  console.log(coin);
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
      if (index % 3 === 0) return price;
    });

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
      <div className="max-w-[14%] w-full">
        <ResponsiveContainer width="100%" height={60}>
          <AreaChart
            data={coinChart}
            margin={{ top: 10, right: 10, left: 10, bottom: 3 }}
          >
            <defs>
              <linearGradient id="positiveGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#01F1E3" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#01F1E3" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="negativeGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FE2264" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#FE2264" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              dataKey="price"
              stroke={
                price_change_percentage_7d_in_currency > 0
                  ? "#01F1E3"
                  : "#fe2264"
              }
              fill={
                price_change_percentage_7d_in_currency > 0
                  ? "url(#positiveGradient)"
                  : "url(#negativeGradient)"
              }
              strokeWidth={2}
              type="monotone"
            />
            <YAxis type="number" domain={["dataMin", "dataMax"]} hide={true} />
          </AreaChart>
          <Tooltip />
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default CoinRow;
