import AreaChart from "../UI/Home UI/AreaChart";
import BarChart from "../UI/Home UI/BarChart";
import CoinTable from "../UI/Home UI/CoinTable";
import TableLegend from "../UI/Home UI/TableLegend";
import Carousel from "../UI/Home UI/Slider";

function Home() {
  return (
    <>
      <Carousel />
      <div className="grid grid-cols-2 gap-7 px-4">
        <AreaChart />
        <BarChart />
      </div>
      <TableLegend />
      <CoinTable />
    </>
  );
}

export default Home;
