import axios from "axios";
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL } from "../Constants/LoginConstants";
export const SignUpAction = (login_details) => {
    return async (dispatch) => {
        dispatch({
            type: LOGIN,
            login: "",
            error: "",
            loading: false
        })
        let header = { "token": "dumyToken" };
        const  {data}  = await axios.post("http://localhost:8080/signUpSave", login_details, header);
        console.log("resp data from server ", data);
        const { login } = data;
        try {
            console.log("Try Response   ");
            dispatch({
                type: LOGIN_SUCCESS,
                login: login,
                error: "",
                loading: true
            })

        } catch (err) {
            console.log("err Response   ",err);

            dispatch({
                type: LOGIN_FAIL,
                login: "",
                error: err.message,
                loading: true
            })

        }
    }
}

//validate login
export const validateLoginAction = (login_details) => {
    return async (dispatch) => {
        dispatch({
            type: LOGIN,
            login: "",
            error: "",
            loading: false
        })
        let header = { "token": "dumyToken" };
        const  {data}  = await axios.post("http://localhost:8080/validateLogin", login_details, header);
        console.log("resp data from server ", data);
        const { login } = data;
        try {
            console.log("Try Response   ");
            dispatch({
                type: LOGIN_SUCCESS,
                login: login,
                error: "",
                loading: true
            })

        } catch (err) {
            console.log("err Response   ",err);

            dispatch({
                type: LOGIN_FAIL,
                login: "",
                error: err.message,
                loading: true
            })

        }
    }
}