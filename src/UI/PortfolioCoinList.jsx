import { usePortfolio } from "../context/PortfolioProvider";
import PortfolioCoin from "./PortfolioCoin";

function PortfolioCoinList() {
  const { portCoins, setPortCoins } = usePortfolio();
  function handleRemove(name, date, index) {
    const answer = window.confirm(
      `Are you sure you want to remove ${name} that was bought on ${new Date(
        date,
      ).toLocaleDateString()}?`,
    );

    if (!answer) return;
    setPortCoins((portCoins) => portCoins.filter((_, i) => i !== index));
  }

  return (
    <ul className="flex flex-col gap-2">
      {portCoins?.map((coin, index) => (
        <li key={index}>
          <PortfolioCoin coin={coin} index={index} onRemove={handleRemove} />
        </li>
      ))}
    </ul>
  );
}

export default PortfolioCoinList;
