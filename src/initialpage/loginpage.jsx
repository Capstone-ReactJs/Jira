/**
 * Signin Firebase
 */

import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Applogo } from "../Entryfile/imagepath.jsx";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { alphaNumericPattern, emailrgx } from "../constant";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Entryfile/features/users.jsx";
import { withFormik, Form, Field, ErrorMessage } from "formik";
import { connect } from "react-redux";

function Loginpage(props) {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;

  return (
    <div className="account-content">
      {/* <Link to="/applyjob/joblist" className="btn btn-primary apply-btn">Apply Job</Link> */}
      <div className="container">
        {/* Account Logo */}
        <div className="account-logo">
          <Link to="app/projects/project_dashboard">
            <img src={Applogo} alt="Cyberbugs" />
          </Link>
        </div>
        {/* /Account Logo */}
        <div className="account-box">
          <div className="account-wrapper">
            <h3 className="account-title">{props.displayName}</h3>
            <p className="account-subtitle">Access to our dashboard</p>
            {/* Account Form */}
            <div>
              <Form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Email Address</label>
                  <Field
                    name="email"
                    type="text"
                    className="form-control"
                    placeholder="Enter your email address"
                  />
                  <div className="text-danger">{errors.email}</div>
                </div>
                <div className="form-group">
                  <div className="row">
                    <div className="col">
                      <label>Password</label>
                    </div>
                    <div className="col-auto">
                      <Link className="text-muted" to="/forgotpassword">
                        Forgot password?
                      </Link>
                    </div>
                  </div>
                  <Field
                    name="password"
                    className="form-control"
                    placeholder="Enter your password"
                    type="password"
                  />
                  <div className="text-danger">{errors.password}</div>
                </div>
                <div className="form-group text-center">
                  <button className="btn btn-primary account-btn" type="submit">
                    Login
                  </button>
                </div>
              </Form>
              <div className="account-footer">
                <p>
                  Don't have an account yet?{" "}
                  <Link to="/register">Register</Link>
                </p>
              </div>
            </div>
            {/* /Account Form */}
          </div>
        </div>
      </div>
    </div>
  );
}

const LoginCyberBugsWithFormik = withFormik({
  mapPropsToValues: () => ({
    email: "",
    password: "",
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Email is invalid"),
    password: Yup.string()
      .min(6, "Password must have min 6 characters")
      .max(32, "Password must have max 32 characters"),
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    console.log(values);
    // Gửi dữ liệu lên server hoặc thực hiện các xử lý khác
    setSubmitting(false);
  },

  displayName: "Login Cyberbugs",
})(Loginpage);

export default connect()(LoginCyberBugsWithFormik);
