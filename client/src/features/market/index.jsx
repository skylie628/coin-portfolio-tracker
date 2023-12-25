import React from "react";
const Carousel = React.lazy(() => import("./components/Carousel"));
import Hero from "./components/Hero";
const TopLists = React.lazy(() => import("./components/TopList"));
import TrendList from "./components/TrendList";
import GridSystem from "@/components/grid/GridSystem";
import { Suspense } from "react";
import { useRef } from "react";
import useScrollToTop from "@/hooks/useScrollToTop";
import { useGetTrending } from "./hooks/useGetTrending";
export default function DashBoard() {
  const topListRef = useRef();
  useScrollToTop();
  const { trendingCoins, error, isLoading } = useGetTrending();
  const scrollToTopLists = () => {
    /*topListRef.current.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });*/
  };
  return (
    <div className="flex-1">
      <Carousel />
      <Hero scrollToTopLists={scrollToTopLists} />
      <GridSystem>
        <TrendList trendingCoins={trendingCoins} />
      </GridSystem>
      {/* <Suspense fallback={<div>loading</div>}>
        <TopLists ref={topListRef} />
  </Suspense>*/}
    </div>
  );
}
