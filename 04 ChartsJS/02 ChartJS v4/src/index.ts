import { ChartConfiguration } from "chart.js";

const { Chart } = window;

//* Radial Bar Chart
const data = {
  datasets: [
    {
      label: "Red",
      data: [15],
      backgroundColor: ["rgba(255, 99, 132, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)"],
      borderWidth: 3,
      circumference: (ctx: { chart: { data: { datasets: any[] } }; dataset: { data: number[] } }) => {
        const datapoints = ctx.chart.data.datasets.map((dataset, _index) => {
          return dataset.data[0];
        });
        const maxValue = Math.max(...datapoints);
        // return (ctx.dataset.data[0] / maxValue) * 270;
        return (ctx.dataset.data[0] / maxValue) * 360;
      },
    },
    {
      label: "Blue",
      data: [30],
      backgroundColor: ["rgba(54, 162, 235, 0.2)"],
      borderColor: ["rgba(54, 162, 235, 1)"],
      borderWidth: 3,
      circumference: (ctx: { chart: { data: { datasets: any[] } }; dataset: { data: number[] } }) => {
        const datapoints = ctx.chart.data.datasets.map((dataset, _index) => {
          return dataset.data[0];
        });
        const maxValue = Math.max(...datapoints);
        // return (ctx.dataset.data[0] / maxValue) * 270;
        return (ctx.dataset.data[0] / maxValue) * 360;
      },
    },
    {
      label: "Yellow",
      data: [3],
      backgroundColor: ["rgba(255, 159, 64, 0.2)"],
      borderColor: ["rgba(255, 159, 64, 1)"],
      borderWidth: 3,
      circumference: (ctx: { chart: { data: { datasets: any[] } }; dataset: { data: number[] } }) => {
        const datapoints = ctx.chart.data.datasets.map((dataset, _index) => {
          return dataset.data[0];
        });
        const maxValue = Math.max(...datapoints);
        // return (ctx.dataset.data[0] / maxValue) * 270;
        return (ctx.dataset.data[0] / maxValue) * 360;
      },
    },
  ],
};

// barLabels plugin
const barLabels = {
  id: "barLabels",
  beforeDatasetsDraw(chart: { getDatasetMeta?: any; ctx?: any; data?: any }) {
    const { ctx, data } = chart;
    ctx.save();
    // console.log("chart.getDatasetMeta(0).data:", chart.getDatasetMeta(0).data);

    const xCoor = chart.getDatasetMeta(0).data[0].x;
    const yCoor = chart.getDatasetMeta(0).data[0].y;
    const innerRadius = chart.getDatasetMeta(0).data[0].innerRadius;
    const outerRadius = chart.getDatasetMeta(0).data[0].outerRadius;
    const thickness = outerRadius - innerRadius;
    // console.log({thickness});
    ctx.font = "bold 12px sans-serif";
    ctx.fillStyle = "black";
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    ctx.fillText("Red", xCoor - 5, yCoor - innerRadius - thickness / 2);
  },
};

const config = {
  type: "doughnut",
  data: data,
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
  },
  plugins: [barLabels],
};

new Chart(document.getElementById("myChart") as HTMLCanvasElement, config as ChartConfiguration);

//- -------------------------------------------------

//* Default Code
// const labels = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];

// const data = {
//   labels: labels,
//   datasets: [
//     {
//       label: "# of Votes",
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: [
//         "rgba(255, 99, 132, 0.2)",
//         "rgba(54, 162, 235, 0.2)",
//         "rgba(255, 206, 86, 0.2)",
//         "rgba(75, 192, 192, 0.2)",
//         "rgba(153, 102, 255, 0.2)",
//         "rgba(255, 159, 64, 0.2)",
//       ],
//       borderColor: [
//         "rgba(255, 99, 132, 1)",
//         "rgba(54, 162, 235, 1)",
//         "rgba(255, 206, 86, 1)",
//         "rgba(75, 192, 192, 1)",
//         "rgba(153, 102, 255, 1)",
//         "rgba(255, 159, 64, 1)",
//       ],
//       borderWidth: 3,
//     },
//   ],
// };

// const config = {
//   type: "bar",
//   data: data,
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   },
// };

// new Chart(document.getElementById("myChart") as HTMLCanvasElement, config as ChartConfiguration);
