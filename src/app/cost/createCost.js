import React, { Component } from "react";
import axios from "axios";
import { Formik } from "formik";

class Cost extends Component {
  state = {};

  validate = (values) => {
    const errors = {};
    if (!values.staffSalary) {
      errors.staffSalary = "Required";
    } else if (values.staffSalary.length > 6) {
      errors.staffSalary = "Must be 15 characters or less";
    }

    if (!values.officeRent) {
      errors.officeRent = "Required";
    } else if (values.officeRent.length > 6) {
      errors.officeRent = "Must be 11 characters or less";
    }

    if (!values.utilityBill) {
      errors.utilityBill = "Required";
    } else if (values.utilityBill.length > 6) {
      errors.utilityBill = "Must be 5 characters or less";
    }

    return errors;
  };

  handleFormSubmit = (fData) => {
    console.log(fData);

    const data = {
      staffSalary: fData.staffSalary,
      officeRent: fData.officeRent,
      utilityBill: fData.utilityBill,
    };
    axios
      .post("http://localhost:4000/api/Cost", data)
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
                <h4>Create Your Cost</h4>

                <Formik
                  initialValues={{
                    staffSalary: "",
                    officeRent: "",
                    utilityBill: "",
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
                      staffSalary: values.staffSalary,
                      officeRent: values.officeRent,
                      utilityBill: values.utilityBill,
                    };

                    axios
                      .post("http://localhost:4000/api/Cost", data)
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
                          type="number"
                          className="form-control form-control-lg"
                          placeholder="staffSalary"
                          name="staffSalary"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.staffSalary}
                        />
                        {errors.staffSalary &&
                          touched.staffSalary &&
                          errors.staffSalary}
                      </div>

                      <div className="form-group">
                        <input
                          type="number"
                          className="form-control form-control-lg"
                          placeholder="officeRent"
                          name="officeRent"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.officeRent}
                        />
                        {errors.officeRent &&
                          touched.officeRent &&
                          errors.officeRent}
                      </div>

                      <div className="form-group">
                        <input
                          type="number"
                          className="form-control form-control-lg"
                          placeholder="utilityBill"
                          name="utilityBill"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.utilityBill}
                        />
                        {errors.utilityBill &&
                          touched.utilityBill &&
                          errors.utilityBill}
                      </div>

                      <button
                        className="btn btn-primary"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        Create Cost
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

export default Cost;
