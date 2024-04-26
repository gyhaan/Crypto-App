import {
  useInfiniteQuery,
  useQuery,
  keepPreviousData,
} from "@tanstack/react-query";
import { createContext, useContext, useState } from "react";
import { fetchChartData, fetchCoins } from "../services/apiCoins";

const CoinContext = createContext();

function CoinProvider({ children }) {
  const [currency, setCurrency] = useState("usd");
  const [searchQuery, setSearchQuery] = useState("");
  const [chartData, setChartData] = useState([]);
  const [coinId, setCoinId] = useState("bitcoin");

  const { data, fetchNextPage, status, isFetching } = useInfiniteQuery({
    queryKey: ["coins", currency],
    queryFn: ({ pageParam }) => fetchCoins({ pageParam, currency }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => pages.length + 1,
    refetchInterval: 60 * 1000,
    refetchIntervalInBackground: true,
  });

  const { data: coinChart, isFetching: isFetchingCoinChart } = useQuery({
    queryKey: ["charts", coinId],
    queryFn: () => fetchChartData(coinId),
    placeholderData: keepPreviousData,
    staleTime: Infinity,
  });

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
        isFetchingCoinChart,
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
