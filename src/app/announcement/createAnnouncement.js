import React, { Component } from "react";
import axios from "axios";
import { Formik } from "formik";

class Anouncement extends Component {
  state = {};

  validate = (values) => {
    const errors = {};

    if (!values.message) {
      errors.message = "Required";
    } else if (values.message.length >= 11) {
      errors.message = "Must be 11 characters or less";
    }



    return errors;
  };

  handleFormSubmit = (fData) => {
    console.log(fData);

    const data = {
      message: fData.message,
      
    };
    axios
      .post("http://localhost:4000/api/announcement", data)
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
                <h4>Create Your Anouncement</h4>

                <Formik
                  initialValues={{
                    message: "",
                    
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
                      message: values.message
                     
                    };

                    axios
                      .post("http://localhost:4000/api/attendence", data)
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
                          placeholder="Month"
                          name="message"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.message}
                        />
                        {errors.message && touched.message && errors.message}
                      </div>

                     

                      <button
                        className="btn btn-primary"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        Create Anouncement
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

export default Anouncement;
