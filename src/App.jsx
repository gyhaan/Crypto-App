import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useEffect } from "react";

import Provider from "./Provider/Provider";
import { CoinProvider } from "./context/ContextProvider";
import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import CoinPage from "./pages/CoinPage";
import PageNotFound from "./pages/PageNotFound";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.startsWith("/coin/")) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Provider>
      <ReactQueryDevtools initialIsOpen={false} />
      <CoinProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="coin/:id" element={<CoinPage />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <ScrollToTop />
        </BrowserRouter>
      </CoinProvider>
    </Provider>
  );
}

export default App;
