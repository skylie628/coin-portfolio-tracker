//component
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
//other
import { sparklineChartConfig } from "@/lib/highchart/sparklineChartConfig";
import { sparklineConfig } from "@/lib/highchart/sparklineConfig";
const Sparkline = ({ data, variant }) => {
  return (
    <HighchartsReact
      className="m-auto flex-1 w-full h-full"
      highcharts={Highcharts}
      isPureConfig
      options={
        variant === "detail"
          ? sparklineDetailConfig({ data })
          : sparklineConfig({ data })
      }
    />
  );
};
export default Sparkline;
