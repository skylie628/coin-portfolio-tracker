import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { Flex, VStack, Grid, GridItem } from "@chakra-ui/react";
import Stats from "../../components/ui/Stats";
import Trend from "../../components/ui/Trend";
import Price from "../../components/ui/Price";
export default function PortSummary() {
  const chartValues = [
    { value: 10, full_name: "BTC", color: "red" },
    { value: 10, full_name: "ETH", color: "green" },
    { value: 10, full_name: "DOT", color: "blue" },
  ];
  const chartOptions = {
    chart: {
      height: "60%",
      type: "pie",
      backgroundColor: "#020617",
    },
    title: {
      text: "Portion of Port",
      style: {
        color: "orange",
      },
    },
    series: [
      {
        data: chartValues.map((value) => ({
          name: value.full_name,
          y: value.value,
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
    <Flex className="py-5 flex-1  flex-col gap-5 sticky top-[89px] bg-blackest w-6/12 h-[calc(100vh-89px)]">
      <Grid
        templateColumns="repeat(2, 1fr)"
        className="w-full px-5 gap-3  items-start text-lightstar"
      >
        <Stats
          valueRender={
            <Price
              amount={8034}
              currencyCode="USD"
              currencyCodeClassName="hidden"
            />
          }
          title="Total Balance"
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
          title="Total Balance"
        />
      </Grid>
      <HighchartsReact
        className="m-auto"
        highcharts={Highcharts}
        options={chartOptions}
      />
    </Flex>
  );
}
