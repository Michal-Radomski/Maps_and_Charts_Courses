import { ChartConfiguration } from "chart.js";

const { Chart } = window;
// console.log("Chart:", Chart);
// console.log({ window });

// //* Bar Chart
// // Data block
// const labels = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];
// labels.shift();
// labels.unshift("Red2");

// labels.pop();
// labels.push("Orange2");

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
//       y: {
//         beginAtZero: true,
//       },
//     },
//   },
// };

// // Init render block
// const myChart: Chart = new Chart(document.getElementById("myChart") as HTMLCanvasElement, config as ChartConfiguration);
// console.log("myChart:", myChart);

// const ctx = (document.getElementById("myChart") as HTMLCanvasElement)?.getContext("2d");
// console.log("ctx:", ctx);

// //* Line Chart
// // Data block
// const labels = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];

// const data = {
//   labels: labels,
//   datasets: [
//     {
//       label: "# of Votes",
//       data: [12, 19, 3, 5, 2, 3],
//       fill: false,
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
//       tension: 0.4,
//       borderWidth: 5,
//       // pointRadius: 0,
//       // pointHoverRadius: 0,
//     },
//   ],
// };

// // Config block
// const config = {
//   type: "line",
//   data: data,
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   },
// };

// // Init render block
// new Chart(document.getElementById("myChart") as HTMLCanvasElement, config as ChartConfiguration);

// //* Horizontal Line Chart
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
//     indexAxis: "y",
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   },
// };

// //* Doughnut Chart
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
//       borderRadius: 5,
//       offset: 10,
//       hoverOffset: 20,
//     },
//   ],
// };

// const config = {
//   type: "doughnut",
//   // type: "pie",
//   data: data,
//   options: {
//     cutout: "90%",
//     layout: {
//       padding: { bottom: 10 },
//     },
//   },
// };

// //* Scatter Chart
// const data = {
//   datasets: [
//     {
//       label: "# of Votes",
//       data: [
//         { x: 3, y: 12 },
//         { x: 6, y: 19 },
//         { x: 21, y: 3 },
//         { x: 11, y: 14 },
//         { x: 10, y: 10 },
//         { x: 22, y: 15 },
//       ],
//       backgroundColor: "rgba(54, 162, 235, 0.5)",
//       borderColor: "rgba(54, 162, 235, 1)",
//       borderWidth: 3,
//       borderRadius: 5,
//       offset: 10,
//       hoverOffset: 20,
//       showLine: true,
//       tension: 0.5,
//     },
//   ],
// };

// const config = {
//   type: "scatter",
//   data: data,
//   options: {
//     scales: {
//       x: {
//         beginAtZero: true,
//       },
//       y: {
//         beginAtZero: true,
//       },
//     },
//   },
// };

//* Buble Chart
const data = {
  datasets: [
    {
      label: "# of Blue Votes",
      data: [
        { x: 3, y: 12, r: 4 },
        { x: 6, y: 19, r: 6 },
        { x: 21, y: 3, r: 2 },
        { x: 11, y: 14, r: 9 },
        { x: 10, y: 10, r: 10 },
        { x: 22, y: 15, r: 7 },
      ],
      backgroundColor: "rgba(54, 162, 235, 0.5)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 3,
    },
    {
      label: "# of Violet Votes2",
      data: [
        { x: 5, y: 9, r: 3 },
        { x: 8, y: 12, r: 4 },
        { x: 16, y: 0, r: 2 },
        { x: 21, y: 7, r: 5 },
        { x: 16, y: 7, r: 5 },
        { x: 12, y: 3, r: 10 },
      ],
      backgroundColor: "rgba(153, 102, 255, 0.5)",
      borderColor: "rgba(153, 102, 255, 1)",
      borderWidth: 3,
    },
  ],
};

const config = {
  type: "bubble",
  data: data,
  options: {
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  },
};

new Chart(document.getElementById("myChart") as HTMLCanvasElement, config as ChartConfiguration);
