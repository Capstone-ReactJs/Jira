import React from "react";
import { Button, Input } from "antd";
import { LockOutlined, TwitterOutlined, MailOutlined } from "@ant-design/icons";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../store/actions/auth";
import { schema } from "../../services/auth";
import { NavLink } from "react-router-dom";
import { Applogo } from "../../Entryfile/imagepath";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const Login = (props) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    validationOnMount: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    formik.setTouched({
      email: true,
      password: true,
    });

    if (!formik.isValid) {
      swal("Please check again!");
      return;
    }

    dispatch(
      logIn(formik.values, () => {
        props.history.push("/projects");
      })
    );
  };

  return (
    <div className="account-content">
      <div className="container">
        <div className="account-logo">
          <Link to="/">
            {/* <img src={Applogo} alt="Jira" /> */}
          </Link>
        </div>
        <div className="account-box">
          <div className="account-wrapper">
            <h3 className="account-title">Login</h3>
            <p className="account-subtitle">Access to our dashboard</p>
            <form
              onSubmit={handleSubmit}
              className="container"
              style={{ height: "auto", width: "auto" }}
            >
              <div className="justify-center items-center">
                {/* email*/}
                <div className="mt-3 form-group">
                  <label>Email Address</label>
                  <Input
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    size="large"
                    placeholder="email"
                    style={{ minWidth: 200, borderRadius: 5 }}
                    prefix={<MailOutlined />}
                  />
                </div>
                {formik.touched.email && (
                  <p className="text-red-500">{formik.errors.email}</p>
                )}

                {/* password */}
                <div className="mt-3 form-group">
                  <label>Password</label>
                  <Input
                    name="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="password"
                    size="large"
                    placeholder="password"
                    style={{ minWidth: 200, borderRadius: 5 }}
                    prefix={<LockOutlined />}
                  />
                </div>
                {<p className="text-red-500">{formik.errors.password}</p>}

                {/*  login btn */}
                <button
                  htmlType="submit"
                  size="large"
                  style={{
                    minWidth: 200,
                    color: "#fff",
                    borderRadius: 5,
                  }}
                  className="mt-3 mb-5 lg:w-96 btn btn-primary account-btn"
                >
                  Login
                </button>
                <div className="account-footer">
                  <p>
                  Don't have an account yet? <Link to="/register">Register</Link>
                  </p>
                  {/* fb btn*/}
                  <div className="social mt-3">
                    <Button
                      style={{
                        backgroundColor: "rgb(59,89,152)",
                        height: 42,
                        width: 42,
                        marginRight: 5,
                      }}
                      shape="circle"
                    >
                      <span
                        className="font-bold flex justify-center"
                        style={{ color: "#fff", fontSize: 20 }}
                      >
                        f
                      </span>
                    </Button>

                    {/* twitter btn */}
                    <Button
                      type="primary"
                      shape="circle"
                      icon={<TwitterOutlined />}
                      style={{ height: 41, width: 41 }}
                    ></Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
