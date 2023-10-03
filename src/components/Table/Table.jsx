import css from "./Table.module.css";
import PropTypes from "prop-types";

const Table = ({ dataToRender, statistics }) => {
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
      </ul>
      <div className={css.resultsWrap}>
        <div className={css.results}>
          <p className={css.resultsTitle}>Expenses:</p>
          <p className={css.resultsExpenses}>${statistics.expenses}</p>
        </div>

        <div className={css.results}>
          <p className={css.resultsTitle}>Income:</p>
          <p className={css.resultsIncome}>${statistics.income}</p>
        </div>
      </div>
    </div>
  );
};

export default Table;

Table.propTypes = {
  dataToRender: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      sum: PropTypes.number.isRequired,
    })
  ).isRequired,
  statistics: PropTypes.any,
};
