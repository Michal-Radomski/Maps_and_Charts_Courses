import { ChartConfiguration } from "chart.js";

const { Chart } = window;
// console.log("Chart:", Chart);
// console.log({ window });

// @ts-ignore
const { ChartDataLabels } = window;

// const {helpers} = Chart
// console.log(helpers)

// //* Bar Chart
// Data block
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

// // // Init render block
// const myChart: Chart = new Chart(document.getElementById("myChart") as HTMLCanvasElement, config as ChartConfiguration);
// console.log("myChart.data.datasets![0].data![0]:", myChart.data.datasets![0].data![0]);
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

// //* Buble Chart
// const data = {
//   datasets: [
//     {
//       label: "# of Blue Votes",
//       data: [
//         { x: 3, y: 12, r: 4 },
//         { x: 6, y: 19, r: 6 },
//         { x: 21, y: 3, r: 2 },
//         { x: 11, y: 14, r: 9 },
//         { x: 10, y: 10, r: 10 },
//         { x: 22, y: 15, r: 7 },
//       ],
//       backgroundColor: "rgba(54, 162, 235, 0.5)",
//       borderColor: "rgba(54, 162, 235, 1)",
//       borderWidth: 3,
//     },
//     {
//       label: "# of Violet Votes2",
//       data: [
//         { x: 5, y: 9, r: 3 },
//         { x: 8, y: 12, r: 4 },
//         { x: 16, y: 0, r: 2 },
//         { x: 21, y: 7, r: 5 },
//         { x: 16, y: 7, r: 5 },
//         { x: 12, y: 3, r: 10 },
//       ],
//       backgroundColor: "rgba(153, 102, 255, 0.5)",
//       borderColor: "rgba(153, 102, 255, 1)",
//       borderWidth: 3,
//     },
//   ],
// };

// const config = {
//   type: "bubble",
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

//* Bar-Line Combo Chart
// const labels = ["January", "February", "March", "April", "May", "June"];
// const data = {
//   labels: labels,
//   datasets: [
//     {
//       type: "bar",
//       label: "# of Bar Votes",
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: ["rgba(255, 99, 132, 0.6)"],
//       borderColor: ["rgba(255, 99, 132, 1)"],
//       borderWidth: 3,
//       order: 2, //* at the bottom
//     },
//     {
//       type: "line",
//       label: "# of Line Votes",
//       data: [10, 20, 30, 40, 30, 20],
//       backgroundColor: ["rgba(153, 102, 255, 0.6)"],
//       borderColor: ["rgba(153, 102, 255, 1)"],
//       borderWidth: 3,
//       tension: 0.4,
//       order: 1, //* at the top
//     },
//   ],
// };

// const config = {
//   data: data,
//   options: {
//     plugins: {
//       tooltip: {
//         yAlign: "bottom",
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   },
// };

//* Stacked Bar Chart
// const labels = ["January", "February", "March", "April", "May", "June"];
// const data = {
//   labels: labels,
//   datasets: [
//     {
//       type: "bar",
//       label: "# of Red Votes",
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: ["rgba(255, 99, 132, 0.6)"],
//       borderColor: ["rgba(255, 99, 132, 1)"],
//       borderWidth: 3,
//     },
//     {
//       type: "bar",
//       label: "# of Violet Votes",
//       data: [10, 20, 30, 40, 30, 20],
//       backgroundColor: ["rgba(153, 102, 255, 0.6)"],
//       borderColor: ["rgba(153, 102, 255, 1)"],
//       borderWidth: 3,
//     },
//     {
//       type: "bar",
//       label: "# of Teal Votes",
//       data: [5, 6, 7, 8, 9, 0],
//       backgroundColor: ["rgba(75, 192, 192, 0.6)"],
//       borderColor: ["rgba(75, 192, 192, 1)"],
//       borderWidth: 3,
//     },
//   ],
// };

// const config = {
//   data: data,
//   options: {
//     borderRadius: 10,
//     scales: {
//       x: {
//         stacked: true,
//       },
//       y: {
//         stacked: true,
//         beginAtZero: true,
//       },
//     },
//   },
// };

