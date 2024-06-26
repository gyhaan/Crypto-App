import { Link } from "react-router-dom";

function ListElement({ coinElement }) {
  const { name, id } = coinElement;
  return (
    <Link to={`coin/${id}`} className="z-10">
      <li className=" hover:bg-custom-blue-violet px-4 py-2 text-[#fff] hover:cursor-pointer">
        {name}
      </li>
    </Link>
  );
}

export default ListElement;
