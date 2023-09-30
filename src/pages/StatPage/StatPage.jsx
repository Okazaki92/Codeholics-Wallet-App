import css from "./StatPage.module.css";
import Chart from "../../components/Chart/Chart";
import Table from "../../components/Table/Table";

// MOJE
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCategories } from "../../redux/category/categoriesSelectors";
import { getCategories } from "../../redux/category/categoriesOperations";
import { selectStatistics } from "../../redux/statistics/statisticsSelectors";

import { fetchStatistics } from "../../redux/statistics/statisticsOperations";

const StatPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  const categories = useSelector(selectCategories);

  const cat = categories.map((category) => category.data);
  const cats = cat[0];
  console.log(cats);

  const statistics = useSelector(selectStatistics);

  // const currentMonth = new Date().toISOString().slice(5, 7);
  // const currentYear = new Date().toISOString().slice(0, 4);

  const test = {
    month: 9,
    year: 2023,
  };

  useEffect(() => {
    dispatch(fetchStatistics(test));
  }, [dispatch]);

  const newStats = statistics.arrCategory;

  const arrStats = newStats.map((item) => {
    const name = Object.keys(item);
    const sum = Object.values(item);

    const arr = {
      name: name.toString().toLocaleLowerCase(),
      sum: parseInt(sum),
    };

    return arr;
  });

  console.log(arrStats);

  let allArray = [];

  const creatNewArray = () => {
    cats.forEach((el1) => {
      arrStats.forEach((el2) => {
        if (el1.name === el2.name) {
          const sum = el2.sum;
          allArray.push({ ...el1, sum });
        }
      });
    });
  };

  creatNewArray();
  console.log(allArray);

  return (
    <div className={css["stats-container"]}>
      <p className={css["stats-title"]}>Statistics</p>
      <div className={css["stats-section"]}>
        <Chart dataToRender={allArray} />
        {/* <Table dataToRender={cat} statistics={statistics} /> */}
        <Table dataToRender={allArray} statistics={statistics} />
      </div>
    </div>
  );
};
export default StatPage;
