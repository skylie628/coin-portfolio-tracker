import { Flex, Text } from "@chakra-ui/react";
import Tile from "@/components/grid/Tile";
import FourColumns from "@/components/grid/FourColumns";
import constants from "../../../utils/constants";
import { Divider } from "@chakra-ui/react";
//hooks
import { useGetTrending } from "@/features/market/hooks/useGetTrending";

export default function TrendingCategories() {
  const { trendingCategories } = useGetTrending();
  if (!trendingCategories || trendingCategories.length < 4) {
    return;
  }

  return (
    <section className=" block bg-blackest z-13 relative w-full bg-gradient-to-tr  from-orange/[0.2] to-blackest/[0.5]  to-40%">
      <Flex className="z-14 sm:px-20   py-40 flex-col gap-[100px] text-left container mx-auto">
        <Text as="h2" className="px-20 sm:px-0 text-2xl block font-medium">
          Trending Categories
        </Text>
        <FourColumns
          data={trendingCategories.slice(0, 4)}
          renderTile={(props) => (
            <Tile {...props} variant={constants.tileType.trendingCategories} />
          )}
        />
        <Divider
          opacity="0.2"
          className="absolute bottom-10 left-0 w-full border border-[1px] border-lightstar/[0.2]"
        />
      </Flex>
    </section>
  );
}