//* Radar Chart
// const labels = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];

// const data = {
//   labels: labels,
//   datasets: [
//     {
//       label: "# of Votes",
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: ["rgba(54, 162, 235, 0.2)"],
//       borderColor: ["rgba(54, 162, 235, 1)"],
//       borderWidth: 5,
//     },
//   ],
// };

// const config = {
//   type: "radar",
//   data: data,
//   options: {
//     scales: {
//       r: {
//         beginAtZero: true,
//       },
//     },
//   },
// };

//* Polar Area Chart
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
//       borderWidth: 5,
//     },
//   ],
// };

// const config = {
//   type: "polarArea",
//   data: data,
//   options: {
//     scales: {
//       r: {
//         beginAtZero: true,
//       },
//     },
//   },
// };

//* Double Chart
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
//       borderWidth: 3,
//     },
//     {
//       label: "# of Votes2",
//       data: [12, 19, 3, 5, 2, 3],
//       fill: false,
//       backgroundColor: [
//         "rgba(255, 99, 132, 0.2)",
//         "rgba(54, 162, 235, 0.2)",
//         "rgba(255, 206, 86, 0.2)",
//         "rgba(75, 192, 192, 0.2)",
//         "rgba(153, 102, 255, 0.2)",
//         "pink",
//       ],
//       borderColor: [
//         "rgba(255, 99, 132, 1)",
//         "rgba(54, 162, 235, 1)",
//         "rgba(255, 206, 86, 1)",
//         "rgba(75, 192, 192, 1)",
//         "rgba(153, 102, 255, 1)",
//         "deepPink",
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

//* Chart with inputs
// const labels = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];
// const dataPoints = [12, 19, 3, 5, 2, 3];

// const data = {
//   labels: labels,
//   datasets: [
//     {
//       label: "# of Votes",
//       data: dataPoints,
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

// function addValue() {
//   const valueId = document.getElementById("valueId") as HTMLInputElement;
//   // console.log(valueId.value);
//   const labelId = document.getElementById("labelId") as HTMLInputElement;
//   labels.push(String(labelId.value));
//   dataPoints.push(Number(valueId.value));
//   myChart.config.data!.datasets![0].data = dataPoints;
//   myChart.config.data!.labels = labels;
//   myChart.update();
// }

// const myChart = new Chart(document.getElementById("myChart") as HTMLCanvasElement, config as ChartConfiguration);

// //* Line Chart - change color
// const labels = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];

// const data = {
//   labels: labels,
//   datasets: [
//     {
//       label: "# of Votes",
//       data: [12, 19, 3, 5, 2, 3],
//       fill: false,
//       backgroundColor: "rgba(255, 99, 132, 0.2)",
//       borderColor: "rgba(255, 99, 132, 1)",
//       tension: 0.4,
//       borderWidth: 4,
//     },
//   ],
// };

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

// const changeColor = (color: { value: string }) => {
//   // console.log(color.value);
//   // console.log("this:", this);
//   myChart!.config!.data!.datasets![0].backgroundColor! = color.value;
//   myChart!.config!.data!.datasets![0].borderColor! = color.value;
//   myChart.update();
// };

// const myChart = new Chart(document.getElementById("myChart") as HTMLCanvasElement, config as ChartConfiguration);

//* Line Bar - data structures_1
// const data = {
//   datasets: [
//     {
//       label: "# of Votes",
//       data: [
//         {
//           department: "Sales Department",
//           financial: {
//             cost: 2000,
//             budget: 2500,
//           },
//         },
//         {
//           department: "Marketing Department",
//           financial: {
//             cost: 10000,
//             budget: 12500,
//           },
//         },
//         {
//           department: "HR Department",
//           financial: {
//             cost: 5000,
//             budget: 6000,
//           },
//         },
//         {
//           department: "IT Department",
//           financial: {
//             cost: 9000,
//             budget: 12000,
//           },
//         },
//       ],
//       backgroundColor: "rgba(255, 99, 132, 0.2)",
//       borderColor: "rgba(255, 99, 132, 1)",
//       borderWidth: 1,
//     },
//   ],
// };

