import { useEffect } from "react";
import css from "./Balance.module.css";
import { useDispatch, useSelector } from "react-redux";
import financeOperations from "../../redux/finance/financeOperations";
import { setTotalBalance } from "../../redux/finance/financeSlice";
import formatNumberWithSpaces from "../../utils/formatBalanaceNumber";

const Balance = () => {
  const dispatch = useDispatch();
  const totalBalance = useSelector((state) => state.finance.totalBalance);

  useEffect(() => {
    dispatch(financeOperations.getUserBalance())
      .unwrap()
      .then((balance) => {
        dispatch(setTotalBalance(balance));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [dispatch]);

  return (
    <div className={css.balanceBox}>
      <p className={css.headerVisibility}>YOUR BALANCE</p>
      <div className={css.balanceBox__content}>
        <p>$</p>
        <p>{formatNumberWithSpaces(totalBalance)}</p>
      </div>
    </div>
  );
};

export default Balance;
