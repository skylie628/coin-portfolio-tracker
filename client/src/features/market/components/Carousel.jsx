import React from "react";
import { Flex, Box, Text, Divider } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import Price from "@/components/ui/Price";
//usehook
import { useGetTopCurrencies } from "../hooks/useGetTopCurrencies";

function Carousel() {
  const { topCurrencies = [] } = useGetTopCurrencies({ pageIndex: 1 });
  let carousels = topCurrencies.slice(0, 10);
  carousels = [...carousels, ...carousels];
  return (
    <Box className="overflow-hidden bg-orange ">
      <Flex
        color="silver"
        className="p-2 flex-nowrap justify-center items-center slider-carousel"
      >
        {carousels.length > 0 &&
          carousels.map((item, index) => (
            <>
              <Box className="shrink-0 w-[180px]" key={index}>
                <Text as="span" className="font-bold !text-black">
                  {item.symbol.toUpperCase()}
                </Text>
                <Text as="span">
                  {
                    <Price
                      className="!text-black"
                      amount={item.current_price}
                      currencyCode="USD"
                    />
                  }
                </Text>
              </Box>
              <ChevronLeftIcon color="black" boxSize={30} />
            </>
          ))}
      </Flex>

      <Divider colorScheme="gray" size="1" variant="dashed" />
    </Box>
  );
}
export default Carousel;
