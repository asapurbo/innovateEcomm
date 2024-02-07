import { useEffect, useRef } from "react";

const useClick = () => {
  const plusRef = useRef(null);
  const txtDivRef = useRef(null);
  const headTxtRef = useRef(null);
  const paraTxtRef = useRef(null);
  const spanRef = useRef(null);
  const pinterestRef = useRef(null);
  const linkedinRef = useRef(null);
  const twitterRef = useRef(null);

  useEffect(() => {
    const handlePlusClick = () => {
      plusRef.current.classList.toggle("rotate-405");
      plusRef.current.classList.toggle("bg-secondaryColor");
      plusRef.current.classList.toggle("text-white");
      txtDivRef.current.classList.toggle("bg-secondaryColor");
      headTxtRef.current.classList.toggle("text-white");
      paraTxtRef.current.classList.toggle("text-white");
      spanRef.current.classList.toggle("after:bg-white");

      pinterestRef.current.classList.toggle("bottom-48");
      pinterestRef.current.classList.toggle("rotate-720");

      linkedinRef.current.classList.toggle("bottom-32");
      linkedinRef.current.classList.toggle("rotate-720");

      twitterRef.current.classList.toggle("bottom-16");
      twitterRef.current.classList.toggle("rotate-720");
    };

    const plusEvent = plusRef.current;
    plusEvent.addEventListener("click", handlePlusClick);

    return () => {
      plusEvent.removeEventListener("click", handlePlusClick);
    };
  }, []);

  useEffect(() => {
    const handelIconClick = (e) => {
      if (
        pinterestRef.current.classList.contains("bottom-48") &&
        linkedinRef.current.classList.contains("bottom-32") &&
        twitterRef.current.classList.contains("bottom-16") &&

        plusRef.current.classList.contains("rotate-405") &&
        plusRef.current.classList.contains("bg-secondaryColor") &&
        plusRef.current.classList.contains("text-white") &&
        txtDivRef.current.classList.contains("bg-secondaryColor") &&
        headTxtRef.current.classList.contains("text-white")&&
        paraTxtRef.current.classList.contains("text-white")&&
        spanRef.current.classList.contains("after:bg-white")&&

        !plusRef.current.contains(e.target) &&
        !pinterestRef.current.contains(e.targer) &&
        !linkedinRef.current.contains(e.targer) &&
        !twitterRef.current.contains(e.targer)
      ) {
        pinterestRef.current.classList.remove("bottom-48");
        linkedinRef.current.classList.remove("bottom-32");
        twitterRef.current.classList.remove("bottom-16");

        plusRef.current.classList.remove("rotate-405");
        plusRef.current.classList.remove("bg-secondaryColor");
        plusRef.current.classList.remove("text-white");
        txtDivRef.current.classList.remove("bg-secondaryColor");
        headTxtRef.current.classList.remove("text-white");
        paraTxtRef.current.classList.remove("text-white");
        spanRef.current.classList.remove("after:bg-white");
  
      }
    };
    window.addEventListener("click", (e) => {
      handelIconClick(e);
    });

    return () => {
      window.removeEventListener("click", (e) => {
        handelIconClick(e);
      });
    };
  }, []);

  return {
    plusRef,
    txtDivRef,
    headTxtRef,
    paraTxtRef,
    spanRef,
    pinterestRef,
    linkedinRef,
    twitterRef,
  };
};

export default useClick;
