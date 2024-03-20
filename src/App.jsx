import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Provider from "./Provider/Provider";
import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import CoinPage from "./pages/CoinPage";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <Provider>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="coin/:id" element={<CoinPage />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

/* function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route />
      </Routes>
    </BrowserRouter>
  );
} */

/* function App() {
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
} */
