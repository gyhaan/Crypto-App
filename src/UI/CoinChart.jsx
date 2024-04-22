import { ResponsiveContainer, Area, AreaChart } from "recharts";
import ReusableChart from "./ReusableChart";

function CoinChart({ coin }) {
  const { market_data } = coin;
  const coinChart = market_data.sparkline_7d.price.map((price, index) => {
    return { price, index };
  });

  return (
    <div className="w-[50%] h-[340px] px-6 py-3 bg-custom-dark-navy-3 rounded-[10px] text-[#fff] text-[18px]">
      <span>
        Last 7 Days (
        {market_data.price_change_percentage_7d_in_currency.usd.toFixed(3)}%)
      </span>
      <div className="max-w-[100%] h-[85%] mt-2">
        <ReusableChart
          data={coinChart}
          price_change_percentage_7d_in_currency={
            market_data.price_change_percentage_7d_in_currency
          }
          height={"100%"}
        />
      </div>
    </div>
  );
}

export default CoinChart;
