import { useCoin } from "../context/ContextProvider";

function TabButtons() {
  const { days, setDays } = useCoin();
  return (
    <div className="flex items-center justify-between px-2 py-2 mt-4 mb-2 bg-[#232336] w-[280px] h-12 rounded-[8px] text-[#d1d1d1]">
      <button
        className="w-12 h-full hover:bg-custom-blue-violet focus:bg-custom-blue-violet rounded"
        onClick={() => setDays(1)}
        style={days === 1 ? { backgroundColor: "#627EEA" } : null}
      >
        1D
      </button>
      <button
        className="w-12 h-full hover:bg-custom-blue-violet focus:bg-custom-blue-violet rounded"
        onClick={() => setDays(7)}
        style={days === 7 ? { backgroundColor: "#627EEA" } : null}
      >
        7D
      </button>
      <button
        className="w-12 h-full hover:bg-custom-blue-violet focus:bg-custom-blue-violet rounded"
        onClick={() => setDays(30)}
        style={days === 30 ? { backgroundColor: "#627EEA" } : null}
      >
        1M
      </button>
      <button
        className="w-12 h-full hover:bg-custom-blue-violet focus:bg-custom-blue-violet rounded"
        onClick={() => setDays(365)}
        style={days === 365 ? { backgroundColor: "#627EEA" } : null}
      >
        1Y
      </button>
    </div>
  );
}

export default TabButtons;
