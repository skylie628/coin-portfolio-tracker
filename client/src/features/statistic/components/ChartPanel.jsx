import { VStack } from "@chakra-ui/react";
import ChartTabs from "./ChartTabs";
import ChartView from "./ChartView";
export default function ChartPanel() {
  return (
    <VStack className=" flex-1 w-1/2 bg-[rgb(30, 41 ,59)] h-full" spacing="0">
      <ChartTabs />
      <ChartView />
    </VStack>
  );
}
