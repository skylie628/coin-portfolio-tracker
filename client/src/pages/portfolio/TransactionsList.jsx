import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Flex,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";
import BottomDrawer from "../../components/layout/BottomDrawer";
import Price from "../../components/ui/Price";
import Trend from "../../components/ui/Trend";
import Coin from "../../components/ui/Coin";
import { Divider } from "@chakra-ui/react";
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
      <div className="bg-metalgray overflow-scroll w-full h-full relative rounded-2xl  align-center text-blackest ">
        <Flex className="w-full bg-blackest flex-col sticky top-0 z-[60] bg-metalgray ">
          <HStack className="w-10/12 p-3 ml-auto mr-auto">
            <Text>hornor to accompany on your stories</Text>
          </HStack>
          <Divider width="full" borderColor="gray" size="sm" />
        </Flex>

        <VStack className="w-10/12 p-3 ml-auto mr-auto">
          <Flex className="justify-between text-darkest w-full">
            <Text>Add new</Text>
            <Text>Transaction</Text>
          </Flex>
          <TableContainer className="w-full rounded-xl ml-auto mr-auto blackest  rounded-xl text-black  ">
            <Table variant="bright" className="rounded-xl">
              <Thead className="border border-black rounded-xl bg-metalgray">
                <Tr>
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
                  <Tr key={index}>
                    <Td>{x.Type}</Td>
                    <Td>
                      <Price
                        amount={x.Price}
                        currencyCode="USD"
                        currencyCodeClassName="hidden"
                      />
                    </Td>
                    <Td>{x.Quantity}</Td>
                    <Td>{x.Date}</Td>
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
                        currencyCode="USD"
                        currencyCodeClassName="hidden"
                      />
                    </Td>
                    <Td>
                      <Price
                        amount={x.PNL}
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
