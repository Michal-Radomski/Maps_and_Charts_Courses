import { ChartConfiguration } from "chart.js";

const { Chart } = window;

//- Beginner
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
// const ctx = (document.getElementById("myChart")! as HTMLCanvasElement).getContext("2d");
// new Chart(ctx!, {
//   type: "radar",
//   data: {
//     labels: ["January", "February", "March", "April", "May", "June", "July"],
//     datasets: [
//       {
//         label: "Radar Chart Values",
//         backgroundColor: "rgb(0, 99, 132)",
//         borderColor: "rgb(0, 0, 132)",
//         borderWidth: 10,
//         borderDash: [5, 15, 2, 15],
//         borderDashOffset: 10,
//         borderCapStyle: "square",
//         borderJoinStyle: "round",
//         lineTension: 0,
//         pointBackgroundColor: ["green", "blue", "red", "yellow", "green", "blue", "red"],
//         pointBorderColor: "white",
//         pointBorderWidth: 2,
//         pointRadius: 5,
//         //pointStyle: "triangle",
//         pointHitRadius: 10,
//         pointHoverBackgroundColor: "#fff",
//         pointHoverBorderColor: ["green", "blue", "red", "yellow", "green", "blue", "red"],
//         pointHoverBorderWidth: 5,
//         pointHoverRadius: 10,
//         data: [0, 10, 5, 2, 20, 30, 45],
//       },
//     ],
//   },
//   options: {} as ChartConfiguration,
// });

//* Doughnut / Pie Chart v1
// const ctx = (document.getElementById("myChart")! as HTMLCanvasElement).getContext("2d");
// new Chart(ctx!, {
//   type: "doughnut",

//   data: {
//     labels: ["January", "February", "March", "April", "May", "June", "July"],
//     datasets: [
//       {
//         label: "My First dataset",
//         backgroundColor: ["blue", "red", "orange", "green", "yellow", "teal", "purple"],
//         borderColor: "black",
//         hoverBackgroundColor: "black",
//         hoverBorderColor: ["blue", "red", "orange", "green", "yellow", "teal", "purple"],
//         borderWidth: 0,
//         hoverBorderWidth: 2,
//         data: [10, 10, 5, 2, 20, 30, 45],
//       },
//     ],
//   },

//   options: {
//     cutoutPercentage: 60,
//     // rotation: 0, //* Default -0.5*Math.PI
//     circumference: 6.25,
//     animation: {
//       animateRotate: true,
//       animateScale: true,
//     },
//   } as ChartConfiguration,
// });

//* Doughnut / Pie Chart v2 (Gauge Chart)
// const ctx = (document.getElementById("myChart")! as HTMLCanvasElement).getContext("2d");
// new Chart(ctx!, {
//   type: "pie",

//   data: {
//     labels: ["January", "February", "March"],
//     datasets: [
//       {
//         label: "My First dataset",
//         backgroundColor: ["grey", "red", "grey"],
//         borderColor: "white",
//         hoverBackgroundColor: "white",
//         hoverBorderColor: ["grey", "red", "grey"],
//         borderWidth: 3,
//         hoverBorderWidth: 3,
//         data: [45, 1, 10],
//       },
//       {
//         label: "My Second dataset",
//         backgroundColor: ["yellow"],
//         borderColor: "white",
//         hoverBackgroundColor: "white",
//         hoverBorderColor: ["yellow"],
//         borderWidth: 3,
//         hoverBorderWidth: 3,
//         data: [15, 10, 20],
//       },
//     ],
//   },

//   options: {
//     cutoutPercentage: 80,
//     rotation: 0.8 * Math.PI,
//     circumference: 1.4 * Math.PI,
//     animation: {
//       animateRotate: true,
//       animateScale: true,
//     },
//   } as ChartConfiguration,
// });

//* Polar Chart
// const ctx = (document.getElementById("myChart")! as HTMLCanvasElement).getContext("2d");
// new Chart(ctx!, {
//   type: "polarArea",

