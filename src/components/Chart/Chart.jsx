import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Colors,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import css from "./Chart.module.css";

const DoughnutChart = ({ dataToRender, statistics }) => {
  ChartJS.register(ArcElement, Tooltip, Legend, Colors);

  let color = "";

  const colorBalance = () => {
    if (statistics.income > statistics.expenses) {
      color = "#24CCA7";
    } else {
      color = "FF6596";
    }
  };

  colorBalance();

  const data = {
    labels: dataToRender.map((item) => item.name),
    datasets: [
      {
        label: "Amount",
        data: dataToRender.map((item) => item.sum),
        backgroundColor: dataToRender.map((item) => item.color),

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
      // ctx.fillStyle = "#000000";
      ctx.fillStyle = `${color}`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(
        // `$${balance}`,
        `${statistics.income - statistics.expenses}$`,
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
