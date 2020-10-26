import React, { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
//import Message from './Message';

import { login } from '../../store/actions/user';

const Login = ({ location, history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState(false);

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin );
  const authToken = localStorage.getItem('authToken');
  console.log(authToken);
  const { error, userInfo } = userLogin;

  const redirect = location.search
    ? location.search.split("=")[1]
    : "/organizations/create";

  useEffect(() => {
    if (authToken) {
      setLoginStatus(true);
      history.push(redirect);
    }
  }, [history, authToken, userInfo, redirect]);

  const submitHandler = async (e) => {
    e.preventDefault();
    await dispatch(login(email, password));
    if (loginStatus) {
      console.log("Login");
      history.push(redirect);
    }
  };

  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col xs={12} md={6}>
          <h1>Sign In</h1>
          {/* {error && <Message variant='danger'>{error}</Message>} */}

          <Form onSubmit={submitHandler}>
            <Form.Group controlId='email'>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='password'>
              <Form.Label>Password Address</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary'>
              Sign In
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default Login;

// import React, { Component } from "react";
// //import { Link } from 'react-router-dom';
// import axios from "axios";
// import { Formik } from "formik";

// export class Login extends Component {

//   validate = (values) => {
//     const errors = {};

//     if (!values.email) {
//       errors.email = "Please Provide Your Email";
//     }
//     if (!values.password) {
//       errors.password = "Please Provide Your Password";
//     }
//     return errors;
//   };

//   handleOnSubmit = (fData) => {
//     console.log(fData);

//     const data = {
//       email: fData.email,
//       password: fData.password,
//     };
//     axios
//       .post("http://localhost:4000/api/auth/login", data)
//       .then((res) => {
//         //localStorage.setItem("token", res.data.token);
//         console.log(res.data);
//       })
//       .catch((err) => console.log(err));
//   };
//   render() {
//     return (
//       <div>
//         <div className="d-flex align-items-center auth px-0">
//           <div className="row w-100 mx-0">
//             <div className="col-lg-4 mx-auto">
//               <div className="auth-form-light text-left py-5 px-4 px-sm-5">
//                 <div className="brand-logo">
//                   <img
//                     src={require("../../assets/images/logo.svg")}
//                     alt="logo"
//                   />
//                 </div>
//                 <h4>Hello! let's get started</h4>
//                 <h6 className="font-weight-light">Sign in to continue.</h6>

//                 <Formik
//                   initialValues={{ email: "", password: "" }}
//                   validate={(values) => {
//                     return this.validate(values);
//                   }}
//                   onSubmit={(
//                     values,
//                     { setSubmitting, setErrors, setStatus }
//                   ) => {
//                     const data = {
//                       email: values.email,
//                       password: values.password,
//                     };

//                     axios
//                       .post("http://localhost:4000/api/auth/login", data)
//                       .then((res) => {

//                         console.log(res.data.token);
//                         localStorage.setItem("token", res.results.data);
//                         // if (res.status !== 200) {
//                         //   setStatus({ email: res.data.errors });
//                         // }
//                       })
//                       .catch(function (error) {
//                         if (error.response) {
//                           console.log(error.response.data);
//                           console.log(error.response.status);
//                           console.log(error.response.headers);

//                           setStatus(error.response.data.errors);

//                           const errorData = error.response.data.errors;

//                           if (errorData.hasOwnProperty("email")) {
//                             setErrors({ email: errorData.email });
//                           }
//                         }
//                       });
//                     return;
//                   }}
//                 >
//                   {({
//                     values,
//                     errors,
//                     status,
//                     touched,
//                     handleChange,
//                     handleBlur,
//                     handleSubmit,
//                     isSubmitting,
//                   }) => (
//                     <form className="pt-3" onSubmit={handleSubmit}>
//                       {!!status && <p>{status}</p>}

//                       <div className="form-group">
//                         <input
//                           type="text"
//                           className="form-control form-control-lg"
//                           placeholder="Email"
//                           name="email"
//                           onChange={handleChange}
//                           onBlur={handleBlur}
//                           value={values.email}
//                         />
//                         {errors.email && touched.email && errors.email}
//                       </div>
//                       <div className="form-group">
//                         <input
//                           type="password"
//                           className="form-control form-control-lg"
//                           placeholder="Password"
//                           name="password"
//                           onChange={handleChange}
//                           onBlur={handleBlur}
//                           value={values.password}
//                         />
//                         {errors.password && touched.password && errors.password}
//                       </div>

//                        <button
//                         className="btn btn-primary"
//                         type="submit"
//                         disabled={isSubmitting}
//                       >
//                         Log In
//                       </button>

//                     </form>
//                   )}
//                 </Formik>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Login;
