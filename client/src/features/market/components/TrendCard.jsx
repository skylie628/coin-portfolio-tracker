import { Flex, GridItem, Text } from "@chakra-ui/react";
import Tooltip from "@/components/ui/Tooltip";
import RandomRevealText from "@/components/ui/RandomRevealText";
//hooks
import { useState } from "react";
//others
import _ from "lodash";
import getSummarySentence from "@/utils/getSummary";
import { iconsHelper } from "@/config/icons";

export default function TrendCard({ coin }) {
  const [hover, setHover] = useState(false);
  const label = getSummarySentence(coin?.content?.description || coin.name, 2);
  return (
    <GridItem>
      <Flex
        as="article"
        className="flex-1 flex-col hover:border rounded-lg hover:border-1 hover:border-white/[0.2] group cursor-pointer "
      >
        <Tooltip label={label}>
          <div
            className="w-full hover:translate-x-2 hover:-translate-y-2 transition-transform duration-[400ms] ease-out rounded-lg bg-black "
            onMouseEnter={() => {
              setHover((prev) => true);
            }}
          >
            <Flex
              className="w-full relative    p-5  flex-col justify-start text-left cursor-pointer"
              gap="10"
            >
              <img
                src={coin.src}
                className="w-[72px] h-[72px] rounded-full -mt-10 shadow-moonlight block  bg-orange"
              />
              <img src={coin.sparkline}></img>
              <Flex className="flex-col">
                <RandomRevealText
                  className="text-dimgray"
                  hover={hover}
                  setHover={setHover}
                  characters={coin.symbol}
                />
                <RandomRevealText
                  hover={hover}
                  setHover={setHover}
                  characters={coin.name}
                  className="text-lg"
                />
              </Flex>
            </Flex>
            <div className="border-t border-t-lightstar/[0.2] p-4 rounded-b-lg flex justify-between">
              <div>Ecosystem</div>
              {iconsHelper.RightChevronCircle({ colorTheme: "dark" })}
            </div>
          </div>
        </Tooltip>
      </Flex>
    </GridItem>
  );
}
