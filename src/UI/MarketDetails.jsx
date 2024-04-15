import { useCoin } from "../context/ContextProvider";
import { currencyFormatter, formatNumberWithK } from "../helper/formatNumbers";

function MarketDetails({ coin }) {
  const { currency } = useCoin();
  const { market_data, symbol } = coin;

  const {
    market_cap,
    fully_diluted_valuation,
    max_supply,
    circulating_supply,
    total_volume,
  } = market_data;
  return (
    <div className="mb-5">
      <h3 className="text-[#fff] text-3xl mb-2">Market</h3>
      <div className="bg-custom-dark-navy-3 py-7 px-5 rounded-[10px] flex flex-wrap gap-y-4">
        <div className="w-1/4">
          <h5 className="text-[#d1d1d1] text-[14px]">MARKET CAP</h5>
          <p className="text-[#fff]">
            {currencyFormatter(currency)}{" "}
            {formatNumberWithK(market_cap[currency])}
          </p>
        </div>
        <div className="w-1/4">
          <h5 className="text-[#d1d1d1] text-[14px]">
            FULLY DILUTED VALUATION
          </h5>
          <p className="text-[#fff]">
            {currencyFormatter(currency)}{" "}
            {formatNumberWithK(fully_diluted_valuation[currency])}
          </p>
        </div>
        <div className="w-1/4">
          <h5 className="text-[#d1d1d1] text-[14px]">TOTAL VOLUME (24H)</h5>
          <p className="text-[#fff]">
            {currencyFormatter(currency)}{" "}
            {formatNumberWithK(total_volume[currency])}
          </p>
        </div>
        <div className="w-1/4">
          <h5 className="text-[#d1d1d1] text-[14px]">VOLUME/MARKET</h5>
          <p className="text-[#fff]">
            {formatNumberWithK(total_volume[currency] / market_cap[currency])}
          </p>
        </div>
        <div className="w-1/4">
          <h5 className="text-[#d1d1d1] text-[14px]">CIRCULATING SUPPLY</h5>
          <p className="text-[#fff]">
            {currencyFormatter(currency)}{" "}
            {formatNumberWithK(circulating_supply)}
          </p>
        </div>
        <div className="w-1/4">
          <h5 className="text-[#d1d1d1] text-[14px]">MAX SUPPLY</h5>
          <p className="text-[#fff]">
            {formatNumberWithK(max_supply)} {symbol.toUpperCase()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MarketDetails;