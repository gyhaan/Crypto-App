import { usePortfolio } from "../context/PortfolioProvider";

function AddAssetButton() {
  const { setShowForm, showForm, portCoins } = usePortfolio();
  return !showForm && portCoins.length ? (
    <button
      className="block w-fit bg-[#fff] px-8 py-2 text-custom-blue-violet rounded-md ml-auto"
      onClick={() => setShowForm(true)}
    >
      Add Asset
    </button>
  ) : null;
}

export default AddAssetButton;
