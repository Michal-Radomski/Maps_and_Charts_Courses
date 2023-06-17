import { ChartConfiguration } from "chart.js";

const { Chart } = window;
// console.log("Chart:", Chart);
// console.log({ window });

// @ts-ignore
// const { ChartDataLabels } = window;

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
// const labels = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];

// const data = {
//   labels: labels,
//   datasets: [
//     {
//       label: "Red Bar",
//       data: [
//         [0, 12],
//         [0, 19],
//         [0, 3],
//         [0, 5],
//         [0, 2],
//         [0, 3],
//       ],
//       backgroundColor: "rgba(255, 99, 132, 0.2)",
//       borderColor: "rgba(255, 99, 132, 1)",
//       borderWidth: 3,
//     },
//     {
//       label: "Arrow Bar",
//       data: [
//         [12, 19],
//         [19, 3],
//         [3, 5],
//         [5, 2],
//         [2, 3],
//         //[0, 3], //* No arrow there!
//       ],
//       backgroundColor: "rgba(0, 0, 0, 1)",
//       borderColor: "rgba(0, 0, 0, 1)",
//       barPercentage: 0.05,
//     },
//   ],
// };

// // barGrowthIndicator plugin
// const barGrowthIndicator = {
//   id: "barGrowthIndicator",
//   afterDatasetsDraw(chart: {
//     getDatasetMeta(arg0: number): any;
//     _metasets: {
//       hidden: boolean;
//       _parsed: {
//         _custom: any;
//         y: number;
//       }[];
//     }[];
//     ctx?: any;
//     scales?: any;
//   }) {
//     const {
//       ctx,
//       scales: { x, y },
//     } = chart;

//     const deltaPercentage = [] as number[];

//     for (let i = 0; i < chart._metasets[0]._parsed.length - 1; i++) {
//       let z = 1 + i;
//       const basis = chart._metasets[0]._parsed[i].y;
//       const delta = chart._metasets[0]._parsed[z].y;
//       let percentage = (delta / basis) * 100;
//       // console.log({percentage})
//       percentage = percentage - 100;
//       deltaPercentage.push(Number(percentage.toFixed(2)));
//     }
//     // console.log({ deltaPercentage });
//     // console.log("chart:", chart);

//     // console.log("chart._metasets[1].hidden:", chart._metasets[1].hidden);
//     if (chart._metasets[1].hidden !== true) {
//       for (let a = 0; a < deltaPercentage.length; a++) {
//         const start = chart._metasets[1]._parsed[a]._custom.start;
//         const end = chart._metasets[1]._parsed[a]._custom.end;
//         // console.log({ start, end });

//         if (end >= start) {
//           // console.log("Positive number");
//           // Triangle
//           ctx.beginPath();
//           ctx.moveTo(chart.getDatasetMeta(1).data[a].x, chart.getDatasetMeta(1).data[a].y - 2);
//           ctx.lineTo(chart.getDatasetMeta(1).data[a].x - 5, chart.getDatasetMeta(1).data[a].y + 5);
//           ctx.lineTo(chart.getDatasetMeta(1).data[a].x + 5, chart.getDatasetMeta(1).data[a].y + 5);
//           ctx.fillStyle = "green";
//           ctx.fill();
//           ctx.restore();

//           ctx.font = "10px Arial";
//           ctx.fillStyle = "green";
//           ctx.textAlign = "center";
//           ctx.fillText(
//             deltaPercentage[a] + "%",
//             chart.getDatasetMeta(1).data[a].x + 2.5,
//             chart.getDatasetMeta(1).data[a].y - 10
//           );
//           ctx.restore();
//         }

//         if (end < start) {
//           // console.log("Negative number");
//           // Triangle
//           let yStart = a + 1;
//           ctx.beginPath();
//           ctx.moveTo(chart.getDatasetMeta(1).data[a].x, chart.getDatasetMeta(0).data[yStart].y + 3);
//           ctx.lineTo(chart.getDatasetMeta(1).data[a].x - 5, chart.getDatasetMeta(0).data[yStart].y - 5);
//           ctx.lineTo(chart.getDatasetMeta(1).data[a].x + 5, chart.getDatasetMeta(0).data[yStart].y - 5);
//           ctx.fillStyle = "red";
//           ctx.fill();
//           ctx.restore();

