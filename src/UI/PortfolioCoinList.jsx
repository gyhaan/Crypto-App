import { usePortfolio } from "../context/PortfolioProvider";
import PortfolioCoin from "./PortfolioCoin";

function PortfolioCoinList() {
  const { portCoins } = usePortfolio();
  return (
    <ul>
      {portCoins?.map((coin, index) => (
        <li key={index} className="my-3">
          <PortfolioCoin coin={coin} />
        </li>
      ))}
    </ul>
  );
}

export default PortfolioCoinList;
