import { useField } from "formik";
import PropTypes from "prop-types";

// import { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import css from "./FormFields.module.css";

export const MyTextInput = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

export const MyTextArea = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <textarea
        rows="2"
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
      <select required {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className={css.error}>{meta.error}</div>
      ) : null}
    </div>
  );
};

// export const SwitchModal = () => {
//   const [checked, setChecked] = useState(false);
//   const handleChange = (nextChecked) => {
//     setChecked(nextChecked);
//   };

//   return (
//     <>
//       <Switch
//         checked={checked}
//         onChange={handleChange}
//         handleDiameter={28}
//         offColor="#fff"
//         onColor="#fff"
//         offHandleColor="#24CCA7"
//         onHandleColor="#FF6596"
//         height={30}
//         width={70}
//         borderRadius={50}
//         uncheckedIcon={
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               height: "100%",
//               fontSize: 15,
//               color: "orange",
//               paddingRight: 2,
//             }}
//           ></div>
//         }
//         checkedIcon={false}
//         uncheckedHandleIcon={
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               height: "100%",
//               fontSize: 20,
//               color: "white",
//             }}
//           >
//             +
//           </div>
//         }
//         checkedHandleIcon={
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               height: "100%",
//               color: "white",
//               fontSize: 18,
//             }}
//           >
//             -
//           </div>
//         }
//       />
//     </>
//   );
// };

export const MyData = ({ ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <>
      <DatePicker
        {...field}
        {...props}
        selected={field.value}
        onChange={(value) => {
          helpers.setValue(value);
        }}
        classname={css.date}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
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
