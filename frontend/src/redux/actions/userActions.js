import {
    USER_LOGIN_FAILED,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_REGISTER_FAILED,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
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
            `/api/users/login`,
            { email, password },
            config
        );
        if (res?.data?.response?.status.code === 200) {
            console.log(res?.data?.response?.records);
            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: res?.data?.response?.records,
            });
            localStorage.setItem(
                "userInfo",
                JSON.stringify(res?.data?.response?.records)
            );
        }
    } catch (error) {
        console.log(error.response?.data?.response?.status?.message);
        dispatch({
            type: USER_LOGIN_FAILED,
            payload: error.response?.data?.response?.status?.message,
        });
    }
};

export const logout = () => (dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch({ type: USER_LOGOUT });
};

export const registration = (email, name, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST,
        });
        const config = {
            headers: {
                "Content-Type": "application/json ",
            },
        };
        const res = await axios.post(
            `/api/users/login`,
            { name, email, password },
            config
        );
        if (res?.data?.response?.status.code === 200) {
            console.log(res?.data?.response?.records);
            dispatch({
                type: USER_REGISTER_SUCCESS,
                payload: res?.data?.response?.records,
            });
            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: res?.data?.response?.records,
            });
            localStorage.setItem(
                "userInfo",
                JSON.stringify(res?.data?.response?.records)
            );
        }
    } catch (error) {
        console.log(error.response?.data?.response?.status?.message);
        dispatch({
            type: USER_REGISTER_FAILED,
            payload: error.response?.data?.response?.status?.message,
        });
    }
};
