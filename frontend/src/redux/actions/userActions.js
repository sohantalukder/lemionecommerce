import {
    USER_DELETE_FAIL,
    USER_DELETE_REQUEST,
    USER_DELETE_SUCCESS,
    USER_DETAILS_FAILED,
    USER_DETAILS_REQUEST,
    USER_DETAILS_RESET,
    USER_DETAILS_SUCCESS,
    USER_LIST_FAILED,
    USER_LIST_REQUEST,
    USER_LIST_RESET,
    USER_LIST_SUCCESS,
    USER_LOGIN_FAILED,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_REGISTER_FAILED,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_UPDATE_FAIL,
    USER_UPDATE_PROFILE_FAILED,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCCESS,
} from "../constants/userConstants";
import axios from "axios";
import { MY_ORDERS_LIST_RESET } from "../constants/orderConstants";
import { toast } from "react-hot-toast";
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
        dispatch({
            type: USER_LOGIN_FAILED,
            payload: error.response?.data?.response?.status?.message,
        });
    }
};

export const logout = () => (dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch({ type: USER_LOGOUT });
    dispatch({ type: USER_DETAILS_RESET });
    dispatch({ type: MY_ORDERS_LIST_RESET });
    dispatch({ type: USER_LIST_RESET });
};

export const registration = (name, email, password) => async (dispatch) => {
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
            `/api/users`,
            { name, email, password },
            config
        );
        if (res?.data?.response?.status.code === 201) {
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
        dispatch({
            type: USER_REGISTER_FAILED,
            payload: error.response?.data?.response?.status?.message,
        });
    }
};

export const getUserDetails = (id) => async (dispatch, getState) => {
    const { users: { userInfo } = {} } = getState();
    try {
        dispatch({
            type: USER_DETAILS_REQUEST,
        });
        const config = {
            headers: {
                "Content-Type": "application/json ",
                Authorization: `Bearer ${userInfo?.token}`,
            },
        };
        const res = await axios.get(`/api/users/${id}`, config);
        if (res?.data?.response?.status.code === 200) {
            dispatch({
                type: USER_DETAILS_SUCCESS,
                payload: res?.data?.response?.records,
            });
            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: res?.data?.response?.records,
            });
        }
    } catch (error) {
        dispatch({
            type: USER_DETAILS_FAILED,
            payload: error.response?.data?.response?.status?.message,
        });
    }
};

export const updateUserProfile = (user) => async (dispatch, getState) => {
    const { users: { userInfo } = {} } = getState();
    try {
        dispatch({
            type: USER_UPDATE_PROFILE_REQUEST,
        });
        const config = {
            headers: {
                "Content-Type": "application/json ",
                Authorization: `Bearer ${userInfo?.token}`,
            },
        };
        const res = await axios.put(`/api/users/profile`, user, config);
        if (res?.data?.response?.status.code === 200) {
            dispatch({
                type: USER_UPDATE_PROFILE_SUCCESS,
                payload: res?.data?.response?.records,
            });
        }
    } catch (error) {
        dispatch({
            type: USER_UPDATE_PROFILE_FAILED,
            payload: error.response?.data?.response?.status?.message,
        });
    }
};

export const listUsers = (user) => async (dispatch, getState) => {
    const { users: { userInfo } = {} } = getState();
    try {
        dispatch({
            type: USER_LIST_REQUEST,
        });
        const config = {
            headers: {
                "Content-Type": "application/json ",
                Authorization: `Bearer ${userInfo?.token}`,
            },
        };
        const res = await axios.get(`/api/users`, config);
        if (res?.data?.response?.status.code === 200) {
            dispatch({
                type: USER_LIST_SUCCESS,
                payload: res?.data?.response?.records,
            });
        }
    } catch (error) {
        dispatch({
            type: USER_LIST_FAILED,
            payload: error.response?.data?.response?.status?.message,
        });
    }
};

export const deleteUser = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_DELETE_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const res = await axios.delete(`/api/users/${id}`, config);
        if (res?.response?.status?.code === 200) {
            toast.success(res?.data?.response?.status?.message);
            dispatch({ type: USER_DELETE_SUCCESS });
        }
    } catch (error) {
        const message = error.response?.data?.response?.status?.message;
        if (message === "Not authorized, token failed") {
            dispatch(logout());
        }
        dispatch({
            type: USER_DELETE_FAIL,
            payload: message,
        });
    }
};

export const updateUser = (user) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_UPDATE_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const res = await axios.put(`/api/users/${user._id}`, user, config);

        dispatch({ type: USER_UPDATE_SUCCESS });

        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: res?.data?.response?.records,
        });

        dispatch({ type: USER_DETAILS_RESET });
    } catch (error) {
        const message = error.response?.data?.response?.status?.message;
        if (message === "Not authorized, token failed") {
            dispatch(logout());
        }
        dispatch({
            type: USER_UPDATE_FAIL,
            payload: message,
        });
    }
};
