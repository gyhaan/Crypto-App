import AreaChart from "../UI/AreaChart";
import BarChart from "../UI/BarChart";
import CoinRow from "../UI/CoinRow";
import TableLegend from "../UI/TableLegend";

function Home() {
  return (
    <>
      <div className="grid grid-cols-2 gap-8 px-[15px]">
        <AreaChart />
        <BarChart />
      </div>
      <TableLegend />
      <CoinRow />
    </>
  );
}

export default Home;
