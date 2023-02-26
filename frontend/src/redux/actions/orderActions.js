import axios from "axios";
import {
    ORDER_CREATE_FAILED,
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
    ORDER_DETAILS_FAILED,
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_PAY_FAILED,
    ORDER_PAY_REQUEST,
    ORDER_PAY_SUCCESS,
} from "../constants/orderConstants";
export const createOrder = (order) => async (dispatch, getState) => {
    const { users: { userInfo } = {} } = getState();
    try {
        dispatch({
            type: ORDER_CREATE_REQUEST,
        });
        const config = {
            headers: {
                "Content-Type": "application/json ",
                Authorization: `Bearer ${userInfo?.token}`,
            },
        };
        const res = await axios.post(`/api/orders`, order, config);
        if (res?.data?.response?.status.code === 201) {
            dispatch({
                type: ORDER_CREATE_SUCCESS,
                payload: res?.data?.response?.records?.createdOrder,
            });
        }
    } catch (error) {
        dispatch({
            type: ORDER_CREATE_FAILED,
            payload: error.response?.data?.response?.status?.message,
        });
    }
};
export const getOrderDetails = (orderId) => async (dispatch, getState) => {
    const { users: { userInfo } = {} } = getState();
    try {
        dispatch({
            type: ORDER_DETAILS_REQUEST,
        });
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo?.token}`,
            },
        };
        const res = await axios.get(`/api/orders/${orderId}`, config);
        if (res?.data?.response?.status.code === 200) {
            dispatch({
                type: ORDER_DETAILS_SUCCESS,
                payload: res?.data?.response?.records,
            });
        }
    } catch (error) {
        dispatch({
            type: ORDER_DETAILS_FAILED,
            payload: error.response?.data?.response?.status?.message,
        });
    }
};

export const payOrder =
    (orderId, paymentResult) => async (dispatch, getState) => {
        const { users: { userInfo } = {} } = getState();
        try {
            dispatch({
                type: ORDER_PAY_REQUEST,
            });
            const config = {
                headers: {
                    "Content-Type": "application.json",
                    Authorization: `Bearer ${userInfo?.token}`,
                },
            };
            const res = await axios.put(
                `/api/orders/${orderId}/pay`,
                paymentResult,
                config
            );
            if (res?.data?.response?.status.code === 200) {
                dispatch({
                    type: ORDER_PAY_SUCCESS,
                    payload: res?.data?.response?.records,
                });
            }
        } catch (error) {
            dispatch({
                type: ORDER_PAY_FAILED,
                payload: error.response?.data?.response?.status?.message,
            });
        }
    };
