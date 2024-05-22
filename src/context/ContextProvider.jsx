import {
  useInfiniteQuery,
  useQuery,
  keepPreviousData,
} from "@tanstack/react-query";
import { createContext, useContext, useState } from "react";
import {
  fetchChartData,
  fetchCoins,
  fetchSearchedCoins,
} from "../services/apiCoins";

const CoinContext = createContext();

function CoinProvider({ children }) {
  const [currency, setCurrency] = useState("usd");
  const [chartData, setChartData] = useState([]);
  const [coinId, setCoinId] = useState("bitcoin");
  const [days, setDays] = useState(1);

  const { data, fetchNextPage, status, isFetching } = useInfiniteQuery({
    queryKey: ["coins", currency],
    queryFn: ({ pageParam }) => fetchCoins({ pageParam, currency }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => pages.length + 1,
    refetchInterval: 60 * 1000,
    refetchIntervalInBackground: true,
  });

  const { data: coinChart, isFetching: isFetchingCoinChart } = useQuery({
    queryKey: ["charts", coinId, currency, days],
    queryFn: () => fetchChartData(coinId, currency, days),
    placeholderData: keepPreviousData,
    staleTime: Infinity,
  });

  const { data: allCoins, isLoading: isLoadingAllCoins } = useQuery({
    queryKey: ["searchCoin"],
    queryFn: fetchSearchedCoins,
    staleTime: Infinity,
  });

  console.log(allCoins?.find((el) => el.id === "bitcoin"));

  return (
    <CoinContext.Provider
      value={{
        data,
        fetchNextPage,
        status,
        isFetching,
        currency,
        setCurrency,
        coinId,
        setCoinId,
        chartData,
        setChartData,
        coinChart,
        isFetchingCoinChart,
        days,
        setDays,
        allCoins,
        isLoadingAllCoins,
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
