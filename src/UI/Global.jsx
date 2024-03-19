function Global() {
  return (
    <div className="max-w-[100vw] h-[56px] bg-custom-dark-navy-3 text-[12px] flex justify-center items-center gap-10 text-[#d1d1d1]">
      <div className="flex items-center gap-2">
        <img className="w-[16px] h-[16px]" src="/flash-circle.svg" alt="" />
        <span>Coins 7884</span>
      </div>
      <div className="flex items-center gap-2">
        <img className="w-[16px] h-[16px]" src="/recovery.svg" alt="" />
        <span>Exchange 662</span>
      </div>
      <div className="flex items-center gap-1">
        <img className="w-[16px] h-[16px]" src="/chevron-up.svg" alt="" />
        <span>1.69T</span>
      </div>
      <div className="flex items-center gap-2">$124.45B</div>
      <div className="flex items-center gap-2">
        <img className="w-[16px] h-[16px]" src="/bitcoin-icon.svg" alt="" />
        <span>49%</span>
      </div>
      <div className="flex items-center gap-2">
        <img className="w-[16px] h-[16px]" src="/ethereum-icon.svg" alt="" />
        <span>21%</span>
      </div>
    </div>
  );
}

export default Global;
