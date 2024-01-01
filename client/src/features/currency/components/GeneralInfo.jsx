import TagSection from "./TagSection";
import Price from "@/components/ui/Price";
import Trend from "@/components/ui/Trend";
import Tooltip from "@/components/ui/Tooltip";
import { Flex, HStack, Text } from "@chakra-ui/react";
import {
  connectSocket,
  stopStreaming,
} from "@/store/reducer/reducer.streaming";
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
import { useParams } from "react-router-dom";
import { useGetCurrencyDetail } from "@/features/currency/hooks/useGetCurrencyDetail";
import { useDispatch, useSelector } from "react-redux";
import { iconsHelper } from "@/config/icons";
import { useEffect } from "react";
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
const StreamingPrice = ({ cachedPrice }) => {
  const { currentValue, streamMode } = useSelector(
    (state) => state.streaming.currency
  );
  return (
    <Price
      className="text-4xl font-bold"
      amount={currentValue || cachedPrice}
      currencyCodeClassName="hidden"
      currencyCode="USD"
    />
  );
};
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
export default function GeneralInfo() {
  const { coinId } = useParams();
  const {
    data: detailData,
    error,
    isLoading,
  } = useGetCurrencyDetail({ id: coinId });
  const dispatch = useDispatch();
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
  useEffect(() => {
    //connect to socket after get result from coingecko api
    if (symbol) {
      dispatch(connectSocket({ data: { symbol } }));
    }
    return () => {
      dispatch(stopStreaming());
    };
  }, [symbol]);
  return (
    <Flex className="p-5 items-start justify-start gap-5 flex-col w-full xl:w-4/12 border-r border-1 border-white/[0.2]">
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
        <StreamingPrice cachedPrice={current_price} />
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
      {renderPriceInfoRow("Total supply", total_supply, symbol.toUpperCase())}
      {renderPriceInfoRow("Max. supply", max_supply, symbol.toUpperCase())}
      {renderPriceInfoRow(
        "Fully diluted market cap",
        fully_diluted_valuation,
        symbol.toUpperCase()
      )}
      <TagSection title="Official Links" variants={OfficalLinkVariants} />
      <TagSection title="Socials" variants={SocialVariants} />
    </Flex>
  );
}
