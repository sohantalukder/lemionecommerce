import { combineReducers } from "redux";
import { cartReducer } from "./reducers/cartReducers";
import {
    orderCreateReducer,
    orderDetailsReducer,
} from "./reducers/orderReducer";
import {
    productDetailsReducers,
    productListReducers,
} from "./reducers/productReducers";
import {
    userDetailsReducer,
    userLoginReducer,
    userRegisterReducer,
    userUpdateProfileReducer,
} from "./reducers/userReducers";

const reducer = combineReducers({
    productList: productListReducers,
    productDetails: productDetailsReducers,
    cart: cartReducer,
    users: userLoginReducer,
    registration: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
});
export default reducer;
