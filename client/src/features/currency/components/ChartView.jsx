import { forwardRef, useRef, useEffect } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { useGetHistoryPrice } from "@/features/currency/hooks/useGetHistoryPrice";
import { useSelector } from "react-redux";
import { sparklineChartConfig } from "@/lib/highchart/sparklineChartConfig";
import abbreviateNumber from "@/utils/abbreviateNumber";

const ChartView = forwardRef(({ coinId, timeRange, yAxisMeasure }, ref) => {
  const { data, isLoading: isChartLoading } = useGetHistoryPrice({
    coinId,
    timeRange,
    yAxisMeasure,
  });
  const { currentValue, streamMode } = useSelector(
    (state) => state.streaming.currency
  );
  const chartData = JSON.parse(JSON.stringify(data[yAxisMeasure]));
  useEffect(() => {
    if (chartData.length === 0) return;
    const chart = ref.current.chart;
    const series = chart.series[0];
    // update last point when streammode is on and yAxisMeasure is price
    if (currentValue && yAxisMeasure === "price") {
      const currentDate = new Date().getTime();
      const lastPoint = series.data[series.data.length - 1];
      lastPoint.update([currentDate, parseFloat(currentValue)], true);
    }
    // label text = current value if streammode is on and yAxisMeasure is price, = last point value if streammode is off or yAxisMeasure is cap
    if (chart.labelTxt) {
      chart.labelTxt.attr({
        text: abbreviateNumber(
          parseFloat(
            yAxisMeasure === "price" && currentValue
              ? currentValue
              : series.data[series.data.length - 1].y
          ),
          2
        ),
      });
    }
  }, [currentValue, yAxisMeasure]);
  return chartData.length > 0 ? (
    <div className="relative w-full justify-center items-center md:px-10 xl:px-20 ">
      <HighchartsReact
        ref={ref}
        className="m-auto flex-1 "
        highcharts={Highcharts}
        options={sparklineChartConfig({ data: chartData, timeRange })}
        containerProps={{ style: { width: "100%" } }}
      />
    </div>
  ) : (
    <div
      className="w-full h-[300px] flex justify-center items-center"
      ref={ref}
    >
      Unavailable Data
    </div>
  );
});
ChartView.displayName = "ChartView";
export default ChartView;