//           ctx.font = "10px Arial";
//           ctx.fillStyle = "red";
//           ctx.textAlign = "center";
//           ctx.fillText(
//             deltaPercentage[a] + "%",
//             chart.getDatasetMeta(1).data[a].x + 2.5,
//             chart.getDatasetMeta(0).data[yStart].y + 12
//           );
//           ctx.restore();
//         }
//       }
//     }
//   },
// };

// const config = {
//   type: "bar",
//   data: data,
//   options: {
//     plugins: {
//       tooltip: {
//         filter: (tooltipItem: { datasetIndex: number }) => {
//           // console.log({tooltipItem});
//           return tooltipItem.datasetIndex === 0;
//         },
//       },
//     },
//     scales: {
//       y: {
//         grace: "10%",
//         beginAtZero: true,
//       },
//     },
//   },
//   plugins: [barGrowthIndicator],
// };

// new Chart(document.getElementById("myChart") as HTMLCanvasElement, config as unknown as ChartConfiguration);

//* Advanced Drill Down Bar Chart
// const browserData = [
//   {
//     browser: "Chrome",
//     color: "rgba(75, 192, 192, 1)",
//     users: 150,
//     marketshare: 70,
//     versionData: [
//       { version: "v5", users: 10 },
//       { version: "v6", users: 20 },
//       { version: "v7", users: 30 },
//       { version: "v8", users: 60 },
//       { version: "v9", users: 20 },
//     ],
//   },
//   {
//     browser: "FireFox",
//     color: "rgba(255, 26, 104, 1)",
//     users: 25,
//     marketshare: 24,
//     versionData: [
//       { version: "V3.1", users: 10 },
//       { version: "v3.2", users: 10 },
//       { version: "v3.3", users: 5 },
//     ],
//   },
//   {
//     browser: "Safari",
//     color: "rgba(54, 162, 235, 1)",
//     users: 30,
//     marketshare: 26,
//     versionData: [
//       { version: "Web 9", users: 10 },
//       { version: "Web 10", users: 10 },
//       { version: "Web 11", users: 10 },
//     ],
//   },
// ];

// const data = {
//   datasets: [
//     {
//       label: "Browser Data Market Share",
//       data: browserData,
//       backgroundColor: [browserData[0].color, browserData[1].color, browserData[2].color],
//       borderColor: [browserData[0].color, browserData[1].color, browserData[2].color],
//       borderWidth: 3,
//     },
//   ],
// };

// const coordinates = {
//   top: 0,
//   bottom: 0,
//   left: 0,
//   right: 0,
// };
// // console.log("console.table(coordinates)");
// // console.table(coordinates);

// // resetButton
// const resetButton = {
//   id: "resetButton",
//   beforeDraw(chart: { data: any; ctx: any; chartArea: { right: number } }) {
//     if (chart.data.datasets[0].label !== "Browser Data Market Share") {
//       // console.log("chart,", chart);
//       const {
//         ctx,
//         chartArea: { right },
//       } = chart;

//       ctx.save();
//       // console.log("ctx:", ctx);

//       const text = "Back";
//       const thickBorder = 3;
//       const textWidth = ctx.measureText(text).width;
//       // console.log({ textWidth });
//       const padding = 10;
//       const paddingright = padding / 2;

//       // Background
//       ctx.fillStyle = "rgba(75, 192, 192, 0.2)";
//       ctx.fillRect(right - (textWidth + 2 + padding), 5, textWidth + padding, 20);

//       // Text
//       ctx.fillStyle = "#666";
//       ctx.font = "italic bold 0.75rem Arial";
//       ctx.fillText(text, right - (textWidth + 2 + paddingright), 15);

//       // Border button
//       ctx.lineWidth = thickBorder;
//       ctx.strokeStyle = "rgba(75, 192, 192, 1)";
//       ctx.strokeRect(right - (textWidth + 2 + padding), 5, textWidth + padding, 20);

