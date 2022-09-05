import { useState, useEffect } from "react";

import { Link, animateScroll as scroll, Button } from "react-scroll";
// icono
import { ChevronUpIcon } from "@heroicons/react/outline";

const BackToTopBTN = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 900 ? setShow(true) : setShow(false);
    });
  });
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    show && (
      <button
        onClick={() => scrollToTop()}
        className="bg-accent w-12 h-12  hover:bg-accent-hover text-white rounded-full fixed right-5 bottom-5 cursor-pointer flex justify-center items-center transition-all"
      >
        <ChevronUpIcon className="w-6 h-6" />
      </button>
    )
  );
};

export default BackToTopBTN;
