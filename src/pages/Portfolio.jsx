import { useState } from "react";
import Form from "../UI/Form";
import PortfolioProp from "../UI/PortfolioProp";
import { useQuery } from "@tanstack/react-query";
import { fetchHistoricalData } from "../services/apiCoins";

function Portfolio() {
  const [portCoins, setPortCoins] = useState([]);
  const [showForm, setShowForm] = useState(false);
  return (
    <div>
      {!showForm && portCoins.length && (
        <button
          className="block w-fit bg-[#fff] px-8 py-2 text-custom-blue-violet rounded-md ml-auto"
          onClick={() => setShowForm(true)}
        >
          Add Asset
        </button>
      )}
      {showForm && <Form setShowForm={setShowForm} />}
      <PortfolioProp setShowForm={setShowForm} showForm={showForm} />
    </div>
  );
}

export default Portfolio;
