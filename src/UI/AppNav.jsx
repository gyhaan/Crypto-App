import { NavLink, Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import SelectCurrency from "./SelectCurrency";

function AppNav() {
  return (
    <div className="flex justify-between items-center h-[96px] ">
      <Link to="/">
        <img src="/Logo.svg" alt="" className="w-[171px]" />
      </Link>
      <nav className="w-[265px]">
        <ul className="flex  justify-evenly text-[#fff] text-[18px]">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio">Portfolio</NavLink>
          </li>
        </ul>
      </nav>
      <div className="flex gap-[16px] w-[544px] justify-end">
        <SearchBar />
        <SelectCurrency />
      </div>
    </div>
  );
}

export default AppNav;
