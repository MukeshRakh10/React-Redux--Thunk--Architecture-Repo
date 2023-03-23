import React,{useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { validateLoginAction } from "../Action/LoginAction";
import { useSelector, useDispatch } from 'react-redux';
export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const resp = useSelector(state => state.red1);
  if(resp.login == "success"){
    navigate('/products');
  }


  const useremail = useRef();
  const userpwd = useRef();
  
  const changeAuthMode = () => {
    navigate('/signUp');
  }

  const validateLogin = () =>{
    let obj = {"email": useremail.current.value, "password": userpwd.current.value };
    dispatch(validateLoginAction(obj));
  }
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <div className="text-center">
            Do you want to sign up?{" "}
              <a href="#" onClick={changeAuthMode}>Sign Up</a>
          </div>
          {resp.login}
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email" ref = {useremail}
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password" ref = {userpwd}
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type = "button" onClick={validateLogin} className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  )

};

