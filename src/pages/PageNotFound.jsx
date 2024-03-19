import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className=" text-[#fff] flex flex-col gap-2 items-center mt-20">
      <h1 className="text-[50px]">404 Page Not found</h1>
      <p className="text-[20px]">
        Sorry, We could not find the page you are looking for!!!
      </p>
      <button
        className="bg-[#fff] px-8 py-3 w-fit text-custom-blue-violet rounded-md mt-5"
        onClick={() => navigate(-1)}
      >
        Go back
      </button>
    </div>
  );
}

export default PageNotFound;
