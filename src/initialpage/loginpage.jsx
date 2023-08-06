/**
 * Signin Firebase
 */

import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { Applogo } from '../Entryfile/imagepath.jsx'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup';
import { alphaNumericPattern, emailrgx } from '../constant'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Entryfile/features/users.jsx';

const Loginpage = (props) => {
  const [emailerror, setEmailError] = useState("");
  const [nameerror, setNameError] = useState("");
  const [passworderror, setPasswordError] = useState("");
  const [formgroup, setFormGroup] = useState("");
  const [inputValues, setInputValues] = useState({
    email: "admin@dreamguys.co.in",
    password: "123456",
  });

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(20, 'Password must not exceed 20 characters'),
  })
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = (data) => {
    console.log(data, ">>>")
    dispatch(login(data))


    // if (data.password != "123456") {
    //   setError('password', {
    //     message: 'password is mismatch',
    //   })
    // } else {
    //   clearErrors('password')
    props.history.push('/app/main/dashboard')

    // }
  }
  const dispatch = useDispatch();
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState(0);
  const [eye, seteye] = useState(true);


  const onEyeClick = () => {
    seteye(!eye)
  }
  return (


    <>
      <Helmet>
        <title>Login - Capstone Reactjs Jira</title>
        <meta name="description" content="Login page" />
      </Helmet>
      <div className="account-content">
        {/* <Link to="/applyjob/joblist" className="btn btn-primary apply-btn">Apply Job</Link> */}
        <div className="container">
          {/* Account Logo */}
          <div className="account-logo">
            <Link to="/app/main/dashboard"><img src={Applogo} alt="Dreamguy's Technologies" /></Link>
          </div>
          {/* /Account Logo */}
          <div className="account-box">
            <div className="account-wrapper">
              <h3 className="account-title">Login</h3>
              <p className="account-subtitle">Access to our dashboard</p>
              {/* Account Form */}
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group">
                    <label>Email Address</label>
                    {/* <Controller
                      name="email"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <input   className={`form-control  ${errors?.email ? "error-input" : "" }`} type="text" value={value} onChange={onChange} autoComplete="false"   />

                      )}
                      defaultValue="admin@dreamguys.co.in"
										/>											 */}
                    <input
                      type="text"
                      {...register('email')}
                      // className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      className="form-control"
                      placeholder="Enter your email address"
                      defaultValue="admin@dreamguystech.com"
                    />
                    {/* <input name="email" className={`form-control  ${errors?.email ? "error-input" : ""}`} type="email" value={email} onChange={e => SetEmail(e.target.value)} autoComplete="false" /> */}
                    <small>{errors.email?.message}</small>
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
                    {/* <Controller
                      name="password"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <div className="pass-group password-eye">
                          <input type={eye ? "password" : "text"} className={`form-control  ${errors?.password ? "error-input" : ""}`} value={value} onChange={onChange} autoComplete="false" />
                          <span onClick={onEyeClick} className={`fa toggle-password ${eye ? "fa-eye-slash" : "fa-eye"}`} />
                        </div>
                      )}
                      defaultValue="123456"
                      />											 */}
                    <input
                      type={eye ? "password" : "text"}
                      className="form-control"
                      // className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                      placeholder="Enter your password"
                      {...register('password')}
                      defaultValue={123456}
                    />
                    {/* <input type={eye ? "password" : "text"} className={`form-control  ${errors?.password ? "error-input" : ""}`} value={password} onChange={e => SetPassword(e.target.value)} autoComplete="false" /> */}
                    <span onClick={onEyeClick} className={`toggles-password fa toggle-password ${eye ? "fa-eye-slash" : "fa-eye"} `} />
                    <small>{errors.password?.message}</small>
                  </div>
                  <div className="form-group text-center">
                    <button
                      className="btn btn-primary account-btn"
                      type="submit"
                    >
                      Login
                    </button>

                  </div>
                </form>
                <div className="account-footer">
                  <p>Don't have an account yet? <Link to="/register">Register</Link></p>
                </div>
              </div>
              {/* /Account Form */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default Loginpage;
