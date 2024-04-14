import { useInfiniteQuery } from "@tanstack/react-query";
import { createContext, useContext, useState } from "react";
import { fetchCoins } from "../services/apiCoins";

const CoinContext = createContext();

function CoinProvider({ children }) {
  const [currency, setCurrency] = useState("usd");

  const { data, fetchNextPage, status, isFetching, refetch, isRefetching } =
    useInfiniteQuery({
      queryKey: ["coins", { currency }],
      queryFn: ({ pageParam }) => fetchCoins({ pageParam, currency }),
      initialPageParam: 0,
      getNextPageParam: (lastPage, pages) => pages.length + 1,
      refetchInterval: 60 * 1000,
      refetchIntervalInBackground: true,
    });

  return (
    <CoinContext.Provider
      value={{
        data,
        fetchNextPage,
        status,
        isFetching,
        refetch,
        isRefetching,
        currency,
        setCurrency,
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
