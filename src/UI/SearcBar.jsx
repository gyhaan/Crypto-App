function SearcBar() {
  return (
    <div className="w-[300px] h-[48px] flex items-center bg-custom-dark-navy gap-[12px] py-[8px] px-[16px] rounded-[5px] border border-[#fff] border-opacity-5">
      <img src="/search.svg" alt="" />
      <input
        type="text"
        placeholder="Search..."
        className="w-full border-none bg-transparent outline-none text-[#fff] placeholder-[#d1d1d1]"
      />
    </div>
  );
}

export default SearcBar;
