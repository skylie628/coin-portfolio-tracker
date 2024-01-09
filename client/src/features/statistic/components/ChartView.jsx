import { Flex } from "@chakra-ui/react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
//hooks
import { useSelector } from "react-redux";
import { useRef } from "react";
//config
import pieChartConfig from "@/lib/highchart/pieChartConfig";
import lineChartConfig from "@/lib/highchart/lineChartConfig";
export default function ChartView() {
  const { chartType, chartValues: preChartValues } = useSelector(
    (state) => state.chart
  );
  const chartComponent = useRef(null);
  //high chart mutate redux state causing error
  const chartValues = JSON.parse(JSON.stringify(preChartValues));
  const chartOptions =
    chartType == "pie"
      ? pieChartConfig(chartValues)
      : lineChartConfig(chartValues);
  return (
    <Flex className="blackest py-5 md:py-20 w-full flex justify-center items-center relative ">
      <div className="w-full h-full">
        {chartValues.length > 0 && (
          <HighchartsReact
            ref={chartComponent}
            highcharts={Highcharts}
            options={chartOptions}
          />
        )}
      </div>
    </Flex>
  );
}
