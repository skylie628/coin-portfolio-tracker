export default function lineChartConfig(chartValues) {
  return {
    chart: {
      type: "line",
      backgroundColor: "rgb(30 41 59)",
      height: null,
    },
    labels: {
      formatter() {
        return `<span style="color: orange">${this.value}</span>`;
      },
    },
    title: {
      text: "Assets growth",
      style: {
        color: "orange",
      },
    },
    legend: {
      align: "right",
      verticalAlign: "top",
      itemStyle: { color: "orange", fontSize: "11px" },
      symbolWidth: 5,
      symbolHeight: 8,
    },
    xAxis: {
      tickColor: "orange",
      gridLineColor: "orange",
      lineColor: "orange",
      categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      title: {
        style: {
          color: "orange",
        },
      },
      labels: { style: { color: "orange" } },
    },
    yAxis: {
      tickColor: "orange",
      lineColor: "orange",
      gridLineColor: "orange",
      labels: { style: { color: "orange" } },
      title: {
        style: {
          color: "orange",
        },
      },
    },
    plotOptions: {
      series: {
        dataLabels: {
          color: "orange",
        },
        marker: {
          symbol: "circle",
        },
      },
    },
    tooltip: {
      shared: true,
    },
    series: chartValues.map((variable) => ({
      type: "line",
      name: variable.full_name,
      color: variable.color,
      pointPadding: 0,
      groupPadding: 0,
      data: variable.value,
    })),
  };
}
