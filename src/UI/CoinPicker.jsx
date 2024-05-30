import { useState } from "react";
import CoinListPortfolio from "./CoinListPortfolio";

function CoinPicker({ searchQuery, setSearchQuery }) {
  const [isActive, setActive] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleOnFocus = () => {
    clearTimeout(timeoutId);
    setActive(true);
  };

  const handleOnBlur = () => {
    const timer = setTimeout(function () {
      setActive(false);
    }, 500);

    setTimeoutId(timer);
  };

  return (
    <div>
      <p className="text-lg font-medium">Coin Name:</p>
      <input
        type="text"
        className="w-full md:w-60 h-10 py-2 px-3 rounded-[3px] mt-1 outline-none border-[1px] border-[#fff] border-opacity-5 focus:outline-[#fff] bg-custom-dark-navy relative text-[#fff]"
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        value={searchQuery.name}
        onChange={(e) => {
          setSearchQuery((searchQuery) => ({
            ...searchQuery,
            name: e.target.value,
          }));
        }}
        placeholder="eg: bitcoin"
      />
      {isActive && (
        <CoinListPortfolio
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      )}
    </div>
  );
}

export default CoinPicker;
