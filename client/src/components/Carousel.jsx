import React from "react";
import { Flex, Box, Text, Divider } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
export default function Carousel() {
  let mock = new Array(6)
    .fill(0)
    .map((x, i) => ({ name: `ADA${i}`, price: "1" }));
  mock = [...mock, ...mock];
  return (
    <Box className="overflow-hidden">
      <Flex color="silver" className="p-2 flex-nowrap slider-carousel">
        {mock.map((x) => (
          <>
            <Box className="shrink-0 w-[180px]" key={x.name}>
              <Text as="span" className="font-bold">
                {x.name}
              </Text>
              <Text as="span">{` ${x.price}USD`}</Text>
            </Box>
            <ChevronLeftIcon boxSize={30} />
          </>
        ))}
      </Flex>

      <Divider colorScheme="gray" size="1" variant="dashed" />
    </Box>
  );
}
