import { createContext } from "react";
import { useContext, useState } from "react";

const portfolioContext = createContext();
function PortfolioProvider({ children }) {
  const [portCoins, setPortCoins] = useState([]);
  const [showForm, setShowForm] = useState(false);
  return (
    <portfolioContext.Provider
      value={{ portCoins, setPortCoins, showForm, setShowForm }}
    >
      {children}
    </portfolioContext.Provider>
  );
}

function usePortfolio() {
  const context = useContext(portfolioContext);
  if (context === undefined) {
    throw new Error("Context was used in the wrong place");
  }

  return context;
}

export { PortfolioProvider, usePortfolio };
