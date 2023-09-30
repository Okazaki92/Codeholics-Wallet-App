import css from "./Table.module.css";

const Table = ({ dataToRender, statistics }) => {
  // const stats = statistics.arrCategory;

  return (
    <div className={css.tableWrap}>
      <div className={css.header}>
        <div className={css.headerItem}>Category</div>
        <div className={css.headerItem}>Sum</div>
      </div>

      <ul className={css.list}>
        {dataToRender.map(({ name, color, sum }) => (
          <li className={css.listItem} key={name}>
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
              <p className={css.category}>{name}</p>
            </div>
            <p>{sum}$</p>
          </li>
        ))}

        {/* {stats.map((item) => (
          <li className={css.listItem} key={Object.keys(item)}>
            <div className={css.listItemWrap}>
              <div
                style={{
                  backgroundColor: `red`,
                  width: "24px",
                  height: "24px",
                  borderRadius: "2px",
                  marginRight: "16px",
                }}
              ></div>
              <p className={css.category}>{Object.keys(item)}</p>
            </div>
            <p>{Object.values(item)}$</p>
          </li>
        ))} */}
      </ul>
      <div className={css.resultsWrap}>
        <div className={css.results}>
          <p className={css.resultsTitle}>Expenses:</p>
          <p className={css.resultsExpenses}>{statistics.expenses}</p>
        </div>

        <div className={css.results}>
          <p className={css.resultsTitle}>Income:</p>
          <p className={css.resultsIncome}>{statistics.income}</p>
        </div>
      </div>
    </div>
  );
};

export default Table;
