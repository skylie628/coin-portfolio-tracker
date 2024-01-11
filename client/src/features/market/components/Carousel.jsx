import React from "react";
import { Flex, Box, Text, Container, Divider } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import Price from "@/components/ui/Price";
import { motion, AnimatePresence } from "framer-motion";
//usehook
import { useGetTopCurrencies } from "../hooks/useGetTopCurrencies";
import { useEffect, useState } from "react";
const promptTexts = [
  "Cryptographers",
  "Miners",
  "Token Economists",
  "Backers",
  "ZK Engineers",
  "Validators",
  "DevOps",
  "Core Contributors",
];
function PromptTexts() {
  return (
    <Flex className="w-[1920px] justify-between items-center shrink-0 overflow-hidden h-[64px]">
      {promptTexts.slice(0, 7).map((text, i, arr) => (
        <>
          <Text
            key={text}
            className="text-3xl font-bold  shrink-0 text-black mt-0 tracking-wider mr-[50px]  "
          >
            {text}
          </Text>

          {i !== 6 ? (
            <Text className="text-3xl font-bold  shrink-0 text-black mt-0 tracking-wider mr-[50px]">
              {" "}
              -
            </Text>
          ) : (
            <div></div>
          )}
        </>
      ))}
    </Flex>
  );
}
export function CarouselFallback() {
  return (
    <div className="p-0 bg-orange h-[64px] overflow-hidden bg-orange container mx-auto h-[64px]">
      <PromptTexts />
    </div>
  );
}
function Carousel() {
  const { topCurrencies = [] } = useGetTopCurrencies({ pageIndex: 1 });

  let carousels = topCurrencies.slice(0, 10);
  console.log(carousels.length);
  return (
    <div className="py-0 bg-orange h-[64px] relative z-[20] h-[64px]">
      <div className="overflow-hidden bg-orange container mx-auto ">
        <Flex
          color="silver"
          className=" flex-nowrap justify-start items-center slider-carousel "
        >
          {carousels.length > 0 && <PromptTexts />}
          {carousels.length > 0 &&
            carousels.map((item, index) => (
              <>
                <Box className="shrink-0 w-[180px] " key={index}>
                  <Text as="span" className="font-bold !text-black text-xl  ">
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
                {index !== 9 ? (
                  <ChevronLeftIcon color="black" boxSize={30} />
                ) : (
                  <div>.</div>
                )}
              </>
            ))}
          {carousels.length > 0 && <PromptTexts />}
        </Flex>
      </div>
    </div>
  );
}
export default Carousel;
