import {
  useInfiniteQuery,
  useQuery,
  keepPreviousData,
  useQueries,
} from "@tanstack/react-query";
import { createContext, useContext, useState } from "react";
import { fetchChartData, fetchCoins } from "../services/apiCoins";

const CoinContext = createContext();

function CoinProvider({ children }) {
  const [currency, setCurrency] = useState("usd");
  const [searchQuery, setSearchQuery] = useState("");
  const [chartData, setChartData] = useState([]);
  const [coinId, setCoinId] = useState(["bitcoin", "ethereum"]);
  const [days, setDays] = useState(1);

  const { data, fetchNextPage, status, isFetching } = useInfiniteQuery({
    queryKey: ["coins", currency],
    queryFn: ({ pageParam }) => fetchCoins({ pageParam, currency }),
    initialPageParam: 0,
    getNextPageParam: (_, pages) => pages.length + 1,
    refetchInterval: 60 * 1000,
    refetchIntervalInBackground: true,
  });

  /*   const { data: coinChart, isFetching: isFetchingCoinChart } = useQuery({
    queryKey: ["charts", coinId, currency, days],
    queryFn: () => fetchChartData(coinId, currency, days),
    placeholderData: keepPreviousData,
    staleTime: Infinity,
  }); */

  const coinChart = useQueries({
    queries: coinId.map((id) => {
      return {
        queryKey: ["chart", id, currency, days],
        queryFn: () => fetchChartData(id, currency, days),
      };
    }),
  });

  console.log(coinChart);

  return (
    <CoinContext.Provider
      value={{
        data,
        fetchNextPage,
        status,
        isFetching,
        currency,
        setCurrency,
        searchQuery,
        setSearchQuery,
        coinId,
        setCoinId,
        chartData,
        setChartData,
        coinChart,
        days,
        setDays,
      }}
    >
      {children}
    </CoinContext.Provider>
  );
}

function useCoin() {
  const context = useContext(CoinContext);
  if (context === undefined)
    throw new Error("Context was used in the wrong place");
  return context;
}

export { CoinProvider, useCoin };
