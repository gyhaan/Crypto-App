import { useState } from "react";
import AmountPicker from "../UI/AmountPicker";
import CoinPicker from "../UI/CoinPicker";
import DatePicker from "../UI/DatePicker";
import { fetchHistoricalData } from "../services/apiCoins";

function Form({ setShowForm }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!searchQuery || amount <= 0 || !date) return;
    fetchHistoricalData(searchQuery, date);
    setShowForm(false);
  }
  return (
    <form className="my-4" onSubmit={(e) => handleSubmit(e)}>
      <div className="text-[#d1d1d1] flex justify-around">
        <CoinPicker searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <AmountPicker amount={amount} setAmount={setAmount} />
        <DatePicker date={date} setDate={setDate} />
      </div>
      <button
        className="block w-fit text-[#fff] px-8 py-2 bg-custom-blue-violet rounded-md my-3 mt-5 ml-auto"
        onClick={(e) => handleSubmit(e)}
      >
        Save And Continue
      </button>
    </form>
  );
}

export default Form;
