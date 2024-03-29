import { ChartConfiguration } from "chart.js";

const { Chart } = window;
// @ts-ignore
// console.log("Chart.version:", Chart.version);

// Instantly assign Chart.js version
const chartVersion = document.getElementById("chartVersion") as HTMLSpanElement;
// @ts-ignore
chartVersion.innerText = Chart.version;

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
//       barPercentage: 0.5,
//       categoryPercentage: 0.8,
//     },
//   ],
// };

// // verticalBackground plugin
// const verticalBackground = {
//   id: "verticalBackground",
//   beforeDatasetsDraw(
//     chart: {
//       data: any;
//       ctx: any;
//       chartArea: { width: number; height: number; left: number };
//       scales: { y: any };
//     },
//     _args: any,
//     plugins: { barBackground: string }
//   ) {
//     const {
//       data,
//       ctx,
//       chartArea: { width, left, height },
//       scales: { y },
//     } = chart;
//     // console.log({ x });

//     const barPercentage = data.datasets[0].barPercentage || 0.9;
//     const categoryPercentage = data.datasets[0].categoryPercentage || 0.8;

//     const displayDataPoints = y.max - y.min + 1 || data.labels.length;
//     const barWidth = (height / displayDataPoints) * barPercentage * categoryPercentage;
//     ctx.save();

//     ctx.fillStyle = plugins.barBackground || "lightgrey";
//     for (let i = y.min; i <= displayDataPoints; i++) {
//       const yCoor = y.getPixelForValue(i);
//       ctx.fillRect(left, yCoor - barWidth / 2, width, barWidth);
//     }

//     // data.labels.forEach((_label: string, index: number) => {
//     //   // console.log({ _label });
//     //   const yCoor = y.getPixelForValue(index);
//     //   ctx.fillRect(left, yCoor - barWidth / 2, width, barWidth);
//     // });
//   },
// };

// const config = {
//   type: "bar",
//   data: data,
//   options: {
//     indexAxis: "y",
//     scales: {
//       y: {
//         min: 1,
//         max: 6,
//         beginAtZero: true,
//       },
//     },
//     plugins: {
//       verticalBackground: {
//         // barBackground: 'black'
//       },
//     },
//   },
//   plugins: [verticalBackground],
// };

// new Chart(document.getElementById("myChart") as HTMLCanvasElement, config as unknown as ChartConfiguration);

//* No Data Block for Bar Chart
// const labels = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];

// const data = {
//   labels: labels,
//   datasets: [
//     {
//       label: "# of Votes",
//       data: [12, null, 3, null, 2, 3],
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

// // noData plugin
// const noData = {
//   id: "noData",
//   afterDatasetsDraw: (chart: {
//     ctx: any;
//     data: any;
//     chartArea: { top: number; bottom: number; left: number; right: number; width: number; height: number };
//     scales: { x: any; y: any };
//   }) => {
//     const {
//       ctx,
//       data,
//       chartArea: { top, bottom, left, right, width, height },
//       scales: { x, y },
//     } = chart;

//     ctx.save();
//     const difference = x.max - x.min + 1;
//     const segment = width / difference;
//     // console.log({ segment });

//     data.datasets[0].data.forEach((datapoint: null | number, index: number) => {
//       const angle = Math.PI / 180;
//       // console.log({ angle });
//       ctx.translate(0, 0);

//       if (datapoint === null) {
//         ctx.fillStyle = "rgba(102, 102, 102, 0.2)";
//         ctx.strokeStyle = "rgba(102, 102, 102, 1)";
//         ctx.lineWidth = 1;
//         ctx.fillRect(x.getPixelForValue(index) - segment / 2, top, segment, height);
//         ctx.strokeRect(x.getPixelForValue(index) - segment / 2, top, segment, height);

//         ctx.rotate(90 * angle);
//         ctx.font = "bold 20px sans-serif";
//         ctx.fillStyle = "dimgray";
//         ctx.fillText("No Data", height / 2, -x.getPixelForValue(index));
//         ctx.rotate(-90 * angle);
//         ctx.restore();
//       }
//     });
//   },
// };

// const config = {
//   type: "bar",
//   data: data,
//   options: {
//     scales: {
//       x: {
//         min: 0,
//         max: 5,
//       },
//       y: {
//         beginAtZero: true,
//       },
//     },
//   },
//   plugins: [noData],
// };

// new Chart(document.getElementById("myChart") as HTMLCanvasElement, config as unknown as ChartConfiguration);

//* Add Custom Doughnut Slice and Text in Center
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

// // sliceThickness plugin
// const sliceThickness = {
//   id: "sliceThickness",
//   beforeDraw(chart: { getDatasetMeta?: any; ctx?: any; data?: any; chartArea?: any }) {
//     const {
//       ctx,
//       data,
//       chartArea: { top, bottom, left, right, width, height },
//     } = chart;

