import { useCoin } from "../context/ContextProvider";
import { fetchChartData } from "../services/apiCoins";
import {
  roundToTwoDecimalPlaces,
  formatNumberWithK,
  currencyFormatter,
} from "../helper/formatNumbers";

function SliderSkeleton({ coin }) {
  const { currency, coinId, setCoinId } = useCoin();
  const {
    id,
    image,
    name,
    symbol,
    current_price,
    price_change_percentage_24h_in_currency,
  } = coin;

  function fetchData(coinId) {
    setCoinId(coinId);
  }

  return (
    <div
      className="max-w-[250px] h-fit sm:h-[95px] mx-2 bg-custom-dark-navy flex items-center justify-center py-3 px-5 gap-3 sm:gap-5 rounded-md text-[#d1d1d1] hover:border-[2px] hover:border-[#fff] hover:border-opacity-20 hover:
      cursor-pointer"
      onClick={() => fetchData(id)}
      style={coinId === id ? { backgroundColor: "#627EEA" } : null}
    >
      <img src={image} alt={name} className="w-[32px] h-[32px] block" />
      <div className="w-[160px] flex flex-col gap-1">
        <p className="text-[16px] text-[#fff]">
          <span className="hidden md:block">{name}</span>
          <span className="md:hidden uppercase">{symbol}</span>
        </p>
        <div className="flex gap-2 text-[14px] hidden sm:flex">
          <span>
            {currencyFormatter(currency)}
            {formatNumberWithK(current_price)}
          </span>
          <div
            style={{
              color:
                price_change_percentage_24h_in_currency > 0
                  ? "#01F1E3"
                  : "#FE2264",
            }}
            className="flex justify-center items-center"
          >
            {price_change_percentage_24h_in_currency > 0 && (
              <img src="/chevron-up.svg" alt="" />
            )}
            {price_change_percentage_24h_in_currency < 0 && (
              <img src="/chevron-down.svg" alt="" />
            )}
            <span>
              {roundToTwoDecimalPlaces(price_change_percentage_24h_in_currency)}
              %
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderSkeleton;
