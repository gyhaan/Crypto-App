import { useCoin } from "../context/ContextProvider";
import ListElementPortfolio from "./ListElementPortfolio";

function CoinListPortfolio({ searchQuery, setSearchQuery }) {
  const { allCoins } = useCoin();
  return (
    <ul className="w-60 max-w-60 rounded-md z-10 absolute bg-custom-dark-navy max-h-80 overflow-y-scroll list mt-3">
      {allCoins
        .filter((coin) => {
          if (!searchQuery.name) return coin;
          return coin.name
            .toLowerCase()
            .includes(searchQuery.name.toLowerCase());
        })
        .map((coin) => (
          <ListElementPortfolio
            key={coin.id}
            coinElement={coin}
            setSearchQuery={setSearchQuery}
          />
        ))}
    </ul>
  );
}

export default CoinListPortfolio;
