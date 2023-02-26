import axios from "axios";
import {
    ORDER_CREATE_FAILED,
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
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
