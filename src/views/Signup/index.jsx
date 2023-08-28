import React from "react";
import swal from "sweetalert";
import { Button, Input } from "antd";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { Applogo } from "../../Entryfile/imagepath";
import { Link } from "react-router-dom";
import {
  UserOutlined,
  LockOutlined,
  TwitterOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { signUp } from "../../store/actions/auth";
import { schemaSignup } from "../../services/auth";
// import { schema } from "../../services/auth";

const Signup = (props) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      phoneNumber: "",
    },
    validationSchema: schemaSignup,
    validationOnMount: true,
  });

  const handleRegister = async (e) => {
    e.preventDefault();

    formik.setTouched({
      email: true,
      password: true,
    });

    if (!formik.isValid) {
      swal("Please check your information again!");
      return;
    }

    dispatch(
      signUp(formik.values, () => {
        props.history.push("/login");
      })
    );
  };

  return (
    <div className="account-content">
      <div className="container">
        <div className="account-logo">
          <Link to="/">{/* <img src={Applogo} alt="Jira" /> */}</Link>
        </div>
        <div className="account-box">
          <div className="account-wrapper">
            <h3 className="account-title">SignUp</h3>
            <p className="account-subtitle">
              Register for access to our dashboard
            </p>
            <form
              onSubmit={handleRegister}
              className="container"
              style={{ height: "auto", width: "auto" }}
            >
              <div
                className="justify-center items-center"
              >
                {/* name*/}
                <div className="mt-3 form-group">
                  <Input
                    name="name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    size="large"
                    placeholder="name"
                    style={{ minWidth: 300, borderRadius: 5 }}
                    prefix={<UserOutlined />}
                  />
                </div>
                {formik.touched.name && (
                  <p className="text-red-500">{formik.errors.name}</p>
                )}

                {/* email*/}
                <div className="mt-3 form-group">
                  <Input
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    size="large"
                    placeholder="email"
                    style={{ minWidth: 300, borderRadius: 5 }}
                    prefix={<MailOutlined />}
                  />
                </div>
                {formik.touched.email && (
                  <p className="text-red-500">{formik.errors.email}</p>
                )}

                {/* phone */}
                <div className="mt-3 form-group">
                  <Input
                    name="phoneNumber"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    size="large"
                    placeholder="phone number"
                    style={{ minWidth: 300, borderRadius: 5 }}
                    prefix={<PhoneOutlined />}
                  />
                </div>
                {formik.touched.phoneNumber && (
                  <p className="text-red-500">{formik.errors.phoneNumber}</p>
                )}

                {/* password */}
                <div className="mt-3 form-group">
                  <Input
                    name="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="password"
                    size="large"
                    placeholder="password"
                    style={{ minWidth: 300, borderRadius: 5 }}
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
                  SignUp
                </button>
                <div className="account-footer">
                  <p>
                    Already have an account? <Link to="/login">Login</Link>
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

export default Signup;
