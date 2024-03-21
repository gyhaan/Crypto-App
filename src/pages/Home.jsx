import AreaChart from "../UI/AreaChart";
import BarChart from "../UI/BarChart";
import CoinTable from "../UI/CoinTable";
import TableLegend from "../UI/TableLegend";

function Home() {
  return (
    <>
      <div className="grid grid-cols-2 gap-8">
        <AreaChart />
        <BarChart />
      </div>
      <TableLegend />
      <CoinTable />
    </>
  );
}

export default Home;