//   data: {
//     labels: ["January", "February", "March", "April", "May", "June", "July"],
//     datasets: [
//       {
//         label: "My First dataset",
//         backgroundColor: ["green", "yellow", "teal", "tomato", "red", "purple", "blue"],
//         borderColor: "grey",
//         borderWidth: 1,
//         hoverBackgroundColor: "#0f0",
//         hoverBorderColor: "red",
//         hoverBorderWidth: 2,
//         data: [20, 10, 5, 2, 20, 30, 45],
//       },
//     ],
//   },

//   options: {
//     startAngle: 6.28 - 3.14 / 2,
//     animation: {
//       animateRotate: false,
//       animateScale: false,
//     },
//   } as ChartConfiguration,
// });

//* Bubble Chart
// const ctx = (document.getElementById("myChart")! as HTMLCanvasElement).getContext("2d");
// new Chart(ctx!, {
//   type: "bubble",

//   data: {
//     datasets: [
//       {
//         label: "My First dataset",
//         backgroundColor: ["rgb(255, 99, 132)", "green", "blue"],
//         borderColor: "grey",
//         borderWidth: 5,
//         hoverBackgroundColor: "#98F",
//         hoverBorderColor: "#0AF",
//         hoverBorderWidth: 5,
//         hoverRadius: 0,
//         hitRadius: 10,
//         //pointStyle: "line",
//         radius: 50,
//         data: [
//           { x: 5, y: 10, r: 10 },
//           { x: 15, y: 3, r: 15 },
//           { x: 7, y: 15, r: 30 },
//         ],
//       },
//     ],
//   },

//   options: {} as ChartConfiguration,
// });

//* Scatter Chart
// const ctx = (document.getElementById("myChart")! as HTMLCanvasElement).getContext("2d");
// new Chart(ctx!, {
//   type: "scatter",

//   data: {
//     datasets: [
//       {
//         label: "My First dataset",
//         backgroundColor: "rgb(255, 99, 132)",
//         borderColor: "rgb(255, 99, 132)",
//         data: [
//           { x: 10, y: 20 },
//           { x: 15, y: 10 },
//           { x: -10, y: -10 },
//           { x: 25, y: -5 },
//         ],
//       },
//     ],
//   },

//   options: {} as ChartConfiguration,
// });

//- Semi-Intermediate
//* Line Chart
// const ctx = (document.getElementById("myChart")! as HTMLCanvasElement).getContext("2d");
// new Chart(ctx!, {
//   type: "line",

//   data: {
//     labels: ["January", "February", "March", "April", "May", "June", "July"],
//     datasets: [
//       {
//         label: "My First dataset",
//         backgroundColor: "rgb(255, 99, 132)",
//         borderColor: "rgb(255, 99, 132)",
//         data: [0, 10, 5, 2, 20, 30, 45],
//       },
//     ],
//   },

//   options: {
//     title: {
//       text: ["Chart Title Section", "Made by ..."],
//       display: true,
//       position: "top",
//       fontSize: 20,
//       fontFamily: "Arial",
//       fontColor: "green",
//       fontStyle: "bold italic",
//       padding: 5,
//       lineHeight: 1.2,
//     },
//   } as ChartConfiguration,
// });

//* Combo Bar-Line Chart
// const ctx = (document.getElementById("myChart")! as HTMLCanvasElement).getContext("2d");
// new Chart(ctx!, {
//   type: "bar",

//   data: {
//     labels: ["January", "February", "March", "April", "May", "June", "July"],
//     datasets: [
//       {
//         label: "My First dataset",
//         backgroundColor: "rgb(255, 99, 132)",
//         borderColor: "rgb(255, 99, 132)",
//         data: [0, 10, 5, 2, 20, 30, 45],
//         pointStyle: "rect",
//       },
//       {
//         label: "My Second dataset",
//         //backgroundColor: 'rgb(255, 99, 132)',
//         borderColor: "rgb(0, 99, 132)",
//         data: [0, 10, 5, 2, 20, 30, 45],
//         type: "line",
//         pointStyle: "line",
//       },
//     ],
//   },

//   options: {
//     legend: {
//       labels: {
//         usePointStyle: true,
//       },
//     },
//   } as ChartConfiguration,
// });

