import abbreviateNumber from "../../utils/abbreviateNumber";
export default function pieChartConfig(chartValues) {
  return {
    chart: {
      type: "pie",
      backgroundColor: "#020617",
      width: null,
    },
    title: {
      text: "Assets allocation",
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
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
      formatter: function () {
        let value = this.y;
        value = abbreviateNumber(value); // Use your abbreviateNumber function here
        return value;
      },
    },
    plotOptions: {
      pie: { borderColor: "orange" },
    },
  };
}