// const config = {
//   type: "bar",
//   data: data,
//   options: {
//     indexAxis: "y",
//     parsing: {
//       yAxisKey: "department",
//       xAxisKey: "financial.budget",
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   },
// };

// new Chart(document.getElementById("myChart") as HTMLCanvasElement, config as ChartConfiguration);

//* Bar Chart - data structures_2
// const departmentDatasets = ["Sales Department", "Marketing Department", "HR Department", "IT Department"];
// const cost = [999, 666, 333, 999];
// const budget = [3000, 4000, 5000, 10000];
// const tax = [1000, 1000, 1000, 1000];

// interface Financial {
//   cost: number;
//   budget: number;
//   tax: number;
// }

// interface DepartmentData {
//   department: string;
//   financial: Financial;
// }

// const departmentInfo = departmentDatasets.map((department, index) => {
//   let departmentDataset = {} as DepartmentData;
//   departmentDataset.department = department;
//   departmentDataset.financial = {} as Financial;
//   departmentDataset.financial.cost = cost[index] as number;
//   departmentDataset.financial.budget = budget[index] as number;
//   departmentDataset.financial.tax = tax[index] as number;
//   // console.log({ department });
//   // console.log({ index });
//   return departmentDataset;
// });
// // console.log({ departmentInfo });

// const data = {
//   datasets: [
//     {
//       label: "Cost",
//       data: departmentInfo,
//       backgroundColor: "rgba(255, 99, 132, 0.2)",
//       borderColor: "rgba(255, 99, 132, 1)",
//     },
//     {
//       label: "Budget",
//       data: departmentInfo,
//       backgroundColor: "rgba(54, 162, 235, 0.2)",
//       borderColor: "rgba(54, 162, 235, 1)",
//     },
//     {
//       label: "Tax",
//       data: departmentInfo,
//       backgroundColor: "rgba(153, 102, 255, 0.2)",
//       borderColor: "rgba(153, 102, 255, 1)",
//     },
//     {
//       label: "Changeable",
//       data: departmentInfo,
//       backgroundColor: "rgba(255, 206, 86, 0.2)",
//       borderColor: "rgba(255, 206, 86, 1)",
//     },
//   ],
// };

// const config = {
//   type: "bar",
//   data: data,
//   options: {
//     borderWidth: 3,
//     indexAxis: "y",
//     parsing: {
//       yAxisKey: "department",
//       xAxisKey: ["financial.cost", "financial.budget", "financial.tax", ""],
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   },
// };

// function changeFinancial(financial: string) {
//   // @ts-ignore
//   myChart!.config!.options!.parsing!.xAxisKey[3] = `financial.${financial}`;
//   myChart.update();
// }

//* Bar Chart - data structures_3
// const label = ["Red", "Blue", "Yellow"];
// const dataPoints = [
//   [12, 19, 3, 1, 3, 30],
//   [10, 9, 5, 3, 6, 15],
//   [14, 29, 7, 5, 9, 9],
// ];

// const bgc = ["rgba(255, 99, 132, 0.2)", "rgba(0, 162, 0, 0.2)", "rgba(255, 206, 86, 0.2)"];
// const bc = ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)"];

// interface ColorDataSet {
//   label: string;
//   data: number[];
//   backgroundColor: string;
//   borderColor: string;
// }

// const colorDatasets = label.map((color: string, index: number) => {
//   let colorObject = {} as ColorDataSet;
//   colorObject.label = color;
//   colorObject.data = dataPoints[index];
//   colorObject.backgroundColor = bgc[index];
//   colorObject.borderColor = bc[index];
//   return colorObject;
// });

// // console.log("colorDatasets:", colorDatasets);

// const data = {
//   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//   datasets: [colorDatasets[2], colorDatasets[1], colorDatasets[0]],
// };

// const config = {
//   // type: "bar",
//   type: "line",
//   data: data,
//   options: {
//     borderWidth: 3,
//     scales: {
//       y: {
//         beginAtZero: true,
//         min: 0,
//         max: 100,
//         ticks: {
//           stepSize: 20,
//         },
//       },
//     },
//   },
// };

