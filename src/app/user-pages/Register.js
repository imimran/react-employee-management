import React, { Component } from "react";
//import { Link } from 'react-router-dom';
//import axios from "axios";
//import { Formik } from "formik";
import {connect} from "react-redux"
import { addUser } from "../../store/actions/user";

export class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
  };

  handleTextChange = (event) => {
    const {
      target: { name, value },
    } = event;
    this.setState({ [name]: value });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addUser(this.state);
    this.setState({
      username: "",
      email: "",
      password: "",
    });
  };

  validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Required";
    } else if (values.username.length > 15) {
      errors.username = "Must be 15 characters or less";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 5) {
      errors.password = "Must be 5 characters or less";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  // handleFormSubmit = (fData) => {
  //   console.log(fData);

  //   const data = {
  //     username: fData.username,
  //     email: fData.email,
  //     password: fData.password,
  //   };

  //   axios
  //     .post("http://localhost:4000/api/user/signup", data)
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });

  //     this.props.createUser();
  // };

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
                <h4>New here?</h4>
                <h6 className="font-weight-light">
                  Signing up is easy. It only takes a few steps
                </h6>

                <p></p>

                <form onSubmit={this.handleOnSubmit}>
                  <div className="form-group">
                    <label>User Name</label>
                    <input
                      onChange={this.handleTextChange}
                      value={this.state.username}
                      type="text"
                      name="username"
                      className="form-control"
                      placeholder="User Name"
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      onChange={this.handleTextChange}
                      value={this.state.email}
                      type="text"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      onChange={this.handleTextChange}
                      value={this.state.password}
                      type="text"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group">
                    <button className="btn btn-primary" type="submit">
                      Add User
                    </button>
                  </div>
                </form>

                {/* <Formik
                  initialValues={{ username: "", email: "", password: "" }}
                  validate={(values) => {
                    return this.validate(values);
                  }}
                  onSubmit={(
                    values,
                    { setSubmitting, setErrors, setStatus }
                  ) => {
                    
                    const data = {
                      username: values.username,
                      email: values.email,
                      password: values.password,
                    };

                    axios
                      .post("http://localhost:4000/api/user/signup", data)
                      .then((res) => {
                        console.log(res.data);
                        if (res.status !== 200) {
                          setStatus({ email: res.data.errors });
                        }
                      })
                      .catch(function (error) {
                        if (error.response) {
                          
                          console.log(error.response.data);
                          console.log(error.response.status);
                          console.log(error.response.headers);

                          setStatus(error.response.data.message);

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
                          name="username"
                          placeholder="Username"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.username}
                        />
                        {errors.username && touched.username && errors.username}
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
                        Register
                      </button>
                    </form>
                  )}
                </Formik> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default connect(null, { addUser })(Register);
