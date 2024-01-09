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
    plotOptions: {
      pie: { borderColor: "orange" },
    },
  };
}
