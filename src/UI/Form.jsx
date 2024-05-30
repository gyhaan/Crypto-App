import { useEffect, useState } from "react";
import AmountPicker from "../UI/AmountPicker";
import CoinPicker from "../UI/CoinPicker";
import DatePicker from "../UI/DatePicker";
import { fetchHistoricalData } from "../services/apiCoins";
import { usePortfolio } from "../context/PortfolioProvider";
import { useCoin } from "../context/ContextProvider";

function Form() {
  const { allCoins } = useCoin();
  const {
    setPortCoins,
    showForm,
    setShowForm,
    searchQuery,
    setSearchQuery,
    amount,
    setAmount,
    date,
    setDate,
    loading,
    setLoading,
  } = usePortfolio();

  /* useEffect(() => {
    if (!searchQuery.name) return;
    const coinChecking = allCoins.find((el) => el.name === searchQuery.name);
    if (!coinChecking && searchQuery.id) {
      setSearchQuery((searchQuery) => ({ ...searchQuery, id: "" }));
    }
  }, [searchQuery.name, allCoins]); */

  function reset() {
    setShowForm(false);
    setLoading(false);
    setSearchQuery({});
    setAmount(0);
    setDate("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!searchQuery.id || amount <= 0 || !date) {
      let errorMessage = "Please ensure all fields are filled out correctly:\n";

      if (!searchQuery.id) {
        errorMessage += `-- Enter a valid coin name.\n-- ${searchQuery.name} does not exist`;
        setSearchQuery((searchQuery) => ({ ...searchQuery, name: "", id: "" }));
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
        const coinChecker = allCoins.find((el) => el.name === searchQuery.name);
        if (!coinChecker) {
          throw new Error("Enter a valid coin");
        }
        const data = await fetchHistoricalData(searchQuery.id, date);
        setPortCoins((portCoins) => [...portCoins, { ...data, amount, date }]);
      } catch (err) {
        alert(err);
        console.error(err);
      } finally {
        reset();
      }
    })();
  }
  return (
    showForm && (
      <form className="my-4" onSubmit={(e) => handleSubmit(e)}>
        <div className="text-[#d1d1d1] flex flex-col gap-2 md:justify-around md:flex-row md:gap-0 px-3 lg:px-1">
          <CoinPicker
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <AmountPicker amount={amount} setAmount={setAmount} />
          <DatePicker date={date} setDate={setDate} />
        </div>
        <button
          className="block w-fit text-[#fff] px-8 py-2 bg-custom-blue-violet rounded-md ml-3 my-3 mt-5 md:ml-auto hover:cursor-pointer disabled:cursor-not-allowed"
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
