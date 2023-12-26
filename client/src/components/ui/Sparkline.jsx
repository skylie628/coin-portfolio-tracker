//component
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
//other
import { sparklineConfig } from "@/lib/highchart";
const Sparkline = ({ data }) => {
  return (
    <HighchartsReact
      className="m-auto flex-1"
      highcharts={Highcharts}
      isPureConfig
      options={sparklineConfig({ data })}
    />
  );
};
export default Sparkline;
