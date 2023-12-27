export const sparklineConfig = ({ data = [1, 2, 3, 4] }) => ({
  title: { text: "" },
  xAxis: { visible: false },
  yAxis: { visible: false },
  tooltip: {
    enabled: false,
  },
  credits: false,
  series: {
    color: data[0] <= data[data.length - 1] ? "green" : "red",
    dashStyle: "Solid",
    showInLegend: false,
    data,
    marker: {
      radius: 2,
    },
  },
  chart: {
    type: "line",
    height: 60,
    backgroundColor: "transparent",
    width: 200,
  },
});
