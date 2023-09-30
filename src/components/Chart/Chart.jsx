import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Colors,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import css from "./Chart.module.css";

const DoughnutChart = ({ dataToRender }) => {
  ChartJS.register(ArcElement, Tooltip, Legend, Colors);

  // const dataToChart = [
  //   {
  //     category: "Main expenses",
  //     amount: 8700,
  //     color: "#FED057",
  //   },
  //   {
  //     category: "Products",
  //     amount: 3800.74,
  //     color: "#FFD8D0",
  //   },
  //   {
  //     category: "Car",
  //     amount: 1500,
  //     color: "#FD9498",
  //   },
  //   {
  //     category: "Self care",
  //     amount: 800.0,
  //     color: "#C5BAFF",
  //   },
  //   {
  //     category: "Child care",
  //     amount: 2208.5,
  //     color: "#6E78E8",
  //   },
  //   {
  //     category: "Household products",
  //     amount: 300,
  //     color: "#4A56E2",
  //   },
  //   {
  //     category: "Education",
  //     amount: 3400,
  //     color: "#81E1FF",
  //   },
  //   {
  //     category: "Leisure",
  //     amount: 1230,
  //     color: "#24CCA7",
  //   },
  //   {
  //     category: "Other expenses",
  //     amount: 610,
  //     color: "#00AD84",
  //   },
  // ];

  const data = {
    labels: dataToRender.map((item) => item.name),
    // labels: ["Red", "Black"],
    datasets: [
      {
        label: "Amount",
        data: dataToRender.map((item) => item.sum),
        // data: [333, 555],
        backgroundColor: dataToRender.map((item) => item.color),
        // backgroundColor: [
        //   "#FED057",
        //   "#FFD8D0",
        //   "#FD9498",
        //   "#C5BAFF",
        //   "#6E78E8",
        //   "#4A56E2",
        //   "#81E1FF",
        //   "#24CCA7",
        //   "#00AD84",
        // ],

        borderWidth: 1,
      },
    ],
  };

  const textCenter = {
    id: "textCenter",
    beforeDatasetsDraw(chart) {
      const { ctx } = chart;
      ctx.save();
      ctx.font = "bold 18px sans-serif";
      ctx.fillStyle = "#000000";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(
        // `$${balance}`,
        `$Balance`,
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y
      );
    },
  };

  const options = {
    cutout: "70%",
    plugins: {
      colors: {
        forceOverride: false,
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className={css.chartWrap}>
      <Doughnut data={data} options={options} plugins={[textCenter]}></Doughnut>
    </div>
  );
};

export default DoughnutChart;
