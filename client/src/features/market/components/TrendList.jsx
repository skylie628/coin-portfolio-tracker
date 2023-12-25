import { Flex, Box, Text } from "@chakra-ui/react";
import TrendCard from "./TrendCard";
export default function TrendList({ trendingCoins }) {
  if (!trendingCoins || trendingCoins.length < 5) {
    return;
  }
  if (trendingCoins.length > 5) {
    trendingCoins = trendingCoins.slice(0, 5);
  }
  return (
    <Flex
      as="section"
      className="relative w-full z-30 bg-blackest px-10 py-40 gap-10 flex-col gap-[100px] text-left"
    >
      <Text as="h2" className="text-2xl block">
        Coins of the day
      </Text>
      <Flex className="relative w-full  gap-10">
        {trendingCoins.map((coin) => (
          <TrendCard coin={coin} key={coin.id} />
        ))}
      </Flex>
    </Flex>
  );
}
