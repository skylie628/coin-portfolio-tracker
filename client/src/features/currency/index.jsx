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
    <BottomDrawer back="/market" className=" h-full">
      <Flex className="h-full overflow-y-scroll items-stretch price flex-col xl:flex-row bg-blackest container mx-auto  ">
        <React.Suspense fallback={<SkeletonGeneralInfo />}>
          <GeneralInfo />
        </React.Suspense>
        <Box className="w-full  xl:w-8/12 p-5 ">
          <ChartPanel />
        </Box>
      </Flex>
    </BottomDrawer>
  );
}
