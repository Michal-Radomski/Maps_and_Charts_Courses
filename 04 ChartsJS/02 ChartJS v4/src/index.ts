import { ChartConfiguration } from "chart.js";

const { Chart } = window;

//* Radial Bar Chart
// const data = {
//   datasets: [
//     {
//       label: "Red",
//       data: [15],
//       backgroundColor: ["rgba(255, 99, 132, 0.2)"],
//       borderColor: ["rgba(255, 99, 132, 1)"],
//       borderWidth: 3,
//       circumference: (ctx: { chart: { data: { datasets: any[] } }; dataset: { data: number[] } }) => {
//         const datapoints = ctx.chart.data.datasets.map((dataset, _index) => {
//           return dataset.data[0];
//         });
//         const maxValue = Math.max(...datapoints);
//         // return (ctx.dataset.data[0] / maxValue) * 270;
//         return (ctx.dataset.data[0] / maxValue) * 360;
//       },
//     },
//     {
//       label: "Blue",
//       data: [30],
//       backgroundColor: ["rgba(54, 162, 235, 0.2)"],
//       borderColor: ["rgba(54, 162, 235, 1)"],
//       borderWidth: 3,
//       circumference: (ctx: { chart: { data: { datasets: any[] } }; dataset: { data: number[] } }) => {
//         const datapoints = ctx.chart.data.datasets.map((dataset, _index) => {
//           return dataset.data[0];
//         });
//         const maxValue = Math.max(...datapoints);
//         // return (ctx.dataset.data[0] / maxValue) * 270;
//         return (ctx.dataset.data[0] / maxValue) * 360;
//       },
//     },
//     {
//       label: "Yellow",
//       data: [3],
//       backgroundColor: ["rgba(255, 159, 64, 0.2)"],
//       borderColor: ["rgba(255, 159, 64, 1)"],
//       borderWidth: 3,
//       circumference: (ctx: { chart: { data: { datasets: any[] } }; dataset: { data: number[] } }) => {
//         const datapoints = ctx.chart.data.datasets.map((dataset, _index) => {
//           return dataset.data[0];
//         });
//         const maxValue = Math.max(...datapoints);
//         // return (ctx.dataset.data[0] / maxValue) * 270;
//         return (ctx.dataset.data[0] / maxValue) * 360;
//       },
//     },
//   ],
// };

// // barLabels plugin
// const barLabels = {
//   id: "barLabels",
//   beforeDatasetsDraw(chart: { getDatasetMeta?: any; ctx?: any; data?: any }) {
//     const { ctx, data } = chart;
//     ctx.save();
//     // console.log("chart.getDatasetMeta(0).data:", chart.getDatasetMeta(0).data);

//     ctx.font = "bold 12px sans-serif";
//     ctx.textAlign = "right";
//     ctx.textBaseline = "middle";

//     for (let i = 0; i < data.datasets.length; i++) {
//       const xCoor = chart.getDatasetMeta(i).data[0].x;
//       const yCoor = chart.getDatasetMeta(i).data[0].y;
//       const innerRadius = chart.getDatasetMeta(i).data[0].innerRadius;
//       const outerRadius = chart.getDatasetMeta(i).data[0].outerRadius;
//       const thickness = outerRadius - innerRadius;
//       ctx.fillStyle = data.datasets[i].borderColor;
//       ctx.fillText(data.datasets[i].label, xCoor - 5, yCoor - innerRadius - thickness / 2);
//     }
//   },
// };

// const config = {
//   type: "doughnut",
//   data: data,
//   options: {
//     borderRadius: 10,
//     cutout: "67%",
//     plugins: {
//       legend: {
//         display: false,
//       },
//     },
//   },
//   plugins: [barLabels],
// };

// new Chart(document.getElementById("myChart") as HTMLCanvasElement, config as ChartConfiguration);

//* Create a Track behind the Bar Chart
const labels = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 3,
    },
  ],
};

// verticalBackground plugin
const verticalBackground = {
  id: "verticalBackground",
  beforeDatasetsDraw(chart: {
    data: any;
    ctx: any;
    chartArea: { top: number; bottom: number; left: number; right: number; width: number; height: number };
    scales: { x: any; y: any };
  }) {
    const {
      data,
      ctx,
      chartArea: { top, bottom, left, right, width, height },
      scales: { x, y },
    } = chart;
    const barPercentage = data.datasets[0].barPercentage || 0.9;
    const categoryPercentage = data.datasets[0].categoryPercentage || 0.8;
    const barWidth = (width / data.labels.length) * barPercentage * categoryPercentage;
    ctx.save();
    const xCoor = x.getPixelForValue(0);
    ctx.fillRect(xCoor - barWidth / 2, top, barWidth, height);
  },
};

const config = {
  type: "bar",
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
  plugins: [verticalBackground],
};

new Chart(document.getElementById("myChart") as HTMLCanvasElement, config as unknown as ChartConfiguration);

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
