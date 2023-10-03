import { useField } from "formik";
import PropTypes from "prop-types";

// import { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import css from "./FormFields.module.css";
import callendar from "../../../assets/icons/callendar.svg";

export const MyTextInput = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={css.sum}>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export const MyTextArea = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <textarea
        rows="1"
        cols="10"
        className="text-input"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

export const MySelect = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className={css.error}>{meta.error}</div>
      ) : null}
    </div>
  );
};

export const MyData = ({ ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <label className={css.date}>
      <DatePicker
        {...field}
        {...props}
      
        selected={field.value}
        onChange={(value) => {
          helpers.setValue(value);
        }}
        // classname={css.date}
      />

      <img className={css.iconCallendar} src={callendar} alt="Callendar icon" />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
      
    </label>
  );
};

MySelect.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
};

MyTextInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
};
