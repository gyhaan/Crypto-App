import { NavLink, Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import SelectCurrency from "./SelectCurrency";
import { useEffect, useRef } from "react";

function AppNav() {
  const closeRef = useRef();
  const navRef = useRef();
  const menuRef = useRef();
  const listRef = useRef();

  useEffect(() => {
    const handleCloseClick = () => {
      navRef.current.style.right = "-100%";
    };

    const handleMenuClick = () => {
      navRef.current.style.right = "0%";
    };

    const handleListClick = (e) => {
      const clicked = e.target.closest("a");
      if (!clicked) {
        return;
      }
      handleCloseClick();
    };

    closeRef.current.addEventListener("click", handleCloseClick);
    menuRef.current.addEventListener("click", handleMenuClick);
    listRef.current.addEventListener("click", handleListClick);

    return () => {
      closeRef.current.removeEventListener("click", handleCloseClick);
      menuRef.current.removeEventListener("click", handleMenuClick);
      listRef.current.removeEventListener("click", handleListClick); // Remove the listRef event listener
    };
  }, []);

  return (
    <div className="flex justify-between items-center h-[96px] gap-2">
      <Link to="/">
        <img src="/Logo.svg" alt="" className="hidden md:block" />
        <img src="/favicon.svg" alt="" className="md:hidden w-7 h-auto ml-1" />
      </Link>

      <nav
        className="md:w-[265px] md:static md:bg-transparent md:flex-row md:h-full md:gap-0 md:items-center fixed w-4/5 h-full bg-custom-dark-navy top-0 -right-full flex flex-col p-4 pr-6 z-50 gap-6 transition-all duration-300"
        ref={navRef}
      >
        <div className="w-8 ml-auto mt-4 md:hidden ">
          <img src="/close-icon.svg" alt="close-icon" ref={closeRef} />
        </div>
        <ul
          className="flex flex-col md:flex-row justify-between text-[#fff] text-[18px] gap-3 md:gap-6 pt-16 md:pt-0"
          ref={listRef}
        >
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio">Portfolio</NavLink>
          </li>
        </ul>
        <div className="md:hidden">
          <SelectCurrency />
        </div>
      </nav>
      <div className="flex max-w-fit gap-3 lg:gap-4 justify-end">
        <SearchBar />
        <div className="hidden md:block">
          <SelectCurrency />
        </div>
        <div className="max-w-fit h-12 md:hidden">
          <img
            src="/nav-icon.svg"
            alt="nav-icon"
            ref={menuRef}
            className="h-full w-auto "
          />
        </div>
      </div>
    </div>
  );
}

export default AppNav;