//* Scatter Chart - data structures_4
// const color = "rgba(75, 192, 192, 1)";

// const data = {
//   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//   datasets: [
//     {
//       label: "# of Votes",
//       data: [
//         { x: 3, y: 3 },
//         { x: 6, y: 3 },
//         { x: 9, y: 4.5 },
//         { x: 12, y: 6 },
//         { x: 15, y: 6 },
//         { x: 9, y: 4.5 },
//         { x: 6, y: 3 },
//       ],
//       backgroundColor: "rgba(255, 99, 132, 0.2)",
//       borderColor: color,
//       borderWidth: 3,
//     },
//   ],
// };

// const config = {
//   type: "scatter",
//   data: data,
//   options: {
//     scales: {
//       x: {
//         title: {
//           display: true,
//           text: "Total Sales",
//           color: color,
//         },
//       },
//       y: {
//         beginAtZero: true,
//         title: {
//           display: true,
//           text: "Total Sales Agents",
//         },
//       },
//     },
//   },
// };

// //* Bar Chart - change color of single grid line
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
//       x: {
//         grid: {
//           color: (context: { index: number }) => {
//             // console.log(context.index);
//             // console.log({ context });
//             if (context.index === 3) {
//               return "rgba(75, 192, 192, 1)";
//             } else if (context.index === 4) {
//               return "darkMagenta";
//             } else {
//               return "rgba(0, 0, 0, 0.1)";
//             }
//           },
//         },
//       },
//       y: {
//         beginAtZero: true,
//         grid: {
//           color: (context: { index: number }) => {
//             // console.log(context.index);
//             // console.log({ context });
//             if (context.index === 5) {
//               return "rgba(75, 192, 192, 1)";
//             } else if (context.index === 4) {
//               return "darkMagenta";
//             } else {
//               return "rgba(0, 0, 0, 0.1)";
//             }
//           },
//         },
//       },
//     },
//   },
// };

//* Bar Chart - floating / range chart
// const labels = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];

// const data = {
//   labels: labels,
//   datasets: [
//     {
//       label: "Temperature in C",
//       data: [
//         [8, 12],
//         [9, 16],
//         [6, 9],
//         [4, 10],
//         [3, 12],
//         [9, 2],
//       ],
//       backgroundColor: ["rgba(255, 99, 132, 0.2)"],
//       borderColor: ["rgba(255, 99, 132, 1)"],
//       borderWidth: 3,
//     },
//   ],
// };

// const config = {
//   type: "bar",
//   data: data,
//   options: {
//     borderSkipped: false,
//     indexAxis: "y",
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   },
// };

//* Label on Pie Chart
// const data = {
//   labels: ["Red 1", "Red 2", "Red 3", "Green"],
//   datasets: [
//     {
//       label: "# of Votes",
//       data: [12, 19, 15, 5],
//       backgroundColor: [
//         "rgba(255, 99, 132, 0.2)",
//         "rgba(255, 99, 132, 0.2)",
//         "rgba(255, 99, 132, 0.2)",
//         "rgba(75, 192, 192, 0.2)",
//       ],
//       borderColor: ["rgba(255, 99, 132, 1)", "rgba(255, 99, 132, 1)", "rgba(255, 99, 132, 1)", "rgba(75, 192, 192, 1)"],
//       borderWidth: 1,
//       offset: [20, 20, 20, 0],
//     },
//   ],
// };

// const config = {
//   type: "pie",
//   data: data,
//   options: {
//     layout: {
//       padding: {
//         left: 50,
//         right: 20,
//         top: 30,
//         bottom: 30,
//       },
//     },
//     plugins: {
//       labels: {
//         render: (args: { label: string; percentage: string; value: number }) => {
//           // console.log({ args });
//           return `${args.label}: ${args.percentage}%, ${args.value}`;
//         },
//         position: "outside",
//         textMargin: 10,
//         fontColor: "darkMagenta",
//         arc: true,
//       },
//     },
//   },
// };

