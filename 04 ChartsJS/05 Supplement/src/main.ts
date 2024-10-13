import { Chart, ChartConfiguration, registerables } from "chart.js";

import "./style.scss";

// Register all necessary components
Chart.register(...registerables);

//* Example 1
// // Data block
// const data = {
//   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//   datasets: [
//     {
//       label: "# of Votes",
//       data: [
//         { x: 1, y: 3 },
//         { x: 2, y: 2 },
//         { x: 3, y: 1 },
//         { x: 4, y: 4 },
//         { x: 5, y: 6 },
//         { x: 6, y: 3 },
//       ],
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
//       borderWidth: 1,
//       hoverBackgroundColor: [
//         "rgba(255, 99, 132, 1)",
//         "rgba(54, 162, 235, 1)",
//         "rgba(255, 206, 86, 1)",
//         "rgba(75, 192, 192, 1)",
//         "rgba(153, 102, 255, 1)",
//         "rgba(255, 159, 64, 1)",
//       ],
//     },
//   ],
// };

// // HoverLine plugin block
// const hoverLine = {
//   id: "hoverLine",
//   afterDatasetsDraw(chart: { ctx?: any; data?: any; chartArea?: any; tooltip?: any }) {
//     const {
//       ctx,
//       data,
//       tooltip,
//       chartArea: { left, top, bottom, width, height },
//     } = chart;
//     // console.log("tooltip?._active:", tooltip?._active);

//     if (tooltip._active.length > 0) {
//       const radius = 9;
//       const datasetIndex = tooltip._active[0].datasetIndex;
//       const datapointIndex = tooltip._active[0].index;
//       const xCoor = tooltip._active[0].element.x;
//       const yCoor = tooltip._active[0].element.y;
//       const angle = Math.PI / 180;

//       ctx.save();

//       // Overlay
//       // console.log({ left, top, width, height });
//       ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
//       ctx.fillRect(left, top, width, height);

//       // Circular point with stronger color;
//       ctx.beginPath();
//       ctx.fillStyle = data.datasets[datasetIndex].hoverBackgroundColor[datapointIndex];
//       // console.log("ctx.fillStyle:", ctx.fillStyle);
//       ctx.arc(xCoor, yCoor, 3, 0, angle * 360, false);
//       ctx.fill();

//       ctx.lineWidth = 3;
//       ctx.strokeStyle = "rgba(0, 0, 0, 1)";
//       ctx.setLineDash([6, 9]);

//       // Left Line
//       ctx.beginPath();
//       ctx.moveTo(left, yCoor);
//       ctx.lineTo(xCoor - radius, yCoor);
//       ctx.stroke();

//       // Top to bottom line
//       ctx.beginPath();
//       ctx.moveTo(xCoor, yCoor + radius);
//       ctx.lineTo(xCoor, bottom);
//       ctx.stroke();

//       ctx.setLineDash([]);
//       // ctx.setLineDash([2, 5]);

//       // Circular shape
//       ctx.beginPath();
//       ctx.arc(xCoor, yCoor, radius, 0, angle * 360, false);
//       ctx.stroke();

//       // Rect X
//       ctx.fillStyle = "dimgray";
//       ctx.beginPath();
//       ctx.roundRect(left - 15, yCoor - 10, 30, 20, radius);
//       ctx.fill();

//       // Rect Y
//       ctx.beginPath();
//       ctx.roundRect(xCoor - 15, bottom - 10, 30, 20, radius);
//       ctx.fill();
//     }
//   },
// };

// // Config block
// const config = {
//   type: "scatter",
//   data: data,
//   options: {
//     scales: {
//       x: {
//         min: 0,
//         max: 9,
//       },
//       y: {
//         beginAtZero: true,
//         max: 9,
//       },
//     },
//   },
//   plugins: [hoverLine],
// } as ChartConfiguration;

// // Init render block
// // const myChart = new Chart(document.getElementById("myChart") as HTMLCanvasElement, config);
// // console.log("myChart:", myChart);
// new Chart(document.getElementById("myChart") as HTMLCanvasElement, config);

// // Instantly assign Chart.js version
// const chartVersion = document.getElementById("chartVersion") as HTMLSpanElement;

// chartVersion.innerText = Chart.version;
// // console.log("Chart?.version:", Chart?.version);

//* Example 2
// // Data block
// const data = {
//   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
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
//       borderWidth: 1,
//     },
//   ],
// };

// // Config block
// const config = {
//   type: "bar",
//   data: data,
//   options: {
//     scales: {
//       x: {
//         grid: {
//           display: false,
//           drawOnChartArea: false,
//           drawTicks: false,
//         },
//         border: {
//           display: false,
//         },
//       },
//       y: {
//         beginAtZero: true,
//         grid: {
//           dipl: false,
//           drawOnChartArea: false,
//           drawTicks: false,
//         },
//         border: {
//           display: false,
//         },
//       },
//     },
//   },
// } as ChartConfiguration;

// // Init render block
// new Chart(document.getElementById("myChart") as HTMLCanvasElement, config);

// // Instantly assign Chart.js version
// const chartVersion = document.getElementById("chartVersion") as HTMLSpanElement;

// chartVersion.innerText = Chart.version;
// // console.log("Chart?.version:", Chart?.version);

//* Example 3
// Data block
const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 15, 3, 6, 9, 18],
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
      borderWidth: 1,
      // barPercentage: 0.5,
      // categoryPercentage: 0.8,
    },
  ],
};

// barThickness plugin
const barThickness = {
  id: "barThickness",
  beforeDatasetsDraw(chart: { getDatasetMeta?: any; data?: any }) {
    const { data } = chart;

    const max = Math.max(...data.datasets[0].data);
    const indexNum = data.datasets[0].data.indexOf(max);
    const barWidth = chart.getDatasetMeta(0).data[indexNum].width;
    // console.log({ max, indexNum, barWidth });

    chart.getDatasetMeta(0).data.forEach((dataPoint: { width: number }, index: number) => {
      const newWidth = (barWidth / max) * data.datasets[0].data[index];
      dataPoint.width = newWidth;
    });
  },
};
// console.log("barThickness:", barThickness);

// Config block
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
  plugins: [barThickness],
} as ChartConfiguration;

// Init render block
new Chart(document.getElementById("myChart") as HTMLCanvasElement, config);

// Instantly assign Chart.js version
const chartVersion = document.getElementById("chartVersion") as HTMLSpanElement;

chartVersion.innerText = Chart.version;
// console.log("Chart?.version:", Chart?.version);
