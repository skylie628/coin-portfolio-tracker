import { GridItem, Flex, Divider, Box, Text, VStack } from "@chakra-ui/react";
import Trend from "./Trend";
import { iconsHelper } from "../../config/icons";
import { Link } from "react-router-dom";
import Coin from "./Coin";
import Price from "./Price";
export default function CoinCard() {
  return (
    <GridItem className=" rounded-lg text-dimgray bg-metalgray bg-noise-pattern">
      <Flex className="px-5 py-2  justify-between ">
        {"#1"}
        {iconsHelper.DeleteCircle}
      </Flex>
      <VStack gap="3" align="left" className="p-5 text-left">
        <Coin
          name="ImmutableX"
          shortName="IMX"
          src="https://assets.coingecko.com/coins/images/17233/standard/immutableX-symbol-BLK-RGB.png?1696516787"
          className="!text-blackest"
        />
        <Flex className="py-10 flex-col gap-3">
          <Flex gap="1" className=" flex-col " textAlign={"left"}>
            <Price
              amount={1526}
              currencyCode="USD"
              className="font-bold text-blackest"
              currencyCodeClassName=" hidden"
            />
            <Text className="text-sm text-blackest font-bold">total</Text>
          </Flex>

          <Flex gap="1" className="flex-col">
            <Flex gap="3">
              <Price
                amount={1211}
                currencyCode="USD"
                className="font-bold"
                currencyCodeClassName="hidden"
              />
              <Trend value={12} />
            </Flex>
            <Text className="text-sm">profit </Text>
          </Flex>
        </Flex>
      </VStack>
      <Divider borderColor={"gray"} />
      <Box className="px-5 py-5 flex justify-between ">
        <Text className="text-sm text-black">Finance</Text>
        <Link to="abcd"> {iconsHelper.RightChevronCircle}</Link>
      </Box>
    </GridItem>
  );
}
