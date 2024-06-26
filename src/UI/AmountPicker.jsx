import { usePortfolio } from "../context/PortfolioProvider";

function AmountPicker() {
  const { amount, setAmount, loading } = usePortfolio();
  return (
    <div>
      <p className="text-lg font-medium">Amount Picker:</p>
      <input
        type="number"
        min="0"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        disabled={loading}
        className="w-full md:w-60 h-10 py-2 px-3 rounded-[3px] mt-1 outline-none border-[1px] border-[#fff] border-opacity-5 focus:outline-[#fff] bg-custom-dark-navy text-[#fff]"
      />
    </div>
  );
}

export default AmountPicker;