//     ctx.save();
//     // console.log(`Center: ${chart.getDatasetMeta(0).data[0].x}`);
//     // console.log(`InnerRadius: ${chart.getDatasetMeta(0).data[0].innerRadius}`);
//     // console.log(`OuterRadius: ${chart.getDatasetMeta(0).data[0].outerRadius}`);
//     // console.log(`Width: ${width}`);
//     ctx.fillStyle = "black";
//     ctx.fillRect(
//       chart.getDatasetMeta(0).data[0].x,
//       chart.getDatasetMeta(0).data[0].y,
//       chart.getDatasetMeta(0).data[1].outerRadius,
//       10
//     );

//     data.datasets[0].data.forEach((thickness: number, index: number) => {
//       chart.getDatasetMeta(0).data[index].innerRadius = width / 3.5;
//       chart.getDatasetMeta(0).data[index].outerRadius = width / 2.5 + thickness * 2;
//     });
//   },
// };

// // textLabel plugin
// const textLabel = {
//   id: "textLabel",
//   afterDatasetsDraw(
//     chart: { getDatasetMeta?: any; ctx?: any; data?: any; chartArea?: any },
//     _args: any,
//     plugins: { textColor: string }
//   ) {
//     const {
//       ctx,
//       data,
//       chartArea: { width },
//     } = chart;

//     ctx.save();

//     const xCenter = chart.getDatasetMeta(0).data[0].x;
//     const yCenter = chart.getDatasetMeta(0).data[0].y;

//     // console.log("plugins.textColor:", plugins.textColor);
//     const fontSize = width / 15;
//     ctx.font = `bold ${fontSize}px sans-serif`;
//     ctx.fillStyle = plugins.textColor || "dimgray";
//     ctx.textAlign = "center";
//     ctx.textBaseline = "middle";
//     //ctx.fillText('text', width / 2, height / 2 + top);
//     ctx.fillText(data.datasets[0].label, xCenter, yCenter);
//   },
// };

// const config = {
//   type: "doughnut",
//   data: data,
//   options: {
//     plugins: {
//       textLabel: {
//         textColor: "blue",
//       },
//     },
//   },
//   plugins: [textLabel, sliceThickness],
// };

// new Chart(document.getElementById("myChart") as HTMLCanvasElement, config as unknown as ChartConfiguration);

//* Radial Bar Chart with Label Scale
// const val = 100;
// const data = {
//   datasets: [
//     {
//       label: "Red",
//       data: [val],
//       backgroundColor: ["rgba(255, 99, 132, 0.2)"],
//       borderColor: ["rgba(255, 99, 132, 1)"],
//       borderWidth: 2,
//       circumference: (ctx: { dataset: { data: number[] } }) => {
//         // console.log({ctx})
//         return (ctx.dataset.data[0] / val) * 270;
//       },
//     },
//     {
//       label: "Blue",
//       data: [21],
//       backgroundColor: ["rgba(54, 162, 235, 0.2)"],
//       borderColor: ["rgba(54, 162, 235, 1)"],
//       borderWidth: 2,
//       circumference: (ctx: { dataset: { data: number[] } }) => {
//         // console.log({ctx})
//         return (ctx.dataset.data[0] / val) * 270;
//       },
//     },
//     {
//       label: "Orange",
//       data: [60],
//       backgroundColor: ["rgba(255, 159, 64, 0.2)"],
//       borderColor: ["rgba(255, 159, 64, 1)"],
//       borderWidth: 2,
//       circumference: (ctx: { dataset: { data: number[] } }) => {
//         // console.log({ctx})
//         return (ctx.dataset.data[0] / val) * 270;
//       },
//     },
//   ],
// };

// const labelsRadialBar = {
//   id: "labelsRadialBar",
//   afterDatasetsDraw(chart: { getDatasetMeta?: any; ctx?: any; data?: any }) {
//     const { ctx, data } = chart;

//     ctx.save();
//     ctx.font = "bold 12px sans-serif";
//     ctx.fillStyle = "black";

//     // console.log("chart.getDatasetMeta(0).data[0]:", chart.getDatasetMeta(0).data[0]);
//     const xCenter = chart.getDatasetMeta(0).data[0].x;
//     const yCenter = chart.getDatasetMeta(0).data[0].y;
//     ctx.save();

//     for (let i = 0; i < data.datasets.length; i++) {
//       const outerRadius = chart.getDatasetMeta(i).data[0].outerRadius;
//       const innerRadius = chart.getDatasetMeta(i).data[0].innerRadius;
//       const between = (outerRadius - innerRadius) / 2;

//       ctx.font = "bold 12px sans-serif";
//       ctx.fillStyle = data.datasets[i].borderColor;
//       ctx.textAlign = "right";
//       ctx.textBaseline = "middle";
//       ctx.fillText(data.datasets[i].label, xCenter - 6, yCenter - outerRadius + between);
//     }
//   },
// };

// const radialScale = {
//   id: "radialScale",
//   afterDatasetsDraw(chart: { getDatasetMeta?: any; ctx?: any; data?: any }) {
//     const { ctx, data } = chart;
//     const xCenter = chart.getDatasetMeta(0).data[0].x;
//     const yCenter = chart.getDatasetMeta(0).data[0].y;
//     const outerRadius = chart.getDatasetMeta(0).data[0].outerRadius + 20;

