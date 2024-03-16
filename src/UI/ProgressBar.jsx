function ProgressBar({ color }) {
  return (
    <div className="flex flex-col w-[95%] text-[12px] text-[#fff] pb-2">
      <div className="flex justify-between">
        <span style={{ color: `${color.bright}` }}>3.75</span>
        <span>3.59</span>
      </div>
      <div
        className="h-[6px] w-[100%] rounded-full"
        style={{ backgroundColor: `${color.background}` }}
      >
        <div
          className="h-[6px] w-[40px] rounded-full"
          style={{ backgroundColor: `${color.bright}` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
