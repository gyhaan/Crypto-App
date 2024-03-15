function ProgressBar() {
  return (
    <div className="flex flex-col w-[95%] text-[12px]">
      <div className="flex justify-between">
        <span className="text-[#ff0000]">3.75</span>
        <span>3.59</span>
      </div>
      <div className="h-[6px] w-[100%] bg-[#ff1234] rounded-full">
        <div className="h-[6px] w-[40px] bg-[#00f] rounded-full"></div>
      </div>
    </div>
  );
}

export default ProgressBar;
