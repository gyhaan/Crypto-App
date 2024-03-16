import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className=" text-[#fff] flex flex-col gap-2 items-center mt-20">
      <h1 className="text-[50px]">404 Page Not found</h1>
      <p className="text-[20px]">
        Sorry, We could not find the page you are looking for!!!
      </p>
      <Link to="/">
        <button className="bg-[#fff] px-8 py-3 w-fit text-custom-blue-violet rounded-md mt-5">
          Go back
        </button>
      </Link>
    </div>
  );
}

export default PageNotFound;
