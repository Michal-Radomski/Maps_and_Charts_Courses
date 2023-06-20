import { ChartConfiguration } from "chart.js";

const { Chart } = window;

//* Line Chart
const ctx = (document.getElementById("myChart")! as HTMLCanvasElement).getContext("2d");
new Chart(ctx!, {
  type: "line",
  data: {
    // @ts-ignore
    xAxisID: "un",
    labels: ["Jan", "Feb", "March", "April", "May", "June", "July", "August"],
    datasets: [
      {
        label: "My sales",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "blue",
        borderWidth: 4,
        borderDash: [10, 8],
        borderDashOffset: 10,
        borderCapStyle: "square",
        borderJoinStyle: "bevel",
        //cubicInterpolationMode: "monotone",
        fill: "start",
        lineTension: 0.4, //* Default: 0.4!
        pointBackgroundColor: ["red", "green", "blue", "yellow", "pink", "purple"],
        pointBorderColor: "pink",
        pointBorderWidth: 5,
        pointRadius: 2,
        pointStyle: "triangle", //* Can be image here!
        pointHitRadius: 20,
        pointHoverBackgroundColor: "deeppink",
        pointHoverBorderColor: "black",
        pointHoverBorderWidth: 2,
        pointHoverRadius: 10,
        showLine: true,
        spanGaps: true,
        steppedLine: false, //* If true it looks like stairs!
        data: [0, 20, 5, 2, 20, 30, 40, 20],
      },
      {
        label: "My Profits",
        backgroundColor: "rgba(0, 99, 132, 0.2)",
        borderColor: "blue",
        data: [0, 40, 5, 2, 20, 30, 40, 20],
      },
    ],
  },

  options: {
    scales: {
      yAxes: [
        {
          stacked: true, //* If true -> one chart over second one!
        },
      ],
    },
  } as ChartConfiguration,
});

//- ----------------------------------------------

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
