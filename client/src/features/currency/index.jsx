//components
import BottomDrawer from "@/components/layout/BottomDrawer";
import { Flex, HStack, Box, Text } from "@chakra-ui/react";
import Price from "@/components/ui/Price";
import Trend from "@/components/ui/Trend";
import Tooltip from "@/components/ui/Tooltip";
import TagSection from "./component/TagSection";
import Sparkline from "@/components/ui/Sparkline";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
//other
import { sparklineDetailConfig } from "@/lib/highchart";
import { mockData } from "@/lib/highchart";
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
import { useParams } from "react-router-dom";
//other
import { iconsHelper } from "@/config/icons";
const InfoRow = ({ name, label = "coiPort xin chao!", renderValue }) => (
  <Flex className=" flex justify-between w-full text-sm">
    <Flex gap="3">
      <Text className="text-dimgray font-bold">{name}</Text>
      <Tooltip label={label}>{iconsHelper.Tooltip}</Tooltip>
    </Flex>
    {renderValue()}
  </Flex>
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
  const { coinId } = useParams();
  console.log("param la", coinId);
  const { data } = useGetCurrencyDetail({ id: coinId });
  const currencyDetail = data.currencyDetail;
  console.log(data);
  return (
    <BottomDrawer>
      <Flex className="w-full h-full bg-blackest !rounded-xl border border-white/[0.5] border-dashed  ">
        <Flex className="p-5 items-start justify-start gap-5 flex-col w-4/12 border-r border-1 border-white/[0.2]">
          <HStack className="w-full ">
            <Flex gap="3" className="justify-center items-center">
              <img
                className="w-[30px] h-[30px] rounded-full"
                src={currencyDetail.image}
              />
              <Text className="font-bold text-2xl ">{currencyDetail.name}</Text>
              <Text className="font-medium text-2xl text-dimgray ">
                {currencyDetail.symbol.toUpperCase()}
              </Text>
            </Flex>
          </HStack>
          <HStack>
            <Price
              className="text-4xl font-bold"
              amount={currencyDetail.current_price}
              currencyCodeClassName="hidden"
              currencyCode="USD"
            />
            <Trend
              value={currencyDetail["price_change_percentage_24h"]}
              ticket="1d"
            />
          </HStack>
          <InfoRow
            name="Market cap"
            renderValue={() => (
              <HStack>
                <Trend
                  value={currencyDetail["market_cap_change_percentage_24h"]}
                />
                <Price
                  className=" font-bold text-sm"
                  amount={currencyDetail.market_cap}
                  currencyCodeClassName="hidden"
                  currencyCode="USD"
                />
              </HStack>
            )}
          />
          <InfoRow
            name="Total Volumn"
            renderValue={() => (
              <Price
                className=" font-bold text-sm"
                amount={currencyDetail.total_volume}
                currencyCodeClassName="hidden"
                currencyCode="USD"
              />
            )}
          />
          <InfoRow
            name="Circulating supply"
            renderValue={() => (
              <Price
                className=" font-bold text-sm"
                amount={currencyDetail.circulating_supply}
                currencyCode={currencyDetail.symbol.toUpperCase()}
                type="crypto"
              />
            )}
          />
          <InfoRow
            name="Total supply"
            renderValue={() => (
              <Price
                className=" font-bold text-sm"
                amount={currencyDetail.total_supply}
                currencyCode={currencyDetail.symbol.toUpperCase()}
                type="crypto"
              />
            )}
          />
          <InfoRow
            name="Max. supply"
            renderValue={() => (
              <Price
                className=" font-bold text-sm"
                amount={currencyDetail.max_supply}
                currencyCode={currencyDetail.symbol.toUpperCase()}
                type="crypto"
              />
            )}
          />
          <InfoRow
            name="Fully diluted market cap"
            renderValue={() => (
              <Price
                className=" font-bold text-sm"
                amount={currencyDetail.fully_diluted_valuation}
                currencyCodeClassName="hidden"
                currencyCode={currencyDetail.symbol.toUpperCase()}
                type="crypto"
              />
            )}
          />
          <TagSection title="Official Links" variants={OfficalLinkVariants} />
          <TagSection title="Socials" variants={SocialVariants} />
        </Flex>
        <Box className="w-8/12 p-5">
          <Flex className="w-full h-[500px] justify-center">
            <HighchartsReact
              className="m-auto flex-1 !w-full !h-full"
              highcharts={Highcharts}
              options={sparklineDetailConfig({ data: mockData })}
            />
          </Flex>
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
