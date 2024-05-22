import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { PortfolioProvider } from "../context/PortfolioProvider";
import Form from "../UI/Form";
import PortfolioProp from "../UI/PortfolioProp";
import AddAssetButton from "../UI/AddAssetButton";

import { fetchHistoricalData } from "../services/apiCoins";
import PortfolioCoin from "../UI/PortfolioCoin";

function Portfolio() {
  return (
    <PortfolioProvider>
      <AddAssetButton />
      <Form />
      <PortfolioProp />
      <PortfolioCoin />
    </PortfolioProvider>
  );
}

export default Portfolio;
