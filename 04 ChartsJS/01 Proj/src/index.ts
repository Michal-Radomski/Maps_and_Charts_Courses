import { ChartConfiguration } from "chart.js";

const { Chart } = window;
// console.log("Chart:", Chart);
// console.log({ window });

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

//* Bar Chart
const label = ["Red", "Blue", "Yellow"];
const dataPoints = [
  [12, 19, 3, 1, 3, 30],
  [10, 9, 5, 3, 6, 15],
  [14, 29, 7, 5, 9, 9],
];

const bgc = ["rgba(255, 99, 132, 0.2)", "rgba(0, 162, 0, 0.2)", "rgba(255, 206, 86, 0.2)"];
const bc = ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)"];

interface ColorDataSet {
  label: string;
  data: number[];
  backgroundColor: string;
  borderColor: string;
}

const colorDatasets = label.map((color, index) => {
  let colorObject = {} as ColorDataSet;
  colorObject.label = color;
  colorObject.data = dataPoints[index];
  colorObject.backgroundColor = bgc[index];
  colorObject.borderColor = bc[index];
  return colorObject;
});

// console.log("colorDatasets:", colorDatasets);

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [colorDatasets[2], colorDatasets[1], colorDatasets[0]],
};

const config = {
  type: "bar",
  data: data,
  options: {
    borderWidth: 3,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

new Chart(document.getElementById("myChart") as HTMLCanvasElement, config as ChartConfiguration);

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
