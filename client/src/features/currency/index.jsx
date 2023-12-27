//components
import BottomDrawer from "@/components/layout/BottomDrawer";
import { Flex, HStack, Box, Text } from "@chakra-ui/react";
import Price from "@/components/ui/Price";
import Trend from "@/components/ui/Trend";
import Tooltip from "@/components/ui/Tooltip";
import TagSection from "./component/TagSection";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

//icons
import {
  Globe,
  File,
  Github,
  Twitter,
  CreditCard,
  MessageSquare,
} from "lucide-react";
//hooks
import { useGetCurrencyDetail } from "./hooks/useGetCurrencyDetail";
import { useGetHistoryPrice } from "./hooks/useGetHistoryPrice";
import { useParams, useLocation } from "react-router-dom";
import { useRef, useEffect, useState } from "react";

//other
import { iconsHelper } from "@/config/icons";
import shortNumberFormat from "@/utils/shortNumberFormat";
import { sparklineChartConfig } from "@/lib/highchart/sparklineChartConfig";
import createBinanceSocketURL from "@/utils/createBinanceSocketURL";
function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
const InfoRow = ({ name, label = "coiPort xin chao!", renderValue }) => (
  <Flex className=" flex justify-between w-full text-sm">
    <Flex gap="3">
      <Text className="text-dimgray font-bold">{name}</Text>
      <Tooltip label={label}>{iconsHelper.Tooltip}</Tooltip>
    </Flex>
    {renderValue()}
  </Flex>
);
const renderPriceInfoRow = (name, amount, currencyCode, type = "crypto") => (
  <InfoRow
    name={name}
    renderValue={() => (
      <Price
        className=" font-bold text-sm"
        amount={amount}
        currencyCode={currencyCode}
        type={type}
      />
    )}
  />
);

const OfficalLinkVariants = [
  { name: "Website", icon: () => <Globe color="dimgray" /> },
  { name: "Whitepaper", icon: () => <File color="dimgray" /> },
  { name: "Github", icon: () => <Github color="dimgray" /> },
];
const SocialVariants = [
  { name: "Twitter", icon: () => <Twitter color="dimgray" /> },
  { name: "Reddit", icon: () => <CreditCard color="dimgray" /> },
  { name: "Chat", icon: () => <MessageSquare color="dimgray" /> },
];

export default function Currency() {
  const [realtime, setRealtime] = useState(false);
  const [realtimePrice, setRealtimePrice] = useState(false);
  const chartComponent = useRef(null);
  const { coinId } = useParams();
  const {
    data: detailData,
    error,
    isLoading,
  } = useGetCurrencyDetail({ id: coinId });
  const { data: historyPriceData, isLoading: isChartLoading } =
    useGetHistoryPrice({ id: coinId });
  const {
    image,
    name,
    symbol = false,
    current_price,
    price_change_percentage_24h,
    market_cap_change_percentage_24h,
    market_cap,
    total_volume,
    circulating_supply,
    total_supply,
    max_supply,
    fully_diluted_valuation,
  } = detailData.currencyDetail || {};
  const debouncedUpdate = debounce(function (price) {
    // Update the last point of the series
    const chart = chartComponent.current.chart;
    const series = chart.series[0];
    // Get the current date as a timestamp
    const currentDate = new Date().getTime();
    // Add a new point with the new price and the current date
    series.addPoint([currentDate, parseInt(price)], true, false);
    var lastPoint = chart.series[0].data[chart.series[0].data.length - 1];
    lastPoint.update({
      dataLabels: {
        enabled: true,
        format: '<span style="color:green;">●</span>', // Replace this with the actual label
      },
    });
    // Update the labelTxt with the new price
    if (chart.labelTxt) {
      chart.labelTxt.attr({
        text: shortNumberFormat(price),
      });
    }
  }, 200);
  console.log("rerender !!!!!");
  useEffect(() => {
    if (!symbol) return;
    const ws = new WebSocket(
      createBinanceSocketURL({ symbols: [symbol], tickers: ["trade"] })
    );
    ws.onmessage = function incoming(event) {
      const { p: price } = JSON.parse(event.data);
      debouncedUpdate(price);
      setRealtimePrice(price);
    };

    // Clean up function
    return () => {
      ws.close();
    };
  }, [symbol]);
  return (
    <BottomDrawer>
      {!isLoading && !isChartLoading && detailData && (
        <Flex className="w-full h-full bg-blackest !rounded-xl border border-white/[0.5] border-dashed  ">
          <Flex className="p-5 items-start justify-start gap-5 flex-col w-4/12 border-r border-1 border-white/[0.2]">
            <HStack className="w-full ">
              <Flex gap="3" className="justify-center items-center">
                <img className="w-[30px] h-[30px] rounded-full" src={image} />
                <Text className="font-bold text-2xl ">{name}</Text>
                <Text className="font-medium text-2xl text-dimgray ">
                  {symbol.toUpperCase()}
                </Text>
              </Flex>
            </HStack>
            <HStack>
              <Price
                className="text-4xl font-bold"
                amount={realtimePrice ? realtimePrice : current_price}
                currencyCodeClassName="hidden"
                currencyCode="USD"
              />
              <Trend value={price_change_percentage_24h} ticket="1d" />
            </HStack>
            <InfoRow
              name="Market cap"
              renderValue={() => (
                <HStack>
                  <Trend value={market_cap_change_percentage_24h} />
                  <Price
                    className=" font-bold text-sm"
                    amount={market_cap}
                    currencyCodeClassName="hidden"
                    currencyCode="USD"
                  />
                </HStack>
              )}
            />
            {renderPriceInfoRow("Total Volumn", total_volume, "USD")}
            {renderPriceInfoRow(
              "Circulating supply",
              circulating_supply,
              symbol.toUpperCase()
            )}
            {renderPriceInfoRow(
              "Total supply",
              total_supply,
              symbol.toUpperCase()
            )}
            {renderPriceInfoRow(
              "Max. supply",
              max_supply,
              symbol.toUpperCase()
            )}
            {renderPriceInfoRow(
              "Fully diluted market cap",
              fully_diluted_valuation,
              symbol.toUpperCase()
            )}
            <TagSection title="Official Links" variants={OfficalLinkVariants} />
            <TagSection title="Socials" variants={SocialVariants} />
          </Flex>
          <Box className="w-8/12 p-5">
            <Flex className="w-full h-[500px] justify-center">
              <HighchartsReact
                ref={chartComponent}
                className="m-auto flex-1 !w-full !h-full"
                highcharts={Highcharts}
                options={sparklineChartConfig({ data: historyPriceData })}
              />
            </Flex>
          </Box>
        </Flex>
      )}
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
