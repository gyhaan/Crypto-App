import { useInfiniteQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import { fetchCoins } from "../services/apiCoins";

const CoinContext = createContext();

function CoinProvider({ children }) {
  const { data, fetchNextPage, status, isFetching } = useInfiniteQuery({
    queryKey: ["coins"],
    queryFn: fetchCoins,
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => pages.length + 1,
  });
  return (
    <CoinContext.Provider value={{ data, fetchNextPage, status, isFetching }}>
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
