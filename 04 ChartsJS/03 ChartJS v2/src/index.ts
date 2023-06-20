import { ChartConfiguration } from "chart.js";

const { Chart } = window;

//* Line Chart
// const ctx = (document.getElementById("myChart")! as HTMLCanvasElement).getContext("2d");
// new Chart(ctx!, {
//   type: "line",
//   data: {
//     // @ts-ignore
//     xAxisID: "un",
//     labels: ["Jan", "Feb", "March", "April", "May", "June", "July", "August"],
//     datasets: [
//       {
//         label: "My sales",
//         backgroundColor: "rgba(255, 99, 132, 0.5)",
//         borderColor: "blue",
//         borderWidth: 4,
//         borderDash: [10, 8],
//         borderDashOffset: 10,
//         borderCapStyle: "square",
//         borderJoinStyle: "bevel",
//         //cubicInterpolationMode: "monotone",
//         fill: "start",
//         lineTension: 0.4, //* Default: 0.4!
//         pointBackgroundColor: ["red", "green", "blue", "yellow", "pink", "purple"],
//         pointBorderColor: "pink",
//         pointBorderWidth: 5,
//         pointRadius: 2,
//         pointStyle: "triangle", //* Can be image here!
//         pointHitRadius: 20,
//         pointHoverBackgroundColor: "deeppink",
//         pointHoverBorderColor: "black",
//         pointHoverBorderWidth: 2,
//         pointHoverRadius: 10,
//         showLine: true,
//         spanGaps: true,
//         steppedLine: false, //* If true it looks like stairs!
//         data: [0, 20, 5, 2, 20, 30, 40, 20],
//       },
//       {
//         label: "My Profits",
//         backgroundColor: "rgba(0, 99, 132, 0.2)",
//         borderColor: "blue",
//         data: [0, 40, 5, 2, 20, 30, 40, 20],
//       },
//     ],
//   },

//   options: {
//     scales: {
//       yAxes: [
//         {
//           stacked: true, //* If true -> one chart over second one!
//         },
//       ],
//     },
//   } as ChartConfiguration,
// });

//* Bar Chart
// const ctx = (document.getElementById("myChart")! as HTMLCanvasElement).getContext("2d");
// new Chart(ctx!, {
//   type: "bar",
//   // type: "horizontalBar",

//   data: {
//     labels: ["January", "February", "March", "April", "May", "June", "July"],
//     datasets: [
//       {
//         label: "Monthly Sales",
//         backgroundColor: "red",
//         borderColor: "black",
//         borderWidth: 2,
//         // borderSkipped: "right",
//         // hoverBackgroundColor: "#000",
//         hoverBorderColor: ["red", "yellow", "green", "blue", "purple", "orange", "grey"],
//         hoverBorderWidth: 5,
//         data: [20, 10, 5, 2, 20, 30, 45],
//       },
//       {
//         label: "Monthly Profits",
//         backgroundColor: "green",
//         borderColor: "black",
//         data: [20, 10, 5, 2, 20, 30, 45],
//       },
//     ],
//   },

//   options: {
//     scales: {
//       xAxes: [
//         {
//           // barPercentage: 1,
//           // categoryPercentage: 1,
//           barThickness: 40,
//           // maxBarThickness: 30,
//           gridLines: {
//             offsetGridLines: false,
//           },
//           stacked: true,
//         },
//       ],
//       yAxes: [
//         {
//           stacked: true,
//         },
//       ],
//     },
//   } as ChartConfiguration,
// });

//* Radar Chart
const ctx = (document.getElementById("myChart")! as HTMLCanvasElement).getContext("2d");
new Chart(ctx!, {
  type: "radar",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Radar Chart Values",
        backgroundColor: "rgb(0, 99, 132)",
        borderColor: "rgb(0, 0, 132)",
        borderWidth: 10,
        //borderDash: [5, 15, 2, 15],
        borderDashOffset: 10,
        borderCapStyle: "square",
        borderJoinStyle: "round",
        lineTension: 0,
        pointBackgroundColor: ["green", "blue", "red", "yellow", "green", "blue", "red"],
        pointBorderColor: "white",
        pointBorderWidth: 2,
        pointRadius: 5,
        //pointStyle: "triangle",
        pointHitRadius: 10,
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: ["green", "blue", "red", "yellow", "green", "blue", "red"],
        pointHoverBorderWidth: 5,
        pointHoverRadius: 10,
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  },
  options: {} as ChartConfiguration,
});
