import { useRef, useState } from "react";
import SearchList from "./SearchList";
import { useCoin } from "../context/ContextProvider";

function SearchBar() {
  const { searchQuery, setSearchQuery } = useCoin();
  const inputRef = useRef(null);
  const [focused, setFocused] = useState(false);
  const [hideSearchListTimeout, setHideSearchListTimeout] = useState(null);

  const onFocus = () => {
    setFocused(true);
    clearTimeout(hideSearchListTimeout);
    console.log(hideSearchListTimeout, "onfocus");
  };

  const onBlur = () => {
    const timeout = setTimeout(() => {
      setFocused(false);
    }, 400);
    setHideSearchListTimeout(timeout);
    console.log(hideSearchListTimeout, "onblur");
  };

  return (
    <div className="w-[250px] relative">
      <div className="w-full h-[48px] flex items-center bg-custom-dark-navy gap-[12px] py-[8px] px-[16px] rounded-[5px] border border-[#fff] border-opacity-5">
        <img src="/search.svg" alt="" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full border-none bg-transparent outline-none text-[#fff] placeholder-[#d1d1d1]"
          ref={inputRef}
          onFocus={onFocus}
          onBlur={onBlur}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      {focused && <SearchList />}
    </div>
  );
}

export default SearchBar;
