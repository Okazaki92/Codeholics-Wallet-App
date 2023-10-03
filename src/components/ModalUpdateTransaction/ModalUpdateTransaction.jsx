import css from "./ModalUpdateTransaction.module.css";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import moment from "moment";
import {
  MySelect,
  MyTextInput,
  MyTextArea,
  MyData,
} from "./FormFields/FormFields";
import close from "../../assets/icons/close.svg";
import transactionsOperations from "../../redux/transactions/transactionOperations";
import { setIsModalUpdateOpen } from "../../redux/global/globalSlice";

export const ModalUpdateTransaction = ({ id, income }) => {
  const isChecked = income;
  const dispatch = useDispatch();
  const onClickClose = () => {
    dispatch(setIsModalUpdateOpen(false));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onClickClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const handleSubmit = (values) => {
    if (income) {
      return dispatch(
        transactionsOperations.updateTransaction({
          id: id,
          body: {
            sum: values.sum,
            comment: values.comment,
            date: moment(values.date).format("YYYY-MM-DD"),
          },
        })
      );
    }
    dispatch(
      // transactionsOperations.updateTransaction(
      //   { transactionId: id },
      //   {
      //     sum: values.sum,
      //     comment: values.comment,
      //     date: moment(values.date).format("YYYY-MM-DD"),
      //     category: values.category,
      //   }
      // )
      transactionsOperations.updateTransaction({
        id: id,
        body: {
          sum: values.sum,
          comment: values.comment,
          date: moment(values.date).format("YYYY-MM-DD"),
        },
      })
    );
  };

  return (
    <>
      <div className={css.backdrop}>
        <div className={css.modal}>
          <Formik
            initialValues={{
              comment: " ",
              sum: "",
              income: isChecked,
              category: "",
              date: new Date(),
            }}
            validationSchema={Yup.object({
              income: Yup.bool(),
              comment: Yup.string().max(150, "Must be 150 characters or less"),
              sum: Yup.number().required("Amount is required"),
              category: Yup.mixed().when("income", {
                is: (income) => !income,
                then: () =>
                  Yup.mixed().required("Please choose transaction category."),
                otherwise: () => Yup.mixed().notRequired(),
              }),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              handleSubmit(values);
              resetForm();
              setSubmitting(false);
              onClickClose();
            }}
          >
            <Form className={css.form}>
              <button className={css.closeModalBtn} onClick={onClickClose}>
                <img
                  className={css.closeModalBtn}
                  src={close}
                  alt="Close icon"
                />
              </button>
              <p className={css.title}>Edit transaction </p>

              {!isChecked && (
                <div className={css.selectWrapper}>
                  <MySelect className={css.select} name="category">
                    <option value="" disabled>
                      Select a category
                    </option>
                    <option value="Main expenses">Main expenses</option>
                    <option value="Products">Products</option>
                    <option value="Car">Car</option>
                    <option value="Self care">Self care</option>
                    <option value="Child care">Child care</option>
                    <option value="Household products">
                      Household products
                    </option>
                    <option value="Education">Education</option>
                    <option value="Leisure">Leisure</option>
                  </MySelect>
                </div>
              )}

              <div className={css.amountAndDate}>
                <div className={css.numberWrapper}>
                  <MyTextInput
                    name="sum"
                    type="number"
                    placeholder="0.00"
                    className={css.amountInput}
                  />
                </div>

                <div className={css.dateWrapper}>
                  <MyData
                    name="date"
                    dateFormat="dd.MM.yyyy"
                    className={css.date}
                  />
                </div>
              </div>

              <MyTextArea
                name="comment"
                type="text"
                placeholder="Comment"
                className={css.comment}
              />

              <button type="submit" className={`${css.btn} ${css.btnAdd}`}>
                Update
              </button>

              <button
                onClick={onClickClose}
                className={`${css.btn} ${css.btnClose}`}
              >
                cancel
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

ModalUpdateTransaction.propTypes = {
  id: PropTypes.string,
  income: PropTypes.bool,
};
