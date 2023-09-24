export const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length > 12 || values.password.length < 6) {
    errors.password = "Must be 6-12 characters";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Required";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Passwords must be identical";
  }

  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 12) {
    errors.firstName = "Must be 12 characters or less";
  }

  return errors;
};
