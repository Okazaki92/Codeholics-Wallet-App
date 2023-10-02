import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Colors,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import css from "./Chart.module.css";

import { useState, useEffect } from "react";

const DoughnutChart = ({ dataToRender, statistics }) => {
  ChartJS.register(ArcElement, Tooltip, Legend, Colors);

  const [showChart, setShowChart] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowChart(true);
    }, 500);
  }, []);

  let color = "";
  const balance =
    statistics.income - statistics.expenses
      ? statistics.income - statistics.expenses
      : "0";
  const labels = dataToRender.map((item) => item.name);
  const backgroundColors = dataToRender.map((item) => item.color);
  const dataValues = dataToRender.map((item) => item.sum);

  const colorBalance = () => {
    if (statistics.income > statistics.expenses) {
      color = "#24CCA7";
    } else {
      color = "FF6596";
    }
  };

  colorBalance();

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Amount",
        data: dataValues,
        backgroundColor: backgroundColors,
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
      ctx.fillStyle = `${color}`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
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
      <p className={css.balance}>$ {balance}</p>
    </div>
  );
};

export default DoughnutChart;
