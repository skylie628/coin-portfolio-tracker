import { Flex, Text } from "@chakra-ui/react";
import Tile from "@/components/grid/Tile";
import FourColumns from "@/components/grid/FourColumns";
import constants from "../../../utils/constants";
import { Divider } from "@chakra-ui/react";
export default function TrendCategories({ trendingCategories }) {
  if (!trendingCategories || trendingCategories.length < 4) {
    return;
  }
  if (trendingCategories.length > 4) {
    trendingCategories = trendingCategories.slice(0, 4);
  }

  return (
    <Flex
      as="section"
      className="z-[11]  bg-gradient-to-tr  from-orange/[0.2] to-blackest/[0.5]  to-40% relative w-full  px-20 py-40 flex-col gap-[100px] text-left"
    >
      <Text as="h2" className="text-2xl block font-medium">
        Trending Categories
      </Text>
      <FourColumns
        data={trendingCategories}
        renderTile={(props) => (
          <Tile {...props} variant={constants.tileType.trendingCategories} />
        )}
      />
      <Divider
        opacity="0.2"
        className="absolute bottom-10 left-0 w-full border border-[1px] border-lightstar/[0.2]"
      />
    </Flex>
  );
}
