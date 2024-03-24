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
import clsx from "clsx";
import BottomDrawer from "@/components/layout/BottomDrawer";
import Price from "@/components/ui/Price";
import Trend from "@/components/ui/Trend";
import Stats from "@/components/ui/Stats";
import Button from "@/components/ui/Button";
import { ChevronLeft } from "lucide-react";
import { Divider } from "@chakra-ui/react";
import TransactionModal from "./components/TransactionModal";
import { Link } from "react-router-dom";
import { useState } from "react";
//hooks
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
//thunks
import { loadInvestOptionThunk } from "../../store/action/action.investOption";
export default function TransactionsList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { investOptionId } = useParams();
  const invest = useSelector((state) => state.investOption);

  useEffect(() => {
    dispatch(loadInvestOptionThunk({ id: investOptionId }));
  }, []);
  return (
    <BottomDrawer back="/portfolio">
      <TransactionModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      <div className="bg-blackest overflow-scroll w-full h-full relative rounded-2xl  align-center text-lightstar border-r-0 border border-opacity-40 border-dashed border-white pb-20 ">
        <Flex className="w-full  flex-col sticky top-0 z-[60] bg-blackest">
          <HStack className="w-10/12 p-3 ml-auto mr-auto justify-between">
            <Link to="/portfolio">
              <Flex className="cursor-pointer gap-2 hover:text-white">
                <ChevronLeft />
                <Text>{invest?.symbol?.toUpperCase() || ""} Transactions</Text>
              </Flex>
            </Link>
            <Button
              size="sm"
              fontWeight="medium"
              variant="black"
              onClick={() => setIsModalOpen(true)}
            >
              ADD TRANSACTION
            </Button>
          </HStack>
          <Divider width="full" borderColor="gray" size="sm" />
        </Flex>

        <VStack className="w-10/12 p-3 ml-auto mr-auto">
          <Grid
            templateColumns={{
              base: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            }}
            className="w-full p-5 gap-3  items-start text-lightstar"
          >
            <Stats
              valueRender={
                <Price
                  className="text-lg md:text-xl"
                  amount={invest.balance || 0}
                  currencyCode="USD"
                  currencyCodeClassName="hidden"
                />
              }
              title="Holdings value"
            />
            <Stats
              valueRender={
                <Price
                  className="text-lg md:text-xl"
                  amount={invest.holding || 0}
                  currencyCode="USD"
                  currencyCodeClassName="hidden"
                />
              }
              title="Holdings"
            />
            <Stats
              valueRender={
                <Price
                  className="text-lg md:text-xl"
                  amount={invest.capital || 0}
                  currencyCode="USD"
                  currencyCodeClassName="hidden"
                />
              }
              title="Total Cost"
            />
            <Stats
              valueRender={
                <Price
                  className="text-lg md:text-xl"
                  amount={invest.totalProceeds || 0}
                  currencyCode="USD"
                  currencyCodeClassName="hidden"
                />
              }
              title="Total Proceeds"
            />
            <Stats
              valueRender={
                <Price
                  className="text-lg md:text-xl"
                  amount={invest.averageNetCost || 0}
                  currencyCode="USD"
                  currencyCodeClassName="hidden"
                />
              }
              title="Avg Net Cost"
            />
            <Stats
              valueRender={
                <Flex className="flex-col justify-center md:flex-row" gap="3">
                  <Price
                    className="text-lg md:text-xl"
                    amount={invest.totalPnl || 0}
                    currencyCode="USD"
                    currencyCodeClassName="hidden"
                  />
                  <Trend
                    className="text-sm md:text-lg"
                    value={invest.pnl_percentage * 100 || 0}
                  />
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
                  <Th>Proceeds</Th>
                  <Th>PNL</Th>
                </Tr>
              </Thead>
              <Tbody>
                {invest.transactions.length > 0 ? (
                  invest.transactions.map((x, index) => (
                    <Tr
                      key={index}
                      className={index % 2 == 0 ? "bg-blackest" : "bg-blacker"}
                    >
                      <Td
                        className={
                          x.type === "buy" ? "text-greenstats" : "text-redstats"
                        }
                      >
                        {x.type.toUpperCase()}
                      </Td>
                      <Td>
                        <Price
                          amount={x.price}
                          className="text-metaldark"
                          currencyCode="USD"
                          currencyCodeClassName="hidden"
                        />
                      </Td>
                      <Td className="text-metaldark">{x.quantity}</Td>
                      <Td className="text-metaldark">
                        {x.date ? new Date(x.date).toLocaleDateString() : "_"}
                      </Td>
                      <Td>
                        <Price
                          amount={x.fee || 0}
                          currencyCode="USD"
                          currencyCodeClassName="hidden"
                        />
                      </Td>
                      <Td>
                        <Price
                          amount={x.price * x.quantity - x.fee}
                          className="text-metaldark"
                          currencyCode="USD"
                          currencyCodeClassName="hidden"
                        />
                      </Td>
                      <Td>
                        <Price
                          amount={x.proceeds}
                          className="text-metaldark"
                          currencyCode="USD"
                          currencyCodeClassName="hidden"
                        />
                      </Td>
                      <Td>
                        <Price
                          amount={x.pnl}
                          className={clsx(
                            "text-metaldark ",
                            x.pnl > 0 ? "text-greenstats" : "text-redstats"
                          )}
                          currencyCode="USD"
                          currencyCodeClassName="hidden"
                        />
                      </Td>
                    </Tr>
                  ))
                ) : (
                  <div className="w-full flex justify-center items-center text-lg p-5">
                    <div> No transaction yet !</div>
                  </div>
                )}
              </Tbody>
            </Table>
          </TableContainer>
        </VStack>
      </div>
    </BottomDrawer>
  );
}