//- Intermediate
//* Line Chart
// const ctx = (document.getElementById("myChart")! as HTMLCanvasElement).getContext("2d");
// const chart = new Chart(ctx!, {
//   type: "line",
//   data: {
//     labels: ["Jan", "Feb", "March", "April", "May", "June", "July", "August"],
//     datasets: [
//       {
//         label: "My sales 1",
//         backgroundColor: "rgba(255, 99, 132, 0.5)",
//         borderColor: "red",
//         borderWidth: 3,
//         data: [0, 20, 5, 2, 20, 30, 40, 20],
//       },
//       {
//         label: "My sales 2",
//         backgroundColor: "rgba(12, 99, 255, 0.5)",
//         borderColor: "blue",
//         borderWidth: 3,
//         data: [10, 10, 15, 24, 10, 10, 20, 10],
//       },
//     ],
//   },

//   options: {
//     legendCallback: function (chart: { data: { datasets: any[] } }) {
//       const text = [];
//       text.push('<ul class="list-inline">');
//       for (let i = 0; i < chart.data.datasets.length; i++) {
//         text.push(
//           '<li class="text-white list-inline-item btn" style="background: ' + chart.data.datasets[i].backgroundColor + ' ">'
//         );
//         text.push(chart.data.datasets[i].label);
//         text.push("</li>");
//       }
//       text.push("</ul>");
//       return text.join("");
//     },
//     legend: {
//       display: true,
//       position: "top",
//       reverse: false,
//       onClick: () => console.log(this),
//       onHover: onHover,
//       labels: {
//         boxWidth: 25,
//         fontSize: 15,
//         fontStyle: "bold",
//         fontColor: "#000",
//         fontFamily: "Arial",
//         padding: 25,
//         usePointStyle: true,
//       },
//     },
//   } as ChartConfiguration,
// });

// (document.getElementById("chartjs-legend") as HTMLDivElement).innerHTML = chart.generateLegend() as string;

// // function onHover(this: typeof Object): void {
// //   console.log(this);
// // }
// function onHover() {
//   // console.log("chart.options.legend!.labels!.fontColor:", chart.options.legend!.labels!.fontColor);
//   chart.options.legend!.labels!.fontColor = "red";
// }

//* Tooltips
const ctx = (document.getElementById("myChart")! as HTMLCanvasElement).getContext("2d");
new Chart(ctx!, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "March", "April", "May", "June", "July", "August"],
    datasets: [
      {
        label: "My sales",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "blue",
        borderWidth: 4,
        data: [0, 20, 5, 2, 20, 30, 40, 20],
      },
      {
        label: "My sales 2",
        backgroundColor: "rgba(12, 99, 255, 0.5)",
        borderColor: "blue",
        borderWidth: 3,
        data: [10, 10, 15, 24, 10, 10, 20, 10],
      },
    ],
  },

  options: {
    tooltips: {
      enabled: true,
      mode: "index",
      intersect: false,
      position: "nearest",
      backgroundColor: "rgba(12,155,45, 0.8)",
      titleFontFamily: "Arial",
      titleFontSize: 20,
      titleFontStyle: "italic",
      titleFontColor: "yellow",
      // titleSpacing: 5, //* Doesn't work
      titleMarginBottom: 10,
      bodyFontFamily: "Arial",
      bodyFontSize: 14,
      bodyFontStyle: "italic",
      bodyFontColor: "red",
      bodySpacing: 5,
      xPadding: 20,
      yPadding: 20,
      caretPadding: 5,
      caretSize: 10,
      cornerRadius: 15,
      displayColors: true,
    },
  } as ChartConfiguration,
});

//+ -------------------------------------

//* Default Code
// const ctx = (document.getElementById("myChart")! as HTMLCanvasElement).getContext("2d");
// new Chart(ctx!, {
//   type: "line",
//   data: {
//     labels: ["Jan", "Feb", "March", "April", "May", "June", "July", "August"],
//     datasets: [
//       {
//         label: "My sales",
//         backgroundColor: "rgba(255, 99, 132, 0.5)",
//         borderColor: "blue",
//         borderWidth: 4,
//         data: [0, 20, 5, 2, 20, 30, 40, 20],
//       },
//     ],
//   },

//   options: {
//   } as ChartConfiguration,
// });
