import { useCoin } from "../context/ContextProvider";

function SelectCurrency() {
  const { currency, setCurrency, refetch } = useCoin();
  async function trial(value) {
    try {
      await refetch({ currency: value });
      setCurrency(value);
    } catch (error) {
      console.error("Refetch error:", error);
      // Handle error if needed
    }
  }

  return (
    <select
      className="w-[100] h-[48px] px-[16px] bg-custom-dark-navy text-[#fff] text-[18px] rounded-[5px] border border-[#fff] border-opacity-5 outline-none"
      value={currency}
      onChange={(e) => trial(e.target.value)}
    >
      <option value="usd">$ USD</option>
      <option value="eur">€ EUR</option>
      <option value="jpy">¥ JPY</option>
    </select>
  );
}

export default SelectCurrency;
