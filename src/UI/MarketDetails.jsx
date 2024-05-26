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
      <h3 className="text-white text-2xl md:text-3xl mb-2 px-1">Market</h3>
      <div className="bg-custom-dark-navy-3 py-7 px-5 md:px-3 rounded-[10px] flex flex-wrap gap-y-5">
        <div className="w-full xs:w-1/2 md:w-1/3 lg:w-1/4">
          <h5 className="text-[#d1d1d1] text-sm">MARKET CAP</h5>
          <p className="text-white">
            {currencyFormatter(currency)}{" "}
            {formatNumberWithK(market_cap[currency])}
          </p>
        </div>
        <div className="w-full xs:w-1/2 md:w-1/3 lg:w-1/4">
          <h5 className="text-[#d1d1d1] text-sm">FULLY DILUTED VALUATION</h5>
          <p className="text-white">
            {currencyFormatter(currency)}{" "}
            {formatNumberWithK(fully_diluted_valuation[currency])}
          </p>
        </div>
        <div className="w-full xs:w-1/2 md:w-1/3 lg:w-1/4">
          <h5 className="text-[#d1d1d1] text-sm">TOTAL VOLUME (24H)</h5>
          <p className="text-white">
            {currencyFormatter(currency)}{" "}
            {formatNumberWithK(total_volume[currency])}
          </p>
        </div>
        <div className="w-full xs:w-1/2 md:w-1/3 lg:w-1/4">
          <h5 className="text-[#d1d1d1] text-sm">VOLUME/MARKET</h5>
          <p className="text-white">
            {formatNumberWithK(total_volume[currency] / market_cap[currency])}
          </p>
        </div>
        <div className="w-full xs:w-1/2 md:w-1/3 lg:w-1/4">
          <h5 className="text-[#d1d1d1] text-sm">CIRCULATING SUPPLY</h5>
          <p className="text-white">
            {currencyFormatter(currency)}{" "}
            {formatNumberWithK(circulating_supply)}
          </p>
        </div>
        <div className="w-full xs:w-1/2 md:w-1/3 lg:w-1/4">
          <h5 className="text-[#d1d1d1] text-sm">MAX SUPPLY</h5>
          <p className="text-white">
            {formatNumberWithK(max_supply)} {symbol.toUpperCase()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MarketDetails;
