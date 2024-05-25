function TableLegend() {
  return (
    <div className="text-[14px] text-[#d1d1d1] flex justify-between px-6 py-4">
      <span className="hidden sm:w-[3%] sm:block px-1 ">#</span>
      <span className="w-[30%] sm:w-[16%] lg:w-[15%] px-1">Name</span>
      <span className="w-[25%] sm:w-[16%] lg:w-[7%]">Price</span>
      <span className="hidden lg:flex lg:w-[7%] px-1">1h%</span>
      <span className="hidden sm:w-[14%] sm:block sm:flex lg:w-[7%] px-1">
        24h%
      </span>
      <span className="hidden sm:flex sm:w-[14%] sm:block lg:w-[7%] px-1">
        7d%
      </span>
      <span className="hidden lg:block lg:w-[18%] px-1">
        24h Volume/Market Cap
      </span>
      <span className="hidden lg:block lg:w-[18%] px-1">
        Circulating/Total supply
      </span>
      <span className="w-[45%] px-1 pl-8 sm:w-[28%] lg:w-[14%] lg:px-1">
        Last 7d
      </span>
    </div>
  );
}

export default TableLegend;
