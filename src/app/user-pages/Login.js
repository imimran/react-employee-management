import React, { Component } from "react";
//import { Link } from 'react-router-dom';
import axios from "axios";
import { Formik } from "formik";

export class Login extends Component {


  validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Please Provide Your Email";
    }
    if (!values.password) {
      errors.password = "Please Provide Your Password";
    }
    return errors;
  };


  handleOnSubmit = (fData) => {
    console.log(fData);

    const data = {
      email: fData.email,
      password: fData.password,
    };
    axios
      .post("http://localhost:4000/api/auth/login", data)
      .then((res) => {
        //localStorage.setItem("token", res.data.token);
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
                <h4>Hello! let's get started</h4>
                <h6 className="font-weight-light">Sign in to continue.</h6>


                <Formik
                  initialValues={{ email: "", password: "" }}
                  validate={(values) => {
                    return this.validate(values);
                  }}
                  onSubmit={(
                    values,
                    { setSubmitting, setErrors, setStatus }
                  ) => {
                    const data = {
                      email: values.email,
                      password: values.password,
                    };

                    axios
                      .post("http://localhost:4000/api/auth/login", data)
                      .then((res) => {
                        
                        console.log(res.data.token);
                        localStorage.setItem("token", res.results.data);
                        // if (res.status !== 200) {
                        //   setStatus({ email: res.data.errors });
                        // }
                      })
                      .catch(function (error) {
                        if (error.response) {
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
                  }) => (
                    <form className="pt-3" onSubmit={handleSubmit}>
                      {!!status && <p>{status}</p>}

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
                          type="password"
                          className="form-control form-control-lg"
                          placeholder="Password"
                          name="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                        />
                        {errors.password && touched.password && errors.password}
                      </div>

                       <button
                        className="btn btn-primary"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        Log In
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

export default Login;


