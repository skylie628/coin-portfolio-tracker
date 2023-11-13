import { Flex } from "@chakra-ui/react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
export default function ChartView() {
  const chartOptions = {
    chart: {
      type: "pie",
      backgroundColor: "rgb(30 41 59)",
    },
    title: {
      text: "Slice of the pie",
      style: {
        color: "orange",
      },
    },
    series: [
      {
        data: [
          {
            name: "Chicken",
            y: 40,
          },
          {
            name: "Vegetable",
            y: 30,
          },
          {
            name: "Fish",
            y: 20,
          },
          {
            name: "Steak",
            y: 5,
          },
          {
            name: "Other",
            y: 5,
          },
        ],
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
    <Flex className="bg-slate-800 h-full w-full justify-center items-center">
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </Flex>
  );
}
