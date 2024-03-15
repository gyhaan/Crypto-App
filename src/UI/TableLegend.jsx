function TableLegend() {
  return (
    <div className="text-[14px] text-[#d1d1d1] flex justify-between px-5 py-4">
      <span className="w-[3%] px-1 ">#</span>
      <span className="w-[15%] px-1">Name</span>
      <span className="w-[7%] px-1">Price</span>
      <span className="w-[7%] px-1">1h%</span>
      <span className="w-[7%] px-1">24h%</span>
      <span className="w-[7%] px-1">7d%</span>
      <span className="w-[19%] px-1">24h Volume/Market Cap</span>
      <span className="w-[19%] px-1">Circulating/Total supply</span>
      <span className="w-[14%] px-1">Last 7d</span>
    </div>
  );
}

export default TableLegend;