//* Overlapping Bar Chart
// const data = {
//   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//   datasets: [
//     {
//       label: "Red Bar",
//       data: [6, 19, 13, 15, 12, 13],
//       backgroundColor: ["rgba(255, 99, 132, 0.5)"],
//       borderColor: ["rgba(255, 99, 132, 1)"],
//       borderWidth: 3,
//       categoryPercentage: 0.5,
//       order: 0,
//     },
//     {
//       label: "Orange Bar",
//       data: [5, 15, 3, 5, 2, 3],
//       backgroundColor: ["rgba(255, 159, 64, 0.5)"],
//       borderColor: ["rgba(255, 159, 64, 1)"],
//       borderWidth: 3,
//       order: 1,
//       categoryPercentage: 1,
//     },
//   ],
// };

// const config = {
//   type: "bar",
//   data: data,
//   options: {
//     scales: {
//       x: {
//         stacked: true,
//       },
//       y: {
//         beginAtZero: true,
//       },
//     },
//   },
// };

//* Segment Styling in Line Chart
// const down = (ctx: { p0: { parsed: { y: number } }; p1: { parsed: { y: number } } }, value: string | number[]) => {
//   // console.log("ctx:", ctx, typeof ctx);
//   // console.log(ctx.p0.parsed.y);
//   // console.log(ctx.p1.parsed.y);
//   const toReturn = ctx.p0.parsed.y > ctx.p1.parsed.y ? value : undefined;
//   // console.log({ toReturn });
//   return toReturn;
// };

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
//       borderColor: ["rgba(255, 99, 132, 1)"],
//       tension: 0.4,
//       segment: {
//         borderColor: (ctx: { p0: { parsed: { y: number } }; p1: { parsed: { y: number } } }) =>
//           down(ctx, "rgba(255, 99, 132, 1)") || "rgba(75, 192, 192, 1)",
//         borderDash: (ctx: { p0: { parsed: { y: number } }; p1: { parsed: { y: number } } }) => down(ctx, [6, 6]),
//       },
//     },
//   ],
// };

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

//* Customizing Tooltip Labels
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
//       borderWidth: 3,
//     },
//   ],
// };

// const config = {
//   type: "bar",
//   data: data,
//   options: {
//     plugins: {
//       tooltip: {
//         callbacks: {
//           label: (context: { dataset: { label: string }; raw: number }) => {
//             // console.log("context:", context);
//             return `${context.raw} -> ${context.dataset.label}`;
//           },
//         },
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   },
// };

//*  Dotted Dashed Line Chart
// const color = "Yellow";
// const colorLabels = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];
// const dash = (ctx: { p0DataIndex: number }, value: number[]) => {
//   // console.log({ ctx, value });
//   return ctx.p0DataIndex < colorLabels.indexOf(color) ? value : [6, 0];
// };

// const data = {
//   labels: colorLabels,
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
//       tension: 0.4,
//       borderWidth: 5,
//       segment: {
//         //borderDash: [6, 6]
//         borderDash: (ctx: { p0DataIndex: number }) => dash(ctx, [10, 6]) || [6, 0], //* 10px line, 6px break!!!
//       },
//     },
//   ],
// };

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

//* Bar Chart - remove spaces
// const data = {
//   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//   datasets: [
//     {
//       label: "# of Votes",
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: ["rgba(255, 159, 64, 0.2)"],
//       borderColor: ["rgba(255, 159, 64, 1)"],
//       borderWidth: 3,
//     },
//     {
//       label: "# of Votes2",
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: ["rgba(255, 99, 132, 0.2)"],
//       borderColor: ["rgba(255, 99, 132, 1)"],
//       borderWidth: 3,
//     },
//   ],
// };

// const config = {
//   type: "bar",
//   data: data,
//   options: {
//     // categoryPercentage: 0.8, // default
//     categoryPercentage: 1, // default
//     barPercentage: 1,
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//     plugins: {
//       tooltip: {
//         enabled: false,
//       },
//     },
//   },
// };

