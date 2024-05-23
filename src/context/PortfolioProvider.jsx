import { createContext, useEffect } from "react";
import { useContext, useState } from "react";

const PortfolioContext = createContext();

function PortfolioProvider({ children }) {
  const [portCoins, setPortCoins] = useState(function () {
    const result = JSON.parse(localStorage.getItem("portCoins"));
    return result || [];
  });

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    localStorage.setItem("portCoins", JSON.stringify(portCoins));
  }, [portCoins]);

  return (
    <PortfolioContext.Provider
      value={{ portCoins, setPortCoins, showForm, setShowForm }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error("Context was used in the wrong place");
  }

  return context;
}

export { PortfolioProvider, usePortfolio };