//       coordinates.top = 5 - thickBorder;
//       coordinates.bottom = 5 + 20 + thickBorder;
//       coordinates.left = right - (textWidth + 2 + padding);
//       coordinates.right = right;
//       // console.table(coordinates);

//       ctx.restore();
//     }
//   },
// };

// const config = {
//   type: "bar",
//   data: data,
//   options: {
//     onHover: (event: { native: { target: { style: { cursor: string } } } }, chartElement: any[]) => {
//       if (myChart.config.data!.datasets![0].label === "Browser Data Market Share") {
//         // console.log({ event });
//         // console.log("chartElement[0]:", chartElement[0]);
//         // console.log("chartElement:", chartElement);
//         event.native.target.style.cursor = chartElement[0] ? "pointer" : "default";
//       } else {
//         event.native.target.style.cursor = "default";
//       }
//     },
//     parsing: {
//       xAxisKey: "browser",
//       yAxisKey: "marketshare",
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   },
//   plugins: [resetButton],
// };

// const ctx = document.getElementById("myChart") as HTMLCanvasElement;
// const myChart = new Chart(ctx, config as unknown as ChartConfiguration);

// function clickHandler(click: MouseEvent) {
//   if (myChart.config.data!.datasets![0].label === "Browser Data Market Share") {
//     // @ts-ignore
//     const bar = myChart.getElementsAtEventForMode(click, "nearest", { intersect: true }, true);
//     // console.log({ bar });
//     if (bar[0]) {
//       changeChart(bar[0].index);
//     }
//   }
// }

// function changeChart(browser: number) {
//   // console.log({ browser });
//   // console.log(`${browser} -> grabbed from the ClickHandler`);

//   //  @ts-ignore
//   myChart.config.options!.parsing.xAxisKey = "versionData.version";
//   // @ts-ignore
//   myChart.config.options!.parsing.yAxisKey = "versionData.users";

//   const vColor = [] as string[];
//   const vUsers = [] as number[];
//   const vLabel = browserData[browser].versionData.map((labels: { users: number; version: string }) => {
//     vUsers.push(labels.users);
//     vColor.push(browserData[browser].color);
//     return labels.version;
//   }) as string[];
//   // console.log({ vColor, vUsers, vLabel });

//   myChart.config.data!.labels = vLabel;
//   myChart.config.data!.datasets![0].label = browserData[browser].browser;
//   myChart.config.data!.datasets![0].data = vUsers;
//   myChart.config.data!.datasets![0].backgroundColor = vColor;
//   myChart.config.data!.datasets![0].borderColor = vColor;
//   myChart.update();
// }

// ctx.onclick = clickHandler;

// function resetChart() {
//   // console.log("Update Chart Function");
//   // @ts-ignore
//   myChart.config.options!.parsing.xAxisKey = "browser";
//   // @ts-ignore
//   myChart.config.options!.parsing.yAxisKey = "marketshare";

//   const bColor: string[] = [];
//   const bMarketshare: number[] = [];
//   const bLabel = browserData.map((browser) => {
//     bMarketshare.push(browser.marketshare);
//     bColor.push(browser.color);
//     return browser.browser;
//   });

//   myChart.config.data!.labels = bLabel;
//   myChart.config.data!.datasets![0].label = "Browser Data Market Share";
//   myChart.config.data!.datasets![0].data = bMarketshare;
//   myChart.config.data!.datasets![0].backgroundColor = bColor;
//   myChart.config.data!.datasets![0].borderColor = bColor;
//   myChart.update();
// }

// function mousemoveHandler(canvas: HTMLCanvasElement, mousemove: MouseEvent) {
//   // console.table(coordinates);
//   const x = mousemove.offsetX;
//   const y = mousemove.offsetY;
//   // console.log({ x });
//   // console.log({ y });
//   if (myChart.config.data!.datasets![0].label !== "Browser Data Market Share") {
//     if (x > coordinates.left && x < coordinates.right && y > coordinates.top && y < coordinates.bottom) {
//       canvas.style.cursor = "pointer";
//     } else {
//       canvas.style.cursor = "default";
//     }
//   }
// }

