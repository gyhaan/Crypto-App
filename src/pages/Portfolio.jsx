import { useState } from "react";
import Form from "../UI/Form";

function Portfolio() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div>
      {!showForm && (
        <button
          className="block w-fit bg-[#fff] px-8 py-2 text-custom-blue-violet rounded-md ml-auto"
          onClick={() => setShowForm(true)}
        >
          Add Asset
        </button>
      )}
      {showForm && <Form setShowForm={setShowForm} />}
    </div>
  );
}

export default Portfolio;
