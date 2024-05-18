function ListElementPortfolio({ coinElement, setSearchQuery }) {
  const { name, id } = coinElement;
  return (
    <li
      className=" hover:bg-custom-blue-violet px-4 py-2 text-[#fff] hover:cursor-pointer"
      onClick={() => setSearchQuery(id)}
    >
      {name}
    </li>
  );
}

export default ListElementPortfolio;
