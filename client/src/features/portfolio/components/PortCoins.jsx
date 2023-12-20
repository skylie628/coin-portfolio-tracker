//components
import { VStack, Flex, Grid, Text } from "@chakra-ui/react";
import CoinCard from "@/components/ui/CoinCard";
export default function PortCoins() {
  return (
    <VStack className=" bg-halfblack flex-1 p-10 relative overflow-scroll">
      <Flex className="justify-between w-full bg-blackest sticky inset-0 ">
        <Text>Your Coins</Text>
        <Text>Add</Text>
      </Flex>
      <Flex width="full" className="relative rounded-sm">
        <Grid templateColumns="repeat(4, 1fr)" className="w-full gap-10 p-5 ">
          <CoinCard />
          <CoinCard />
          <CoinCard />
          <CoinCard />
          <CoinCard />
          <CoinCard />
          <CoinCard />
          <CoinCard />
          <CoinCard />
        </Grid>
      </Flex>
    </VStack>
  );
}
