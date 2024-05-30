import { useCoin } from "../context/ContextProvider";
import {
  currencyFormatter,
  formatToPrecision,
  roundToTwoDecimalPlaces,
} from "../helper/formatNumbers";
import { formatTime } from "../helper/formatTime";

function CoinDetails({ coin }) {
  const { currency } = useCoin();
  const { name, symbol, links, market_data, image } = coin;

  const {
    current_price,
    ath_date,
    ath,
    atl,
    atl_date,
    price_change_percentage_24h,
  } = market_data;

  return (
    <div className="text-[#fff] flex flex-col gap-4 px-3 md:px-4 lg:px-6 bg-custom-dark-navy-2 rounded-[10px] h-[340px] justify-evenly">
      <div className="border-b border-[#fff] py-3">
        <div className="flex gap-3 items-center mb-3">
          <img src={image.small} alt="coin image" className="w-[40px] h-auto" />
          <div>
            <h3 className="text-[24px]">
              {name}({symbol.toUpperCase()})
            </h3>
            <a className="text-[14px]" href={links.homepage[0]} target="_blank">
              Official Website
            </a>
          </div>
        </div>
        <div>
          <div className="flex gap-2 items-center">
            <p className="text-xl md:text-2xl">
              {currencyFormatter(currency)} {""}
              {formatToPrecision(current_price[currency])}
            </p>
            <div className="flex">
              {price_change_percentage_24h > 0 ? (
                <img src="/chevron-up.svg" />
              ) : (
                <img src="/chevron-down.svg" />
              )}
              <span
                style={
                  price_change_percentage_24h > 0
                    ? { color: "#01F1E3" }
                    : { color: "#FE2264" }
                }
              >
                {roundToTwoDecimalPlaces(price_change_percentage_24h)}%
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="py-1">
        <div className="flex justify-between items-center mb-8">
          <div>
            <p>All time High</p>
            <p className="text-[12px] text-[#d1d1d1]">
              {formatTime(ath_date[currency])}
            </p>
          </div>
          <p className="text-base md:text-xl">
            {currencyFormatter(currency)} {formatToPrecision(ath[currency])}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p>All time Low</p>
            <p className="text-[12px] text-[#d1d1d1]">
              {formatTime(atl_date[currency])}
            </p>
          </div>
          <p className="text-base md:text-xl">
            {currencyFormatter(currency)} {formatToPrecision(atl[currency])}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CoinDetails;
