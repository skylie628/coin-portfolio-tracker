import React from "react";
import { Flex, Box, Text, Divider, Container } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import Price from "@/components/ui/Price";
import { motion, AnimatePresence } from "framer-motion";
//usehook
import { useGetTopCurrencies } from "../hooks/useGetTopCurrencies";
import { useEffect, useState } from "react";
export function CarouselFallback() {
  const promptTexts = [
    "Core Contributors",
    "DevOps",
    "ZK Engineers",
    "Validators",
    "Cryptographers",
    "Miners",
    "Backers",
    "Token Economists",
  ];
  return (
    <AnimatePresence>
      <motion.div
        className="p-0 bg-orange h-[64px]"
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-100%", opacity: 0 }}
        transition={{ duration: 0 }}
      >
        <div className="overflow-hidden bg-orange container mx-auto ">
          <Flex
            color="silver"
            className=" flex flex-nowrap justify-center items-center slider-carousel tracking-wider !gap-[50px]"
          >
            {promptTexts.map((text) => (
              <>
                <Text
                  key={text}
                  className="text-6xl font-bold  shrink-0 text-black mt-0 tracking-wider"
                >
                  {text}
                </Text>
                <Text className="text-6xl font-bold  shrink-0 text-black mt-0 tracking-wider">
                  {" "}
                  -
                </Text>
              </>
            ))}
          </Flex>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
function Carousel() {
  const { topCurrencies = [] } = useGetTopCurrencies({ pageIndex: 1 });

  let carousels = topCurrencies.slice(0, 10);
  carousels = [...carousels, ...carousels, ...carousels];
  console.log(carousels.length);
  return (
    <div className="p-0 bg-orange h-[64px]">
      <div className="overflow-hidden bg-orange container mx-auto ">
        <Flex
          color="silver"
          className="p-2 flex-nowrap justify-center items-center slider-carousel "
        >
          {carousels.length > 0 &&
            carousels.map((item, index) => (
              <>
                <Box className="shrink-0 w-[180px]" key={index}>
                  <Text as="span" className="font-bold !text-black ">
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
      </div>
    </div>
  );
}
export default Carousel;
