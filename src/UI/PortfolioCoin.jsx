import ProgressBar from "./ProgressBar";

function PortfolioCoin() {
  return (
    <div className=" h-52 flex text-white">
      <div className="bg-custom-dark-navy-2 w-[35%] max-w-[35%] px-5 py-3 rounded-l-lg flex flex-col justify-evenly">
        <div className=" text-[20px] flex items-center gap-2">
          <div className="w-10 h-auto">
            <img src="/bitcoin-icon.svg" alt="" className="w-full h-auto" />
          </div>
          <p>Bitcoin(BTC)</p>
        </div>
        <div>
          <p>Purchased at:</p>
          <p className="text-2xl">$1000</p>
          <p className="text-[#d1d1d1] mt-2">Purchased on: 18/02/2024</p>
        </div>
      </div>
      <div className="bg-custom-dark-navy max-w-full w-full rounded-r-lg flex gap-4 px-5 py-5">
        <div className="flex flex-col w-[48%] h-full justify-around">
          <div>
            <span className="text-[#d1d1d1] text-sm">Current Price</span>
            <p className="text-xl">$1000</p>
          </div>
          <div>
            <span className="text-[#d1d1d1] text-sm">Market Cap vs Volume</span>
            <div className="mt-1">
              <ProgressBar
                color={{ bright: "#6374C3", background: "#3D4673" }}
                first={20}
                second={50}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[48%] h-full justify-around">
          <div>
            <span className="text-[#d1d1d1] text-sm">24h%</span>
            <p className="text-xl">$1000</p>
          </div>
          <div>
            <span className="text-[#d1d1d1] text-sm">
              Circ Supply vs Total Supply
            </span>
            <div className="mt-1">
              <ProgressBar
                color={{ bright: "#F7931A", background: "#724A20" }}
                first={20}
                second={50}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioCoin;
