import Carousel from "../components/Carousel";
import Hero from "../pages/dashboard/Hero";
import TopLists from "./dashboard/TopList";
import { useRef } from "react";
export default function DashBoard() {
  const topListRef = useRef();
  const scrollToTopLists = () => {
    const headerOffset = 89;
    const elementPosition = topListRef.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };
  return (
    <div className="w-full h-full">
      <Carousel />
      <Hero scrollToTopLists={scrollToTopLists} />
      <TopLists ref={topListRef} />
    </div>
  );
}
