import CoinRow from "../UI/CoinRow";
import { useCoin } from "../context/ContextProvider";
import Loader from "./Loader";

function CoinTable() {
  const { data, status, isFetching, fetchNextPage } = useCoin();

  if (status === "error") {
    return (
      <h1 className="text-[#fff] mx-auto w-fit my-10 text-[28px]">
        ⚠️Failed to fetch
      </h1>
    );
  }

  const coinContent = data?.pages.map((coins) =>
    coins.map((coin) => <CoinRow key={coin.id} coin={coin} />)
  );
  return (
    <div>
      {coinContent}
      {data && !isFetching && (
        <button
          onClick={() => fetchNextPage()}
          className="block w-fit bg-[#fff] px-8 py-3 text-custom-blue-violet rounded-md my-5 mx-auto"
        >
          Load More
        </button>
      )}
      {isFetching && <Loader />}
    </div>
  );
}

export default CoinTable;
