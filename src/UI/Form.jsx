import { useState } from "react";
import AmountPicker from "../UI/AmountPicker";
import CoinPicker from "../UI/CoinPicker";
import DatePicker from "../UI/DatePicker";
import { fetchHistoricalData } from "../services/apiCoins";
import { usePortfolio } from "../context/PortfolioProvider";

function Form() {
  const { setPortCoins } = usePortfolio();
  const { setShowForm, showForm } = usePortfolio();
  const [searchQuery, setSearchQuery] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);

  function reset() {
    setShowForm(false);
    setLoading(false);
    setSearchQuery("");
    setAmount(0);
    setDate("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!searchQuery || amount <= 0 || !date) {
      let errorMessage = "Please ensure all fields are filled out correctly:\n";

      if (!searchQuery) {
        errorMessage += "-- Search query is missing.\n";
      }

      if (amount <= 0) {
        errorMessage += "-- Amount must be greater than 0.\n";
      }

      if (!date) {
        errorMessage += "-- Date is missing.";
      }

      alert(errorMessage);
      return;
    }
    (async () => {
      try {
        setLoading(true);
        const data = await fetchHistoricalData(searchQuery, date);
        setPortCoins((portCoins) => [...portCoins, { ...data, amount }]);
      } catch (err) {
        alert("Looks like Something went Wrong");
        throw new Error("Looks like Something went Wrong");
      } finally {
        reset();
      }
    })();
  }
  return (
    showForm && (
      <form className="my-4" onSubmit={(e) => handleSubmit(e)}>
        <div className="text-[#d1d1d1] flex justify-around">
          <CoinPicker
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <AmountPicker amount={amount} setAmount={setAmount} />
          <DatePicker date={date} setDate={setDate} />
        </div>
        <button
          className="block w-fit text-[#fff] px-8 py-2 bg-custom-blue-violet rounded-md my-3 mt-5 ml-auto hover:cursor-pointer disabled:cursor-not-allowed"
          disabled={loading}
          onClick={(e) => handleSubmit(e)}
        >
          {loading ? "Loading..." : "Save and Continue"}
        </button>
      </form>
    )
  );
}

export default Form;
