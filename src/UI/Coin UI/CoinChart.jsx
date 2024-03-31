import { ResponsiveContainer, Area, AreaChart } from "recharts";

function CoinChart() {
  return (
    <div className="w-[50%] h-[340px] px-6 py-3 bg-custom-dark-navy-3 rounded-[10px] text-[#fff] text-[18px]">
      <span>Last 7 Days</span>
      <div className="max-w-[100%] h-[85%] mt-2">
        <ResponsiveContainer width="100%">
          <AreaChart>
            <Area></Area>
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default CoinChart;
