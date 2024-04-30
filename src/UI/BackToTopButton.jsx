import { useEffect, useState } from "react";

function BackToTopButton() {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", function () {
      if (window.scrollY > 400) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    });
  }, []);

  function backToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    isActive && (
      <button
        className="w-12 h-12 rounded-full bg-custom-blue-violet fixed z-50 bottom-4 left-4 flex justify-center items-center"
        onClick={backToTop}
      >
        <img src="/left-arrow.svg" alt="back to top" className="rotate-90" />
      </button>
    )
  );
}

export default BackToTopButton;
