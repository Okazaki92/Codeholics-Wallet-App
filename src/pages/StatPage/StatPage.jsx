import css from "./StatPage.module.css";
import Chart from "../../components/Chart/Chart";
import Table from "../../components/Table/Table";

const StatPage = () => {
  // PRZYKŁADOWE DANE DO WYRENDEROWANIE KOMPONETÓW <CHART/> I <TABLE/>
  const dataToRender = [
    {
      category: "Main expenses",
      amount: 8700,
      color: "#FED057",
    },
    {
      category: "Products",
      amount: 3800.74,
      color: "#FFD8D0",
    },
    {
      category: "Car",
      amount: 1500,
      color: "#FD9498",
    },
    {
      category: "Self care",
      amount: 800.0,
      color: "#C5BAFF",
    },
    {
      category: "Child care",
      amount: 2208.5,
      color: "#6E78E8",
    },
    {
      category: "Household products",
      amount: 300,
      color: "#4A56E2",
    },
    {
      category: "Education",
      amount: 3400,
      color: "#81E1FF",
    },
    {
      category: "Leisure",
      amount: 1230,
      color: "#24CCA7",
    },
    {
      category: "Other expenses",
      amount: 610,
      color: "#00AD84",
    },
  ];

  return (
    <div className={css["stats-container"]}>
      <p className={css["stats-title"]}>Statistics</p>
      <div className={css["stats-section"]}>
        <Chart dataToRender={dataToRender} />
        <Table dataToRender={dataToRender} />
      </div>
    </div>
  );
};
export default StatPage;
