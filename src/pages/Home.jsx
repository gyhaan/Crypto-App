import AreaCharts from "../UI/AreaCharts";
import BarCharts from "../UI/BarCharts";
import CoinTable from "../UI/CoinTable";
import TableLegend from "../UI/TableLegend";
import Carousel from "../UI/Slider";

function Home() {
  return (
    <>
      <Carousel />
      <div className="grid grid-cols-2 gap-7 px-4">
        <AreaCharts />
        <BarCharts />
      </div>
      <TableLegend />
      <CoinTable />
    </>
  );
}

export default Home;
