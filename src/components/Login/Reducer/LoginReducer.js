import { LOGIN, LOGIN_FAIL, LOGIN_SUCCESS } from "../Constants/LoginConstants";
const initialState = {
    login: "",
    error: "",
    loading: false
}
export const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
        case LOGIN_SUCCESS:
        case LOGIN_FAIL:
            return {
                    ...state,
                    login : action.login,
                    error : action.error,
                    loading : action.loading
            }
        default : return state;
    }
}
