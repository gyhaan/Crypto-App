import ProgressBar from "./ProgressBar";

function CoinRow() {
  return (
    <div className="bg-custom-dark-navy text-[#fff] flex justify-around items-center h-20 text-[14px] p-5">
      <span className="max-w-[3%] w-full px-1">1</span>
      <div className="max-w-[16%] w-full flex gap-2 px-1">
        <img src="/bitcoin-icon.svg" alt="" />
        <span className="px-3">Bitcoin</span>
      </div>
      <span className="max-w-[7%] w-full px-1">$30,000</span>
      <div className=" max-w-[7%] w-full flex px-1">
        <img src="/chevron-up.svg" alt="" />
        <span>2.35</span>
      </div>
      <div className=" max-w-[7%] w-full flex px-1">
        <img src="/chevron-up.svg" alt="" />
        <span>2.35</span>
      </div>
      <div className=" max-w-[7%] w-full flex px-1">
        <img src="/chevron-up.svg" alt="" />
        <span>2.35</span>
      </div>
      <div className="max-w-[19%] w-full px-1">
        <ProgressBar />
      </div>
      <div className="max-w-[19%] w-full px-1">
        <ProgressBar />
      </div>
      <span className="max-w-[14%] w-full">Chart</span>
    </div>
  );
}

export default CoinRow;
