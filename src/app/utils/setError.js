export const setErrors = (username, email, password) => {
  let errors = {};
  errors.username = username ? "" : "Username is requried";
  errors.email = email ? "" : "email is requried";
  errors.password = password ? "" : "password is requried";
  return errors;
};
