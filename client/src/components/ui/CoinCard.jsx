import { GridItem, Flex, Divider, Box, Text, VStack } from "@chakra-ui/react";
import Trend from "./Trend";
import { iconsHelper } from "../../constants/icons";
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
        <Flex className="py-10 flex-col gap-2">
          <Flex gap="3" className="justify-between" textAlign={"left"}>
            <Price
              amount={1526}
              currencyCode="USD"
              className="font-bold"
              currencyCodeClassName=" hidden"
            />
            <Text className="text-sm">total</Text>
          </Flex>

          <Flex gap="3" className="justify-between">
            <Flex gap="3">
              <Price
                amount={1211}
                currencyCode="USD"
                className="font-bold"
                currencyCodeClassName="hidden"
              />
              <Trend value={12} />
            </Flex>
            <Text className="text-sm">loss </Text>
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
