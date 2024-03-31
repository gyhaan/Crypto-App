function SelectCurrency() {
  return (
    <select className="w-[100] h-[48] px-[16px] bg-custom-dark-navy text-[#fff] text-[18px] rounded-[5px] border border-[#fff] border-opacity-5 outline-none ">
      <option value="USD">$ USD</option>
      <option value="EUR">€ EUR</option>
      <option value="EUR">¥ JPY</option>
    </select>
  );
}

export default SelectCurrency;
