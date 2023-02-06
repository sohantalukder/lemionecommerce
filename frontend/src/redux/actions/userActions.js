import {
    USER_LOGIN_FAILED,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
} from "../constants/userConstants";
import axios from "axios";
export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST,
        });
        const config = {
            headers: {
                "Content-Type": "application/json ",
            },
        };
        const res = await axios.post(
            "/api/users/login",
            { email, password },
            config
        );
        if (res?.response.status === 200) {
            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: res?.response?.records,
            });
            localStorage.setItem(
                "userInfo",
                JSON.stringify(res?.response?.records)
            );
        }
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAILED,
            payload:
                error.message && error.response.response.status.message
                    ? error.response.response.status.message
                    : error.message,
        });
    }
};
