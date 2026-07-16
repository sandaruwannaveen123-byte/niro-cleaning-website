import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./BackToTop.css";

function BackToTop() {

  const [show, setShow] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      setShow(scrollTop > 100);

    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  const scrollToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };

  return (

    <button
      type="button"
      className={`back-top ${show ? "show" : ""}`}
      onClick={scrollToTop}
      aria-label="Back To Top"
    >
      <FaArrowUp />
    </button>

  );

}

export default BackToTop;