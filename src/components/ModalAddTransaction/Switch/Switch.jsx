import PropTypes from "prop-types";
import { useField } from "formik";
import css from "./Switch.module.css";

import plus from "../../../assets/icons/plusBtn.svg";

import minus from "../../../assets/icons/minusBtn.svg";

export const Switch = ({ ...props }) => {
  const [field] = useField(props);

  const isCheck = props.checked;

  const classType = () => {
    if (isCheck) {
      return css.green;
    } else {
      return css.gray;
    }
  };

  const classType2 = () => {
    if (isCheck) {
      return css.gray;
    } else {
      return css.pink;
    }
  };

  const classType3 = () => {
    if (isCheck) {
      return css.invisibleBtn;
    } else {
      return css.visibleBtn;
    }
  };

  const classType4 = () => {
    if (isCheck) {
      return css.visibleBtn;
    } else {
      return css.invisibleBtn;
    }
  };

  return (
    <div className={css.switch}>
      <p className={`${css.switchText} ${classType()}`}>Income</p>

      <label className={css.switchSlider}>
        <input className={css.switchCheckbox} {...field} {...props} />

        <img
          className={`${classType4()} ${css.leftBtn} ${css.imgLeft}`}
          src={plus}
        />
        <img className={`${classType3()} ${css.imgRight}`} src={minus} />
      </label>
      <p className={`${css.switchText} ${classType2()}`}>Expense</p>
    </div>
  );
};


Switch.propTypes = {
    checked: PropTypes.bool,
   
  };