// function clickButtonHandler(click: MouseEvent) {
//   const x = click.offsetX;
//   const y = click.offsetY;
//   if (myChart.config.data!.datasets![0].label !== "Browser Data Market Share") {
//     if (x > coordinates.left && x < coordinates.right && y > coordinates.top && y < coordinates.bottom) {
//       resetChart();
//     }
//   }
// }

// ctx.addEventListener("mousemove", (event: MouseEvent) => {
//   myChart.resize();
//   mousemoveHandler(ctx, event);
// });

// ctx.addEventListener("click", (event: MouseEvent) => {
//   myChart.resize();
//   clickButtonHandler(event);
// });

//* Doughnut Chart that display text In center onHover
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
//       cutout: "90%",
//     },
//   ],
// };

// // hoverLabels plugin
// const hoverLabels = {
//   id: "hoverLabels",
//   afterDatasetsDraw(chart: {
//     config: {
//       data: {
//         labels: { [x: string]: string };
//         datasets: {
//           [x: string]: {
//             data: { [x: string]: number };
//             borderColor: { [x: string]: string };
//           };
//         };
//       };
//     };
//     _active?: any;
//     ctx: any;
//     chartArea: { width: number; height: number };
//   }) {
//     const {
//       ctx,
//       chartArea: { width, height },
//     } = chart;
//     ctx.save();

//     if (chart._active[0]) {
//       // console.log("chart._active[0]:", chart._active[0]);
//       // console.log("chart.config.data.labels[chart._active[0].index]:", chart.config.data.labels[chart._active[0].index]);
//       // console.log(
//       //   "chart.config.data.datasets[chart._active[0].datasetIndex].borderColor[chart._active[0].index]:",
//       //   chart.config.data.datasets[chart._active[0].datasetIndex].borderColor[chart._active[0].index]
//       // );
//       // console.log("chart._active[0].datasetIndex:", chart._active[0].datasetIndex);
//       // console.log("chart._active[0].index:", chart._active[0].index);

//       const textLabel = chart.config.data.labels[chart._active[0].index];
//       const dataLabel = chart.config.data.datasets[chart._active[0].datasetIndex].data[chart._active[0].index];
//       const color = chart.config.data.datasets[chart._active[0].datasetIndex].borderColor[chart._active[0].index];
//       // console.log({ textLabel, dataLabel, color });

//       ctx.font = "bolder 60px Arial";
//       ctx.fillStyle = color;
//       ctx.textAlign = "center";
//       ctx.fillText(`${textLabel}: ${dataLabel}`, width / 2, height / 2 + 25);
//     }
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
//     },
//   },
//   plugins: [hoverLabels],
// };

// new Chart(document.getElementById("myChart") as HTMLCanvasElement, config as unknown as ChartConfiguration);

//* Create an Indicator Tracker in Chart.js
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

// // statusChecker plugin
// const statusChecker = {
//   id: "statusChecker",
//   beforeDatasetsDraw(chart: { ctx: any; chartArea: { left: number; right: number }; scales: { x: any; y: any } }) {
//     const {
//       ctx,
//       chartArea: { left, right },
//       scales: { y },
//     } = chart;

//     ctx.save();
//     drawLines(12, "rgba(255, 99, 132, 1)");
//     drawLines(3.5, "rgba(255, 206, 86, 1)");

//     function drawLines(yValue: number, color: string) {
//       ctx.beginPath();
//       ctx.lineWidth = 3;
//       ctx.strokeStyle = color;
//       ctx.moveTo(left, y.getPixelForValue(yValue));
//       ctx.lineTo(right, y.getPixelForValue(yValue));
//       ctx.stroke();
//       ctx.closePath();
//       ctx.restore();
//     }
//     tracker();
//   },
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
//   plugins: [statusChecker],
// };

// const myChart = new Chart(document.getElementById("myChart") as HTMLCanvasElement, config as unknown as ChartConfiguration);

// function tracker() {
//   const dataPoints = myChart.data.datasets![0].data as number[];

//   const dataPointsLength = myChart.data.datasets![0].data!.length - 1;
//   // console.log({ dataPoints, dataPointsLength });
//   const status = document.getElementById("status") as HTMLSpanElement;