//* Clickable Pie and Doughnut Slices with Link in Chart + Create OnHover Effect
// const data = {
//   labels: ["Sales", "Cost", "Profit", "ABC"],
//   datasets: [
//     {
//       label: "# of Votes",
//       data: [
//         { financial: "Sales", url: "https://www.google.com", amount: { usd: 900, eur: 600 } },
//         { financial: "Cost", url: "https://www.chartjs.org", amount: { usd: 600, eur: 450 } },
//         { Financial: "Profit", url: "https://www.amazon.com", amount: { usd: 450, eur: 300 } },
//         { financial: "ABC", url: "https://www.flipkart.com", amount: { usd: 450, eur: 300 } },
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
//       borderWidth: 3,
//     },
//   ],
// };

// const config = {
//   type: "pie",
//   data: data,
//   options: {
//     onHover: (event: any, chartElement: any[]) => {
//       // console.log({ event, chartElement });

//       // if(chartElement.length === 1) {
//       //   event.native.target.style.cursor = 'pointer';
//       // };
//       // if(chartElement.length === 0) {
//       //   event.native.target.style.cursor = 'default';
//       // };

//       event.native.target.style.cursor = chartElement[0] ? "pointer" : "default";
//     },
//     parsing: {
//       key: "amount.usd",
//     },
//   },
// };

// const ctx = document.getElementById("myChart") as HTMLCanvasElement;
// const myChart = new Chart(ctx, config as ChartConfiguration);
// // console.log({ myChart });

// function pieChartCanvas(click: MouseEvent) {
//   // console.log({ click });
//   // @ts-ignore
//   const clickedSlice = myChart.getElementsAtEventForMode(click, "nearest", { intersect: true }, true);
//   // console.log(clickedSlice);
//   if (clickedSlice.length) {
//     const pieSlice = clickedSlice[0];
//     // console.log(clickedSlice[0].datasetIndex);
//     // console.log(clickedSlice[0].index);
//     // @ts-ignore
//     const link = myChart.data.datasets![clickedSlice[0].datasetIndex].data![clickedSlice![0]!.index]!.url as string;
//     console.log({ link });
//     // location.href = link;
//     // window.open(link);
//   }
// }

// ctx.onclick = pieChartCanvas;

//* Previous and next button in the chart
// const week = [] as string[];
// const weekDataPoints = [] as number[];

// for (let i = 1; i <= 52; i++) {
//   week.push(`Week ${i}`);
//   weekDataPoints.push(i);
// }

// const data = {
//   labels: week,
//   datasets: [
//     {
//       label: "Weekly Data",
//       data: weekDataPoints,
//       backgroundColor: "rgba(54, 162, 235, 0.2)",
//       borderColor: "rgba(54, 162, 235, 1)",
//       borderWidth: 3,
//     },
//   ],
// };

// const config = {
//   type: "bar",
//   data: data,
//   options: {
//     scales: {
//       x: {
//         min: 8,
//         max: 14,
//       },
//       y: {
//         beginAtZero: true,
//       },
//     },
//   },
// };

// const myChart = new Chart(document.getElementById("myChart") as HTMLCanvasElement, config as ChartConfiguration);

// function weekData(start: 6, end: 6) {
//   // console.log({ start, end });
//   // @ts-ignore
//   const startScale = myChart.config.options!.scales!.x.min + start;
//   // @ts-ignore
//   const endScale = myChart.config.options!.scales!.x.max + end;
//   // console.log({ startScale, endScale });

//   const previousButton = document.getElementById("previousButton") as HTMLButtonElement;
//   const nextButton = document.getElementById("nextButton") as HTMLButtonElement;

//   // @ts-ignore
//   myChart.config.options!.scales!.x.min = startScale;
//   // @ts-ignore
//   myChart.config.options!.scales!.x.max = endScale;

//   previousButton!.disabled = false;
//   nextButton.disabled = false;

//   if (startScale < 0) {
//     // @ts-ignore
//     myChart.config.options!.scales!.x.min = 0;
//     // @ts-ignore
//     myChart.config.options!.scales!.x.max = 6;
//     previousButton.disabled = true;
//   }

//   if (endScale > week.length) {
//     // @ts-ignore
//     myChart.config.options!.scales!.x.min = week.length - 6;
//     // @ts-ignore
//     myChart.config.options!.scales!.x.max = week.length - 1;
//     nextButton.disabled = true;
//   }

