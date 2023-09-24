import css from "./ButtonAddTransaction.module.css";
import PropTypes from "prop-types";
import plusBtnModal from "../../assets/icons/plusBtnModal.svg";
import { useDispatch } from "react-redux";
import { setIsModalAddTransactionOpen } from '../../redux/global/globalSlice';

const ButtonAddTransactions = () => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(setIsModalAddTransactionOpen(true));
  };

  return (
    <button className={`${css.button} ${css.position}`} onClick={onClick}>
      <img
        className={css.icon}
        src={plusBtnModal}
        alt="Add transaction button"
      />
    </button>
  );
};

ButtonAddTransactions.propTypes = {
  onClick: PropTypes.func,
};

export default ButtonAddTransactions;
