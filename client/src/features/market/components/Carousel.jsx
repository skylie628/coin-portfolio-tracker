import React from "react";
import { Flex, Box, Text, Container, Divider } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import Price from "@/components/ui/Price";
//usehook
import { useGetTopCurrencies } from "../hooks/useGetTopCurrencies";
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
    <Flex className="w-[1920px] justify-between items-center shrink-0 overflow-hidden h-[52px] md:h-[64px] ">
      {promptTexts.slice(0, 7).map((text, i, arr) => (
        <>
          <Text
            key={text}
            className="text-2xl md:text-3xl font-bold  shrink-0 text-black mt-0 tracking-wider mr-[50px]  "
          >
            {text}
          </Text>

          {i !== 6 ? (
            <Text className="text-2xl md:text-3xl font-bold  shrink-0 text-black mt-0 tracking-wider mr-[50px]">
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
    <div className="w-screen bg-orange">
      <div className="p-0 bg-orange w-screen h-[52px] md:h-[64px] overflow-hidden  container mx-auto">
        <PromptTexts />
      </div>
    </div>
  );
}
function Carousel() {
  const { topCurrencies = [] } = useGetTopCurrencies({ pageIndex: 1 });

  let carousels = topCurrencies.slice(0, 10);
  return (
    <div className="py-0 bg-orange h-[52px] md:h-[64px] relative z-[20]">
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
                  <Text
                    as="span"
                    className="font-bold !text-black text-lg md:text-xl  "
                  >
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
