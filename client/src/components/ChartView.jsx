import { Flex } from "@chakra-ui/react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useSelector } from "react-redux";
export default function ChartView() {
  const chartType = useSelector((state) => state.chart.chartType);
  let averageVoltage = [];
  for (var i = 0; i < 10; i++) {
    averageVoltage.push({ x: new Date(Date.now).getTime(), y: 1 });
  }
  const chartOptions =
    chartType == "pie"
      ? {
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
                  y: 23,
                },
                {
                  name: "Vegetable",
                  y: 35,
                },
                {
                  name: "Fish",
                  y: 46,
                },
                {
                  name: "Steak",
                  y: 117,
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
        }
      : {
          chart: {
            type: "line",
            backgroundColor: "rgb(30 41 59)",
          },
          title: {
            text: "Line chart",
            style: {
              display: "none",
            },
          },
          legend: {
            align: "right",
            verticalAlign: "top",
            symbolWidth: 5,
            symbolHeight: 8,
          },
          xAxis: {
            tickColor: "#FFFFFF",
            categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          },
          yAxis: {
            tickColor: "#FFFFFF",
            gridLineColor: "#FFFFFF",
            title: {
              style: {
                display: "none",
              },
            },
            labels: {},
          },
          plotOptions: {
            series: {
              marker: {
                symbol: "circle",
              },
            },
          },
          tooltip: {
            shared: true,
          },
          series: [
            {
              type: "line",
              name: "Bar",
              color: "#6a6a6a",
              pointPadding: 0,
              groupPadding: 0,
              data: averageVoltage,
            },
            {
              type: "line",
              name: "Foo",
              color: "#0071ce",
              data: averageVoltage,
            },
            {
              type: "line",
              name: "Line 2",
              color: "#ff671b",
              data: averageVoltage,
            },
          ],
        };

  return (
    <Flex className="bg-slate-800 h-full w-full justify-center items-center">
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </Flex>
  );
}
