import Carousel from "../components/Carousel";
import Hero from "../pages/dashboard/Hero";
import TopLists from "./dashboard/TopList";
import { useRef } from "react";
export default function DashBoard() {
  const topListRef = useRef();
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
