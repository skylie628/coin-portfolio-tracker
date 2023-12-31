import Highcharts from "highcharts";
import abbreviateNumber from "@/utils/abbreviateNumber";
function labelFormat() {
  return Highcharts.dateFormat("%b", this.value);
}
function tooltipFormatter() {
  return (
    '<div style="color:#ccc"><b>Price</b>: ' +
    (this.y > 1 ? this.y.toFixed(6) : this.y.toFixed(6)) +
    "$" +
    '</div><div style="color:#ccc"><b>Time</b>: ' +
    new Date(this.x).toDateString() +
    "</div>"
  );
}
export const sparklineChartConfig = ({
  data = [
    [1, 2],
    [2, 3],
  ],
}) => {
  console.log(data);
  return {
    title: { text: "" },
    xAxis: {
      type: "datetime",
      visible: true,
      gridLineWidth: 0,
      title: {
        text: null,
      },
      tickInterval: 2592000000,
      labels: {
        style: {
          fontWeight: "900",
          color: "dimgray",
        },
        formatter: labelFormat,
      },
    },
    yAxis: {
      visible: true,
      opposite: true,
      title: {
        text: null,
      },
      gridLineWidth: 1,
      gridLineColor: "rgba(255,255,255,0.1)",
      labels: {
        style: {
          fontWeight: "900",
          fontSize: "12px",
          color: "dimgray",
        },
      },
    },
    tooltip: {
      enabled: true,
      useHTML: true,
      backgroundColor: "#333",
      formatter: tooltipFormatter,
    },
    credits: false,

    series: [
      {
        color: data[0][1] <= data[data.length - 1][1] ? "green" : "red",
        dashStyle: "Solid",
        showInLegend: false,
        animation: false,
        data,
        marker: {
          radius: 2,
        },
      },
    ],
    chart: {
      type: "line",
      height: "70%",
      backgroundColor: "transparent",
      width: 600,
      events: {
        render: function () {
          const chart = this,
            renderer = this.renderer,
            pathStr = "M0 12 L12 0 L64 0 L64 24 L12 24 Z",
            path = pathStr.split(" "),
            points = this.series[0].points,
            lastPoint = points[points.length - 1];
          // Update the marker of the last point to make it bigger
          if (!chart.labelBg) {
            chart.labelBg = renderer
              .path(path)
              .attr({
                fill: "#193",
              })
              .add();
          }
          if (!chart.labelTxt) {
            chart.labelTxt = renderer
              .text(abbreviateNumber(lastPoint.y))
              .attr({
                x: -30, // Set the left margin
              })
              .css({
                fontSize: "14px",
                color: "white",
                fontWeight: "bold",
                left: "-15px",
              })
              .add();
          }

          chart.labelBg
            .translate(
              chart.plotWidth + 12,
              lastPoint.plotY + chart.plotTop - 12
            )
            .toFront();

          chart.labelTxt
            .attr({
              x: chart.plotWidth + 29,
              y: lastPoint.plotY + chart.plotTop + 5,
            })
            .toFront();
        },
      },
    },
  };
};