//   myChart.update();
// }

//* Doughnut chart with text label in the center
// const data = {
//   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//   datasets: [
//     {
//       label: "# of Votes",
//       data: [75, 25, 25, 25],
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
//       cutout: "90%",
//     },
//   ],
// };

// const doughnutLabel = {
//   id: "doughnutLabel",
//   beforeDraw(
//     chart: {
//       data: { datasets: { data: number[] }[] };
//       ctx: CanvasRenderingContext2D;
//       chartArea: any;
//     },
//     _args: any,
//     options: { fontSize: number; fontColor: string }
//   ) {
//     const {
//       ctx,
//       chartArea: { top, bottom, left, right, width, height },
//     } = chart;
//     ctx.save();

//     // console.log({ _args, ctx });
//     // console.log({ top, bottom, left, right, width, height });

//     ctx.font = `${options.fontSize}px Arial`;
//     ctx.textAlign = "center";
//     ctx.fillStyle = options.fontColor;
//     ctx.textBaseline = "middle";
//     ctx.fillText(`${chart.data.datasets[0].data[0]}%`, width / 2, height / 2 + top + options.fontSize / 20);
//     ctx.restore();
//   },
// };

// const config = {
//   type: "doughnut",
//   data: data,
//   options: {
//     plugins: {
//       legend: {
//         display: false,
//       },
//       doughnutLabel: {
//         fontSize: 100,
//         fontColor: "blue",
//       },
//     },
//   },
//   plugins: [doughnutLabel],
// };

//* chartArea
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

// const chartAreaBorder = {
//   id: "chartAreaBorder",
//   beforeDraw(
//     chart: {
//       ctx: any;
//       chartArea: { top: number; bottom: number; left: number; right: number; width: number; height: number };
//     },
//     _args: any,
//     _options: any
//   ) {
//     const {
//       ctx,
//       chartArea: { top, bottom, left, right, width, height },
//     } = chart;

//     // console.log({ top });
//     // console.log({ bottom });
//     // console.log({ _args });
//     // console.log({ _options });

//     ctx.strokeStyle = "black";
//     ctx.strokeRect(right - 1, top, 0, height);
//     ctx.strokeStyle = "red";
//     ctx.strokeRect(left, top, width - 1, 0);
//   },
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
//   plugins: [chartAreaBorder],
// };

//* Waterfall Chart
// const labels = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange", "Pink", "Violet"];

// const data = {
//   labels: labels,
//   datasets: [
//     {
//       label: "# of Votes",
//       data: [
//         [12, 19],
//         [19, 3],
//         [3, 5],
//         [5, 2],
//         [2, 3],
//         [3, 9],
//         [9, 15],
//         [15, 10],
//       ],
//       backgroundColor: barBackgroundColorCode(),
//       borderColor: barColorCode(),
//       borderWidth: 3,
//       borderSkipped: false,
//     },
//   ],
// };

// // WaterfallLines plugin
// const waterfallLines = {
//   id: "waterfall",
//   beforeDraw(
//     chart: { ctx: any; config: any; scales: { x: any; y: any } },
//     _args: any,
//     options: {
//       lineStyle1: number;
//       lineColor: string;
//     }
//   ) {
//     const {
//       ctx,
//       config,
//       scales: { x, y },
//     } = chart;

//     ctx.save();
//     ctx.strokeStyle = options.lineColor;
//     ctx.setLineDash([options.lineStyle1, options.lineStyle1]);
//     for (let i = 0; i < config._config.data.datasets[0].data.length - 1; i++) {
//       ctx.strokeRect(
//         x.getPixelForValue(i),
//         y.getPixelForValue(config._config.data.datasets[0].data[i][1]),
//         x.getPixelForValue(0.5),
//         0
//       );
//     }
//   },
// };

// const config = {
//   type: "bar",
//   data: data,
//   options: {
//     plugins: {
//       datalabels: {
//         formatter: (value: number[]) => {
//           // console.log({value});
//           const votes = value[1] - value[0];
//           const netVotes = Math.abs(votes);
//           return `Votes: ${netVotes}`;
//         },
//       },
//       waterfall: {
//         lineColor: "black",
//         lineStyle1: 5,
//         lineStyle2: 5,
//       },
//       tooltip: {
//         enabled: false,
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   },
//   plugins: [waterfallLines, ChartDataLabels],
// };

