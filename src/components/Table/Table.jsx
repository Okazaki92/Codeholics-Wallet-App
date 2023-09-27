import css from "./Table.module.css";

const Table = ({ dataToRender }) => {
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

  return (
    <div className={css.tableWrap}>
      <div className={css.header}>
        <div className={css.headerItem}>Category</div>
        <div className={css.headerItem}>Sum</div>
      </div>

      <ul className={css.list}>
        {dataToRender.map(({ category, amount, color }) => (
          <li className={css.listItem} key={category}>
            <div className={css.listItemWrap}>
              <div
                style={{
                  backgroundColor: `${color}`,
                  width: "24px",
                  height: "24px",
                  borderRadius: "2px",
                  marginRight: "16px",
                }}
              ></div>
              <p className={css.category}>{category}</p>
            </div>
            <p>{amount.toFixed(2)}</p>
          </li>
        ))}
      </ul>
      <div className={css.resultsWrap}>
        <div className={css.results}>
          <p className={css.resultsTitle}>Expenses:</p>
          <p className={css.resultsExpenses}>55555</p>
        </div>

        <div className={css.results}>
          <p className={css.resultsTitle}>Income:</p>
          <p className={css.resultsIncome}>777777</p>
        </div>
      </div>
    </div>
  );
};

export default Table;
