import { Flex, Text } from "@chakra-ui/react";
import Tooltip from "@/components/ui/Tooltip";
//others
import getSummarySentence from "@/utils/getSummary";
export default function TrendCard({ coin }) {
  console.log(coin);
  const label = getSummarySentence(coin?.content?.description || coin.name, 2);
  return (
    <Flex as="article" className="flex-1">
      <Tooltip label={label}>
        <Flex
          className="w-full relative bg-black  rounded-lg p-5 bg-gradient-to-br from-orange/[0.2] to-blackest flex-col justify-start text-left cursor-pointer"
          gap="10"
        >
          <img
            src={coin.src}
            className="w-[64px] h-[64px] rounded-full -mt-10 shadow-moonlight block  bg-orange"
          />
          <img src={coin.sparkline}></img>
          <Flex className="flex-col">
            <Text className="text-dimgray">{coin.symbol}</Text>
            <Text className="text-lg">{coin.name}</Text>
          </Flex>
        </Flex>
      </Tooltip>
    </Flex>
  );
}