//     const dataPoints = data.datasets.map((dataset: { data: any[] }) => {
//       return dataset.data[0];
//     });
//     const max = Math.max(...dataPoints);
//     const increment = max / 6;
//     const labelArray = Array.from({ length: 7 }, (_, index) => {
//       // console.log(_, index);
//       return increment * index;
//     });
//     // console.log({ labelArray });

//     const startAngle = -90;
//     const anglePosition = [-90, -45, 0, 45, 90, 135, 180];
//     const labelPosition = anglePosition.map((angle) => {
//       const angleRad = (angle * Math.PI) / 180;
//       const x = xCenter + outerRadius * Math.cos(angleRad);
//       const y = yCenter + outerRadius * Math.sin(angleRad);
//       return { x, y };
//     });

//     ctx.save();

//     labelArray.forEach((label, index) => {
//       ctx.fillStyle = "black";
//       ctx.textAlign = "center";
//       ctx.fillText(label.toFixed(1), labelPosition[index].x, labelPosition[index].y);
//     });
//   },
// };

// const radialGrid = {
//   id: "radialGrid",
//   beforeDatasetsDraw(chart: { getDatasetMeta?: any; ctx?: any; data?: any }) {
//     const { ctx, data } = chart;

//     const datasetLength = data.datasets.length - 1;
//     const angle = Math.PI / 180;
//     const xCenter = chart.getDatasetMeta(0).data[0].x;
//     const yCenter = chart.getDatasetMeta(0).data[0].y;
//     const outerRadius = chart.getDatasetMeta(0).data[0].outerRadius;
//     const innerRadius = chart.getDatasetMeta(datasetLength).data[0].innerRadius;

//     ctx.save();
//     ctx.beginPath();
//     ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
//     ctx.strokeStyle = "rgba(0, 0, 0, 0.5)";
//     ctx.moveTo(xCenter, yCenter - innerRadius + 3);
//     ctx.lineTo(xCenter, yCenter - outerRadius - 3);

//     ctx.arc(xCenter, yCenter, outerRadius + 3, angle * -90, angle * 180, false);
//     ctx.lineTo(xCenter - innerRadius + 3, yCenter);
//     ctx.arc(xCenter, yCenter, innerRadius - 3, angle * 180, angle * -90, true);
//     ctx.closePath();
//     ctx.stroke();
//     ctx.fill();
//   },
// };

// // config block
// const config = {
//   type: "doughnut",
//   data: data,
//   options: {
//     layout: {
//       padding: 50,
//     },
//     borderRadius: 10,
//     plugins: {
//       legend: {
//         display: false,
//       },
//       tooltip: {
//         enabled: false,
//       },
//     },
//   },
//   plugins: [labelsRadialBar, radialScale, radialGrid],
// };

// new Chart(document.getElementById("myChart") as HTMLCanvasElement, config as ChartConfiguration);

//* Customize the Scale with Two Date Labels
const data = {
  labels: ["2023-01-01", "2023-02-01", "2023-03-01", "2023-04-01", "2023-05-01", "2023-05-19"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 15, 3, 6, 9, 3],
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

const config = {
  type: "bar",
  data: data,
  options: {
    scales: {
      x: {
        type: "time",
        time: {
          unit: "day",
          displayFormats: {
            day: "eeeeee",
          },
        },
        min: "2022-12-28",
        max: "2023-06-01",
        ticks: {
          maxRotation: 0,
          autoSkip: false,
          font: {
            weight: "bold",
          },
          showLabelBackdrop: true,
          backdropColor: (color: { tick: { value: number } }) => {
            // console.log("color.tick.value:", color.tick.value);
            const date = new Date(color.tick.value);
            const dayOfWeek = date.getDay();
            // console.log({ dayOfWeek });
            const isSunday = dayOfWeek === 0;
            const isSaturday = dayOfWeek === 6;

            if (isSunday === true || isSaturday === true) {
              return "#eee";
            } else {
              return "transparent";
            }
          },
        },
        border: {
          width: 3,
        },
        grid: {
          display: false,
        },
      },
      x2: {
        type: "time",
        time: {
          unit: "day",
          displayFormats: {
            day: "dd",
          },
        },
        min: "2022-12-28",
        max: "2023-06-01",
        ticks: {
          maxRotation: 0,
          autoSkip: false,
          showLabelBackdrop: true,
          backdropColor: (color: { tick: { value: number } }) => {
            // console.log("color.tick.value:", color.tick.value);
            const date = new Date(color.tick.value);
            const dayOfWeek = date.getDay();
            // console.log({ dayOfWeek });
            const isSunday = dayOfWeek === 0;
            const isSaturday = dayOfWeek === 6;

            if (isSunday === true || isSaturday === true) {
              return "#eee";
            } else {
              return "transparent";
            }
          },
        },
        border: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  },
};

new Chart(document.getElementById("myChart") as HTMLCanvasElement, config as ChartConfiguration);
