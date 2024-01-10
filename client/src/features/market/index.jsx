//component
import React, { Suspense } from "react";
import GridSystem from "@/components/grid/GridSystem";
import { Outlet } from "react-router-dom";
import Skeleton from "@/components/ui/Skeleton";
import { Flex, Text, Divider, Box } from "@chakra-ui/react";
import Hero from "./components/Hero";
import { FourColumnsSkeleton } from "@/components/grid/FourColumns";
import Footer from "@/components/ui/Footer";
import LoadingPage from "@/components/Loading";

const Carousel = React.lazy(() => import("./components/Carousel"));
const TopRealTimeCurrencies = React.lazy(() =>
  import("./components/TopRealTimeCurrencies")
);
const TrendingCurrencies = React.lazy(() =>
  import("./components/TrendingCurrencies")
);
const TrendingCategories = React.lazy(() =>
  import("./components/TrendingCategories")
);
//usehooks
import { useRef } from "react";
import useScrollToTop from "@/hooks/useScrollToTop";

function TrendingCategoriesSkeleton() {
  return (
    <Flex
      as="section"
      className="z-[11]  bg-gradient-to-tr  from-orange/[0.2] to-blackest/[0.5]  to-40% relative w-full  px-20 py-40 flex-col gap-[100px] text-left"
    >
      <Text as="h2" className="text-2xl block font-medium">
        <Skeleton height={30} width={200} />
      </Text>
      <FourColumnsSkeleton />
      <Divider
        opacity="0.2"
        className="absolute bottom-10 left-0 w-full border border-[1px] border-lightstar/[0.2]"
      />
    </Flex>
  );
}
function TrendingCurrenciesSkeleton() {
  return (
    <Flex
      as="section"
      className="z-[11] relative w-full  px-20 py-40 flex-col gap-[100px] text-left"
    >
      <Divider
        opacity="0.2"
        className="absolute top-10 left-0 w-full border border-[1px] border-meshgrid"
      />
      <Text as="h2" className="text-2xl block font-medium">
        <Skeleton height={30} width={200} />
      </Text>
      <FourColumnsSkeleton />
      <Divider
        opacity="0.2"
        className="absolute bottom-10 left-0 w-full border border-[1px] border-lightstar/[0.2]"
      />
    </Flex>
  );
}

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
    <>
      <div className="flex-1 ">
        <Suspense fallback={<LoadingPage />}>
          <Carousel />
          <Hero scrollToTopLists={scrollToTopLists} />
        </Suspense>
        <GridSystem>
          <Suspense fallback={<TrendingCurrenciesSkeleton />}>
            <TrendingCurrencies />
          </Suspense>
          <Suspense fallback={<TrendingCategoriesSkeleton />}>
            <TrendingCategories />
          </Suspense>
          <Suspense fallback={<div>loading</div>}>
            <TopRealTimeCurrencies ref={topListRef} />
          </Suspense>
        </GridSystem>
      </div>
      <Outlet />
      <Divider className="!border-dashed border-white/[0.2]" />
      <Footer />
    </>
  );
}
