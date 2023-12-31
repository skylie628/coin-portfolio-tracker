import { Flex, Text } from "@chakra-ui/react";
import Tile from "@/components/grid/Tile";
import FourColumns from "@/components/grid/FourColumns";
import constants from "@/utils/constants";
import { Divider } from "@chakra-ui/react";
//hooks
import { useGetTrending } from "@/features/market/hooks/useGetTrending";
export default function TrendingCurrencies() {
  const { trendingCoins } = useGetTrending();
  if (!trendingCoins || trendingCoins.length < 8) {
    return;
  }
  return (
    <Flex
      as="section"
      className="z-[11] relative w-full  px-20 py-40 flex-col gap-[100px] text-left container mx-auto"
    >
      <Divider
        opacity="0.2"
        className="absolute top-10 left-0 w-full border border-[1px] border-meshgrid"
      />
      <Text as="h2" className="text-2xl block font-medium">
        Coins of the day
      </Text>
      <FourColumns
        data={trendingCoins.slice(0, 8)}
        renderTile={(props) => (
          <Tile {...props} variant={constants.tileType.trendingCoins} />
        )}
      />
      <Divider
        opacity="0.2"
        className="absolute bottom-10 left-0 w-full border border-[1px] border-lightstar/[0.2]"
      />
    </Flex>
  );
}
