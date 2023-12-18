import { GridItem, Flex, Divider, Box, Text, VStack } from "@chakra-ui/react";
import Trend from "./Trend";
import { iconsHelper } from "../../config/icons";
import { Link } from "react-router-dom";
import Coin from "./Coin";
import Price from "./Price";
export default function CoinCard() {
  return (
    <GridItem className=" group rounded-lg text-dimgray  bg-metalgray cursor-pointer hover:translate-x-2 hover:-translate-y-2 transition-transform duration-[400ms] ease-out">
      <Flex className="px-5 py-2  justify-end  bg-noise-pattern ">
        {iconsHelper.DeleteCircle}
      </Flex>
      <Link to="abcd">
        <VStack gap="3" align="left" className="p-5 text-left">
          <Coin
            name="ImmutableX"
            shortName="IMX"
            src="https://assets.coingecko.com/coins/images/17233/standard/immutableX-symbol-BLK-RGB.png?1696516787"
            className="!text-blackest"
          />
          <Flex className="py-8 flex-col gap-2">
            <Flex gap="1" className=" flex " textAlign={"left"}>
              <Price
                amount={1526}
                currencyCode="USD"
                className="font-light text-blackest"
                currencyCodeClassName=" hidden"
              />
              <Text className="text-sm text-blackest "> in total</Text>
            </Flex>

            <Flex gap="1" className="flex-col">
              <Flex gap="3">
                <Price
                  amount={1211}
                  currencyCode="USD"
                  className="font-light text-dimgray"
                  currencyCodeClassName="hidden"
                />
                <Text className="text-sm text-dimgray">profit </Text>
              </Flex>
              <Trend className="!mr-auto" value={12} />
            </Flex>
          </Flex>
        </VStack>
        <Divider borderColor={"gray"} />
        <Box className="px-5 py-5 flex justify-between items-center  bg-noise-pattern">
          <Text className="text-sm text-black">Finance</Text>
          {iconsHelper.RightChevronCircle}
        </Box>
      </Link>
    </GridItem>
  );
}
