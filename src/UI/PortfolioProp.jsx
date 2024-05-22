import { usePortfolio } from "../context/PortfolioProvider";

function PortfolioProp() {
  const { showForm, setShowForm } = usePortfolio();
  return !showForm ? (
    <div className="flex flex-col items-center justify-center gap-4 text-[#fff] mt-4">
      <img
        src="/crypto-wallet.png"
        alt="Crypto Wallet"
        className="w-56 h-auto"
      />
      <p className="text-xl">Start Tracking with us today</p>
      <button
        className="block w-fit bg-[#fff] px-8 py-2 text-custom-blue-violet rounded-md mb-2"
        onClick={() => setShowForm(true)}
      >
        Add Asset
      </button>
    </div>
  ) : null;
}

export default PortfolioProp;
