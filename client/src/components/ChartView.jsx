import { Flex, Switch } from "@chakra-ui/react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useSelector } from "react-redux";
export default function ChartView() {
  const { chartType, chartValues: preChartValues } = useSelector(
    (state) => state.chart
  );
  //high chart mutate redux state causing error
  const chartValues = JSON.parse(JSON.stringify(preChartValues));
  console.log("reder chart");
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
        }
      : {
          chart: {
            type: "line",
            backgroundColor: "rgb(30 41 59)",
          },
          labels: {
            formatter() {
              return `<span style="color: orange">${this.value}</span>`;
            },
          },
          title: {
            text: "Line chart",
            style: {
              color: "orange",
            },
          },
          legend: {
            align: "right",
            verticalAlign: "top",
            itemStyle: { color: "orange", fontSize: "11px" },
            symbolWidth: 5,
            symbolHeight: 8,
          },
          xAxis: {
            tickColor: "orange",
            gridLineColor: "orange",
            lineColor: "orange",
            categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            title: {
              style: {
                color: "orange",
              },
            },
            labels: { style: { color: "orange" } },
          },
          yAxis: {
            tickColor: "orange",
            lineColor: "orange",
            gridLineColor: "orange",
            labels: { style: { color: "orange" } },
            title: {
              style: {
                color: "orange",
              },
            },
          },
          plotOptions: {
            series: {
              dataLabels: {
                color: "orange",
              },
              marker: {
                symbol: "circle",
              },
            },
          },
          tooltip: {
            shared: true,
          },
          series: chartValues.map((variable) => ({
            type: "line",
            name: variable.full_name,
            color: variable.color,
            pointPadding: 0,
            groupPadding: 0,
            data: variable.value,
          })),
        };
  console.log("options", chartOptions);
  return (
    <Flex className="bg-slate-800 h-full w-full justify-center items-center">
      {chartValues.length > 0 && (
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      )}
    </Flex>
  );
}
