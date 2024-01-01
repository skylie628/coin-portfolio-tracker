//components
import React from "react";
import BottomDrawer from "@/components/layout/BottomDrawer";
import { Flex, Box, HStack, VStack } from "@chakra-ui/react";
import Skeleton from "@/components/ui/Skeleton";
const GeneralInfo = React.lazy(() => import("./components/GeneralInfo"));
const ChartPanel = React.lazy(() => import("./components/ChartPanel"));
const ChartPanelSkeleton = () => (
  <Flex className="w-full flex-col gap-5">
    <Flex className="w-full h-[500px] justify-center items-center">
      <Skeleton className="m-auto flex-1 !w-full !h-full" />
    </Flex>
    <Flex className="gap-2 justify-start items-start px-20 w-full flex-col">
      <Skeleton height="20px" width="200px" />
      <Flex className="gap-20 w-full">
        <Flex className="flex-col gap-2">
          <Skeleton height="20px" width="200px" />
          <Skeleton height="20px" width="200px" />
        </Flex>
        <Flex className="flex-col gap-2">
          <Skeleton height="20px" width="200px" />
          <Skeleton height="20px" width="200px" />
        </Flex>
      </Flex>
    </Flex>
  </Flex>
);
function SkeletonGeneralInfo() {
  return (
    <Box p="5" className="w-4/12 border-r border-1 border-white/[0.2]">
      <VStack spacing={5} align="start">
        <HStack className="w-full">
          <Skeleton circle width="30px" />
          <Skeleton width="100px" />
          <Skeleton width="50px" />
        </HStack>
        <HStack>
          <Skeleton width="100px" />
          <Skeleton width="50px" />
        </HStack>
        {Array(10)
          .fill()
          .map((_, index) => (
            <Skeleton key={index} width="full" />
          ))}
      </VStack>
    </Box>
  );
}
export default function Currency() {
  return (
    <BottomDrawer className="overflow-y-auto h-full">
      <Flex className="flex-col xl:flex-row bg-blackest container mx-auto overflow-y-scroll ">
        <React.Suspense fallback={<SkeletonGeneralInfo />}>
          <GeneralInfo />
        </React.Suspense>
        <Box className="w-full  xl:w-8/12 p-5 ">
          <React.Suspense fallback={<ChartPanelSkeleton />}>
            <ChartPanel />
          </React.Suspense>
        </Box>
      </Flex>
    </BottomDrawer>
  );
}

/*
ath: 2.16
ath_change_percentage: -60.11786
ath_date: "2023-05-03T12:00:26.430Z"
atl: 0.364846
atl_change_percentage: 136.38935
atl_date: "2023-10-19T10:40:30.078Z"
circulating_supply: 1033262462.93308
current_price: 0.856709
fully_diluted_valuation: 8582335357
high_24h: 0.885606
id: "sui"
image: "https://assets.coingecko.com/coins/images/26375/large/sui_asset.jpeg?1696525453"
last_updated: "2023-12-26T11:40:39.604Z"
low_24h: 0.735157
market_cap: 886780497
market_cap_change_24h: 126744933
market_cap_change_percentage_24h: 16.67618
market_cap_rank: 83
max_supply: 10000000000
name: "Sui"
price_change_24h: 0.120216
price_change_percentage_24h: 16.32281
roi: null
symbol: "sui"
total_supply: 10000000000
total_volume: 401831953*/
