import { PortfolioProvider } from "../context/PortfolioProvider";
import Form from "../UI/Form";
import PortfolioProp from "../UI/PortfolioProp";
import AddAssetButton from "../UI/AddAssetButton";
import PortfolioCoinList from "../UI/PortfolioCoinList";

function Portfolio() {
  return (
    <PortfolioProvider>
      <AddAssetButton />
      <Form />
      <PortfolioProp />
      <PortfolioCoinList />
    </PortfolioProvider>
  );
}

export default Portfolio;
