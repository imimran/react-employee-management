import React, { Component } from "react";
import axios from "axios";
import { Formik } from "formik";

class Employee extends Component {
  state = {};

  validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    } else if (values.name.length > 15) {
      errors.name = "Must be 15 characters or less";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email department";
    }

    if (!values.designation) {
      errors.designation = "Required";
    } else if (values.designation.length >= 11) {
      errors.designation = "Must be 11 characters or less";
    }

    if (!values.department) {
      errors.department = "Required";
    } else if (values.department.length < 5) {
      errors.department = "Must be 5 characters or less";
    }

    return errors;
  };

  handleFormSubmit = (fData) => {
    console.log(fData);

    const data = {
      name: fData.name,
      email: fData.email,
      designation: fData.designation,
      department: fData.department,
    };
    axios
      .post("http://localhost:4000/api/employee", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div>
        <div className="d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  <img
                    src={require("../../assets/images/logo.svg")}
                    alt="logo"
                  />
                </div>
                <h4>Create Your Employee</h4>

                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    designation: "",
                    department: "",
                  }}
                  validate={(values) => {
                    return this.validate(values);
                  }}
                  onSubmit={(
                    values,
                    { setSubmitting, setErrors, setStatus }
                  ) => {
                    // console.log(values);
                    const data = {
                      name: values.name,
                      email: values.email,
                      designation: values.designation,
                      department: values.department,
                    };

                    axios
                      .post("http://localhost:4000/api/employee", data)
                      .then((res) => {
                        console.log(res.data);
                        if (res.status !== 200) {
                          setStatus({ email: res.data.errors });
                        }
                      })
                      .catch(function (error) {
                        if (error.response) {
                          // The request was made and the server responded with a status code
                          // that falls out of the range of 2xx
                          console.log(error.response.data);
                          console.log(error.response.status);
                          console.log(error.response.headers);

                          setStatus(error.response.data.errors);

                          const errorData = error.response.data.errors;

                          if (errorData.hasOwnProperty("email")) {
                            setErrors({ email: errorData.email });
                          }
                        }
                      });
                    return;
                  }}
                >
                  {({
                    values,
                    errors,
                    status,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                  }) => (
                    <form className="pt-3" onSubmit={handleSubmit}>
                      {!!status && <p>{status}</p>}

                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Employee Name"
                          name="name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                        />
                        {errors.name && touched.name && errors.name}
                      </div>

                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Email"
                          name="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                        />
                        {errors.email && touched.email && errors.email}
                      </div>

                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Phone"
                          name="designation"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.designation}
                        />
                        {errors.designation && touched.designation && errors.designation}
                      </div>

                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Employee Address"
                          name="department"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.department}
                        />
                        {errors.department && touched.department && errors.department}
                      </div>

                      <button
                        className="btn btn-primary"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        Create Employee
                      </button>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Employee;
