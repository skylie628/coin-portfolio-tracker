//component
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
//other
import { sparklineConfig, sparklineDetailConfig } from "@/lib/highchart";
const Sparkline = ({ data, variant }) => {
  console.log(data);
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
