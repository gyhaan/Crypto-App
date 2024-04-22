import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import SelectCurrency from "./SelectCurrency";

function AppNav() {
  return (
    <div className="flex justify-between items-center h-[96px]">
      <img src="/Logo.svg" alt="" className="w-[171px]" />
      <nav className="w-[265px]">
        <ul className="flex  justify-evenly text-[#fff]">
          <li>Home</li>
          <li>Home</li>
        </ul>
      </nav>
      <div className="flex gap-[16px] w-[544px] justify-end">
        <SearchBar />
        <SelectCurrency />
        <button className="w-[48px] h-[48px] bg-custom-dark-navy rounded-[5px] border border-[#fff] border-opacity-5 text-[#fff]">
          ☀︎
        </button>
      </div>
    </div>
  );
}

export default AppNav;
