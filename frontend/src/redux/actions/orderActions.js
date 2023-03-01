import axios from "axios";
import {
    MY_ORDERS_LIST_FAILED,
    MY_ORDERS_LIST_REQUEST,
    MY_ORDERS_LIST_SUCCESS,
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
            const res = await fetch(`/api/orders/${orderId}/pay`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                    Accept: "application/json",
                    Authorization: `Bearer ${userInfo?.token}`,
                },
                body: JSON.stringify(paymentResult),
            })
                .then((res) => res.json())
                .then((data) => {
                    return data;
                });
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

export const myOrdersList = () => async (dispatch, getState) => {
    const { users: { userInfo } = {} } = getState();
    try {
        dispatch({
            type: MY_ORDERS_LIST_REQUEST,
        });
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo?.token}`,
            },
        };
        const res = await axios.get(`/api/orders/myOrders`, config);
        if (res?.data?.response?.status.code === 200) {
            dispatch({
                type: MY_ORDERS_LIST_SUCCESS,
                payload: res?.data?.response?.records,
            });
        }
    } catch (error) {
        dispatch({
            type: MY_ORDERS_LIST_FAILED,
            payload: error.response?.data?.response?.status?.message,
        });
    }
};
