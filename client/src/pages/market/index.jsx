import Carousel from "../../components/Carousel";
import Hero from "./Hero";
import TopLists from "./TopList";
import { useRef } from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
export default function DashBoard() {
  const topListRef = useRef();
  useScrollToTop();
  const scrollToTopLists = () => {
    topListRef.current.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };
  return (
    <div className="flex-1">
      <Carousel />
      <Hero scrollToTopLists={scrollToTopLists} />
      <TopLists ref={topListRef} />
    </div>
  );
}
