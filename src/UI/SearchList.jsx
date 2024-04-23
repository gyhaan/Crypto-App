import { useQuery } from "@tanstack/react-query";
import { fetchSearchedCoins } from "../services/apiCoins";
import ListElement from "./ListElement";
import Loader from "./Loader";
import { useCoin } from "../context/ContextProvider";

function SearchList() {
  const { searchQuery } = useCoin();
  const { data: searchedCoins, isLoading } = useQuery({
    queryKey: ["searchCoin"],
    queryFn: fetchSearchedCoins,
    staleTime: Infinity,
  });
  if (isLoading) {
    return (
      <ul className="list bg-custom-dark-navy w-full absolute h-20 my-auto overflow-y-scroll z-10 rounded-lg mt-2">
        <Loader />
      </ul>
    );
  }
  return (
    <ul className="list bg-custom-dark-navy w-full absolute max-h-80 overflow-y-scroll z-10 rounded-lg mt-2">
      {searchedCoins
        ?.filter((element) => {
          if (!searchQuery) return element;
          return element.name
            .toLowerCase()
            .includes(`${searchQuery.toLowerCase()}`);
        })
        ?.map((element) => (
          <ListElement coinElement={element} key={element.id} />
        ))}
    </ul>
  );
}

export default SearchList;
