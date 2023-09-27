import { useEffect } from "react";
import css from "./Balance.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setBalance } from "../../redux/transactions/transactionSlice";
import formatNumberWithSpaces from "../../utils/formatBalanceNumber";

const Balance = () => {
  const dispatch = useDispatch();
  const totalBalance = useSelector((state) => state.transactions.totalBalance);

  useEffect(() => {
    dispatch(setBalance(totalBalance));
  }, [dispatch, totalBalance]);

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
