import { Flex, Text, VStack, Tabs, Tab, TabList } from "@chakra-ui/react";
import Price from "@/components/ui/Price";
import Trend from "@/components/ui/Trend";
import { Suspense } from "react";
import Skeleton from "@/components/ui/Skeleton";
import ChartView from "./ChartView";
import ButtonsGroup from "@/components/ui/ButtonsGroup";
//hooks
import { useRef } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useGetCurrencyDetail } from "@/features/currency/hooks/useGetCurrencyDetail";

const ChartPanelSkeleton = () => (
  <Flex className="relative w-full h-[400px] justify-center items-center md:px-20">
    <Skeleton className="m-auto flex-1 !w-full !h-full" />
  </Flex>
);
const InfoBlocksSkeleton = () => (
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
);
function InfoBlock({ title, amount, date, trend }) {
  return (
    <Flex className="flex-col flex-1">
      <Flex className="flex justify-between w-full text-sm">
        <Text className="text-dimgray font-bold">{title}</Text>
        <Text className="text-dimgray font-bold">
          <Price amount={amount} currencyCode="USD" />
        </Text>
      </Flex>
      <Flex className="flex justify-between w-full text-sm">
        <Text className="text-dimgray font-bold">
          {new Date(date).toDateString()}
        </Text>
        <Text className="text-dimgray font-bold">
          <Trend value={trend} />
        </Text>
      </Flex>
    </Flex>
  );
}
export default function ChartPanel() {
  const chartComponent = useRef(null);
  const [yAxisMeasure, setYAxisMeasure] = useState(() => "price");
  const [timeRange, setTimeRange] = useState(() => "year");
  const { coinId } = useParams();
  const {
    data: detailData,
    error,
    isLoading,
  } = useGetCurrencyDetail({ coinId });
  const {
    name,
    ath,
    ath_change_percentage,
    ath_date,
    atl,
    atl_change_percentage,
    atl_date,
  } = detailData.currencyDetail || {};

  return (
    <VStack className="w-full flex-col gap-5 h-full shrink-0  ">
      <h2 className="text-lg mr-auto md:px-20 font-bold text-metaldark">
        {" "}
        {name.toUpperCase()} Price Chart
      </h2>
      <Flex className="flex-col gap-5  md:flex-row py-3 md:w-full md:justify-between md:items-center md:px-20">
        <ButtonsGroup
          value={yAxisMeasure}
          values={["price", "cap"]}
          labels={["Price", "Market Caps"]}
          handleOnChange={(value) => setYAxisMeasure(value)}
        />
        <ButtonsGroup
          value={timeRange}
          values={["day", "month", "year"]}
          labels={["1D", "3M", "1Y"]}
          handleOnChange={(value) => setTimeRange(value)}
        />
      </Flex>
      <Suspense fallback={<ChartPanelSkeleton />}>
        <ChartView
          ref={chartComponent}
          coinId={coinId}
          timeRange={timeRange}
          yAxisMeasure={yAxisMeasure}
        />
      </Suspense>
      <Suspense fallback={<InfoBlocksSkeleton />}>
        <Flex className="gap-2 justify-start items-start p-10 md:px-20 md:py-10 w-full flex-col ">
          <h3>Price Performance.</h3>
          <Flex className="py-10 flex-col gap-5 md:flex-row md:gap-20 w-full">
            <InfoBlock
              title="All time high"
              amount={ath}
              date={ath_date}
              trend={ath_change_percentage}
            />
            <InfoBlock
              title="All time low"
              amount={atl}
              date={atl_date}
              trend={atl_change_percentage}
            />
          </Flex>
        </Flex>
      </Suspense>
    </VStack>
  );
}
