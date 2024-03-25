import AreaChart from "../UI/AreaChart";
import BarChart from "../UI/BarChart";
import CoinTable from "../UI/CoinTable";
import TableLegend from "../UI/TableLegend";
import Carousel from "../UI/Slider";

function Home() {
  return (
    <>
      <Carousel />
      <div className="grid grid-cols-2 gap-8 px-4">
        <AreaChart />
        <BarChart />
      </div>
      <TableLegend />
      <CoinTable />
    </>
  );
}

export default Home;
