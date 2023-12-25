import { Flex, Box, Text, Grid, GridItem } from "@chakra-ui/react";
import TrendCard from "./TrendCard";
export default function TrendList({ trendingCoins }) {
  if (!trendingCoins || trendingCoins.length < 5) {
    return;
  }
  if (trendingCoins.length > 5) {
    trendingCoins = trendingCoins.slice(0, 8);
  }
  return (
    <Flex
      as="section"
      className="relative w-full z-30 bg-blackest px-20 py-40 gap-10 flex-col gap-[100px] text-left"
    >
      <Grid
        className="absolute w-full inset-0 px-20 -ml-[25px]"
        gap="50"
        gridTemplateColumns={"repeat(4, 1fr) "}
      >
        <GridItem className="bg-white/[0.2] w-[1px] border-l border-l-white/[0.05] border-l-[1px]" />
        <GridItem className="bg-white/[0.2] w-[1px]" />
        <GridItem className="bg-white/[0.2] w-[1px]" />
        <GridItem className="bg-white/[0.2] w-[1px] border-r border-r-white/[0.05] border-r-[1px] " />
      </Grid>
      <Text as="h2" className="text-2xl block font-medium">
        Coins of the day
      </Text>
      <Grid
        gridTemplateColumns={"repeat(4, 1fr) "}
        className="relative z-30 w-full  gap-[50px] "
      >
        {trendingCoins.map((coin) => (
          <TrendCard coin={coin} key={coin.id} />
        ))}
      </Grid>
    </Flex>
  );
}
