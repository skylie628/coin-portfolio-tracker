import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Flex,
  Text,
  VStack,
  HStack,
  Grid,
} from "@chakra-ui/react";
import BottomDrawer from "../../components/layout/BottomDrawer";
import Price from "../../components/ui/Price";
import Trend from "../../components/ui/Trend";
import Stats from "../../components/ui/Stats";
import { Button } from "@chakra-ui/react";
import { ChevronLeft } from "lucide-react";
import { Divider } from "@chakra-ui/react";
import TransactionModal from "./TransactionModal";
import { useState } from "react";
export default function TransactionsList() {
  const headerName = [
    "Type",
    "Price",
    "Quantity",
    "Date",
    "Fees",
    "Costs",
    "PNL",
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const mock = new Array(20).fill(0).map((item) => ({
    Type: "Sell",
    Price: 123,
    Quantity: 0.02,
    Date: Date.now(),
    Fees: 0.0001,
    Costs: 33202,
    PNL: 17,
  }));
  return (
    <BottomDrawer>
      <TransactionModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      <div className="bg-blackest overflow-scroll w-full h-full relative rounded-2xl  align-center text-lightstar border-r-0 border border-opacity-40 border-dashed border-white  ">
        <Flex className="w-full  flex-col sticky top-0 z-[60] bg-blackest">
          <HStack className="w-10/12 p-3 ml-auto mr-auto justify-between">
            <Flex className="cursor-pointer gap-3">
              <ChevronLeft />
              <Text>Bitcoin Transactions</Text>
            </Flex>
            <Button
              size="sm"
              fontWeight="medium"
              className="bg-orange  font-light text-sm"
              onClick={() => setIsModalOpen(true)}
            >
              Add
            </Button>
          </HStack>
          <Divider width="full" borderColor="gray" size="sm" />
        </Flex>

        <VStack className="w-10/12 p-3 ml-auto mr-auto">
          <Grid
            templateColumns="repeat(4, 1fr)"
            className="w-full p-5 gap-3  items-start text-lightstar"
          >
            <Stats
              valueRender={
                <Price
                  amount={8034}
                  currencyCode="USD"
                  currencyCodeClassName="hidden"
                />
              }
              title="Holdings value"
            />
            <Stats
              valueRender={
                <Price
                  amount={8034}
                  currencyCode="USD"
                  currencyCodeClassName="hidden"
                />
              }
              title="Holdings"
            />
            <Stats
              valueRender={
                <Price
                  amount={8034}
                  currencyCode="USD"
                  currencyCodeClassName="hidden"
                />
              }
              title="Total Cost"
            />
            <Stats
              valueRender={
                <Flex gap="3">
                  <Price
                    amount={1211}
                    currencyCode="USD"
                    currencyCodeClassName="hidden"
                  />
                  <Trend value={12} />
                </Flex>
              }
              title="Profit / Loss"
            />
          </Grid>
          <TableContainer className="w-full rounded-xl ml-auto mr-auto   rounded-xl text-dimgray  ">
            <Table variant="transaction" className="rounded-xl">
              <Thead>
                <Tr className="bg-blacker">
                  <Th>Type</Th>
                  <Th>Price</Th>
                  <Th>Quantity</Th>
                  <Th>Date</Th>
                  <Th>Fees</Th>
                  <Th>Costs</Th>
                  <Th>PNL</Th>
                </Tr>
              </Thead>
              <Tbody>
                {mock.map((x, index) => (
                  <Tr
                    key={index}
                    className={index % 2 == 0 ? "bg-blackest" : "bg-blacker"}
                  >
                    <Td>{x.Type}</Td>
                    <Td>
                      <Price
                        amount={x.Price}
                        className="text-metaldark"
                        currencyCode="USD"
                        currencyCodeClassName="hidden"
                      />
                    </Td>
                    <Td className="text-metaldark">{x.Quantity}</Td>
                    <Td className="text-metaldark">{x.Date}</Td>
                    <Td>
                      <Price
                        amount={x.Fees}
                        currencyCode="USD"
                        currencyCodeClassName="hidden"
                      />
                    </Td>
                    <Td>
                      <Price
                        amount={x.Costs}
                        className="text-metaldark"
                        currencyCode="USD"
                        currencyCodeClassName="hidden"
                      />
                    </Td>
                    <Td>
                      <Price
                        amount={x.PNL}
                        className="text-metaldark"
                        currencyCode="USD"
                        currencyCodeClassName="hidden"
                      />
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </VStack>
      </div>
    </BottomDrawer>
  );
}