// function barColorCode() {
//   return (ctx: {
//     chart: { config: { data: { datasets: { data: number[] }[] } } };
//     dataIndex: number;
//     parsed: { _custom: { start: number; end: number } };
//   }) => {
//     // console.log({ ctx });
//     // console.log("ctx.chart.config.data.datasets[0].data.length:", ctx.chart.config.data.datasets[0].data.length);
//     if (ctx.dataIndex !== 0 || ctx.dataIndex !== data.datasets[0].data.length - 1) {
//       const start = ctx.parsed._custom.start;
//       const end = ctx.parsed._custom.end;
//       let barColor = start <= end ? "rgba(75, 192, 192, 1)" : start > end ? "rgba(255, 99, 132, 1)" : "black";

//       if (ctx.dataIndex === 0 || ctx.dataIndex === ctx.chart.config.data.datasets[0].data.length - 1) {
//         barColor = "rgba(0, 0, 0, 1)";
//       }

//       return barColor;
//     }
//   };
// }

// function barBackgroundColorCode() {
//   return (ctx: {
//     dataIndex: number;
//     chart: { config: { data: { datasets: { data: number[] }[] } } };
//     parsed: { _custom: { start: number; end: number } };
//   }) => {
//     const start = ctx.parsed._custom.start;
//     const end = ctx.parsed._custom.end;
//     let barColor = start <= end ? "rgba(75, 192, 192, 0.2)" : start > end ? "rgba(255, 99, 132, 0.2)" : "rgba(0, 0, 0, 0.2)";

//     if (ctx.dataIndex === 0 || ctx.dataIndex === ctx.chart.config.data.datasets[0].data.length - 1) {
//       barColor = "rgba(0, 0, 0, 0.2)";
//     }

//     return barColor;
//   };
// }

// new Chart(document.getElementById("myChart") as HTMLCanvasElement, config as unknown as ChartConfiguration);

//* Bar Growth Indicator Chart
const labels = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Red Bar",
      data: [
        [0, 12],
        [0, 19],
        [0, 3],
        [0, 5],
        [0, 2],
        [0, 3],
      ],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 3,
    },
    {
      label: "Arrow Bar",
      data: [
        [12, 19],
        [19, 3],
        [3, 5],
        [5, 2],
        [2, 3],
        //[0, 3], //* No arrow there!
      ],
      backgroundColor: "rgba(0, 0, 0, 1)",
      borderColor: "rgba(0, 0, 0, 1)",
      barPercentage: 0.05,
    },
  ],
};

// barGrowthIndicator plugin
const barGrowthIndicator = {
  id: "barGrowthIndicator",
  afterDatasetsDraw(chart: { _metasets: { _parsed: { y: number }[] }[]; ctx?: any; scales?: any }) {
    const {
      ctx,
      scales: { x, y },
    } = chart;

    const deltaPercentage = [] as number[];

    for (let i = 0; i < chart._metasets[0]._parsed.length - 1; i++) {
      // console.log(chart._metasets[0]._parsed[0].y);
      // console.log(chart._metasets[0]._parsed[1].y);
      const basis = chart._metasets[0]._parsed[0].y;
      const delta = chart._metasets[0]._parsed[1].y;
      let percentage = ((delta / basis) * 100) as number;
      // console.log({ percentage });
      percentage = percentage - 100;
      deltaPercentage.push(Number(percentage.toFixed(2)));
    }
    // console.log({ deltaPercentage });
  },
};

const config = {
  type: "bar",
  data: data,
  options: {
    plugins: {
      tooltip: {
        filter: (tooltipItem: { datasetIndex: number }) => {
          // console.log({tooltipItem});
          return tooltipItem.datasetIndex === 0;
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
  plugins: [barGrowthIndicator],
};

new Chart(document.getElementById("myChart") as HTMLCanvasElement, config as unknown as ChartConfiguration);

//- ------------------------------
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
