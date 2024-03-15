import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppNav from "./UI/AppNav";
import Global from "./UI/Global";
import AreaChart from "./UI/AreaChart";
import BarChart from "./UI/BarChart";
import TableLegend from "./UI/TableLegend";
import CoinRow from "./UI/CoinRow";

/* function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route />
      </Routes>
    </BrowserRouter>
  );
} */

function App() {
  return (
    <>
      <Global />
      <div className=" max-h-full mx-auto max-w-[1296px] flex flex-col gap-10">
        <AppNav />
        <div className="grid grid-cols-2 gap-8 px-[15px]">
          <AreaChart />
          <BarChart />
        </div>
        <TableLegend />
        <CoinRow />
      </div>
    </>
  );
}

export default App;
