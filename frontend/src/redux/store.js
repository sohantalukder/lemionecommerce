import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "./reducers";
const cartItemsFromStorage = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];
const userInfoFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;
const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
    ? JSON.parse(localStorage.getItem("shippingAddress"))
    : {};
const paymentMethodFromStorage = localStorage.getItem("paymentMethod")
    ? JSON.parse(localStorage.getItem("paymentMethod"))
    : "";
const initialState = {
    cart: {
        cartItems: cartItemsFromStorage,
        shippingAddress: shippingAddressFromStorage,
        paymentMethod: paymentMethodFromStorage,
    },
    users: { userInfo: userInfoFromStorage },
};
const middleware = [thunk];
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
