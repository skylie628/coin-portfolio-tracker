import { useLayoutEffect, useRef } from "react";

const useStickyTableHeader = () => {
  const fixedTheadRef = useRef();
  const relativeTheadRef = useRef();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    const Animate = relativeTheadRef.current.getBoundingClientRect().top;
    const onScroll = () => {
      if (window.scrollY > Animate) {
        fixedTheadRef.current.style.visibility = "visible";
        relativeTheadRef.current.style.visibility = "hidden";
      } else {
        fixedTheadRef.current.style.visibility = "hidden";
        relativeTheadRef.current.style.visibility = "visible";
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { fixedTheadRef, relativeTheadRef };
};

export default useStickyTableHeader;
