import { useCoin } from "../context/ContextProvider";
import { Area, AreaChart, ResponsiveContainer, Tooltip, YAxis } from "recharts";
import { formatTime } from "../helper/formatTime";
import { currencyFormatter } from "../helper/formatNumbers";

function AreaCharts() {
  const { coinChart, isFetchingCoinChart } = useCoin();
  const data = coinChart?.prices
    ?.map((prices) => {
      return {
        time: formatTime(prices[0]),
        price: prices[1],
      };
    })
    .filter((_, index) => {
      return index % 4 === 0;
    });

  return (
    <div className="bg-[#191932] w-[100%] h-[404px] rounded-[10px] px-4 md:px-7 pt-4 pb-5 md:pb-8 flex flex-col justify-between text-[#fff]">
      <h1 className="text-2xl tracking-tight mb-3">
        Price Changes
        <span className="text-[20px]">
          {isFetchingCoinChart ? "  (Loading...)" : null}
        </span>
      </h1>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="dataGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="20%" stopColor="#627EEA" stopOpacity={0.9} />
              <stop offset="100%" stopColor="#627EEA" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            dataKey="price"
            stroke="#627EEA"
            fill="url(#dataGradient)"
            type="monotone"
            strokeWidth={2}
          />
          <YAxis type="number" domain={["dataMin", "dataMax"]} hide={true} />
          <Tooltip content={CustomTooltip} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

function CustomTooltip({ active, payload, label }) {
  const { currency } = useCoin();
  if (active && payload && payload.length) {
    return (
      <div className="bg-custom-dark-navy-2 py-3 px-6 border-[#fff] border rounded-md">
        <p>On {payload[0].payload.time}:</p>
        <p>
          The price recorded at{" "}
          <span className="font-bold text-custom-blue-violet">
            {currencyFormatter(currency)}
            {payload[0].value.toLocaleString(undefined, {
              maximumFractionDigits: 10,
            })}
          </span>
        </p>
      </div>
    );
  }
}

export default AreaCharts;
