import ReusableChart from "./ReusableChart";

function CoinChart({ coin }) {
  const { market_data } = coin;
  const coinChart = market_data.sparkline_7d.price.map((price, index) => {
    return { price, index };
  });

  return (
    <div className="h-[340px] px-1 md:px-4 lg:px-6 py-2 md:py-3 bg-custom-dark-navy-3 rounded-[10px] text-[#fff] text-base md:text-lg">
      <span className="px-2 md:px-0">
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
