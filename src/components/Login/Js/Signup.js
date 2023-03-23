import React, { useRef } from "react"
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { SignUpAction } from "../Action/LoginAction";

export const Signup = () => {

  const navigate = useNavigate();
  const username = useRef();
  const userPwd = useRef();
  const fullname = useRef();
  
  const dispatch = useDispatch();
  const resp = useSelector(state => state.red1);
  console.log("Resonse is ", resp);
  const goToLoginPage = () => {
    navigate('/');
  }
  const signUp = () => {
    let obj = { "fullname":fullname.current.value,"email": username.current.value, "password": userPwd.current.value };
    dispatch(SignUpAction(obj));
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <div className="text-center">
            Already Register?{" "}
            <a href="#" onClick={goToLoginPage}>Login</a>
            <marquee style={{ color: "green" }}>{resp.login}</marquee>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="text" ref={fullname}
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email" ref={username}
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password" ref={userPwd}
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="button" onClick={signUp} className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  )
}
