import { useCoin } from "../context/ContextProvider";
import { currencyFormatter, formatNumberWithK } from "../helper/formatNumbers";
import Loader from "./Loader";
import ProgressBar from "./ProgressBar";

function PortfolioCoin({ coin, index, onRemove }) {
  const { allCoins, currency } = useCoin();
  const { name, id, image, symbol, market_data, amount, date } = coin;
  const currentData = allCoins?.find((el) => el.id === id);

  if (!currentData) return <Loader />;

  return (
    <div className="min-h-52 max-h-fit flex flex-col lg:flex-row text-white max-w-[97%] mx-auto p-2">
      <div className="bg-custom-dark-navy-2 w-full lg:w-[35%] lg:max-w-[35%] px-5 py-3 rounded-t-md lg:rounded-l-lg flex flex-col justify-evenly gap-2">
        <div className=" text-[20px] flex items-center gap-2">
          <div className="w-6 md:w-10 h-auto">
            <img src={image.small} alt="" className="w-full h-auto" />
          </div>
          <p>
            {name}({symbol.toUpperCase()})
          </p>
        </div>
        <div>
          <p>Purchased at:</p>
          <p className="text-2xl">
            {currencyFormatter(currency)}
            {formatNumberWithK(market_data?.current_price[currency])}
          </p>
          <p className="text-[#d1d1d1] mt-2">
            Purchased on: {new Date(date).toLocaleDateString()}
          </p>
        </div>
      </div>
      <div className="bg-custom-dark-navy max-w-full w-full rounded-b-md lg:rounded-r-lg flex flex-col lg:flex-row gap-4 px-5 py-5">
        <div className="flex flex-col w-full lg:w-[48%] h-full justify-around gap-2">
          <div className="flex justify-between pr-3">
            <div>
              <span className="text-[#d1d1d1] text-sm">Current Price</span>
              <p className="text-xl">
                ${formatNumberWithK(currentData?.current_price)}
              </p>
            </div>
            <div>
              <span className="text-[#d1d1d1] text-sm">Total Amount</span>
              <p className="text-xl">
                ${formatNumberWithK(currentData?.current_price * amount)}
              </p>
            </div>
          </div>
          <div>
            <span className="text-[#d1d1d1] text-sm">
              24h Volume vs Market Cap
            </span>
            <div className="mt-1">
              <ProgressBar
                color={{ bright: "#6374C3", background: "#3D4673" }}
                first={currentData?.total_volume}
                second={currentData?.market_cap}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-col w-full lg:w-[48%] h-full justify-around gap-2">
          <div>
            <span className="text-[#d1d1d1] text-sm">24h%</span>
            <div className="text-xl flex">
              {currentData?.price_change_percentage_24h > 0 ? (
                <img src="/chevron-up.svg" alt="" />
              ) : (
                <img src="/chevron-down.svg" alt="" />
              )}

              <span
                style={{
                  color:
                    currentData?.price_change_percentage_24h > 0
                      ? "#01F1E3"
                      : "#FE2264",
                }}
              >
                {Math.abs(currentData?.price_change_percentage_24h.toFixed(8))}%
              </span>
            </div>
          </div>
          <div>
            <span className="text-[#d1d1d1] text-sm">
              Circ Supply vs Total Supply
            </span>
            <div className="mt-1">
              <ProgressBar
                color={{ bright: "#F7931A", background: "#724A20" }}
                first={currentData?.circulating_supply}
                second={currentData?.total_supply}
              />
            </div>
          </div>
        </div>
        <div className="flex gap-2 lg:flex-col">
          {/*           <button className="bg-custom-blue-violet text-white max-w-fit px-4 py-1 rounded">
            Edit
          </button> */}
          <button
            className="bg-custom-blue-violet text-white max-w-fit px-4 py-1 rounded"
            onClick={() => onRemove(name, date, index)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default PortfolioCoin;
