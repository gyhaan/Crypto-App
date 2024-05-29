import {
  BarChart,
  Bar,
  ResponsiveContainer,
  YAxis,
  XAxis,
  Tooltip,
} from "recharts";
import { useCoin } from "../context/ContextProvider";
import { formatTime } from "../helper/formatTime";
import { currencyFormatter } from "../helper/formatNumbers";

function BarCharts() {
  const { coinChart, isFetchingCoinChart } = useCoin();
  const data = coinChart?.total_volumes
    ?.map((total_volumes) => {
      return {
        time: formatTime(total_volumes[0]),
        Volume: total_volumes[1],
      };
    })
    .filter((_, index) => {
      return index % 14 === 0;
    });

  return (
    <div className="bg-custom-dark-navy-3 w-[100%] h-[404px] rounded-[10px]  px-4 md:px-7 pt-4 pb-5 md:pb-8 flex flex-col justify-between">
      <h1 className="text-2xl text-[#fff] tracking-tight mb-3">
        Volume Traded
        <span className="text-[20px]">
          {isFetchingCoinChart ? "(Loading...)" : null}
        </span>
      </h1>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <Bar dataKey="Volume" fill="#627EEA" />
          <YAxis hide={true} />
          <XAxis dataKey="time" hide={true} />
          <Tooltip content={CustomTooltip} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function CustomTooltip({ active, payload, label }) {
  const { currency } = useCoin();
  if (active && payload && payload.length) {
    return (
      <div className="bg-custom-dark-navy-2 py-3 px-6 border-[#fff] border rounded-md text-[#fff]">
        <p>On {label}:</p>
        <p>
          A total of{" "}
          <span className="font-bold text-custom-blue-violet">
            {currencyFormatter(currency)}
            {payload[0].value.toLocaleString()}
          </span>{" "}
          transactions were executed.
        </p>
      </div>
    );
  }
}

export default BarCharts;
