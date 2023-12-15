import { VStack, Flex, Grid, GridItem } from "@chakra-ui/react";
import CoinCard from "../../components/ui/CoinCard";
export default function PortCoins() {
  return (
    <VStack className=" bg-halfblack flex-1 p-5">
      <Flex width="full" className=" rounded-sm">
        <Grid templateColumns="repeat(2, 1fr)" className="w-full gap-10 p-5 ">
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
