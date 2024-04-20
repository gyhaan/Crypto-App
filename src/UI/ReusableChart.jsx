import { AreaChart, Area, ResponsiveContainer, YAxis, Tooltip } from "recharts";
import { useCoin } from "../context/ContextProvider";

function ReusableChart({
  data,
  price_change_percentage_7d_in_currency,
  boolean = true,
  height = 60,
}) {
  const { currency } = useCoin();
  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart
        data={data}
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
            (price_change_percentage_7d_in_currency?.[currency] ||
              price_change_percentage_7d_in_currency) > 0
              ? "#01F1E3"
              : "#fe2264"
          }
          fill={
            (price_change_percentage_7d_in_currency?.[currency] ||
              price_change_percentage_7d_in_currency) > 0
              ? "url(#positiveGradient)"
              : "url(#negativeGradient)"
          }
          strokeWidth={2}
          type="monotone"
        />
        <YAxis type="number" domain={["dataMin", "dataMax"]} hide={true} />
        {boolean && <Tooltip content={<CustomTooltip />} />}
      </AreaChart>
    </ResponsiveContainer>
  );
}

function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-custom-dark-navy-2 py-3 px-6 border-[#fff] border rounded-md">
        <p>Price: ${payload[0].value}</p>
      </div>
    );
  }
}

export default ReusableChart;
