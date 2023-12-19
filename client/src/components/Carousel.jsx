import React from "react";
import { Flex, Box, Text, Divider } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import Price from "./ui/Price";
import { useSelector } from "react-redux";
//usehook
function Carousel() {
  let carousels = useSelector((state) => state.market.carousels) || [];
  carousels = [...carousels, ...carousels];
  return (
    <Box className="overflow-hidden">
      <Flex color="silver" className="p-2 flex-nowrap slider-carousel">
        {carousels.length > 0 &&
          carousels.map((item, index) => (
            <>
              <Box className="shrink-0 w-[180px]" key={index}>
                <Text as="span" className="font-bold">
                  {item.symbol.toUpperCase()}
                </Text>
                <Text as="span">
                  {<Price amount={item.current_price} currencyCode="USD" />}
                </Text>
              </Box>
              <ChevronLeftIcon boxSize={30} />
            </>
          ))}
      </Flex>

      <Divider colorScheme="gray" size="1" variant="dashed" />
    </Box>
  );
}
export default React.memo(Carousel);
