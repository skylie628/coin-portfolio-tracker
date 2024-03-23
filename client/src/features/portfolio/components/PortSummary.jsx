//component
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { Flex, Grid, Box } from "@chakra-ui/react";
import Stats from "@/components/ui/Stats";
import Trend from "@/components/ui/Trend";
import Price from "@/components/ui/Price";
import Button from "@/components/ui/Button";
import Divider from "@/components/ui/Divider";
//hook
import { useSelector } from "react-redux";
//icons
import { iconsHelper } from "@/config/icons";
import { useState } from "react";
export default function PortSummary({ setIsOpen }) {
  const portfolio = useSelector((state) => state.portfolio).data;
  const [showStats, setShowStats] = useState(false);
  const chartData = portfolio.investid || [];
  const chartOptions = {
    chart: {
      height: "60%",
      type: "pie",
      backgroundColor: "#020617",
    },
    title: {
      text: chartData.length > 0 ? "Crypto assets" : "Port is empty",
      style: {
        color: "orange",
      },
    },
    series: [
      {
        data: chartData.map((value) => ({
          name: value.symbol.toUpperCase(),
          y: value.balance,
          color: value.color,
        })),
        dataLabels: {
          style: {
            color: "orange",
          },
        },
      },
    ],
    plotOptions: {
      pie: { borderColor: "orange" },
    },
  };

  return (
    <>
      <Flex className="container mx-auto py-5 flex-1  flex gap-5  bg-blackest w-full flex-col lg:flex-row">
        <Flex className="flex-1 flex-col items-start px-10 gap-5">
          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", xl: "repeat(2, 1fr)" }}
            className=" gap-3 w-full items-start text-lightstar"
          >
            <Stats
              showStats={showStats}
              valueRender={
                <Price
                  amount={portfolio.balance}
                  currencyCode="USD"
                  currencyCodeClassName="hidden"
                />
              }
              title="Total Balance"
            />
            <Stats
              showStats={showStats}
              valueRender={
                <Flex gap="3">
                  <Price
                    amount={portfolio.totalPnl}
                    currencyCode="USD"
                    currencyCodeClassName="hidden"
                  />
                  <Trend value={portfolio.pnl_percentage * 100} />
                </Flex>
              }
              title="Total Pnl"
            />
          </Grid>
          <Flex className="justify-between w-full">
            <Button onClick={() => setIsOpen(true)}>ADD ASSET</Button>
            <Box
              className="cursor-pointer"
              onClick={() => setShowStats((prev) => !prev)}
            >
              {showStats ? iconsHelper.EyeOn : iconsHelper.EyeOff}
            </Box>
          </Flex>
        </Flex>
        {
          <HighchartsReact
            className="m-auto flex-1"
            highcharts={Highcharts}
            options={chartOptions}
          />
        }
      </Flex>
      <Divider />
    </>
  );
}
