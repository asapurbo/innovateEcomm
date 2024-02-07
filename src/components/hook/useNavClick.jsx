import { useEffect, useRef } from "react";

const useNavClick = () => {
  const navRef = useRef(null);
  const downRef = useRef(null);
  const upRef = useRef(null);

  // Nav Bar Style Start
  function handelScroll() {
    if (window.scrollY > 0) {
      navRef.current.classList.add("fixed");
      navRef.current.classList.add("shadow-xl");
      navRef.current.classList.add("rounded-bl-3xl");
      navRef.current.classList.add("rounded-br-3xl");
      navRef.current.classList.add("py-s25");
    } else {
      navRef.current.classList.remove("fixed");
      navRef.current.classList.remove("shadow-xl");
      navRef.current.classList.remove("rounded-bl-3xl");
      navRef.current.classList.remove("rounded-br-3xl");
      navRef.current.classList.remove("py-s25");
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handelScroll);

    return () => window.removeEventListener("scroll", handelScroll);
  }, []);
  // Nav Bar Style End

  // Up Down Function Start

  // Bottom To Top Start
  const upHandelClick = () => {
    window.scrollTo(0, 0);
  };
  // Bottom To Top Start

  useEffect(() => {
    const handelUp = () => {
      if (scrollY > 50) {
        upRef.current.style.display = "block";
      } else {
        upRef.current.style.display = "none";
      }
    };
    window.addEventListener("scroll", handelUp);

    return () => window.removeEventListener("scroll", handelUp);
  }, []);

  // Down Function Start

  const downHandelClick = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  useEffect(() => {
    const downIconDisplay = () => {
      if (window.scrollY + window.innerHeight == document.body.scrollHeight) {
        downRef.current.style.display = "none";
        upRef.current.classList.add("bottom-7");
      } else {
        downRef.current.style.display = "block";
        upRef.current.classList.remove("bottom-7");
      }
    };

    window.addEventListener("scroll", downIconDisplay);
  });

  // Down Function End

  // Up Down Function End

  return {
    upHandelClick,
    downHandelClick,
    navRef,
    downRef,
    upRef,
  };
};

export default useNavClick;