//   if (dataPoints![dataPointsLength] > 12) {
//     status.innerText = "Danger";
//     status.style.color = "red";
//   } else if (dataPoints![dataPointsLength] < 3.5) {
//     status.innerText = "Please Reset System";
//     status.style.color = "orange";
//   } else {
//     status.innerText = "Success";
//     status.style.color = "green";
//   }
// }

// const addValue = (element: { value: string }) => {
//   // console.log("element:", element);
//   // console.log("element.value:", element.value);
//   myChart.data.datasets![0].data!.push(Number(element.value));
//   myChart.data.labels!.push(`New Value: ${element.value}`);
//   myChart.update();
// };

//* Create a Crosshair in Chart.js
const labels = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: ["rgba(255, 99, 132, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)"],
      borderWidth: 3,
      hitRadius: 0,
      pointRadius: 0,
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {
    layout: {
      padding: {
        left: 12,
      },
    },
    plugins: {
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

const myChart = new Chart(document.getElementById("myChart") as HTMLCanvasElement, config as ChartConfiguration);

function crosshair(chart: Chart, mousemove: MouseEvent) {
  // @ts-ignore
  chart.update("none");
  // console.log("chart:", chart);
  // console.log("mousemove:", mousemove);
  const xCoor = mousemove.offsetX;
  const yCoor = mousemove.offsetY;
  // console.log({ xCoor });
  // console.log({ yCoor });

  const {
    ctx,
    chartArea: { top, bottom, left, right },
    // @ts-ignore
    scales: { x, y },
  } = chart;

  // let left = xCoor,
  //   right = xCoor;
  // ctx!.beginPath();
  // ctx!.moveTo(left, yCoor);
  // ctx!.lineTo(right, yCoor);
  // ctx!.stroke();
  // ctx!.closePath();

  ctx!.save();

  if (xCoor >= left && xCoor <= right && yCoor >= top && yCoor <= bottom) {
    lines(left, yCoor, right, yCoor);
    lines(xCoor, top, xCoor, bottom);
    function lines(xStart: number, yStart: number, xEnd: number, yEnd: number) {
      ctx!.beginPath();
      ctx!.strokeStyle = "rgba(102, 102, 102, 1)";
      ctx!.lineWidth = 2;
      ctx!.moveTo(xStart, yStart);
      ctx!.lineTo(xEnd, yEnd);
      ctx!.setLineDash([6, 6]);
      ctx!.stroke();
      ctx!.closePath();
      ctx!.restore();
      ctx!.setLineDash([]);
    }

    ctx!.beginPath();
    const LABEL_HEIGHT = 24;
    ctx!.fillStyle = "rgba(102, 102, 102, 1)";
    ctx!.fillRect(0, yCoor - LABEL_HEIGHT / 2, left, LABEL_HEIGHT);
    ctx!.restore();

    const labelText = y.getValueForPixel(yCoor);
    ctx!.font = "bold 12px sans-serif";
    ctx!.textAlign = "center";
    ctx!.textBaseline = "middle";
    ctx!.fillStyle = "white";
    ctx!.fillText(labelText.toFixed(2), left / 2, yCoor);
    ctx!.restore();

    // Bottom rectangle
    const bottomLabel = data.labels[x.getValueForPixel(xCoor)];
    const bottomLabelWidth = ctx!.measureText(bottomLabel).width + 12;
    // console.log("bottomLabelWidth:", bottomLabelWidth);
    ctx!.beginPath();
    ctx!.fillStyle = "rgba(102, 102, 102, 1)";
    ctx!.fillRect(xCoor - bottomLabelWidth / 2, bottom, bottomLabelWidth, LABEL_HEIGHT);
    ctx!.restore();

    // Bottom text
    ctx!.font = "bold 12px sans-serif";
    ctx!.textAlign = "center";
    ctx!.textBaseline = "middle";
    ctx!.fillStyle = "white";
    ctx!.fillText(bottomLabel, xCoor, bottom + LABEL_HEIGHT / 2);
    ctx!.restore();
  }
}

myChart.canvas!.addEventListener("mousemove", (event: MouseEvent) => {
  crosshair(myChart, event);
});

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
