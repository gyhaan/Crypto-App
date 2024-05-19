function PortfolioProp({ showForm, setShowForm }) {
  return !showForm ? (
    <div className="flex flex-col items-center justify-center gap-4 text-[#fff]">
      <img
        src="/crypto-wallet.svg"
        alt="Crypto Wallet"
        className="w-60 h-auto"
      />
      <p className="text-xl">Start Tracking with us today</p>
      <button
        className="block w-fit bg-[#fff] px-8 py-2 text-custom-blue-violet rounded-md"
        onClick={() => setShowForm(true)}
      >
        Add Asset
      </button>
    </div>
  ) : null;
}

export default PortfolioProp;
