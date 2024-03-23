import Highcharts from "highcharts";
import abbreviateNumber from "@/utils/abbreviateNumber";
function labelFormat(timeRange) {
  if (timeRange === "day") {
    return Highcharts.dateFormat("%H:%M", this.value);
  } else if (timeRange === "month") {
    return Highcharts.dateFormat("%e %b", this.value); // Day Month format
  } else if (timeRange === "year") {
    return Highcharts.dateFormat("%b", this.value); // Month format
  }
}
function tooltipFormatter() {
  return (
    '<div style="color:#ccc"><b>Price</b>: ' +
    (this.y > 1 ? this.y.toFixed(2) : this.y.toFixed(6)) +
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
  timeRange = "year",
}) => {
  const color = data[0][1] <= data[data.length - 1][1] ? "green" : "red";
  const ticker =
    timeRange === "year"
      ? 2592000000
      : timeRange === "month"
      ? 12 * 24 * 60 * 60 * 1000
      : 4 * 60 * 60 * 1000;
  return {
    title: { text: "" },
    xAxis: {
      type: "datetime",
      visible: true,
      gridLineWidth: 0,
      title: {
        text: null,
      },
      tickInterval: ticker,
      labels: {
        style: {
          fontWeight: "900",
          color: "dimgray",
        },
        formatter: function () {
          return labelFormat.call(this, timeRange);
        },
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
        x: 30, // Move labels 15 pixels to the left
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
        type: "area",
        fillColor: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [
              0,
              color === "green"
                ? "rgba(0, 255, 0, 0.2)"
                : "rgba(255, 0, 0, 0.2)",
            ],
            [
              1,
              color === "green" ? "rgba(0, 255, 0, 0)" : "rgba(255, 0, 0, 0)",
            ],
          ],
        },
        color,
        dashStyle: "Solid",
        showInLegend: false,
        animation: false,
        data,
        marker: {
          radius: 5,
        },
      },
    ],
    chart: {
      type: "line",
      height: "70%",
      backgroundColor: "transparent",
      width: null,
      marginRight: 80,
      events: {
        render: function () {
          const chart = this,
            renderer = this.renderer,
            pathStr = "M0 0 L100 0 L100 24 L0 24 Z",
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
              .translate(0, -10)
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
