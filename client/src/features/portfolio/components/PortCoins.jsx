//components
import { Divider, Flex, Text } from "@chakra-ui/react";
import FourColumns from "@/components/grid/FourColumns";
import Tile from "@/components/grid/Tile";
//constants
import constants from "@/utils/constants";
export default function PortCoins() {
  const data = new Array(10).fill(0).map((x) => ({
    id: "imx",
    name: "ImmutableX",
    src: "https://assets.coingecko.com/coins/images/479/large/firocoingecko.png?1696501734",
    symbol: "IMX",
    label: "Somthing just like this",
    to: "/portfolio/abc",
    data: {
      coin_id: "IMX",
      balance: 1124,
      revenue: +432,
      eco: "Ecosystem",
    },
  }));
  return (
    <Flex className="relative z-[12] w-full flex-col py-40 px-20 gap-[100px] text-left">
      <Divider
        opacity="0.2"
        className="absolute top-10 left-0 w-full border border-[1px] border-meshgrid"
      />
      <div>
        <Text as="h2" className="text-2xl block font-medium">
          Portfolio.
        </Text>
      </div>
      <FourColumns
        data={data}
        renderTile={(props) => (
          <Tile {...props} variant={constants.tileType.portOption} />
        )}
      />
      <Divider
        opacity="0.2"
        className="absolute bottom-10 left-0 w-full border border-[1px] border-lightstar/[0.2]"
      />
    </Flex>
  );
}
