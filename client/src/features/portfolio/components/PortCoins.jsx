//components
import { Divider, Flex, Text } from "@chakra-ui/react";
import FourColumns from "@/components/grid/FourColumns";
import Tile from "@/components/grid/Tile";
//constants
import constants from "@/utils/constants";
//hooks
import { useDispatch, useSelector } from "react-redux";
export default function PortCoins() {
  const dispatch = useDispatch();
  const invests = useSelector((state) => state.portfolio.data.investid);
  const data =
    invests &&
    invests.map((invest) => ({
      id: invest._id,
      name: invest.name,
      src: invest.img,
      symbol: invest.symbol.toUpperCase(),
      label: invest.des ? invest.des.split(".")[0] : invest.name,
      to: `/portfolio/${invest._id}`,
      data: {
        coin_id: invest.name,
        balance: invest.balance || 0,
        revenue: invest.totalPnl || 0,
        pnl_percentage: invest.pnl_percentage || 0,
        eco: invest.coinType,
      },
    }));
  return (
    <Flex className="relative z-[12] w-full flex-col py-40 px-20 gap-[100px] text-left container mx-auto">
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
        isPort
        data={data}
        renderTile={(props) => (
          <Tile {...props} variant={constants.tileType.coinOptions} />
        )}
      />
      <Divider
        opacity="0.2"
        className="absolute bottom-10 left-0 w-full border border-[1px] border-lightstar/[0.2]"
      />
    </Flex>
  );
}
