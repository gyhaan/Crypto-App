import AreaCharts from "../UI/AreaCharts";
import BarCharts from "../UI/BarCharts";
import CoinTable from "../UI/CoinTable";
import TableLegend from "../UI/TableLegend";
import Carousel from "../UI/Slider";
import TabButtons from "../UI/TabButtons";
import BackToTopButton from "../UI/BackToTopButton";

function Home() {
  return (
    <>
      <Carousel />
      <div className="grid grid-cols-1 gap-7 lg:grid-cols-2 px-2 md:px-0">
        <AreaCharts />
        <BarCharts />
      </div>
      <TabButtons />
      <TableLegend />
      <CoinTable />
      <BackToTopButton />
    </>
  );
}

export default Home;
