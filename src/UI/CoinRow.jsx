import ProgressBar from "./ProgressBar";

function CoinRow() {
  return (
    <div className="bg-custom-dark-navy text-[#fff] flex justify-around items-center h-20 text-[14px] p-5 rounded-lg">
      <span className="max-w-[3%] w-full px-1">1</span>
      <div className="max-w-[16%] w-full flex gap-2 px-1 ml-[-12px]">
        <img src="/bitcoin-icon.svg" alt="" />
        <span className="px-3">Bitcoin</span>
      </div>
      <span className="max-w-[7%] w-full px-1 ml-[-12px]">$30,000</span>
      <div className=" max-w-[7%] w-full flex ml-[-12px] pr-2">
        <img src="/chevron-up.svg" alt="" />
        <span>2.35</span>
      </div>
      <div className=" max-w-[7%] w-full flex  pr-2">
        <img src="/chevron-up.svg" alt="" />
        <span>2.35</span>
      </div>
      <div className=" max-w-[7%] w-full flex  pr-2">
        <img src="/chevron-up.svg" alt="" />
        <span>2.35</span>
      </div>
      <div className="max-w-[19%] w-full px-1">
        <ProgressBar color={{ bright: "#6374C3", background: "#3D4673" }} />
      </div>
      <div className="max-w-[19%] w-full px-1">
        <ProgressBar color={{ bright: "#F7931A", background: "#724A20" }} />
      </div>
      <span className="max-w-[14%] w-full">Chart</span>
    </div>
  );
}

export default CoinRow;
