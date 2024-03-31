function CoinDetails() {
  return (
    <div className="text-[#fff] flex flex-col w-[50%] gap-4 px-6 py-2 bg-custom-dark-navy-2 rounded-[10px] h-[340px] justify-center">
      <div className="border-b border-[#fff] py-3">
        <div className="flex gap-3 items-center mb-3">
          <img src="/bitcoin-icon.svg" alt="coin image" />
          <div>
            <h3 className="text-[24px]">Name</h3>
            <p className="text-[14px]">Official Website</p>
          </div>
        </div>
        <div>
          <div className="flex gap-2 items-center">
            <p className="text-[24px]">$1200</p>
            <span>2.13%</span>
          </div>
          <p className="text-[#d1d1d1]">Profit</p>
        </div>
      </div>
      <div className=" py-1 ">
        <div className="flex justify-between items-center mb-8">
          <div>
            <p>All time High</p>
            <p className="text-[12px] text-[#d1d1d1]">Tuesday</p>
          </div>
          <p className="text-[20px]">$1200</p>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p>All time High</p>
            <p className="text-[12px] text-[#d1d1d1]">Tuesday</p>
          </div>
          <p className="text-[20px]">$1200</p>
        </div>
      </div>
    </div>
  );
}

export default CoinDetails;
