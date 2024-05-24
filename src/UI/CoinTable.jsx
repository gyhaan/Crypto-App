import CoinRow from "./CoinRow";
import { useCoin } from "../context/ContextProvider";
import Loader from "./Loader";
import Error from "./Error";

function CoinTable() {
  const { data: coins, status, isFetching, fetchNextPage } = useCoin();

  if (status === "error") return <Error />;

  const coinContent = coins?.pages.map((coins) =>
    coins.map((coin) => <CoinRow key={coin.id} coin={coin} />)
  );

  return (
    <div className="px-2 mb-10">
      {coinContent}
      {coins && !isFetching && coins?.pages.length < 4 && (
        <button
          onClick={() => fetchNextPage()}
          className="block w-fit bg-[#fff] px-8 py-3 text-custom-blue-violet rounded-md my-5 mx-auto"
        >
          Load More
        </button>
      )}
      {isFetching && <Loader />}
      {coins?.pages.length === 4 && (
        <p className="text-[#fff] mt-10 text-center text-[25px]">
          Thank you, that's all we have for now 😇
        </p>
      )}
    </div>
  );
}

export default CoinTable;
