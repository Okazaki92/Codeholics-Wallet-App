import css from "./StatPage.module.css";
import Chart from "../../components/Chart/Chart";
import Table from "../../components/Table/Table";
import Dropdown from "../../components/Dropdown/Dropdown";

// MOJE
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCategories } from "../../redux/category/categoriesSelectors";
import { getCategories } from "../../redux/category/categoriesOperations";
import { selectStatistics } from "../../redux/statistics/statisticsSelectors";

import {
  fetchStatistics,
  setSelectedMonth,
  setSelectedYear,
} from "../../redux/statistics/statisticsOperations";

const months = [
  { id: 1, name: "January" },
  { id: 2, name: "February" },
  { id: 3, name: "March" },
  { id: 4, name: "April" },
  { id: 5, name: "May" },
  { id: 6, name: "June" },
  { id: 7, name: "July" },
  { id: 8, name: "August" },
  { id: 9, name: "September" },
  { id: 10, name: "October" },
  { id: 11, name: "November" },
  { id: 12, name: "December" },
];

const monthsOptions = months.map((option) => ({
  ...option,
  label: option.name,
  value: option.name.toLowerCase(),
}));

const currentYear = new Date().getFullYear();

const getNumberRange = (start, end) => {
  const range = [];
  for (let i = start; i <= end; i++) {
    range.push(i);
  }
  return range;
};
const year = getNumberRange(currentYear - 5, currentYear)
  .map((value) => ({ year: value }))
  .reverse();

const yearOptions = year.map((option) => ({
  ...option,
  label: option.year,
  value: option.year,
}));
const StatPage = () => {
  const dispatch = useDispatch();

  const { selectedMonth, selectedYear } = useSelector(
    (state) => state.statistics
  );

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const categories = useSelector(selectCategories);
  const cat = categories?.map((category) => category.data);
  const cats = cat[0];

  const statistics = useSelector(selectStatistics);

  const currentMonth = new Date().toISOString().slice(5, 7);
  const currentYear = new Date().toISOString().slice(0, 4);

  const test = {
    month: currentMonth,
    year: currentYear,
  };

  useEffect(() => {
    dispatch(fetchStatistics(test));
  }, [dispatch]);

  const handleMonthChange = (month) => {
    dispatch(setSelectedMonth(month));
    if (selectedYear !== null && month !== null) {
      dispatch(fetchStatistics({ month: month, year: selectedYear }));
    }
  };

  const handleYearChange = (year) => {
    dispatch(setSelectedYear(year));
    if (selectedMonth !== null && year !== null) {
      dispatch(fetchStatistics({ month: selectedMonth, year: year }));
    }
  };

  const newStats = statistics.arrCategory;

  const arrStats = newStats?.map((item) => {
    const name = Object.keys(item);
    const sum = Object.values(item);

    const arr = {
      name: name.toString().toLocaleLowerCase(),
      sum: parseInt(sum),
    };

    return arr;
  });

  let allArray = [];

  const creatNewArray = () => {
    cats?.forEach((el1) => {
      arrStats?.forEach((el2) => {
        if (el1.name === el2.name) {
          const sum = el2.sum;
          allArray.push({ ...el1, sum });
        }
      });
    });
  };

  creatNewArray();

  return (
    <div className={css["stats-container"]}>
      <p className={css["stats-title"]}>Statistics</p>
      <div className={css["stats-section"]}>
        <Chart dataToRender={allArray} statistics={statistics} />
        {/* <Table dataToRender={cat} statistics={statistics} /> */}
        <div>
          <div className={css["dropdown-container"]}>
            <Dropdown
              placeholder="Month"
              onChange={([{ id }]) => handleMonthChange(id)}
              options={monthsOptions}
            />
            <Dropdown
              placeholder="Year"
              onChange={([{ value }]) => handleYearChange(value)}
              options={yearOptions}
            />
          </div>
          <Table dataToRender={allArray} statistics={statistics} />
        </div>
      </div>
    </div>
  );
};
export default StatPage;
